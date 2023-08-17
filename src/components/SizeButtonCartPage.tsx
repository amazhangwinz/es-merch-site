import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const SizeButtonCartPage = () => {
    // DEFAULT SHOULD BE USE CONTEXT, NOT SMALL
	const [size, setSize] = React.useState('Small');

	const handleChange = (event: SelectChangeEvent) => {
        setSize(event.target.value);
	};

    return (
        // FOR ANY CHANGES, UPDATE THE USE CONTEXT
        <FormControl sx={{ m: 1, minWidth: 80 }} size="small" variant="standard">
                <InputLabel id="demo-simple-select-autowidth-label">Size</InputLabel>
                <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={size}
                onChange={handleChange}
                autoWidth
                label="Size"
                >
                <MenuItem value={'Small'}>Small</MenuItem>
                <MenuItem value={'Medium'}>Medium</MenuItem>
                <MenuItem value={'Large'}>Large</MenuItem>
                </Select>
            </FormControl>
    )
}

export default SizeButtonCartPage;