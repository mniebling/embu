const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const commonConfig =
  { mode: 'development'
  , module:
    { rules:
      [ { test: /\.ts$/
        , exclude: /node_modules/
        , use:
          [ { loader: 'ts-loader'
            , options: { appendTsSuffixTo: [/\.vue$/] }
            }
          ]
        }
      , { test: /\.vue$/
        , use: 'vue-loader'
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
    [ new HtmlWebpackPlugin({ template: './src/index.html' })
    ]
  , resolve:
    { extensions: ['.js', '.ts', '.vue']
    }
  , watch: true
  }

module.exports =
  [ { target: 'electron-main'
    , entry: { main: './src/main.ts' }
    , ...commonConfig
    }
  , { target: 'electron-renderer'
    , entry: { renderer: './src/renderer.ts' }
    , ...commonConfig
    }
  ]
