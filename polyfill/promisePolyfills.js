// ------------------------------------------- Promise all -----------------------------------------------

Promise.myAll = function (promise) {
    console.log(promise, 'promise');
    let result = [];
    return new Promise((resolve, reject) => {
    promise.forEach((p,i) => {
    p.then((val) => {
         result.push(val); 
         if (i === promise.length - 1){
             resolve(result)
            }
        })
    .catch((e) => {
        console.log(e);
        reject(e)
    });
});
});
}


// ------------------------------------------- Promise any ----------------------------------------------------

Promise.myAny = function (promise) {
    return new Promise((resolve, reject) => {
    for (let i =0; i < promise.length; i++) {
         promise[i].then((val) => {
         resolve(val);
        })
    .catch((e) => {
        if ( i === promise.length - 1) {
          reject(e)
        }
    });
    }  
});
}

Promise.promiseAny = function(promisesArray) {
  var errorOutput = new Array(promisesArray.length);
  var counter = 0;

  return new Promise((resolve, reject) => {
    promisesArray.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(resolve) // resolve outer promise, as and when any of the input promises resolves
        .catch(error => {
          errorOutput[index] = error;
          counter = counter + 1;
          if (counter === promisesArray.length) {
            // all promises rejected, reject outer promise
            reject(errorOutput);
          }
        });
    });
  });
}

    const promise1 = Promise.reject(0);
    const promise2 = new Promise((resolve) => setTimeout(resolve, 10000, 'quick'));
    const promise3 = new Promise((resolve) => setTimeout(resolve, 5000, 'slow'));

    const promises = [promise1, promise2, promise3];

    Promise.any(promises).then((value) => console.log(value, 'r'));
    Promise.myAny(promises).then((value) => console.log(value,'mA'));
    Promise.promiseAny(promises).then((value) => console.log(value, 'pA'));

// ------------------------------------------- Promise all settled -----------------------------------------------








// ------------------------------------------- Promise race ------------------------------------------------------
Promise.myRace = function (promise) {
    return new Promise((resolve, reject) => {
    promise.forEach((p,i) => {
    p.then((val) => {
        resolve(val)
        })
    .catch((e) => {
        reject(e)
    });
});

});

}