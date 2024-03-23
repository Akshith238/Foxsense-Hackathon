import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBlob = () => {
  return (
    <motion.div
      initial={{}}
      animate={{
        rotate: [0, 180],
        scale: [0.9, 1, 0.9],
        transition: {
          duration: 4,
          ease: 'easeInOut',
          times: [0, 1],
        },
      }}
      className='w-1/2 h-screen'
    >
      {/* Provided SVG */}
      <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
            <stop id="stop1" stopColor="rgba(141.445, 122.119, 97.962, 1)" offset="0%"></stop>
            <stop id="stop2" stopColor="rgba(89.079, 69.301, 36.654, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path fill="url(#sw-gradient)" d="M25.2,-29.4C33.1,-23.3,40.5,-15.9,42.6,-7.1C44.7,1.7,41.5,11.9,36.1,20.3C30.6,28.7,22.9,35.3,14.3,37.8C5.7,40.3,-3.9,38.7,-12.6,35.2C-21.3,31.8,-29,26.5,-34.9,18.9C-40.7,11.3,-44.6,1.4,-42.6,-7.1C-40.6,-15.5,-32.7,-22.5,-24.6,-28.6C-16.5,-34.7,-8.2,-39.9,0.2,-40.1C8.6,-40.3,17.2,-35.5,25.2,-29.4Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="0" style={{ transition: 'all 0.3s ease 0s' }} stroke="url(#sw-gradient)"></path>
      </svg>
    </motion.div>
  );
};

export default AnimatedBlob;
