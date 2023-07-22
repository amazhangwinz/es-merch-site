import React from 'react';
import styled from 'styled-components';

interface Props {
  count: number;
  onCountChange: (newCount: number) => void;
}

const QuantityWrapper = styled.div`
  display: inline-block;
  border: 1px solid black;
  width: 7rem
`;

const Button = styled.button`
  background: transparent;
  border: none;
  vertical-align: middle;
  cursor: pointer;
  padding: 0.5rem;
  font-size: 1.5rem;
  width: 2rem
`;

const Count = styled.input`
  border: none;
  vertical-align: middle;
  padding: 0.5rem;
  font-size: 1.5rem;
  width: 3rem
`;

const Quantity: React.FC<Props> = ({ count, onCountChange }) => {
  const handleIncrease = () => {
    onCountChange(count + 1);
  };

  const handleDecrease = () => {
    if (count > 1) {
      onCountChange(count - 1);
    }
  };

  return (
    <QuantityWrapper>
      <Button onClick={handleDecrease}>-</Button>
      <Count type="number" value={count} onChange={e => onCountChange(parseInt(e.target.value))}></Count>
      <Button onClick={handleIncrease}>+</Button>
    </QuantityWrapper>
  );
};

export default Quantity;
