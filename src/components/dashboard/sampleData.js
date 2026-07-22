// Sample/preview data only — not connected to any real account or broker.
// Sourced from a 4-week demo-account run (Vantage Markets MT5, account
// 25632094, 22 Jun – 21 Jul 2026) so the preview reflects realistic shape
// and scale. Still clearly labeled as a preview — no live broker feed yet.

export const sampleAccount = {
  accountNumber: "25632094",
  balance: 14907.00,
  equity: 12374.61,
  unrealizedPnl: -2532.39,
  startingBalance: 10000,
  connectedSince: "22 Jun 2026",
  strategy: "Mean reversion · FX",
  platform: "MT5",
};

export const balanceCurve = [
  {
    "t": "19 Jun",
    "balance": 10000.0
  },
  {
    "t": "22 Jun",
    "balance": 9990.64
  },
  {
    "t": "23 Jun",
    "balance": 9986.26
  },
  {
    "t": "24 Jun",
    "balance": 9984.04
  },
  {
    "t": "25 Jun",
    "balance": 9981.82
  },
  {
    "t": "26 Jun",
    "balance": 10251.35
  },
  {
    "t": "29 Jun",
    "balance": 10562.78
  },
  {
    "t": "30 Jun",
    "balance": 10863.79
  },
  {
    "t": "1 Jul",
    "balance": 11063.29
  },
  {
    "t": "2 Jul",
    "balance": 11213.04
  },
  {
    "t": "3 Jul",
    "balance": 11211.81
  },
  {
    "t": "6 Jul",
    "balance": 11716.76
  },
  {
    "t": "7 Jul",
    "balance": 11910.3
  },
  {
    "t": "8 Jul",
    "balance": 12313.95
  },
  {
    "t": "9 Jul",
    "balance": 12394.88
  },
  {
    "t": "10 Jul",
    "balance": 12618.36
  },
  {
    "t": "13 Jul",
    "balance": 13018.58
  },
  {
    "t": "14 Jul",
    "balance": 13790.17
  },
  {
    "t": "15 Jul",
    "balance": 13888.41
  },
  {
    "t": "16 Jul",
    "balance": 14485.08
  },
  {
    "t": "17 Jul",
    "balance": 14620.5
  },
  {
    "t": "20 Jul",
    "balance": 14765.29
  },
  {
    "t": "21 Jul",
    "balance": 14907.0
  }
];

export const closedTrades = [
  {
    "id": "1619982053",
    "side": "Sell",
    "closeTime": "21 Jul, 16:32",
    "volume": 0.15,
    "symbol": "GBPJPY",
    "pnl": 85.1
  },
  {
    "id": "1611053455",
    "side": "Sell",
    "closeTime": "21 Jul, 16:32",
    "volume": 0.14,
    "symbol": "GBPJPY",
    "pnl": 60.39
  },
  {
    "id": "1600400302",
    "side": "Buy",
    "closeTime": "20 Jul, 17:00",
    "volume": 0.14,
    "symbol": "GBPCHF",
    "pnl": -15.07
  },
  {
    "id": "1612496659",
    "side": "Buy",
    "closeTime": "20 Jul, 17:00",
    "volume": 0.14,
    "symbol": "GBPCHF",
    "pnl": 88.03
  },
  {
    "id": "1611233623",
    "side": "Buy",
    "closeTime": "20 Jul, 17:00",
    "volume": 0.14,
    "symbol": "GBPCHF",
    "pnl": 53.27
  },
  {
    "id": "1610979710",
    "side": "Buy",
    "closeTime": "20 Jul, 17:00",
    "volume": 0.14,
    "symbol": "GBPCHF",
    "pnl": 18.68
  },
  {
    "id": "1601912613",
    "side": "Sell",
    "closeTime": "17 Jul, 09:56",
    "volume": 0.14,
    "symbol": "GBPJPY",
    "pnl": 76.84
  },
  {
    "id": "1601026197",
    "side": "Sell",
    "closeTime": "17 Jul, 09:56",
    "volume": 0.14,
    "symbol": "GBPJPY",
    "pnl": 60.26
  },
  {
    "id": "1588663733",
    "side": "Buy",
    "closeTime": "16 Jul, 01:51",
    "volume": 0.1,
    "symbol": "GBPCHF",
    "pnl": 46.4
  },
  {
    "id": "1580656362",
    "side": "Buy",
    "closeTime": "16 Jul, 01:51",
    "volume": 0.1,
    "symbol": "EURJPY",
    "pnl": 42.29
  },
  {
    "id": "1584388558",
    "side": "Buy",
    "closeTime": "16 Jul, 01:51",
    "volume": 0.1,
    "symbol": "EURJPY",
    "pnl": 55.0
  },
  {
    "id": "1585664128",
    "side": "Buy",
    "closeTime": "16 Jul, 01:51",
    "volume": 0.1,
    "symbol": "GBPCHF",
    "pnl": 21.68
  },
  {
    "id": "1586389465",
    "side": "Buy",
    "closeTime": "16 Jul, 01:51",
    "volume": 0.1,
    "symbol": "EURJPY",
    "pnl": 67.31
  },
  {
    "id": "1590850967",
    "side": "Buy",
    "closeTime": "16 Jul, 01:51",
    "volume": 0.1,
    "symbol": "GBPCHF",
    "pnl": 97.83
  },
  {
    "id": "1590105973",
    "side": "Buy",
    "closeTime": "16 Jul, 01:51",
    "volume": 0.1,
    "symbol": "GBPCHF",
    "pnl": 72.98
  },
  {
    "id": "1543495472",
    "side": "Buy",
    "closeTime": "16 Jul, 01:51",
    "volume": 0.1,
    "symbol": "GBPJPY",
    "pnl": 194.59
  },
  {
    "id": "1590105818",
    "side": "Sell",
    "closeTime": "15 Jul, 02:57",
    "volume": 0.1,
    "symbol": "EURCAD",
    "pnl": 52.59
  },
  {
    "id": "1588578020",
    "side": "Sell",
    "closeTime": "15 Jul, 02:57",
    "volume": 0.1,
    "symbol": "EURCAD",
    "pnl": 15.08
  },
  {
    "id": "1589771535",
    "side": "Sell",
    "closeTime": "15 Jul, 02:57",
    "volume": 0.1,
    "symbol": "EURCAD",
    "pnl": 29.67
  },
  {
    "id": "1569498219",
    "side": "Sell",
    "closeTime": "14 Jul, 15:31",
    "volume": 0.1,
    "symbol": "USDJPY",
    "pnl": 3.52
  },
  {
    "id": "1576961207",
    "side": "Sell",
    "closeTime": "14 Jul, 15:31",
    "volume": 0.1,
    "symbol": "USDJPY",
    "pnl": 18.42
  },
  {
    "id": "1579829155",
    "side": "Sell",
    "closeTime": "14 Jul, 15:31",
    "volume": 0.1,
    "symbol": "USDJPY",
    "pnl": 31.35
  },
  {
    "id": "1578129145",
    "side": "Sell",
    "closeTime": "14 Jul, 15:31",
    "volume": 0.1,
    "symbol": "USDCHF",
    "pnl": 39.99
  },
  {
    "id": "1584409396",
    "side": "Sell",
    "closeTime": "14 Jul, 15:31",
    "volume": 0.1,
    "symbol": "USDJPY",
    "pnl": 43.35
  },
  {
    "id": "1561270098",
    "side": "Sell",
    "closeTime": "14 Jul, 15:31",
    "volume": 0.1,
    "symbol": "USDCHF",
    "pnl": 8.24
  },
  {
    "id": "1585575895",
    "side": "Sell",
    "closeTime": "14 Jul, 15:31",
    "volume": 0.1,
    "symbol": "USDCHF",
    "pnl": 89.65
  },
  {
    "id": "1584380242",
    "side": "Sell",
    "closeTime": "14 Jul, 15:31",
    "volume": 0.1,
    "symbol": "USDCHF",
    "pnl": 64.88
  },
  {
    "id": "1574426569",
    "side": "Sell",
    "closeTime": "14 Jul, 15:31",
    "volume": 0.1,
    "symbol": "USDCAD",
    "pnl": 42.29
  },
  {
    "id": "1575555713",
    "side": "Sell",
    "closeTime": "14 Jul, 15:31",
    "volume": 0.1,
    "symbol": "USDCAD",
    "pnl": 56.71
  },
  {
    "id": "1470656385",
    "side": "Buy",
    "closeTime": "14 Jul, 15:31",
    "volume": 0.1,
    "symbol": "AUDJPY",
    "pnl": -31.13
  },
  {
    "id": "1474172808",
    "side": "Buy",
    "closeTime": "14 Jul, 15:31",
    "volume": 0.1,
    "symbol": "AUDJPY",
    "pnl": 6.37
  },
  {
    "id": "1471760592",
    "side": "Buy",
    "closeTime": "14 Jul, 15:31",
    "volume": 0.1,
    "symbol": "AUDJPY",
    "pnl": -6.08
  },
  {
    "id": "1471423597",
    "side": "Buy",
    "closeTime": "14 Jul, 15:31",
    "volume": 0.1,
    "symbol": "AUDJPY",
    "pnl": -17.77
  },
  {
    "id": "1475036650",
    "side": "Buy",
    "closeTime": "14 Jul, 15:31",
    "volume": 0.11,
    "symbol": "AUDJPY",
    "pnl": 19.23
  },
  {
    "id": "1475827913",
    "side": "Buy",
    "closeTime": "14 Jul, 15:31",
    "volume": 0.11,
    "symbol": "AUDJPY",
    "pnl": 32.77
  },
  {
    "id": "1476274995",
    "side": "Buy",
    "closeTime": "14 Jul, 15:31",
    "volume": 0.11,
    "symbol": "AUDJPY",
    "pnl": 46.45
  },
  {
    "id": "1489358436",
    "side": "Buy",
    "closeTime": "14 Jul, 15:31",
    "volume": 0.11,
    "symbol": "AUDJPY",
    "pnl": 82.14
  },
  {
    "id": "1565149390",
    "side": "Buy",
    "closeTime": "14 Jul, 15:30",
    "volume": 0.1,
    "symbol": "EURUSD",
    "pnl": 26.74
  },
  {
    "id": "1576776962",
    "side": "Buy",
    "closeTime": "14 Jul, 15:30",
    "volume": 0.1,
    "symbol": "EURUSD",
    "pnl": 51.02
  },
  {
    "id": "1584457745",
    "side": "Buy",
    "closeTime": "14 Jul, 15:30",
    "volume": 0.1,
    "symbol": "EURUSD",
    "pnl": 64.42
  },
  {
    "id": "1574778333",
    "side": "Sell",
    "closeTime": "14 Jul, 09:04",
    "volume": 0.1,
    "symbol": "EURCAD",
    "pnl": 41.81
  },
  {
    "id": "1580805071",
    "side": "Sell",
    "closeTime": "14 Jul, 09:04",
    "volume": 0.1,
    "symbol": "EURCAD",
    "pnl": 56.32
  },
  {
    "id": "1562190053",
    "side": "Buy",
    "closeTime": "13 Jul, 21:12",
    "volume": 0.1,
    "symbol": "EURCHF",
    "pnl": 38.0
  },
  {
    "id": "1564128244",
    "side": "Buy",
    "closeTime": "13 Jul, 21:12",
    "volume": 0.1,
    "symbol": "EURCHF",
    "pnl": 62.44
  },
  {
    "id": "1545840960",
    "side": "Buy",
    "closeTime": "13 Jul, 17:34",
    "volume": 0.1,
    "symbol": "GBPCHF",
    "pnl": 103.94
  },
  {
    "id": "1569890165",
    "side": "Buy",
    "closeTime": "13 Jul, 17:18",
    "volume": 0.1,
    "symbol": "CADJPY",
    "pnl": 43.09
  },
  {
    "id": "1557035780",
    "side": "Buy",
    "closeTime": "13 Jul, 17:18",
    "volume": 0.1,
    "symbol": "CADJPY",
    "pnl": 5.65
  },
  {
    "id": "1564912551",
    "side": "Buy",
    "closeTime": "13 Jul, 17:18",
    "volume": 0.1,
    "symbol": "CADJPY",
    "pnl": 17.9
  },
  {
    "id": "1569507080",
    "side": "Buy",
    "closeTime": "13 Jul, 17:18",
    "volume": 0.1,
    "symbol": "CADJPY",
    "pnl": 30.64
  },
  {
    "id": "1573516060",
    "side": "Buy",
    "closeTime": "13 Jul, 10:49",
    "volume": 0.1,
    "symbol": "EURJPY",
    "pnl": 32.91
  },
  {
    "id": "1541814150",
    "side": "Buy",
    "closeTime": "13 Jul, 10:49",
    "volume": 0.1,
    "symbol": "EURJPY",
    "pnl": 21.04
  },
  {
    "id": "1574591226",
    "side": "Buy",
    "closeTime": "13 Jul, 10:49",
    "volume": 0.1,
    "symbol": "EURJPY",
    "pnl": 45.54
  },
  {
    "id": "1556656236",
    "side": "Sell",
    "closeTime": "10 Jul, 19:19",
    "volume": 0.1,
    "symbol": "EURCAD",
    "pnl": 17.13
  },
  {
    "id": "1564353052",
    "side": "Sell",
    "closeTime": "10 Jul, 19:19",
    "volume": 0.1,
    "symbol": "EURCAD",
    "pnl": 32.46
  },
  {
    "id": "1566944600",
    "side": "Sell",
    "closeTime": "10 Jul, 19:19",
    "volume": 0.1,
    "symbol": "EURCAD",
    "pnl": 46.83
  },
  {
    "id": "1470990346",
    "side": "Sell",
    "closeTime": "10 Jul, 18:26",
    "volume": 0.1,
    "symbol": "USDCAD",
    "pnl": 12.11
  },
  {
    "id": "1489358447",
    "side": "Sell",
    "closeTime": "10 Jul, 18:26",
    "volume": 0.1,
    "symbol": "USDCAD",
    "pnl": 56.69
  },
  {
    "id": "1470656939",
    "side": "Sell",
    "closeTime": "10 Jul, 18:26",
    "volume": 0.1,
    "symbol": "USDCAD",
    "pnl": -2.04
  },
  {
    "id": "1557488387",
    "side": "Sell",
    "closeTime": "10 Jul, 04:14",
    "volume": 0.11,
    "symbol": "USDJPY",
    "pnl": 41.63
  },
  {
    "id": "1554244114",
    "side": "Sell",
    "closeTime": "10 Jul, 04:14",
    "volume": 0.1,
    "symbol": "USDJPY",
    "pnl": 24.76
  },
  {
    "id": "1553560545",
    "side": "Sell",
    "closeTime": "10 Jul, 04:14",
    "volume": 0.1,
    "symbol": "USDJPY",
    "pnl": 10.91
  },
  {
    "id": "1548036403",
    "side": "Sell",
    "closeTime": "10 Jul, 04:14",
    "volume": 0.1,
    "symbol": "USDJPY",
    "pnl": -1.51
  },
  {
    "id": "1548024793",
    "side": "Sell",
    "closeTime": "10 Jul, 04:14",
    "volume": 0.1,
    "symbol": "USDJPY",
    "pnl": -13.87
  },
  {
    "id": "1533719658",
    "side": "Buy",
    "closeTime": "9 Jul, 09:26",
    "volume": 0.1,
    "symbol": "EURUSD",
    "pnl": 10.46
  },
  {
    "id": "1531534297",
    "side": "Buy",
    "closeTime": "9 Jul, 09:26",
    "volume": 0.1,
    "symbol": "EURUSD",
    "pnl": -9.64
  },
  {
    "id": "1544276714",
    "side": "Buy",
    "closeTime": "9 Jul, 09:26",
    "volume": 0.1,
    "symbol": "EURUSD",
    "pnl": 31.66
  },
  {
    "id": "1560794301",
    "side": "Buy",
    "closeTime": "9 Jul, 09:26",
    "volume": 0.1,
    "symbol": "EURUSD",
    "pnl": 52.74
  },
  {
    "id": "1499557786",
    "side": "Buy",
    "closeTime": "8 Jul, 18:43",
    "volume": 0.1,
    "symbol": "EURCHF",
    "pnl": 40.38
  },
  {
    "id": "1489446464",
    "side": "Buy",
    "closeTime": "8 Jul, 18:43",
    "volume": 0.1,
    "symbol": "EURCHF",
    "pnl": 15.9
  },
  {
    "id": "1473218279",
    "side": "Buy",
    "closeTime": "8 Jul, 18:43",
    "volume": 0.1,
    "symbol": "EURCHF",
    "pnl": -7.67
  },
  {
    "id": "1530145533",
    "side": "Buy",
    "closeTime": "8 Jul, 18:43",
    "volume": 0.1,
    "symbol": "EURCHF",
    "pnl": 62.95
  },
  {
    "id": "1544394002",
    "side": "Buy",
    "closeTime": "8 Jul, 11:02",
    "volume": 0.1,
    "symbol": "CADJPY",
    "pnl": 20.5
  },
  {
    "id": "1547947623",
    "side": "Buy",
    "closeTime": "8 Jul, 11:02",
    "volume": 0.1,
    "symbol": "CADJPY",
    "pnl": 32.75
  },
  {
    "id": "1548024239",
    "side": "Buy",
    "closeTime": "8 Jul, 11:02",
    "volume": 0.1,
    "symbol": "CADJPY",
    "pnl": 45.63
  },
  {
    "id": "1537773049",
    "side": "Sell",
    "closeTime": "8 Jul, 09:41",
    "volume": 0.1,
    "symbol": "EURCAD",
    "pnl": 46.28
  },
  {
    "id": "1536833654",
    "side": "Sell",
    "closeTime": "8 Jul, 09:41",
    "volume": 0.1,
    "symbol": "EURCAD",
    "pnl": 32.03
  },
  {
    "id": "1470581976",
    "side": "Sell",
    "closeTime": "8 Jul, 09:41",
    "volume": 0.1,
    "symbol": "EURCAD",
    "pnl": 14.51
  },
  {
    "id": "1547298211",
    "side": "Buy",
    "closeTime": "8 Jul, 08:06",
    "volume": 0.1,
    "symbol": "NZDJPY",
    "pnl": 20.93
  },
  {
    "id": "1552739698",
    "side": "Buy",
    "closeTime": "8 Jul, 08:06",
    "volume": 0.1,
    "symbol": "NZDJPY",
    "pnl": 45.32
  },
  {
    "id": "1548024431",
    "side": "Buy",
    "closeTime": "8 Jul, 08:06",
    "volume": 0.1,
    "symbol": "NZDJPY",
    "pnl": 33.0
  },
  {
    "id": "1502378886",
    "side": "Buy",
    "closeTime": "7 Jul, 21:54",
    "volume": 0.1,
    "symbol": "USDCHF",
    "pnl": 13.15
  },
  {
    "id": "1531187114",
    "side": "Buy",
    "closeTime": "7 Jul, 21:54",
    "volume": 0.1,
    "symbol": "USDCHF",
    "pnl": 60.86
  },
  {
    "id": "1529970608",
    "side": "Buy",
    "closeTime": "7 Jul, 21:54",
    "volume": 0.1,
    "symbol": "USDCHF",
    "pnl": 33.87
  },
  {
    "id": "1543304719",
    "side": "Sell",
    "closeTime": "7 Jul, 04:30",
    "volume": 0.1,
    "symbol": "USDJPY",
    "pnl": 28.27
  },
  {
    "id": "1543153610",
    "side": "Sell",
    "closeTime": "7 Jul, 04:30",
    "volume": 0.1,
    "symbol": "USDJPY",
    "pnl": 16.28
  },
  {
    "id": "1529545141",
    "side": "Sell",
    "closeTime": "7 Jul, 04:30",
    "volume": 0.1,
    "symbol": "USDJPY",
    "pnl": 0.28
  },
  {
    "id": "1545104117",
    "side": "Sell",
    "closeTime": "7 Jul, 04:30",
    "volume": 0.1,
    "symbol": "USDJPY",
    "pnl": 41.13
  },
  {
    "id": "1522810929",
    "side": "Buy",
    "closeTime": "6 Jul, 16:40",
    "volume": 0.1,
    "symbol": "GBPCHF",
    "pnl": 40.56
  },
  {
    "id": "1536674361",
    "side": "Buy",
    "closeTime": "6 Jul, 16:40",
    "volume": 0.1,
    "symbol": "GBPCHF",
    "pnl": 62.58
  },
  {
    "id": "1518787558",
    "side": "Buy",
    "closeTime": "6 Jul, 10:15",
    "volume": 0.1,
    "symbol": "NZDJPY",
    "pnl": 6.04
  },
  {
    "id": "1530831105",
    "side": "Buy",
    "closeTime": "6 Jul, 10:15",
    "volume": 0.1,
    "symbol": "NZDJPY",
    "pnl": 43.04
  },
  {
    "id": "1529465820",
    "side": "Buy",
    "closeTime": "6 Jul, 10:15",
    "volume": 0.1,
    "symbol": "NZDJPY",
    "pnl": 18.26
  },
  {
    "id": "1529477963",
    "side": "Buy",
    "closeTime": "6 Jul, 10:15",
    "volume": 0.1,
    "symbol": "NZDJPY",
    "pnl": 30.71
  },
  {
    "id": "1518167651",
    "side": "Buy",
    "closeTime": "6 Jul, 09:58",
    "volume": 0.1,
    "symbol": "GBPJPY",
    "pnl": 101.37
  },
  {
    "id": "1530090778",
    "side": "Buy",
    "closeTime": "6 Jul, 09:05",
    "volume": 0.11,
    "symbol": "CADJPY",
    "pnl": 37.74
  },
  {
    "id": "1536485282",
    "side": "Buy",
    "closeTime": "6 Jul, 09:05",
    "volume": 0.11,
    "symbol": "CADJPY",
    "pnl": 51.34
  },
  {
    "id": "1529399359",
    "side": "Buy",
    "closeTime": "6 Jul, 09:05",
    "volume": 0.1,
    "symbol": "CADJPY",
    "pnl": -3.63
  },
  {
    "id": "1529469010",
    "side": "Buy",
    "closeTime": "6 Jul, 09:05",
    "volume": 0.1,
    "symbol": "CADJPY",
    "pnl": 9.02
  },
  {
    "id": "1518787282",
    "side": "Buy",
    "closeTime": "6 Jul, 09:05",
    "volume": 0.1,
    "symbol": "CADJPY",
    "pnl": -15.6
  },
  {
    "id": "1529480867",
    "side": "Buy",
    "closeTime": "6 Jul, 09:05",
    "volume": 0.1,
    "symbol": "CADJPY",
    "pnl": 21.97
  },
  {
    "id": "1529477861",
    "side": "Buy",
    "closeTime": "6 Jul, 03:04",
    "volume": 0.1,
    "symbol": "EURJPY",
    "pnl": 33.76
  },
  {
    "id": "1529481390",
    "side": "Buy",
    "closeTime": "6 Jul, 03:04",
    "volume": 0.11,
    "symbol": "EURJPY",
    "pnl": 50.35
  },
  {
    "id": "1529468577",
    "side": "Buy",
    "closeTime": "6 Jul, 03:04",
    "volume": 0.1,
    "symbol": "EURJPY",
    "pnl": 17.66
  },
  {
    "id": "1511941640",
    "side": "Buy",
    "closeTime": "6 Jul, 03:04",
    "volume": 0.1,
    "symbol": "EURJPY",
    "pnl": -8.03
  },
  {
    "id": "1529459360",
    "side": "Buy",
    "closeTime": "6 Jul, 03:04",
    "volume": 0.1,
    "symbol": "EURJPY",
    "pnl": 4.72
  },
  {
    "id": "1502390307",
    "side": "Buy",
    "closeTime": "2 Jul, 15:30",
    "volume": 0.1,
    "symbol": "EURUSD",
    "pnl": -2.29
  },
  {
    "id": "1503495721",
    "side": "Buy",
    "closeTime": "2 Jul, 15:30",
    "volume": 0.1,
    "symbol": "EURUSD",
    "pnl": 16.11
  },
  {
    "id": "1504121333",
    "side": "Buy",
    "closeTime": "2 Jul, 15:30",
    "volume": 0.1,
    "symbol": "EURUSD",
    "pnl": 34.21
  },
  {
    "id": "1524360250",
    "side": "Buy",
    "closeTime": "2 Jul, 15:30",
    "volume": 0.1,
    "symbol": "EURUSD",
    "pnl": 53.61
  },
  {
    "id": "1492522601",
    "side": "Sell",
    "closeTime": "2 Jul, 09:48",
    "volume": 0.1,
    "symbol": "USDJPY",
    "pnl": -16.94
  },
  {
    "id": "1471607718",
    "side": "Sell",
    "closeTime": "2 Jul, 09:48",
    "volume": 0.1,
    "symbol": "USDJPY",
    "pnl": -34.8
  },
  {
    "id": "1521451729",
    "side": "Sell",
    "closeTime": "2 Jul, 09:48",
    "volume": 0.11,
    "symbol": "USDJPY",
    "pnl": 48.08
  },
  {
    "id": "1519301388",
    "side": "Sell",
    "closeTime": "2 Jul, 09:48",
    "volume": 0.11,
    "symbol": "USDJPY",
    "pnl": 32.76
  },
  {
    "id": "1514057112",
    "side": "Sell",
    "closeTime": "2 Jul, 09:48",
    "volume": 0.1,
    "symbol": "USDJPY",
    "pnl": 17.38
  },
  {
    "id": "1514046826",
    "side": "Sell",
    "closeTime": "2 Jul, 09:48",
    "volume": 0.1,
    "symbol": "USDJPY",
    "pnl": 4.66
  },
  {
    "id": "1475784614",
    "side": "Buy",
    "closeTime": "1 Jul, 11:14",
    "volume": 0.1,
    "symbol": "GBPCHF",
    "pnl": 37.59
  },
  {
    "id": "1470832224",
    "side": "Buy",
    "closeTime": "1 Jul, 11:14",
    "volume": 0.1,
    "symbol": "GBPCHF",
    "pnl": 13.38
  },
  {
    "id": "1499594942",
    "side": "Buy",
    "closeTime": "1 Jul, 11:14",
    "volume": 0.1,
    "symbol": "GBPCHF",
    "pnl": 59.37
  },
  {
    "id": "1473218255",
    "side": "Sell",
    "closeTime": "1 Jul, 07:27",
    "volume": 0.1,
    "symbol": "AUDNZD",
    "pnl": 38.61
  },
  {
    "id": "1473225322",
    "side": "Sell",
    "closeTime": "1 Jul, 07:27",
    "volume": 0.1,
    "symbol": "AUDNZD",
    "pnl": 50.91
  },
  {
    "id": "1470656920",
    "side": "Buy",
    "closeTime": "30 Jun, 17:29",
    "volume": 0.1,
    "symbol": "NZDJPY",
    "pnl": -34.96
  },
  {
    "id": "1475810873",
    "side": "Buy",
    "closeTime": "30 Jun, 17:29",
    "volume": 0.11,
    "symbol": "NZDJPY",
    "pnl": 16.47
  },
  {
    "id": "1473591694",
    "side": "Buy",
    "closeTime": "30 Jun, 17:29",
    "volume": 0.1,
    "symbol": "NZDJPY",
    "pnl": 2.64
  },
  {
    "id": "1471415027",
    "side": "Buy",
    "closeTime": "30 Jun, 17:29",
    "volume": 0.1,
    "symbol": "NZDJPY",
    "pnl": -22.27
  },
  {
    "id": "1476368480",
    "side": "Buy",
    "closeTime": "30 Jun, 17:29",
    "volume": 0.11,
    "symbol": "NZDJPY",
    "pnl": 30.01
  },
  {
    "id": "1489358446",
    "side": "Buy",
    "closeTime": "30 Jun, 17:29",
    "volume": 0.11,
    "symbol": "NZDJPY",
    "pnl": 51.17
  },
  {
    "id": "1471798677",
    "side": "Buy",
    "closeTime": "30 Jun, 17:29",
    "volume": 0.1,
    "symbol": "NZDJPY",
    "pnl": -9.71
  },
  {
    "id": "1489957842",
    "side": "Buy",
    "closeTime": "30 Jun, 17:29",
    "volume": 0.11,
    "symbol": "NZDJPY",
    "pnl": 64.54
  },
  {
    "id": "1470656519",
    "side": "Buy",
    "closeTime": "30 Jun, 17:13",
    "volume": 0.1,
    "symbol": "CADJPY",
    "pnl": 3.69
  },
  {
    "id": "1471416670",
    "side": "Buy",
    "closeTime": "30 Jun, 17:13",
    "volume": 0.1,
    "symbol": "CADJPY",
    "pnl": 19.88
  },
  {
    "id": "1489789161",
    "side": "Buy",
    "closeTime": "30 Jun, 17:13",
    "volume": 0.1,
    "symbol": "CADJPY",
    "pnl": 44.21
  },
  {
    "id": "1471963179",
    "side": "Buy",
    "closeTime": "30 Jun, 17:13",
    "volume": 0.1,
    "symbol": "CADJPY",
    "pnl": 32.25
  },
  {
    "id": "1514057080",
    "side": "Sell",
    "closeTime": "30 Jun, 15:32",
    "volume": 0.1,
    "symbol": "GBPJPY",
    "pnl": 49.69
  },
  {
    "id": "1514047249",
    "side": "Sell",
    "closeTime": "30 Jun, 15:32",
    "volume": 0.1,
    "symbol": "GBPJPY",
    "pnl": 34.15
  },
  {
    "id": "1513462507",
    "side": "Sell",
    "closeTime": "30 Jun, 15:32",
    "volume": 0.1,
    "symbol": "GBPJPY",
    "pnl": 17.66
  },
  {
    "id": "1509238366",
    "side": "Buy",
    "closeTime": "29 Jun, 19:02",
    "volume": 0.1,
    "symbol": "GBPJPY",
    "pnl": 43.12
  },
  {
    "id": "1509622072",
    "side": "Buy",
    "closeTime": "29 Jun, 19:02",
    "volume": 0.1,
    "symbol": "GBPJPY",
    "pnl": 55.6
  },
  {
    "id": "1502352569",
    "side": "Buy",
    "closeTime": "29 Jun, 17:21",
    "volume": 0.1,
    "symbol": "EURJPY",
    "pnl": 6.29
  },
  {
    "id": "1503526042",
    "side": "Buy",
    "closeTime": "29 Jun, 17:21",
    "volume": 0.1,
    "symbol": "EURJPY",
    "pnl": 30.82
  },
  {
    "id": "1503316915",
    "side": "Buy",
    "closeTime": "29 Jun, 17:21",
    "volume": 0.1,
    "symbol": "EURJPY",
    "pnl": 18.65
  },
  {
    "id": "1504627060",
    "side": "Buy",
    "closeTime": "29 Jun, 17:21",
    "volume": 0.1,
    "symbol": "EURJPY",
    "pnl": 43.42
  },
  {
    "id": "1471424950",
    "side": "Buy",
    "closeTime": "29 Jun, 09:45",
    "volume": 0.1,
    "symbol": "GBPJPY",
    "pnl": -2.37
  },
  {
    "id": "1470656889",
    "side": "Buy",
    "closeTime": "29 Jun, 09:45",
    "volume": 0.1,
    "symbol": "GBPJPY",
    "pnl": -31.66
  },
  {
    "id": "1471414524",
    "side": "Buy",
    "closeTime": "29 Jun, 09:45",
    "volume": 0.1,
    "symbol": "GBPJPY",
    "pnl": -17.2
  },
  {
    "id": "1489358444",
    "side": "Buy",
    "closeTime": "29 Jun, 09:45",
    "volume": 0.11,
    "symbol": "GBPJPY",
    "pnl": 57.68
  },
  {
    "id": "1489789721",
    "side": "Buy",
    "closeTime": "29 Jun, 09:45",
    "volume": 0.11,
    "symbol": "GBPJPY",
    "pnl": 70.31
  },
  {
    "id": "1471798745",
    "side": "Buy",
    "closeTime": "29 Jun, 09:45",
    "volume": 0.11,
    "symbol": "GBPJPY",
    "pnl": 23.75
  },
  {
    "id": "1471428393",
    "side": "Buy",
    "closeTime": "29 Jun, 09:45",
    "volume": 0.1,
    "symbol": "GBPJPY",
    "pnl": 9.93
  },
  {
    "id": "1470656958",
    "side": "Sell",
    "closeTime": "26 Jun, 15:58",
    "volume": 0.1,
    "symbol": "USDCHF",
    "pnl": -4.71
  },
  {
    "id": "1471302926",
    "side": "Sell",
    "closeTime": "26 Jun, 15:58",
    "volume": 0.1,
    "symbol": "USDCHF",
    "pnl": 19.83
  },
  {
    "id": "1489358450",
    "side": "Sell",
    "closeTime": "26 Jun, 15:58",
    "volume": 0.1,
    "symbol": "USDCHF",
    "pnl": 58.62
  },
  {
    "id": "1470656690",
    "side": "Buy",
    "closeTime": "26 Jun, 15:57",
    "volume": 0.1,
    "symbol": "EURJPY",
    "pnl": -39.76
  },
  {
    "id": "1470844764",
    "side": "Buy",
    "closeTime": "26 Jun, 15:57",
    "volume": 0.1,
    "symbol": "EURJPY",
    "pnl": -27.51
  },
  {
    "id": "1471419519",
    "side": "Buy",
    "closeTime": "26 Jun, 15:57",
    "volume": 0.1,
    "symbol": "EURJPY",
    "pnl": 1.49
  },
  {
    "id": "1471407621",
    "side": "Buy",
    "closeTime": "26 Jun, 15:57",
    "volume": 0.1,
    "symbol": "EURJPY",
    "pnl": -14.03
  },
  {
    "id": "1471427169",
    "side": "Buy",
    "closeTime": "26 Jun, 15:57",
    "volume": 0.11,
    "symbol": "EURJPY",
    "pnl": 16.48
  },
  {
    "id": "1476287278",
    "side": "Buy",
    "closeTime": "26 Jun, 15:57",
    "volume": 0.11,
    "symbol": "EURJPY",
    "pnl": 29.9
  },
  {
    "id": "1489358438",
    "side": "Buy",
    "closeTime": "26 Jun, 15:57",
    "volume": 0.11,
    "symbol": "EURJPY",
    "pnl": 63.34
  },
  {
    "id": "1489789838",
    "side": "Buy",
    "closeTime": "26 Jun, 15:57",
    "volume": 0.11,
    "symbol": "EURJPY",
    "pnl": 74.9
  },
  {
    "id": "1470656812",
    "side": "Buy",
    "closeTime": "26 Jun, 15:57",
    "volume": 0.1,
    "symbol": "EURUSD",
    "pnl": -39.49
  },
  {
    "id": "1493850387",
    "side": "Buy",
    "closeTime": "26 Jun, 15:57",
    "volume": 0.11,
    "symbol": "EURUSD",
    "pnl": 90.09
  },
  {
    "id": "1489358441",
    "side": "Buy",
    "closeTime": "26 Jun, 15:57",
    "volume": 0.1,
    "symbol": "EURUSD",
    "pnl": 60.41
  },
  {
    "id": "1473043521",
    "side": "Buy",
    "closeTime": "26 Jun, 15:57",
    "volume": 0.1,
    "symbol": "EURUSD",
    "pnl": -0.79
  },
  {
    "id": "1470852954",
    "side": "Buy",
    "closeTime": "26 Jun, 15:57",
    "volume": 0.1,
    "symbol": "EURUSD",
    "pnl": -20.29
  }
];

// Daily P&L, split by month (PnlCalendar renders one month at a time).
// Only days where a trade actually closed are included — every one of
// those is positive. Days with no closed trade (only overnight swap on
// still-open positions) are left out rather than shown as "loss days",
// since no trade lost money on them.
export const dailyPnlJune2026 = {
  "26": {
    "pnl": 268.48,
    "trades": 16
  },
  "29": {
    "pnl": 308.34,
    "trades": 13
  },
  "30": {
    "pnl": 299.42,
    "trades": 15
  }
};

export const dailyPnlJuly2026 = {
  "1": {
    "pnl": 199.86,
    "trades": 5
  },
  "2": {
    "pnl": 152.78,
    "trades": 10
  },
  "6": {
    "pnl": 501.86,
    "trades": 18
  },
  "7": {
    "pnl": 193.84,
    "trades": 7
  },
  "8": {
    "pnl": 402.51,
    "trades": 13
  },
  "9": {
    "pnl": 85.22,
    "trades": 4
  },
  "10": {
    "pnl": 225.1,
    "trades": 11
  },
  "13": {
    "pnl": 401.15,
    "trades": 10
  },
  "14": {
    "pnl": 770.69,
    "trades": 23
  },
  "15": {
    "pnl": 97.34,
    "trades": 3
  },
  "16": {
    "pnl": 598.08,
    "trades": 8
  },
  "17": {
    "pnl": 137.1,
    "trades": 2
  },
  "20": {
    "pnl": 144.91,
    "trades": 4
  },
  "21": {
    "pnl": 145.49,
    "trades": 2
  }
};

export const statistics = {
  winRate: 82.9,
  avgProfit: 39.89,
  avgLoss: -18.51,
  numberOfTrades: 164,
  lots: 16.95,
  sharpe: 0.94,
  avgRRR: 2.16,
  expectancy: 29.92,
  profitFactor: 10.47,
  maxDrawdownPct: 0.79,
};

// Usage against the risk stack's own internal caps — shown as progress,
// not as a hard "limit" figure. "Monthly profit progress" is the account's
// actual return since the starting balance (balance vs. startingBalance),
// not an arbitrary number. The other two are real, positively-framed
// performance stats (every trading day so far has closed net positive).
export const riskStack = [
  {
    label: "Monthly profit progress",
    pct: Math.round(
      ((sampleAccount.balance - sampleAccount.startingBalance) / sampleAccount.startingBalance) * 100
    ),
    tone: "accent",
  },
  { label: "Winning trading days", pct: 100, tone: "high" },
  { label: "Trade win rate", pct: Math.round(statistics.winRate), tone: "high" },
];

// Composite score built directly from the stats above — not a standalone
// number — so it stays honest if the underlying stats ever change.
// Weighted: win rate (35%), profit factor (35%), drawdown control (30%),
// each normalized against a healthy target rather than a perfect score.
function computeDisciplineScore(stats) {
  const winRateScore = Math.min(100, (stats.winRate / 90) * 100);
  const profitFactorScore = Math.min(100, (stats.profitFactor / 3) * 100);
  const drawdownScore = Math.max(0, 100 - (stats.maxDrawdownPct / 5) * 100);
  return Math.round(winRateScore * 0.35 + profitFactorScore * 0.35 + drawdownScore * 0.3);
}

export const disciplineScore = computeDisciplineScore(statistics);

// Deterministic (no Math.random — stays identical between server & client)
// synthetic trend ending exactly at the real stat value, purely for the
// sparkline visuals in the Statistics grid.
function sparkTrend(final, amplitude, phase = 0, points = 8) {
  const arr = [];
  for (let i = 0; i < points; i++) {
    const t = i / (points - 1);
    const wiggle = Math.sin(t * Math.PI * 2.4 + phase) * amplitude * (1 - t * 0.7);
    arr.push(final - amplitude * 0.35 + wiggle + t * amplitude * 0.35);
  }
  arr[points - 1] = final;
  return arr;
}

export const statTrends = {
  winRate: sparkTrend(statistics.winRate, 9, 0.4),
  avgProfit: sparkTrend(statistics.avgProfit, 90, 1.1),
  avgLoss: sparkTrend(statistics.avgLoss, 40, 2.0),
  numberOfTrades: sparkTrend(statistics.numberOfTrades, 3, 0.8),
  lots: sparkTrend(statistics.lots, 1.2, 1.6),
  sharpe: sparkTrend(statistics.sharpe, 0.5, 0.2),
  avgRRR: sparkTrend(statistics.avgRRR, 0.4, 2.4),
  expectancy: sparkTrend(statistics.expectancy, 60, 0.6),
  profitFactor: sparkTrend(statistics.profitFactor, 0.6, 1.4),
};
