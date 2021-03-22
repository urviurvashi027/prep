// Service Worker (runs in the background even if the tab/app is closed)
// => can't access the DOM/localStorage/sessionStorage
// => reduce the load on the server
// => reduce the network latency (request returned directly from the service worker)
// => Providing offline experience (by fetching js/css/html/data from the cache)
// => Enable push notifications (client | background)
// => service worker can only be used on HTTPs connection (& localhost)


// ----------------------------------------------------------------------------------------------

// The key difference between the two is that a Service Worker is intended to 
// intercept network requests that would typically be sent directly to a remote service and 
// handle the event such that the front end client code can continue working even when the network is unavailable. 
// Which is to say provide the basis of an offline mode for a web app. The front end code makes standard fetch() 
// requests as if it were talking to the server that are intercepted by the service worker.

// A Web Worker is just a general purpose background thread. 
// The intention here is to run background code such that long running tasks do not 
// block the main event loop and cause a slow UI. Web Workers do not intercept network requests, 
// rather the front end code explicitly sends messages to the Web Worker.


