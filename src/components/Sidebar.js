import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { BsArrowLeftCircle } from 'react-icons/bs'
import { AiFillPieChart } from 'react-icons/ai'
import { SiFuturelearn } from 'react-icons/si'
import { SiOpenaccess } from 'react-icons/si'
import { CgProfile } from 'react-icons/cg'
import Logo from '../assets/images/logo.svg'

const Sidebar = () => {
    const [open, setOpen] = useState(false)

    const Menus = [
        { title: 'Dashboard', path: '/dashboard', src: <AiFillPieChart /> },
        { title: 'Course', path: '/course', src: <SiFuturelearn /> },
        { title: 'Profile', path: '/profile', src: <CgProfile /> },
        { title: 'Signin', path: '/login', src: <SiOpenaccess />, gap: 'true' },
    ]

    return (
        <>
            <div
                className={`${
                    open ? 'w-72' : 'w-20'
                } hidden sm:block relative h-screen duration-300 bg-gray-100 p-5 dark:bg-slate-800`}
            >
                <BsArrowLeftCircle
                    className={`${
                        !open && 'rotate-180'
                    } absolute text-3xl bg-white fill-slate-800  rounded-full cursor-pointer top-9 -right-4 dark:fill-gray-400 dark:bg-gray-800`}
                    onClick={() => setOpen(!open)}
                />
                <div className='flex gap-x-4 items-center'>
                    <img src={Logo} alt='' />
                    <span
                        className={`text-xl font-medium whitespace-nowrap dark:text-white ${
                            !open && 'scale-0'
                        }`}
                    >
                        Goal Quest
                    </span>
                </div>

                <ul className='pt-6'>
                    {Menus.map((menu, index) => (
                        <Link to={menu.path}>
                            <li
                                key={index}
                                className={`flex items-center gap-x-4 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700
                        ${menu.gap ? 'mt-9' : 'mt-2'} ${
                                    index === 0 && 'bg-gray-200 dark:bg-gray-700'
                                }`}
                            >
                                <span className='text-2xl'>{menu.src}</span>
                                <span
                                    className={`${
                                        !open && 'hidden'
                                    } origin-left duration-300 hover:block`}
                                >
                                    {menu.title}
                                </span>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Sidebar
