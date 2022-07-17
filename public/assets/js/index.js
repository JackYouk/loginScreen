let usernameInput = $('#username');
let passwordInput = $('#password');
let submitBtn = $('#submitBtn');

submitBtn.on('click', () => {
    const data = {
        username: usernameInput,
        password: passwordInput
    };

    fetch('/api/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
    console.log('Success:', data);
    })
    .catch((error) => {
    console.error('Error:', error);
    });
})