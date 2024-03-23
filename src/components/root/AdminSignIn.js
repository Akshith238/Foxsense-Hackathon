import React, { useState, useEffect } from 'react';
import { auth } from '../../utils/firebase';
import { onAuthStateChanged} from 'firebase/auth';
import AdminHome from './AdminHome';
import Loader from '../Loader';
import { motion} from 'framer-motion';
import AnimatedBlob from '../BlobAnimation';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import { Typography } from '@mui/material';

const AdminSignIn = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [isSignUp, setIsSignUp] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [user]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user.displayName);
        setUser({...user});
      } else {
        setUser(null);
        setLoading(true);
      }
    });
    return () => unsubscribe();
  }, []);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  if (user) {
    return <AdminHome />;
  }

  return (
    <div className='flex flex-col bg-gradient-to-r from-stone-900 via-stone-800 to-stone-800'>
      {isLoading ? (
        <Loader />
      ) : (
        <div className='flex flex-col gap-4'>
          <div className='flex justify-center items-center mt-6'>
             <Typography className='text-3xl font-bold font-poppins text-white'>ADMIN</Typography>
          </div>
          <div className='flex justify-evenly p-4'>
            <AnimatedBlob />
              {isSignUp ? (
                <motion.div
                  key='signup-form'
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 1 }}
                >
                  <SignUpForm isSignUp={isSignUp} toggleForm={toggleForm}/>
                </motion.div>
              ) : (
                <motion.div
                  key='signin-form'
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ duration: 1 }}
                >
                  <SignInForm isSignUp={isSignUp} toggleForm={toggleForm}/>
                </motion.div>
              )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminSignIn;
