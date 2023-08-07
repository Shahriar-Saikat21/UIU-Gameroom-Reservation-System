const unBanBtn = document.querySelector('.unBan');

unBanBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const stdId = sessionStorage.getItem('studentID');

    fetch(`/adminStudentUnban?id=${stdId}`,{
        method: "PUT",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify()
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.success){
            alert(data.message);
            sessionStorage.removeItem('studentID');
            window.location.href = '/adminHome';
        }else{
            alert(data.message);
            sessionStorage.removeItem('studentID');
            window.location.href = '/adminHome';
        }
    }).catch(err=>{console.log(err)});
});