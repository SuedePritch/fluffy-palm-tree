async function deletePost(event) {
    event.preventDefault();
    const deletePostId = event.target.id
    const response = await fetch(`/api/post/${deletePostId}`, {
        method: 'DELETE'
    });
        if (response.ok) {
        document.location.replace('/dashboard')
        } else {
        alert('delete failed');
        }
}
const deleteButton = document.querySelectorAll('.delete-button');
deleteButton.forEach(button =>{
    button.addEventListener('click', deletePost)
});