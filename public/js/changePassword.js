const changePasswordbtn = document.querySelector('.passChange');
const password = document.querySelector('.changePW');

changePasswordbtn.addEventListener('click', (e) => {
    e.preventDefault();
    const passwordValue = password.value;

    fetch('/changeStudentPassword',{
        method: "PUT",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({passwordValue})
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.success){
            alert(data.message);
            window.location.href = "/studentHome";
        }else{
            alert(data.message);
            window.location.href = "/studentHome";
        }
    }).catch(err=>{console.log(err)});
});