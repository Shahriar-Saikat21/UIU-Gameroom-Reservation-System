const updateBtn = document.querySelector('.updateBtn');

updateBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const name = document.querySelector('.name').value;
    const email = document.querySelector('.email').value;
    const mobile = document.querySelector('.mobile').value;
    const memID = document.querySelector('.id').value;

    fetch(`/adminAttendantUpdateFunc?id=${memID}`,{
        method: "PUT",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({name,email,mobile})
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.success){
            alert(data.message);
            window.location.href = '/adminAttendantSearch';
        }else{
            alert(data.message);
            window.location.href = '/adminAttendantSearch';
        }
    }).catch(err=>{console.log(err)});
});