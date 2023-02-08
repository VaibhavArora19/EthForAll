//SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

contract EthForAll {

    struct LiveStream {
        string name;
        string description;
        string streamID;
        bool isLive;
    }

    struct video {
        string name;
        string description;
        string category;
        string organization;
        string cid;
    }

}
