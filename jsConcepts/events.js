// ---------------------- creating and dispatch event -----------------------------------

// create a look event that bubbles up and cannot be canceled

const evt = new Event("look", {"bubbles":true, "cancelable":false});
document.dispatchEvent(evt);

// event can be dispatched from any element, not only the document
myDiv.dispatchEvent(evt);

// ------------------------------------------------------------------------------------

document.body.innerHTML = '<button>click</button>';

document.querySelector('button').addEventListener('look', function(event) {
    console.log("Tricky click", event);
    });

document.querySelector('button').dispatchEvent(new Event('look'));

// --------------------------- Event vs Custom Event -----------------------------------

// To add more data to the event object, the CustomEvent interface exists and the detail property can be used to pass custom data.