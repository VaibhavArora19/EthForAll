export const contractAddress = '0xdFC21507A9C15832e6A9320A18eBd1a792144dE2';

export const ABI = [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "description",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "streamId",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "flowRate",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "price",
        "type": "uint256"
      }
    ],
    "name": "addStream",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_id",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "description",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "organisation",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "thumbnailCid",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "videoCid",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "flowRate",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "price",
        "type": "uint256"
      }
    ],
    "name": "addVideo",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAllStreams",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "description",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "streamID",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "flowRate",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "price",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "creator",
            "type": "address"
          }
        ],
        "internalType": "struct EthForAll.LiveStream[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAllVideos",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "ID",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "description",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "organization",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "thumbnailCid",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "videoCid",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "flowRate",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "price",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "creator",
            "type": "address"
          }
        ],
        "internalType": "struct EthForAll.video[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_id",
        "type": "string"
      }
    ],
    "name": "getSingleVideo",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "ID",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "description",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "organization",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "thumbnailCid",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "videoCid",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "flowRate",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "price",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "creator",
            "type": "address"
          }
        ],
        "internalType": "struct EthForAll.video",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "streams",
    "outputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "description",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "streamID",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "flowRate",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "price",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "creator",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "name": "videoById",
    "outputs": [
      {
        "internalType": "string",
        "name": "ID",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "description",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "organization",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "thumbnailCid",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "videoCid",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "flowRate",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "price",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "creator",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "videos",
    "outputs": [
      {
        "internalType": "string",
        "name": "ID",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "description",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "organization",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "thumbnailCid",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "videoCid",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "flowRate",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "price",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "creator",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];