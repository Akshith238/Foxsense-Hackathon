import React from 'react';
import { motion } from 'framer-motion';
import { Typography } from '@mui/material';

const TypingText = ({ text }) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const transition = {
    duration: 0.5,
    ease: 'easeInOut',
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={transition}
    >
      <Typography className='w-1/2 font-poppins mb-40 text-white text-5xl font-bold'>
        {text.split('').map((char, index) => (
          <motion.span key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.1 }}>
            {char}
          </motion.span>
        ))}
      </Typography>
    </motion.div>
  );
};

export default TypingText;