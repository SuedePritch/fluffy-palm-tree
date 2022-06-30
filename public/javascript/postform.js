const login = async (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const job = document.getElementById("job").value;
    const tech = document.getElementById("tech").value;
    const price = document.getElementById("price").value;
    const description = document.getElementById("description").value;
    const response = await fetch('/api/user/postform', {
            method: 'POST',
            body: JSON.stringify({
                name:name,
                job:job,
                tech:tech,
                price:price,
                description:description,
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

document.getElementById('post-form').addEventListener('submit', post)