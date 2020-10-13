export const resistors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

export const resistorValue = (color) => resistors.indexOf(color);

export const decodedValue = ([firstColor, secondColor]) => {
  return resistorValue(firstColor) * 10 + resistorValue(secondColor);
};
