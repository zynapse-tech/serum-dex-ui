import React from 'react'; 
import styled from 'styled-components';

export default function SolanaBloackExplorer() {
 
  return (
     
      <iframe src='https://explorer.solana.com/' 
      style={{
      height: '100vh',  
      width:'100%',    
      background:'#000000',
      borderWidth: 'inherit'}}
      />  
  );
}
