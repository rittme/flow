//@flow

// Weird post-component unification happening
class C { }

// Contextual
var x: number => number = (x) => x;

var h: number = x(10);
