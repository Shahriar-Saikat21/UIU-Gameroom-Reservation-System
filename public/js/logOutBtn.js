const logoutbtn = document.querySelector('.logout-btn');

logoutbtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("logout");
    sessionStorage.clear();
    fetch('/logout',)
    .then(res => res.json())
    .then(data => {
        if(data.success){
            window.location.href = "/";
        }else{
            alert(data.message);
        }
    })
    .catch(err => console.log(err.message));
});