import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';


export const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism,
  chain.polygonMumbai, chain.arbitrum],
  [
    alchemyProvider({ apiKey: "https://polygon-mumbai.g.alchemy.com/v2/ENbwxd4VuV1J_6m7LmkY0PI0lXFUT5YT" }),
    publicProvider()
  ]
);
const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});
export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
