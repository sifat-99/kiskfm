import React from 'react';
// import '../../styles/Loading.css';
// import LoaderImg  from '../../assets/loading-loading-forever.gif';

import loadingAnimation from '../../assets/Loading.json';
import Lottie from 'lottie-react';

export default function Loading() {
  return (
    <div className='fp-container flex flex-col items-center justify-center mt-20' style={{zIndex: 100}} >
      
       <Lottie className='w-20 h-full  mx-auto my-auto' animationData={loadingAnimation} />
       <p className='text-center text-xl'>Please wait.....</p>
    </div>
  )
}