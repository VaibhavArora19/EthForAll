import styles from '../styles/Home.module.css'
import Card from '../components/UI/Card'
import Theatre from "../components/Theatre/Theatre"
import Info from '@/components/UI/Info'
import { Retrieve } from '@/ipfs';
import { useEffect, useState } from 'react';
import { useSigner, useContract } from 'wagmi';
import { contractAddress, ABI } from '@/constants';

export default function Home(props: any) {
  const [videos, setVideos] = useState([]);
  const [thumbnails, setThumbnails] = useState([]);
  const {data:signer} = useSigner();
  const contract = useContract({
    address: contractAddress,
    abi: ABI,
    signerOrProvider: signer
  });


  return (
    <>
      <div className={`${styles.main}`}>
      <Theatre />
        <Info title="Live"/>
        <div className="grid md:grid-cols-4 sm:grid-cols-3">
        {props.assets && props.assets.map((asset: {id: string, name: string}) => {
          return <Card key={asset.id} name={asset.name}/>
        })}
      </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const data = await fetch('https://livepeer.studio/api/asset', {
    headers: {
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_LIVEPEER_KEY}`
    }
  });

  const response = await data.json();

  return {
    props: {
      assets: response
    }
  }
}