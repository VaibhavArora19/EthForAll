//SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

contract EthForAll {

    struct LiveStream {
        string name;
        string description;
        string streamID;
        uint flowRate;
        uint price;
    }

    struct video {
        string name;
        string description;
        string category;
        string organization;
        string cid;
    }

    LiveStream[] public streams;

    function addStream(string memory name, string memory description, string memory streamId, uint flowRate, uint price) public {
        LiveStream memory newStream = LiveStream(name, description, streamId, flowRate, price);
        streams.push(newStream);
    }

}
