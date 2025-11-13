import React from 'react'
import { useNavigate } from 'react-router-dom'

const Practice_test = () => {

  const navigate = useNavigate();

  return (
    <div className=''>
      <h1 className='text-4xl font-bold text-gray-700'>Practice Test</h1>

      <div className='mt-4 space-y-3'>

        <div 
          className='cursor-pointer'
          onClick={() => navigate('/pol-quiz')}
        >
          Polity Test (Hindi)
        </div>

        <div 
          className='cursor-pointer '
          onClick={() => navigate('/quiz')}
        >
          Polity Test (English)
        </div>

        {/* <div 
          className='cursor-pointer '
          onClick={() => navigate('/upsc-hi-1')}
        >
          UPSC (Hindi)
        </div>
        <div 
          className='cursor-pointer '
          onClick={() => navigate('/upsc-en-1')}
        >
          UPSC (English)
        </div> */}
        <div 
          className='cursor-pointer '
          onClick={() => navigate('/upsc-en-part-1')}
        >
          UPSC (English Part - 1)
        </div>
        <div 
          className='cursor-pointer '
          onClick={() => navigate('/upsc-en-part-2')}
        >
          UPSC (English Part - 2)
        </div>
        <div 
          className='cursor-pointer '
          onClick={() => navigate('/upsc-en-part-3')}
        >
          UPSC (English Part - 3)
        </div>
        <div 
          className='cursor-pointer '
          onClick={() => navigate('/upsc-hi-part-1')}
        >
          UPSC (Hindi Part - 1)
        </div>
        <div 
          className='cursor-pointer '
          onClick={() => navigate('/upsc-hi-part-2')}
        >
          UPSC (Hindi Part - 2)
        </div>
        <div 
          className='cursor-pointer '
          onClick={() => navigate('/upsc-hi-part-3')}
        >
          UPSC (Hindi Part - 3)
        </div>

      </div>

    </div>
  )
}

export default Practice_test;
