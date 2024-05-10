import React from "react";

// import { Link } from "react-router-dom";

const LucidiaNotes: React.FC = () => {

    const lucidiaNotes = [
        "Guaranteed token airdrop whitelist for wallet holding NFT",
        "Early access to certain areas of the Lucidia ecosystem",
        "Special Discord badge “Early Supporter",
        "Special access secret dev channel at Discord which will allow you to speak directly with the Lucidia devs",
        "50% off for first t-shirt of Lucidia merch",
        "Exclusive access to be first users of Lucidia DAO platform"
    ];

    return (
        <section className="w-full h-screen text-white relative mb-[605px] flex justify-center">
            <img
                src="/minting/Vector-minting.png"
                alt="Lucidian ID Creation"
                className="w-full h-[1344px]"
            />
            <div className="container lg:w-[1300px] md:w-[800px] mx-auto flex flex-row gap-x-5 absolute top-[280px] z-30">
                <div className="w-full h-auto">
                    <div>
                        <img
                            src="/minting/lucidia-notes.png"
                            alt="borderBoxing"
                            className="w-full"
                        />
                        <div className="w-full absolute top-0 font-secondary font-semibold py-[20px] lg:px-[80px] text-center bg-no-repeat bg-contain flex flex-col gap-y-3">
                            <h1 className="font-primary font-third text-white mt-[90px] leading-[44px] mx-auto uppercase" style={{fontWeight: 700, fontSize: 36}}>
                                Congratulations!
                            </h1>
                            <div className="flex">
                                <div className="mx-10 mt-5">
                                    <img src="/token/Group 625215.png" width="420px" height="420px" alt="zombie2" />
                                </div>
                                <div className="text-white font-primary mt-5">
                                    <div className="mb-5">
                                        <h1 className="font-primary text-white pt-[10px] leading-[36px] text-left" style={{fontWeight: 700, fontSize: 32}}>
                                            Enjoy the Benefits with your LUCIDIA Passport
                                        </h1>
                                    </div>
                                    <div className="ml-8">
                                        <ul style={{listStyleImage: "url('/minting/image 61.svg')"}}>
                                            {
                                                lucidiaNotes.map((note, idx) => (
                                                    <li key={"note-" + idx} className="text-left text-[20px] font-medium leading-[36px]" >{note}</li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                    <div className="mt-[50px] w-[80%]">
                                        <button className="w-full rounded-[12px] bg-[#454545] hover:bg-cyan py-[13px] px-[87px] text-center bg-no-repeat bg-contain uppercase text-black">
                                            <h4 className="font-bold font-secondary">Mint now</h4>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LucidiaNotes;