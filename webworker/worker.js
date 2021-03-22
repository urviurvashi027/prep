i = 0;
while (i < 200000) {
    postMessage("Web Worker Counter: " + i);
    i++;
}


// It is shared between multiple files
// In the case of a web worker, only the file creating the worker can access the worker or communicate with the worker. 
// But in the case of a Shared worker, it can be shared from different files/contexts.

// The window object
// The document object
// The parent object
