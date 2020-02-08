import React, { useState } from 'react';

const Accordian = ({ title, body }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='my-4'>
      <div className='' onClick={() => setIsOpen(!isOpen)}>
        {title}
      </div>
      <div className=''>{body}</div>
    </div>
  );
};

export default Accordian;
