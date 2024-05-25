import { startTransition } from 'react';

const Video = () => {
  const handleTrue = () => {
    startTransition(() => {
      setTimeout(() => {}, 1500);
    });
  };

  return (
    <section className="flex items-center justify-center px-4 py-10 text-white bg-[url('/assets/experience/blur-experience-bg.png')] bg-cover bg-no-repeat">
      <div className="flex flex-col items-center gap-12 max-w-screen-xl">
        <p className="text-primary text-4xl md:text-6xl font-semibold text-center">
          New Experience of Gaming in Action
        </p>
        <div className="flex items-center justify-center flex-col-reverse xl:flex-row gap-6">
          <p className="flex-1 text-primary font-semibold text-2xl md:text-4xl text-center xl:text-start">
            Flawless Play. Immersive Environment. Just Pure Gaming
          </p>
          <div className="flex-1">
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
      </div>
    </section>
  );
};

export default Video;
