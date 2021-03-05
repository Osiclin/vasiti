import Head from 'next/head'
import Navbar from '../components/Navbar'
import Cardblock from '../components/Cardblock'
import Cardblock1 from '../components/Cardblock1'
import Hero from '../components/Hero'
import Group60 from '../components/Group60'
import Group61 from '../components/Group61'
import Subnavbar from '../components/Subnavbar'
import styles from '../styles/Home.module.css'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vasiti</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />     
        <meta name="Vasiti" description="" />     
      </Head>

      <Navbar />
      <Subnavbar />
      <Hero />
      <Group60 />
      <Cardblock />
      <Group61 />
      <Cardblock1 />
      <Banner />
      <Footer />

    </div>
  )
}
