import React from 'react';

import Banner from "../views/home/Banner";

import mainBackground from "/token/bombing.png";
 
const Login: React.FC = () => {

  return (
    <section className="w-full h-screen text-white relative mb-[605px] flex justify-center">
      <Banner mainBackground={mainBackground} isCenter={true} />
      <div className="w-full z-20 h-screen create-id-back-blur absolute top-0 left-0 bg-prpl/10 z-1"></div>
      <div className="container max-w-[700px] mx-auto flex flex-row gap-x-5 absolute top-[286px] z-30">
        <div className="w-full h-auto bg-opacity-5 backdrop-filter backdrop-blur-lg">
          <div>
            <img
                src="/token/Frame 24787.png"
                alt="borderBoxing"
                className="w-full"
            />
            <div className="w-full absolute top-0 font-secondary font-semibold py-[23px] text-center bg-no-repeat bg-contain py-10 flex flex-col gap-y-3">
                <h1 className="font-primary font-third text-white pt-[52px] leading-[44px] text-center uppercase" style={{fontWeight: 700, fontSize: 36}}>
                    GET YOUR LUCIDIAN ID
                </h1>
                <h6 className="font-second font-third text-white text-base text-center leading-[24px] mt-4">
                    You can only have one Lucidian ID
                </h6>
                <div className="flex justify-center">
                    <div className="mr-[19px]">
                        <img src="/token/zombie2.png" alt="zombie2" />
                    </div>
                    <div className="text-white font-primary flex items-center">
                        <div className="mt-13">
                            <h2 className="text-lg">How can I get my lucidianid?</h2>
                            <div className="flex items-center mt-4">
                                <div className="rounded-full w-3 h-3 bg-cyan mr-[6px]"></div>
                                <div>Connect your wallet</div>
                            </div>
                            <div className="flex items-center mt-3">
                                <div className="rounded-full w-3 h-3 bg-cyan mr-[6px]"></div>
                                <div>Generate your Lucidian ID</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-[42px]">
                    <button className="clipped scale-x-[-1] rounded-[5px] bg-cyan hover:bg-white font-secondary font-semibold py-[13px] px-[87px] text-center bg-no-repeat bg-contain uppercase text-black">
                        <h4 className="scale-x-[-1]">CONTINUE TO GENERATE</h4>
                    </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
