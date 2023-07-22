import React from 'react';
import styled from 'styled-components';

interface Props {
  count: number;
  onCountChange: (newCount: number) => void;
}

const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  width: 8vw;
  height: 3vw
`;

const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 2vw;
  width: 33%;
  height: 100%
`;

const Count = styled.input`
  border: none;
  vertical-align: middle;
  padding: 0.5vw;
  font-size: 2vw;
  width: 33%
`;

const Quantity: React.FC<Props> = ({ count, onCountChange }) => {
  const handleIncrease = () => {
    if (count < 10) {
      onCountChange(count + 1);
    }
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
