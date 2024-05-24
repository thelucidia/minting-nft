import { Link } from 'react-router-dom';
import { MenuType } from '../../utils/types';

interface HamburgerMenuProps {
  className?: string;
  style?: any;
  items: MenuType[];
  onItemClick: (path: string) => void;
}

const HamburgerMenu = (props: HamburgerMenuProps) => {
  const { className, style, items, onItemClick } = props;
  return (
    <div
      className={`${className || ''} flex flex-col justify-center gap-4 p-8 text-xl font-semibold text-white/80 bg-transparent bg-hamburger-menu bg-no-repeat bg-cover min-w-[310px] z-50`}
      style={style}
    >
      <Link to={localStorage.getItem('isUser') ? '/connect-wallet' : '/create-id'}>
        <span className="hover:text-[#0ED4FF] cursor-pointer px-4">Login Passport</span>
      </Link>
      <span className="w-4/5 h-px bg-white/40 px-4" />
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
