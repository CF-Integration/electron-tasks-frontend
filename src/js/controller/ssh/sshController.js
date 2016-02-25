// var electron = require('electron-prebuilt');
var ipcRenderer = require('electron').ipcRenderer;

module.exports = ['$state', function footerController($state) {
  if(ipcRenderer.sendSync('config')){
    
  }
  else{
    $state.go('home.install');
  }
}];