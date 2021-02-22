// basic
var promise = new Promise(function(resolve, reject) { 
  const x = "urvi"; 
  const y = "urvi"
  if(x === y) { 
    resolve(); 
  } else { 
    reject(); 
  } 
}); 
  
promise. 
    then(function () { 
        console.log('Success, You are a cute'); 
    }). 
    catch(function () { 
        console.log('Some error has occured'); 
    }); 

    // -----------------------------------------------------------

    new Promise(function(resolve, reject) {

        setTimeout(() => resolve(1), 1000); 
      
      }).then(function(result) { 
      
        alert(result); // 1
        return result * 2;
      
      }).then(function(result) {
      
        alert(result); // 2
        return result * 2;
      
      }).then(function(result) {
      
        alert(result); // 4
        return result * 2;
      
      });
//   ---------------------------------------------------------------
    const add = (a, b) => {      
        return new Promise((resolve, reject) => {         
            setTimeout(() => {             
                if (a < 0 || b < 0) {                  
                    return reject('Numbers must be non-negative') 
                }  
                resolve(a + b)          
            }, 2000)  
        }) 
    } 
    
    add(1, 2).then((sum) => {      
        console.log(sum)  // Print 3    
        return add(sum, 4) 
    }).then((sum2) => {      
        console.log(sum2) // Print 7  
    }).catch((e) => {  
        console.log(e)  
    }); 