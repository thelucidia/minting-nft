import React from 'react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useWindowSize } from 'react-use';
import Hamburger from 'hamburger-react';
import { clsx } from 'clsx';
import { useAccount } from 'wagmi';
import { trimAddress } from '../../utils/helper';
import HamburgerMenu from '../HamburgerMenu';
import { MOBILE_BREAKPOINT, NAV_MENU_ITEMS } from '../../utils/constants';

const Nav: React.FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { address } = useAccount();
  const { width } = useWindowSize();
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const loginBtnClickHandler = () => {
    if (localStorage.getItem('isUser')) {
      navigate('/connect-wallet');
      return;
    }
    navigate('/create-id');
  };

  const hamburgerMenuItemClickHandler = (path: string) => {
    if (path === '@splitter') return;
    if (path.includes('https')) window.open(path, '_blank');
    else navigate(path);
    setIsHamburgerOpen(false);
  };

  return (
    <nav className="w-full px-12 xl:px-18 2xl:px-48 3xl:px-52 py-4 xl:py-6 absolute top-0 left-0 z-20 bg-black xl:bg-transparent">
      <img
        src="/hero/navline.webp"
        alt="NavLine"
        className="w-full absolute left-0 top-8 right-0 hidden 2xl:block pointer-events-none"
      />
      <div className="w-full max-w-screen-2xl m-auto flex justify-between items-center">
        <Link to="/">
          <img src={width < 640 ? '/assets/icon.png' : '/hero/newlogo.png'} alt="Logo" className="w-16 sm:w-52" />
        </Link>
        {width < MOBILE_BREAKPOINT && <Hamburger toggled={isHamburgerOpen} toggle={setIsHamburgerOpen} color="white" />}
        {isHamburgerOpen && (
          <HamburgerMenu
            className="absolute top-20 right-6"
            items={NAV_MENU_ITEMS}
            onItemClick={hamburgerMenuItemClickHandler}
          />
        )}
        <div className="hidden xl:flex flex-row gap-x-12">
          <ul className="flex font-secondary font-semibold text-sm uppercase items-center gap-x-12 text-white">
            {NAV_MENU_ITEMS.map(
              (item, idx) =>
                item.title !== '@splitter' && (
                  <Link key={idx} to={item.path} target={item.path.includes('https') ? '_blank' : '_self'}>
                    <li
                      className={clsx(
                        'cursor-pointer hover:text-[#0ED4FF]',
                        item.path === pathname && 'text-[#0ED4FF]',
                      )}
                    >
                      {item.title}
                    </li>
                  </Link>
                ),
            )}
          </ul>
          {address ? (
            <span className="text-xl font-bold text-cyan">{trimAddress(address)}</span>
          ) : (
            <button className="input-box" onClick={loginBtnClickHandler}>
              <div className="uppercase leading-normal font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-white via-[#9586FF] to-[#0ED4FF] transition-colors ease-in-out duration-300">
                Login Passport
              </div>
            </button>
          )}
        </div>
      </div>
      <div className="w-full h-px bg-white/40 absolute left-0 right-0 -bottom-1 xl:block hidden 2xl:hidden"></div>
    </nav>
  );
};

export default Nav;
