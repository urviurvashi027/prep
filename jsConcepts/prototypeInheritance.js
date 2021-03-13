// ------------------------ PROTOTYPE INHERITANCE ------------------------

let f = function () {
    this.a = 1;
    this.b = 2;
 }
 let o = new f();
 f.prototype.a = 9;
 f.prototype.c = 89;

 console.log(o.a);
 console.log(o.b);
 console.log(o.c);

 // --------------------- METHOD INHERITANCE --------------------
 var o = {
    a: 2,
    m: function() {
      return this.a + 1;
    }
  };
  
  console.log(o.m()); // 3
  // When calling o.m in this case, 'this' refers to o
  
  var p = Object.create(o);
  // p is an object that inherits from o
  
  p.a = 4; // creates a property 'a' on p
  console.log(p.m()); // 5
  // when p.m is called, 'this' refers to p.
  // So when p inherits the function m of o,
  // 'this.a' means p.a, the property 'a' of p

  // -----------------------------------------------------

  function doSomething(){}
    console.log( doSomething.prototype );
    //  It does not matter how you declare the function, a
    //  function in JavaScript will always have a default
    //  prototype property.
    //  (Ps: There is one exception that arrow function doesn't have a default prototype property)
    var doSomething = function(){};
    console.log( doSomething.prototype );

    function doSomething(){}
    doSomething.prototype.foo = "bar"; // add a property onto the prototype
    var doSomeInstancing = new doSomething();
    doSomeInstancing.prop = "some value"; // add a property onto the object
    console.log( doSomeInstancing );

    // By default, the __proto__ of any function's prototype property is window.Object.prototype. 

    // -------------------------------------------------------------
    var a = {a: 1};

    var b = Object.create(a);

    console.log(a.a); // print 1
    console.log(b.a); // print 1
    b.a=5;
    console.log(a.a); // print 1
    console.log(b.a); // print 5
    delete b.a;
    console.log(a.a); // print 1
    console.log(b.a); // print 1 (b.a value 5 is deleted but it showing value from its prototype chain)
    delete a.a;       // This can also be done via 'delete Object.getPrototypeOf(b).a'
    console.log(a.a); // print undefined
    console.log(b.a); // print undefined

    // -------------------- notes --------------------------------
    // inheritance using prototype object
    // "Prototypal Inheriatance" and some people call it "Behaviour Delegation

    // ---------------------- class inheritance ---------------------------

    // ==
    class Vehicle {
 
        constructor (name, type) {
          this.name = name;
          this.type = type;
        }
       
        getName () {
          return this.name;
        }
       
        getType () {
          return this.type;
        }
       
      }
      let car = new Vehicle('Tesla', 'car');
      console.log(car.getName()); // Tesla
      console.log(car.getType()); // car

      // ---------

      function Vehicle (name, type) {
        this.name = name;
        this.type = type;
      };
       
      Vehicle.prototype.getName = function getName () {
        return this.name;
      };
       
      Vehicle.prototype.getType = function getType () {
        return this.type;
      };
      var car = new Vehicle('Tesla', 'car');
      console.log(car.getName()); // Tesla
      console.log(car.getType()); // car

      // ---------------------

      class Vehicle {
 
        constructor (name, type) {
          this.name = name;
          this.type = type;
        }
       
        getName () {
          return this.name;
        }
       
        getType () {
          return this.type;
        }
       
      }
      class Car extends Vehicle {
       
        constructor (name) {
          super(name, 'car');
        }
       
        getName () {
          return 'It is a car: ' + super.getName();
        }
       
      }
      let car = new Car('Tesla');
      console.log(car.getName()); // It is a car: Tesla
      console.log(car.getType()); // car

      // get-set

      class Car {
 
        constructor (name) {
          this._name = name;
        } 
       
        set name (name) {
          this._name = name;
        }
       
        get name () {
          return this._name;
        }
       
      }
      let car = new Car('Tesla');
      console.log(car.name); // Tesla
      car.name = 'BMW';
      console.log(car.name); // BMW

    // ---------------------- function inheritance ---------------------------

    function Dog() {};
    Dog.prototype.bark = function () {
        console.log('woooffff')
    };

    var tofo = new Dog();
    tofo.bark();
    console.log(tofo.hasOwnProperty('bark'));

    // -------------------------------------------------

    function Reactangle(w,h) {
        this.width = w;
        this.heigth = h;
    }

    Reactangle.prototype.area = function () {
        return this.width * this.heigth
    }

    var rect = new Reactangle(3,4);
    console.log(rect.area());

    function Square(l) {
        this.width = this.heigth = l;
    }

    Square.prototype = Object.create(Reactangle.prototype);

    var seq = new Square(3);
    seq.area();

    // ----------------------------------------

    function Vehicle(type, canBePurchased) {
        // value of this will be changed
        // {model: "fdsaf", price: "fdsaf"}
        this.type = type;
        // {model: "fdsaf", price: "fdsaf", type: "fsdaf"}
        this.canBePurchased = canBePurchased;
        // {model: "fdsaf", canBePurchased, type
        //price: "fdsaf"}
      }
      
      function Car(model, price) {
        // blank object
        this.model = model;
        this.price = price;
        // {model: "fdsaf", price: "fdsaf"}
        Vehicle.call(this, "Car", true);
      }
      
      function Train() {
        Vehicle.call(this, "Train", false);
      }
      
      // Blank new object
      // this => blank object
      var c = new Car("BMW", 250);
      var t = new Train();
      
      console.log(c);
      console.log(t);


    // ---------------------- object inheritance ---------------------------

    var person = {
        name: 'urvashi',
        age: 25
    };

    var p1 = Object.create(person);
    console.log(p1.hasOwnProperty('name')) // false
    console.log(p1.name);
    p1.name = "urvi";
    console.log(p1.name);
    p1.delete
    console.log(p1.name);
     // ---------------------- prototype chain ------------------------------