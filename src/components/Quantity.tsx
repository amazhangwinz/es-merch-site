import React from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface Props {
  count: number;
  onCountChange: (newCount: number) => void;
}

const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #d9d9d9;
  width: 9rem;
  height: 2.9rem
`;

const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5vw;
  width: 33%;
  height: 100%
`;

// styled.input if we want to input number
const Count = styled.span`
  border: none;
  vertical-align: middle;
  padding: 0.5vw;
  font-size: 1.5rem;
  width: 33%
`;

const Quantity: React.FC<Props> = ({ count, onCountChange }) => {
  // const handleIncrease = () => {
  //   if (count < 10) {
  //     onCountChange(count + 1);
  //   }
  // };

  // const handleDecrease = () => {
  //   if (count > 1) {
  //     onCountChange(count - 1);
  //   }
  // };

  return (
    // <QuantityWrapper>
    //   <Button onClick={handleDecrease}>-</Button>
    //   <Count>{count}</Count>
    //   {/* <Count type="number" value={count} onChange={e => onCountChange(parseInt(e.target.value))}></Count> */}
    //   <Button onClick={handleIncrease}>+</Button>
    // </QuantityWrapper>
    // <TextField
    //       id="filled-number"
    //       size="small"
    //       type="number"
    //       defaultValue={count}
    //       inputProps={{min:0}}
    //       onChange={(event) => {
    //         if (event.target.value !== ''){
    //         onCountChange(parseInt(event.target.value))}
    //       }}
    //     />
    <FormControl>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={count}
        onChange={(event) => onCountChange(event.target.value as number)}
      >
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Quantity;
