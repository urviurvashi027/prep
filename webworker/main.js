var worker;

function startWorker() {
    if (typeof (Worker) != "undefined") {
        if (typeof (worker) == "undefined"){
            worker = new Worker("worker.js")
        }
        worker.onmessage = function (event) {
            document.getElementById('workerOutput').innerHTML = event.data
        }
    }
    else {
        document.getElementById("workerOutput").innerHTML = "Web Workers are not supported in your browser";
    }
}

function stopWorker() {
    worker.terminate();
    worker = undefined;
}

function testMainThread() {
    console.log("hi i am called")
    for (var i = 0; i < 20; i++) { 
        document.getElementById("mainThreadOutput").innerHTML = "Main Thread Counter: " + i;

    }
}