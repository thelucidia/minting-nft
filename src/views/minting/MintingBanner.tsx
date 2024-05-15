import React, {useState, useEffect} from "react";

import GradientButton from "../../components/elements/GradientButton";

const MintingBanner: React.FC = () => {

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
        <section className="w-full minting-banner min-h-screen mx-autorelative text-white flex md:items-center justify-center">
            
                <div
                    className={`h-screen bg-black fixed top-0 left-0 flex flex-col items-center justify-center  transition-all ease-in-out duration-300 ${trueLoading ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} `}
                >
                    <div className={`animate-pulse flex justify-center items-center flex-col`}>
                    <img src="/loading.svg" alt="Logo" className="w-24" />
                    <h1 className="font-primary font-semibold text-2xl mt-10 tracking-widest">LOADING</h1>
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
                <div className="container h-auto mx-auto" style={{transform: "rotate(-180deg)"}}>
                    <div className="flex mt-[17rem] items-center">
                        <div className="w-[50%]">
                            <img src="/minting/Mask group.png" alt="mask group" />
                        </div>
                        <div className="w-[50%]">
                            <div className="w-[80%] mx-auto">
                                <img src="/hero/text2.png" alt="text2" />
                            </div>
                            <div className="mt-[16px] w-[80%] mx-auto">
                                <p>
                                    Curse Of The Pharaoh is an action/adventure/survival game set in a post-apocalyptic world overrun by zombies. Collect weapon, bullet, and fuel props. Travel through open-world environment with different biomes.
                                </p>
                            </div>
                            <div className="flex justify-center mt-[51px]">
                                <div className="mr-[45px]">
                                    <img src="/minting/Mask group (1).png" alt="Mask group (1)" />
                                </div>
                                <div className="mr-[45px]">
                                    <img src="/minting/Mask group (2).png" alt="Mask group (2)" />
                                </div>
                                <div>
                                    <img src="/minting/Mask group (3).png" alt="Mask group (3)" />
                                </div>
                            </div>
                            <div className="mt-[90px] w-[90%] mx-auto">
                                <GradientButton content="Mint now" />
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default MintingBanner;