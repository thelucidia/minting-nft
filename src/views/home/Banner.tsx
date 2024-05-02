import React, { useEffect, useState } from 'react'

import Slogan from "../../components/elements/Slogan";

// import clsx from 'clsx';

interface BannerProps {
  mainBackground: string;
  isCenter?: boolean;
}

const Banner: React.FC<BannerProps> = ({mainBackground, isCenter}) => {
  const [trueLoading, setTrueLoading] = useState(true);

  const handleTrue = () => {
    setTimeout(() => {
      setTrueLoading(false);
    }, 1500);
  };

  useEffect(() => {
    handleTrue();
  }, []);

  return (
    <section className="w-full z-10 relative min-h-screen mx-auto p-5 relative text-white flex md:items-center justify-center">
      <div
        className={`w-full h-screen bg-black fixed z-30 top-0 left-0 flex flex-col items-center justify-center  transition-all ease-in-out duration-300 ${trueLoading ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} `}
      >
        <div className={`animate-pulse flex justify-center items-center flex-col`}>
          <img src="/loading.svg" alt="Logo" className="w-24" />
          <h1 className="font-primary font-semibold text-2xl mt-10 tracking-widest">LOADING</h1>
        </div>
      </div>
      <img
        src={mainBackground}
        alt="Herobg"
        className="w-full h-screen object-cover absolute top-0 left-0"
      />

      <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-prpl/50 to-black z-10"></div>
      <Slogan isCenter={isCenter} />
    </section>
  );
};

export default Banner;
