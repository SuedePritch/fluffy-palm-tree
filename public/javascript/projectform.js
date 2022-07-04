const post = async (event) => {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const projectdescription = document.getElementById("description").value;
    const budget = document.getElementById("budget").value;
    const deadline = document.getElementById("deadline").value;

    const response = await fetch('/api/post/', {
            method: 'POST',
            body: JSON.stringify({
                title:title,
                projectdescription:projectdescription,
                budget:budget,
                deadline: deadline,
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