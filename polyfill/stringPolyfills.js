// reverse

String.prototype.revy = function (){ 
 
    const revArray = []; 
    const length = this.length - 1; 
      
    for(let i = length; i >= 0; i--) { 
        revArray.push(this[i]); 
    } 
      
    return revArray.join(''); 
} 

console.log("opikl".revy())

// split ---- todo

