import React from 'react';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {

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
                src="/token/Frame 24787.png"
                alt="borderBoxing"
                className="w-full"
            />
            <div className="w-full absolute top-0 font-secondary font-semibold py-[20px] text-center bg-no-repeat bg-contain py-10 flex flex-col gap-y-3">
                <h1 className="font-primary font-third text-white pt-[40px] leading-[44px] text-center uppercase" style={{fontWeight: 700, fontSize: 36}}>
                    GET YOUR LUCIDIAN ID
                </h1>
                <h6 className="font-second font-third text-white text-base text-center leading-[24px] mt-3">
                    You can only have one Lucidian ID
                </h6>
                <div className="flex justify-center">
                    <div className="mr-[30px]">
                        <img src="/token/Group 625215.png" alt="zombie2" />
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
                <div className="mt-[30px]">
                  <Link to="/connect-wallet">
                    <button className="rounded-[12px] bg-cyan hover:bg-white py-[13px] px-[87px] text-center bg-no-repeat bg-contain uppercase text-black">
                        <h4 className="font-bold font-secondary">CONTINUE TO GENERATE</h4>
                    </button>
                  </Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
