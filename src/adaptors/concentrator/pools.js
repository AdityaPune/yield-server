const coins = {
  eth: ['0x0000000000000000000000000000000000000000', 'ethereum'],
  usdc: ['0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', 'usd-coin'],
  usdt: ['0xdAC17F958D2ee523a2206206994597C13D831ec7', 'usd-coin'],
  dai: ['0x6b175474e89094c44da98b954eedeac495271d0f', 'dai'],
  wbtc: ['0x2260fac5e5542a773aa44fbcfedf7c193bc2c599', 'bitcoin'],
  steth: ['0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84', 'staked-ether'],
  renBTC: ['0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D', 'renbtc'],

  crv: ['0xD533a949740bb3306d119CC777fa900bA034cd52', 'curve-dao-token'],
  cvxcrv: ['0x62b9c7356a2dc64a1969e19c23e4f579f9810aa7', 'convex-crv'],

  frax: ['0x853d955aCEf822Db058eb8505911ED77F175b99e', 'frax'],
  cvx: ['0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B', 'convex-finance'],
  fxs: ['0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0', 'frax-share'],
  crv3pool: ['0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490', 'lp-3pool-curve'],

  reth: ['0xae78736cd615f374d3085123a210448e74fc6393', 'rocket-pool-eth'],
  wstETH: ['0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0', 'wrapped-steth'],
  'UST(Wormhole)': [
    '0xa693B19d2931d498c5B318dF961919BB4aee87a5',
    'terrausd-wormhole',
  ],
  'UST(Terra)': [
    '0xa47c8bf37f92aBed4A126BDA807A7b7498661acD',
    'terrausd-wormhole',
  ],
};

module.exports = [
  {
    symbol: 'ETH-stETH',
    name: 'steth',
    coins: [coins.eth, coins.steth],
    coinDecimals: [18, 18],
    addresses: {
      swap: '0xDC24316b9AE028F1497c275EB9192a3Ea0f67022',
      lpToken: '0x06325440D014e39736583c165C2963BA99fAf14E',
    },
  },
  {
    symbol: 'FRAX-3Crv',
    name: 'frax',
    coins: [coins.frax, coins.crv3pool],
    coinDecimals: [18, 18],
    addresses: {
      swap: '0xd632f22692FaC7611d2AA1C0D552930D43CAEd3B',
      lpToken: '0xd632f22692FaC7611d2AA1C0D552930D43CAEd3B',
    },
  },
  {
    symbol: 'USDT-wBTC-WETH',
    name: 'tricrypto2',
    coins: [coins.usdt, coins.wbtc, coins.eth],
    coinDecimals: [6, 8, 18],
    addresses: {
      swap: '0xD51a44d3FaE010294C616388b506AcdA1bfAAE46',
      lpToken: '0xc4AD29ba4B3c580e6D59105FFf484999997675Ff',
    },
  },

  {
    symbol: 'cvxCRV-CRV',
    name: 'cvxcrv',
    coins: [coins.crv, coins.cvxcrv],
    coinDecimals: [18, 18],
    addresses: {
      swap: '0x9D0464996170c6B9e75eED71c68B99dDEDf279e8',
      lpToken: '0x9D0464996170c6B9e75eED71c68B99dDEDf279e8',
    },
  },
  {
    symbol: 'ETH-CRV',
    name: 'crveth',
    coins: [coins.eth, coins.crv],
    coinDecimals: [18, 18],
    addresses: {
      swap: '0x8301AE4fc9c624d1D396cbDAa1ed877821D7C511',
      lpToken: '0xEd4064f376cB8d68F770FB1Ff088a3d0F3FF5c4d',
    },
  },

  {
    symbol: 'ETH-CVX',
    name: 'cvxeth',
    coins: [coins.eth, coins.cvx],
    coinDecimals: [18, 18],
    addresses: {
      swap: '0xB576491F1E6e5E62f1d8F26062Ee822B40B0E0d4',
      lpToken: '0x3A283D9c08E8b55966afb64C515f5143cf907611',
    },
  },

  {
    symbol: 'FXS-cvxFXS',
    name: 'cvxfxs',
    coins: [coins.fxs, coins.fxs],
    coinDecimals: [18, 18],
    addresses: {
      swap: '0xd658A338613198204DCa1143Ac3F01A722b5d94A',
      lpToken: '0xF3A43307DcAFa93275993862Aae628fCB50dC768',
    },
  },

  {
    symbol: 'DAI-USDC-USDT',
    name: '3pool',
    coins: [coins.dai, coins.usdc, coins.usdt],
    coinDecimals: [18, 6, 6],
    addresses: {
      swap: '0xbEbc44782C7dB0a1A60Cb6fe97d0b483032FF1C7',
      lpToken: '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
    },
  },

  // {
  //   symbol: 'UST-3Crv',
  //   name: 'ust-wormhole',
  //   coins: [coins.ust, coins.crv3pool],
  //   coinDecimals: [6, 18],
  //   addresses: {
  //     swap: '0xCEAF7747579696A2F0bb206a14210e3c9e6fB269',
  //     lpToken: '0xCEAF7747579696A2F0bb206a14210e3c9e6fB269',
  //   },
  // },

  // {
  //   symbol: 'rETH-wstETH',
  //   name: 'RocketPoolETH',
  //   isShowEthApy: true,
  //   coins: [coins.rETH, coins.wstETH],
  //   coinDecimals: [18, 18],
  //   addresses: {
  //     swap: '0x447Ddd4960d9fdBF6af9a790560d0AF76795CB08',
  //     lpToken: '0x447Ddd4960d9fdBF6af9a790560d0AF76795CB08',
  //   },
  // },

  {
    symbol: 'renBTC-wBTC',
    name: 'ren',
    coins: [coins.renbtc, coins.wbtc],
    coinDecimals: [8, 8],
    addresses: {
      swap: '0x93054188d876f558f4a66B2EF1d97d16eDf0895B',
      lpToken: '0x49849C98ae39Fff122806C06791Fa73784FB3675',
    },
  },

  {
    symbol: 'PUSD-3Crv',
    name: 'pusd',
    coins: [
      coins.PUSD,
      coins.crv3pool
    ],
    coinDecimals: [18, 18],
    addresses: {
      swap: '0x8EE017541375F6Bcd802ba119bdDC94dad6911A1',
      lpToken: '0x8EE017541375F6Bcd802ba119bdDC94dad6911A1',
    },
  },

  {
    symbol: 'DAI-USDC-USDT-sUSD',
    name: 'susd',
    coins: [
      coins.dai,
      coins.usdc,
      coins.usdt,
      coins.SUSD
    ],
    coinDecimals: [18, 6, 6, 18],
    addresses: {
      swap: '0xA5407eAE9Ba41422680e2e00537571bcC53efBfD',
      lpToken: '0xC25a3A3b969415c80451098fa907EC722572917F',
    },
  },

  {
    symbol: 'ETH-sETH',
    name: 'seth',
    coins: [
      coins.eth,
      coins.seth
    ],
    coinDecimals: [18, 18],
    addresses: {
      swap: '0xc5424b857f758e906013f3555dad202e4bdb4567',
      lpToken: '0xA3D87FffcE63B53E0d54fAa1cc983B7eB0b74A9c',
    },
  },

  {
    symbol: 'renBTC-wBTC-sBTC',
    name: 'sbtc',
    coins: [
      coins.renBTC,
      coins.wbtc,
      coins.sBTC
    ],
    coinDecimals: [8, 8, 18],
    addresses: {
      swap: '0x7fC77b5c7614E1533320Ea6DDc2Eb61fa00A9714',
      lpToken: '0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3',
    },
  },

  {
    symbol: 'FRAX-USDC',
    name: 'fraxusdc',
    coins: [
      coins.frax,
      coins.usdc,
    ],
    coinDecimals: [18, 6],
    addresses: {
      swap: '0xDcEF968d416a41Cdac0ED8702fAC8128A64241A2',
      lpToken: '0x3175Df0976dFA876431C2E9eE6Bc45b65d3473CC',
    },
  },



  {
    symbol: 'MIM-3Crv',
    name: 'mim',
    coins: [
      coins.min,
      coins.crv3pool,
    ],
    coinDecimals: [18, 18],
    addresses: {
      swap: '0x5a6A4D54456819380173272A5E8E9B9904BdF41B',
      lpToken: '0x5a6A4D54456819380173272A5E8E9B9904BdF41B',
    },
  },

  {
    symbol: 'FRAX-FPI',
    name: 'fpifrax',
    coins: [
      coins.frax,
      coins.fpi,
    ],
    coinDecimals: [18, 18],
    addresses: {
      swap: '0xf861483fa7E511fbc37487D91B6FAa803aF5d37c',
      lpToken: '0x4704aB1fb693ce163F7c9D3A31b3FF4eaF797714',
    },
  },

  {
    symbol: 'alUSD-3Crv',
    name: 'alusd',
    coins: [
      coins.alUSD,
      coins.crv3pool,
    ],
    coinDecimals: [18, 18],
    addresses: {
      swap: '0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c',
      lpToken: '0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c',
    },
  },

  {
    symbol: 'cDAI-cUSDC',
    name: 'Compound',
    coins: [
      coins.cdai,
      coins.cusdc,
    ],
    coinDecimals: [8, 8],
    addresses: {
      swap: '0xA2B47E3D5c44877cca798226B7B8118F9BFb7A56',
      lpToken: '0x845838DF265Dcd2c412A1Dc9e959c7d08537f8a2',
    },
  },

  {
    symbol: 'DOLA-3Crv',
    name: 'dola',
    coins: [
      coins.DOLA,
      coins.crv3pool,
    ],
    coinDecimals: [18, 18],
    addresses: {
      swap: '0xAA5A67c256e27A5d80712c51971408db3370927D',
      lpToken: '0xAA5A67c256e27A5d80712c51971408db3370927D',
    },
  },

  {
    symbol: 'BUSD-3Crv',
    name: 'busdv2',
    coins: [
      coins.busd,
      coins.crv3pool,
    ],
    coinDecimals: [18, 18],
    addresses: {
      swap: '0x4807862AA8b2bF68830e4C8dc86D0e9A998e085a',
      lpToken: '0x4807862AA8b2bF68830e4C8dc86D0e9A998e085a',
    },
  },

  {
    symbol: 'EURs-USDC',
    name: 'eursusd',
    coins: [
      coins.eth,
      coins.usdc,
    ],
    coinDecimals: [18, 6],
    addresses: {
      swap: '0x98a7F18d4E56Cfe84E3D081B40001B3d5bD3eB8B',
      lpToken: '0x3D229E1B4faab62F621eF2F6A610961f7BD7b23B',
    },
  },

  {
    symbol: 'ETH-alETH',
    name: 'alETH',
    coins: [
      coins.eth,
      coins.eth,
    ],
    coinDecimals: [18, 18],
    addresses: {
      swap: '0xC4C319E2D4d66CcA4464C0c2B32c9Bd23ebe784e',
      lpToken: '0xC4C319E2D4d66CcA4464C0c2B32c9Bd23ebe784e',
    },
  },

  {
    symbol: 'agEUR-EURT-EURs',
    name: '3eur-pool',
    coins: [
      coins.agEUR,
      coins.eurt,
      coins.EURS
    ],
    coinDecimals: [18, 6, 2],
    addresses: {
      swap: '0xb9446c4Ef5EBE66268dA6700D26f96273DE3d571',
      lpToken: '0xb9446c4Ef5EBE66268dA6700D26f96273DE3d571',
    },
  },

  {
    symbol: 'LUSD-3Crv',
    name: 'lusd',
    coins: [
      coins.lusd,
      coins.crv3pool,
    ],
    coinDecimals: [18, 18],
    addresses: {
      swap: '0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA',
      lpToken: '0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA',
    },
  },

  {
    symbol: 'FRAX-FEI-alUSD',
    name: 'd3pool',
    coins: [
      coins.frax,
      coins.alUSD,
      coins.fei
    ],
    coinDecimals: [18, 18, 18],
    addresses: {
      swap: '0xBaaa1F5DbA42C3389bDbc2c9D2dE134F5cD0Dc89',
      lpToken: '0xBaaa1F5DbA42C3389bDbc2c9D2dE134F5cD0Dc89',
    },
  },
];
