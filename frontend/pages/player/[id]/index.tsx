import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Play = () => {
    const [asset, setAsset] = useState<any>({});
    const router = useRouter();

    const {id} = router.query;

    useEffect(() => {

        (async function() {
            const data = await fetch(`https://livepeer.studio/api/asset/${id}`, {
                headers: {
                    'Authorization':`Bearer 4402a176-ddeb-4ecc-bfd6-ea9be0466f11` 
                }
            })
            const response = await data.json();
            setAsset(response);
        })();

    }, []);


    return (
        <div className="mt-6 ml-60 w-full">
            <div className="w-9/12">
                <VideoPlayer playbackId={asset.playbackId} name={asset.name}/>
            </div>
        </div>
    ) 
};

export default Play;