import { useState } from 'react';
import { motion } from 'framer-motion';
import { ToggleButton, Typography } from '@mui/material';

const ToggleButtonComponent = ({ isSignUp, toggleForm }) => {
  const [toggleValue, setToggleValue] = useState(isSignUp);

  const handleToggle = () => {
    setToggleValue(!toggleValue);
    toggleForm();
  };

  return (
      <div className="flex justify-center gap-2 items-center mt-3">
          <Typography className='font-poppins font-md'>{!isSignUp?"Don't have an account? Sign up":"Already have an account? Sign in"}</Typography>
          <ToggleButton sx={{border:"none",padding:0}} onChange={handleToggle}>
            <motion.div
              className={`w-10 h-6 rounded-full bg-gray-500 flex items-center p-1 ${
                toggleValue ? 'justify-end' : 'justify-start'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                className="w-5 h-5 rounded-full bg-white shadow-md"
                animate={{ x: toggleValue ? 'calc(100% - 20px)' : '0px' }} 
              />
            </motion.div>
          </ToggleButton>
      </div>
  );
};

export default ToggleButtonComponent;
