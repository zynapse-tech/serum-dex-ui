import { HashRouter, Route } from 'react-router-dom';
import TradePage from './pages/TradePage';
import OpenOrdersPage from './pages/OpenOrdersPage';
import React from 'react';
import BalancesPage from './pages/BalancesPage';
import ConvertPage from './pages/ConvertPage';
import BasicLayout from './components/BasicLayout';
import ListNewMarketPage from './pages/ListNewMarketPage';
import HowToTradePage from './pages/HowToTradePage';
import SolanaBloackExplorerPage from './pages/SolanaBloackExplorerPage';
import SolanaDashboardPage from './pages/SolanaDashboardPage';

export function Routes() {
  return (
    <HashRouter basename={'/'}>
      <Route exact path="/" component={TradePageContents} />
      <Route exact path="/trade/:pair" component={TradePageContents} />
      <Route exact path="/orders" component={OpenOrdersPageContents} />
      <Route exact path="/balances" component={BalancesPageContents} />
      <Route exact path="/convert" component={ConvertPageContents} />
      <Route exact path="/list-new-market">
        <BasicLayout>
          <ListNewMarketPage />
        </BasicLayout>
      </Route>
      <Route exact path="/how-to-trade" component={HowToTradePageContents} />
      <Route exact path="/solana-dashboard" component={SolanaDashboardPageContents} />
      <Route exact path="/solana-explorer" component={SolanaBloackExplorerPageContents} />
    </HashRouter>
  );
}

function TradePageContents() {
  return (
    <BasicLayout>
      <TradePage />
    </BasicLayout>
  );
}

function OpenOrdersPageContents() {
  return (
    <BasicLayout>
      <OpenOrdersPage />
    </BasicLayout>
  );
}

function BalancesPageContents() {
  return (
    <BasicLayout>
      <BalancesPage />
    </BasicLayout>
  );
}

function HowToTradePageContents() {
  return (
    <BasicLayout>
      <HowToTradePage />
    </BasicLayout>
  );
}


function SolanaBloackExplorerPageContents() {
  return (
    <BasicLayout>
      <SolanaBloackExplorerPage />
    </BasicLayout>
  );
}

function SolanaDashboardPageContents() {
  return (
    <BasicLayout>
      <SolanaDashboardPage />
    </BasicLayout>
  );
}
 
function ConvertPageContents() {
  return (
    <BasicLayout>
      <ConvertPage />
    </BasicLayout>
  );
} 