// https://eth-ropsten.alchemyapi.io/v2/oOAK3ohKg5r_WDgAv2BXob87INoTqSCr

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/oOAK3ohKg5r_WDgAv2BXob87INoTqSCr',
      accounts: [ '9681daf50c3f061baf2121d7e40cde37b2427bdbae2e14f60becfb3a21738dd2' ]
    }
  }
}