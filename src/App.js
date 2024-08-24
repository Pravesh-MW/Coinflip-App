import { useEffect, useState } from "react";
import FlipCoin from "./components/FlipCoin";
import Wallet from "./components/Wallet";

function App() {
  const [balance, setBalance] = useState(Number(0));
  const [lossAmount, setLossAmount] = useState("0");
  const [winAmount, setWinAmount] = useState("0");
  useEffect(()=>{
    console.log(balance);
  },[balance])
  return (
    <div className="flex justify-center items-center flex-col space-y-8">
      <h1 className="flex justify-center items-center text-blue-500 font-bold text-4xl">App</h1>
      <div className="w-full flex flex-col justify-center items-center space-y-4 md:flex-row md:space-x-4 md:justify-around">
        <Wallet balance={balance} setBalance={setBalance} winAmount={winAmount} lossAmount={lossAmount}/>
        <FlipCoin balance={balance} setBalance={setBalance} setLossAmount={setLossAmount} setWinAmount={setWinAmount} winAmount={winAmount} lossAmount={lossAmount}  />
      </div>
    </div>
  );
}

export default App;
