import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material';

const MenuSearch = () => {
    return (
        <TextField
            variant="outlined"
            fullWidth
            placeholder="Search menu..."
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <Search />
                    </InputAdornment>
                ),
                className:"rounded-full",
                style: { backgroundColor: 'white' }, 
            }}
            className="mt-4 w-1/2"
        />
    );
};

export default MenuSearch;
