import React, { useState, useEffect, startTransition } from 'react';

import GradientButton from '../../components/elements/GradientButton';

const MintingBanner: React.FC = () => {
  const [trueLoading, setTrueLoading] = useState(true);

  const handleTrue = () => {
    startTransition(() => {
      setTimeout(() => {
        setTrueLoading(false);
      }, 1500);
    });
  };

  useEffect(() => {
    handleTrue();
  }, []);

  return (
    <section className="w-full minting-banner min-h-screen mx-autorelative text-white flex md:items-center justify-center mt-20 xd:mt-0">
      <div
        className={`h-screen bg-black fixed top-0 left-0 flex flex-col items-center justify-center  transition-all ease-in-out duration-300 ${trueLoading ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} `}
      >
        <div className={`animate-pulse flex justify-center items-center flex-col`}>
          <img src="/loading.svg" alt="Logo" className="w-24" />
          <h1 className="font-primary font-semibold text-2xl mt-10 tracking-widest">LOADING</h1>
        </div>
      </div>
      <img
        src="/hero/Ellipse 22.png"
        alt="Ellipse1"
        height="718px"
        width="718px"
        className="absolute top-[-275px] left-[19px]"
      />
      <img
        src="/hero/Ellipse 22.png"
        alt="Ellipse2"
        height="529px"
        width="529px"
        className="absolute bottom-[-300px] right-[-150px]"
      />
      <div
        className="h-auto mx-auto bg-[url('/assets/minting/solidier_mobile.png')] xd:bg-none bg-no-repeat bg-contain bg-center"
        style={{ transform: 'rotate(-180deg)' }}
      >
        <div className="flex items-center pt-96">
          <div className="hidden xd:block xd:w-[50%]">
            <img src="/minting/Mask group.png" alt="mask group" />
          </div>
          <div className="flex flex-col items-center w-full xd:w-[50%]">
            <div className="xd:flex xd:flex-col xd:gap-4 w-[80%] mx-auto hidden">
              <img src="/hero/text2.png" alt="text2" />
              <p>
                Curse Of The Pharaoh is an action/adventure/survival game set in a post-apocalyptic world overrun by
                zombies. Collect weapon, bullet, and fuel props. Travel through open-world environment with different
                biomes.
              </p>
            </div>
            <div className="flex justify-center gap-9 mt-12">
              <img
                className="border-8 border-white/40 rounded-4xl"
                src="/minting/Mask group (1).png"
                alt="Mask group (1)"
              />
              <img
                className="border-8 border-white/40 rounded-4xl"
                src="/minting/Mask group (2).png"
                alt="Mask group (2)"
              />
              <img
                className="border-8 border-white/40 rounded-4xl"
                src="/minting/Mask group (3).png"
                alt="Mask group (3)"
              />
            </div>
            <div className="flex items-center justify-center mt-12 w-full">
              <GradientButton content="Mint now" />
            </div>
            <div className="flex flex-col xd:hidden gap-4 my-12 py-5 w-4/5">
              <img src="/hero/text2.png" alt="text2" />
              <p>
                Curse Of The Pharaoh is an action/adventure/survival game set in a post-apocalyptic world overrun by
                zombies. Collect weapon, bullet, and fuel props. Travel through open-world environment with different
                biomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MintingBanner;
