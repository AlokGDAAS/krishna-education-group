import React from 'react'
import { useNavigate } from 'react-router-dom'

const Practice_test = () => {

  const navigate = useNavigate();

  return (
    <div className=''>
      <h1 className='text-4xl font-bold text-gray-700'>Practice Test</h1>

      <div className='mt-4 space-y-3'>

        <p 
          className='cursor-pointer'
          onClick={() => navigate('/pol-quiz')}
        >
          Polity Test (Hindi)
        </p>

        <p 
          className='cursor-pointer '
          onClick={() => navigate('/quiz')}
        >
          Polity Test (English)
        </p>

      </div>

    </div>
  )
}

export default Practice_test;
