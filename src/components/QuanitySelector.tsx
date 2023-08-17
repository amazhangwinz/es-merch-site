import React from "react";
import { InputLabel, FormControl, Select, SelectChangeEvent, MenuItem } from "@mui/material";

const QuantitySelector = () => {
    const [qty, setQty] = React.useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setQty(event.target.value)
    }
    return (
        <FormControl sx={{ background: 'white', m: 2, minWidth: 80, margin: '1rem' }}>
            <InputLabel>Qty</InputLabel>
            <Select value={qty} onChange={handleChange} autoWidth label={"Qty"}>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
            </Select>
        </FormControl >
    )
}
export default QuantitySelector;