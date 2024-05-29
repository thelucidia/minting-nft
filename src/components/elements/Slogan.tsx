import React from 'react';
import GradientButton from './GradientButton';

const Slogan: React.FC = () => {
  return (
    <>
      <div className="h-auto px-8 sm:px-12 md:px-16 xl:px-32 mt-[7rem] md:mt-[10rem]">
        <div className="w-full flex items-center justify-center">
          <div className="flex flex-col gap-y-[10px] mt-20 w-full lg:w-3/5">
            <div className="text-left">
              <h5 className="font-primary text-2xl sm:text-3xl lg:text-4xl leading-[44.28px] tracking-wide font-medium">
                Exclusive NFT Drop
              </h5>
              <img src="../hero/text2.png" alt="Herotext" className="flex object-contain" />
            </div>
            <div className="flex mt-[62px]">
              <img
                className="w-3/5 sm:w-2/3 lg:hidden object-contain"
                src="/hero/Frame 625301.png"
                alt="Frame 625301"
              />
              <div className="flex flex-col lg:flex-row w-2/5 sm:w-1/3 lg:w-full">
                <div>
                  <h5 className="text-primary font-bold text-2xl sm:text-3xl lg:text-4xl leading-[44.28px] tracking-wide text-cyan">
                    $20,000
                  </h5>
                  <h5 className="text-primary font-semibold text-xl sm:text-[28px] lg:text-[34px] leading-[41.82px] tracking-wide text-white">
                    Worth of
                  </h5>
                  <h5 className="text-primary font-semibold text-xl sm:text-[28px] lg:text-[34px] leading-[41.82px] tracking-wide text-white">
                    NFT in total
                  </h5>
                </div>
                <div className="flex justify-center items-center mx-[20px]">
                  <img className="w-6 sm:w-8 lg:w-11" src="/hero/+.png" alt="+" />
                </div>
                <div>
                  <h5 className="text-primary font-bold text-2xl sm:text-3xl lg:text-4xl leading-[44.28px] tracking-wide text-cyan">
                    10K NFTS
                  </h5>
                  <h5 className="text-primary font-semibold text-xl sm:text-[28px] lg:text-[34px] leading-[41.82px] tracking-wide text-white">
                    Only
                  </h5>
                  <h5 className="text-primary font-semibold text-xl sm:text-[28px] lg:text-[34px] leading-[41.82px] tracking-wide text-white">
                    available
                  </h5>
                </div>
                <div className="flex justify-center items-center mx-[20px]">
                  <img className="w-6 sm:w-8 lg:w-11" src="/hero/+.png" alt="+" />
                </div>
                <div>
                  <h5 className="text-primary font-bold text-2xl sm:text-3xl lg:text-4xl leading-[44.28px] tracking-wide text-cyan">
                    FREE MINT
                  </h5>
                  <h5 className="text-primary font-semibold text-xl sm:text-[28px] lg:text-[34px] leading-[41.82px] tracking-wide text-white">
                    Limited time
                  </h5>
                  <h5 className="text-primary font-semibold text-xl sm:text-[28px] lg:text-[34px] leading-[41.82px] tracking-wide text-white">
                    offer
                  </h5>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8 lg:flex-row items-center mt-[62px] w-full">
              <div className="time">
                <div className="flex items-center time-num">
                  <div>00</div>:<div>00</div>:<div>00</div>
                </div>
                <div className="flex items-center time-label">
                  <div>Hour</div>
                  <div>Minute</div>
                  <div>Second</div>
                </div>
              </div>
              <GradientButton content={'Join now'} />
            </div>
          </div>
          <div className="w-2/5 hidden lg:block">
            <img src="/hero/Frame 625301.png" alt="Frame 625301" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Slogan;
