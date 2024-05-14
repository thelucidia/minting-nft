import Web3 from "web3";

declare global {
    interface Window {
        web3?: Web3;
    }
};

const useWeb3 = () => {
    let web3: Web3;

    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        try {
            window.ethereum.enable(); // Request account access if needed
        } catch (error) {
            console.error("Access denied for Ethereum.");
        }
    } else if (window.web3) {
        web3 = new Web3(window.web3.currentProvider);
    } else {
        console.warn("No Ethereum provider detected. Install MetaMask!");
        // Fallback to localhost; specify any provider
        const provider = new Web3.providers.HttpProvider("http://127.0.0.1:8545");
        web3 = new Web3(provider);
    }

    return web3;
}

export default useWeb3;