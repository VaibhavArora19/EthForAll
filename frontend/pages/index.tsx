import styles from '../styles/Home.module.css'
import Card from '../components/UI/Card'
import Theatre from "../components/Theatre/Theatre"
import Info from '@/components/UI/Info'
import { useEffect, useState } from 'react';
import { useSigner, useContract } from 'wagmi';
import { contractAddress, ABI } from '@/constants';
import { useAuth } from '@arcana/auth-react';
import Modal from '@/components/Arcana/Arcana';

export default function Home() {
  const [videos, setVideos] = useState([]);
  const {data:signer} = useSigner();
  const contract = useContract({
    address: contractAddress,
    abi: ABI,
    signerOrProvider: signer
  });
  const auth = useAuth();

  useEffect(() => {
    
    if(signer) {

      (async function(){
        const assets = await contract?.getAllVideos();
        console.log('assets', assets)
        setVideos(assets);
      })();
    }

  }, [signer]);


  return (
    <>
      {!auth.isLoggedIn && <Modal />}
      <div className={`${styles.main}`}>
      <Theatre />
        <Info title="Live"/>
        <div className="grid md:grid-cols-4 sm:grid-cols-3">
        {videos.length > 0 && videos.map((asset: {ID: string, name: string, thumbnailCid: string}) => {
          return <Card key={asset.ID} id={asset.ID} name={asset.name} thumbnail={asset.thumbnailCid} />
        })}
      </div>
      </div>
    </>
  )
}