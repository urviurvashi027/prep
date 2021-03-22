 // --------------------------- Create Custom Event --------------------------------------



document.body.innerHTML = '<button>click</button>';

document.querySelector('button').addEventListener('look', function(event) {
    console.log("Tricky click", event.detail);
    });

document.querySelector('button').dispatchEvent(new CustomEvent('look', {detail: 'urvashi'}));

// post message vs customEvents ----------------


// You can't dispatch an event into a frame that you are not allowed to access by Same Origin Policy or Access-Control-Allow-Origin, 
// since some of the messages might mess with how that page works. But messages are intended for communication between different pages - 
// if they don't want to listen to the message, they don't have to.