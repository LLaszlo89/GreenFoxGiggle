const visibility = document.querySelector('.visibility');
const input = document.querySelector('.input-container input');
let password = true;  // eye on or off

visibility.addEventListener('click', function() {
  if (password) {
    input.setAttribute('type', 'text');
    visibility.innerHTML = 'visibility';
  } else {
    input.setAttribute('type', 'password');
    visibility.innerHTML = 'visibility_off';
  }
  password = !password;
  
});

