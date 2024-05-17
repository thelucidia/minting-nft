import React from "react";
import { Link } from "react-router-dom";

import { LiaTelegramPlane } from 'react-icons/lia';
import { TfiTwitter } from 'react-icons/tfi';
import { RxDiscordLogo } from 'react-icons/rx';

import Media from "../components/elements/Media";

const JoinUs: React.FC = () => {

    const items = [
        {
          item: {
            link: 'https://t.me/Lucidia_io',
            icon: <LiaTelegramPlane />
          },
          title: "Join Our Telegram",
          content: "Please submit the proof of task 1 by entering the telegram username below",
          inputPlaceholder: "Enter your telegram Username here",
          buttonValue: "Join Telegram"
        },
        {
          item: {
            link: 'https://twitter.com/lucidia_io',
            icon: <TfiTwitter />
          },
          title: "Twitter Follow & Retweet",
          content: "After that, please enter twitter Username below",
          inputPlaceholder: "Enter your twitter Username here",
          buttonValue: "Follow and Submit"
        },
        {
          item: {
            link: 'https://discord.gg/lucidia',
            icon: <RxDiscordLogo />
          },
          title: "Join Us on Discord",
          content: "After that, please enter join Discord below",
          inputPlaceholder: "Enter your Discord Username here",
          buttonValue: "Join Discord"
        }
    ];

    return (
        <section className="w-full h-screen text-white relative mb-[605px] flex justify-center">
            <img
                src="/token/Vector.png"
                alt="Lucidian ID Creation"
                className="w-full h-[1344px]"
            />
            <div className="container lg:max-w-[1300px] mx-auto flex flex-row gap-x-5 absolute top-[280px] z-30">
                <div className="w-full h-auto">
                    <div>
                        <img
                            src="/token/Frame 24787 (1).png"
                            alt="borderBoxing"
                            className="w-full h-[636px]"
                        />
                        <div className="w-full absolute top-0 font-secondary font-semibold py-[20px] text-center bg-no-repeat bg-contain py-10 flex flex-col gap-y-3">
                            <h1 className="font-primary font-third text-white pt-[100px] leading-[44px] text-center uppercase" style={{fontWeight: 700, fontSize: 36}}>
                                Join us our social media
                            </h1>
                            <div className="mt-11 mx-auto grid lg:grid-cols-3 gap-y-2 gap-x-8 sm:grid-cols-1">
                                {
                                    items.map((item, idx) => (
                                        <Media 
                                            key={idx} 
                                            item={item.item}
                                            title={item.title} 
                                            content={item.content}  
                                            inputPlaceholder={item.inputPlaceholder}
                                            buttonValue={item.buttonValue}
                                        />
                                    ))
                                }
                            </div>
                            <div className="mt-[42px]">
                                <Link to="/finish-assessment">
                                    <button className="rounded-[12px] bg-[#454545] hover:bg-white py-[13px] px-[140px] text-center bg-no-repeat bg-contain uppercase text-black">
                                        <h4 className="font-bold font-secondary">confirm</h4>
                                    </button>
                                </Link>
                                <h6 className="font-second font-third text-[#F6F6F6] text-[18px] text-center leading-[24px] mt-6">
                                    Join all social media <span className="text-[#0ED4FF] hover:cursor-pointer">Act quickly!</span>
                                </h6>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JoinUs;