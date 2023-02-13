import { Web3Storage } from "web3.storage";

export const Upload = async (video: any, thumbnail: any) => {

    const files = [
        new File([thumbnail], 'thumbnail'),
        new File([video], 'video')
    ];

    if(process.env.NEXT_PUBLIC_IPFS_TOKEN) {
        
        const client = new Web3Storage({token: process.env.NEXT_PUBLIC_IPFS_TOKEN});
        const cid = await client.put(files);
        console.log('Cid is', cid);
        return cid;
    }

};


export const Retrieve = async (cid: string) => {

    if(process.env.NEXT_PUBLIC_IPFS_TOKEN) {
        const client = new Web3Storage({token: process.env.NEXT_PUBLIC_IPFS_TOKEN});    
        const res = await client.get(cid);

        console.log(`Got a response [${res?.status}] ${res?.statusText}`);

        if(!res?.ok) {
            throw new Error('Failed to get the data');
        }

        console.log('res is', res);
        const files = await res.files();
        return files;
    }

}
