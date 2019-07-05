import React from 'react';
import './App.css';
import Home from './components/Home';
import { Car, withUID, MotorBike } from './generic';

// const App: React.FC = () => {
const App = () => {

  // let m2 = new Animal("King kong");
  // console.log(m2.displayTheName());
  // let m1 = new Fish("Rné");
  // console.log(m1.displayTheName());
  // console.log(m1.doSomeThing());
  // console.log("protected name: " + m1.displayProtectedName());
  // m1.name = "King kong";
  // console.log(m1.displayTheName());



  // interface ILabeledValue {
  //   label: string;
  //   size?: number; // optionnal
  // }

  // const printLabel = (labeledObj: ILabeledValue): void => {
  //     console.log(labeledObj.label);
  // }
  // let myObj = { label: "Size 10 Object" };
  // printLabel(myObj);

  // class myConsole implements ILabeledValue{
  //   constructor(readonly label: string, readonly size?: number) {
  //   }
  // }

  // const display = new myConsole("Label");
  // console.log(display.label);
  // console.log(display.size);


  let a = withUID(new Car("Megane RS"));
  console.log(a);
  a = withUID(new MotorBike("Honda VFR 750"));
  a = withUID({ model: "fake Honda Chinese v1" }); // this object is assignable to type 'IVehicle'
  const b = withUID({ name: "fake Honda Chinese v2" }); // this object is not assignable to type 'IVehicle'


  return (
    <div className="App">
      <Home />
      <Home name="Dave"/>
    </div>
  );
}

export default App;

// class Animal {
//   constructor(public name: string) {
//   }
//   // protected name: string;
//   // public name: string;
//   // constructor(name: string) {
//   //   this.name = name;
//   // }
//   displayTheName(): string {
//     return `My name is ${this.name}`;
//   }
// }

// class Fish extends Animal {
//   displayProtectedName(): string {
//     return this.name;
//   }
//   doSomeThing(): string {
//     return "glou glou...I hate the 1664!"
//   }
//   displayTheName(): string {
//     return `${super.displayTheName()} and i'm not a donkey but i am the king :-P`;
//   }
// }

// abstract class Department {
//   constructor(protected name: string) {
//   }
//   printName(): void {
//       console.log("Department name: " + this.name);
//   }
//   abstract printMeeting(): void; // must be implemented in derived classes
// }

