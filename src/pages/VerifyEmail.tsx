import React from "react";
import { Link } from "react-router-dom";

const VerifyEmail: React.FC = () => {
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
                            className="w-full"
                        />
                        <div className="w-full absolute top-0 font-secondary font-semibold py-[20px] text-center bg-no-repeat bg-contain py-10 flex flex-col gap-y-3">
                            <h1 className="font-primary font-third text-white pt-[100px] leading-[44px] text-center uppercase" style={{fontWeight: 700, fontSize: 36}}>
                                Verify your email
                            </h1>
                            <div className="mt-11 w-[343px] mx-auto">
                                <div className="h-11 clipped2 bg-gradient-to-r from-[#7700FF] to-[#FFFFFF] relative flex items-center scale-x-[-1]">
                                    <div className="absolute bg-black w-[99%] h-[93%] left-0 top-0 right-0 bottom-0 m-auto clipped2"></div>
                                    <input
                                        type="text"
                                        className="px-10 font-primary w-full relative z-10 text-[14px] scale-x-[-1] bg-transparent outline-none"
                                        placeholder="ENTER YOUR EMAIL"
                                    />
                                </div>
                                <h6 className="font-second font-third text-white text-base text-left leading-[24px] mt-3">
                                    You will receive a code for authentication on your email.
                                </h6>
                            </div>
                            <div className="mt-[42px]">
                                <Link to="/connect-wallet">
                                    <button className="rounded-[12px] bg-cyan hover:bg-white py-[13px] px-[87px] text-center bg-no-repeat bg-contain uppercase text-black">
                                        <h4 className="font-bold font-secondary">Send code</h4>
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

export default VerifyEmail;