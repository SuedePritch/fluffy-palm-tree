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
            },
            
        })
        // Grabs response object
        const isDeveloperHelper = await response.json();
        //Grabs isDev from response object
        const isDev = isDeveloperHelper.isDev


        if (response.ok) {
            if(isDev){
                document.location.replace('/dashboard');
            }else{
                document.location.replace('/postings');
            }
        } else {
            alert('log in failed!');
        }
    }

document.getElementById('login-form').addEventListener('submit', login)