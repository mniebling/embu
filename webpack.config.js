const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const commonConfig =
  { mode: 'development'
  , module:
    { rules:
      [ { test: /\.ts$/
        , exclude: /node_modules/
        , use: 'ts-loader'
        }
      ]
    }
  , node:
    { __dirname: false
    }
  , output:
    { path: path.resolve(__dirname, 'dist')
    , filename: '[name].bundle.js'
    }
  , plugins:
    [ new HtmlWebpackPlugin({ title: 'Embu' })
    ]
  , resolve:
    { extensions: ['.js', '.ts']
    }
  }

module.exports =
  [ { target: 'electron-main'
    , entry: { main: './src/main.ts' }
    , ...commonConfig
    }
  , { target: 'electron-renderer'
    , entry: { renderer: './src/renderer.js' }
    , ...commonConfig
    }
  ]
