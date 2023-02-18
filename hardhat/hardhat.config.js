require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const QUICKNODE_RPC = "https://winter-autumn-gas.matic-testnet.discover.quiknode.pro/23758c0b2ec14cfd8453ca36ee42108792f26a65/";
module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: QUICKNODE_RPC,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
