form.onclick = function(event) {
    event.target.style.backgroundColor = 'yellow';
  
    // chrome needs some time to paint yellow
    setTimeout(() => {
      alert("target = " + event.target.tagName + ", this=" + this.tagName + ", current target", event.currentTarget);
      console.log(event, "event")
      event.target.style.backgroundColor = ''
    }, 0);
  };