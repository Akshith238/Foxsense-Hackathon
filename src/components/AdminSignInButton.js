import React from 'react';
import { Button, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const AdminSignInButton = () => {
    const location = useLocation();

    // Check if the current route is the admin route
    const isAdminRoute = location.pathname === '/admin';

    // If it's not the admin route, don't render the button
    if (isAdminRoute) {
        return null;
    }

    return (
        <Link to="/admin">
            <div className='flex gap-2 justify-center items-center'>
            <Typography className='font-poppins'>Admin?</Typography>
            <Button
                variant="contained"
                className=" bg-black font-poppins text-white font-bold py-2 px-4 rounded-2xl"
            >
                Admin Sign In
            </Button>
            </div>
        </Link>
    );
};

export default AdminSignInButton;
