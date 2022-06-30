const login = async (event) => {
    event.preventDefault();
    const email = document.getElementById("email-login").value;
    const password = document.getElementById("password-login").value;
    const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({
                email:email,
                password:password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }

document.getElementById('login-form').addEventListener('submit', login)