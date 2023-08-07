const id = document.querySelector('.id');
const searchBtn = document.querySelector('.search');
const section = document.querySelector('.section');

searchBtn.addEventListener('click',(e)=>{
    e.preventDefault();

    const hello = id.value;

    const data = {
        id: hello
    };

    fetch('/adminAttendantSearchFunc',{
        method: 'POST',
        headers : {
            'content-type': 'application/json' 
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
    .then(data =>{
        if(data.success){
            section.innerHTML = '';
            const markup = `<div class="container text11 mb-4 rounded">
            <div class="text-left mt-3 m-5">
              <h6><b>Name: ${data.info.name}</b></h6>
              <h6><b>Attendance ID : ${data.info.employeeID}</b></h6>
              <h6><b>E-mail: ${data.info.email}</b></h6>
              <h6><b>Mobile: ${data.info.mobile}</b></h6>
            </div>
            <div class="d-flex justify-content-end">
              <a href="/adminAttendantUpdate" class="btn btn-color-up mb-3 me-3">Update</a>
              <button class="btn btn-color-del mb-3" type="submit">Delete</button>
            </div>
          </div>`;
            section.insertAdjacentHTML('beforeend',markup);

        }else{
            alert(data.message);
            window.location.href = '/adminAttendantSearch';
        }
    }).catch(err=>{
        console.log(err.message);
    })


});