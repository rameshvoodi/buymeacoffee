import React from 'react';
import { useState, useEffect } from 'react';
import truncateEthAddress from 'truncate-eth-address';

const Memos = ({state}) => {
    const [memos, setMemos] = useState([]);
    const {contract} = state;

    useEffect(() => {
        const getMemoMessages = async() =>{
        const memos = await contract.getMemos();
        setMemos(memos);
        // console.log(memos);
        };
        contract && getMemoMessages();
    },[contract])
  return (
    <div className=' text-white px-4 h-screen'>
      <h1 className='text-xl md:text-3xl font-bold text-green-400 text-center py-5'>{memos?'messages': ''}</h1>
      {memos.map((memo) => {
        return(
            <table key={memo.message} className=' table'>
                <tbody>
                    <tr>
                       <td className='p-4 font-semibold font-mono'>{memo.name}</td>
                       <td className='p-4 font-semibold font-mono'>{memo.message}</td>
                       <td className='p-4 font-semibold font-mono'>{String(memo.timestamp)}</td>
                       <td className='p-4 font-semibold font-mono'>{truncateEthAddress(memo.from)}</td>
                    </tr>
                </tbody>
            </table>
        )
      })}
    </div>
  )
}

export default Memos
