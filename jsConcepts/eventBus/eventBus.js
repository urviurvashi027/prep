class EventBus {
    constructor() {
        this.eventHandlers = {}; // key => event name // value => [callbacks]
    }
    // Can add checks for eventName being a string or fn being a function
    subscribe = (eventName, fn) => {
        // if array doesn't exist, create an array
        // push the fn
        if(!this.eventHandlers[eventName]) {
            this.eventHandlers[eventName] = [];
        }
        this.eventHandlers[eventName].push(fn);
    }

    unsubscribe = (eventName, fn) => {
        // If array doesn't exist, you return or throw an error
        // filter the array
        if(!this.eventHandlers[eventName]) return;
        this.eventHandlers[eventName] = this.eventHandlers[eventName].filter((v) => {
            return v !== fn;
        });
    }

    publish = (eventName, data) => {
        // If array doesn't exist, you return or throw an error
        // run a loop => call the functions
        if(!this.eventHandlers[eventName]) return;
        this.eventHandlers[eventName].forEach(fn => fn(data));
    }
}

  
  function cb(data, ev) {
    console.log("data is coming", data, ev)
  }
  
  function cb2(data, ev) {
    console.log("cb 2data is coming", data, ev)
  }
  
  var channel = new EventBus();
  channel.subscribe("Monday", cb);
  channel.subscribe("Monday", cb2);
//   channel.publish("Monday", "Hellloo");
  channel.subscribe("Tuesday", cb);
  channel.subscribe("Tuesday", cb2);
  channel.publish("Tuesday", "Hellloo");
  channel.unsubscribe("Monday", cb2);
  channel.publish("Monday", "Hellloo")