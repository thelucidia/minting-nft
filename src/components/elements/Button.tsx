import React from "react";

interface ButtonProps {
    prefix?: number
    content: string
};

const Button: React.FC<ButtonProps> = ({prefix = null, content}) => {

    const baseClass = "w-full rounded-custom py-[18px]";
    const addedClass = prefix === null? "px-[87px]": "px-10";

    return (
        <>
            <div className="gap-x-3 md:flex-row flex-col gap-y-10 mx-[27px]">
                <a href="" target="_blank" rel="noopener noreferrer" className="">
                    <button className={`${baseClass} ${addedClass}`} style={{background: "linear-gradient(90deg, #193F47 33.5%, #0ED4FF 100%"}}>
                        <div className="flex items-center font-secondary transition-colors ease-in-out duration-300 uppercase">
                            <h2 className="font-secondary font-bold text-[80px]" style={{color: "transparent", WebkitTextFillColor: "transparent", WebkitTextStroke: "3px white"}}>
                                {prefix}
                            </h2>
                            <h5 className="text-white font-bold text-[20px] group-hover:text-black">{content}</h5>
                        </div>
                    </button>
                </a>
            </div>  
        </>
    );
};

export default Button;