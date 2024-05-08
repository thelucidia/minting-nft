import React from "react";

import GradientButton from "./GradientButton";

const Slogan: React.FC = () => {

    return (
        <>
            <div className="container h-auto mx-auto mt-[7rem] md:mt-[10rem]">
                <div className="w-full flex justify-center">
                    <div className="flex flex-col gap-y-[10px] mt-20">
                        <div className="text-left">
                            <h5 className="font-primary text-[36px] leading-[44.28px] tracking-wide font-medium">
                                Participate On The Exclusive NFT Drop
                            </h5>
                            <img
                                src="../hero/text2.png"
                                alt="Herotext"
                                className="flex object-cover text-image mb-8 h-20 w-108"
                            />
                        </div>
                        <div className="flex mt-[62px]">
                            <div>
                                <h5 className="text-primary font-bold text-[36px] leading-[44.28px] tracking-wide text-cyan">$20,000</h5>
                                <h5 className="text-primary font-semibold text-[34px] leading-[41.82px] tracking-wide text-white">Worth of NFT</h5>
                                <h5 className="text-primary font-semibold text-[34px] leading-[41.82px] tracking-wide text-white">in total</h5>
                            </div>
                            <div className="flex justify-center items-center mx-[20px]">
                                <img src="/hero/+.png" />
                            </div>
                            <div>
                                <h5 className="text-primary font-bold text-[36px] leading-[44.28px] tracking-wide text-cyan">10K NFTS</h5>
                                <h5 className="text-primary font-semibold text-[34px] leading-[41.82px] tracking-wide text-white">Only</h5>
                                <h5 className="text-primary font-semibold text-[34px] leading-[41.82px] tracking-wide text-white">available</h5>
                            </div>
                            <div className="flex justify-center items-center mx-[20px]">
                                <img src="/hero/+.png" />
                            </div>
                            <div>
                                <h5 className="text-primary font-bold text-[36px] leading-[44.28px] tracking-wide text-cyan">FREE MINT</h5>
                                <h5 className="text-primary font-semibold text-[34px] leading-[41.82px] tracking-wide text-white">Limited time</h5>
                                <h5 className="text-primary font-semibold text-[34px] leading-[41.82px] tracking-wide text-white">offer</h5>
                            </div>
                        </div>
                        <div className="flex items-center mt-[62px]">
                            <div className="time">
                                <div className="flex items-center time-num">
                                    <div >00</div>:
                                    <div >00</div>:
                                    <div >00</div>
                                </div>
                                <div className="flex items-center time-label">
                                    <div>Hour</div>
                                    <div>Minute</div>
                                    <div>Second</div>
                                </div>
                            </div>
                            <GradientButton content={"Join now"} />
                        </div>
                    </div>
                    <div>
                        <img src="/hero/Frame 625301.png" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slogan;