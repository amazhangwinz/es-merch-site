import React from "react";
import { InputLabel, FormControl, Select, SelectChangeEvent, MenuItem } from "@mui/material";


type QuanitySelectorProp = {
    qty: number;
    setQty: (qty: number) => void;
}

const QuantitySelector = (props: QuanitySelectorProp) => {
    return (
        <FormControl sx={{ background: 'white', m: 2, minWidth: 80, margin: '1rem' }}>
            <InputLabel>Qty</InputLabel>
            <Select value={props.qty} onChange={(event) => props.setQty(event.target.value as number)} autoWidth label={"Qty"}>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
            </Select>
        </FormControl >
    )
}
export default QuantitySelector;