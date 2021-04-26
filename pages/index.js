import Head from 'next/head'
import StoreSales from '../components/StoreSales'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Union 76 Store Sales</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StoreSales />      
    </div>
  )
}
