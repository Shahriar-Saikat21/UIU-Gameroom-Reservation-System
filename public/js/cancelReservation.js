const canecelBtns = document.querySelectorAll('.cancelBtn');

for(let i of canecelBtns){
    i.addEventListener('click', (e) => {
        e.preventDefault();
    
        const cancelId = i.id;
        const cancelDate = i.name;

        const currentDate = new Date();
        const scheduleDate = new Date(cancelDate);

        const difference = (scheduleDate.getTime() - currentDate.getTime())/ (1000 * 3600 * 24);

        if(difference < 1){
            alert('You cannot cancel your reservation within 24 hours of the schedule');
            window.location.href='/studentHome';
        }else{
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
        }    
    });
}
