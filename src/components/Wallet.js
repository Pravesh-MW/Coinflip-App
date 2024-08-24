import React, { useState } from "react";

const Wallet = ({ balance, setBalance , winAmount, lossAmount }) => {
  const [amount, setAmount] = useState("");
  const [withdraw, setWithdraw] = useState("");
  const HandleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const HandleAddWallet = () => {
    if (!isNaN(amount)) {
      setBalance(Number(balance) + Number(amount));
      setAmount("");
    } else {
      alert("Invalid amount");
      setAmount("");
    }
  };

  const HandleWithdrawChange = (e) => {
    setWithdraw(e.target.value);
  };

  const HandleWithdraw = () => {
    if (!isNaN(withdraw)) {
      if (Number(withdraw) <= Number(balance)) {
        setBalance(Number(balance) - Number(withdraw));
        setWithdraw("");
        alert("Withdraw Success");
      } else {
        alert("Insufficient balance");
      }
    } else {
      alert("Invalid Withdraw amount");
      setWithdraw("");
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center space-y-4 border-solid border-2 border-black min-h-[450px] pr-1">
      <h1 className="text-black text-3xl font-bold">Wallet</h1>
      <div className="flex flex-row space-x-2">
        <p className="bg-blue-500 px-2 py-1 text-white text-lg">Available balance. </p>
        <p className="px-2 py-1 text-black text-lg">${balance}</p>
      </div>
      <div className="flex flex-row justify-center items-center space-x-8">
        <input
          type="text"
          className="border-2"
          onChange={HandleAmountChange}
          placeholder="Add in Wallet"
          value={amount}
          />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={HandleAddWallet}>Add</button>
      </div>
      <div className="flex flex-row justify-center items-center space-x-8">
        <input
          type="text"
          className="border-2"
          onChange={HandleWithdrawChange}
          placeholder="Withdraw from Wallet"
          value={withdraw}
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={HandleWithdraw}>Withdraw</button>
      </div>
      <div className="flex flex-row justify-center items-center space-x-8">
        <div className="flex flex-col space-y-2">
            <p className="bg-green-500 px-2 py-1 text-white text-lg">Win</p>
            <p className="px-2 py-1 text-black text-lg">${winAmount}</p>
        </div>
        <div className="flex flex-col space-y-2">
            <p className="bg-red-500 px-2 py-1 text-white text-lg">Loss</p>
            <p className="px-2 py-1 text-black text-lg">${lossAmount}</p>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
