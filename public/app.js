if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(reg => console.log("Service worker has been registered", reg))
    .catch(err => console.log("Service worker has not been registered", err));
}
