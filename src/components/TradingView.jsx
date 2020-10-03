import React from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import { useMarket} from '../utils/markets';

export default function TradingView (){
  
  const { baseCurrency, quoteCurrency } = useMarket();
  var symbol = baseCurrency ? `FTX:${baseCurrency}USDT`: 'FTX:ETHUSDT';

  if(baseCurrency === 'ALEPH'){
    symbol = 'KUCOIN:ALEPHUSDT';
  }else if(baseCurrency === 'FRONT'){
    symbol = 'OKEX:FRONTUSDT';
  }
  else if(baseCurrency === 'HXRO'){
    symbol = 'BITTREX:HXROUSDT';
  }
  
   
  return  (
    <TradingViewWidget
      symbol={symbol}
      theme={Themes.DARK}
      locale='en'
      autosize
      range='5d'
      interval='180'
    />); 

}