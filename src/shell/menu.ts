import electron from 'electron'


const reload = (item: electron.MenuItem, focusedWindow: electron.BrowserWindow) => {
  if (focusedWindow) {
    focusedWindow.reload()
  }
}

const open = (item: electron.MenuItem, focusedWindow: electron.BrowserWindow) => {
  const files = electron.dialog.showOpenDialog({ properties: ['openFile'] })
  // then do something with files[0], the path of the file that was selected.
}

const template =
  [ { label: 'Embu' }
  , { label: 'File'
    , submenu:
      [ { label: 'Open...'
        , accelerator: 'CmdOrCtrl+O'
        , click: open
        }
      ]
    }
  , { label: 'View'
    , submenu:
      [ { role: 'reload'
        , accelerator: 'CmdOrCtrl+R'
        , click: reload
        }
      , { role: 'toggledevtools' }
      ]
    }
  ]

export default function loadMenu () {
  const menu = electron.Menu.buildFromTemplate(template)
  electron.Menu.setApplicationMenu(menu)
}
