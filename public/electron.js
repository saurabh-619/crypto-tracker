const { app, BrowserWindow } = require("electron");
const isDev = require("electron-is-dev");
const path = require("path");

if (isDev) {
  require("electron-reload")(__dirname, {
    electron: path.join(
      __dirname,
      "node_modules",
      "electron",
      "dist",
      "electron.exe"
    ),
  });
}

const createAnElectronApp = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
    icon: path.join(__dirname, "/logo.svg"),
  });

  win.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  if (isDev) {
    win.webContents.openDevTools();
  }
};

app.whenReady().then(createAnElectronApp);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createAnElectronApp();
});
