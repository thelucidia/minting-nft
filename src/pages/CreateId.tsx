import React from 'react';
 
const Login: React.FC = () => {

  return (
    <section className="w-full h-screen text-white relative mb-[605px]">
      <img
        src="/token/bombing.png"
        alt="login"
        className="absolute top-0 z-0 w-full h-screen object-cover"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-gradient-to-t from-black to-[#0d0d0d]/10 z-1"></div>
      <div className="w-full h-screen create-id-back-blur absolute top-0 left-0 bg-prpl/10 z-1"></div>
      <div className="container mx-auto flex flex-row gap-x-5 pt-[300px]">
        <div className="max-w-[700px]  w-full h-auto mx-auto relative bg-opacity-5 backdrop-filter backdrop-blur-lg">
          <img
            src="/token/Frame 24787.png"
            alt="borderBoxing"
            className="w-full"
          />
          <div className="w-full absolute top-0 left-0 font-secondary font-semibold py-[23px] text-center bg-no-repeat bg-contain py-10 flex flex-col gap-y-5">
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
    </section>
  );
};

export default Login;
