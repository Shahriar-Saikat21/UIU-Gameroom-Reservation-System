const distributionBtn = document.querySelector('.attendanceSearch');
const section6 = document.querySelector('.section6');


distributionBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const date = document.querySelector('.date').value;
    const game = document.querySelector('.board').value;

    fetch('/attendanceDistribution', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({date,game}),
        
    })
    .then(res => {
        if(res.date,game){
            console.log('Successful')
        } else{
            console.log('Not Successful')
        }
    })
        
    .then(data => {
        section6.innerHTML = '';
        const markup =` <div class="d-flex justify-content-center">
        <div class="mt-5 text1 p-4 rounded">
          <h3 class="text-center mb-2"><b>Reservation Details</b></h3>
          <h6><b>Schedule Token: ${data.history._id}</b></h6>
          <h6><b>Student ID:${data.history.studentID}</b></h6>
          <h6><b>Date: ${data.history.reservationDate}</b></h6>
          <h6><b>Game: ${data.history.game}</b></h6>
          <h6><b>Board: ${data.history.board}</b></h6>
          <h6><b>Schedule: ${data.history.reservationTime}</b></h6>
          <h6><b>Status : ${data.history.reservationStatus}</b></h6>
          <h6><b>Update Status Here : </b></h6>
          <div class="d-flex flex-column align-items-center ">
            <select class="board form-control me-4 w-50 mb-3" aria-label="Default select example">
              <option value="" disabled selected hidden>Choose Status</option>
              <option value="Not Attened" >Not Attened</option>
              <option value="Instrument Given">Instrument Given</option>
              <option value="Instrument Returned">Instrument Returned</option>
            </select>   
            <button class="btn btn-color updateBtn" type="button" id="${data.history._id}" onclick="updateStatus()">Update</button> 
          </div>
        </div> 
      </div>`;
        section6.insertAdjacentHTML('beforeend', markup);
    })
    .catch(error => console.log('error'));
    
});

      


