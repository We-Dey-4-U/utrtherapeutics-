// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Therapeutics is ERC20 {
    constructor() ERC20("Therapeutics", "$UTRx") {
        _mint(msg.sender, 10000000 * 10 ** decimals()); // 10 million tokens with 18 decimals
    }
}