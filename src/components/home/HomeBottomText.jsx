import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-2 '>
        <Link className='text-[5.5vw] hover:border-[#D3FD50] hover:text-[#D3FD50] uppercase leading-[5vw] border-3 border-white rounded-full px-14 pt-4 pb-0' to='/projects'>Projets</Link>
        <Link className='text-[5.5vw] hover:border-[#D3FD50] hover:text-[#D3FD50] uppercase leading-[5vw] border-3 border-white rounded-full px-14 pt-4 pb-0' to='/agence'>Agence</Link>
    </div>
  )
}

export default HomeBottomText 