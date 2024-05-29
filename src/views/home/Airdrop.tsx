import React from 'react';
import GradientButton from '../../components/elements/GradientButton';

const Airdrop: React.FC = () => {
  return (
    <section className="mt-[80px] px-4">
      <div className="text-center text-white">
        <h6
          className="font-bold text-primary uppercase text-xl md:text-2xl leading-[27.06px]"
          style={{ letterSpacing: '15px' }}
        >
          FOLLOW 4 EASY STEPS
        </h6>
        <h2 className="font-bold text-primary uppercase text-4xl md:text-6xl mt-2 tracking-wide">
          TO CLAIM YOUR AIRDROP SPOT
        </h2>
      </div>
      <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
        <div className="flex flex-col xl:flex-row items-center gap-4 sm:gap-8">
          <GradientButton prefix={1} content="Connect your wallet" />
          <GradientButton prefix={2} content="Join the Lucidia community" />
        </div>
        <div className="flex flex-col xl:flex-row items-center gap-4 sm:gap-8">
          <GradientButton prefix={3} content="Complete Assessment" />
          <GradientButton prefix={4} content="Receive your rewards" />
        </div>
      </div>
    </section>
  );
};

export default Airdrop;
