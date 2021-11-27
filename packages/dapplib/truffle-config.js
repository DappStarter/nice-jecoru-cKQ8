require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enrich sun food play random saddle exchange coral light army genius'; 
let testAccounts = [
"0x29be870e671eb2a1738dfbdf20ace6ac74d7a543db03af10f30b332e3d2ec727",
"0xefd429c93ebd41fc54ca8a987d438f688351a2df42079289ae851279bde11510",
"0x4e7e8e0c8115cde01139125e61d0487362ffe996f773b3288c4e5db842f8d66d",
"0x097391676ca19dad723f15275ebe16b55187598cba3b65f1f943311b1ded9970",
"0x604f0cc830f746fc9cd307c8938cb3e0c7a168ca739626a400c18a622d91975e",
"0x3712cbb56b729ff0ffe5fcb1d2a1b3d4c24b6aabab94b332c7942b0d53821d76",
"0x3b8ba0a5d0ccf6b7901e125b556a4d99a65327a13e470cba6c09cb76f8d49ef4",
"0xfccd8c67b1f41db61c4c8b591caf0563a147420ef7ba7368ab6e19e780d72a2b",
"0xb3548752fe9d0f4d08db71009d8d75630bb55dd943316b6e440614d191f13c1c",
"0x254d6e41990ce6d2b5276ab6964979776ec2b9e3f4e530f18039b6dac8b5da2c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

