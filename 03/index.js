function turnLight() {
  const container = document.getElementById('container');
  container.setAttribute('class', container.className === 'on' ? 'off' : 'on');
}