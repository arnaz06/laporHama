const electron = require('electron');
const path = require('path');
const remote = electron.remote

const cancleBtn= document.getElementById('cancleBtn')
const loginBtn= document.getElementById('loginBtn')

cancleBtn.addEventListener('click',function(event){
  let win= remote.getCurrentWindow()
  win.close()
})

loginBtn.addEventListener('click',function(event){
  
})
