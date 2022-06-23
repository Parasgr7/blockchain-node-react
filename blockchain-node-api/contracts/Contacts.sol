// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Contacts {
    uint public count = 0;
    struct Contact {
      uint id;
      string name;
      string phone;
    }

    constructor() public {
      createContact('Hello Blockchain-Node-React App', '+1-8774561');
    }

    mapping(uint => Contact) public contacts;

    function createContact(string memory _name, string memory _phone) public {
      count++;
      contacts[count] = Contact(count, _name, _phone);
    }
  }
