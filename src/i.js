const Web3 = require('web3');

// 连接到以太坊节点
const web3 = new Web3('https://mainnet.infura.io/v3/your_infura_project_id');

// 构建交易对象
const txObject = {
  from: 'your_wallet_address',
  to: 'recipient_address',
  value: web3.utils.toWei('0.1', 'ether')
};

// 签名交易并发送
web3.eth.accounts.signTransaction(txObject, 'your_private_key')
  .then(signedTx => {
    web3.eth.sendSignedTransaction(signedTx.rawTransaction)
      .on('receipt', console.log);
  });