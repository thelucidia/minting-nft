import React from 'react';
import { LiaTelegramPlane } from 'react-icons/lia';
import { TfiTwitter } from 'react-icons/tfi';
import { RxDiscordLogo } from 'react-icons/rx';

import MediaStatus from './MediaStatus';
import TiCon from './TiCon';

const UserInfo: React.FC = () => {
  const ticonInfo = [
    { title: 'Personal Info', content: 'Below are the username, email and overview information for your account.' },
    { title: 'LUCIDIA TOKEN', content: '$20,000.00' },
    { title: 'Username', content: 'Username' },
    { title: 'Your Email Address:', content: 'xxxxxxxxx@gmail.com', button: 'Edit' },
    { title: 'Last Login:', content: '2024-03-15 08:54:25(UTC)', button: 'History' },
  ];

  const mediaStatus = [
    { icon: <LiaTelegramPlane />, status: 'Joined Telegram', checkedStatus: 'Joined' },
    { icon: <RxDiscordLogo />, status: 'Joined Discord', checkedStatus: 'Joined' },
    { icon: <TfiTwitter />, status: 'Joined Twitter', checkedStatus: 'Joined' },
  ];

  return (
    <section className="mt-[200px]  container max-w-[386px]">
      <div className="relative flex flex-row gap-x-5 ">
        <img src="/hero/Vector.png" alt="Vector" />
        <div className="absolute top-0 left-0 w-full">
          <div className="w-full flex justify-center mt-9">
            <div className="mr-2">
              <img src="/hero/Rectangle 213.png" alt="Rectangle 213" />
            </div>
            <div>
              <div className="flex items-center mt-2">
                <h3 className="text-secondary font-bold text-[24px] leading-[30px] mr-2">Username</h3>
                <div className="h-[16px] w-[16px] rounded-[8px] bg-[#16CD8F] mt-1">&nbsp;</div>
              </div>
              <h4 className="font-sm text-[18px] text-secondary leading-[22.5px]">0x3082....5681</h4>
            </div>
          </div>
          <div className="absolute top-[107px] left-[20px] z-0">
            <img src="/hero/Vector-gray.png" alt="Vector-gray" />
          </div>
          <div className="w-[346px] mx-auto px-3 py-2 z-10 relative">
            {ticonInfo.map((item, idx) => (
              <TiCon title={item.title} content={item.content} button={item.button} key={'item-' + idx} />
            ))}
          </div>
          <div className="w-[346px] mx-auto px-3 py-2 z-10 relative">
            {mediaStatus.map((mediaItem, idx) => (
              <MediaStatus
                icon={mediaItem.icon}
                status={mediaItem.status}
                checkedStatus={mediaItem.checkedStatus}
                key={'item-' + idx}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserInfo;
