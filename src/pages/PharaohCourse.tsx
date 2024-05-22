import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAccount, useConnect, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { ConnectWalletButton } from "../components/elements/ConnectWalletButton";
import { trimAddress } from "../utils/helper";
import NonTransferableNFTAbi from '../abis/NonTransferableNFT.json';
import LucidiaToast from "../components/elements/LucidiaTost";

const PharaohCourse: React.FC = () => {
  const { connectors, connect } = useConnect();
  const { address, connector: connectedConnector } = useAccount();
  const navigate = useNavigate();

  const { data: hash, writeContract, isPending } = useWriteContract();
  const { isSuccess } = useWaitForTransactionReceipt({ hash })

  useEffect(() => {
    if (isSuccess) {
      toast(<LucidiaToast message="Successfully Minted" />);
      navigate("/lucidia-notes");
    }
  }, [isSuccess]);

  const mintBtnClickHandler = () => {
    try {
      writeContract({
        abi: NonTransferableNFTAbi.abi,
        address: '0x30493b346C90Dcb43c0e2cf2B68829AC0F70a965',
        functionName: 'mint'
      });
    } catch (error) {
      console.log(error);
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
              <h1 className="font-primary font-third text-white pt-[40px] leading-[44px] text-center uppercase" style={{ fontWeight: 700, fontSize: 36 }}>
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
                  {connectors.map((connector) => <ConnectWalletButton key={connector.uid} connected={connector.name === connectedConnector?.name} connector={connector} click={() => connect({ connector })} />)}
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
                        <h4 className="font-sm text-[18px] text-secondary leading-[22.5px]">{address ? trimAddress(address) : 'Connect Wallet'}</h4>
                      </div>
                    </div>
                  </div>
                  <div className="mt-[50px]">
                    <button disabled={isPending} onClick={mintBtnClickHandler} className="w-[75%] rounded-[12px] bg-cyan hover:bg-white py-[13px] px-[87px] text-center bg-no-repeat bg-contain uppercase text-black">
                      <h4 className="font-bold font-secondary">{isPending ? 'Confirming...' : 'Mint Now'}</h4>
                    </button>
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