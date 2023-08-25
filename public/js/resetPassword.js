const resetBtn = document.querySelector('.resetPassword');

resetBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const newPassword = document.querySelector('.resetInput').value;

    const id = localStorage.getItem('id');

    fetch('/resetPasswordLink', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({newPassword,id})
    }).then(res => res.json())
    .then(data => {
        localStorage.clear();
        if (data.success) {
            alert(data.message);
            window.location.href = '/';
        } else {
            alert(data.message);
            window.location.href = '/';
        }
    })
    .catch(err => console.log(err));
});