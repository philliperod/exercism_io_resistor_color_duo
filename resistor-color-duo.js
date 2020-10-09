//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const resistors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

export const decodedValue = ([firstColor, secondColor]) => {
  var numberColor = resistors.indexOf(firstColor) * 10 + resistors.indexOf(secondColor);
  return numberColor;
};
