const hre = require("hardhat");

async function main(){
  const chai = await hre.ethers.getContractFactory("Chai");
  const chaiContract = await chai.deploy();
  await chaiContract.deployed();

  console.log("deployed address: ", chaiContract.address);
}

main().then(() => {
  console.log('contract deployed successfully')
}).catch((error) => {
  console.log(error)
});