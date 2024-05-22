import React, { useMemo } from "react";
import { Connector, useAccount, useConnect } from "wagmi";
import { ConnectWalletButton } from "../components/elements/ConnectWalletButton";

const ConnectWallet: React.FC = () => {
  const { connectors, connect } = useConnect();
  const { connector: connectedConnector } = useAccount();
  const sortedConnectors = useMemo(() => {
    const uniqueObjects: { [key: string]: Connector } = {};
    connectors.forEach(connector => { uniqueObjects[connector.name] = connector });
    return Object.values(uniqueObjects);
  }, [connectors]);

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
              <h1 className="font-primary font-third text-white mt-[105px] leading-[44px] text-center uppercase" style={{ fontWeight: 700, fontSize: 36 }}>
                Connect Your Wallet
              </h1>
              {sortedConnectors.map((connector) => <ConnectWalletButton key={connector.uid} connected={connector.name === connectedConnector?.name} connector={connector} click={() => connect({ connector })} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectWallet;