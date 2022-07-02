const post = async (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const job = document.getElementById("job").value;
    const price = document.getElementById("price").value;
    const description = document.getElementById("description").value;
    const profile = document.getElementById("profile").value;

    //this pulls the ids of each skill checked and passes it into an array 
    let skillsChosen = [];
    let skillsList = document.querySelectorAll('input[name="skills-list"]:checked');
    for (let i = 0; i < skillsList.length; i++) {
        const element = JSON.parse(skillsList[i].value)
        skillsChosen.push(element)
    }

    const response = await fetch('/api/post/', {
            method: 'POST',
            body: JSON.stringify({
                name:name,
                job:job,
                price:price,
                description:description,
                profile:profile,
                skillsChosen: skillsChosen
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