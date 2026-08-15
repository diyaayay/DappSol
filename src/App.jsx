import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import { WalletModalProvider,
         WalletDisconnectButton,
         WalletMultiButton,
         WalletConnectButton
 } from '@solana/wallet-adapter-react-ui';
 import { Airdrop } from './Airdrop';
 import { ShowBal } from './showBal';
 import { SendTokens } from './Sendtxn';
 import { clusterApiUrl } from '@solana/web3.js';
 import '@solana/wallet-adapter-react-ui/styles.css'; 


 //Todo: Show balance,
 //      Sign a transaction
 //      Sending Solana
function App() {
   return (
    <ConnectionProvider endpoint={import.meta.env.VITE_RPC_URL ?? clusterApiUrl(WalletAdapterNetwork.Devnet)}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <WalletMultiButton />
            <WalletDisconnectButton />
          </div>
        <Airdrop></Airdrop>
        <SendTokens></SendTokens>
        <ShowBal></ShowBal>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
   
  )
}

export default App
    