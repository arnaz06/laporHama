const electron = require('electron');
const path = require('path');
const BrowserWindow = electron.remote.BrowserWindow
const remote = electron.remote



const backBtn = document.getElementById('backBtn')

backBtn.addEventListener('click',function(){
  const modalPath= path.join('file://',__dirname,'index.html')
  let win = remote.getCurrentWindow()
  win.loadURL(modalPath)
})
