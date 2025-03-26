<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TradingView Chart with Custom 7-Minute Timeframe</title>
  <style>
    body, html {
      margin: 0;
      padding: 0;
      height: 100%;
      width: 100%;
    }
    #chart_container {
      height: 100%;
      width: 100%;
    }
  </style>
</head>
<body><button onclick="window.saveChartSettings()" style="display:none;">Save Chart</button>
  <div id="chart_container"></div>

  <script type="text/javascript" src="lib/charting_library.js"></script>

  <script type="text/javascript">
  
 const DummyDatafeed = {
  onReady: function(callback) {
    setTimeout(() => {
      callback({
        exchanges: [],
        symbols_types: [],
        supports_search: true, // Enable symbol search
        supported_resolutions: ["1", "3", "5", "15", "30", "60", "120", "180", "240", "360", "480", "720", "1D", "2D", "3D", "4D", "5D", "6D", "10D", "15D", "45D", "1W", "2W", "3W", "1M", "2M", "3M", "6M"],
        supports_marks: false,
        supports_timescale_marks: false,
        supports_time: true,
        supports_realtime: true // Explicitly enable real-time support
      });
    }, 100);
  },

  searchSymbols: async function(userInput, exchange, symbolType, onResultReadyCallback) {
      let allSymbols = [
      { symbol: "DUMMY:STOCK", full_name: "DUMMY:STOCK", description: "Dummy Stock", type: "stock", "exchange": "", logo_urls: ["https://s3-symbol-logo.tradingview.com/crypto/XTVCETH.svg"]},
      { symbol: "BTCUSD", full_name: "BTCUSD", description: "Bitcoin / US. Dollar", type: "crypto", "exchange": "Binance", logo_urls: ["https://s3-symbol-logo.tradingview.com/crypto/XTVCADA.svg"]},
      { symbol: "ETHUSD", full_name: "ETHUSD", description: "Ethereum / US. Dollar", type: "crypto", "exchange": "Binance", logo_urls: ["https://s3-symbol-logo.tradingview.com/crypto/XTVCETH.svg"]},
      { symbol: "XRPUSD", full_name: "XRPUSD", description: "XRP / US. Dollar", type: "crypto", "exchange": "Binance", logo_urls: ["https://s3-symbol-logo.tradingview.com/crypto/XTVCXRP.svg"]},
      { symbol: "BNBUSD", full_name: "BNBUSD", description: "Binance Coin / US. Dollar", type: "crypto", "exchange": "Binance", logo_urls: ["https://s3-symbol-logo.tradingview.com/crypto/XTVCBNB.svg"]},
      { symbol: "SOLUSD", full_name: "SOLUSD", description: "Solana / US. Dollar", type: "crypto", "exchange": "Binance", logo_urls: ["https://s3-symbol-logo.tradingview.com/crypto/XTVCSOL.svg"]},
      { symbol: "DOGEUSD", full_name: "DOGEUSD", description: "Doge Coin / US. Dollar", type: "crypto", "exchange": "Binance", logo_urls: ["https://s3-symbol-logo.tradingview.com/crypto/XTVCDOGE.svg"]},
      { symbol: "ADAUSD", full_name: "ADAUSD", description: "Cardano Coin / US. Dollar", type: "crypto", "exchange": "Binance", logo_urls: ["https://s3-symbol-logo.tradingview.com/crypto/XTVCADA.svg"]},
      { symbol: "TRXUSD", full_name: "TRXUSD", description: "Tron Coin / US. Dollar", type: "crypto", "exchange": "Binance", logo_urls: ["https://s3-symbol-logo.tradingview.com/crypto/XTVCTRX.svg"]},
      { symbol: "SUIUSD", full_name: "SUIUSD", description: "SUI Coin / US. Dollar", type: "crypto", "exchange": "Binance", logo_urls: ["https://s3-symbol-logo.tradingview.com/crypto/XTVCSUI.svg"]},
      { symbol: "LINKUSD", full_name: "LINKUSD", description: "ChainLink Coin / US. Dollar", type: "crypto", "exchange": "Binance", logo_urls: ["https://s3-symbol-logo.tradingview.com/crypto/XTVCLINK.svg"]},
      { symbol: "TONUSD", full_name: "TONUSD", description: "TON Coin / US. Dollar", type: "crypto", "exchange": "Binance", logo_urls: ["https://s3-symbol-logo.tradingview.com/crypto/XTVCTON.svg"]},
      { symbol: "TRUMPUSD", full_name: "TRUMPUSD", description: "Trump Coin / US. Dollar", type: "crypto", "exchange": "Binance", logo_urls: ["https://s3-symbol-logo.tradingview.com/crypto/XTVCTRUMP.svg"]},
      { symbol: "MELANIAUSD", full_name: "MELANIAUSD", description: "Melanie Coin / US. Dollar", type: "crypto", "exchange": "Binance", logo_urls: ["https://s3-symbol-logo.tradingview.com/crypto/XTVCMELANIA.svg"]},



      
      //{ symbol: "AAPL", full_name: "AAPL", description: "Apple", type: "stock", "exchange": "Nasdaq", logo_urls: ["https://s3-symbol-logo.tradingview.com/crypto/XTVCMELANIA.svg"]},
    ];

    
    let timeNow = Date.now();
    window.activeSymbolSearch = timeNow;
    let results = await fetch(`https://foodify-ai.great-site.net/symbol-search.php?query=${userInput}`).then(d => d.json()); 

    if(window.activeSymbolSearch === timeNow) {
        console.log("Search results:", results.data);
        setTimeout(() => onResultReadyCallback(results.data), 0);
    }
    /*const results = allSymbols.filter(s =>
      s.symbol.toLowerCase().includes(userInput.toLowerCase()) ||
      s.description.toLowerCase().includes(userInput.toLowerCase())
    );*/

    //console.log("Search results:", results.data);
    //setTimeout(() => onResultReadyCallback(results.data), 0);
  },

  resolveSymbol: async function(symbolName, onSymbolResolvedCallback, onResolveErrorCallback) {
    console.log("resolveSymbol called with:", symbolName);
    let symbols = {
      /*"DUMMY:STOCK": {
        name: "DUMMY:STOCK",
        description: "Dummy Stock",
        type: "stock",
        session: "24x7",
        timezone: "Etc/UTC",
        ticker: "DUMMY:STOCK",
        minmov: 1,
        pricescale: 100,
        has_intraday: true,
        has_daily: true,
        intraday_multipliers: ["1", "5", "15", "7", "60"],
        supported_resolutions: ["1", "5", "15", "7", "60", "D", "2D"],
        volume_precision: 2,
      },*/
      "BTCUSD": {
        name: "BTCUSD",
        description: "BTCUSD / US. Dollar",
        type: "crypto",
        session: "24x7",
        timezone: "Etc/UTC",
        ticker: "BTCUSD",
        minmov: 1,
        pricescale: 100,
        has_intraday: true,
        has_daily: true,
        intraday_multipliers:   ["1", "3", "5", "15", "30", "60", "120", "240", "300", "480", "720", "D"],
        supported_resolutions:  ["1", "3", "5", "15", "30", "60", "120", "180", "240", "300", "360", "480", "720", "D", "2D", "3D", "4D", "5D", "6D", "10D", "15D", "45D", "1W", "2W", "3W", "1M", "2M", "3M", "6M"],
        volume_precision: 2,
      },
      "ETHUSD": {
        name: "ETHUSD",
        description: "ETHUSD / US. Dollar",
        type: "crypto",
        session: "24x7",
        timezone: "Etc/UTC",
        ticker: "ETHUSD",
        minmov: 1,
        pricescale: 100,
        has_intraday: true,
        has_daily: true,
        intraday_multipliers:   ["1", "3", "5", "15", "30", "60", "120", "240", "300", "480", "720", "D"],
        supported_resolutions:  ["1", "3", "5", "15", "30", "60", "120", "180", "240", "300", "360", "480", "720", "D", "2D", "3D", "4D", "5D", "6D", "10D", "15D", "45D", "1W", "2W", "3W", "1M", "2M", "3M", "6M"],
        volume_precision: 2,
      },
      "SOLUSD": {
        name: "SOLUSD",
        description: "Solana / US. Dollar",
        type: "crypto",
        session: "24x7",
        timezone: "Etc/UTC",
        ticker: "SOLUSD",
        minmov: 1,
        pricescale: 100,
        has_intraday: true,
        has_daily: true,
        intraday_multipliers:   ["1", "3", "5", "15", "30", "60", "120", "240", "300", "480", "720", "D"],
        supported_resolutions:  ["1", "3", "5", "15", "30", "60", "120", "180", "240", "300", "360", "480", "720", "D", "2D", "3D", "4D", "5D", "6D", "10D", "15D", "45D", "1W", "2W", "3W", "1M", "2M", "3M", "6M"],
        volume_precision: 2,
      },
      "XRPUSD": {
        name: "XRPUSD",
        description: "XRP / US. Dollar",
        type: "crypto",
        session: "24x7",
        timezone: "Etc/UTC",
        ticker: "XRPUSD",
        minmov: 1,
        pricescale: 100,
        has_intraday: true,
        has_daily: true,
        intraday_multipliers:   ["1", "3", "5", "15", "30", "60", "120", "240", "300", "480", "720", "D"],
        supported_resolutions:  ["1", "3", "5", "15", "30", "60", "120", "180", "240", "300", "360", "480", "720", "D", "2D", "3D", "4D", "5D", "6D", "10D", "15D", "45D", "1W", "2W", "3W", "1M", "2M", "3M", "6M"],
        volume_precision: 2,
      },
      "BNBUSD": {
        name: "BNBUSD",
        description: "Binance Coin / US. Dollar",
        type: "crypto",
        session: "24x7",
        timezone: "Etc/UTC",
        ticker: "BNBUSD",
        minmov: 1,
        pricescale: 100,
        has_intraday: true,
        has_daily: true,
        intraday_multipliers:   ["1", "3", "5", "15", "30", "60", "120", "240", "300", "480", "720", "D"],
        supported_resolutions:  ["1", "3", "5", "15", "30", "60", "120", "180", "240", "300", "360", "480", "720", "D", "2D", "3D", "4D", "5D", "6D", "10D", "15D", "45D", "1W", "2W", "3W", "1M", "2M", "3M", "6M"],
        volume_precision: 2,
      },
      "ADAUSD": {
        name: "ADAUSD",
        description: "Cardano / US. Dollar",
        type: "crypto",
        session: "24x7",
        timezone: "Etc/UTC",
        ticker: "ADAUSD",
        minmov: 1,
        pricescale: 100,
        has_intraday: true,
        has_daily: true,
        intraday_multipliers:   ["1", "3", "5", "15", "30", "60", "120", "240", "300", "480", "720", "D"],
        supported_resolutions:  ["1", "3", "5", "15", "30", "60", "120", "180", "240", "300", "360", "480", "720", "D", "2D", "3D", "4D", "5D", "6D", "10D", "15D", "45D", "1W", "2W", "3W", "1M", "2M", "3M", "6M"],
        volume_precision: 2,
      },
      "DOGEUSD": {
        name: "DOGEUSD",
        description: "Doge Coin / US. Dollar",
        type: "crypto",
        session: "24x7",
        timezone: "Etc/UTC",
        ticker: "DOGEUSD",
        minmov: 1,
        pricescale: 100,
        has_intraday: true,
        has_daily: true,
        intraday_multipliers:   ["1", "3", "5", "15", "30", "60", "120", "240", "300", "480", "720", "D"],
        supported_resolutions:  ["1", "3", "5", "15", "30", "60", "120", "180", "240", "300", "360", "480", "720", "D", "2D", "3D", "4D", "5D", "6D", "10D", "15D", "45D", "1W", "2W", "3W", "1M", "2M", "3M", "6M"],
        volume_precision: 2,
      },
      "TRXUSD": {
        name: "TRXUSD",
        description: "Tron Coin / US. Dollar",
        type: "crypto",
        session: "24x7",
        timezone: "Etc/UTC",
        ticker: "TRXUSD",
        minmov: 1,
        pricescale: 100,
        has_intraday: true,
        has_daily: true,
        intraday_multipliers:   ["1", "3", "5", "15", "30", "60", "120", "240", "300", "480", "720", "D"],
        supported_resolutions:  ["1", "3", "5", "15", "30", "60", "120", "180", "240", "300", "360", "480", "720", "D", "2D", "3D", "4D", "5D", "6D", "10D", "15D", "45D", "1W", "2W", "3W", "1M", "2M", "3M", "6M"],
        volume_precision: 2,
      },
      "LINKUSD": {
        name: "LINKUSD",
        description: "Chainlink Coin / US. Dollar",
        type: "crypto",
        session: "24x7",
        timezone: "Etc/UTC",
        ticker: "LINKUSD",
        minmov: 1,
        pricescale: 100,
        has_intraday: true,
        has_daily: true,
        intraday_multipliers:   ["1", "3", "5", "15", "30", "60", "120", "240", "300", "480", "720", "D"],
        supported_resolutions:  ["1", "3", "5", "15", "30", "60", "120", "180", "240", "300", "360", "480", "720", "D", "2D", "3D", "4D", "5D", "6D", "10D", "15D", "45D", "1W", "2W", "3W", "1M", "2M", "3M", "6M"],
        volume_precision: 2,
      },
      "SUIUSD": {
        name: "SUIUSD",
        description: "SUI Coin / US. Dollar",
        type: "crypto",
        session: "24x7",
        timezone: "Etc/UTC",
        ticker: "SUIUSD",
        minmov: 1,
        pricescale: 100,
        has_intraday: true,
        has_daily: true,
        intraday_multipliers:   ["1", "3", "5", "15", "30", "60", "120", "240", "300", "480", "720", "D"],
        supported_resolutions:  ["1", "3", "5", "15", "30", "60", "120", "180", "240", "300", "360", "480", "720", "D", "2D", "3D", "4D", "5D", "6D", "10D", "15D", "45D", "1W", "2W", "3W", "1M", "2M", "3M", "6M"],
        volume_precision: 2,
      },
      "TONUSD": {
        name: "TONUSD",
        description: "TON Coin / US. Dollar",
        type: "crypto",
        session: "24x7",
        timezone: "Etc/UTC",
        ticker: "TONUSD",
        minmov: 1,
        pricescale: 100,
        has_intraday: true,
        has_daily: true,
        intraday_multipliers:   ["1", "3", "5", "15", "30", "60", "120", "240", "300", "480", "720", "D"],
        supported_resolutions:  ["1", "3", "5", "15", "30", "60", "120", "180", "240", "300", "360", "480", "720", "D", "2D", "3D", "4D", "5D", "6D", "10D", "15D", "45D", "1W", "2W", "3W", "1M", "2M", "3M", "6M"],
        volume_precision: 2,
      },
      "TRUMPUSD": {
        name: "TRUMPUSD",
        description: "Trump Coin / US. Dollar",
        type: "crypto",
        session: "24x7",
        timezone: "Etc/UTC",
        ticker: "TRUMPUSD",
        minmov: 1,
        pricescale: 100,
        has_intraday: true,
        has_daily: true,
        intraday_multipliers:   ["1", "3", "5", "15", "30", "60", "120", "240", "300", "480", "720", "D"],
        supported_resolutions:  ["1", "3", "5", "15", "30", "60", "120", "180", "240", "300", "360", "480", "720", "D", "2D", "3D", "4D", "5D", "6D", "10D", "15D", "45D", "1W", "2W", "3W", "1M", "2M", "3M", "6M"],
        volume_precision: 2,
      },
      "MELANIAUSD": {
        name: "MELANIAUSD",
        description: "Melanie Coin / US. Dollar",
        type: "crypto",
        session: "24x7",
        timezone: "Etc/UTC",
        ticker: "MELANIAUSD",
        minmov: 1,
        pricescale: 100,
        has_intraday: true,
        has_daily: true,
        intraday_multipliers:   ["1", "3", "5", "15", "30", "60", "120", "240", "300", "480", "720", "D"],
        supported_resolutions:  ["1", "3", "5", "15", "30", "60", "120", "180", "240", "300", "360", "480", "720", "D", "2D", "3D", "4D", "5D", "6D", "10D", "15D", "45D", "1W", "2W", "3W", "1M", "2M", "3M", "6M"],
        volume_precision: 2,
      },

      
    //   "AAPL": {
    //     name: "AAPL",
    //     description: 'Apple Inc.',
    //     type: "stock",
    //     ticker: "AAPL",
    //     session: '0930-1600:12345', // 9:30 AM - 4:00 PM EST, Mon-Fri
    //     timezone: 'America/New_York', // Matches AAPL’s market
    //     minmov: 1,
    //     pricescale: 100,
    //     has_intraday: true,
    //     has_daily: true,
    //     intraday_multipliers:   ["D"],
    //     supported_resolutions:  ["D", "2D", "3D", "4D", "5D", "6D", "10D", "15D", "45D", "1W", "2W", "3W", "1M", "2M", "3M", "6M"],
    //     volume_precision: 2,
    //   },
    };

    symbols = await fetch(`https://foodify-ai.great-site.net/symbol-resolve.php?query=${symbolName}`).then(d => d.json()); 

    setTimeout(() => {
      if (symbols.data && symbols.data[0]) {
        console.log("Resolving symbol:", symbolName);
        onSymbolResolvedCallback(symbols.data[0]);
      } else {
        console.log("Symbol not found:", symbolName);
        onResolveErrorCallback("Symbol not found: " + symbolName);
      }
    }, 100);
  },

  getBars: async function(symbolInfo, resolution, periodParams, onHistoryCallback, onErrorCallback) {

      console.log(symbolInfo, periodParams)
      console.log(resolution)


    const bars = [];
    let currentTime = periodParams.from * 1000; // Start time in milliseconds
    let endTime = periodParams.to * 1000; // End time in milliseconds


    const MIN_TIME_START = 1735689600000; // January 1, 2025, 00:00:00 UTC in milliseconds
    // If the entire requested range is before MIN_TIME_START, return no data
    if (endTime <= MIN_TIME_START && false) {
      console.log(`Requested range (${new Date(currentTime)} to ${new Date(endTime)}) is before min time ${new Date(MIN_TIME_START)}. Returning no data.`);
      onHistoryCallback([], { noData: true });
      return;
    }


    if(["BTCUSD", "ETHUSD", "SOLUSD", "XRPUSD", "ADAUSD", "BNBUSD", "DOGEUSD", "TRXUSD", "TRUMPUSD", "MELANIAUSD", "TONUSD", "SUIUSD", "LINKUSD", "BCHUSD", "LTCUSD", "DOTUSD", "AVAXUSD", "UNIUSD", "SHIBUSD", "MATICUSD", "AAVEUSD", "ATOMUSD", "FILUSD", "HBARUSD"].includes(symbolInfo.name)){
        let coin, data;

        switch(symbolInfo.name){
            case "BTCUSD":
                coin = "BTC";
                break;
            case "ETHUSD":
                coin = "ETH";
                break;
            case "SOLUSD":
                coin = "SOL";
                break;
            case "XRPUSD":
                coin = "XRP";
                break;
            case "ADAUSD":
                coin = "ADA";
                break;
            case "BNBUSD":
                coin = "BNB";
                break;
            case "DOGEUSD":
                coin = "DOGE";
                break;
            case "TRXUSD":
                coin = "TRX";
                break;
            case "LINKUSD":
                coin = "LINK";
                break;
            case "TONUSD":
                coin = "TON";
                break;
            case "SUIUSD":
                coin = "SUI";
                break;
            case "TRUMPUSD":
                coin = "TRUMP";
                break;
            case "MELANIAUSD":
                coin = "MELANIA";
                break;
            default:
                coin = symbolInfo.name.replace("USD", "");
        }
        switch(resolution) {
            case "1":
            case "3":
            case "5":
            case "15":
            case "30":
                data = await fetchHyperLiquidData(resolution + "m", coin, currentTime, endTime);
                for(let index = 0; index < data.length; index++){
                    bars.push({
                        time: data[index].t,
                        open: parseFloat(data[index].o),
                        high: parseFloat(data[index].h),
                        low: parseFloat(data[index].l),
                        close: parseFloat(data[index].c),
                        volume: parseFloat(data[index].v)
                    });
                }
                break;
            case "60":
            case "120":
            case "180":
            case "240":
            case "360":
            case "480":
            case "720":
                data = await fetchBinanceData(Math.round(parseInt(resolution) / 60) + "h", coin, currentTime, endTime);
                for(let index = 0; index < data.length; index++){
                    bars.push({
                        time: data[index][0],
                        open: parseFloat(data[index][1]),
                        high: parseFloat(data[index][2]),
                        low: parseFloat(data[index][3]),
                        close: parseFloat(data[index][4]),
                        volume: parseFloat(data[index][5])
                    });
                }
                break;
            case "1D":
                data = await fetchBinanceData("1d", coin, currentTime, endTime);
                for(let index = 0; index < data.length; index++){
                    bars.push({
                        time: data[index][0],
                        open: parseFloat(data[index][1]),
                        high: parseFloat(data[index][2]),
                        low: parseFloat(data[index][3]),
                        close: parseFloat(data[index][4]),
                        volume: parseFloat(data[index][5])
                    });
                }
                break;
            default:
                // code block
        }
    }else if(["AAPL", "A", "META", "TSLA", "NVDA", "AMZN", "GOOGL", "MSFT"].includes(symbolInfo.name) || 1) {
        let ticker, data;

        switch(symbolInfo.name){
            case "AAPL":
                ticker = "AAPL";
                break;
            case "META":
                ticker = "META";
                break;
            case "TSLA":
                ticker = "TSLA";
                break;
            case "A":
                ticker = "A";
                break;
            default:
                ticker = symbolInfo.name;
        }
        switch(resolution) {
            case "1D":
                data = await fetchMacroTrendsData(ticker, currentTime, endTime);
                for(let index = 0; index < data.length; index++){
                    bars.push({
                        time: data[index].d,
                        open: parseFloat(data[index].o),
                        high: parseFloat(data[index].h),
                        low: parseFloat(data[index].l),
                        close: parseFloat(data[index].c),
                        volume: parseFloat(data[index].v) * 1000000
                    });
                }
                break;
            default:
        }

    }else if (resolution === "7") { 
      while (currentTime < endTime) {
        bars.push({
          time: currentTime,
          open: 100 + Math.random() * 10,
          high: 105 + Math.random() * 10,
          low: 95 + Math.random() * 10,
          close: 100 + Math.random() * 10,
          volume: 1000 + Math.random() * 500
        });
        currentTime += 7 * 60 * 1000; // Increment by 7 minutes
      }
    } else if (resolution === "15") {
        let data = await fetchHyperLiquidData("15m", "BTC", currentTime, endTime);
        for(let index = 0; index < data.length; index++){
             bars.push({
                time: data[index].t,
                open: parseFloat(data[index].o),
                high: parseFloat(data[index].h),
                low: parseFloat(data[index].l),
                close: parseFloat(data[index].c),
                volume: parseFloat(data[index].v)
            });
        }

      // 5-minute timeframe
      /*while (currentTime < endTime) {
        bars.push({
          time: currentTime,
          open: 100 + Math.random() * 10,
          high: 105 + Math.random() * 10,
          low: 95 + Math.random() * 10,
          close: 100 + Math.random() * 10,
          volume: 1000 + Math.random() * 500
        });
        currentTime += 15 * 60 * 1000; // Increment by 15 minutes
      }}*/
    } else if (resolution === "1") {
      // 1-minute timeframe
      while (currentTime < endTime) {
        bars.push({
          time: currentTime,
          open: 100 + Math.random() * 10,
          high: 105 + Math.random() * 10,
          low: 95 + Math.random() * 10,
          close: 100 + Math.random() * 10,
          volume: 1000 + Math.random() * 500
        });
        currentTime += 1 * 60 * 1000; // Increment by 1 minutes
      }
    } else if (resolution === "D") { // Changed from "1D" to "D" to match TradingView convention
      console.log("Resolution:", resolution);
      currentTime = normalizeToMidnightUTC(currentTime); // Start at midnight UTC
      while (currentTime < endTime) {
        bars.push({
          time: currentTime,
          open: 100 + Math.random() * 10,
          high: 105 + Math.random() * 10,
          low: 95 + Math.random() * 10,
          close: 100 + Math.random() * 10,
          volume: 1000 + Math.random() * 500
        });
        currentTime += 24 * 60 * 60 * 1000; // Increment by 1 day
        if(currentTime >= MIN_TIME_START){console.log('nooop')
break;
        } 
      }
    } else if (resolution === "2D") {
      console.log("Resolution:", resolution);
      currentTime = normalizeToMidnightUTC(currentTime); // Start at midnight UTC
      while (currentTime < endTime) {
        bars.push({
          time: currentTime,
          open: 100 + Math.random() * 10,
          high: 105 + Math.random() * 10,
          low: 95 + Math.random() * 10,
          close: 100 + Math.random() * 10,
          volume: 1000 + Math.random() * 500
        });
        currentTime += 2 * 24 * 60 * 60 * 1000; // Increment by 2 days
      }
    } else if(false) {
      console.log("Resolution:", resolution);
      console.log("currentTime:", currentTime);
      console.log("endTime:", endTime);
      // Other intraday resolutions (default to 1-minute for simplicity)
      while (currentTime < endTime) {
        if(currentTime <= MIN_TIME_START){
            console.log('skipp')
            currentTime += 24 * 60 * 60 * 1000; // Increment by 1 day
            continue;
        } 
        bars.push({
          time: currentTime,
          open: 100 + Math.random() * 10,
          high: 105 + Math.random() * 10,
          low: 95 + Math.random() * 10,
          close: 100 + Math.random() * 10,
          volume: 1000 + Math.random() * 500
        });
        currentTime += 24 * 60 * 60 * 1000; // Increment by 1 day
      }
    }

    if (bars.length) {
      console.log("Bars generated for", resolution, ":", bars.map(b => ({ time: new Date(b.time), close: b.close })));
      onHistoryCallback(bars, { noData: false });
    } else {
      onHistoryCallback([], { noData: true });
    }

  },

   subscribeBars: function(symbolInfo, resolution, onRealtimeCallback, subscriberUID, onResetCacheNeededCallback) {

        console.log('[subscribeBars]:', symbolInfo.name, resolution, subscriberUID); // ETHUSD 15 ETHUSD_#_15









        if(!["BTCUSD", "ETHUSD", "SOLUSD", "XRPUSD", "ADAUSD", "BNBUSD", "DOGEUSD", "TRXUSD", "TRUMPUSD", "MELANIAUSD", "TONUSD", "SUIUSD", "LINKUSD", "BCHUSD", "LTCUSD", "DOTUSD", "AVAXUSD", "UNIUSD", "SHIBUSD", "MATICUSD", "AAVEUSD", "ATOMUSD", "FILUSD", "HBARUSD"].includes(symbolInfo.name)){
            //https://stockanalysis.com/api/quotes/s/tsla
            window.activeSubscriptions = window.activeSubscriptions || {};
            window.activeSubscriptions[subscriberUID] = {
                symbol: symbolInfo.name,
                resolution: resolution,
                callback: onRealtimeCallback,
                lastBarTime: 0,
                intervalId: null
            };

            // Align to the last 1-minute boundary
            window.activeSubscriptions[subscriberUID].lastBarTime = Date.now() - (Date.now() % (24 * 60 * 60 * 1000));
            
            // Use the last historical bar if available
            if (this.lastBars && this.lastBars.length) {
                window.activeSubscriptions[subscriberUID].lastBarTime = this.lastBars[this.lastBars.length - 1].time;
            }
            window.activeSubscriptions[subscriberUID].intervalId = setInterval(async () => {
                let data = await fetch(`https://stockanalysis.com/api/quotes/s/${symbolInfo.name.toLowerCase()}`).then(d => d.json());
                const newBar = {
                    time: window.activeSubscriptions[subscriberUID].lastBarTime,
                    open: data.data.o,
                    high: data.data.h,
                    low: data.data.l,
                    close: data.data.p,
                    volume: data.data.v
                };
                window.activeSubscriptions[subscriberUID].callback(newBar);
            }, 5 * 1000);  // 5-seconds interval


            return;
        }

        if (resolution === "7") {
          // Align to the last 5-minute boundary
          let lastBarTime = Date.now() - (Date.now() % (7 * 60 * 1000));
          
          // Use the last historical bar if available
          if (this.lastBars && this.lastBars.length) {
            lastBarTime = this.lastBars[this.lastBars.length - 1].time;
          }

          // Clear any existing interval to avoid duplicates
          if (window.realtimeInterval) {
            clearInterval(window.realtimeInterval);
          }

          window.realtimeInterval = setInterval(() => {
            lastBarTime += 7 * 60 * 1000; // Next 5-minute slot
            const newBar = {
              time: lastBarTime,
              open: 84200 + Math.random() * 10,
              high: 83600 + Math.random() * 10,
              low: 82600 + Math.random() * 10,
              close: 82600 + Math.random() * 10,
              volume: 1000 + Math.random() * 500
            };
            console.log("New 5-min bar:", newBar);
            onRealtimeCallback(newBar);
          }, 7 * 60 * 1000); // 10 seconds for testing; use 7 * 60 * 1000 (420000 ms) for real 7-minute updates
        }else if(resolution === "1") {

            window.activeSubscriptions = window.activeSubscriptions || {};
            window.activeSubscriptions[subscriberUID] = {
                symbol: symbolInfo.name,
                resolution: resolution,
                callback: onRealtimeCallback,
                lastBarTime: 0,
                intervalId: null
            };

            // Align to the last 1-minute boundary
            window.activeSubscriptions[subscriberUID].lastBarTime = Date.now() - (Date.now() % (1 * 60 * 1000));
            
            // Use the last historical bar if available
            if (this.lastBars && this.lastBars.length) {
                window.activeSubscriptions[subscriberUID].lastBarTime = this.lastBars[this.lastBars.length - 1].time;
            }
            
            window.activeSubscriptions[subscriberUID].intervalId = setInterval(async () => {
                let data = await fetchBinanceData("1m", symbolInfo.name.replace("USD", ""), window.activeSubscriptions[subscriberUID].lastBarTime, Date.now() + 60 * 1000);
                window.activeSubscriptions[subscriberUID].lastBarTime += 5 * 1000; // Next 10 seconds slot
                if(!data.length) return;
                const newBar = {
                    time: data[data.length-1][0],
                    open: data[data.length-1][1],
                    high: data[data.length-1][2],
                    low: data[data.length-1][3],
                    close: data[data.length-1][4],
                    volume: data[data.length-1][5]
                };
                window.activeSubscriptions[subscriberUID].callback(newBar);
            }, 5 * 1000);  // 5-seconds interval


/*

            return;
          // Align to the last 1-minute boundary
          let lastBarTime = Date.now() - (Date.now() % (parseInt(resolution) * 60 * 1000));
          
          // Use the last historical bar if available
          if (this.lastBars && this.lastBars.length) {
            lastBarTime = this.lastBars[this.lastBars.length - 1].time;
          }

          // Clear any existing interval to avoid duplicates
          if (window.realtimeInterval) {
            clearInterval(window.realtimeInterval);
          }


            window.activeSubscriptions[subscriberUID].intervalId = setInterval(async () => {
                    const sub = window.activeSubscriptions[subscriberUID];
                    let data = await fetchBinanceData(resolution + "m", symbolInfo.name.replace("USD", ""), lastBarTime, Date.now() + 60 * 1000);
                            if (!sub.lastBar) {
                                sub.callback(bar);
                                sub.lastBar = bar;
                            } else {
                                const lastTime = sub.lastBar.time / 1000;
                                const newTime = bar.time / 1000;
                                if (newTime >= lastTime + HOUR_IN_SECONDS) {
                                    sub.callback(bar);
                                    sub.lastBar = bar;
                                } else if (newTime === lastTime) {
                                    sub.callback({ ...sub.lastBar, ...bar });
                                }
                            }
            })


        return;
        window.realtimeInterval = setInterval(async () => {
            let data = await fetchBinanceData(resolution + "m", symbolInfo.name.replace("USD", ""), lastBarTime, Date.now() + 60 * 1000);
                if(!data.length) return;
            const newBar = {
              time: data[data.length-1][0],
              open: data[data.length-1][1],
              high: data[data.length-1][2],
              low: data[data.length-1][3],
              close: data[data.length-1][4],
              volume: data[data.length-1][5]
            };
            onRealtimeCallback(newBar);
          }, 1 * 5 * 1000);*/
        } else if(["5", "15", "30"].includes(resolution)){

            window.activeSubscriptions = window.activeSubscriptions || {};
            window.activeSubscriptions[subscriberUID] = {
                symbol: symbolInfo.name,
                resolution: resolution,
                callback: onRealtimeCallback,
                lastBarTime: 0,
                intervalId: null
            };

            // Align to the last 1-minute boundary
            window.activeSubscriptions[subscriberUID].lastBarTime = Date.now() - (Date.now() % (1 * 60 * 1000));
            
            // Use the last historical bar if available
            if (this.lastBars && this.lastBars.length) {
                window.activeSubscriptions[subscriberUID].lastBarTime = this.lastBars[this.lastBars.length - 1].time;
            }
            
            window.activeSubscriptions[subscriberUID].intervalId = setInterval(async () => {
                let data = await fetchBinanceData("1m", symbolInfo.name.replace("USD", ""), window.activeSubscriptions[subscriberUID].lastBarTime, Date.now() + 60 * 1000);
                window.activeSubscriptions[subscriberUID].lastBarTime += 5 * 1000; // Next 10 seconds slot
                if(!data.length) return;
                const newBar = {
                    time: data[data.length-1][0],
                    open: data[data.length-1][1],
                    high: data[data.length-1][2],
                    low: data[data.length-1][3],
                    close: data[data.length-1][4],
                    volume: data[data.length-1][5]
                };
                window.activeSubscriptions[subscriberUID].callback(newBar);
            }, 5 * 1000);  // 5-seconds interval
        } else if(["60", "120", "180", "240", "300", "360", "480", "720"].includes(resolution)){

            window.activeSubscriptions = window.activeSubscriptions || {};
            window.activeSubscriptions[subscriberUID] = {
                symbol: symbolInfo.name,
                resolution: resolution,
                callback: onRealtimeCallback,
                lastBarTime: 0,
                intervalId: null
            };

            let getHours = Math.round(parseInt(resolution) / 60);

            // Align to the last 1-minute boundary
            window.activeSubscriptions[subscriberUID].lastBarTime = Date.now() - (Date.now() % (getHours * 60 * 60 * 1000));
            
            // Use the last historical bar if available
            if (this.lastBars && this.lastBars.length) {
                window.activeSubscriptions[subscriberUID].lastBarTime = this.lastBars[this.lastBars.length - 1].time;
            }
            
            window.activeSubscriptions[subscriberUID].intervalId = setInterval(async () => {
                let data = await fetchBinanceData( getHours + "h", symbolInfo.name.replace("USD", ""), window.activeSubscriptions[subscriberUID].lastBarTime, Date.now() + getHours * 60 * 60 * 1000);
                //window.activeSubscriptions[subscriberUID].lastBarTime += 5 * 1000; // Next 5 seconds slot
                if(!data.length) return;
                const newBar = {
                    time: Date.now(),
                    open: data[data.length-1][1],
                    high: data[data.length-1][2],
                    low: data[data.length-1][3],
                    close: data[data.length-1][4],
                    volume: data[data.length-1][5]
                };
                window.activeSubscriptions[subscriberUID].callback(newBar);
            }, 3 * 1000);  // 3-seconds interval
        } else if(["1D"].includes(resolution)){
            window.activeSubscriptions = window.activeSubscriptions || {};
            window.activeSubscriptions[subscriberUID] = {
                symbol: symbolInfo.name,
                resolution: resolution,
                callback: onRealtimeCallback,
                lastBarTime: 0,
                intervalId: null
            };

            // Align to the last 1-minute boundary
            window.activeSubscriptions[subscriberUID].lastBarTime = Date.now() - (Date.now() % (24 * 60 * 60 * 1000));
            
            // Use the last historical bar if available
            if (this.lastBars && this.lastBars.length) {
                window.activeSubscriptions[subscriberUID].lastBarTime = this.lastBars[this.lastBars.length - 1].time;
            }

            
            window.activeSubscriptions[subscriberUID].intervalId = setInterval(async () => {
                let data = await fetchBinanceData("1d", symbolInfo.name.replace("USD", ""), window.activeSubscriptions[subscriberUID].lastBarTime, Date.now() + 24 * 60 *  60 * 1000);
                
                //window.activeSubscriptions[subscriberUID].lastBarTime += 5 * 1000; // Next 5 seconds slot
                if(!data.length) return;
                const newBar = {
                    time: data[data.length-1][0],
                    open: data[data.length-1][1],
                    high: data[data.length-1][2],
                    low: data[data.length-1][3],
                    close: data[data.length-1][4],
                    volume: data[data.length-1][5]
                };
                window.activeSubscriptions[subscriberUID].callback(newBar);
            }, 3 * 1000);  // 3-seconds interval
        }
      },

    unsubscribeBars: function(subscriberUID) {
        console.log('[unsubscribeBars]: Unsubscribed', subscriberUID);
        if (window.activeSubscriptions && window.activeSubscriptions[subscriberUID]) {
            clearInterval(window.activeSubscriptions[subscriberUID].intervalId);
            delete window.activeSubscriptions[subscriberUID];
        }
    }
};


window.onload = function() {
  const widgetOptions = {
    symbol: "BTCUSD",
    interval: "15",
    container: "chart_container",
    datafeed: DummyDatafeed,
    library_path: "lib/",
    timeframe: "15",
    supported_resolutions: ["1", "3", "5", "15", "30", "60", "120", "180", "240","300", "360", "480", "720", "D", "2D", "3D", "4D", "5D", "6D", "10D", "15D", "45D", "1W", "2W", "3W", "1M", "2M", "3M", "6M"],
    debug: false,
    fullscreen: false,
    autosize: true,
    timezone: "Etc/UTC",
    theme: "dark",
    time_frames: [ 
      { text: "1m", resolution: "1" },
      { text: "3m", resolution: "3" },
      { text: "5m", resolution: "5" },
      { text: "15m", resolution: "15" },
      { text: "30m", resolution: "30" },
      { text: "1h", resolution: "60" },
      { text: "2h", resolution: "120" },
      { text: "3h", resolution: "180" },
      { text: "4h", resolution: "240" },
      { text: "6h", resolution: "360" },
      { text: "8h", resolution: "480" },
      { text: "12h", resolution: "720" },
      { text: "1D", resolution: "D" },
      { text: "2D", resolution: "2D" },
      { text: "3D", resolution: "3D" }
    ],
    // Explicitly enable the save/load button
    enabled_features: ["header_saveload", "header_symbol_search", "show_symbol_logos"], // Added show_symbol_logos
    
    // Ensure no accidental disabling
    disabled_features: [],
  };

  const widget = new TradingView.widget(widgetOptions)


  widget.onChartReady(() => {
    console.log("Chart ready. Setting up save functionality...");

    // Save function
    function saveChartSettings() {
      try {
        widget.save((data) => {
          window.localStorage.setItem("savedChartSettings", JSON.stringify(data));
          console.log("Chart settings saved:", data);
        });
      } catch (e) {
        console.error("Error saving chart settings:", e);
        // Fallback if widget.save doesn't work as expected
        const chart = widget.activeChart();
        if (chart && typeof chart.save === "function") {
          chart.save((data) => {
            window.localStorage.setItem("savedChartSettings", JSON.stringify(data));
            console.log("Saved via activeChart:", data);
          });
        } else {
          console.log("No save method available.");
        }
      }
    }

    // Load function
    function loadChartSettings() {
      const savedData = window.localStorage.getItem("savedChartSettings");
      if (savedData) {
        try {
          widget.load(JSON.parse(savedData));
          console.log("Chart settings loaded");
        } catch (e) {
          console.error("Error loading chart settings:", e);
          const chart = widget.activeChart();
          if (chart && typeof chart.load === "function") {
            chart.load(JSON.parse(savedData));
            console.log("Loaded via activeChart");
          }
        }
      }
    }

    // Subscribe to onAutoSaveNeeded
    try {
      widget.subscribe("onAutoSaveNeeded", () => {
        console.log("onAutoSaveNeeded triggered");
        saveChartSettings();
        // Optionally reload settings after save (if needed)
        // loadChartSettings();
      });
      console.log("Successfully subscribed to onAutoSaveNeeded");
    } catch (e) {
      console.error("Failed to subscribe to onAutoSaveNeeded:", e);
      // Fallback to interval change
      widget.activeChart().onIntervalChanged().subscribe(null, () => {
        console.log("Interval changed, saving settings");
        saveChartSettings();
      });
    }

    // Load settings on startup
    loadChartSettings();

    // Expose save function for manual testing
    window.saveChartSettings = saveChartSettings;
  });

};







async function fetchHyperLiquidData(interval, coin, currentTime, endTime){
    return new Promise((resolve, reject) => {
        // Define the payload
        const payload = {
            "req": {
                "coin": coin,               // "BTC"
                "endTime": endTime,         // to timestamp
                "interval": interval,       // "15m"
                "startTime": currentTime    // from timestamp
            },
            "type": "candleSnapshot"
        };

        // Fetch request
        fetch("https://api-ui.hyperliquid.xyz/info", {
        method: "POST", // Assuming POST; change to GET if needed
        headers: {
            "Content-Type": "application/json", // Tell the server we're sending JSON
        },
        body: JSON.stringify(payload) // Convert payload to JSON string
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json(); // Parse the JSON response
        })
        .then(data => {
            resolve(data); // Return the response
        })
        .catch(error => {
            console.error("Fetch error:", error); // Log any errors
        });
    });
}

async function fetchBinanceData(interval, coin, currentTime, endTime){
    
    return new Promise(async (resolve, reject) => {
        // from = currentTime
        // to = endTime

        let intervalStep;
        switch(interval){
            case "1m":
                intervalStep = 60000; // 1 min (in milliseconds)
                break;
            case "3m":
                intervalStep = 3 * 60000; // 3 min (in milliseconds)
                break;
            case "5m":
                intervalStep = 15 * 60000; // 15 min (in milliseconds)
                break;
            case "30m":
                intervalStep = 30 * 60000; // 30 min (in milliseconds)
                break;
            case "1h":
                intervalStep = 60 * 60000; // 1 h (in milliseconds)
                break;
            case "2h":
                intervalStep = 2 * 60 * 60000;
                break;
            case "4h":
                intervalStep = 4 * 60 * 60000;
                break;
            case "6h":
                intervalStep = 6 * 60 * 60000;
                break;
            case "8h":
                intervalStep = 8 * 60 * 60000;
                break;
            case "12h":
                intervalStep = 12 * 60 * 60000;
                break;
            case "1d":
                intervalStep = 86400000; // 1 Day (in milliseconds)
                break;
            default:
                intervalStep = 86400000; // 1 Day (in milliseconds)
        }

        currentTime = Math.floor(currentTime / intervalStep) * intervalStep;
        endTime = Math.floor(endTime / intervalStep) * intervalStep;
    
        const maxBarCount = 1000;
        let totalBarCount = (endTime - currentTime) / intervalStep;
        let throttleCount = Math.ceil(totalBarCount / maxBarCount);
        //console.log(throttleCount, totalBarCount)



        let _currentTime = throttleCount > 1 ? endTime - maxBarCount * intervalStep : currentTime;
        let _endTime = endTime;
        let data = [];
        for(let loop = 0; loop < throttleCount; loop++){
            // Fetch data
            let _data = await _fetchBinanceData(interval, coin, _currentTime, _endTime);
            data = _data.concat(data);
            // Set next endTime
            _endTime = _currentTime 
            // Check if next iteration is final
            if(loop === throttleCount - 2)
                _currentTime = currentTime
            else
                _currentTime = _endTime - maxBarCount * intervalStep;
            await delay(100);
        }
        resolve(data);
    });
}

async function delay(ms){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{resolve(1)},ms)
    });
}

async function _fetchBinanceData(interval, coin, currentTime, endTime){
    return new Promise((resolve, reject) => {
        // Fetch request
        // Binance API from - inclusive; to - inclusive
        let url = `https://foodify-ai.great-site.net/binance.php?symbol=${coin}USDT&interval=${interval}&startTime=${currentTime}&endTime=${endTime-1}&isPerpetualContract=${["MELANIA"].includes(coin) ? 1 : 0}`;
        fetch(url, {
            method: "GET", 
            headers: {
                'Accept': 'application/json',
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json(); // Parse the JSON response
        })
        .then(data => {
            resolve(data.status === "success" && data.data ? data.data : []); // Return the response
        })
        .catch(error => {
            console.error("Fetch error:", error); // Log any errors
        });
    });
}




async function fetchMacroTrendsData(ticker, currentTime, endTime){
    return new Promise((resolve, reject) => {// Fetch request
        let url = `https://foodify-ai.great-site.net/macrotrends.php?ticker=${ticker}&startTime=${currentTime}&endTime=${endTime}`;
        fetch(url, {
            method: "GET", 
            headers: {
                'Accept': 'application/json',
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json(); // Parse the JSON response
        })
        .then(data => {
            resolve(data.status === "success" && data.data ? data.data : []); // Return the response
        })
        .catch(error => {
            console.error("Fetch error:", error); // Log any errors
        });
    });
}


  </script>
</body>
</html>