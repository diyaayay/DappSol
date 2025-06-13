import { WalletAccountError } from "@solana/wallet-adapter-base";
import { useWallet } from "@solana/wallet-adapter-react";
import { use } from "react";



export function showBal(){
    async function getBal(){
        const wallet = useWallet();
        
    }
    return (
        <div>
            <h2>
                Your Balance is: {}
            </h2>
        </div>
    );
}