import React, { useState } from "react";
import logo from "../../../assets/logo.png";

function TokenPay() {
  // Define state variables for input values
  const [destinationSelector, setDestinationSelector] = useState("dummy_value");
  const [chainID, setChainID] = useState("");
  const [receiverAddress, setReceiverAddress] = useState("dummy_value");
  const [tokenAddress, setTokenAddress] = useState("dummy_value");
  const [amount, setAmount] = useState("dummy_value");

  return (
    <>
      <div className="relative">
        <div className="flex items-center absolute top-0 left-0 w-full">
          <h2 className="text-yellow-400 font-bold italic animate-pulse fancy-text">
            Powered by
          </h2>
          <img
            src={logo}
            alt=""
            className="w-10 h-10 ml-2 filter drop-shadow-md"
          />
        </div>
      </div>
      <div className="flex mb-[8rem] items-center mt-[6rem] justify-center h-[70vh]"> {/* Adjusted margin top */}
        <div className="form-container bg-gray-800 w-[25rem] rounded-lg p-6 border-2 border-transparent shadow-lg"> {/* Adjusted width and padding */}
          <div className="border-b-2 border-gray-600 mb-4 pb-2 flex items-center justify-center">
            <h1 className="text-center text-blue-500 text-2xl font-semibold mb-2">
              Final Step
            </h1>
          </div>
          <div className="p-2">
            <form className="flex flex-col items-center justify-center">
              <div className="mb-2 w-full">
                <label className="text-white mb-1">Destination Selector</label> {/* Added margin bottom */}
                <input
                  type="text"
                  className="bg-gray-700 text-white border border-gray-600 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                  placeholder="Destination Selector"
                  value={destinationSelector}
                  disabled // Disable the input field
                />
              </div>
              <div className="mb-2 w-full">
                <label className="text-white mb-1">Chain ID</label> {/* Added margin bottom */}
                <input
                  type="text"
                  className="bg-gray-700 text-white border border-gray-600 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                  placeholder="Chain ID"
                  value={chainID}
                  disabled // Disable the input field
                />
              </div>
              <div className="mb-2 w-full">
                <label className="text-white mb-1">Receiver Address</label> {/* Added margin bottom */}
                <input
                  type="text"
                  className="bg-gray-700 text-white border border-gray-600 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                  placeholder="Receiver Address"
                  value={receiverAddress}
                  disabled // Disable the input field
                />
              </div>
              <div className="mb-2 w-full">
                <label className="text-white mb-1">Token Address of Merchant</label> {/* Added margin bottom */}
                <input
                  type="text"
                  className="bg-gray-700 text-white border border-gray-600 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                  placeholder="Token Address of Merchant"
                  value={tokenAddress}
                  disabled // Disable the input field
                />
              </div>
              <div className="mb-2 w-full">
                <label className="text-white mb-1">Amount</label> {/* Added margin bottom */}
                <input
                  type="text"
                  className="bg-gray-700 text-white border border-gray-600 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                  placeholder="Amount"
                  value={amount}
                  disabled // Disable the input field
                />
              </div>
              <button className="bg-blue-800 mt-2 text-white rounded-full py-3 px-6 shadow-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700 transition duration-300 ease-in-out">
                Pay Token Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default TokenPay;
