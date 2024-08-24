import { useState } from "react";
import Coin from '../../src/Coin.svg'
const FlipCoin = ({ balance, setBalance, setLossAmount, setWinAmount, winAmount, lossAmount }) => {
  const [bet, setBet] = useState("");
  const [valid, setValid] = useState(true);
  const [call, setCall] = useState("");
  const HandleBetAmount = (e) => {
    console.log(Number(balance));
    console.log(Number(e.target.value));
    if (!isNaN(e.target.value) && Number(e.target.value) <= Number(balance)) {
      setBet(e.target.value);
      setValid(true);
    } else {
      setValid(false);
    }
  };
  const HandleClickFlip = () => {
    if (call === "") {
      return;
    }
    setTimeout(() => {}, 2000);
    const result = Math.floor(Math.random() * 10) % 2 ? 0 : 1;
    if ((result && call === "Heads") || (!result && call === "Tails")) {
      console.log("you win");
      alert("you win")
      setBalance(Number(balance) + Number(bet));
      setWinAmount(Number(winAmount) + Number(bet));
      setBet("");
    } else {
      console.log("better luck next time");
      alert("sorry! better luck next time")
      setBalance(Number(balance) - Number(bet));
      setLossAmount(Number(lossAmount) + Number(bet));
      setBet("");
    }
    setCall("");
  };

  return (
    <div className="w-full flex flex-col justify-center items-center space-y-4 border-solid border-2 border-black min-h-[450px]">
      <button className="btn btn-primary ">
      {/* <button className="btn btn-primary animate-spin-slow"> */}
        <img src={Coin} alt="Coin" />
      </button>

      <div className="flex flex-col justify-center items-center space-y-4">
        <input
          type="text"
          value={bet}
          placeholder="Enter Bet Amount"
          onChange={HandleBetAmount}
        />
        <p>{!valid && "You can't bet more than your balance"}</p>
        <div className="flex flex-row justify-center items-center space-x-8">
          <button
            className="rounded-sm bg-blue-500 text-white text-lg px-3 py-2 w-20 focus:bg-red-500"
            onClick={() => {
              setCall("Heads");
            }}
          >
            Heads
          </button>
          <button
            className="rounded-sm bg-blue-500 text-white text-lg px-3 py-2 w-20 focus:bg-red-500"
            onClick={() => {
              setCall("Tails");
            }}
          >
            Tails
          </button>
        </div>
        <button
          className="btn btn-primary rounded-sm bg-blue-500 text-white text-lg px-3 py-2 w-20 active:bg-red-500"
          onClick={HandleClickFlip}
        >
          Play
        </button>
        <p>{call === "" ? "Choose Your call" : `your call is ${call}`}</p>
      </div>
    </div>
  );
};

export default FlipCoin;
