import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Header = ({ home = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navs = [
    { link: 'about', name: 'About' },
    { link: 'rules', name: 'Rules' },
    { link: 'tracks', name: 'Tracks' },
    { link: 'sponsors', name: 'Sponsors' },
    { link: 'faq', name: 'FAQ' }
  ];

  return (
    <header className='sticky top-0 px-2 py-2 z-10 -my-16'>
      <div className='container relative flex items-center justify-between p-6 lg:px-16 rounded-lg bg-white shadow-md'>
        <a href='/'>
          <img
            className='h-10 lg:h-14'
            src='/img/logo.svg'
            alt="Hackwell's logo"
          />
        </a>
        {home ? (
          <>
            <button
              onClick={() => setIsOpen(true)}
              className='lg:hidden rounded focus:outline-none'
            >
              <svg
                className='h-6 w-6 text-gray-800'
                viewBox='0 0 24 24'
                fill='currentColor'
              >
                <path d='M3 7.5a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zM3 15.5a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1z' />
              </svg>
            </button>
            <div
              className={
                (isOpen ? 'block' : 'hidden') +
                ' z-50 absolute inset-0 p-4 lg:block lg:static lg:z-auto lg:p-0'
              }
            >
              <div
                className='fixed inset-0 bg-gray-900 opacity-50 lg:hidden'
                onClick={() => setIsOpen(false)}
              ></div>
              <nav className='relative max-w-xs ml-auto px-6 py-6 bg-white rounded-lg lg:max-w-full lg:ml-0 lg:p-0'>
                <div className='flex items-center justify-between lg:hidden'>
                  <h3 className='text-sm text-gray-600 leading-none'>
                    Navigation
                  </h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    className='text-gray-800 rounded focus:outline-none'
                  >
                    <svg className='h-6 w-6' viewBox='0 0 24 24'>
                      <path
                        d='M10.586 12L7.05 8.464l-.077-.087A1 1 0 018.464 7.05L12 10.586l3.536-3.536a1 1 0 011.491 1.327l-.077.087L13.414 12l3.536 3.536.077.087a1 1 0 01-1.491 1.327L12 13.414 8.464 16.95a1 1 0 01-1.491-1.327l.077-.087L10.586 12z'
                        fill='currentColor'
                      />
                    </svg>
                  </button>
                </div>
                {navs.map(nav => (
                  <Link
                    key={nav.link}
                    to={nav.link}
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                    className='cursor-pointer overflow-hidden mt-2 -mx-3 block px-3 py-2 tracking-wide uppercase font-medium text-gray-600 focus:outline-none lg:inline lg:mt-0 lg:mx-2 lg:px-2 lg:hover:text-gray-700'
                    activeClass='text-blue-600 lg:border-b-2 lg:border-blue-600'
                  >
                    {nav.name}
                  </Link>
                ))}
              </nav>
            </div>
          </>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
