const menu = document.getElementById('top-menu');
const sidebar = document.getElementById('sidebar');

window.addEventListener('click', function(e){   
  if (sidebar.className === '') {
    if (!sidebar.contains(e.target)) {
      closeSideBar();
    }
  }
}, true);

function openSideBar() {
  sidebar.className = '';
}

function closeSideBar() {
  sidebar.className = 'hidden';
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("./serviceworker.js", { scope: '/21-dias-de-codigo/13/' })
      .then(res => console.log("service worker registered", res))
      .catch(err => console.log("service worker not registered", err))
  });
}
