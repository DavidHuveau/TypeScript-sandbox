import * as React from 'react';

// JS
// const Hello = (Props) => {
//   <div>
//     {Props.name}
//   </div>
// }
// export default Hello;

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

const Hello = ({ name, enthusiasmLevel = 1 }: Props) => {
  if (enthusiasmLevel <= 0)
    throw new Error('You could be a little more enthusiastic. :D');

  return (
    <div>
      Hello {name + getExclamationMarks(enthusiasmLevel)}
    </div>
  );
}

export default Hello;

// helpers

const getExclamationMarks = (numChars: number) => {
  return '!'.repeat(numChars);
}