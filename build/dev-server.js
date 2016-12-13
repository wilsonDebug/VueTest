var express = require('express')
var webpack = require('webpack')
var config = require('./webpack.dev.conf')


var jsonServer = require('json-server')

// Returns an Express server
var app = jsonServer.create()
// Set default middlewares (logger, static, cors and no-cache)
app.use(jsonServer.defaults())
// Returns an Express router
app.use('/api', jsonServer.router('db.json'))
// var app = express()
var compiler = webpack(config)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
})

var hotMiddleware = require('webpack-hot-middleware')(compiler)
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())
// serve webpack bundle output
app.use(devMiddleware)
// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)


// Add custom routes
// server.get('/custom', function (req, res) { res.json({ msg: 'hello' }) })

// var proxyMiddleware = require('http-proxy-middleware')
// var proxy = proxyMiddleware('/api', {
//                 target: 'http://localhost:3000',
//                 changeOrigin: true   // for vhosted sites, changes host header to match to target's host
//             });
// app.use(proxy);

app.listen(8090, 'localhost', function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:8090')
})