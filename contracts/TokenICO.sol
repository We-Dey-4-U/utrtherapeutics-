// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface ERC20 {
    function transfer(address recipient, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
    function allowance(address owner, address spender) external view returns (uint256);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    function symbol() external view returns (string memory);
    function totalSupply() external view returns (uint256);
    function name() external view returns (string memory);
    function decimals() external view returns (uint8); // Added decimals
}

contract TokenICO {
    address public owner;
    address public tokenAddress;
    uint256 public tokenSalePrice;
    uint256 public soldTokens;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only contract owner can perform this action");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function updateToken(address _tokenAddress) public onlyOwner {
        require(_tokenAddress != address(0), "Invalid token address");
        tokenAddress = _tokenAddress;
    }

    function updateTokenSalePrice(uint256 _tokenSalePrice) public onlyOwner {
        require(_tokenSalePrice > 0, "Token sale price must be greater than zero");
        tokenSalePrice = _tokenSalePrice;
    }

    function multiply(uint256 x, uint256 y) internal pure returns (uint256 z) {
        require(y == 0 || (z = x * y) / y == x, "Multiplication overflow");
    }

    function buyToken(uint256 _tokenAmount) public payable {
        require(tokenAddress != address(0), "Token address not set");
        require(_tokenAmount > 0, "Token amount must be greater than zero");
        require(msg.value == multiply(_tokenAmount, tokenSalePrice), "Incorrect BNB amount sent");

        ERC20 token = ERC20(tokenAddress);
        uint256 decimals = token.decimals();
        uint256 scaledAmount = _tokenAmount * (10 ** decimals);

        require(scaledAmount <= token.balanceOf(address(this)), "Not enough tokens left for sale");

        // Transfer tokens to buyer
        require(token.transfer(msg.sender, scaledAmount), "Token transfer failed");

        // Transfer Ether to owner
        payable(owner).transfer(msg.value);

        soldTokens += _tokenAmount;
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

    function withdrawAllTokens() public onlyOwner {
        ERC20 token = ERC20(tokenAddress);
        uint256 balance = token.balanceOf(address(this));
        require(balance > 0, "No tokens to withdraw");

        require(token.transfer(owner, balance), "Token transfer failed");
    }
}