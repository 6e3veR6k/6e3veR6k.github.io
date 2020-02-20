"use strict";

const join = function(...arr) {
  return arr.join(" | ");
};

console.log(join("one", "two", "three", "four"));
