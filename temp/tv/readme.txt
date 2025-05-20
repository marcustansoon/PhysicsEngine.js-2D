https://static.tradingview.com/static/bundles/73642.f3e6222ab67e31aec01a.js
https://static.tradingview.com/static/bundles/toast-ad.574e744c45d8295d0aac.js
https://static.tradingview.com/static/bundles/alerts-collection.f5b7e0d4e5440ed07870.js

complex_limit

blk 
snowplow-pixel.tradingview.com/com.tradingview/track
telemetry.tradingview.com/free/report
data.tradingview.com/ping



(function () {
  const blockedScripts = [
    "73642.f3e6222ab67e31aec01a.js",
    "alerts-collection.f5b7e0d4e5440ed07870.js",
    "toast-ad.574e744c45d8295d0aac.js"
  ];

  const observer = new MutationObserver(() => {
    // Block <script src="...">
    document.querySelectorAll("script[src]").forEach(script => {
      if (blockedScripts.some(part => script.src.includes(part))) {
        console.log("🚫 Blocking TradingView script:", script.src);
        script.remove();

        // Optional: Inject a stub or override
        const replacement = document.createElement("script");
        replacement.textContent = `
          console.log("✅ Custom script injected for blocked: ${script.src}");

          // Optional override logic
          window.alert = function() {
            console.log("🚫 Suppressed alert()");
          };
        `;
        document.head.appendChild(replacement);
      }
    });

    // Block <link rel="preload">
    document.querySelectorAll('link[rel="preload"][href]').forEach(link => {
      if (blockedScripts.some(part => link.href.includes(part))) {
        console.log("🚫 Blocking preload:", link.href);
        link.remove();
      }
    });
  });

  observer.observe(document.documentElement, { childList: true, subtree: true });
})();
