import React from 'react';

import dl from '../images/deep learning.png';
import eca from '../images/edge computing and analytics.png';
import mlft from '../images/machine learning.png';
import nlp from '../images/natural language processing.png';
import vip from '../images/video image processing.png';

const Tracks = () => {
  const tracks = [
    {
      title: 'Natural Language Processing',
      image: nlp
    },
    {
      title: 'Machine Learning Models',
      image: mlft
    },
    {
      title: 'Deep Learning',
      image: dl
    },
    {
      title: 'Edge Computing & Analytics',
      image: eca
    },
    {
      title: 'Video Image Processing',
      image: vip
    }
  ];

  return (
    <section className='px-4 py-32 bg-white' id='tracks'>
      <div className='container'>
        <div className='text-center'>
          <h2 className='text-4xl md:text-5xl leading-tight font-medium text-gray-900'>
            Amazing <span className='font-bold text-blue-600'>tracks</span>
          </h2>
          <p className='mt-2 text-lg md:text-xl tracking-wide text-gray-600'>
            Hack on any of these tracks to learn amazing new technology
          </p>
        </div>
        <div className='max-w-3xl mx-auto xl:w-3/4'>
          <div className='mt-10 flex flex-wrap'>
            {tracks.map(domain => (
              <div key={domain.title} className='w-full sm:w-1/2 md:w-1/3 p-2'>
                <div className='cursor-pointer hover:scale-1/10 h-full bg-white rounded-lg shadow-md p-4 flex justify-start items-center sm:block'>
                  <img
                    src={domain.image}
                    alt={domain.title}
                    className='h-32 w-32 sm:h-48 sm:w-48 sm:mx-auto'
                  />
                  <div className='sm:text-center'>
                    <h3 className='text-lg font-medium tracking-wide text-gray-900'>
                      {domain.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tracks;
