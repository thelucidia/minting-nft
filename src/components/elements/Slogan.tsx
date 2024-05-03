import React from "react";

interface SloganProps {
    isCenter?: boolean;
};

const Slogan: React.FC<SloganProps> = ({isCenter = false}) => {

    const baseClass = "w-full";
    const centerClasses = `${baseClass} ${isCenter ? "flex justify-center ml-48 mt-[-50px]": ""}`;

    return (
        <>
            <div className="container z-0 h-auto mx-auto absolute z-10 flex mt-[7rem] md:mt-[10rem]">
                <div className={centerClasses}>
                    <div className="flex flex-col gap-y-[10px]">
                        <img
                            src="../hero/text1.png"
                            alt="Herotext"
                            className="flex object-cover text-image h-28 w-100"
                        />
                        <img
                            src="../hero/text2.png"
                            alt="Herotext"
                            className="flex object-cover text-image mb-8 h-20 w-108"
                        />
                        <div className="flex gap-16 mb-0">
                            <div className="flex items-center time">
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
                            <div className="flex line" />
                            <div className="flex airdrop">
                            <div className="airdrop-title">AIRDROP</div>
                            <div className="airdrop-content"><span>$20,000</span> WORTH OF NFT IN TOTAL</div>
                            </div>
                        </div>
                        <div className="flex gap-x-3 mt-[20px] md:flex-row flex-col gap-y-10">
                            <a href="" target="_blank" rel="noopener noreferrer" className="">
                            <button className=" w-full md:w-[28rem] h-12 clipped2 bg-transparent relative  font-bold flex items-center justify-center scale-y-[-1] group">
                                <div className="absolute bg-transparent left-0 top-0 right-0 bottom-0 m-auto group-hover:bg-white transition-bg ease-in-out duration-300">
                                <img
                                    src="../hero/join_now.png"
                                    alt="JoinNow"
                                    className="object-cover w-full h-full absolute top-0 left-0 group-hover:opacity-0 transition-opacity ease-in-out duration-300"
                                />
                                </div>
                                <h1 className="font-secondary font-bold relative z-10 text-black text-[16px] scale-y-[-1] group-hover:text-black  transition-colors ease-in-out duration-300">
                                    JOIN NOW
                                </h1>
                            </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slogan;