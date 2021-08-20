import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import { Payload } from "./Payload";

export class Rocket {
  name: string;
  totalCapacityKg: number;
  cargoItems: Cargo[] = [];
  astronauts: Astronaut[] = [];

  constructor(name: string, totalCapacityKg: number) {
    this.name = name;
    this.totalCapacityKg = totalCapacityKg;
  }

//   Methods:
  sumMass(items: Payload[]): number {
    let total = 0;
    for (let item of items) {
      total += item.massKg;
    }

    return total;
  }

  currentMassKg(): number {
    return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
  }

  canAdd(item: Payload) {
    return (this.currentMassKg() + item.massKg) <= this.totalCapacityKg
  }

  addCargo(cargo: Cargo): boolean {
    return this.addPayload(cargo, this.cargoItems);
  }

  addAstronaut(astronaut: Astronaut): boolean {
    return this.addPayload(astronaut, this.astronauts);
  }

  addPayload(payload: Payload, items: Payload[]): boolean {
    if (this.canAdd(payload)) {
      items.push(payload);
      return true;
    }

    return false;
  }

}