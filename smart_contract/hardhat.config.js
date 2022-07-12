require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/v5yAQyoxWdn7tuY17cu_8XukYLJnrNMR',
      accounts: [ '4759a9c1a791df714f95cf1597cc72cf448dd50b0e8c42ffec0381019f5dd8d2' ]
    }
  }
}