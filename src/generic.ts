
interface IVehicle {
  model: string
}
export class Car implements IVehicle {
  constructor(readonly model: string) {
  }
}
export class MotorBike implements IVehicle {
  constructor(readonly model: string) {
  }
}
// export function withUID<T extends IVehicle> (obj: T): T {
//   return { ...obj, uuid: 1 };
// }

export const withUID = <T>(obj: T): T => {
  return { ...obj, uuid: 1 };
}

// export function withUID<T> (obj: T): T {
//   return { ...obj, uuid: 1 };
// }



