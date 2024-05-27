import React from 'react';
import GradientButton from '../../components/elements/GradientButton';

const Airdrop: React.FC = () => {
  return (
    <section className="mt-[80px] px-4">
      <div className="text-center text-white">
        <h6 className="font-bold text-primary uppercase text-2xl leading-[27.06px]" style={{ letterSpacing: '15px' }}>
          Easy step
        </h6>
        <h2 className="font-bold text-primary uppercase text-6xl leading-[66.42px] mt-2 tracking-wide">
          How to get the airdrop
        </h2>
      </div>
      <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
        <div className="flex flex-col xl:flex-row items-center gap-4 sm:gap-8">
          <GradientButton prefix={1} content="Connect your wallet" />
          <GradientButton prefix={2} content="Join with our community" />
        </div>
        <div className="flex flex-col xl:flex-row items-center gap-4 sm:gap-8">
          <GradientButton prefix={3} content="Complete assessment" />
          <GradientButton prefix={4} content="Receive your rewards" />
        </div>
      </div>
    </section>
  );
};

export default Airdrop;
