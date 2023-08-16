const canecelBtns = document.querySelectorAll('.cancelBtn');

for(let i of canecelBtns){
    i.addEventListener('click', (e) => {
        e.preventDefault();
    
        const cancelId = i.id;
    
        fetch(`/cancelReservation?id=${cancelId}`)
        .then(res=>res.json())
        .then(data=>{
            if(data.success){
                alert(data.message);
                window.location.href='/studentHome';
            }else{
                alert(data.message);
                window.location.href='/studentHome';
            }
        })
        .catch(err=>{
            console.log(err.message);
        })
    });
}
