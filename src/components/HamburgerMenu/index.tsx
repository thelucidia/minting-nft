import { Link } from 'react-router-dom';
import { useAccount } from 'wagmi';
import { MenuType } from '../../utils/types';
import { trimAddress } from '../../utils/helper';

interface HamburgerMenuProps {
  className?: string;
  style?: any;
  items: MenuType[];
  onItemClick: (path: string) => void;
}

const HamburgerMenu = (props: HamburgerMenuProps) => {
  const { className, style, items, onItemClick } = props;
  const { address } = useAccount();

  return (
    <div
      className={`${className || ''} flex flex-col justify-center gap-4 p-8 text-xl font-semibold text-white/80 bg-transparent bg-hamburger-menu bg-full bg-no-repeat min-w-[310px] z-50`}
      style={style}
    >
      {address ? (
        <span className="text-[#0ED4FF] px-4">{trimAddress(address)}</span>
      ) : (
        <>
          <Link to={localStorage.getItem('isUser') ? '/connect-wallet' : '/create-id'}>
            <span className="hover:text-[#0ED4FF] cursor-pointer px-4">Login Passport</span>
          </Link>
          <span className="w-4/5 h-px bg-white/40 px-4" />
        </>
      )}
      {items.map((item, idx) =>
        item.title === '@splitter' ? (
          <span key={idx} className="w-4/5 h-px bg-white/40 px-4" />
        ) : (
          <span key={idx} className="hover:text-[#0ED4FF] cursor-pointer px-4" onClick={() => onItemClick(item.path)}>
            {item.title}
          </span>
        ),
      )}
    </div>
  );
};

export default HamburgerMenu;
