import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
  const NavBarData = [
    {
      id: 1,
      title: `Home`,
      to: '/',
    },
    {
      id: 2,
      title: `Resources`,
      to: '/Resources',
    },
    {
      id: 3,
      title: `About Us`,
      to: '/About',
    },
    {
      id: 4,
      title: `Contact Us`,
      to: '/Contact',
    },
    {
      id: 5,
      title: `FAQs`,
      to: '/FAQs',
    },
  ]

  return (
    <div className='bg-grey-dark text-primary flex justify-evenly h-12 items-center'>
      <div>LOGO</div>
      {NavBarData?.map((item) => (
        <Link to={item.to} key={item.id} className='hover:underline cursor-pointer'>{item.title}</Link>
      ))}
       
      
    </div>
  )
}

export default NavBar
