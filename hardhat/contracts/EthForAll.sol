//SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

contract EthForAll {

    struct LiveStream {
        string name;
        string description;
        string streamID;
        uint flowRate;
        uint price;
        address creator;
    }

    struct video {
        string ID;
        string name;
        string description;
        string organization;
        string cid;
        uint flowRate;
        uint price;
        address creator;
    }

    LiveStream[] public streams;
    video[] public videos;

    mapping(string => video) public videoById;

    function addStream(string memory name, string memory description, string memory streamId, uint flowRate, uint price) public {
        LiveStream memory newStream = LiveStream(name, description, streamId, flowRate, price, msg.sender);
        streams.push(newStream);
    }

    //the _id will be same as the livepeer id
    function addVideo(string memory _id, string memory name, string memory description, string memory organisation, string memory cid, uint flowRate, uint price) public {
        video memory newVideo = video(_id, name, description, organisation, cid, flowRate, price, msg.sender);
        videos.push(newVideo);
        videoById[_id] = newVideo;
    }

    function getSingleVideo(string memory _id) public view returns(video memory){
        return videoById[_id];
    }

}
