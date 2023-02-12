import { useRef } from "react";
import classes from "./UploadForm.module.css";
import { useContext } from "react";
import { DataContext } from "@/context/DataContext";
import { Upload } from "@/ipfs";
import { uploadAsset } from "@/livepeer";

type Iprops = {
  video: any,
};

const UploadForm = (props: Iprops) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const flowRateRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const ctx = useContext(DataContext);

  const createVideoHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await Upload(ctx.sharedState.video, ctx.sharedState.thumbnail);

    if(titleRef.current?.value){
      await uploadAsset(titleRef.current?.value, ctx.sharedState.video);
    }

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
      <button className="btn btn-primary btn-wide ml-36 mt-4 text-white">Upload Video</button>
    </form>
  );
};

export default UploadForm;
