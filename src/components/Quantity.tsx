import React, { useState } from 'react';

interface QuantityProps {
  count: number;
}

const Quantity: React.FC<QuantityProps> = ({ count }) => {
  const [currentCount, setCurrentCount] = useState(count);

  const handleIncrease = () => {
    setCurrentCount(currentCount + 1);
  };

  const handleDecrease = () => {
    if (currentCount > 1) {
      setCurrentCount(currentCount - 1);
    }
  };

  return (
    <div>
      <button onClick={handleDecrease}>-</button>
      <span>{currentCount}</span>      
      <button onClick={handleIncrease}>+</button>
    </div>
  );
};

export default Quantity;
