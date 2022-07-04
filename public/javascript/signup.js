const signup = async (event) => {
    event.preventDefault();
    const username = document.getElementById("username-signup").value.trim();
    const email = document.getElementById("email-signup").value.trim();
    const password = document.getElementById("password-signup").value.trim();
    const isDevOptions = document.querySelectorAll('input[name="isDev"]:checked')
    const isDev = JSON.parse(isDevOptions[0].value)
    if (username && password) {
        const response = await fetch('/api/user/signup', {
            method: 'POST',
            body: JSON.stringify({
                username,
                email,
                password,
                isDev
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            document.location.replace('/postings');
        } else {
            alert(response.statusText);
        }
    }
}

document.getElementById('signup-form').addEventListener('submit', signup)