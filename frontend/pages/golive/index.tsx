import {FormEvent, useState} from "react";
import { useRef } from "react";
import { useContract, useSigner } from "wagmi";
import { contractAddress, ABI } from "@/constants";
import Alert from "@/components/UI/Alert";

const GoLive = () => {
    const nameRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLTextAreaElement>(null);
    const flowRateRef = useRef<HTMLInputElement>(null);
    const priceRef = useRef<HTMLInputElement>(null);
    const {data:signer} = useSigner();
    const contract = useContract({
        address: contractAddress,
        // @ts-ignore
        ABI: ABI,
        signerOrProvider: signer
    });
    const [streamKey, setStreamKey] = useState<string>('');

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

        setStreamKey(data.streamKey);
        //call the contract function here
        console.log(data);
        console.log('dd', data.streamKey, data.playbackId);
    };


    return (
        <div className="ml-72 mt-6 w-6/12">
            { streamKey !== '' && <Alert streamKey={streamKey}/> }
            <form onSubmit={createStreamHandler}>
                <label className="block mb-4">
                    <span className="text-md">Name</span>
                </label>
                <input type="text" name="name" placeholder="Live Stream name" className="rounded-md w-11/12 h-10 pl-6 mb-6" ref={nameRef} required/>
                <label className="block mb-4">
                    <span className="text-md">Description</span>
                </label>
                <textarea name="description" rows={4} placeholder="Short Description" className="rounded-md w-11/12 pl-6 pt-2 mb-6" ref={descriptionRef} required/>
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