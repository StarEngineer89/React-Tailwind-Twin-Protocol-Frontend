import React, {useState, createContext, useEffect} from "react";

import Web3 from 'web3';

export const ContractContext = createContext();

import TwinToken from '../contracts/IERC20.json';
import TwinStaking from '../contracts/TwinStaking.json';

const twinTokenContractAddress = '0x14917033ec93Bc13BF9E41427FaB7ED56dc64349';
const twinTokenABI = TwinToken.abi;

const twinStakingContractAddress = '0x9601b5c656BA5312EC681a756Ac031409f91C0F7';
const twinStakingABI = TwinStaking.abi;

function ContractContextProvider(props) {

    const [user, setUser] = useState("");
    const [twin, setTwin] = useState({});
    const [twinStaking, setTwinStaking] = useState({});
    const [show, setShow] = useState(false);
    const [balance , setBalance] = useState(0);  
    
  


    const loadWeb3 = async() => {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum)
            await window.ethereum.enable()
          }
          else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider)
          }
          else {
            window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
          }
    }

    const loadContract = () => {
        const web3 = window.web3;
        const twin = new web3.eth.Contract(twinTokenABI, twinTokenContractAddress);
        setTwin(twin);
        const twinStaking = new web3.eth.Contract(twinStakingABI, twinStakingContractAddress);
        setTwinStaking(twinStaking);
    }

    useEffect(() => {
        loadWeb3();
        loadContract();

    }, [])

    

    return(
         <ContractContext.Provider value={{twin, twinStaking, user, setUser, show, setShow, balance, setBalance}}>{props.children}</ContractContext.Provider>
    )
}


export default ContractContextProvider;