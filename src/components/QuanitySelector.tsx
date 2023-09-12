import React from "react";
import { InputLabel, FormControl, Select, MenuItem } from "@mui/material";
import { Box } from "@mui/material";

type QuanitySelectorProp = {
    qty: number;
    setQty: (qty: number) => void;
    width: number,

}

const QuantitySelector = (props: QuanitySelectorProp) => {
    return (
        <Box>
            <Box sx={{ display: { md: 'flex', xs: "none" } }}>
                <FormControl sx={{ background: 'white', mr: 1, minWidth: props.width, }} >
                    <InputLabel>Qty</InputLabel>
                    <Select value={props.qty} onChange={(event) => props.setQty(event.target.value as number)} autoWidth label={"Qty"}>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                    </Select>
                </FormControl >
            </Box>
            <Box sx={{ display: { md: 'none', xs: "flex" } }}>
                <FormControl sx={{ background: 'white', minWidth: props.width, }} size="small" >
                    <InputLabel>Qty</InputLabel>
                    <Select value={props.qty} onChange={(event) => props.setQty(event.target.value as number)} autoWidth label={"Qty"}>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                    </Select>
                </FormControl >
            </Box>
        </Box>
    )
}
export default QuantitySelector;