import { useState, startTransition } from "react";

const Video = () => {

  const [trueLoading, setTrueLoading] = useState(true);

  const handleTrue = () => {
    startTransition(() => {
      setTimeout(() => {
        setTrueLoading(false);
      }, 1500);
    })
  };

  return (
    <section className="video relative py-10">
      <div
        className={`w-full h-screen bg-black fixed z-30 top-0 left-0 flex flex-col items-center justify-center  transition-all ease-in-out duration-300 ${trueLoading ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} `}
      >
        <div className={`animate-pulse flex justify-center items-center flex-col`}>
          <img src="/loading.svg" alt="Logo" className="w-24" />
          <h1 className="font-primary font-semibold text-2xl mt-10 tracking-widest">LOADING</h1>
        </div>
      </div>
      <div className="z-0 absolute top-0 left-0 bg-gradient-to-b w-full h-full"></div>
      <div className="z-0 absolute top-0 left-0 bg-custom-gradient w-full h-full"></div>
      <div className="relative z-20">
        <div className="text-center">
          <h3 className="text-primary text-[60px] font-semibold leading-[40px]">
            New Experience of Gaming in Action
          </h3>
        </div>
        <div className="flex items-center mt-[100px] justify-center container mx-auto lg: w-[1446px] xl: w-[1446px]">
          <div className="video-discription">
            <h4 className="text-primary font-semibold text-[36px] leading-[40px]">Flawless Play. Immersive Environment. Just Pure Gaming</h4>
            <h5 className="text-primary font-normal text-[24px] leading-[32px] mt-6">Experience seamless gaming with Lucidia</h5>
          </div>
          <div className="video-view">
            <div className="bg-[#B0EB10] gradient-box">
              <video
                autoPlay
                muted
                loop
                src="/videos/curseof.mp4"
                preload={'auto'}
                onLoadedData={handleTrue}
                playsInline
                className="object-cover h-[400px] lg:w-[800px] rounded-[45px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
  
  export default Video;
  