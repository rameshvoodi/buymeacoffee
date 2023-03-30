// SPDX-License-Identifier: UNLICENSED

pragma solidity >= 0.5.0 < 0.9.0;

contract Chai {

    struct Memo{
        string name;
        string message;
        uint timestamp;
        address from;
    }
    Memo[] memos;
    
    address payable owner;

    constructor() {
        owner = payable(msg.sender);            
    }

    function createMemo(string memory _name, string memory _message )  public payable {
        require(msg.value > 0, "please pay more than 0 eth");
        owner.transfer(msg.value);
        memos.push(Memo(_name, _message, block.timestamp,msg.sender));
    }
    function getMemos() public view returns(Memo[] memory) {
        return memos;
    }
}