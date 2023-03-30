import React from 'react';''
import { ethers } from 'ethers';
const Buy = ({state}) => {

    const buyChai = async(event) => {
        event.preventDefault();
        const {contract} = state || {};
        const name = document.querySelector("#name").value;
        const message = document.querySelector("#message").value;
        console.log(name,message, contract);
        const amount = {value: ethers.utils.parseEther("0.001")};
        const txn = await contract.createMemo(name, message, amount);
        await txn.wait();
        console.log("transaction done");
  }
  return (
    <>
      <form className=' p-10 text-white flex flex-col gap-6' onSubmit={buyChai}>
          <label className='text-xl md:text-2xl font-bold text-gray-300'>Name</label>
          <input className=' p-1 md:p-2 font-bold rounded-lg transition ease-in-out text-black' type={"text"} placeholder='enter your name' id="name" />
          <label className='text-xl md:text-2xl font-bold text-gray-300'>message</label>
          <input className=' p-1 md:p-2 font-bold rounded-lg transition ease-in-out text-black' type={"text"} placeholder='enter your message' id="message" />
          <button type='submit' className="text-white bg-gradient-to-br from-pink-500 to-orange-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm w-32 md:w-32 p-2 md:p-3 self-center">Buy me a coffee</button>
      </form>
    </>
  )
}

export default Buy
