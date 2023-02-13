import * as tus from "tus-js-client";

export const uploadAsset = async (name: string, video: any) => {
    const data = await fetch('https://livepeer.studio/api/asset/request-upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 4402a176-ddeb-4ecc-bfd6-ea9be0466f11'
        },
        body: JSON.stringify({
          name: name
        })
      });

      const {tusEndpoint, asset} = await data.json();

      const upload = new tus.Upload(video, {
        endpoint: tusEndpoint,
        metadata: {
            filename: name,
            filetype: "video"
        },
        uploadSize: video.size,
        onError(err) {
            console.error('Error uploading file: ', err);
        },
        onProgress(bytesUploaded, bytesTotal) {
            const percentage = ((bytesUploaded/bytesTotal)*100).toFixed(2);
            console.log("Uploaded "+ percentage + "%");
        },
        onSuccess() {
            console.log('Upload finished', upload.url);
            console.log('upload is', upload);
        }
      })

      const previousUploads = await upload.findPreviousUploads();
        if (previousUploads.length > 0) {
        upload.resumeFromPreviousUpload(previousUploads[0]);
        }
        upload.start();

        return asset.id;
};
