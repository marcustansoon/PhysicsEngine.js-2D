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
<body><button onclick="window.saveChartSettings()">Save Chart</button>
  <div id="chart_container"></div>

  <script type="text/javascript" src="lib/charting_library.js"></script>

  <script type="text/javascript">
 const DummyDatafeed = {
  onReady: function(callback) {
    setTimeout(() => {
      callback({
        exchanges: [],
        symbols_types: [],
        supported_resolutions: ["1", "5", "15", "7", "60", "D", "2D"], // Add "2D"
        supports_marks: false,
        supports_timescale_marks: false,
        supports_time: true,
            supports_realtime: true // Explicitly enable real-time support
      });
    }, 100);
  },

  searchSymbols: function(userInput, exchange, symbolType, onResultReadyCallback) {
    onResultReadyCallback([]);
  },

  resolveSymbol: function(symbolName, onSymbolResolvedCallback, onResolveErrorCallback) {
    setTimeout(() => {
      const symbolInfo = {
        name: symbolName,
        description: "Dummy Stock",
        type: "stock",
        session: "24x7",
        timezone: "Etc/UTC",
        ticker: symbolName,
        minmov: 1,
        pricescale: 100,
        has_intraday: true,
        has_daily: true,
        intraday_multipliers: ["1", "5", "15", "7", "60"],
        supported_resolutions: ["1", "5", "15", "7", "60", "D", "2D"], // Add "2D"
        volume_precision: 2,
      };
      onSymbolResolvedCallback(symbolInfo);
    }, 100);
  },

  getBars: function(symbolInfo, resolution, periodParams, onHistoryCallback, onErrorCallback) {
    const bars = [];
    let currentTime = periodParams.from * 1000; // Start time in milliseconds
    const endTime = periodParams.to * 1000; // End time in milliseconds

    const MIN_TIME_START = 1735689600000; // January 1, 2025, 00:00:00 UTC in milliseconds




    // If the entire requested range is before MIN_TIME_START, return no data
    if (endTime <= MIN_TIME_START) {
      console.log(`Requested range (${new Date(currentTime)} to ${new Date(endTime)}) is before min time ${new Date(MIN_TIME_START)}. Returning no data.`);
      onHistoryCallback([], { noData: true });
      return;
    }




    // Helper function to normalize time to midnight UTC
    function normalizeToMidnightUTC(timestamp) {
      const date = new Date(timestamp);
      date.setUTCHours(0, 0, 0, 0);
      return date.getTime();
    }

    if (resolution === "7") {
      // 7-minute timeframe
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
    } else if (resolution === "5") {
      // 5-minute timeframe
      while (currentTime < endTime) {
        bars.push({
          time: currentTime,
          open: 100 + Math.random() * 10,
          high: 105 + Math.random() * 10,
          low: 95 + Math.random() * 10,
          close: 100 + Math.random() * 10,
          volume: 1000 + Math.random() * 500
        });
        currentTime += 5 * 60 * 1000; // Increment by 5 minutes
      }
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
    } else {
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
        console.log(`Subscribing to ${resolution} bars for ${symbolInfo.ticker}`);
        if (resolution === "7") {
          // Align to the last 7-minute boundary
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
            lastBarTime += 7 * 60 * 1000; // Next 7-minute slot
            const newBar = {
              time: lastBarTime,
              open: 100 + Math.random() * 10,
              high: 105 + Math.random() * 10,
              low: 95 + Math.random() * 10,
              close: 100 + Math.random() * 10,
              volume: 1000 + Math.random() * 500
            };
            console.log("New 7-min bar:", newBar);
            onRealtimeCallback(newBar);
          }, 7 * 60 * 1000); // 10 seconds for testing; use 7 * 60 * 1000 (420000 ms) for real 7-minute updates
        }else if(resolution === "1") {
            console.log('1min')
          // Align to the last 1-minute boundary
          let lastBarTime = Date.now() - (Date.now() % (1 * 60 * 1000));
            console.log(lastBarTime)
          
          // Use the last historical bar if available
          if (this.lastBars && this.lastBars.length) {
            lastBarTime = this.lastBars[this.lastBars.length - 1].time;
          }

          // Clear any existing interval to avoid duplicates
          if (window.realtimeInterval) {
            clearInterval(window.realtimeInterval);
          }



          window.realtimeInterval = setInterval(() => {
            lastBarTime += 1 * 60 * 1000; // Next 1-minute slot
            console.log(lastBarTime)
            const newBar = {
              time: lastBarTime,
              open: 100 + Math.random() * 10,
              high: 105 + Math.random() * 10,
              low: 95 + Math.random() * 10,
              close: 100 + Math.random() * 10,
              volume: 1000 + Math.random() * 500
            };
            console.log("New 1-min bar:", newBar);
            onRealtimeCallback(newBar);
          }, 1 * 60 * 1000); // use 7 * 60 * 1000 (420000 ms) for real 7-minute updates
        }
      },

  unsubscribeBars: function(subscriberUID) {
    clearInterval(window.realtimeInterval);
  }
};

window.onload = function() {
  const widgetOptions = {
    symbol: "DUMMY:STOCK",
    interval: "7",
    container: "chart_container",
    datafeed: DummyDatafeed,
    library_path: "lib/",
    timeframe: "7",
    supported_resolutions: ["1", "5", "15", "7", "60", "D", "2D"], // Add "2D"
    debug: true,
    fullscreen: false,
    autosize: true,
    timezone: "Etc/UTC",
    theme: "dark",
    time_frames: [ // Optional: Define how "2D" appears in the UI
      { text: "1m", resolution: "1" },
      { text: "5m", resolution: "5" },
      { text: "15m", resolution: "15" },
      { text: "7m", resolution: "7" },
      { text: "1h", resolution: "60" },
      { text: "1D", resolution: "D" },
      { text: "2D", resolution: "2D" }
    ],
    // Explicitly enable the save/load button
    enabled_features: ["header_saveload"],
    // Ensure no accidental disabling
    disabled_features: []
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

  </script>
</body>
</html>