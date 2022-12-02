var expression = '0';

function calculate(exp) {
  const splitted = exp.replace(',', '.').split(' ');

  if (splitted[1] === '/') {
    const result = Number(splitted[0]) / Number(splitted[2]);
    return String(result).replace('.', ',');
  } else if (splitted[1] === 'x') {
    const result = Number(splitted[0]) * Number(splitted[2]);
    return String(result).replace('.', ',');
  } else if (splitted[1] === '-') {
    const result = Number(splitted[0]) - Number(splitted[2]);
    return String(result).replace('.', ',');
  } else if (splitted[1] === '+') {
    const result = Number(splitted[0]) + Number(splitted[2]);
    return String(result).replace('.', ',');
  } else if (splitted[1] === '%') {
    const result = Number(splitted[0]) / 100;
    return String(result).replace('.', ',');
  }
}

function handleClick(key) {
  document.getElementsByTagName('audio')[0].play();
  if (key === '') return;

  if (isNaN(key)) {
    if (key.includes('img')) {
      if(expression[expression.length - 1] === ' ') {
        expression = expression.slice(0, -3);
      } else {
        expression = expression.slice(0, -1);
      }

      if (expression === '') {
        expression = '0';
      }
    } else if (key === 'AC') {
      expression = '0';
    } else if (key === ',') {
      expression += key;
    } else if (key === '%') {
      expression = calculate(`${expression} %`);
    } else if (key === '=') {
      expression = calculate(expression);
    } else {
      expression += ` ${key} `;
    }
  } else {
    if (expression === '0') {
      expression = key;
    } else {
      expression += key;
    }
  }

  const screen = document.getElementById('screen');
  screen.value = expression;
  screen.scrollLeft = screen.scrollWidth;
}

const keys = document.getElementsByTagName('td');
for (var i = 0; i < keys.length; i++) {
  const key = keys[i].innerHTML;
  keys[i].addEventListener('click', () => { handleClick(key) });
}