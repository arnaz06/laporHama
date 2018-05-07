const electron = require('electron');
const path = require('path');
const BrowserWindow = electron.remote.BrowserWindow
const remote = electron.remote
const fetch = require('fetch');
// const nodeConsole = require('console');
// const console = new nodeConsole.Console(process.stdout, process.stderr);
require('dotenv').config()
const ghissues     = require('ghissues')
    , authOptions = { user: process.env.USER, token: process.env.USER_TOKEN }


const ipc = electron.ipcRenderer

const laporHamaBtn = document.getElementById('laporHamaBtn')



laporHamaBtn.addEventListener('click', function() {
  const modalPath = path.join('file://', __dirname, 'lapor.html')
  let win = remote.getCurrentWindow()
  win.loadURL(modalPath)
})
