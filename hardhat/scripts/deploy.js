const {ethers} = require("hardhat");

async function main() {

  const contractFactory = await ethers.getContractFactory('EthForAll');

  const contract = await contractFactory.deploy();

  await contract.deployed();

  console.log('Contract is deployed at address ', contract.address);
}

main();

//0xdFC21507A9C15832e6A9320A18eBd1a792144dE2