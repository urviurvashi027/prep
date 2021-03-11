// ---------------------- session storage ----------------------
// ---------------------- local storgae ----------------------
// ---------------------- indexedDB storage ----------------------
// ---------------------- cookie ----------------------------

// It will not touch the old cookies altogether
// Keep on adding new cookies
document.cookie = "a=2323;"
document.cookie = "b=13;"
document.cookie = "c=13;"


// Unlike cookies, web storage objects are not sent to server with each request. Because of that, we can store much more. Most browsers allow at least 2 megabytes of data (or more) and have settings to configure that.
// Also unlike cookies, the server can’t manipulate storage objects via HTTP headers. Everything’s done in JavaScript.
// The storage is bound to the origin (domain/protocol/port triplet). That is, different protocols or subdomains infer different storage objects, they can’t access data from each other.

// setItem(key, value) – store key/value pair.
// getItem(key) – get the value by key.
// removeItem(key) – remove the key with its value.
// clear() – delete everything.
// key(index) – get the key on a given position.
// length – the number of stored items.

// localStorage -> persistent - close the browser and come back and still see the data (5 MB)
// sessionStorage - tab specific - close the tab - sessionStorage is lost
// one domain - a.com can't access localStorage/sessionStorage of another domain (b.com)

// window -> till you kill the application by refreshing or close the tab/browser

// IndexedDB - 5MB
// // can store Strings only
// // For storing objects/arrays -> JSON.stringify and JSON.parse
// // query the data as well from the indexedDB

// try {
// JSON.stringify(a);
// JSON.parse(a);
// } catch(e) {

// }