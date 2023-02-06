import {useState} from "react";

import classes from "./UploadForm.module.css";

const UploadForm = () => {
    const [storage, setStorage] = useState<string>("IPFS");

    const storageHandler = () => {
        
        if(storage === "IPFS"){
            setStorage("Arweave")
        }else{
            setStorage("IPFS")
        }
    }
  return (
    <form className={classes.form}>
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
            required
          />
        </div>
        <div className={classes.input}>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Description
          </label>
          <textarea
            id="first_name"
            rows={6}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Give your video a description"
            required
          />
        </div>
        <div className={classes.input}>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Category
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Choose a category"
            required
          />
        </div>
      </div>
    </form>
  );
};

export default UploadForm;
