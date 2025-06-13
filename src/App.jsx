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
 import { clusterApiUrl } from '@solana/web3.js';
 import '@solana/wallet-adapter-react-ui/styles.css'; 


 //Todo: Show balance,
 //      Sign a transaction
 //      Sending Solana
function App() {
   return (
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/tfWqTKwOZBE7hBEsKtSga"}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <WalletMultiButton></WalletMultiButton>
          <WalletDisconnectButton></WalletDisconnectButton>
        <Airdrop></Airdrop>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
   
  )
}

export default App
    