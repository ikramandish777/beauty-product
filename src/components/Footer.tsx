import React from 'react'
import { FaFacebook, FaPinterest } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
import { RiInstagramFill } from 'react-icons/ri'

export default function Footer() {
  return (
    <section className='bg-gradient-to-r from-[#A0ADCD] to-[#D4DCF0] mt-20'>
        <div className='flex  justify-between py-10 px-10'>
            {/* logo side */}
<div className=''>
    <div><img src="/Beautify.png" alt="" /></div>
    {/* explore dev */}
    <div className='flex  my-10 gap-40'>
    <div className=''>
        <h1 className='font-bold text-2xl text-[#111633] lg:text-4xl leading-8'>Explore</h1>
        <ul className='flex flex-col text-[#3D3D3D] text-xl font-poppins font-medium leading-8 my-5 '>
            <li className=''>Home</li>
            <li className=''>Blog</li>
            <li className=''>Contact us</li>
            <li className=''>Services</li>
        </ul>
    </div>
    {/* about us dev */}
    <div>
        <h1 className='font-bold text-2xl text-[#111633] lg:text-4xl leading-8'>About us</h1>
        <ul className='flex flex-col text-[#3D3D3D] text-xl font-poppins font-medium leading-8 my-5 '>
            <li className=''>(456) 789-12301</li>
            <li className=''>info@modrino.co.uk</li>
            <li className=''>south 13th street</li>
            <li className=''>New york America</li>
        </ul>
    </div>
    </div>
</div>
{/* social media side  */}
<div className='mr-10'>
    <div className='flex gap-5'><h1 className='text-[#111633] text-2xl font-medium'>Follow us</h1>
    <ul className='flex gap-3 items-center'>
        <li><FaFacebook  className='w-9 h-9'/></li>
        <li><FaPinterest className='w-9 h-9'/></li>
        <li><IoLogoWhatsapp className='w-9 h-9'/></li>
        <li><RiInstagramFill className='w-9 h-9'/></li>
    </ul>
    </div>
    {/* explore dev */}
    <div className=''>
    <div className='my-10 '>
    <h1 className='font-bold text-2xl text-[#111633] lg:text-4xl leading-8'>Recent News</h1>
    <div className='flex gap-3 mt-5'>
        <img src="/Footer-image.png" alt="" className='w-[80px] h-[50px]'/>
        <div>
            <p className='font-normal text-base text-[#111633]'>June 14 2024</p>
            <h1 className='text-lg font-medium text-[#111633]'>Anti-Aging Cream</h1>
        </div>
    </div>
    <div className='flex gap-3 mt-2'>
    <img src="/night-cream.png" alt="" className='w-[80px] h-[55px]'/>
        <div>
            <p className='font-normal text-base text-[#111633]'>June 14 2024</p>
            <h1 className='text-lg font-medium text-[#111633]'>Night Cream</h1>
        </div>
    </div>
    </div>
    
    </div>
</div>


</div>
       <p className='text-[#737373] text-base font-inter font-normal text-center pb-5'>@2024 Back House. All Rights reserved</p> 
    </section>
  )
}
