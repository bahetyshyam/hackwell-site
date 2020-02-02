import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='pt-32'>
      <div className='p-4 bg-blue-700'>
        <div className='container flex items-center justify-between'>
          <Link
            className='text-gray-200 hover:text-white'
            to='/code-of-conduct'
          >
            Code of Conduct
          </Link>
          <a className='text-gray-200 hover:text-white' href='/'>
            <img src='/img/hackwell-logo-white.png' alt="Hackwell's logo" />
          </a>
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
    </footer>
  );
};

export default Footer;
