require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/v5yAQyoxWdn7tuY17cu_8XukYLJnrNMR',
      accounts: [ '' ]
    }
  }
}