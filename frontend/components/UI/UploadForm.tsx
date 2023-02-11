import { useRef } from "react";
import classes from "./UploadForm.module.css";

type Iprops = {
  video: any,
};
const UploadForm = (props: Iprops) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const flowRateRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);

  const createVideoHandler = async (event: React.FormEvent<HTMLFormElement>) => {

    const data = await fetch('https://livepeer.studio/api/asset/request-upload', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 4402a176-ddeb-4ecc-bfd6-ea9be0466f11'
      },
      body: JSON.stringify({
        name: titleRef?.current?.value
      })
    })
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
