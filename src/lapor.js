const electron = require('electron');
const path = require('path');
const BrowserWindow = electron.remote.BrowserWindow
const remote = electron.remote
const nodeConsole = require('console');
const console = new nodeConsole.Console(process.stdout, process.stderr);
const ipc = electron.ipcRenderer
require('dotenv').config()

const submitBtn = document.getElementById('submitBtn')


submitBtn.addEventListener('click',function(){
  let data={}
  data.title=document.getElementById('title').value
  data.body=document.getElementById('body').value
  data.image=document.getElementById('image').value
  console.log(data);
  ipc.send('send-bug',data)
})
