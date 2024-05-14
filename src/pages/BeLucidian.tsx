import React from "react";
import { Link } from "react-router-dom";

const BeLucidian: React.FC = () => {
    return (
        <section className="w-full h-screen text-white relative mb-[605px] flex justify-center">
            <img
                src="/token/Vector.png"
                alt="Lucidian ID Creation"
                className="w-full h-[1344px]"
            />
            <div className="container max-w-[700px] mx-auto flex flex-row gap-x-5 absolute top-[280px] z-30">
                <div className="w-full h-auto">
                <div>
                    <img
                        src="/token/Frame 24787 (1).png"
                        alt="borderBoxing"
                        className="w-full h-[650px]"
                    />
                    <div className="w-full absolute top-0 font-secondary font-semibold py-[20px] text-center bg-no-repeat bg-contain flex flex-col gap-y-3">
                        <div>
                            <h1 className="font-primary font-third text-white pt-[40px] leading-[44px] text-center uppercase" style={{fontWeight: 700, fontSize: 36}}>
                                You have your Lucidian id
                            </h1>
                        </div>
                        <div className="flex justify-center">
                            <h6 className="font-second w-[400px] font-third text-white text-base text-center leading-[24px] mt-2">
                                Your Lucidian Passport has been generated Your 20,000 Lucid Token Airdrop is here! Click to claim the Airdrop
                            </h6>
                        </div>
                        <div className="flex items-center justify-center">
                            <img src="/token/Group 625215.png" width="300px" alt="zombie2" />
                        </div>
                        <div className="mt-[10px]">
                            <Link to="/minting">
                                <button className="rounded-[12px] bg-cyan hover:bg-white py-[13px] px-[150px] text-center bg-no-repeat bg-contain uppercase text-black">
                                    <h4 className="font-bold font-secondary">Claim</h4>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
};

export default BeLucidian;