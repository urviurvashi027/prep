// call, bind , apply;

//-----------------call -------------------------------
//Demo with javascript .call()

var obj = {name:"Niladri"};

var greeting = function(a,b,c){
    return "welcome "+this.name+" to "+a+" "+b+" in "+c;
};

console.log(greeting.call(obj,"Newtown","KOLKATA","WB"));
// returns output as welcome Niladri to Newtown KOLKATA in WB

// if pass null or undefined it will fallbakc to window object
var obj = {name:"Niladri"};

var greeting = function(a,b,c){
    console.log(this)
    return "welcome "+this.name+" to "+a+" "+b+" in "+c;
};

console.log(greeting.call(null,"Newtown","KOLKATA","WB"));
console.log(greeting.call(undefined,"Newtown","KOLKATA","WB"));

// --------------------- apply -------------------

var obj = {name:"Niladri"};

var greeting = function(a,b,c){
    return "welcome "+this.name+" to "+a+" "+b+" in "+c;
};

// array of arguments to the actual function
var args = ["Newtown","KOLKATA","WB"];  
console.log("Output using .apply() below ")
console.log(greeting.apply(obj,args));

// null undefined will fallback to window object
console.log(greeting.apply(undefined,args));
console.log(greeting.apply(null,args));

// ---------------------------- bind --------------------------

var obj = {name:"Niladri"};

var greeting = function(a,b,c){
    return "welcome "+this.name+" to "+a+" "+b+" in "+c;
};

//creates a bound function that has same body and parameters
var bound = greeting.bind(obj); 
var bound1 = greeting.bind(obj, 2,3,4);

console.dir(bound1);
console.dir(bound); ///returns a function

console.log("Output using .bind() below ");

console.log(bound("Newtown","KOLKATA","WB"));
console.log(bound1());