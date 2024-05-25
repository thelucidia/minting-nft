import { useState, startTransition } from 'react';

const Video = () => {
  const [trueLoading, setTrueLoading] = useState(true);

  const handleTrue = () => {
    startTransition(() => {
      setTimeout(() => {
        setTrueLoading(false);
      }, 1500);
    });
  };

  return (
    <section className="flex items-center justify-center py-10 text-white bg-[url('/assets/experience/blur-experience-bg.png')] bg-cover bg-no-repeat">
      <div className="flex flex-col items-center gap-12 max-w-screen-xl">
        <p className="text-primary text-4xl md:text-6xl font-semibold text-center">
          New Experience of Gaming in Action
        </p>
        <div className="flex items-center justify-center flex-col-reverse xl:flex-row gap-6">
          <p className="text-primary font-semibold text-2xl md:text-4xl text-center">
            Flawless Play. Immersive Environment. Just Pure Gaming
          </p>
          <video
            autoPlay
            muted
            loop
            src="/videos/curseof.mp4"
            preload={'auto'}
            onLoadedData={handleTrue}
            playsInline
            className="border-4 border-[#B0EB10] object-scale-down rounded-3xl bg-white/40"
          />
        </div>
      </div>
    </section>
  );
};

export default Video;
