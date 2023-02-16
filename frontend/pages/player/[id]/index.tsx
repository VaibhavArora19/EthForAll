import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import VideoInfo from "@/components/VideoPlayer/VideoInfo";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useContract, useSigner } from "wagmi";
import { contractAddress, ABI } from "@/constants";
import SupportModal from "@/components/Support/Support";
import { useContext } from "react";
import { DataContext } from "@/context/DataContext";

const Play = () => {
    const [asset, setAsset] = useState<any>({});
    const [videoDetails, setVideoDetails] = useState<any>({});
    const router = useRouter();
    const {data: signer} = useSigner();
    const contract = useContract({
        address: contractAddress,
        abi: ABI,
        signerOrProvider: signer
    });
    const ctx = useContext(DataContext);

    const {id} = router.query;

    useEffect(() => {

        (async function() {
            const data = await fetch(`https://livepeer.studio/api/asset/${id}`, {
                headers: {
                    'Authorization':`Bearer 4402a176-ddeb-4ecc-bfd6-ea9be0466f11` 
                }
            })
            const response = await data.json();
            
            if(signer) {
                const videoInfo = await contract?.getSingleVideo(id);
                setVideoDetails(videoInfo);
            }
            setAsset(response);
        })();

    }, [signer]);

    const modalHandler = () => {
        ctx.sharedState.modalHandler();
    }

    return (
        <div className="ml-24 w-9/12">
            {ctx.sharedState.isSupporting && <SupportModal onConfirm={modalHandler}/> }
            <div>
                <VideoPlayer playbackId={asset.playbackId} name={asset.name}/>
            </div>
            <div className="mt-4">
                <VideoInfo name={asset.name} description={videoDetails.description} creator={videoDetails.creator}/>
            </div>
        </div>
    ) 
};

export default Play;