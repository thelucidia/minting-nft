import React, {useState} from "react";
import { Link } from "react-router-dom";
import OtpInput from "react-otp-input";

const CodeAuth: React.FC = () => {

    const [otp, setOtp] = useState('');

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
                                Authentication code
                            </h1>
                            <div className="mt-11 w-[343px] mx-auto">
                                <OtpInput
                                    value={otp}
                                    onChange={setOtp}
                                    numInputs={4}
                                    renderSeparator={<span className="w-[20px]">&nbsp;</span>}
                                    renderInput={(props) => <input {...props} />}
                                    inputStyle={{
                                        width: "70px",
                                        height: "70px",
                                        background: "transparent",
                                        outline: "none",
                                        borderTop: "none",
                                        borderLeft: "none",
                                        borderRight: "none",
                                        borderBottom: "2px solid #454545",
                                        fontSize: "48px",
                                        lineHeight: "59px",
                                        fontFamily: "Clash Grotesk Variable",
                                        textAlign: "center"
                                    }}
                                />
                            </div>
                            <h6 className="font-second font-third text-[#F6F6F6] text-base text-center leading-[24px] mt-3">
                                Didn't get the code? <span className="text-[#0ED4FF] hover:cursor-pointer">Resend the code</span>
                            </h6>
                            <div className="mt-[42px]">
                                <Link to="/connect-wallet">
                                    <button className="rounded-[12px] bg-cyan hover:bg-white py-[13px] px-[140px] text-center bg-no-repeat bg-contain uppercase text-black">
                                        <h4 className="font-bold font-secondary">Confirm</h4>
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

export default CodeAuth;