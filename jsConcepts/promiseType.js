// --------------------------------------- all ---------------------------------------

const p1 = Promise.reject("p1 rejected");
const p2 = new Promise((resolve, reject) => {setTimeout(() => {resolve('p2')}, 2000)});
const p3 = Promise.reject("p3 resolved");


const promises = [p1, p2, p3];

Promise.all(promises).then((val) => {console.log(val, "vallll")}).catch((e) => {console.log(e, 'eeeee')});

// output ----------->> p1 rejected eeeee

// ---------------------------------- any -------------------------------------------

const p1 = Promise.reject("p1 rejected");
const p2 = new Promise((resolve, reject) => {setTimeout(() => {resolve('p2')}, 2000)});
const p3 = Promise.reject("p3 resolved");
const p4 = new Promise((resolve, reject) => {setTimeout(() => {reject('p4')}, 2000)});

const promises = [p1, p2, p3];
const promises1 = [p1, p4, p3];

Promise.any(promises).then((val) => {console.log(val, "vallll")}).catch((e) => {console.log(e, 'eeeee')});
// output ----------------->> p2
Promise.any(promises1).then((val) => {console.log(val, "vallll")}).catch((e) => {console.log(e, 'eeeee')});
// output ---------------->> AggregateError: All promises were rejected "eeeee"

// ------------------------------------- all settled -----------------------------------------

const p1 = Promise.reject("p1 rejected");
const p2 = new Promise((resolve, reject) => {setTimeout(() => {resolve('p2')}, 2000)});
const p3 = Promise.reject("p3 resolved");
const p4 = new Promise((resolve, reject) => {setTimeout(() => {reject('p4')}, 2000)});

const promises = [p1, p2, p3];
const promises1 = [p1, p4, p3];

Promise.allSettled(promises).then((val) => {console.log(val, "vallll")}).catch((e) => {console.log(e, 'eeeee')});
// output ----------------->> array of objects    [{status: "rejected", reason: "p1 rejected"}, {status: "fulfilled", value: "p2"}, {status: "rejected", reason: "p3 resolved"}] 
Promise.allSettled(promises1).then((val) => {console.log(val, "vallll")}).catch((e) => {console.log(e, 'eeeee')});


// ------------------------------------------ rece -------------------------------------------

const p1 = Promise.reject("p1 rejected");
const p2 = new Promise((resolve, reject) => {setTimeout(() => {resolve('p2')}, 2000)});
const p3 = Promise.resolve("p3 resolved");
const p4 = new Promise((resolve, reject) => {setTimeout(() => {reject('p4')}, 2000)});

const promises = [p1, p2, p4];
const promises1 = [p1, p4, p3];


Promise.race(promises).then((val) => {console.log(val, "vallll")}).catch((e) => {console.log(e, 'eeeee')});
// output ----------------->> p1 rejected eeeee
Promise.race(promises1).then((val) => {console.log(val, "vallll")}).catch((e) => {console.log(e, 'eeeee')});
// output ----------------->> p1 rejected eeeee