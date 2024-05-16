import React, {useState, useEffect} from "react";
import { useSDK } from '@metamask/sdk-react';
import {
  WalletConnectModalSign,
  useConnect,
  // useRequest
 } from '@walletconnect/modal-sign-react'
// import { sphereoneSDK } from '../config';
import { Link } from "react-router-dom";

import useContract from "../services/useContract";

const PharaohCourse: React.FC = () => {

  const contract = useContract();

    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const [mintResult, setMintResult] = useState<any>(null);
    const [mintError, setMintError] = useState<string | null>(null);
    const [account, setAccount] = useState();
    // console.log(isLoggedIn);
    const { sdk, connected } = useSDK();
    const [failed, setFailed] = useState(false);
    const [fetched, setFetched] = useState(false);
  
    const [session, setSession] = useState<any>(null);  
    const [disabled, setDisabled] = useState(false);
    // console.log(session, disabled);
    const { connect } = useConnect({
      requiredNamespaces: {
        eip155: {
          methods: ['eth_sendTransaction', 'personal_sign'],
          chains: ['eip155:1'],
          events: ['chainChanged', 'accountsChanged']
        }
      }
    });

    const projectId = '6a2e9030474264df3b50c650c2b521b5';
    // const projectId = "7a751708c28fa077881a06678b365bc9";

    // useEffect(() => {
    //   setFetched(true);
    //   try {
    //     const handleAuth = async () => {
    //       const authResult: any = await sphereoneSDK.handleCallback();
    //       if (authResult?.access_token) {
    //         // const { access_token, profile } = authResult;
    //         // console.log('access_token: ', access_token, 'profile: ', profile);
    //         setIsLoggedIn(true);
    //       } else {
    //         setIsLoggedIn(false);
    //       }
    //     };
    //     handleAuth();
    //   } catch (e) {
    //     console.log(e);
    //   }

    // }, []);

    useEffect(() => {
      if (!fetched) {
        return;
      }
      if (connected) {
        // window.location.href = '/';
        console.log("connected: ");
      }
    }, [connected]);

    const isErrored = (error: any): error is { message: string } => {
      return typeof error.message === 'string';
    };

    const mintHandler = async() =>{
      if (!contract) return;

      try {
        // const txResponse = await contract.methods.mint().send({ from: session.address });
        // const receipt = await txResponse.wait();
        // setMintResult(receipt);
        console.log("contract: ", contract.methods, account);
        const txResponse = await contract.methods.mint().send({from: account});
        console.log("txResponse: ", txResponse);

      } catch (err) {
        // Check if the error has a message property
        if (isErrored(err)) {
          console.error("Minting failed: ", err.message);
          setMintError(err.message);
        } else {
          // If the error does not have a message property, handle it as a generic error
          console.error("Minting failed with an unknown error.");
          setMintError("An unknown error occurred during minting.");
        }
      }
    }

    const connectMetaMask = async () => {
        try {
          console.log('connected: ', connected);
          // if (connected) {
          //   await sdk?.terminate();
          // } else {
            await window.ethereum?.request({ method: 'eth_requestAccounts' });
            const accounts = await sdk?.connect();
            console.log("accounts: ", accounts[0]);
            setAccount(accounts?.[0]);
          // }
        } catch (err) {
          console.error(err);
          setFailed(true);
        }
      };
    
    
      const connectWallet =  async () => {
        try {
          setDisabled(true)
          const session = await connect()
          console.log("session: ", session);
          setSession(session)
        } catch (error) {
          console.error(error)
        } finally {
          setDisabled(false)
        }
      }

    return (
        <section className="w-full h-screen text-white relative mb-[605px] flex justify-center">
            <img
                src="/minting/Vector-minting.png"
                alt="Lucidian ID Creation"
                className="w-full h-[1344px]"
            />
            <div className="container max-w-[700px] mx-auto flex flex-row gap-x-5 absolute top-[280px] z-30">
                <div className="w-full h-auto">
                <div>
                    <img
                        src="/token/Frame 24787.png"
                        alt="borderBoxing"
                        className="w-full"
                    />
                    <div className="w-full absolute top-0 font-secondary font-semibold py-[20px] text-center bg-no-repeat bg-contain py-10 flex flex-col gap-y-3">
                        <h1 className="font-primary font-third text-white pt-[40px] leading-[44px] text-center uppercase" style={{fontWeight: 700, fontSize: 36}}>
                            Course of the pharaoh
                        </h1>
                        <div className="flex justify-center">
                            <div className="ml-5 mt-5">
                                <img src="/token/Group 625215.png" width="350px" height="350px" alt="zombie2" />
                            </div>
                            <div className="text-white font-primary">
                                <div className="mt-5">
                                    <h6 className="font-primary font-medium text-white text-base text-center leading-[24px] mt-3">
                                        To Claim this assets you must connect to your wallet
                                    </h6> 
                                </div>
                                <button
                                    className="border border-solid border-[#0ED4FF] min-w-[343px] mx-auto mt-5 rounded-[10px] bg-transparent hover:bg-[#0ED4FF] font-secondary font-semibold text-[15px] py-[8px] text-center uppercase text-white"
                                    onClick={connectMetaMask}
                                >
                                    <div className='flex flex-row justify-center item-center sm:gap-x-5 gap-x-2'>
                                        <img src='/assets/wallet/metamask_icon.svg' alt="metamask_icon" />
                                        <h4 className='text-white'>Metamask Connect</h4>
                                    </div>
                                </button>
                                {connected && (<h5 className="mx-auto text-bl">Metamask connected</h5>)}
                                {failed && (<h5 className="mx-auto text-bl">Metamask connect faild</h5>)}
                                <button
                                    className="border border-solid border-[#0ED4FF] min-w-[343px] mx-auto mt-6 rounded-[10px] bg-transparent hover:bg-[#0ED4FF] font-secondary font-semibold text-[15px] py-[8px] text-center uppercase text-white mb-3"
                                    onClick={connectWallet}
                                >
                                    <div className='flex flex-row justify-center item-center sm:gap-x-5 gap-x-2'>
                                        <img src='/assets/wallet/walletconnect_icon.svg' alt="walletconnect_icon" />
                                        <h4  className='text-white'>Wallet Connect</h4>
                                    </div>
                                </button>
                                <WalletConnectModalSign
                                    projectId={projectId}
                                    metadata={{
                                    name: 'My Dapp',
                                    description: 'My Dapp description',
                                    url: 'https://my-dapp.com',
                                    icons: ['https://my-dapp.com/logo.png']
                                    }}
                                />
                                <div className="relative">
                                    <div className="absolute left-[50px] top-[-10px]">
                                        <img src="/minting/Vector-avatar.png" alt="avatar-container" />
                                    </div>
                                    <div className="w-full flex justify-center mt-9">
                                        <div className="mr-2">
                                            <img src="/hero/Rectangle 213.png" alt="Rectangle 213" />
                                        </div>
                                        <div>
                                            <div className="flex items-center mt-2">
                                                <h3 className="text-secondary font-bold text-[24px] leading-[30px] mr-2">Sofia Turner</h3><div className="h-[16px] w-[16px] rounded-[8px] bg-[#16CD8F] mt-1">&nbsp;</div>
                                            </div>
                                            <h4 className="font-sm text-[18px] text-secondary leading-[22.5px]">0x3082....5681</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-[50px]">
                                    <Link to="/lucidia-notes">
                                        <button onClick={mintHandler} className="w-[75%] rounded-[12px] bg-cyan hover:bg-white py-[13px] px-[87px] text-center bg-no-repeat bg-contain uppercase text-black">
                                            <h4 className="font-bold font-secondary">Mint now</h4>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </section>
    );
};

export default PharaohCourse;