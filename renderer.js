const { ipcRenderer } = require("electron");

window.addEventListener("DOMContentLoaded", () => {
  const webview = document.getElementById("webview");
  const urlInput = document.getElementById("url");
  const backBtn = document.getElementById("back");
  const forwardBtn = document.getElementById("forward");
  const reloadBtn = document.getElementById("reload");

  // Cargar URL al presionar Enter
  urlInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      let url = urlInput.value;
      if (!url.startsWith("http")) {
        url = "https://" + url;
      }
      webview.loadURL(url);
    }
  });

  // Botones
  backBtn.addEventListener("click", () => webview.goBack());
  forwardBtn.addEventListener("click", () => webview.goForward());
  reloadBtn.addEventListener("click", () => webview.reload());

  // Mostrar URL actual en la barra
  webview.addEventListener("did-navigate", (e) => {
    urlInput.value = e.url;
  });
});
