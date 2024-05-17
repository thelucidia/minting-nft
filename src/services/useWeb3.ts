// hooks/useWeb3.ts
import { useEffect, useState } from 'react';
import Web3 from 'web3';

declare global {
    interface Window {
        web3?: Web3;
    }
}

const useWeb3 = () => {
    const [web3, setWeb3] = useState<Web3 | null>(null);

    useEffect(() => {
        const initWeb3 = async () => {
            if (window.ethereum) {
                try {
                    await window.ethereum.request({ method: 'eth_requestAccounts' });
                    const web3Instance = new Web3(window.ethereum);
                    setWeb3(web3Instance);
                } catch (error) {
                    console.error('User denied account access', error);
                }
            } else if (window.web3) {
                setWeb3(new Web3(window.web3.currentProvider));
            } else {
                console.warn('No Ethereum provider detected. Install MetaMask or another provider.');
                const provider = new Web3.providers.HttpProvider("http://127.0.0.1:8545");
                const localWeb3 = new Web3(provider);
                setWeb3(localWeb3);
            }
        };
        initWeb3();
    }, []);

    return web3;
};

export default useWeb3;
