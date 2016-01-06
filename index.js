// module.exports = require('./lib/index.js')
var tcp = module.exports = module.exports = require('net')

tcp._connect = tcp.connect = function(){
  this._connect.apply(this, arguments)
}

tcp.createListener = tcp.createServer
tcp.dial = function (multiaddr, options) {
  options.ready = options.ready || function noop () {}
  return tcp.connect(multiaddr.toOptions(), options.ready)
}

tcp._createServer = tcp.createServer
tcp.createServer = function(options, connectionListener){
  var server = tcp._createServer.apply(this, arguments)
  return server
}
