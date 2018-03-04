import {app, BrowserWindow} from 'electron'
import path from 'path'
import url from 'url'

import createMenu from './shell/menu'


app.on('ready', () => {
  // Create the browser window.
  const win = new BrowserWindow({ width: 800, height: 600 })

  // Set up the app menu.
  createMenu()

  // Load the index.html of the app.
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))
})
