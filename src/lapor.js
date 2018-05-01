const electron = require('electron');
const path = require('path');
const BrowserWindow = electron.remote.BrowserWindow
const remote = electron.remote
const nodeConsole = require('console');
const console = new nodeConsole.Console(process.stdout, process.stderr);
const ipc = electron.ipcRenderer
require('dotenv').config()

const submitBtn = document.getElementById('submitBtn')
const backBtn = document.getElementById('backBtn')


backBtn.addEventListener('click',function(){
  const modalPath= path.join('file://',__dirname,'index.html')
  let win = remote.getCurrentWindow()
  win.loadURL(modalPath)
})




submitBtn.addEventListener('click',function(){
  let data={}
  data.title=document.getElementById('title').value
  data.body=document.getElementById('body').value
  ipc.send('send-bug',data)
  console.log('send to ipc main :'+data);
})
