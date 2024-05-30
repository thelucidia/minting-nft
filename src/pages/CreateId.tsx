import React from 'react';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  return (
    <section className="relative flex items-center justify-center w-full p-4 bg-[url('/token/Vector.png')] bg-contain xl:bg-cover bg-no-repeat">
      <div className="flex flex-col items-center justify-center gap-y-6 p-6 md:p-10 mt-28 xl:mt-36 bg-[url('/assets/frames/frame1_mobile.png')] md:bg-[url('/assets/frames/frame1.png')] bg-full bg-no-repeat md:max-w-screen-sm">
        <p className="font-primary font-semibold text-white text-center text-4xl uppercase">Get your Lucidian ID</p>
        <p className="font-second font-thrid text-white text-base text-center">You can only have one Lucidian ID</p>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img src="/token/Group 625215.png" alt="zombie2" className="w-52 h-52" />
          <div className="flex flex-col items-start gap-3 text-white font-primary">
            <p className="text-lg font-semibold uppercase">how can I get my Lucidian ID?</p>
            <div className="flex flex-row items-center gap-x-2">
              <span className="rounded-full w-3 h-3 bg-cyan" />
              <span>Connect your wallet.</span>
            </div>
            <div className="flex flex-row items-center gap-x-2">
              <span className="rounded-full w-3 h-3 bg-cyan" />
              <span>Generate your Lucidian ID</span>
            </div>
          </div>
        </div>
        <Link to="/connect-wallet">
          <button className="px-6 py-3 w-full max-w-80 rounded-xl font-bold font-secondary text-white bg-cyan">
            CONTINUE TO GENERATE
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Login;
