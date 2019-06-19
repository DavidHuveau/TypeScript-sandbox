import * as React from 'react';

export interface Props {
  name: string;
  enthusiasmLevel: number;
}

const Hello = ({ name, enthusiasmLevel = 1 }: Props) => {
  return (
    <div>
      Hello {name + getExclamationMarks(enthusiasmLevel)}
    </div>
  );
}

export default Hello;

// helpers
const getExclamationMarks = (numChars: number, coeff: number = 2): string => {
  const repeatCar = '!';
  return repeatCar.repeat(numChars * coeff);
  // return 123;
}

// ---- JS ----
// const Hello = (Props) => {
//   <div>
//     {Props.name}
//   </div>
// }
// export default Hello;

// ---- class TS ----
// class Hello extends React.Component<Props, object> {
//   render() {
//     const { name, enthusiasmLevel = 1 } = this.props;

//     if (enthusiasmLevel <= 0) {
//       throw new Error('You could be a little more enthusiastic. :D');
//     }

//     return (
//       <div className="hello">
//         <div className="greeting">
//           Hello {name + getExclamationMarks(enthusiasmLevel)}
//         </div>
//       </div>
//     );
//   }
// }

