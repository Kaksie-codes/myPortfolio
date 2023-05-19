import React from 'react'
import HashLoader from 'react-spinners/HashLoader'
import './loading.css'
const Loading = () => {
  return (
    <div className='loader'>
        <HashLoader color="#6b4ce6" />       
    </div>
  )
}

export default Loading