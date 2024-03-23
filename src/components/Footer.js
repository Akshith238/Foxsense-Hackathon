import React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid } from '@mui/material';

const Footer = () => {
    return (
        <AppBar position="static" className="bg-stone-800">
            <Container>
                <Toolbar>
                    <Grid container spacing={3} padding={5}>
                        {/* About Section */}
                        <Grid item xs={12} sm={4}>
                            <Typography variant="h6" className="font-bold font-poppins mb-2">About</Typography>
                            <Typography variant="body2" className='font-poppins'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat lectus eu neque congue, nec pharetra turpis aliquet.</Typography>
                        </Grid>
                        {/* Contact Section */}
                        <Grid item xs={12} sm={4}>
                            <Typography variant="h6" className="font-bold font-poppins mb-2">Contact</Typography>
                            <Typography variant="body2" className='font-poppins'>
                                Address: 123 Main Street, City, Country<br />
                                Phone: +1 (123) 456-7890<br />
                                Email: example@example.com
                            </Typography>
                        </Grid>
                        {/* Copyrights Section */}
                        <Grid item xs={12} sm={4}>
                            <Typography variant="h6" className="font-bold font-poppins mb-2">Copyrights</Typography>
                            <Typography variant="body2" className='font-poppins'>© {new Date().getFullYear()} Foxsense cafeteria. All Rights Reserved.</Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Footer;
