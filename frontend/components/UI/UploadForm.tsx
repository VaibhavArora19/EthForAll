import { useRef, useState } from "react";
import classes from "./UploadForm.module.css";
import { useContext } from "react";
import { DataContext } from "@/context/DataContext";
import { Upload } from "@/ipfs";
import { uploadAsset } from "@/livepeer";
import { useContract, useSigner } from "wagmi";
import { contractAddress, ABI } from "@/constants";

type Iprops = {
  video: any,
};

const UploadForm = (props: Iprops) => {
  const [uploading, setUploading] = useState<boolean>(false);
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const flowRateRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const ctx = useContext(DataContext);
  const {data: signer} = useSigner();
  const contract = useContract({
    address: contractAddress,
    abi: ABI,
    signerOrProvider: signer
  })

  const createVideoHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUploading(true);
    const cid = await Upload(ctx.sharedState.video, ctx.sharedState.thumbnail);

    if(titleRef.current?.value){
      const assetId = await uploadAsset(titleRef.current?.value, ctx.sharedState.video);

      await contract?.addVideo(assetId, titleRef.current?.value, descriptionRef.current?.value, 'Turkey Relief fund', cid, flowRateRef.current?.value, priceRef.current?.value);
    }

    setUploading(false);
  }

  return (
    <form className={classes.form} onSubmit={createVideoHandler}>
      <div>
        <div className={classes.input}>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Title
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Add the title of your video"
            ref={titleRef}
            required
          />
        </div>
        <div className={classes.input}>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Description
          </label>
          <textarea
            id="description"
            rows={4}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Give your video a description"
            ref={descriptionRef}
            required
          />
        </div>
        <div className={classes.input}>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Flow Rate
          </label>
          <input
            type="text"
            id="flow rate"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Flow Rate/sec"
            ref={flowRateRef}
            required
          />
                  <div className={classes.input}>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Price
          </label>
          <input
            type="text"
            id="price"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Price"
            ref={priceRef}
            required
          />
        </div>
        </div>
      </div>
      <button className={`btn btn-primary btn-wide ml-36 mt-4 text-white ${uploading && 'loading'}`}>{uploading ? "Uploading..." : "Upload Video"}</button>
    </form>
  );
};

export default UploadForm;
