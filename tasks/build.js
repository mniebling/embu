const webpack = require('webpack')
const config = require('../webpack.config')


webpack(config, (err, stats) => {

  console.log(stats.toString(
    { colors: true
    , entrypoints: false
    , hash: false
    , modules: false
    , version: false
    }
  ))
})
