// URL for the instructions:
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html

import { SpaceLocation } from "./SpaceLocation";


// Part 1: Declare (5) Variables With Type
const spacecraftName: string = 'Determination';
const speedMph: number = 17500;
const kilometersToMars: number = 225000000;
const kilometersToTheMoon: number = 384400;
const milesPerKilometer: number = 0.621;


// Part 2: Print Days to Mars



// Code an output statement here (use a template literal):


// Part 3: Create a Function ("getDaysToLocation")
function getDaysToLocation(kilometersAway: number): number {

  const milesToLocation: number = kilometersAway * milesPerKilometer;
  const hoursToLocation: number = milesToLocation / speedMph;
  const daysToLocation: number = hoursToLocation / 24;
  return daysToLocation;

// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.

}
// console.log(`${spacecraftName} would take ${getDaysToLocation(kilometersToMars)} days to get to Mars!`);
// console.log(`${spacecraftName} would take ${getDaysToLocation(kilometersToTheMoon)} days to get to Mars!`);


// Part 4: Create a Spacecraft Class
class Spacecraft {
  milesPerKilometer: number = 0.621;
  name: string;
  speedMph: number;

  constructor(name: string, speedMph: number) {
    this.name = name;
    this.speedMph = speedMph;
  }

  getDaysToLocation(kilometersAway: number): number {
    const milesToLocation: number = kilometersAway * this.milesPerKilometer;
    const hoursToLocation: number = milesToLocation / this.speedMph;
    const daysToLocation: number = hoursToLocation / 24;
    return daysToLocation;
  }

  printDaysToLocation(location: SpaceLocation) {
    console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
 }
}

// Create an instance of the class here:
let spaceShuttle = new Spacecraft('Determination', 17500);

// console.log(`${spaceShuttle.name} would take ${spaceShuttle.getDaysToLocation(kilometersToTheMoon)} days to get to Mars!`);
spaceShuttle.printDaysToLocation(new SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation('the Moon', kilometersToTheMoon));

// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.



// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.


// Add the printDaysToLocation function to the Spacecraft class.

// Paste in the code from step 6 here:
