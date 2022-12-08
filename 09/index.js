setInterval(toggleBlink, 600);

function toggleBlink() {
  if(document.getElementById('blinked').style.display === 'none') {
    document.getElementById('blinked').style.display = 'flex';
  } else {
    document.getElementById('blinked').style.display = 'none';
  }
}

let loading = 0;
const loadingElement = document.getElementsByTagName('rafaelbraz-loading')[0];
const loadingInterval = setInterval(() => {
  updateLoading();
}, 15)

function updateLoading() {
  loadingElement.setAttribute('loaded', loading);
  loading += 1;

  if (loading > 100) {
    // clearInterval(loadingInterval);
    loading = 0;
    return;
  }
}