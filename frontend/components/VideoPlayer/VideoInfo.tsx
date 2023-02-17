import { optIn } from "@/push";
import {useContract, useAccount, useSigner } from "wagmi";
import { contractAddress, ABI } from "@/constants";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "@/context/DataContext";
import { getFlowInfo, deleteFlow } from "@/superfluid";

type Iprops = {
  name: string;
  description: string;
  creator: string;
};

const VideoInfo = (props: Iprops) => {
  const {address} = useAccount();
  const [isStreamExist, setIsStreamExist] = useState<boolean>(false);
  const {data: signer} = useSigner();
  const contract = useContract({
    address: contractAddress,
    abi: ABI,
    signerOrProvider: signer
  })
  const ctx = useContext(DataContext);

  useEffect(() => {

    if(address){
      (async function() {
        const flow = await getFlowInfo(address, contractAddress);
        if(Number(flow.flowRate) > 0){
          setIsStreamExist(true);
        }
      })();
      
  }
  }, [address]);

  const subscriptionHandler = async () => {
    if(address && signer){
      await optIn(address, signer);
      await contract?.addSubscriber(props.creator)
    }
  };

  const cancelStream = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
      if(address) {
        await deleteFlow(address, contractAddress);
      }
  }

  const modalHandler = () => {
    ctx.sharedState.modalHandler();
  }

  return (
    <div className="ml-4 flex justify-between">
      <div>
        <h1 className="text-xl font-semibold">{props.name}</h1>
        <p className="mt-2 text-slate-200">{props.description}</p>
        <p className="text-slate-200 font-sm mt-2">{`By: ${props.creator}`}</p>
      </div>
      <div>
        {isStreamExist ? <button className="btn btn-info mr-2" onClick={cancelStream}>
          Delete Stream
        </button>
        :
        <button className="btn btn-info mr-2" onClick={modalHandler}>
          <i className="fa-solid fa-hand-holding-medical"></i>&nbsp;Donate
        </button>
        }
        <button className="btn btn-success" onClick={subscriptionHandler}>Subscribe</button>
      </div>
    </div>
  );
};

export default VideoInfo;
