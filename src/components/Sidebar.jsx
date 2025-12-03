import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='col-span-1 shadow-md'>
        <ul className='px-4'>
           <Link to="/"> <li>Home</li></Link>
            <li>Subscription</li>
        </ul>
        <p className='text-lg font-semibold  p-4'>Heading</p>
        <ul className='px-4'>
            <li>Movie 1</li>
            <li>Movie 2</li>
            <li>Movie 3</li>
            <li>Movie 4</li>
            <li>Movie 5</li>
        </ul>      
    </div>
  )
}

export default Sidebar
