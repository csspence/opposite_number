/*
Very simple, given a number, find its opposite.

Examples:

1: -1
14: -14
-34: 34
*/

const opposite = (number) => {
  return (number > 0 ? number * -1 : Math.abs(number));
}