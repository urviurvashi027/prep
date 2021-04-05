class EventBus {
    constructor() {
      this.eventHandlers = {};
    }
  
    subscribe = (eventName, id, callback) => {
      if (!this.eventHandlers[eventName])
      this.eventHandlers[eventName] = {};
      this.eventHandlers[eventName][id] = callback;
    }
  
    unsubscribe = (eventName, id) => {
      if (!this.eventHandlers[eventName]) return;
      this.eventHandlers[eventName][id] = undefined;
    }
  
    publish = (eventName, data) => {
          if (!this.eventHandlers[eventName]) return;
          for (let i in this.eventHandlers[eventName]) {
            let val = this.eventHandlers[eventName][i];
            val ? val(data, eventName): null;
          }
    }
  
  
  }
  
  function cb(data, ev) {
    console.log("data is coming", data, ev)
  }
  
  function cb2(data, ev) {
    console.log("cb 2data is coming", data, ev)
  }
  
  var channel = new EventBus();
  channel.subscribe("Monday",3, cb);
  channel.subscribe("Monday",4, cb2);
  // channel.publish("Monday", "Hellloo");
  channel.subscribe("Tuesday",1, cb);
  channel.subscribe("Tuesday", 2,cb2);
  channel.publish("Tuesday", "Hellloo");
  channel.unsubscribe("Monday",4);
  channel.publish("Monday", "Hellloo");