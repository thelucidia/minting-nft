import React from "react";

const Slogan: React.FC = () => {
    return (
        <>
            <div className="container w-full h-auto mx-auto absolute z-10 flex mt-[7rem] md:mt-[10rem] flex-col-reverse md:flex-row">
                <div className="w-full flex flex-col gap-y-[10px]">
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

                {/* <div className="w-full relative flex">
                <h1 className="font-primary text-3xl md:text-5xl 2xl:text-[72px] max-w-[40rem] 2xl:leading-[5.5rem] font-semibold md:hidden block text-transparent bg-clip-text bg-gradient-to-r from-[#0ED4FF] via-[#9586FF] to-[#FFFFFF]">
                    {item.title}
                </h1>
                <img
                    src={`${item.image}`}
                    alt="Hero"
                    className={clsx('object-cover top-0 md:w-auto h-[30vh] sm:h-[35vh] -mt-4 md:h-[70vh] mx-auto')}
                />
                </div> */}
            </div>
        </>
    )
}

export default Slogan;