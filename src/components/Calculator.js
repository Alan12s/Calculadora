import React, { useState } from 'react';
import Button from './button';
import Display from './Display';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [operator, setOperator] = useState(null);
  const [operand, setOperand] = useState(null);

  const inputDigit = (digit) => {
    if (waitingForOperand) {
      setDisplayValue(String(digit));
      setWaitingForOperand(false);
    } else {
      setDisplayValue(displayValue === '0' ? String(digit) : displayValue + digit);
    }
  };

  const inputDot = () => {
    if (!(/\./).test(displayValue)) {
      setDisplayValue(displayValue + '.');
    }
  };

  const clearDisplay = () => {
    setDisplayValue('0');
  };

  const deleteLastDigit = () => {
    setDisplayValue(displayValue.slice(0, -1) || '0');
  };

  const performOperation = (nextOperator) => {
    const inputValue = parseFloat(displayValue);

    if (operand === null) {
      setOperand(inputValue);
    } else if (operator) {
      const currentOperand = operand || 0;
      const result = calculate[operator](currentOperand, inputValue);

      setDisplayValue(String(result));
      setOperand(result);
    }

    setWaitingForOperand(true);
    setOperator(nextOperator);
  };

  const calculate = {
    '+': (prevValue, nextValue) => prevValue + nextValue,
    '-': (prevValue, nextValue) => prevValue - nextValue,
    '*': (prevValue, nextValue) => prevValue * nextValue,
    '/': (prevValue, nextValue) => prevValue / nextValue,
    '=': (prevValue, nextValue) => nextValue
  };

  return (
    <div className="calculator bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md transition-all duration-300">
      <Display value={displayValue} />
      <div className="keypad grid grid-cols-4 gap-2">
        <Button onClick={clearDisplay} label="AC" />
        <Button onClick={deleteLastDigit} label="DEL" />
        <Button onClick={() => performOperation('/')} label="/" />
        <Button onClick={() => performOperation('X')} label="X" />
        <Button onClick={() => inputDigit(7)} label="7" />
        <Button onClick={() => inputDigit(8)} label="8" />
        <Button onClick={() => inputDigit(9)} label="9" />
        <Button onClick={() => performOperation('-')} label="-" />
        <Button onClick={() => inputDigit(4)} label="4" />
        <Button onClick={() => inputDigit(5)} label="5" />
        <Button onClick={() => inputDigit(6)} label="6" />
        <Button onClick={() => performOperation('+')} label="+" />
        <Button onClick={() => inputDigit(1)} label="1" />
        <Button onClick={() => inputDigit(2)} label="2" />
        <Button onClick={() => inputDigit(3)} label="3" />
        <Button onClick={inputDot} label="." />
        <Button onClick={() => inputDigit(0)} label="0" className="col-span-2" />
        <Button onClick={() => performOperation('=')} label="=" className="col-span-2" />
      </div>
    </div>
  );
};

export default Calculator;
