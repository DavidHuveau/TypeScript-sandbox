import * as React from 'react';

export interface Props {
  name: string;
  enthusiasmLevel: number;
  changeName: () => void;
  incrementSmiles: () => void;
}

const Hello = ({ name, enthusiasmLevel, changeName, incrementSmiles }: Props) => {
  const nameString = `Hello ${name}${getExclamationMarks(enthusiasmLevel)}`;

  return (
    <div style={{ marginBottom: "20px" }}>
      {nameString}
      <button name="btn1" onClick={changeName}>Change</button>
      <button name="btn2" onClick={incrementSmiles}>Smile++</button>
    </div>
  );
}

export default Hello;

// helpers
const getExclamationMarks = (numChars: number, coeff: number = 2): string => {
  const repeatCar = '!';
  return repeatCar.repeat(numChars * coeff);
}