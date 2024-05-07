import React from 'react';
import { LiaTelegramPlane } from 'react-icons/lia';
import { TfiTwitter } from 'react-icons/tfi';
import { FaInstagram } from 'react-icons/fa';
import { RxDiscordLogo } from 'react-icons/rx';

const Footer: React.FC = () => {
  const icons = [
    {
      link: 'https://t.me/Lucidia_io',
      icon: <LiaTelegramPlane />,
    },
    {
      link: 'https://discord.gg/lucidia',
      icon: <RxDiscordLogo />,
    },
    {
      link: 'https://twitter.com/lucidia_io',
      icon: <TfiTwitter />,
    },
    // {
    //   link: 'https://lucidia.io',
    //   icon: <AiOutlineYoutube />,
    // },
    // {
    //   link: 'https://www.reddit.com/r/LucidiaMetaverse/',
    //   icon: <FaRedditAlien />,
    // },
    {
      link: 'https://instagram.com/lucidia_official',
      icon: <FaInstagram />,
    },
    // {
    //   link: 'https://www.tiktok.com/@lucidia.io',
    //   icon: <RiTiktokLine />,
    // },
  ];

  const general = [
    {
      title: 'PRIVACY POLICY',
      link: 'https://lucidia.io/privacy-policy/',
    },
    {
      title: 'TERMS AND CONDITIONS',
      link: 'https://lucidia.io/terms-and-conditions/',
    },
    {
      title: 'TOKEN SALE TERMS AND CONDITIONS',
      link: 'https://lucidia.io/token-sale-terms-and-conditions/',
    },
  ];

  const company = [
    {
      title: 'contact us',
      link: 'contact@lucidia.io',
    },
    {
      title: 'FREQUENTLY ASKED QUESTIONS',
      link: '',
    },
    {
      title: 'ANTI-MONEY LAUNDERING POLICY',
      link: 'https://lucidia.io/anti-money-laundering-policy/',
    },
  ];

  const handleScrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="w-full h-auto min-h-screen relative pb-16">
      {/* <div className="container mx-auto w-full text-white sm:mt-28 mt-10 px-5 text-left sm:text-center">
        <div className="mt-10">
          <p className="font-medium font-primary text-footergry text-[15px] sm:text-[22px] mt-2 sm:mt-0">
            For more details about our progress and workflow be sure to follow
          </p>
        </div>

        <ul className="flex w-fit sm:mx-auto mt-12 text-2xl sm:text-4xl sm:gap-x-7 gap-x-5">
          {icons.map((items, i) => {
            return (
              <li className="hover:scale-[1.1] transition-all ease-in-out duration-300 hover:text-cyan " key={i}>
                <a href={items.link} target="_blank" rel="noopener noreferrer" className="">
                  {items.icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div> */}

      <img
        src="/hero/navline.webp"
        alt="navline"
        className="sm:mt-20 mx-auto w-full object-cover relative left-0 right-0 opacity-70 sm:block hidden"
      />

      <div className="container px-48 mx-auto w-full text-white sm:mt-28 grid lg:grid-cols-2 md:grid-cols-1 gap-x-28 gap-y-10 sm:border-t-0 border-t-[1.5px] mt-10 border-white/20">
        <div className="font-primary flex gap-x-20 sm:flex-row flex-col gap-y-8 mt-11 lg:mt-0 sm:items-center items-start lg:order-first md:order-last order-last">
          <div className="">
            <h2 className="font-semibold text-[22px]">GENERAL</h2>
            <ul className="flex flex-col gap-y-2 mt-8">
              {general.map((items, i) => {
                return (
                  <li
                    className="font-secondary font-semibold text-sm text-footergry relative w-fit hover:text-white transition-colors ease-in-out duration-300"
                    key={i}
                  >
                    <div
                      className={`w-7 h-3 bg-grn absolute -right-9 top-0 bottom-0 my-auto flex items-center justify-center ${i === 0 ? 'block' : 'hidden'}`}
                    >
                      <h5 className="text-[8px] font-primary font-bold text-center text-black mt-[2px]">NEW</h5>
                    </div>
                    <a href={items.link} target="_blank" rel="noopener noreferrer" className="">
                      {items.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="">
            <h2 className="font-semibold text-[22px]">COMPANY</h2>
            <ul className="flex flex-col gap-y-2 mt-8">
              {company.map((items, i) => {
                return (
                  <li
                    className="font-secondary font-semibold text-sm text-footergry relative w-fit uppercase hover:text-white transition-colors ease-in-out duration-300"
                    key={i}
                  >
                    <div
                      className={`w-7 h-3 bg-cyan absolute -right-9 top-0 bottom-0 my-auto flex items-center justify-center ${i === 2 ? 'block' : 'hidden'}`}
                    >
                      <h5 className="text-[8px] font-primary font-bold text-center text-black mt-[2px]">NEW</h5>
                    </div>
                    <a
                      href={items.title === 'contact us' ? 'mailto:contact@lucidia.io' : items.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=""
                    >
                      {items.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-y-3 max-w-[540px] font-primary sm:pt-0 pt-20">
          <h3 className="text-[22px] font-semibold pb-5">
            Register to get the opportunity to win an interesting reward in the community!
          </h3>
          <div>
            <input
              type="text"
              className="input-box w-full"
              placeholder="Full name"
            />
          </div>
          <div>
            <input
              type="text"
              className="input-box w-full"
              placeholder="E-mail"
            />
          </div>
          <div>
            <input
              type="text"
              className="input-box w-full"
              placeholder="Discord"
            />
          </div>
          <button className="bg-[#0ED4FF] rounded-[20px] px-[220px] py-[23px]">
            <h4 className="text-black text-secondary text-[20px] leading-[17.5px] font-bold">subscribe</h4>
          </button>
        </div>
      </div>

      <img
        src="/hero/navline.webp"
        alt="navline"
        className="mt-10 mx-auto w-full object-cover relative left-0 right-0 opacity-70 sm:block hidden"
      />

      <div className="container mx-auto w-full text-white sm:mt-16 flex justify-between items-center px-5 sm:border-t-0 border-t-[1.5px] mt-20 pt-12 sm:pt-0 border-white/20">
        <div className="">
          <h3 className="font-secondary text-sm font-semibold uppercase">© Lucidia 2024 | All rights reserved.</h3>
          <p className="text-[12px] text-footergry font-secondary mt-2">
            YOUR JURISDICTION MAY NOT REGULATE CRYPTOCURRENCIES. THE VALUE OF CRYPTOCURRENCIES MAY RISE AND FALL.
            PROFITS MAY BE SUBJECT TO CAPITAL GAINS TAXES OR OTHER LOCAL TAXES.
          </p>
        </div>

        <button className="sm:block hidden flex-shrink-0" onClick={handleScrollTop}>
          <img src="/iconup.webp" alt="Icon" className="w-8 h-8" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
