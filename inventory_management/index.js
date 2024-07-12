const { app, BrowserWindow } = require("electron");

function ElectronApp() {
  const launchWindow = new BrowserWindow({
    title: "inventory_management",
    width: 800,
    height: 600,
  });

  const appUrl = "http://localhost:8000";

  launchWindow.loadURL(appUrl);
} //main/end
app.WhenReady().then(ElectronApp);
