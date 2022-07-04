async function deleteProject(event) {
    event.preventDefault();
    const deleteProjectId = event.target.id
    const response = await fetch(`/api/post/project/${deleteProjectId}`, {
        method: 'DELETE'
    });
        if (response.ok) {
        document.location.replace('/clientdashboard')
        } else {
        alert('delete failed');
        }
}
const deleteButton = document.querySelectorAll('.delete-button');
deleteButton.forEach(button =>{
    button.addEventListener('click', deleteProject)
});