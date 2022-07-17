const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const submitBtn = document.querySelector('#submitBtn');

submitBtn.addEventListener('click', function(){
    const data = {
        username: usernameInput.value,
        password: passwordInput.value
    };

    fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
})