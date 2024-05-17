import React from "react";
import GradientButton from "../../components/elements/GradientButton";

const Airdrop: React.FC = () => {

  const airdropList: string[] = ["Connect your wallet", "Join with our community", "Complete assessment", "Receive your rewards"];

    return (
      <section className="mt-[140px]">
        <div className="text-center">
          <h6 className="font-bold text-primary uppercase text-[22px] leading-[27.06px]" style={{letterSpacing: "15px"}}>Easy step</h6>
          <h2 className="font-bold text-primary uppercase text-[54px] leading-[66.42px] mt-2 tracking-wide">How to get the airdrop</h2>
        </div>
        <div className="mt-[42px] flex justify-center">
          {
            airdropList.map((item, id) => (
              <GradientButton prefix={id + 1} content={item} key={"item-" + id} />
            ))
          }
        </div>
      </section>
    );
  }
  
  export default Airdrop;