import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import {ContractContext} from '../../context/ContractContext';



function HeroApp() {

  const { user, twinStaking, twin} = useContext(ContractContext);

  const [poolStatus, setPoolStatus] = useState("Close");
  const [stakedAmount, setUserStakeAmount] = useState(0);
  const [reward, setReward] = useState(0);
  const [balance, setBalance] = useState(0);

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
    setUserStakeAmount(amount);
  }

  const getRewards = async () => {
    const reward = await twinStaking.methods.checkRewardCycle(user).call();
    setReward(reward);
  }

  const twinBalance = async () => {
    const bal = await twin.methods.balanceOf(user).call();
    setBalance(bal);
  }


  useEffect(()=> {
    getPoolStatus();
    getUserStakedTWIN();
    getRewards();
    twinBalance();
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
                  <div className="flex justify-between px-6 md:px-10 py-4 text-md font-normal">
                    <div>Pool Status</div>
                    <div>{poolStatus}</div>
                  </div>
                  <div className="flex justify-between px-6 md:px-10 py-4 text-md font-normal">
                    <div>Your Stake</div>
                    <div>{stakedAmount}</div>
                  </div>
                  <div className="flex justify-between px-6 md:px-10 py-4 text-md font-normal">
                    <div>TWIN Balance</div>
                    <div>{balance}</div>
                  </div>
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
                <Link to="#" className="block w-full mb-6 text-center text-gray-900 underline" aria-label="Cruip">
                  Get dART-ETH UNI LP Token
                </Link>
                <div className="md:flex justify-around pb-8 px-2">
                  <button className="btn-twin w-full text-white text-center font-semibold round-md py-3 px-8 sm:w-auto mb-2 sm:mb-0" href="#0">
                    Stake
                  </button>
                  <button className="btn-twin w-full text-white text-center font-semibold round-md py-3 px-8 sm:w-auto mb-2 sm:mb-0" href="#0">
                    Unstake
                  </button>
                  <button className="btn-twin w-full text-white text-center font-semibold round-md py-3 px-8 sm:w-auto mb-2 sm:mb-0" href="#0">
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
  {
    title: 'Maturity',
    value: '7 days'
  },
  {
    title: 'TVL',
    value: '$NaN'
  },
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