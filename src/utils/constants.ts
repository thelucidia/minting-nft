import { MenuType } from "./types";

export const walletSvgs = {
  "MetaMask": "/assets/wallet/metamask_icon.svg",
  "WalletConnect": "/assets/wallet/walletconnect_icon.svg"  
}

export const MOBILE_BREAKPOINT = 1280;

export const NAV_MENU_ITEMS: MenuType[] = [
  {
    title: 'Games',
    path: 'https://app.lucidia.io/game',
  },
  {
    title: 'Turnaments',
    path: 'https://app.lucidia.io/tournaments',
  },
  {
    title: 'Marketplace',
    path: 'https://app.lucidia.io/marketplace',
  },
  {
    title: 'DAO',
    path: 'https://app.lucidia.io/dao',
  },
  {
    title: 'Support hub',
    path: 'https://app.lucidia.io/',
  },
  {
    title: '@splitter',
    path: '',
  },
  {
    title: 'About',
    path: 'https://app.lucidia.io/',
  },
]