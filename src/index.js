const electron = require('electron');
const path = require('path');
const BrowserWindow = electron.remote.BrowserWindow
const remote = electron.remote


const githubLoginBtn = document.getElementById('githubLoginBtn')
const guestLoginBtn = document.getElementById('guestLoginBtn')

githubLoginBtn.addEventListener('click',function(){
  const modalPath= path.join('file://',__dirname,'login.html')
  let win = new BrowserWindow({
    width:400,
    height: 400,
    alwasyOnTop: true
  })
  win.setAlwaysOnTop(true)
  win.on('close',function(){win=null})
  win.loadURL(modalPath)
  win.show()
})

guestLoginBtn.addEventListener('click',function(){
  const modalPath= path.join('file://',__dirname,'lapor.html')
  let win = remote.getCurrentWindow()
  win.loadURL(modalPath)
})
