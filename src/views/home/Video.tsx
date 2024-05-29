import { useState } from 'react';
import Spinner from '../../components/Spinner';

const Video = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleCanPlayThrough = () => {
    setIsLoading(false);
  };

  return (
    <section className="flex items-center justify-center px-4 py-10 text-white bg-[url('/assets/experience/blur-experience-bg.png')] bg-cover bg-no-repeat">
      <div className="flex flex-col items-center gap-12 max-w-screen-xl">
        <p className="text-primary text-4xl md:text-6xl font-semibold text-center">New Gaming Experience</p>
        <div className="flex items-center justify-center flex-col-reverse xl:flex-row gap-6">
          <p className="xl:flex-1 text-primary font-semibold text-2xl md:text-4xl text-center xl:text-start">
            Epic Challenges. Unstoppable Thrills. Engaging Adventures.
          </p>
          <div className="relative w-full xl:flex-1">
            {isLoading && <Spinner className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />}
            <video
              autoPlay
              muted
              loop
              src="/videos/curseof.mp4"
              preload={'auto'}
              onCanPlayThrough={handleCanPlayThrough}
              playsInline
              className=" w-full border-4 border-[#B0EB10] object-scale-down rounded-3xl bg-white/40 max-w-screen-xd m-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
