import React from 'react';
import TypingText from '../TypingText';

const Hero = () => {
  return (
    <div
      className='p-6'
      style={{
        backgroundImage: `url('images/Cafetaria.jpg')`, // Replace 'images/Cafetaria.jpg' with the actual path to your image
        backgroundSize: 'cover', // Ensure the image covers the entire container
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'center',
        minHeight: '100vh', // Set the minimum height to cover the entire viewport
      }}
    >
      <TypingText text="Welcome To Cafeteria Bringing People Together Over Good Food!"></TypingText>
    </div>
  );
};

export default Hero;
