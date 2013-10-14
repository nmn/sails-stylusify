/**
 *
 * You would use:
 *    `socket.post( url, [data], [cb] )`
 */

var socketio = require('./socket.io.js');

(function (io) {

  var Socket = io.SocketNamespace;

  /**
   * Simulate a GET request to sails
   * e.g.
   *    `socket.get('/user/3', Stats.populate)`
   */

  Socket.prototype.get = function (url, data, cb) {
    return this.request(url, data, cb, 'get');
  };
  Socket.prototype.post = function (url, data, cb) {
    return this.request(url, data, cb, 'post');
  };

  Socket.prototype.put = function (url, data, cb) {
    return this.request(url, data, cb, 'put');
  };
  Socket.prototype['delete'] = function (url, data, cb) {
    return this.request(url, data, cb, 'delete');
  };


  /**
  * Simulate HTTP over Socket.io
  */
  Socket.prototype.request = request;

  function request (url, data, cb, method) {

    var socket = this;

    var usage = 'Usage:\n socket.' +
      (method || 'request') +
      '( destinationURL, dataToSend, fnToCallWhenComplete )';

    // Remove trailing slashes and spaces
    url = url.replace(/^(.+)\/*\s*$/, '$1');

    // If method is undefined, use 'get'
    method = method || 'get';


    if ( typeof url !== 'string' ) {
      throw new Error('Invalid or missing URL!\n' + usage);
    }

    // Allow data arg to be optional
    if ( typeof data === 'function' ) {
      cb = data;
      data = {};
    }

    // Build to request
    var json = window.io.JSON.stringify({
      url: url,
      data: data
    });


    // Send the message over the socket
    socket.emit(method, json, function afterEmitted (result) {

      var parsedResult = result;

      if (result && typeof result === 'string') {
        try {
          parsedResult = window.io.JSON.parse(result);
        } catch (e) {
          if (typeof console !== 'undefined') {
            console.warn("Could not parse:", result, e);
          }
          throw new Error("Server response could not be parsed!\n" + result);
        }
      }

      // TODO: Handle errors more effectively
      if (parsedResult === 404) throw new Error("404: Not found");
      if (parsedResult === 403) throw new Error("403: Forbidden");
      if (parsedResult === 500) throw new Error("500: Server error");

      cb && cb(parsedResult);

    });
  }

}) (socketio);
