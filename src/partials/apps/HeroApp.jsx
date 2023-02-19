import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import {ContractContext} from '../../context/ContractContext';






function HeroApp() {

  const { user, twinStaking, twin, show, setShow, balance, setBalance} = useContext(ContractContext);

  const [poolBalance, setPoolBalance] = useState(0);
  const [poolStatus, setPoolStatus] = useState("Close");
  const [stakedAmount, setUserStakeAmount] = useState(0);
  const [reward, setReward] = useState(0);
  const [maturity, setMaturity] = useState(0);
  const [total, setTotal] = useState(0);
  
  

  const getPoolStatus = async () => {
    const status = await twinStaking.methods.getPoolStatus().call();
    if(status == 0) {
       setPoolStatus("Close");
    } else if (status == 1 ) {
      setPoolStatus("Open");
    }
  }

  const getUserStakedTWIN = async () => {
    const amount = await twinStaking.methods.getUserStakeAmount(user).call();
    const divBal = amount / (1 * 10**18);
    setUserStakeAmount(divBal);
  }

  const getRewards = async () => {
    const reward = await twinStaking.methods.checkRewardCycle(user).call();
    const divBal = reward / (1 * 10**18);
    setReward(divBal);
  }

  const twinBalance = async () => {
    const bal = await twin.methods.balanceOf(user).call();
    const divBal = bal / (1 * 10**18);
    setBalance(divBal);
  }

  const unstake = async () => {
    await twinStaking.methods.unstakeToken().send({ from: user }).on('transactionHash', (hash) => {
      console.log(hash);
    })
  }

  const claim = async () => {
    await twinStaking.methods.claimRewards().send({ from: user }).on('transactionHash', (hash) => {
      console.log(hash);
    })
  }

  const getPoolBalance = async () => {
    const bal = await twin.methods.balanceOf("0xf743541bBd7EB3366C30323bcF2B39ff005DC745").call();
    const divBal = bal / (1000000000000000000);
    setPoolBalance(Math.round(divBal));
  }

  const getMaturity = async () => {
    const bal = await twinStaking.methods.getMaturityPeriod().call();
    const days = bal / (24 * 60 * 60);
    setMaturity(days);

  }

  const getTotal = async () => {
    const bal = await twinStaking.methods.getTotalStakedinPool().call();
    const divBal = bal / (1000000000000000000);
    setTotal(Math.round(divBal));
    console.log("total: ", divBal)
  }


  


  useEffect(()=> {
    getPoolStatus();
    getUserStakedTWIN();
    getRewards();
    twinBalance();
    getPoolBalance();
    getMaturity();
    getTotal();
  }, [user])



  return (
    <section className="px-4 md:px-16 lg:px-36">
      <div className="max-w-6xl relative">
        {/* Hero content */}
        <div className="relative pt-32 pb-5 md:pt-40 md:pb-16">
          {/* Section header */}
          <div className="max-w-2xl pb-0 md:pb-16">
            <p className="mb-8 text-5xl font-black" style={{ fontFamily: 'system-ui' }} data-aos="fade-up">
              <span className="text-stroke">TWIN </span>
              TOKEN
              <span className="text-stroke"> STAKING</span>
            </p>
            
            <div className="w-full bg-slate-500 text-gray-100 border rounded-xl">
              <p className="text-2xl px-6 py-6 font-bold">Twin Staking Pool</p>
              <div className="grid grid-cols-1 divide-y bg-gray-100 text-gray-900">
                {STAKING_LIST.map((item, index) => (
                  <div key={index} className="flex justify-between px-6 md:px-10 py-4 text-md font-normal">
                    <div>{item.title}</div>
                    <div>{item.value}</div>
                  </div>
                ))}
                  <div  className="flex justify-between px-6 md:px-10 py-4 text-md font-normal">
                    <div>Maturity</div>
                    <div>{maturity}{" "}Days</div>
                  </div>
                  <div className="flex justify-between px-6 md:px-10 py-4 text-md font-normal">
                    <div>TVL</div>
                    <div>{total}{" "}TWIN</div>
                  </div>
                  <div className="flex justify-between px-6 md:px-10 py-4 text-md font-normal">
                    <div>Pool Status</div>
                    <div>{poolStatus}</div>
                  </div>
                  <div className="flex justify-between px-6 md:px-10 py-4 text-md font-normal">
                    <div>Your Stake</div>
                    <div>{stakedAmount}{" "}TWIN</div>
                  </div>
                  {/* <div className="flex justify-between px-6 md:px-10 py-4 text-md font-normal">
                    <div>TWIN Balance</div>
                    <div>{balance}</div>
                  </div> */}
                  <div className="flex justify-between px-6 md:px-10 py-4 text-md font-normal">
                    <div>TWIN Accumulated Rewards</div>
                    <div>{reward}</div>
                  </div>
                  <div className="flex justify-between px-6 md:px-10 py-4 text-md font-normal">
                    <div>TWIN Claimable Rewards</div>
                    <div>{reward}</div>
                  </div>
              </div>
            
              <div className="bg-gray-100 pt-4">
                <Link to="https://oreoswap.finance/swap?outputCurrency=0x14917033ec93bc13bf9e41427fab7ed56dc64349" className="block w-full mb-6 text-center text-gray-900 underline" aria-label="Cruip">
                  Get TWIN
                </Link>
                <div className="md:flex justify-around pb-8 px-2">
                  <button className="btn-twin w-full text-white text-center font-semibold round-md py-3 px-8 sm:w-auto mb-2 sm:mb-0" href="#0"
                   onClick={() => {
                    setShow(true);
                    console.log(show)
                   }}
                  >
                    Stake
                  </button>
                  <button className="btn-twin w-full text-white text-center font-semibold round-md py-3 px-8 sm:w-auto mb-2 sm:mb-0" href="#0"
                    onClick={() => unstake()}
                  >
                    Unstake
                  </button>
                  <button className="btn-twin w-full text-white text-center font-semibold round-md py-3 px-8 sm:w-auto mb-2 sm:mb-0" href="#0"
                    onClick={() => {
                      if(reward != 0) {
                        claim();
                      } else {
                        alert("No reward to claim!");
                      }
                    }}
                  >
                    Claim
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
}

export default HeroApp;

const STAKING_LIST = [
  {
    title: 'APY',
    value: '50%'
  },
  // {
  //   title: 'Maturity',
  //   value: '7 days'
  // },
  // {
  //   title: 'TVL',
  //   value: '$NaN'
  // },
  // {
  //   title: 'Pool status',
  //   value: 'Open'
  // },
  // {
  //   title: 'Your Stake',
  //   value: '0 LP'
  // },
  // {
  //   title: 'dART accumulated rewards',
  //   value: '0.00 dART'
  // },
  // {
  //   title: 'dART claimable rewards',
  //   value: '0 dART'
  // },
  // {
  //   title: 'Remaining Until Maturity',
  //   value: '0 days'
  // }
]