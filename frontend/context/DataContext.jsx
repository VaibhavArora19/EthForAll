import {createContext, useState} from "react";
export const DataContext = createContext();

const AppWrapper = (props) => {
    const [video, setVideo] = useState('vid');
    const [thumbnail, setThumbnail] = useState();  

    const setUploadVideo = (uploadVideo) => {
      setVideo(uploadVideo);
    };

    const setUploadThumbnail = (uploadThumbnail) => {
      setThumbnail(uploadThumbnail);
    };

    const sharedState = {
      video,
      thumbnail,
      setUploadVideo,
      setUploadThumbnail,
    }

    return (
        <DataContext.Provider value={{sharedState}}>
          {props.children}
        </DataContext.Provider>
    )
};

export default AppWrapper;