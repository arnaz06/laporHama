const electron = require('electron');
const path = require('path');
const BrowserWindow = electron.remote.BrowserWindow
const remote = electron.remote
const nodeConsole = require('console');
const console = new nodeConsole.Console(process.stdout, process.stderr);
const ipc = electron.ipcRenderer
const Swal = require('sweetalert2')
require('dotenv').config()

const submitBtn = document.getElementById('submitBtn')

ipc.on('send-result',function(event,arg){
  if(arg=='error'){
    Swal({
      title: 'Lapor Hama Error',
      type: 'error',
      text: 'Something Went wrong!!!',
      showCancelButton: false,
      confirmButtonColor: '#C92A22',
    })
    } else {
      Swal({
        title: 'Lapor Hama Sukses',
        type: 'success',
        text: 'Nomer Lapor Hama Anda ' + arg.number,
        showCancelButton: false,
        confirmButtonColor: '#009688',
      }).then((result) => {
        if (result.value) {
          const modalPath = path.join('file://', __dirname, 'index.html')
          let win = remote.getCurrentWindow()
          win.loadURL(modalPath)
        }
      })
    }
    })

submitBtn.addEventListener('click',function(){
  let data={}
  data.title=document.getElementById('title').value
  data.body=document.getElementById('body').value
  data.image=document.getElementById('image').value
  console.log(data);
  ipc.send('send-bug',data)
})
