// --------------------------- Polyfills for promise all ------------------------------------

Promise.myAll = function(promises) {
    let results = [];
    return new Promise((resolve, reject) => {
      promises.forEach((p, index) => {
        p.then((result) => {
          results.push(result);
          if (index === promises.length - 1) {
            resolve(results);
          }
        }).catch((err) => reject(err));
      });
    });
  };

// --------------------------- Polyfills for promise any ------------------------------------
Promise.any = function(promises) {
    return new Promise((resolve, reject) => {
      promises.forEach((p, index) => {
        p.then((result) => {
          if (index === promises.length - 1) {
            resolve(result);
          }
        }).catch((err) => reject(err));
      });
    });
  };



// --------------------------- Polyfills for promise race ------------------------------------

Promise.any = function(promises) {
    return new Promise((resolve, reject) => {
      promises.forEach((p, index) => {
        p.then((result) => {
         resolve(result);
        }).catch((err) => reject(err));
      });
    });
  };

// --------------------------- Polyfills for promise allsettled ------------------------------------