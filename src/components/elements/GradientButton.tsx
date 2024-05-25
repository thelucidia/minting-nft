import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAccount } from 'wagmi';
// import useContract from "../../services/useContract";

interface GradientButtonProps {
  prefix?: number;
  content: string;
}

const GradientButton: React.FC<GradientButtonProps> = ({ prefix = null, content }) => {
  const { address } = useAccount();
  const [path, setPath] = useState('create-id');
  const baseClass = 'w-full rounded-custom py-[18px]';
  const addedClass = prefix === null ? 'px-[87px]' : 'px-10';

  useEffect(() => {
    if (!localStorage.getItem('isUser')) {
      setPath('/create-id');
    } else {
      if (address) setPath('/minting');
      else setPath('/connect-wallet');
    }
  }, []);

  return (
    <>
      <div className="md:flex-row flex-col gap-x-3 gap-y-10 w-full max-w-sm">
        <Link to={content == 'Mint now' ? '/pharaoh-course' : path} rel="noopener noreferrer">
          <button
            className={`${baseClass} ${addedClass}`}
            style={{ background: 'linear-gradient(90deg, #193F47 33.5%, #0ED4FF 100%', textAlign: 'center' }}
          >
            <div className="flex items-center justify-center gap-4 font-secondary transition-colors ease-in-out duration-300 uppercase">
              <h2
                className={prefix === null ? 'hidden' : 'w-1/5 block font-secondary font-bold text-5xl md:text-7xl'}
                style={{ color: 'transparent', WebkitTextFillColor: 'transparent', WebkitTextStroke: '3px white' }}
              >
                {prefix}
              </h2>
              <h5 className="w-4/5 text-white text-center font-bold text-[20px] group-hover:text-black">{content}</h5>
            </div>
          </button>
        </Link>
      </div>
    </>
  );
};

export default GradientButton;
