import React from 'react';

import { Link } from 'react-router-dom';

const LucidiaNotes: React.FC = () => {
  const lucidiaNotes = [
    'Guaranteed token airdrop whitelist for wallet holding NFT',
    'Early access to certain areas of the Lucidia ecosystem',
    'Special Discord badge “Early Supporter',
    'Special access secret dev channel at Discord which will allow you to speak directly with the Lucidia devs',
    '50% off for first t-shirt of Lucidia merch',
    'Exclusive access to be first users of Lucidia DAO platform',
  ];

  return (
    <section className="relative flex items-center justify-center w-full px-16 pt-44 pb-16 bg-[url('/token/Vector.png')] bg-contain xl:bg-cover bg-no-repeat">
      <div className="flex flex-col items-center justify-center gap-y-6 p-6 xd:p-10 bg-[url('/assets/frames/frame1_mobile.png')] xd:bg-[url('/assets/frames/frame1.png')] bg-full bg-no-repeat max-w-screen-md xd:max-w-screen-lg">
        <p className="font-primary font-semibold text-white text-center text-4xl uppercase">Congratulations!</p>
        <div className="flex flex-col items-center xd:flex-row gap-8 p-8">
          <img className="w-1/2 object-contain" src="/token/Group 625215.png" alt="zombie" />
          <div className="flex flex-col gap-8">
            <p className="font-primary font-semibold text-white text-center xd:text-start text-2xl uppercase">
              Enjoy the Benefits with your LUCIDIA Passport
            </p>
            <ul
              className="flex flex-col gap-4 text-white list-image-icon"
              style={{ listStyleImage: "url('/minting/image 61.svg')" }}
            >
              {lucidiaNotes.map((note, idx) => (
                <li key={'note-' + idx} className="text-left text-lg font-medium">
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Link to="/">
          <button className="px-6 py-3 w-full max-w-80 xd:min-w-80 rounded-xl font-bold font-secondary text-center bg-cyan hover:bg-white bg-no-repeat bg-contain uppercase text-black">
            <h4 className="font-bold font-secondary">Back to homepage</h4>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default LucidiaNotes;
