import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, selectCounter } from './counterSlice';

const App: React.FC = () => {
  const count = useSelector(selectCounter);
  const dispatch = useDispatch();
  const handleIncrement = () => dispatch(increment());
  const handleDecrement = () => dispatch(decrement());
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default App;
