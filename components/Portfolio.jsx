import Image from 'next/image'
import React from 'react'

const Portfolio = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
        <h1 className='font-bold text-2xl p-4'>Pictures</h1>
        <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
            <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
                <Image src='https://images.unsplash.com/photo-1475359524104-d101d02a042b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=994&q=80' alt='/' layout='responsive' width='677' height='451'/>
            </div>
            <div className='w-full h-full'>
                <Image src='https://images.unsplash.com/photo-1502252430442-aac78f397426?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'alt='/' width='215' height='217' layout='responsive' objectFit='cover'/>

            </div>
            <div className='w-full h-full'>
                <Image src='https://images.unsplash.com/photo-1510596713412-56030de252c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'alt='/' width='215' height='217' layout='responsive' objectFit='cover'/>

            </div>
            <div className='w-full h-full'>
                <Image src='https://images.unsplash.com/photo-1513147122760-ad1d5bf68cdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'alt='/' width='215' height='217' layout='responsive' objectFit='cover'/>

            </div>
            <div className='w-full h-full'>
                <Image src='https://images.unsplash.com/photo-1529172840709-b36d6f42aeea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'alt='/' width='215' height='217' layout='responsive' objectFit='cover'/>

            </div>
        </div>
    </div>
  )
}

export default Portfolio