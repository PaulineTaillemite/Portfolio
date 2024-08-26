import React from 'react'
import Logo from '.././assets/logo_gurl.svg'

const Footer = () => {
  return (
    <div className='bg-black py-14'>

      <div className="container flex flex-col gap-3 justify-center items-center">
        <img src={Logo} alt="" className='w-[150px]' />
        <p className='text-white text-center text-sm'> Copyright &copy; 2024. All Rights Reserved.</p>

      </div>
      
    </div>
  )
}

export default Footer