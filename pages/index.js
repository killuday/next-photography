import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import Ig from '../components/Ig'
import Slider from '../components/Slider'
import { SliderData } from '../components/Sliderdata'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Photography Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
       
      </Head>
      <Hero heading='Capture Photography' message='I capture moments , memories and keep them alive' />
      <Slider slides={SliderData} />
      < Ig />
  

      
    </div>
  )
}
