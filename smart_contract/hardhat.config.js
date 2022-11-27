//https://eth-goerli.g.alchemy.com/v2/LyyZrj7ior2E5ASU9rBwC2_2Q6dM79uN

require('@nomiclabs/hardhat-waffle')
const API_URL = "https://polygon-mumbai.g.alchemy.com/v2/ENbwxd4VuV1J_6m7LmkY0PI0lXFUT5YT";
const PRIVATE_KEY = "26e263f40816dc804448c7bc7f7b440e482296d33f201e0b3e8e5130c6974d1e";
module.exports = {
  solidity: '0.8.0',
  networks: {
    mumbai: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    }
  }
}