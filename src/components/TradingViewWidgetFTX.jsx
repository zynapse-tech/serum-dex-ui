import React from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import { useMarket} from '../utils/markets';

export default function TradingViewWidgetFTX (){
  
  const { baseCurrency, quoteCurrency } = useMarket();
  const symbol = baseCurrency ? `FTX:${baseCurrency}USDT`: 'FTX:ETHUSDT';
   
  return  (
    <TradingViewWidget
      symbol={symbol}
      theme={Themes.DARK}
      locale='en'
      autosize
      range='MTD'
      interval='4H'
    />); 

}