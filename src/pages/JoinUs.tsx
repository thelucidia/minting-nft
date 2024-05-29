import React from 'react';
import { Link } from 'react-router-dom';
import { LiaTelegramPlane } from 'react-icons/lia';
import { BsTwitterX } from 'react-icons/bs';
import { RxDiscordLogo } from 'react-icons/rx';
import Media from '../components/elements/Media';
import { checkFollowingTwitter, checkMemberForDiscord, checkMemberForTelegram } from '../utils/api';

const JoinUs: React.FC = () => {
  const items = [
    {
      sort: 'Telegram',
      item: {
        link: 'https://t.me/Lucidia_io',
        icon: <LiaTelegramPlane />,
      },
      title: 'Join Our Telegram',
      content: 'Please submit the proof of task 1 by entering the telegram username below',
      inputPlaceholder: 'Enter your telegram Username here',
      buttonValue: 'Join Telegram',
      erroText: 'You are not a member of our community!',
      check: checkMemberForTelegram,
    },
    {
      sort: 'Twitter',
      item: {
        link: 'https://twitter.com/lucidia_io',
        icon: <BsTwitterX />,
      },
      title: 'Twitter Follow & Retweet',
      content: 'After that, please enter twitter Username below',
      inputPlaceholder: 'Enter your twitter Username here',
      buttonValue: 'Follow and Submit',
      erroText: 'Please follow our Twitter account. We will verify this before sending the airdrop.',
      check: checkFollowingTwitter,
    },
    {
      sort: 'Discord',
      item: {
        link: 'https://discord.gg/lucidia',
        icon: <RxDiscordLogo />,
      },
      title: 'Join Us on Discord',
      content: 'After that, please enter join Discord below',
      inputPlaceholder: 'Enter your Discord Username here',
      buttonValue: 'Join Discord',
      erroText: 'You are not a member of our community!',
      check: checkMemberForDiscord,
    },
  ];

  return (
    <section className="relative flex items-center justify-center w-full h-auto lg:h-screen p-4 text-white bg-[url('/token/Vector.png')] bg-contain xl:bg-cover bg-no-repeat">
      <div className="flex flex-col items-center justify-center gap-y-6 p-6 xl:p-10 mt-32 bg-[url('/assets/frames/frame1_mobile.png')] md:bg-[url('/assets/frames/frame1.png')] bg-full bg-no-repeat">
        <p className="font-primary font-semibold text-white text-center text-4xl uppercase">Join us our social media</p>
        <div className="flex flex-col lg:flex-row gap-8">
          {items.map((item, idx) => (
            <Media
              key={idx}
              item={item.item}
              title={item.title}
              content={item.content}
              inputPlaceholder={item.inputPlaceholder}
              buttonValue={item.buttonValue}
              errorText={item.erroText}
              check={item.check}
            />
          ))}
        </div>
        <Link to="/finish-assessment">
          <button className="rounded-[12px] bg-[#454545] hover:bg-white px-12 py-4 md:min-w-80 text-center font-bold bg-no-repeat bg-contain uppercase text-black">
            confirm
          </button>
        </Link>
        <p className="text-white text-base text-center">
          Join all social media <span className="text-[#0ED4FF] hover:cursor-pointer">Act quickly!</span>
        </p>
      </div>
    </section>
  );
};

export default JoinUs;
