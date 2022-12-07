var counter = 0;
var test = 1;

const displays = Array.from(document.getElementsByClassName('display'));
const leds = displays.map((display) => { return Array.from(display.getElementsByClassName('led')) });

const lightOn = [
  [0, 2, 3, 5, 6, 7, 8, 9],
  [0, 4, 5, 6, 8, 9],
  [0, 1, 2, 3, 4, 7, 8, 9],
  [2, 3, 4, 5, 6, 8, 9],
  [0, 2, 6, 8],
  [0, 1, 3, 4, 5, 6, 7, 8, 9],
  [0, 2, 3, 5, 6, 8],
]

function render() {
  const hundred = (counter - (counter % 100)) / 100;
  const tens = ((counter - hundred*100) - ((counter - hundred*100) % 10)) / 10;
  const unit = counter % 10;

  const digits = [hundred, tens, unit];

  displays.forEach((display, i) => {
    leds[i].forEach((led, j) => {
      if (lightOn[j].includes(digits[i])) {
        led.className = 'active';
      } else {
        led.className = 'deactive';
      }
    });
  });
}
render();

const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');

minusButton.addEventListener('click', () => {
  if (counter > 0) {
    counter--;
  } else {
    counter = 999;
  }
  render();
});

plusButton.addEventListener('click', () => {
  counter = (counter + 1) % 999;
  render();
});
