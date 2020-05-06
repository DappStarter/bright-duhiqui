require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give nation flush special drift rate stick artwork imitate prize equal gasp'; 
let testAccounts = [
"0x116eb1bb87c88730dbd3dddfda2413a8540d85b49bd41617cd7a855dcefd8780",
"0x31def3ef6cd13f381bf76acedd74f868a42236fad476b9c45c2f06fd5d80c4f1",
"0xf1a2cd6b2fa3fb4413e23a4fc1336fecb076e5ae155f1d810c1a980e94bd3169",
"0xc0457cf582533ed0e219543953047c5c03ed2d80453aca722db91d2603d7d15d",
"0x521b0e665a81441eff70d7cd3e46c5f195dfb7f34ebe432704b581ab75c4f70a",
"0x5ac04af536cb49a78bcf8f45acb3481b5db7209a2394e708e9a5d4fe215de12f",
"0x406f1521364a68ec77ce33cf4905e86e34c645f053a4be7ed0b67cdbffef1e4e",
"0x000ec909dc51414501a6007738b0161dbb7ef4dfe2eb312c82932780d4c082d8",
"0x9dcfff2860376b7d5593065112b254d611ddf1f1de1e465555c1c62d6a9a1aa1",
"0x38f79559cccbe8a7d9b722ebf8b49a0e53b243d20c296a7a8141ddbc8ada08ad"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
