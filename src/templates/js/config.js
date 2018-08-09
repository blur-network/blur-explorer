var config = {
    testnet: false, // this is adjusted page.h if needed. dont need to change manually
    stagenet: false, // this is adjusted page.h if needed. dont need to change manually
    coinUnitPlaces: 12,
    txMinConfirms: 10,         // corresponds to CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE in Monero
    txCoinbaseMinConfirms: 25, // corresponds to CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW in Monero
    coinSymbol: 'BLUR',
    openAliasPrefix: "blur",
    coinName: 'Blur',
    coinUriPrefix: 'blur:',
    addressPrefix: 0x1e4d,
    integratedAddressPrefix: 0x3d26,
    subAddressPrefix: 0x2195,
    addressPrefixTestnet: 0x04cc,
    integratedAddressPrefixTestnet: 0x03bb,
    subAddressPrefixTestnet: 0x02ab,
    addressPrefixStagenet: 0x0074,
    integratedAddressPrefixStagenet: 0x06a4,
    subAddressPrefixStagenet: 0x0234,
    feePerKB: new JSBigInt('2000000000'),//20^10 - for testnet its not used, as fee is dynamic.
    dustThreshold: new JSBigInt('1000000000'),//10^10 used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
    txChargeRatio: 0.5,
    defaultMixin: 4, // minimum mixin for hardfork v5
    txChargeAddress: '',
    idleTimeout: 30,
    idleWarningDuration: 20,
    maxBlockNumber: 500000000,
    avgBlockTime: 60,
    debugMode: false
};
