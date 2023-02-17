const {ethers} = require("hardhat");

async function main() {

  const contractFactory = await ethers.getContractFactory('EthForAll');

  const contract = await contractFactory.deploy();

  await contract.deployed();

  console.log('Contract is deployed at address ', contract.address);
}

main();

//0x51f037a83e81BC0bb5087Ebf61B09bFC4e4C8939