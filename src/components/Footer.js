import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='px-4 pt-32'>
      <div className='bg-blue-700 -mx-4'>
        <div className='container flex flex-col justify-between items-center md:flex-row'>
          <div className='py-4'>
            <Link
              className='text-gray-200 hover:text-white'
              to='/code-of-conduct'
            >
              Code of Conduct
            </Link>
          </div>
          <div className='py-4'>
            <a className='text-gray-200 hover:text-white' href='/'>
              <img src='/img/hackwell-logo-white.png' alt="Hackwell's logo" />
            </a>
          </div>
          <div className='py-4'>
            <a
              className='text-gray-200 hover:text-white'
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/sidsbrmnn/hackwell-site'
            >
              &lt;/&gt; with &#9829;
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
