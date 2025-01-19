import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BsArrowLeftCircle } from 'react-icons/bs';
import { AiFillPieChart } from 'react-icons/ai';
import { SiFuturelearn, SiOpenaccess } from 'react-icons/si';
import { CgProfile } from 'react-icons/cg';
import { FaBookOpen } from 'react-icons/fa';
import HamburgerButton from './HamburgerMenuButton/HamburgerButton';

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();

  const Menus = [
    { title: 'Barcha darsliklar', path: '/home', src: <AiFillPieChart /> },
    { title: 'Profile', path: '/profile', src: <CgProfile /> },
    { title: 'Statistika', path: '/statistics', src: <AiFillPieChart /> },
    { title: 'Sozlamalar', path: '/settings', src: <SiOpenaccess /> },
    { title: 'Yangiliklar', path: '/news', src: <SiFuturelearn /> },
    { title: 'Yordam', path: '/help', src: <CgProfile /> },
    { title: 'Kontaktlar', path: '/contacts', src: <FaBookOpen /> },
    { title: 'Biz haqimizda', path: '/about', src: <SiFuturelearn /> },
    { title: 'Jarayonlar', path: '/process', src: <CgProfile /> },
    { title: 'Analitika', path: '/analytics', src: <AiFillPieChart /> },
    { title: 'Tugmalar sinovi', path: '/buttons', src: <SiOpenaccess /> },
  ];

  return (
    <>
      {/* Sidebar for Desktop */}
      <div
        className={`sidebar ${open ? 'w-60' : 'w-16'} hidden sm:block relative min-h-screen bg-gray-100 border-r border-gray-200 dark:border-gray-600 p-5 dark:bg-slate-800`}
        style={{ height: '100vh' }}
      >
        <BsArrowLeftCircle
          className={`${
            !open && 'rotate-180'
          } absolute text-3xl bg-white fill-slate-800 rounded-full cursor-pointer top-9 -right-4 dark:fill-gray-400 dark:bg-gray-800`}
          onClick={() => setOpen(!open)}
        />

        {/* Logo */}
        <Link to='/home'>
          <div className={`flex ${open ? 'gap-x-4' : ''} items-center`}>
            {open && (
              <span className='text-xl font-medium whitespace-nowrap dark:text-white'>
                Maktab
              </span>
            )}
          </div>
        </Link>

        {/* Menu List */}
        <ul className='pt-6'>
          {Menus.map((menu, index) => (
            <Link to={menu.path} key={index}>
              <li
                className={`flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700
                        ${menu.gap ? 'mt-9' : 'mt-2'} ${
                  location.pathname === menu.path && 'bg-gray-200 dark:bg-gray-700'
                }`}
              >
                <span className='text-2xl'>{menu.src}</span>
                <span className={`${!open && 'hidden'} origin-left duration-300`}>
                  {menu.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className="pt-3 sm:hidden">
        <HamburgerButton setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} />
      </div>

      {/* Mobile Menu Dropdown */}
      <div className="sm:hidden">
        <div
          className={`burger ${mobileMenu ? 'flex' : 'hidden'} absolute z-50 flex-col items-center self-end py-8 mt-16 space-y-6 font-bold sm:w-auto left-6 right-6 dark:text-white bg-gray-50 dark:bg-slate-800 drop-shadow md rounded-xl`}
        >
          {Menus.map((menu, index) => (
            <Link to={menu.path} key={index} onClick={() => setMobileMenu(false)}>
              <span
                className={`${
                  location.pathname === menu.path && 'bg-gray-200 dark:bg-gray-700'
                } p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700`}
              >
                {menu.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;

