const distributionBtn = document.querySelector('.attendanceSearch');
const section6 = document.querySelector('.section6');


distributionBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const date = document.querySelector('.date').value;
    const game = document.querySelector('.board').value;

    fetch('/attendanceDistributionHistory',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({date,game})
    }).then(res=>res.json())
    .then(data=>{
        section6.innerHTML = "";
        if(data.success){           
            if(data.history.length > 0){
                data.history.forEach(i => {                
                    const markup = `<div class="d-flex justify-content-center">
                    <div class="mt-5 text1 p-4 rounded">
                        <h6><b>Schedule Token: ${i._id}</b></h6>
                        <h6><b>Student ID:${i.studentID}</b></h6>
                        <h6><b>Date: ${i.reservationDate}</b></h6>
                        <h6><b>Game: ${i.game}</b></h6>
                        <h6><b>Board: ${i.board}</b></h6>
                        <h6><b>Schedule: ${i.reservationTime}</b></h6>
                        <h6><b>Status : ${i.reservationStatus}</b></h6>
                    </div>
                </div> `;
                section6.insertAdjacentHTML('beforeend',markup);               
                });           
            }else{
                section6.insertAdjacentHTML('beforeend',`<h1>No Schedule Found</h1>`);
            }
        }else{
            section6.innerHTML = "";
            section6.insertAdjacentHTML('beforeend',`<h1>${data.message}</h1>`);
        }
    })
    .catch((err)=>{     
        console.log(err);
    })   
})

