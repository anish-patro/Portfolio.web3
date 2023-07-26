import { useState } from "react";
import ABI from "./ABI.json";
import Web3 from "web3";
import "./Wallet.css";

const Wallet = ({ saveState }) => {
  const [connected, setConnected] = useState(false);
  const init = async () => {
    try {
      const web3 = new Web3(window.ethereum);
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const contract = new web3.eth.Contract(
        ABI,  
        "0xc6E21997d91D00677fE691Ce6cFAd387549688A5"
      );
      setConnected(true);
      saveState({ web3: web3, contract: contract });
      
    } catch (error) {
      alert("Please Install Metamask");
    }
  };

  return (
    <>
      <div className="header">
        <button className="connectBTN" onClick={init} disabled={connected}>
          {!connected ? "Connect Metamask": "Connected"}
        </button>
      </div>
    </>
  );
};

export default Wallet;
