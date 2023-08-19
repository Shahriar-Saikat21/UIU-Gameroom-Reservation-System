const chessSearch = document.querySelector('.chessSearch');
const section4 = document.querySelector('.section4');
let dateSearch = "";
let board = "";

chessSearch.addEventListener('click', (e)=>{
    e.preventDefault();
    
    dateSearch = document.querySelector('.date').value;
    board = document.querySelector('.board').value;

    const currentDate = new Date();
    const searchDate = new Date(dateSearch);

    const difference = (searchDate.getTime() - currentDate.getTime())/ (1000 * 3600 * 24);

    if(difference < 0){
      alert('You cannot reserve a table for a past date');
      window.location.href = '/studentChess';
    }else if(difference > 5){
        alert('You can only reserve a table within 5 days');
        window.location.href = '/studentChess';
    }else{
      const data = {
        'date' : dateSearch,
        'board' : board
    };

    fetch('/chessSearch',{
        method: 'POST',
        headers : {
            'content-type': 'application/json' 
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
    .then(data =>{
        section4.innerHTML = '';
        const markup = `
        <div class="btn-group row" role="group" aria-label="Basic radio toggle button group">
        <div class="row mt-4">
          <div class="col-lg-3 col-12 ">
            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" value="09:00 AM - 09:30 AM" autocomplete="off" ${data.scheduleStatus[1]}>
            <label class="btn btn-outline-warning w-100  btn-op" for="btnradio1">09:00 AM - 09:30 AM</label>
          </div>
          <div class="col-lg-3 col-12 ">
            <input type="radio" class="btn-check" name="btnradio" id="btnradio2"  value="09:30 AM - 10:00 AM" autocomplete="off" ${data.scheduleStatus[2]}>
            <label class="btn btn-outline-warning w-100  btn-op" for="btnradio2">09:30 AM - 10:00 AM</label>
          </div>
          <div class="col-lg-3 col-12 ">
            <input type="radio" class="btn-check" name="btnradio" id="btnradio3" value="10:00 AM - 10:30 AM" autocomplete="off" ${data.scheduleStatus[3]}>
            <label class="btn btn-outline-warning w-100  btn-op" for="btnradio3">10:00 AM - 10:30 AM</label>
          </div>
          <div class="col-lg-3 col-12 ">
            <input type="radio" class="btn-check" name="btnradio" id="btnradio4" value="10:30 AM - 11:00 AM"  autocomplete="off" ${data.scheduleStatus[4]}>
            <label class="btn btn-outline-warning w-100  btn-op" for="btnradio4">10:30 AM - 11:00 AM</label>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-lg-3 col-12 ">
            <input type="radio" class="btn-check" name="btnradio" id="btnradio5" value="11:00 AM - 11:30 AM" autocomplete="off" ${data.scheduleStatus[5]}>
            <label class="btn btn-outline-warning w-100  btn-op" for="btnradio5">11:00 AM - 11:30 AM</label>
          </div>
          <div class="col-lg-3 col-12 ">
            <input type="radio" class="btn-check" name="btnradio" id="btnradio6"  value="11:30 AM - 12:00 PM"  autocomplete="off" ${data.scheduleStatus[6]}>
            <label class="btn btn-outline-warning w-100  btn-op" for="btnradio6">11:30 AM - 12:00 PM</label>
          </div>
          <div class="col-lg-3 col-12 ">
            <input type="radio" class="btn-check" name="btnradio" id="btnradio7"  value="12:00 PM - 12:30 PM"  autocomplete="off" ${data.scheduleStatus[7]}>
            <label class="btn btn-outline-warning w-100  btn-op" for="btnradio7">12:00 PM - 12:30 PM</label>
          </div>
          <div class="col-lg-3 col-12 ">
            <input type="radio" class="btn-check" name="btnradio" id="btnradio8" value="12:30 PM - 01:00 PM" autocomplete="off" ${data.scheduleStatus[8]}>
            <label class="btn btn-outline-warning w-100  btn-op" for="btnradio8">12:30 PM - 01:00 PM</label>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-lg-3 col-12 ">
            <input type="radio" class="btn-check" name="btnradio" id="btnradio9" value="01:00 PM - 01:30 PM" autocomplete="off" ${data.scheduleStatus[9]}>
            <label class="btn btn-outline-warning w-100  btn-op" for="btnradio9">01:00 PM - 01:30 PM</label>
          </div>
          <div class="col-lg-3 col-12 ">
            <input type="radio" class="btn-check" name="btnradio" id="btnradio10" value="01:30 PM - 02:00 PM" autocomplete="off" ${data.scheduleStatus[10]}>
            <label class="btn btn-outline-warning w-100  btn-op" for="btnradio10">01:30 PM - 02:00 PM</label>
          </div>
          <div class="col-lg-3 col-12 ">
            <input type="radio" class="btn-check" name="btnradio" id="btnradio11" value="02:00 PM - 02:30 PM" autocomplete="off" ${data.scheduleStatus[11]}>
            <label class="btn btn-outline-warning w-100  btn-op" for="btnradio11">02:00 PM - 02:30 PM</label>
          </div>
          <div class="col-lg-3 col-12 ">
            <input type="radio" class="btn-check" name="btnradio" id="btnradio12" value="02:30 PM - 03:00 PM" autocomplete="off" ${data.scheduleStatus[12]}>
            <label class="btn btn-outline-warning w-100  btn-op" for="btnradio12">02:30 PM - 03:00 PM</label>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-lg-3 col-12 ">
            <input type="radio" class="btn-check" name="btnradio" id="btnradio13" value="03:00 PM - 03:30 PM" autocomplete="off" ${data.scheduleStatus[13]}>
            <label class="btn btn-outline-warning w-100  btn-op" for="btnradio13">03:00 PM - 03:30 PM</label>
          </div>
          <div class="col-lg-3 col-12 ">
            <input type="radio" class="btn-check" name="btnradio" id="btnradio14" value="03:30 PM - 04:00 PM" autocomplete="off" ${data.scheduleStatus[14]}>
            <label class="btn btn-outline-warning w-100  btn-op" for="btnradio14">03:30 PM - 04:00 PM</label>
          </div>
          <div class="col-lg-3 col-12 ">
            <input type="radio" class="btn-check" name="btnradio" id="btnradio15" value="04:00 PM - 04:30 PM" autocomplete="off" ${data.scheduleStatus[15]}>
            <label class="btn btn-outline-warning w-100  btn-op" for="btnradio15">04:00 PM - 04:30 PM</label>
          </div>
          <div class="col-lg-3 col-12 ">
            <input type="radio" class="btn-check" name="btnradio" id="btnradio16" value="04:30 PM - 05:00 PM" autocomplete="off" ${data.scheduleStatus[16]}>
            <label class="btn btn-outline-warning w-100  btn-op" for="btnradio16">04:30 PM - 05:00 PM</label>
          </div>
        </div>
        <div class="form-row d-flex justify-content-center">
          <button class="btn btn-color w-50 m-4 " type="button" onclick="reserveChess()">Reserve</button>
        </div>
      </div>        
        `;
        section4.insertAdjacentHTML('beforeend',markup);
    }).catch(err=>{
        console.log(err.message);
    })
    };
    
});

function reserveChess(){
    const time = document.getElementsByName('btnradio');
    let reservedTime = "";
    for (i = 0; i < time.length; i++) {
      if (time[i].checked){
        reservedTime= time[i].value;
        break;
      }         
    }
    
    fetch(`/chessBook`,{
      method: "POST",
      headers: {
          "Content-Type" : "application/json"
      },
      body: JSON.stringify({reservedTime,dateSearch,board})
  })
  .then(res=>res.json())
  .then(data=>{
      if(data.success){
          alert(data.message);
          window.location.href = '/studentHome';
      }else{
          alert(data.message);
          window.location.href = '/studentHome';
      }
  }).catch(err=>{console.log(err)});
    
};