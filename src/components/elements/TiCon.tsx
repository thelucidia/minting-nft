import React from "react";

interface TiConProps {
    title: string,
    content: string,
    button?: string
};

const TiCon: React.FC<TiConProps> = ({title, content, button=""}) => {
    return (
        <div className="mt-6">
            <h5 className="text-primary font-bold text-[#00EAEF] text-[16px] leading-[20px]">{title}</h5>
            <div className="flex justify-between mt-2">
                <div>
                    <h6 className="text-primary font-sm text-[#F0F0F0] text-[12px] leading-[15px]">{content}</h6>
                </div>
                <div className={title.slice(-1) === ":" ? "block mr-6" : "hidden"}>
                    <button 
                        className="hover:bg-[#00EAEF] hover:text-white hover:cusor-pointer h-[18px] w-[76px] border border-[1px] border-[#00EAEF] text-[#00EAEF] text-[12px] leading-[18px] rounded-[8px]"
                    >
                        {button}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TiCon;
