var config = {
    testnet: false, // this is adjusted page.h if needed. dont need to change manually
    stagenet: false, // this is adjusted page.h if needed. dont need to change manually
    coinUnitPlaces: 12,
    txMinConfirms: 10,         // corresponds to CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE in Monero
    txCoinbaseMinConfirms: 10, // corresponds to CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW in Monero
    coinSymbol: 'BLUR',
    openAliasPrefix: "BLUR",
    coinName: 'BLUR',
    coinUriPrefix: 'blur:',
    addressPrefix: 0x3800,
    integratedAddressPrefix: 0x7081,
    subAddressPrefix: 0x1080,
    addressPrefixTestnet: 0x3800,
    integratedAddressPrefixTestnet: 0x7081,
    subAddressPrefixTestnet: 0x1080,
    addressPrefixStagenet: 0x3800,
    integratedAddressPrefixStagenet: 0x7081,
    subAddressPrefixStagenet: 0x1080,
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
