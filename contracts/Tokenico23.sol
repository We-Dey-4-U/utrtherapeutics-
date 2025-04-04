// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

interface ERC20 {
    function transfer(address recipient, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
    function allowance(address owner, address spender) external view returns (uint256);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    function symbol() external view returns (string memory);
    function totalSupply() external view returns (uint256);
    function name() external view returns (string memory);
}

contract TokenICO is ReentrancyGuard {
    using Address for address payable;

    address public owner;
    address public tokenAddress;
    uint256 public tokenSalePrice;
    uint256 public soldTokens;
    uint256 public priceBuffer = 0.001 ether; // Buffer range for gas fluctuations

    modifier onlyOwner() {
        require(msg.sender == owner, "Only contract owner can perform this action");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function updateToken(address _tokenAddress) external onlyOwner {
        tokenAddress = _tokenAddress;
    }

    function updateTokenSalePrice(uint256 _tokenSalePrice) external onlyOwner {
        tokenSalePrice = _tokenSalePrice;
    }

    function buyToken(uint256 _tokenAmount) external payable nonReentrant {
        require(_tokenAmount >= 10, "Minimum purchase is 10 tokens");
        require(_tokenAmount <= 1_000_000, "Maximum purchase is 1,000,000 tokens");
        uint256 requiredEther = _tokenAmount * tokenSalePrice;
        require(
            msg.value >= requiredEther - priceBuffer && msg.value <= requiredEther + priceBuffer,
            "Ether amount not within acceptable range"
        );

        ERC20 token = ERC20(tokenAddress);
        uint256 contractBalance = token.balanceOf(address(this));
        require(_tokenAmount * 1e18 <= contractBalance, "Not enough tokens left for sale");

        require(token.transfer(msg.sender, _tokenAmount * 1e18), "Token transfer failed");
        (bool success, ) = payable(owner).call{value: msg.value}("");
        require(success, "Ether transfer failed");

        soldTokens += _tokenAmount;
    }

    function getTokenDetails() external view returns (
        string memory name,
        string memory symbol,
        uint256 balance,
        uint256 supply,
        uint256 tokenPrice,
        address tokenAddr
    ) {
        ERC20 token = ERC20(tokenAddress);
        return (
            token.name(),
            token.symbol(),
            token.balanceOf(address(this)),
            token.totalSupply(),
            tokenSalePrice,
            tokenAddress
        );
    }

    function transferToOwner(uint256 _amount) external onlyOwner nonReentrant {
        require(address(this).balance >= _amount, "Insufficient contract balance");
        (bool success, ) = payable(owner).call{value: _amount}("");
        require(success, "Ether transfer failed");
    }

    function transferEther(address payable _receiver, uint256 _amount) external onlyOwner nonReentrant {
        require(address(this).balance >= _amount, "Insufficient contract balance");
        (bool success, ) = _receiver.call{value: _amount}("");
        require(success, "Ether transfer failed");
    }

    function withdrawAllTokens() external onlyOwner nonReentrant {
        ERC20 token = ERC20(tokenAddress);
        uint256 balance = token.balanceOf(address(this));
        require(balance > 0, "No tokens to withdraw");
        require(token.transfer(owner, balance), "Transfer failed");
    }
}
