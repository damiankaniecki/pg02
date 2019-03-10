var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        app.checkapi();
        app.receivedEvent('deviceready');


    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    checkapi: function () {
        fetch('http://192.168.10.155:3000/meas01')
            .then(function (response) {
                return response.json()
            }).then(function (json) {
                var tmp = JSON.stringify(json);
                document.getElementById("napis").innerHTML = json.cputemp;
                console.log(typeof json);
            }).catch(function (ex) {
                console.log('parsing failed', ex)
            })
    }
};