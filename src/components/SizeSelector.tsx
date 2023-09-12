import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box } from '@mui/material';



// type SizeButtonItemPageProps = {
//     size: string;
//     setSize: (size: string) => void;
// };

// const SizeButtonItemPage = (props: SizeButtonItemPageProps) => {
//     // const [size, setSize] = React.useState('Small');

//     const handleChange = (event: SelectChangeEvent) => {
//         props.setSize(event.target.value);
//     };

//     return (
//         <FormControl sx={{ mr: 1, minWidth: 150, background: 'white' }}>
//             <InputLabel id="demo-simple-select-autowidth-label">Size</InputLabel>
//             <Select
//                 labelId="demo-simple-select-autowidth-label"
//                 id="demo-simple-select-autowidth"
//                 value={props.size}
//                 onChange={handleChange}
//                 autoWidth
//                 label="Size"
//             >
//                 <MenuItem value={'Small'}>Small</MenuItem>
//                 <MenuItem value={'Medium'}>Medium</MenuItem>
//                 <MenuItem value={'Large'}>Large</MenuItem>
//             </Select>
//         </FormControl>
//     )
// }
// export default SizeButtonItemPage;

type SizeSelectorProp = {
    size: string;
    setSize: (size: string) => void;
};

const SizeSelector = (props: SizeSelectorProp) => {
    return (
        <div>
            <Box sx={{ display: { md: 'flex', xs: "none" } }}>
                <FormControl sx={{ mr: 1, minWidth: "fit-content", background: 'white' }}>
                    <InputLabel id="demo-simple-select-autowidth-label">Size</InputLabel>
                    <Select value={props.size} onChange={(event) => props.setSize(event.target.value as string)} autoWidth label={"Size"}>
                        <MenuItem value={'Small'}>Small</MenuItem>
                        <MenuItem value={'Medium'}>Medium</MenuItem>
                        <MenuItem value={'Large'}>Large</MenuItem>
                    </Select>
                </FormControl >
            </Box>
            <Box sx={{ display: { md: 'none', xs: "flex" } }}>
                <FormControl sx={{ mr: 1, minWidth: "fit-content", background: 'white' }} size="small">
                    <InputLabel id="demo-simple-select-autowidth-label">Size</InputLabel>
                    <Select value={props.size} onChange={(event) => props.setSize(event.target.value as string)} autoWidth label={"Size"}>
                        <MenuItem value={'Small'}>Small</MenuItem>
                        <MenuItem value={'Medium'}>Medium</MenuItem>
                        <MenuItem value={'Large'}>Large</MenuItem>
                    </Select>
                </FormControl >
            </Box>
        </div>
    )
}

export default SizeSelector;
