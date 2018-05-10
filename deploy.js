const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  //'metamask Mnemonic' , 'infura rinkeby api'
  'circle whip hand zero solar vehicle mammal key eternal year bachelor frequent',
  'https://rinkeby.infura.io/SdMrVoP9IaSUAgqPEley'
);

const web3 = new Web3(provider);

//make function for async & await
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account ', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: '0x'+bytecode })
    .send({  gas: '1000000', gasPrice: web3.utils.toWei('2','gwei'), from: accounts[0] });

  console.log(interface);
  console.log('Contract deployed to ', result.options.address);
};
deploy();
