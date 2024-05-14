import React from "react";
import { Link } from "react-router-dom";

interface GradientButtonProps {
    prefix?: number
    content: string
};

const GradientButton: React.FC<GradientButtonProps> = ({prefix = null, content}) => {

    const baseClass = "w-full rounded-custom py-[18px]";
    const addedClass = prefix === null? "px-[87px]": "px-10";

    return (
        <>
            <div className="gap-x-3 md:flex-row flex-col gap-y-10 mx-[27px]">
                <Link to="/create-id" rel="noopener noreferrer">
                    <button className={`${baseClass} ${addedClass}`} style={{background: "linear-gradient(90deg, #193F47 33.5%, #0ED4FF 100%", textAlign: "center"}}>
                        <div className="flex items-center justify-center font-secondary transition-colors ease-in-out duration-300 uppercase">
                            <h2 className={prefix === null? "hidden": "block font-secondary font-bold text-[80px]"} style={{color: "transparent", WebkitTextFillColor: "transparent", WebkitTextStroke: "3px white"}}>
                                {prefix}
                            </h2>
                            <h5 className="text-white font-bold text-[20px] group-hover:text-black">{content}</h5>
                        </div>
                    </button>
                </Link>
            </div>  
        </>
    );
};

export default GradientButton;