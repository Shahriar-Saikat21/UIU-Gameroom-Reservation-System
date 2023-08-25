const forgetBtn = document.querySelector('.forget');

forgetBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const id = document.querySelector('.forgetInput').value;

    localStorage.clear();
    localStorage.setItem('id', id);

    fetch('/forgetPasswordLink', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id})
    }).then(res => res.json())
    .then(data => {
        if (data.success) {
            alert(data.message);
            window.location.href = '/';
        } else {
            alert(data.message);
            localStorage.clear();
            window.location.href = '/';
        }
    })
    .catch(err => console.log(err));
});