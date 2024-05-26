import React from 'react';
import { Link } from 'react-router-dom';

const BackHome: React.FC = () => {
  return (
    <section className="relative flex items-center justify-center w-full h-screen lg:h-screen p-4 text-white bg-[url('/token/Vector.png')] bg-contain xl:bg-cover bg-no-repeat">
      <div className="flex flex-col items-center justify-center gap-y-6 p-6 xl:p-10 mt-32 bg-[url('/assets/frames/frame1_mobile.png')] md:bg-[url('/assets/frames/frame1.png')] bg-full bg-no-repeat md:max-w-screen-sm">
        <p className="font-primary font-semibold text-white text-center text-4xl uppercase">You are in</p>
        <p className="font-second font-thrid text-white text-lg text-center">
          Your Lucidian Passport has been generated Your 20,000 Lucid Token Airdrop is here! Click to claim the Airdrop
        </p>
        <Link to="/">
          <button className="rounded-xl bg-cyan hover:bg-white px-12 py-4 min-w-80 text-center font-bold bg-no-repeat bg-contain uppercase text-black">
            confirm
          </button>
        </Link>
      </div>
    </section>
  );
};

export default BackHome;
