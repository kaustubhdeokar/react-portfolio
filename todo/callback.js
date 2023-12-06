function callback(func) {
    console.log('callback');
    setTimeout(function () {
        console.log('inside set timeout');
        func();
    }, 1000);
}

function onComplete() {
    console.log('on complete');
}

callback(onComplete);