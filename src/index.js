const { app, BrowserWindow, Menu } = require('electron');
const url = require('url');
const path = require('path');
let mainWindow;

const templateMenu = [
    {
        label: 'File',
        submenu: [
            {
                label: 'New File',
                accelerator: 'Ctrl+F',
                click() {

                }
            }
        ]
    }
];
const mainMenu = Menu.buildFromTemplate(templateMenu);

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        //titleBarStyle: 'customButtonsOnHover', 
        //frame: false,
        minWidth: '800px',
        minHeight: '600px',
        webPreferences: {
            nodeIntegration: true
        }
    });
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'views/index.html'),
        protocol: 'file',
        slashes: true
    }));

    //Menu.setApplicationMenu(mainMenu);
});