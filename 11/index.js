const form = document.getElementsByTagName('form')[0];
form.onsubmit = (e) => {
  e.preventDefault();

  const message = document.getElementById('message');

  const username = e.currentTarget.username.value;
  const password = e.currentTarget.password.value;

  if (!username) {
    message.innerText = `Digite um nome de usuário (qualquer um)`;
    message.className = 'error';

    return;
  }

  if (password !== 'pass') {
    message.innerText = `A única senha aceita é 'pass' 😬`;
    message.className = 'error';

    return;
  }
  
  message.innerText = `Logado como usuário ${username}`;
  message.className = 'success';
}

form.onreset = (e) => {
  const message = document.getElementById('message');
  message.innerText = null;
  message.className = null;
}