import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Avatar, Menu, MenuItem, Badge } from '@mui/material';
import { MenuOutlined, CloseOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';

const NavBar = ({ mainRef,footerRef, cart }) => {
    const [user, setUser] = useState(null);
    const [dropdown, setDropdown] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [cartItemCount, setCartItemCount] = useState(0); // State to track cart item count
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                console.log(user);
            } else {
                console.log("user logged out");
            }
        });
        return () => unsubscribe();
    }, []);


    useEffect(() => {
        setCartItemCount(cart.length);
    }, [cart]);

    const handleSignOut = async () => {
        await signOut(auth);
        navigate('/');
    };

    const handleAvatarClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleViewCart = () =>{
        navigate("/cart")
    }
    const handleViewOrders = () =>{
        navigate("/orders")
    }
    const handleClickFooter = () =>{
        footerRef.current.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div>
            <AppBar className={`${"bg-inherit"}`} position='fixed' elevation={0}>
                <Toolbar className='flex gap-5 justify-between'>
                    <div className='hidden justify-center gap-4 sm:flex'>
                        <Button color="inherit" variant="outlined" className='font-poppins transition-transform hover:-translate-y-1 duration-300 hover:bg-white hover:text-black' component={Link} to="/about">About</Button>
                        <Button color="inherit" variant="outlined" className='font-poppins transition-transform hover:-translate-y-1 duration-300 hover:bg-white hover:text-black' component={Link} to="/contact">Contact</Button>
                    </div>
                    <div className='flex items-center'>
                        {user && (
                            <div className="flex items-center gap-2">
                                <Typography className='font-poppins text-md font-semibold sm:block hidden'>
                                    {user.displayName}
                                </Typography>
                                <Button
                                    sx={{
                                        border: "none",
                                        padding: 0,
                                        "&:hover": {
                                        backgroundColor: "transparent", // Remove background color on hover
                                        },
                                        "&:focus": {
                                        outline: "none", // Remove focus outline
                                        },
                                    }}
                                    onClick={handleAvatarClick}
                                    className={`rounded-full transition-transform font-poppins hover:-translate-y-1 duration-300 hover:bg-white hover:text-black`}
                                    >
                                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.9 }}>
                                        <Avatar src={user.photoURL} alt={user.displayName} />
                                    </motion.div>
                                </Button>
                                <Badge badgeContent={cartItemCount} color="primary" overlap="circular"> {/* Use the cartItemCount variable */}
                                    <IconButton color="inherit" className="ml-2" onClick={handleViewCart}>
                                        <ShoppingCartOutlined />
                                    </IconButton>
                                </Badge>
                                <Menu
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={handleMenuClose}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    getContentAnchorEl={null}
                                >
                                    <MenuItem className="font-poppins" onClick={handleViewOrders}>My Orders</MenuItem>
                                    <MenuItem className="font-poppins" onClick={handleSignOut}>Sign Out</MenuItem>
                                </Menu>
                            </div>
                        )}
                    </div>
                    <motion.div
                        className='sm:hidden fixed top-0 right-0 bg-secondary h-full w-52 shadow-lg flex flex-col justify-center items-center z-10'
                        initial={{ x: '100%' }}
                        animate={{ x: dropdown ? 0 : '100%' }}
                        transition={{ duration: 0.3 }}
                    >
                        <IconButton
                            className="absolute top-0 right-0 m-3"
                            color="inherit"
                            aria-label="Close menu"
                            onClick={() => setDropdown(false)}
                        >
                            <CloseOutlined />
                        </IconButton>
                        <Button
                            color="inherit"
                            variant="outlined"
                            className='font-poppins transition-transform hover:-translate-y-1 duration-300 hover:bg-white hover:text-black my-2'
                            component={Link}
                            to="/about"
                            onClick={handleClickFooter}
                        >
                            About
                        </Button>
                        <Button
                            color="inherit"
                            variant="outlined"
                            className='font-poppins transition-transform hover:-translate-y-1 duration-300 hover:bg-white hover:text-black my-2'
                            component={Link}
                            to="/contact"
                            onClick={() => setDropdown(false)}
                        >
                            Contact
                        </Button>
                    </motion.div>
                    <IconButton
                        className='sm:hidden visible relative'
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => setDropdown(!dropdown)}
                    >
                        <motion.div
                            animate={{ rotate: dropdown ? 90 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {dropdown ? <CloseOutlined /> : <MenuOutlined />}
                        </motion.div>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default NavBar;
