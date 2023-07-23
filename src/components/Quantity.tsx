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
      <Count>{count}</Count>
      {/* <Count type="number" value={count} onChange={e => onCountChange(parseInt(e.target.value))}></Count> */}
      <Button onClick={handleIncrease}>+</Button>
    </QuantityWrapper>
  );
};

export default Quantity;
