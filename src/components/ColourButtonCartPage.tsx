import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const ColourButtonCartPage = () => {
	const [colour, setColour] = React.useState('Black');

	const handleChange = (event: SelectChangeEvent) => {
        setColour(event.target.value);
	};

    return (
        <FormControl sx={{ m: 1, minWidth: 80 }} size="small" variant="standard">
                <InputLabel id="demo-simple-select-autowidth-label">Colour</InputLabel>
                <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={colour}
                onChange={handleChange}
                autoWidth
                label="Colour"
                >
                <MenuItem value={'Black'}>Black</MenuItem>
                <MenuItem value={'White'}>White</MenuItem>
                <MenuItem value={'Red'}>Red</MenuItem>
                </Select>
            </FormControl>
    )
}

export default ColourButtonCartPage;