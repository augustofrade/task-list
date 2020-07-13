const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
	let window = new BrowserWindow({
		width: 455,
		height: 550,
		frame: false,
		icon: path.join(__dirname+"\\icon.png"),
		transparent: true,
		webPreferences: {
			nodeIntegration: true
		}
	})
	window.removeMenu();
	window.loadFile("index.html");
}

app.whenReady().then(createWindow);