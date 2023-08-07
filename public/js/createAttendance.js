const form = document.querySelector('.form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const data = new FormData(form);
    const formObject = Object.fromEntries(data);
    const jsonData = JSON.stringify(formObject);

    fetch('/adminAttendantCreateFunc', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body : jsonData
    })
    .then(res => res.json())
    .then(data => {
        if(data.success){
            alert(data.message);
            window.location.href = "/adminAttendantSearch";
        }else{
            alert(data.message);
            window.location.href = "/adminAttendantSearch";
        }
    })
    .catch(err => console.log(err.message));
});