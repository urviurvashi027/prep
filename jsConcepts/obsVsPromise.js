
// convert promise into observable


// import { from } from "rxjs";

// function getWelcomePromise() {
//   return new Promise(resolve => {
//     console.log("In Promise executor fn");

//     resolve("Welcome!");
//   });
// }

// const wrappedPromise1$ = from(getWelcomePromise());

// console.log("Before calling the subscribe method");

// wrappedPromise1$.subscribe(console.log);

// // console output:
// // In Promise executor fn
// // Before calling the subscribe method
// // Welcome!

// -------------------------------------------------------------------

// Observables are unicast by design and Subjects are multicast by design.

// if you look at the below example - each subscription recieves the diffrent values as observables developed as unicast by design.

import {Observable} from 'rxjs';

let obs = Observable.create(observer=>{
   observer.next(Math.random());
})

obs.subscribe(res=>{
  console.log('subscription a :', res); //subscription a :0.2859800202682865
});

obs.subscribe(res=>{
  console.log('subscription b :', res); //subscription b :0.694302021731573
});
// this could be weird if you are expecting the same values on both the subscription.

// we can overcome this issue using Subjects. Subjects is similar to event-emitter and it does not invoke for each subscription. consider the below example.

import {Subject} from 'rxjs';

let obs = new Subject();

obs.subscribe(res=>{
  console.log('subscription a :', res); // subscription a : 0.91767565496093
});

obs.subscribe(res=>{
  console.log('subscription b :', res);// subscription b : 0.91767565496093
});

obs.next(Math.random());