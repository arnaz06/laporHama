const electron = require('electron');
const path = require('path');
const BrowserWindow = electron.remote.BrowserWindow
const remote = electron.remote
require('dotenv').config()
const fetch = require('fetch');
const nodeConsole = require('console');
const console = new nodeConsole.Console(process.stdout, process.stderr);
const ghissues     = require('ghissues')
    , authOptions = { user: process.env.USER, token: process.env.USER_TOKEN }




const laporHamaBtn = document.getElementById('laporHamaBtn')



const getUser = () => {
  const user= process.env.USERNAME
  const repo=process.env.REPO
  var data = {
    title : 'test issues',
    body  : 'Pretty **slick** `markdown`',
    labels: ['bugs']
}
  ghissues.create(authOptions, user, repo, data, function (err, issue) {
    // data for new issue
    if(err){
      console.log(user);
      console.log(repo);
      console.log(err);
    }else{
      console.log(issue)
    }
  })

}



getUser()
// postIssues()



laporHamaBtn.addEventListener('click', function() {
  const modalPath = path.join('file://', __dirname, 'lapor.html')
  let win = remote.getCurrentWindow()
  win.loadURL(modalPath)
})
