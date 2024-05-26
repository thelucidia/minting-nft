import React, { useMemo } from 'react';
import { Connector, useAccount, useConnect } from 'wagmi';
import { ConnectWalletButton } from '../components/elements/ConnectWalletButton';

const ConnectWallet: React.FC = () => {
  const { connectors, connect } = useConnect();
  const { connector: connectedConnector } = useAccount();

  const sortedConnectors = useMemo(() => {
    const uniqueObjects: { [key: string]: Connector } = {};
    connectors.forEach((connector) => {
      uniqueObjects[connector.name] = connector;
    });
    return Object.values(uniqueObjects);
  }, [connectors]);

  return (
    <section className="relative flex items-center justify-center w-full h-screen p-4 bg-[url('/token/Vector.png')] bg-full bg-no-repeat">
      <div className="flex flex-col items-center justify-center gap-y-6 px-6 md:px-8 py-14 md:py-16 bg-[url('/assets/frames/frame1_mobile.png')] md:bg-[url('/assets/frames/frame1.png')] bg-full bg-no-repeat md:max-w-screen-sm">
        <h1 className="font-primary font-third text-white text-center text-4xl font-semibold uppercase">
          Connect Your Wallet
        </h1>
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
      </div>
    </section>
  );
};

export default ConnectWallet;
