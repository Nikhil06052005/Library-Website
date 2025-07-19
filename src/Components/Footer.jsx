import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col gap-4 items-center justify-between bg-amber-200 px-6 py-3 rounded-md md:flex-row md:justify-between'>
        <ul className='flex gap-4 font-playfair text-gray-400'>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
        </ul>
        <div className='flex gap-2'>
            <img className='h-10 rounded-2xl' src="./assets/study.jpg" alt="help" />
            <div>
                <p className='font-playfair font-thin'>Have any Questions?</p>
                <a href="#" className='font-playfair font-medium'>Talk To a specialist</a>
            </div>
        </div>
    </div>
  )
}

export default Footer