require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

const GOERLI_KEY = process.env.GOERLI_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  networks: {
    goerli: {
      url: GOERLI_KEY,
      accounts: [PRIVATE_KEY]
    }
  },
  solidity: "0.8.18",
};
