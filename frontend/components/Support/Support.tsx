import classes from "./Support.module.css";
import { useState, useEffect } from "react";
import { useContract, useSigner, useAccount } from "wagmi";
import { contractAddress, ABI } from "@/constants";
import { useRouter } from "next/router";
import { createFlow } from "@/superfluid";
import { ethers } from "ethers";

export const Support = () => {
    const [isSuperfluid, setIsSuperfluid] = useState<boolean>(false);
    const [amount, setAmount] = useState<string>("0");
    const [details, setDetails] = useState<any>([]);
    const {data: signer} = useSigner();
    const {address} = useAccount();
    const contract = useContract({
        address: contractAddress,
        abi: ABI,
        signerOrProvider: signer
    })
    const router = useRouter();
    const {id} = router.query;

    useEffect(() => {

        if(signer) {
            (async function(){
                const videoDetails = await contract?.getSingleVideo(id);
                if(isSuperfluid) {
                    setAmount(videoDetails.flowRate.toString());
                }else{
                    setAmount(ethers.utils.formatEther(videoDetails.price.toString()));
                }
                setDetails(videoDetails);
            })();
        }

    }, [signer, isSuperfluid]);


    const methodHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        setIsSuperfluid(!isSuperfluid);
    }

    const donateHandler = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();

        if(isSuperfluid) {
            if(address)
            await createFlow(address, contractAddress, amount);
        }else {
            if(address){
                await signer?.sendTransaction({
                    from: address,
                    to: contractAddress,
                    value: ethers.utils.parseEther(amount)
                })
            }
        }

    }

    const changeAmountHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(event.target.value);
    }

    return (
        <div className={`${classes.modal} rounded-lg bg-black border-2 m-auto`}>
            <div className="ml-20 mt-6">
                <form>
                    <div>
                        <label className="block">
                            <span>Charity Fund/Public Good</span>
                        </label>
                        <input type="text" placeholder={details && details.organization} className="mt-2 input w-full max-w-md"disabled/>
                        <label className="block mt-4">
                            <span>Token</span>
                        </label>
                        <input type="text" placeholder={isSuperfluid ? "fDAIx" :"MATIC"} className="mt-2 input w-full max-w-md"disabled/>
                        <label className="block mt-4">
                            <span>{isSuperfluid ? "Flow Rate" : "Amount"}</span>
                        </label>
                        <input type="text" value={amount && amount} onChange={changeAmountHandler} placeholder={isSuperfluid ? "Flow Rate/sec" : "Enter Amount" } className="mt-2 input w-full max-w-md" />
                    </div>
                    <div className="ml-24 mt-6">
                        <button className="btn btn-success text-white" onClick={donateHandler}>Donate</button>
                        <button className="btn btn-primary text-white ml-2" onClick={methodHandler}>{isSuperfluid ? "Pay Directly" :"Pay via Superfluid"}</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

const Overlay = (props: {onConfirm:() => void}) => {
    return <div className={classes.backdrop} onClick={props.onConfirm}></div>
};


const SupportModal = (props: {onConfirm: () => void}) => {
    return (
        <div>
            <Overlay onConfirm={props.onConfirm}/>
            <Support />
        </div>
    )
};

export default SupportModal;
