import React, { useEffect, useState } from 'react';
import Slogan from '../../components/elements/Slogan';

const Banner: React.FC = () => {
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
    <section className="w-full z-10 relative min-h-screen mx-autorelative text-white flex md:items-center justify-center">
      <div
        className={`w-full h-screen bg-black fixed z-30 top-0 left-0 flex flex-col items-center justify-center  transition-all ease-in-out duration-300 ${trueLoading ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} `}
      >
        <div className={`animate-pulse flex justify-center items-center flex-col`}>
          <img src="/loading.svg" alt="Logo" className="w-24" />
          <h1 className="font-primary font-semibold text-2xl mt-10 tracking-widest text-white/60">LOADING</h1>
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
      <Slogan />
    </section>
  );
};

export default Banner;
