import {FormEvent, useState} from "react";
import { useRef } from "react";
import { useContract, useSigner } from "wagmi";
import { contractAddress, ABI } from "@/constants";
import Alert from "@/components/UI/Alert";
import { ethers } from "ethers";
import { options } from "@/constants";

const GoLive = () => {
    const {data:signer} = useSigner();
    const nameRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLTextAreaElement>(null);
    const orgRef = useRef<HTMLSelectElement>(null);
    const flowRateRef = useRef<HTMLInputElement>(null);
    const priceRef = useRef<HTMLInputElement>(null);
    const contract = useContract({
        address: contractAddress,
        abi: ABI,
        signerOrProvider: signer
    });
    const [streamKey, setStreamKey] = useState<string>('');
    const [id, setId] = useState<string>('');


    const createStreamHandler = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const response = await fetch('https://livepeer.studio/api/stream', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer 4402a176-ddeb-4ecc-bfd6-ea9be0466f11`
            },
            body:JSON.stringify({
                name: nameRef?.current?.value
            })
        })
        const data = await response.json();
        if(priceRef.current?.value){
            
            await contract?.addStream(data.id, data.name, descriptionRef.current?.value, orgRef.current?.value, data.id, flowRateRef.current?.value, ethers.utils.parseEther(priceRef.current?.value));
        }    
        setStreamKey(data.streamKey);
        setId(data.id);

    };


    return (
        <div className="ml-72 mt-6 w-6/12">
            { streamKey !== '' && <Alert streamKey={streamKey} id={id}/> }
            <form onSubmit={createStreamHandler}>
                <label className="block mb-4">
                    <span className="text-md">Name</span>
                </label>
                <input type="text" name="name" placeholder="Live Stream name" className="rounded-md w-11/12 h-10 pl-6 mb-6" ref={nameRef} required/>
                <label className="block mb-4">
                    <span className="text-md">Description</span>
                </label>
                <textarea name="description" rows={4} placeholder="Short Description" className="rounded-md w-11/12 pl-6 pt-2 mb-6" ref={descriptionRef} required/>
                <div className="mb-4 ml-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Organization
                </label>
                <select ref={orgRef} className="select select-bordered w-full max-w-2xl bg-neutral-700">
                    <option disabled selected >Select Org</option>
                        {options.map(option => {
                            return <option key={option}>{option}</option>
                })}
                </select>
                </div>
                <label className="block mb-4">
                    <span className="text-md">Flow Rate</span>
                </label>
                <input type="text" name="Flow Rate" placeholder="Flow Rate/sec" className="rounded-md w-11/12 h-10 pl-6 mb-6" ref={flowRateRef} required/>
                <label className="block mb-4">
                    <span className="text-md">Price</span>
                </label>
                <input type="text" name="price" placeholder="Price" className="rounded-md w-11/12 h-10 pl-6 " ref={priceRef} required/>
                <button className="btn btn-primary btn-wide mt-10 ml-52">Go Live</button>
            </form>
        </div>
    )
};

export default GoLive;