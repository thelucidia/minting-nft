import React, { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Connector, useAccount, useConnect, useWaitForTransactionReceipt, useWriteContract } from 'wagmi';
import { ConnectWalletButton } from '../components/elements/ConnectWalletButton';
import LucidiaToast from '../components/elements/LucidiaTost';
import Avatar from '../components/Avatar';
import { trimAddress } from '../utils/helper';
import NonTransferableNFTAbi from '../abis/NonTransferableNFT.json';

const PharaohCourse: React.FC = () => {
  const { connectors, connect } = useConnect();
  const { address, connector: connectedConnector } = useAccount();
  const navigate = useNavigate();

  const { data: hash, writeContract, isPending, isError, error } = useWriteContract();
  const { isSuccess } = useWaitForTransactionReceipt({ hash });

  const sortedConnectors = useMemo(() => {
    const uniqueObjects: { [key: string]: Connector } = {};
    connectors.forEach((connector) => {
      uniqueObjects[connector.name] = connector;
    });
    return Object.values(uniqueObjects);
  }, [connectors]);

  useEffect(() => {
    if (isSuccess) {
      toast(<LucidiaToast message="Successfully Minted" />);
      navigate('/lucidia-notes');
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      toast(<LucidiaToast message="You already seem to mint a NFT!" />);
      navigate('/');
    }
  }, [isError, error]);

  const mintBtnClickHandler = () => {
    try {
      writeContract({
        abi: NonTransferableNFTAbi.abi,
        address: '0x30493b346C90Dcb43c0e2cf2B68829AC0F70a965',
        functionName: 'mint',
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="relative flex items-center justify-center w-full p-12 bg-[url('/token/Vector.png')] bg-contain xl:bg-cover bg-no-repeat">
      <div className="flex flex-col items-center justify-center gap-y-6 px-6 py-6 xd:p-10 mt-28 bg-[url('/assets/frames/frame1_mobile.png')] xd:bg-[url('/assets/frames/frame1.png')] bg-full bg-no-repeat xd:max-w-screen-md">
        <p className="font-primary font-semibold text-white text-center text-4xl uppercase">Course of the pharaoh</p>
        <div className="flex flex-col items-center xd:flex-row gap-8">
          <img className="w-1/2 object-contain" src="/token/Group 625215.png" alt="zombie" />
          <div className="flex flex-col gap-8">
            <p className="font-primary font-medium text-white text-center xd:text-start text-lg uppercase">
              To Claim this assets you must connect to your wallet
            </p>
            {!address && (
              <div className="flex flex-col">
                {sortedConnectors.map((connector) => (
                  <ConnectWalletButton
                    key={connector.uid}
                    connected={connector.name === connectedConnector?.name}
                    connector={connector}
                    click={() => connect({ connector })}
                  />
                ))}
              </div>
            )}
            <Avatar name="Username" wallet={address ? trimAddress(address) : 'Connect Wallet'} status={true} />
            <button
              disabled={isPending}
              onClick={mintBtnClickHandler}
              className="px-6 py-3 w-full max-w-80 rounded-xl font-bold font-secondary text-white bg-cyan uppercase mx-auto"
            >
              <h4 className="font-bold font-secondary">{isPending ? 'Confirming...' : 'Mint Now'}</h4>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PharaohCourse;
