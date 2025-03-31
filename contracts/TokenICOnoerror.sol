// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

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
    function decimals() external view returns (uint8);
}

contract TokenICO is ReentrancyGuard {
    address public owner;
    address public tokenAddress;
    uint256 public tokenSalePrice;
    uint256 public soldTokens;

    bool public isSaleActive = true;
    uint256 public minPurchase = 10 * 10**18;
    uint256 public maxPurchase = 1_000_000 * 10**18;
    mapping(address => uint256) public userPurchases;
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Only contract owner can perform this action");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function resetSale() public onlyOwner {
        soldTokens = 0;
        tokenSalePrice = 0;
        tokenAddress = address(0);
    }

    function updateToken(address _tokenAddress) public onlyOwner {
        require(_tokenAddress != address(0), "Invalid token address");
        resetSale();
        tokenAddress = _tokenAddress;
    }

    function updateTokenSalePrice(uint256 _tokenSalePrice) public onlyOwner {
        require(_tokenSalePrice > 0, "Token sale price must be greater than zero");
        tokenSalePrice = _tokenSalePrice;
    }

    function updateMinPurchase(uint256 _min) public onlyOwner {
        require(_min > 0, "Minimum must be greater than zero");
        minPurchase = _min;
    }

    function updateMaxPurchase(uint256 _max) public onlyOwner {
        require(_max > minPurchase, "Max must be greater than min");
        maxPurchase = _max;
    }

    function buyToken(uint256 _tokenAmount) public payable nonReentrant {
        require(tokenAddress != address(0), "Token address not set");
        require(_tokenAmount > 0, "Token amount must be greater than zero");

        uint256 totalCost = _tokenAmount * tokenSalePrice;
        require(msg.value == totalCost, "Incorrect BNB amount sent");

        ERC20 token = ERC20(tokenAddress);
        uint256 decimals = token.decimals();
        uint256 scaledAmount = _tokenAmount * (10 ** decimals);

        require(scaledAmount >= minPurchase, "Purchase below minimum limit");
        require(userPurchases[msg.sender] + scaledAmount <= maxPurchase, "Purchase exceeds maximum limit");
        require(scaledAmount <= token.balanceOf(address(this)), "Not enough tokens left for sale");

        userPurchases[msg.sender] += scaledAmount;
        soldTokens += _tokenAmount;

        require(token.transfer(msg.sender, scaledAmount), "Token transfer failed");

        (bool success, ) = payable(owner).call{value: msg.value}("");
        require(success, "BNB transfer failed");
    }

    function getTokenDetails() public view returns (
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

    function transferToOwner() external onlyOwner {
        uint256 contractBalance = address(this).balance;
        require(contractBalance > 0, "No BNB to transfer");

        (bool success, ) = owner.call{value: contractBalance}("");
        require(success, "Transfer failed");
    }

    function transferEther(address payable _receiver, uint256 _amount) external onlyOwner {
        require(_amount > 0 && _amount <= address(this).balance, "Invalid amount");

        (bool success, ) = _receiver.call{value: _amount}("");
        require(success, "Transfer failed");
    }

    function withdrawAllTokens() public onlyOwner {
        ERC20 token = ERC20(tokenAddress);
        uint256 balance = token.balanceOf(address(this));
        require(balance > 0, "No tokens to withdraw");

        require(token.transfer(owner, balance), "Token transfer failed");
    }
}
