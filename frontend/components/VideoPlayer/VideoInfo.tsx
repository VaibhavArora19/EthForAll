import { optIn } from "@/push";
import {useContract, useAccount, useSigner } from "wagmi";
import { contractAddress, ABI } from "@/constants";

type Iprops = {
  name: string;
  description: string;
  creator: string;
};

const VideoInfo = (props: Iprops) => {
  const {address} = useAccount();
  const {data: signer} = useSigner();
  const contract = useContract({
    address: contractAddress,
    abi: ABI,
    signerOrProvider: signer
  })

  const subscriptionHandler = async () => {
    if(address && signer){
      await optIn(address, signer);
      await contract?.addSubscriber(props.creator)
    }
  };


  return (
    <div className="ml-4 flex justify-between">
      <div>
        <h1 className="text-xl font-semibold">{props.name}</h1>
        <p className="mt-2 text-slate-200">{props.description}</p>
      </div>
      <div>
        <button className="btn btn-info mr-2">
        <i className="fa-solid fa-hand-holding-medical"></i>&nbsp;Donate
        </button>
        <button className="btn btn-success" onClick={subscriptionHandler}>Subscribe</button>
      </div>
    </div>
  );
};

export default VideoInfo;
