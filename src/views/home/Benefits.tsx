import React from 'react';

import Benefit from '../../components/elements/Benefit';

const benefitList = [
  'Token airdrop whitelist for NFT holders',
  'Early access to Lucidia features.',
  '"Early Supporter" Discord badge.',
  'Exclusive direct chat with Lucidia developers on Discord.',
  '50% discount on first Lucidia t-short.',
  'Exclusive early access to Lucidia DAO platform.',
];

const Benefits: React.FC = () => {
  return (
    <div className="w-full bg-[url('/assets/benefits/benefits_back_mobile.png')] xl:bg-[url('/assets/benefits/benefits_back_desktop.png')] bg-contain md:bg-cover bg-repeat md:bg-no-repeat">
      <section className="flex flex-col mx-auto py-20 px-12 max-w-screen-xl ">
        <div className="flex items-center w-full my-12">
          <h1 className="w-2/3 text-3xl md:text-5xl 2xl:text-[60px]  font-primary max-w-[800px] 2xl:leading-[5.5rem] uppercase font-semibold md:block text-transparent bg-clip-text bg-gradient-to-r from-[#0ED4FF] via-[#9586FF] to-[#FFFFFF]">
            Benefits You Can Enjoy From Lucidia Passport
          </h1>
        </div>
        <div className="relative flex flex-wrap justify-center gap-24">
          {benefitList.map((item, id) => (
            <Benefit className="" prefix={id + 1} content={item} key={'item-' + id} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Benefits;
