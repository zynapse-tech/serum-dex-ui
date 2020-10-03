import React from 'react';
import { useOpenOrdersForAllMarkets } from '../utils/markets';
import FloatingElement from '../components/layout/FloatingElement';
import styled from 'styled-components';

export default function HowToTradePage() {

  const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px 16px;
  .borderNone .ant-select-selector {
    border: none !important;
  }
`;

  const [openOrders] = useOpenOrdersForAllMarkets();
  return (
     
      <iframe src='https://serum-academy.com/en/serum-dex/sol-wallet/' 
      style={{
      height: '1000px',  
      width:'100%',    
      background:'#ffffff'}}
      />  
  );
}
