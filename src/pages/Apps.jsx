import React, {useContext, useState} from 'react';


// effects
import PageIllustration from '../partials/PageIllustration';

// sections
import HeroApp from '../partials/apps/HeroApp';

// layouts
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import { ContractContext } from '../context/ContractContext';
import { Modal, Label, TextInput, Checkbox, Button } from 'flowbite-react';


function Home() {

  const { show, setShow, balance , twin, twinStaking, user} = useContext(ContractContext);

  const [stakeAmount, setStakeAmount] = useState(0);


  const decimal =  (amount) => {
      return +amount * (1 * 10**18);
  }



  const stakeTwin = async (amount) => {
    await twin.methods.approve(twinStaking._address, amount).send({ from: user}).on('transactionHash', (hash) => {
       twinStaking.methods.stakeToken(amount).send({ from: user})
        .on('transactionHash', (hash) => {
           console.log(hash);
           setShow(false);
           
        });
    })
    
  };
  
  return (
 
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />
      
      {/*  Page content */}
      <main className="grow">
        {/*  Page illustration */}
        <div className="relative max-h-full mx-auto pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>

        {/*  Page sections */}
        <HeroApp />
        <Modal
           size="lg"
           show={show === true}
           popup={true}
           onClose={() => setShow(false)}
         >
           <Modal.Header />
           <Modal.Body>
             <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
               <div>
                 <div className="mb-2 block">
                   <Label
                     htmlFor="email"
                     value="TWIN Balance"
                   />
                 </div>
                 <Label
                     htmlFor="email"
                     value={balance}
                   />
               </div>
               <div>
                 <div className="mb-2 block">
                   <Label
                     htmlFor="password"
                     value="Stake Amount:"
                   />
                 </div>
                 <TextInput
                   id="amount"
                   type="text"
                   value={stakeAmount}
                   onChange={(e) => setStakeAmount(e.target.value)}
                   required={true}
                 />
               </div>
               <div className="mb-2 block">
                 <button className="btn-twin w-full text-white text-center font-semibold round-md py-3 px-8 sm:w-auto mb-2 sm:mb-0" href="#0"
                   onClick={() => {
                     stakeTwin(BigInt(decimal(stakeAmount)));
                   }}
                  >
                    Stake
                  </button>
               </div>

             </div>
           </Modal.Body>
         </Modal>
      </main>

      {/*  Site footer */}
      <Footer />
          
    
      
      
         
      {/* end of div */}
    </div>
   
  );
}

export default Home;