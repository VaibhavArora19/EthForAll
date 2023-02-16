//SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

contract EthForAll {

    struct LiveStream {
        string ID;
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
        string thumbnailCid;
        string videoCid;
        uint flowRate;
        uint price;
        address creator;
    }

    LiveStream[] public streams;
    video[] public videos;

    mapping(address => address[]) public subscribers;

    mapping(string => video) public videoById;
    mapping(string => LiveStream) public streamById;

    function addStream(string memory Id, string memory name, string memory description, string memory streamId, uint flowRate, uint price) public {
        LiveStream memory newStream = LiveStream(Id, name, description, streamId, flowRate, price, msg.sender);
        streams.push(newStream);
        streamById[Id] = newStream;
    }

    //the _id will be same as the livepeer id
    function addVideo(string memory _id, string memory name, string memory description, string memory organisation, string memory thumbnailCid, string memory videoCid, uint flowRate, uint price) public {
        video memory newVideo = video(_id, name, description, organisation, thumbnailCid, videoCid, flowRate, price, msg.sender);
        videos.push(newVideo);
        videoById[_id] = newVideo;
    }

    function getSingleVideo(string memory _id) public view returns(video memory){
        return videoById[_id];
    }

    function getAllVideos() public view returns(video[] memory) {
        return videos;
    }

    function getAllStreams () public view returns(LiveStream[] memory) {
        return streams;
    }  

    function addSubscriber(address creator) public {
        subscribers[creator].push(msg.sender);
    }

    function getSubscribers(address creator) public view returns(address[] memory) {
        return subscribers[creator];
    }

    function getSingleStream(string memory _id) public view returns(LiveStream memory) {
        return streamById[_id];
    }
    fallback() external payable{}
    receive() external payable{}
}
