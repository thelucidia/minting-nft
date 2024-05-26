import React from 'react';
import { useNavigate } from 'react-router-dom';

const BeLucidian: React.FC = () => {
  const navigate = useNavigate();
  const claimBtnClickHandler = () => {
    navigate('/');
  };

  return (
    <section className="relative flex items-center justify-center w-full h-screen p-4 text-white bg-[url('/token/Vector.png')] bg-contain xl:bg-cover bg-no-repeat">
      <div className="flex flex-col items-center justify-center gap-y-6 p-6 xl:p-10 mt-32 bg-[url('/assets/frames/frame1_mobile.png')] md:bg-[url('/assets/frames/frame1.png')] bg-full bg-no-repeat">
        <p className="font-primary font-semibold text-white text-center text-4xl uppercase">
          You have your Lucidian id
        </p>
        <p className="font-second font-thrid text-white text-base text-center">
          Your Lucidian Passport has been generated Your 20,000 Lucid Token Airdrop is here! Click to claim the Airdrop
        </p>
        <img src="/token/Group 625215.png" width="300px" alt="zombie2" />
        <button
          className="rounded-[12px] bg-cyan hover:bg-white py-4 px-12 min-w-80 text-center bg-no-repeat bg-contain uppercase text-black"
          onClick={claimBtnClickHandler}
        >
          <h4 className="font-bold font-secondary">Claim</h4>
        </button>
      </div>
    </section>
  );
};

export default BeLucidian;
