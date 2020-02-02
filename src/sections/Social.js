import React from 'react';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Social = () => {
  return (
    <section className='pt-32 pb-16 container flex text-center'>
      <a
        className='w-1/3 py-8 bg-blue-700 hover:bg-pink-600 text-gray-200 hover:text-white rounded-l-lg'
        target='_blank'
        rel='noopener noreferrer'
        href='https://facebook.com'
      >
        <FontAwesomeIcon size='3x' icon={faInstagram} />
      </a>
      <a
        className='w-1/3 py-8 bg-blue-500 hover:bg-blue-600 text-gray-200 hover:text-white'
        target='_blank'
        rel='noopener noreferrer'
        href='https://instagram.com/jsshackwell'
      >
        <FontAwesomeIcon size='3x' icon={faFacebookF} />
      </a>
      <a
        className='w-1/3 py-8 bg-blue-700 hover:bg-red-600 text-gray-200 hover:text-white rounded-r-lg'
        target='_blank'
        rel='noopener noreferrer'
        href='mailto:jsshackwell@jssateb.ac.in'
      >
        <FontAwesomeIcon size='3x' icon={faEnvelope} />
      </a>
    </section>
  );
};

export default Social;
