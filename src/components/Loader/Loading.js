import React from 'react';
// import '../../styles/Loading.css';
// import LoaderImg  from '../../assets/loading-loading-forever.gif';

import loadingAnimation from '../../assets/Loading.json';

export default function Loading() {
    return (
        <div className='fp-container flex flex-col items-center justify-center mt-20 mx-auto' style={{ zIndex: 100 }} >

            {/* <Lottie className='w-20 h-full  mx-auto my-auto' animationData={loadingAnimation} /> */}
            <p className='text-center text-xl'>Please wait.....</p>
        </div>
    )
}
