const {ethers} = require("hardhat");

async function main() {

  const contractFactory = await ethers.getContractFactory('EthForAll');

  const contract = await contractFactory.deploy();

  await contract.deployed();

  console.log('Contract is deployed at address ', contract.address);
}

main();

//0xBC3351d229a16E266183B0f84eA82204B7c5C65C