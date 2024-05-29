import { Connector, useAccount, useSwitchChain } from 'wagmi';
import { skaleNebulaTestnet } from 'wagmi/chains';
import { walletSvgs } from '../../utils/constants';
import { WalletType } from '../../utils/types';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface ConnectWalletButtonProps {
  connector: Connector;
  connected?: boolean;
  failed?: boolean;
  click: () => void;
}

export const ConnectWalletButton = (props: ConnectWalletButtonProps) => {
  const { connector, connected, failed, click } = props;
  const [ready, setReady] = useState(false);
  const { chainId } = useAccount();
  const { switchChain } = useSwitchChain();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    (async () => {
      const provider = await connector.getProvider();
      setReady(!!provider);
    })();
  }, [connector]);

  useEffect(() => {
    if (connected && location.pathname !== '/pharaoh-course') {
      if (chainId !== skaleNebulaTestnet.id) {
        switchChain({ chainId: skaleNebulaTestnet.id });
      }
      navigate('/verify-email');
    }
  }, [connected]);

  return (
    ready && (
      <>
        <button
          className="border border-solid border-[#0ED4FF] min-w-72 md:min-w-80 mx-auto mt-10 rounded-[10px] bg-transparent hover:bg-[#0ED4FF] font-secondary font-semibold text-[15px] py-[12px] text-center uppercase text-white"
          onClick={click}
        >
          <div className="flex flex-row justify-center item-center sm:gap-x-5 gap-x-2">
            <img src={walletSvgs[connector.name as WalletType]} alt="wallet" />
            <h4 className="text-white">{connector.name} Connect</h4>
          </div>
        </button>
        {connected && <h5 className="mx-auto text-bl">{connector.name} connected</h5>}
        {failed && <h5 className="mx-auto text-bl">{connector.name} connect faild</h5>}
      </>
    )
  );
};
