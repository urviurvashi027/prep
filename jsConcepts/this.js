console.log(this) // window

// ---------------function invocation---------------------

function x () {
    console.log(this);
}

function j () {
    'use strict';
    console.log(this); // undefined
};

// ----------------------------- method invocation --------------------

var person = {
    name: 'urvashi',
    age:26,
    displayInfo: function() {
        console.log(this)
    }
};

person.displayInfo();

var t = person.displayInfo;
t();

// inner function will points to window --- this

var person1 = {
    name: 'urvashi',
    age:25,
    displayInfo: function() {
        console.log(this);
        return function() {
            console.log('inner', this);
        }
    }
};

person1.displayInfo()();

var t = person1.displayInfo();
t();

// ----------------------------- constructor invocation --------------------

var people = function (age,name) {
    this.name = name;
    this.age = age;
    this.displayInfo = function() {
        console.log(this);
    }
}

var obj = new people('urvi', 25);
console.log(obj);
obj.displayInfo();


// steps 1. Empty object is created
        //  2. proptotype of people constructor gets bind to newly created Object
        //  3. constructor called for new created Object
        //  4. retrun the newly cretes object

        // Note : / If you return any primitive type, JavaScript ignores it
        // If you return object, JS ignores the object created in step 1 and uses this object that you returned here.