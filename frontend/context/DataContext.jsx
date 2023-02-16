import {createContext, useState} from "react";
export const DataContext = createContext();

const AppWrapper = (props) => {
    const [video, setVideo] = useState('vid');
    const [thumbnail, setThumbnail] = useState(); 
    const [isSupporting, setIsSupporting] = useState(false); 

    const setUploadVideo = (uploadVideo) => {
      setVideo(uploadVideo);
    };

    const setUploadThumbnail = (uploadThumbnail) => {
      setThumbnail(uploadThumbnail);
    };
    
    const modalHandler = () => {
      setIsSupporting(!isSupporting);
    }

    const sharedState = {
      video,
      thumbnail,
      setUploadVideo,
      setUploadThumbnail,
      modalHandler,
      isSupporting
    }

    return (
        <DataContext.Provider value={{sharedState}}>
          {props.children}
        </DataContext.Provider>
    )
};

export default AppWrapper;