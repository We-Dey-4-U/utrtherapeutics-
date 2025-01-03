// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Therapeutics is ERC20 {
    constructor() ERC20("Therapeutics", "$UTR") {
        _mint(msg.sender, 1000000000000000000000000000); // 1 billion tokens with 18 decimals
    }
}