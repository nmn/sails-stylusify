var socketio = require('./socket.io.js');
require('./sails.io.js');

(function (io) {
  "use strict";
  // as soon as this file is loaded, connect automatically, 
  var socket = io.connect();
  if (typeof console !== 'undefined') {
    log('Connecting to Sails.js...');
  }

  socket.on('connect', function socketConnected() {

    // Listen for Comet messages from Sails
    socket.on('message', function messageReceived(message) {
      log('message received : ', message);
    });


    ///////////////////////////////////////////////////////////
    // Here's where you'll want to add any custom logic for
    // when the browser establishes its socket connection to 
    // the Sails.js server.
    ///////////////////////////////////////////////////////////
    log(
        'Socket is now connected and globally accessible as `socket`.\n' + 
        'e.g. to send a GET request to Sails, try \n' + 
        '`socket.get("/", function (response) ' +
        '{ console.log(response); })`'
    );
  });

  // to experiment with from the browser console while prototyping.
  window.socket = socket;

  function log () {
    if (typeof console !== 'undefined') {
      console.log.apply(console, arguments);
    }
  }

})(socketio);
