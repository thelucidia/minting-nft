import React, {useState, useEffect} from "react";
import { useSDK } from '@metamask/sdk-react';
import {
  WalletConnectModalSign,
  useConnect,
  // useRequest
 } from '@walletconnect/modal-sign-react'
 import { sphereoneSDK } from '../config';

const ConnectWallet: React.FC = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(isLoggedIn);
  const { sdk, connected } = useSDK();
  const [failed, setFailed] = useState(false);
  const [fetched, setFetched] = useState(false);

  const [session, setSession] = useState({});  
  const [disabled, setDisabled] = useState(false);
  console.log(session, disabled);
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

  useEffect(() => {
    setFetched(true);
    try {
      const handleAuth = async () => {
        const authResult: any = await sphereoneSDK.handleCallback();
        if (authResult?.access_token) {
          const { access_token, profile } = authResult;
          console.log('access_token: ', access_token, 'profile: ', profile);
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      };
      handleAuth();
    } catch (e) {
      console.log(e);
    }
  }, []);
  useEffect(() => {
    if (!fetched) {
      return;
    }
    if (connected) {
      window.location.href = `/`;
    }
  }, [connected]);

  // const login = async () => {
  //   try {
  //     await sphereoneSDK.login();
  //   } catch (e: any) {
  //     console.error(e);
  //   }
  // };

  const connectMetaMask = async (evt: { preventDefault: () => void; stopPropagation: () => void }) => {
    evt.preventDefault();
    evt.stopPropagation();
    try {
      console.log('connected: ', connected);
      if (connected) {
        await sdk?.terminate();
      } else {
        await window.ethereum?.request({ method: 'eth_requestAccounts' });
        await sdk?.connect();
      }
    } catch (err) {
      console.error(err);
      setFailed(true);
    }
  };


  const connectWallet =  async () => {
    try {
      setDisabled(true)
      const session = await connect()
      console.info(session)
      setSession(session)
    } catch (err) {
      console.error(err)
    } finally {
      setDisabled(false)
    }
  }


    return (
        <section className="w-full h-screen text-white relative mb-[605px] flex justify-center">
            <img
                src="/token/Vector.png"
                alt="Lucidian ID Creation"
                className="w-full h-[1344px]"
            />
            <div className="container max-w-[700px] mx-auto flex flex-row gap-x-5 absolute top-[280px] z-30">
                <div className="w-full h-auto">
                    <div>
                        <img
                            src="/token/Frame 24787 (1).png"
                            alt="borderBoxing"
                            className="w-full"
                        />
                        <div className="w-full absolute top-0 font-secondary font-semibold py-[20px] text-center bg-no-repeat bg-contain py-10 flex flex-col gap-y-3">
                            <h1 className="font-primary font-third text-white mt-[105px] leading-[44px] text-center uppercase" style={{fontWeight: 700, fontSize: 36}}>
                                Connect Your Wallet
                            </h1>
                            <button
                                className="border border-solid border-[#0ED4FF] min-w-[343px] mx-auto mt-10 rounded-[10px] bg-transparent hover:bg-[#0ED4FF] font-secondary font-semibold text-[15px] py-[12px] text-center uppercase text-white"
                                onClick={connectMetaMask}
                            >
                                <div className='flex flex-row justify-center item-center sm:gap-x-5 gap-x-2'>
                                    <img src='/assets/wallet/metamask_icon.svg'/>
                                    <h4 className='text-white'>Metamask Connect</h4>
                                </div>
                            </button>
                            {failed && (<h5 className="mx-auto text-bl">Metamask connect faild</h5>)}
                            <button
                                className="border border-solid border-[#0ED4FF] min-w-[343px] mx-auto mt-2 rounded-[10px] bg-transparent hover:bg-[#0ED4FF] font-secondary font-semibold text-[15px] py-[12px] text-center uppercase text-white mb-12"
                                onClick={connectWallet}
                            >
                                <div className='flex flex-row justify-center item-center sm:gap-x-5 gap-x-2'>
                                    <img src='/assets/wallet/walletconnect_icon.svg'/>
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConnectWallet;