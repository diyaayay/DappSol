import { useConnection, useWallet } from "@solana/wallet-adapter-react"

export function Airdrop() {
    const wallet = useWallet();
    const { connection } = useConnection();

    async function sendAirdropToUser() {
        const amount = document.getElementById(publicKey).value;
        await connection.requestAirdrop(wallet.publicKey, amount * 1000000000);
        alert("Airdropped sol!");
    }
    return <div>
        {/* Hi cutie {wallet.publicKey.toString()} */}
        <input id ="publicKey" type="text" placeholder="Amount">
        </input>
        <button onClick={sendAirdropToUser}>Send Airdrop</button>
    </div>
}