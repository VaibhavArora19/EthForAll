import Phone from "../../components/UI/Phone";
import UploadForm from "../../components/UI/UploadForm";
import Image from "next/image";
import { useDropzone } from "react-dropzone";
import { useCallback, useState, useContext } from "react";
import {DataContext} from "@/context/DataContext"

import styles from "../../styles/Upload.module.css";

const Upload = () => {
  const [isVideoAvailable, setIsVideoAvailable] = useState<boolean>(false);
  const [isThumbnailAvailable, setIsThumbnailAvailable] = useState<boolean>(false);
  
  const [video, setVideo] = useState<any>();
  const [thumbnail, setThumbnail] = useState<any>();
  const ctx = useContext(DataContext);

  const onDrop = useCallback((acceptedFiles: Blob[]) => {
    console.log('files are', acceptedFiles);
    if (
      acceptedFiles[0].type === "image/jpeg" ||
      acceptedFiles[0].type === "image/jpg" ||
      acceptedFiles[0].type === "image/png" ||
      acceptedFiles[0].type === "image/avif" ||
      acceptedFiles[0].type === "image/webp"
    ) {
      setIsThumbnailAvailable(true);
      setThumbnail(acceptedFiles[0]);
      ctx?.sharedState.setUploadThumbnail(acceptedFiles[0]);
    } else {
      ctx?.sharedState.setUploadVideo(acceptedFiles[0]);
      setVideo(acceptedFiles[0]);
      setIsVideoAvailable(true);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <>
      {!isVideoAvailable ? (
        <div className={styles.upload}>
          <Phone />
          <div {...getRootProps({ className: styles.dropzone })}>
            <input {...getInputProps()} />
            <p>Drag and drop to upload the video</p>
            <button className="btn btn-info">or choose video</button>
          </div>
        </div>
      ) : (
        <div className={styles.video}>
          <UploadForm video={video} />
          <div className={styles.preview}>
            <iframe
              width={490}
              height={275}
              style={{ marginBottom: "25px" }}
              src={URL.createObjectURL(video)}
            />
            {!isThumbnailAvailable ? (
              <div {...getRootProps({ className: styles.imageDrop })}>
                <input {...getInputProps()} />
                <p>Upload thumbnail</p>
              </div>
            ) : (
              <Image
                className={styles.thumbnail}
                src={URL.createObjectURL(thumbnail)}
                width={150}
                height={150}
                alt="thumbnail"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Upload;
