import React, { useState } from 'react';
import { Card, CardContent, Button, Typography, Snackbar, IconButton } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useCart } from '../../context/CartContext';

const MenuCard = ({ cafeteriaName, menuItems, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentMenuItemIndex, setCurrentMenuItemIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const controls = useAnimation();
  const { cart, updateCart } = useCart(); // Using the useCart hook to access cart and updateCart
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const variants = {
    front: { rotateY: 0 },
    back: { rotateY: 360 },
  };

  const flipCard = () => {
    controls.start(isFlipped ? "front" : "back");
    setIsFlipped(!isFlipped);
  };

  const handleNextMenuItem = () => {
    setCurrentMenuItemIndex((prevIndex) => (prevIndex === menuItems.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePreviousMenuItem = () => {
    setCurrentMenuItemIndex((prevIndex) => (prevIndex === 0 ? menuItems.length - 1 : prevIndex - 1));
  };

  const handleAddToCart = () => {
    const selectedItem = menuItems[currentMenuItemIndex];
    const newItem = { ...selectedItem, quantity: parseInt(quantity) };
    updateCart([...cart, newItem]); // Update the cart using updateCart function
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const handleTurnBack = () => {
    controls.start("front");
    setIsFlipped(false);
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <motion.div
      className="max-w-md mx-auto mt-8 space-y-6"
      animate={controls}
      variants={variants}
      initial="front"
    >
      <Card className="w-full h-full  rounded-3xl bg-stone-800 shadow-2xl p-4" >
        <CardContent className="text-center  flex flex-col justify-between p-7">
          <div>
            <Typography variant="h5" component="h2" className="text-white font-bold font-poppins">
              {isFlipped ? 'Menu' : cafeteriaName}
            </Typography>
            {isFlipped ? (
              <div>
                <div className='flex justify-between items-center'>
                  <IconButton className='text-white transition-transform duration-150 hover:-translate-y-1' onClick={handlePreviousMenuItem}>
                    <NavigateBeforeIcon />
                  </IconButton>
                  <div key={currentMenuItemIndex} className="mt-4 flex flex-col gap-2 items-center">
                    <Typography variant="h6" className="text-white font-bold font-poppins">{menuItems[currentMenuItemIndex].name}</Typography>
                    <Typography variant="body1 text-white font-poppins"><span className='font-bold'>Description:</span> {menuItems[currentMenuItemIndex].description}</Typography>
                    <Typography variant="body2 text-white font-poppins"><span className='font-bold'>Price:</span> ${menuItems[currentMenuItemIndex].price}</Typography>
                    <Typography variant="body2 text-white font-poppins"><span className='font-bold'>Dietary Info:</span> {menuItems[currentMenuItemIndex].dietaryInfo}</Typography>
                    <div className="flex justify-center items-center gap-2">
                      <IconButton className='text-white transition-transform duration-150 hover:-translate-y-1' onClick={handleDecrement}>
                        <RemoveIcon />
                      </IconButton>
                      <input
                        type="text"
                        value={quantity}
                        onChange={(e) => setQuantity(parseInt(e.target.value))}
                        className="w-16 text-center bg-transparent border-b border-white text-white font-poppins"
                        inputMode="numeric"
                        pattern="[0-9]*"
                      />
                      <IconButton className='text-white transition-transform duration-150 hover:-translate-y-1' onClick={handleIncrement}>
                        <AddIcon />
                      </IconButton>
                    </div>
                    <Button className='w-1/2 rounded-2xl transition-transform duration-150 hover:-translate-y-1 bg-white text-secondary font-poppins mt-4' onClick={handleAddToCart} >
                      Add to Cart
                    </Button>
                  </div>
                  <IconButton className='text-white transition-transform duration-150 hover:-translate-y-1' onClick={handleNextMenuItem}>
                    <NavigateNextIcon />
                  </IconButton>
                </div>
                <Button className='bg-white rounded-3xl px-7 text-secondary font-poppins transition-transform duration-150 hover:-translate-y-1 mt-6' onClick={handleTurnBack}>
                  Turn Back
                </Button>
              </div>
            ) : (
              <div>
                <Typography className='font-semibold text-white text-lg'>
                  {description}
                </Typography>
                <Button className='bg-white rounded-2xl text-secondary px-5 font-poppins mt-4' onClick={flipCard}>
                  View Menu
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
        message="Item added to cart"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      />
    </motion.div>
  );
};

export default MenuCard;
