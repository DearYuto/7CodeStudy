import React from 'react';
import { GridLoader } from 'react-spinners';

const ErrorMessage = () => {
  return (
    <div className='my-20 flex flex-col justify-center items-center'>
      <GridLoader color='red' />
      <h2 className='text-[50px]'>ERROR!</h2>
      <p>잠시 후 다시 확인해주세요.</p>
    </div>
  );
};

export default ErrorMessage;
