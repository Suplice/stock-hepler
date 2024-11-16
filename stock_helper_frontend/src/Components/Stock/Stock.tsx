import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget() {
  const container = useRef();
  const scriptAppended = useRef(false); // Tracks if the script is already added

  useEffect(() => {
    if (scriptAppended.current) return; // Prevent duplicate script insertion
    scriptAppended.current = true;

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "autosize": true,
          "symbol": "NASDAQ:AAPL",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "2",
          "locale": "en",
          "allow_symbol_change": true,
          "save_image": false,
          "calendar": false,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`;
    container.current.appendChild(script);
  }, []);

  return <div className=" w-full h-[800px]" ref={container}></div>;
}

export default memo(TradingViewWidget);
