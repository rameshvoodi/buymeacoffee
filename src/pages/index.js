import Head from 'next/head'
import { useEffect, useState } from 'react'
import truncateEthAddress from 'truncate-eth-address';
import abi from '../contract/Chai.json';
import { ethers, Signer } from 'ethers';
import Buy from './components/Buy';
import Memos from './components/Memos';
export default function Home() {
 
 const [state, setState] = useState({
  provider: null,
  signer: null,
  contract: null
 })

 const [account, setAccount] = useState('None')

 useEffect(() => {
  const connectWallet = async() => {
    const contractAddress = '0xB5eF3B1d67023180ec93A56a4FC566974cC2af0c';
    const contractABI = abi.abi;
    try{
      const {ethereum} = window;
      if(window){
        const account = await ethereum.request({method: "eth_requestAccounts", })
      
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractABI,signer);
      setState({provider,signer, contract});
      setAccount(account);
      }
      else{
        alert('connect wallet')
      }
    }
    catch(err) {
      console.log(err);
    }
  }
  connectWallet();

  }, [])
  const accountText = account.toString();
  return (
    <>
    <Head>
      <title>buy me a coffee</title>
    </Head>
      <div className='bg-gradient-to-r from-gray-700 via-gray-900 to-black max-h-full'>
      <div className=' container mx-auto max-w-3xl'>
      <div className=' flex justify-between p-5 text-white'>
      <h1 className="text-xl md:text-3xl font-bold  from-amber-500 to-pink-500 bg-gradient-to-r bg-clip-text text-transparent">Buy me a coffee</h1>
        <h1>{truncateEthAddress(accountText)}</h1>
      </div>
      <Buy state={state}></Buy>
      <Memos state={state}></Memos>
     </div>
     
      </div>
     
    </>
  )
}
