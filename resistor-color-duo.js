//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = ([firstColor, secondColor]) => {
  const resistors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
  return parseInt(resistors.indexOf(firstColor).toString() + resistors.indexOf(secondColor).toString());
};
