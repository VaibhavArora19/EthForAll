const {ethers} = require("hardhat");

async function main() {

  const contractFactory = await ethers.getContractFactory('EthForAll');

  const contract = await contractFactory.deploy();

  await contract.deployed();

  console.log('Contract is deployed at address ', contract.address);
}

main();

//0xddcca7874717A32fF4e44Bd7334bc1948BA5bc26