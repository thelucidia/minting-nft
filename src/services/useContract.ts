// import Web3 from "web3";
import useWeb3 from "./useWeb3";

import contractABI from "../config/contractABI.json"; // Load our ABI
console.log("contractABI: ", contractABI);
const contractAddress = "0x98E968Bd71a17794F6EBc40a4890d20B52Da5374"; // Your contract address

const useContract = () => {
    const web3 = useWeb3();
    const contract = new web3.eth.Contract(contractABI, contractAddress);
    return contract;
};

export default useContract;