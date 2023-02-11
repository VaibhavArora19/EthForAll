import styles from '../styles/Home.module.css'

import Card from '../components/UI/Card'
import Theatre from "../components/Theatre/Theatre"
import Info from '@/components/UI/Info'

export default function Home() {
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
