import styles from '../styles/Home.module.css'

import Card from '../components/UI/Card'

export default function Home() {
  return (
    <>
      <div className={`${styles.main} grid md:grid-cols-4 sm:grid-cols-3`}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  )
}
