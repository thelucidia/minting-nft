// import { useContext } from 'react';
// import Web3 from 'web3';
// import { AbiItem } from 'web3-utils';
import useWeb3 from './useWeb3';

import contractABI from '../config/contractABI.json';
const contractAddress = '0x98E968Bd71a17794F6EBc40a4890d20B52Da5374';

const useContract = () => {
    const web3 = useWeb3();
    const contract = web3 ? new web3.eth.Contract(contractABI, contractAddress) : null;
    return contract;
};

export default useContract;
