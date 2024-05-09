import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Iitem {
    link: string,
    icon: ReactNode
};

interface MediaProps {
    item: Iitem,
    title: string,
    content: string,
    inputPlaceholder: string,
    buttonValue: string
};

const Media: React.FC<MediaProps> = ({item, title, content, inputPlaceholder, buttonValue}) => {
    return (
        <section className="w-[300px]">
            <div className="flex justify-center h-[70px]">
                <div className="w-[70px] hover:transition-all ease-in-out duration-300 hover:text-cyan text-[42px]">
                    {item.icon}
                </div>
                <div className="text-left w-[230px]">
                    <h3>{title}</h3>
                    <h5 className="text-[12px] mt-2">{content}</h5>
                </div>
            </div>
            <div>
                <input
                    className="border border-solid border-[#0ED4FF] px-3 w-full mx-auto mt-2 rounded-[10px] bg-transparent font-secondary font-semibold text-[12px] py-[10px] text-white mb-3"
                    placeholder={inputPlaceholder}
                />
                <Link to={item.link}>
                    <button className="rounded-[12px] bg-cyan hover:bg-white py-[13px] w-full text-center bg-no-repeat bg-contain uppercase text-black text-[12px]">{buttonValue}</button>
                </Link>
            </div>
        </section>
    );
};

export default Media;