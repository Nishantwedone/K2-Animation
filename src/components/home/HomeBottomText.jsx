import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-2 '>
        <Link className='text-[5.5vw] uppercase leading-[5vw] border-3 border-white rounded-full px-10 pt-4 pb-0' to='/projets'>Projets</Link>
        <Link className='text-[5.5vw] uppercase leading-[5vw] border-3 border-white rounded-full px-10 pt-4 pb-0' to='/agence'>Agence</Link>
    </div>
  )
}

export default HomeBottomText 