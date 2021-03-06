// -----------------------------

function debounce(callback, time) {
	var timeout;
	return function() {
		var context = this;
		var args = arguments;
		if (timeout) {
			clearTimeout(timeout);
		}
		timeout = setTimeout(function() {
			timeout = null;
			callback.apply(context, args);
		}, time);
	}
}

// ----------------------

const debounce = (callback, delay = 250) => {
    let timeoutId
    return (...args) => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        timeoutId = null
        callback(...args)
      }, delay)
    }
  }

  // -------------------------

  const throttleFunction=(func, delay)=>{ 
  
	let prev = 0;  
	return (...args) => { 
	  let now = new Date().getTime();  
	  console.log(now-prev, delay);  
	  if(now - prev> delay){  
		prev = now; 
		return func(...args);   
	  } 
	} 
  }