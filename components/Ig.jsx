import React from 'react'
import Img1 from '../public/1view.jpg'
import Img2 from '../public/2view.jpg'
import Img3 from '../public/3view.jpg'
import Img4 from '../public/4view.jpg'
import Img5 from '../public/5view.jpg'
import Img6 from '../public/6view.jpg'
import IgImg from './IgImg'

const Ig = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'> 
        <p className='text-2xl font-bold'>Follow me on Instagram</p>
        <p className='pb-4'>@killuday</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            <IgImg socialImg={Img1} />
            <IgImg socialImg={Img2} />
            <IgImg socialImg={Img3} />
            <IgImg socialImg={Img4} />
            <IgImg socialImg={Img5} />
            <IgImg socialImg={Img6} />
        </div>
    </div>
  )
}

export default Ig