export function validation(event) {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const container = document.querySelector('.cont');
  const fail = document.getElementById('fail');

  if (fail) fail.remove();

  if (email === 'admin') {
    if (password === 'pass') {
      document.location = `${process.env.PUBLIC_URL}/`;
    } else {
      if (fail) {
        fail.remove();
      }
      container.insertAdjacentHTML('afterbegin', "<span id='fail'> Złe Hasło </span>");
    }
  } else {
    container.insertAdjacentHTML('afterbegin', "<span id='fail'> Zły Email </span>");
  }
}
