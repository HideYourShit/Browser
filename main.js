const {app, BrowserWindow} = require('electron');

let mainWindow;
require('electron-debug')({showDevTools: true});

app.on('window-all-closed', function() {
  app.quit();
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 1024, height: 768,     transparent : true,titleBarStyle : 'hidden-inset'
 });
  mainWindow.setResizable(false);
  mainWindow.loadURL('file://' + __dirname + '/browser.html');
  mainWindow.webContents.openDevTools()

});
