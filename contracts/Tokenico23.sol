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
    function decimals() external view returns (uint8);
}

contract TokenICO {
    address public owner;
    address public tokenAddress;
    uint256 public tokenSalePrice;
    uint256 public soldTokens;

    // ✅ Added min & max purchase limits
     bool public isSaleActive = true;
    uint256 public minPurchase = 100 * 10**18; // Minimum 100 tokens
    uint256 public maxPurchase = 5000 * 10**18; // Maximum 5000 tokens
    mapping(address => uint256) public userPurchases; // Track user purchases
   

   //A modifier to restrict certain functions to the contract owner.
    modifier onlyOwner() {
        require(msg.sender == owner, "Only contract owner can perform this action");
        _;
    }
    //The constructor sets the deployer of the contract as the owner.
    constructor() {
        owner = msg.sender;
    }

    //Allows the owner to set the ERC-20 token being sold.
    function updateToken(address _tokenAddress) public onlyOwner {
        require(_tokenAddress != address(0), "Invalid token address");
        tokenAddress = _tokenAddress;
    }

     //Sets the price of one token in BNB.
    function updateTokenSalePrice(uint256 _tokenSalePrice) public onlyOwner {
        require(_tokenSalePrice > 0, "Token sale price must be greater than zero");
        tokenSalePrice = _tokenSalePrice;
    }

    // ✅ Owner can update purchase limits
    //Allows the owner to adjust purchase limits.
    function updateMinPurchase(uint256 _min) public onlyOwner {
        require(_min > 0, "Minimum must be greater than zero");
        minPurchase = _min;
    }

    function updateMaxPurchase(uint256 _max) public onlyOwner {
        require(_max > minPurchase, "Max must be greater than min");
        maxPurchase = _max;
    }
      //A safe multiplication function to prevent overflow errors.
    function multiply(uint256 x, uint256 y) internal pure returns (uint256 z) {
        require(y == 0 || (z = x * y) / y == x, "Multiplication overflow");
    }
      //Enables or disables the token sale.

   // Ensures the token sale is active.
    //Ensures a valid token address is set.
    //Ensures the user is buying more than 0 tokens.
    //Ensures the correct amount of BNB is sent.
     function buyToken(uint256 _tokenAmount) public payable {
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

        // ✅ Update state before transferring tokens
        userPurchases[msg.sender] += scaledAmount;
        soldTokens += _tokenAmount;

        
         // Transfer tokens to buyer
        require(token.transfer(msg.sender, scaledAmount), "Token transfer failed");

        // ✅ Use call() for better gas handling and prevent reentrancy
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

    function withdrawAllTokens() public onlyOwner {
        ERC20 token = ERC20(tokenAddress);
        uint256 balance = token.balanceOf(address(this));
        require(balance > 0, "No tokens to withdraw");

        require(token.transfer(owner, balance), "Token transfer failed");
    }
}