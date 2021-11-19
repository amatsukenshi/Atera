// Components
import MainHeader from '../components/MainHeader/MainHeader'


import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/scss/Home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <link href="fontawesome/css/fontawesome.css" rel="stylesheet"></link>
        <link href="fontawesome/css/brands.css" rel="stylesheet"></link>
        <link href="fontawesome/css/solid.css" rel="stylesheet"></link>
      </Head>
      <div id="root" className={`${styles.root}`}>
        <div className={`${styles.background}`}>
          <div className={`${styles.gray}`}></div>
        </div>
        
        <MainHeader/>
      </div>
    </>
  )
}
 