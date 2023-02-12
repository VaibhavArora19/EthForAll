import styles from '../styles/Home.module.css'
import { useEffect } from "react";
import Card from '../components/UI/Card'
import Theatre from "../components/Theatre/Theatre"
import Info from '@/components/UI/Info'
import { Retrieve } from '@/ipfs';

export default function Home() {

  useEffect(() => {
    (async function() {
      await Retrieve('bafybeihbyihfgswcmm7fnygf7stgmlosuf6kwnqlfo2pgml6ohnia6xaom');
    })()

  }, []);

  return (
    <>
      <div className={`${styles.main}`}>
      <Theatre />
        <Info title="Live"/>
        <div className="grid md:grid-cols-4 sm:grid-cols-3">
        <Card name="vaibhav"/>
        <Card name="vaibhav"/>
        <Card name="vaibhav"/>
        <Card name="vaibhav"/>
        <Card name="vaibhav"/>
        <Card name="vaibhav"/>
        <Card name="vaibhav"/>
        <Card name="vaibhav"/>
      </div>
      </div>
    </>
  )
}
