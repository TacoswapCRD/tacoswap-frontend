import React from 'react';
import BigNumber from 'bignumber.js/bignumber'
import taco from '../../assets/img/taco.png'

export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}

export const addressMap = {
  uniswapFactory: '0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95',
  uniswapFactoryV2: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  YFI: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
  YCRV: '0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8',
  UNIAmpl: '0xc5be99a02c6857f9eac67bbce58df5572498f40c',
  WETH: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  UNIRouter: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
  LINK: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
  MKR: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
  SNX: '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F',
  COMP: '0xc00e94Cb662C3520282E6f5717214004A7f26888',
  LEND: '0x80fB784B7eD66730e8b1DBd9820aFD29931aab03',
  TACOYCRV: '0x2C7a51A357d5739C5C74Bf3C96816849d2c9F726',
}

export const contractAddresses = {
  Taco: {
    1: '0x41C028a4C1F461eBFC3af91619b240004ebAD216',
    3: '0x253E8Aa11D65f91af5b47e87efDAf369E1C1C413',
  },
  masterChef: {
    1: '0x7F7710e0c7C5C0FF043963dd22C3988e8bDb7AcC',
    3: '0xc9B52a983A2115C961700c1cB4fec4F0c43f37F9',
  },
  weth: {
    1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    3: '0xc778417e063141139fce010982780140aa0cd5ab',
  },
}

/*
Sushi SLP token Address on mainnet for reference
==========================================
0  USDT 0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852
1  USDC 0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc
2  DAI  0xa478c2975ab1ea89e8196811f51a7b7ade33eb11
3  sUSD 0xf80758ab42c3b07da84053fd88804bcb6baa4b5c
4  COMP 0xcffdded873554f362ac02f8fb1f02e5ada10516f
5  LEND 0xab3f9bf1d81ddb224a2014e98b238638824bcf20
6  SNX  0x43ae24960e5534731fc831386c07755a2dc33d47
7  UMA  0x88d97d199b9ed37c29d846d00d443de980832a22
8  LINK 0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974
9  BAND 0xf421c3f2e695c2d4c0765379ccace8ade4a480d9
10 AMPL 0xc5be99a02c6857f9eac67bbce58df5572498f40c
11 YFI  0x2fdbadf3c4d5a8666bc06645b8358ab803996e28
12 TACO 0xce84867c3c02b05dc570d0135103d3fb9cc19433
*/

export const supportedPools = [
  {
    pid: 0,
    lpAddresses: {
      1: '0xcAaa93712BDAc37f736C323C93D4D5fDEFCc31CC',
      3: '0xB16789a451F97C1A37EE5c7bfbA86B0ae1cff0e7',
    },
    tokenAddresses: {
      1: '0xcAaa93712BDAc37f736C323C93D4D5fDEFCc31CC',
      3: '0xB16789a451F97C1A37EE5c7bfbA86B0ae1cff0e7',
    },
    name: 'CRD Hodlers',
    symbol: 'CRD Token',
    tokenSymbol: 'CRD',
    icon: '🐌',
  },
  {
    pid: 1,
    lpAddresses: {
      1: '0x526914CE1611849b9e1133Ff8F8b03A8fAa295Cb',
      3: '0xd35d3560b51273361a5feb0183619a4b53cb683b',
    },
    tokenAddresses: {
      1: '0xcaaa93712bdac37f736c323c93d4d5fdefcc31cc',
      3: '0x253e8aa11d65f91af5b47e87efdaf369e1c1c413',
    },
    name: 'CRD-ETH UniSwap',
    symbol: 'CRD-ETH UNI V2 LP token',
    tokenSymbol: 'TACOS',
    icon: '🐢',
  },
  {
    pid: 7,
    lpAddresses: {
      1: '0xD34361F7830FDf2Ca6D7023a32A776Db39762CE9',
    },
    tokenAddresses: {
      1: '0xD34361F7830FDf2Ca6D7023a32A776Db39762CE9',
    },
    name: 'TACO-ETH UniSwap',
    symbol: 'TACO UNI V2 LP token',
    tokenSymbol: 'TACOS',
    icon: '🌮',
  },
  {
    pid: 2,
    lpAddresses: {
      1: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    },
    tokenAddresses: {
      1: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    },
    name: 'Ether Madness',
    symbol: 'ETH',
    tokenSymbol: 'ETH',
    icon: '🐢',
  },
  {
    pid: 3,
    lpAddresses: {
      1: '0xc3d03e4f041fd4cd388c549ee2a29a9e5075882f',
    },
    tokenAddresses: {
      1: '0x6b175474e89094c44da98b954eedeac495271d0f',
    },
    name: 'Dai-ETH SushiSwap',
    symbol: 'DAI-ETH Sushi SLP token',
    tokenSymbol: 'DAI',
    icon: '🦆',
  },
  {
    pid: 4,
    lpAddresses: {
      1: '0x795065dCc9f64b5614C407a6EFDC400DA6221FB0',
    },
    tokenAddresses: {
      1: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
    },
    name: 'Sushi-ETH SushiSwap',
    symbol: 'SUSHI-ETH Sushi SLP token',
    tokenSymbol: 'SUSHI',
    icon: '🦍',
  },
  {
    pid: 5,
    lpAddresses: {
      1: '0x06da0fd433c1a5d7a4faa01111c044910a184553',
    },
    tokenAddresses: {
      1: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
    },
    name: 'USDT-ETH SushiSwap',
    symbol: 'USDT-ETH Sushi SLP token',
    tokenSymbol: 'USDT',
    icon: '🦑',
  },
  {
    pid: 6,
    lpAddresses: {
      1: '0x088ee5007C98a9677165D78dD2109AE4a3D04d0C',
    },
    tokenAddresses: {
      1: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
    },
    name: 'YEARN-ETH SushiSwap',
    symbol: 'YEARN-ETH Sushi SLP token',
    tokenSymbol: 'YEARN',
    icon: '🦖',
  },
]
