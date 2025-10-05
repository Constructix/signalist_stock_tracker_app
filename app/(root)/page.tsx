import React from "react";
import TradingViewWidget from "@/components/TradingViewWidget";
import {
  HEATMAP_WIDGET_CONFIG,
  MARKET_DATA_WIDGET_CONFIG,
  MARKET_OVERVIEW_WIDGET_CONFIG,
  TOP_STORIES_WIDGET_CONFIG,
} from "@/lib/constants";

const Home = () => {
  const tradingViewURL: string = `https://s3.tradingview.com/external-embedding/embed-widget`;
  return (
    <div className="flex min-h-screen home-wrapper">
      <section className="className grid w-full gap-8 home-section">
        <div className="className md:col-span xl:col-span-1">
          <TradingViewWidget
            title="Market Overview"
            scriptUrl={`${tradingViewURL}-market-overview.js`}
            config={MARKET_OVERVIEW_WIDGET_CONFIG}
            className="custom-chart"
            height={600}
          />
        </div>
        <div className="md-col-span xl:col-span-2">
          <TradingViewWidget
            title="Stock Heatmap"
            scriptUrl={`${tradingViewURL}-stock-heatmap.js`}
            config={HEATMAP_WIDGET_CONFIG}
            className="custom-chart"
            height={600}
          />
        </div>
        {/* Third */}
      </section>
      <section className="grid w-full gap-8 home-section">
        <div className="h-full md:col-span-1 xl:col-span-1">
          <TradingViewWidget
            // title="Market News"
            scriptUrl={`${tradingViewURL}-timeline.js`}
            config={TOP_STORIES_WIDGET_CONFIG}
            className="custom-chart"
            height={600}
          />
        </div>
        {/* 4th  */}
        <div className="h-full md:col-span-1 xl:col-span-2">
          <TradingViewWidget
            // title="Market Quotes"
            scriptUrl={`${tradingViewURL}-market-quotes.js`}
            config={MARKET_DATA_WIDGET_CONFIG}
            className="custom-chart"
            height={600}
          />
        </div>
      </section>
    </div>
  );
};
export default Home;
