import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    return (
        <div className=' container pt-8'>
            <div className='flex justify-between items-center'>
                <div className='text-xl font-medium'>My Blog</div>
                <ul className='text-bold gap-10 lg:gap-16 hidden md:flex'>
                    <li className='menuLink'><a href='#hero'>Home</a></li>
                    <li className='menuLink'><a href='#about'>About</a></li>
                    <li className='menuLink'><a href='#blog'>Blog</a></li>
                    <li className='menuLink'><a href='#testimonials'>Testimonials</a></li>
                    <li className='menuLink'><a href='#contact'>Contact</a></li>
                </ul>
                <AiOutlineMenu className='md:hidden' size={35}/>
            </div>

        </div>
    )
}

export default Navbar
