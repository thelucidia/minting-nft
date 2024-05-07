import React from "react";

interface BenefitProps {
    prefix: number
    content: string
};

const Benefit: React.FC<BenefitProps> = ({prefix, content}) => {
    return(
        <>
            <div className="relative px-[40px] py-[120px] text-center border-t-4 border-b-4 border-solid border-[#F6F6F6] rounded-[74px]">
                <h2 className="absolute top-40 left-[-40px] z-0 font-primary font-semibold text-[300px] leading-[36px]" style={{color: "transparent", WebkitTextFillColor: "transparent", WebkitTextStroke: "1px rgba(246, 246, 246, 0.51)"}}>
                    {prefix}
                </h2>
                <h5 className="font-semibold text-primary text-[40px] leading-[40px]" style={{letterSpacing: "1px"}}>
                    {content}
                </h5>
            </div>
        </>
    );
};

export default Benefit;