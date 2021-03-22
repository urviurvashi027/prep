// --------------- pure function ---------------------

// The function always returns the same result if the same arguments are passed in. It does not depend on any state, or data, 
// change during a program’s execution. It must only depend on its input arguments.
// The function does not produce any observable side effects such as network requests, input and output devices, or data mutation.
// cant access global and local storage

var a = 90;

function double(num) {
    return num * num;
}

double(4);
double(3);

function multiple (num) {
    return num * a ;
}

multiple(3);

a=70;

multiple(3);

// reducers are the 

//--------------------------------------------------------------------------
// Side effects include, but are not limited to:
// Making a HTTP request
// Mutating data
// Printing to a screen or console
// DOM Query/Manipulation
// Math.random()
// Getting the current time

// ------------------------ advantages -------------------------
// One of the major benefits of using pure functions is they are immediately testable. 
// They will always produce the same result if you pass in the same arguments.