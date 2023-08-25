const studentSearch = document.querySelector('.studentSearch');
const section1 = document.querySelector('.section1');


studentSearch.addEventListener('click', (e) => {
    e.preventDefault();

    sessionStorage.removeItem('studentID');
    const searchInput = document.querySelector('.searchInput').value;

    const data = {
        id: searchInput
    };

    fetch('/adminStudentSearch',{
        method: 'POST',
        headers : {
            'content-type': 'application/json' 
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
    .then(data =>{
        if(data.success){
            section1.innerHTML = '';
            sessionStorage.setItem('studentID',data.info.studentID);
            const markup = `
            <div class="row">
              <div class="card text-lg-end rounded-circle">
                <img src="/images/BG.png" class="image" width="288" height="288">
              </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <h5><b>Name: ${data.info.name}</b></h5>
                    <h5><b>Email: ${data.info.email}</b></h5>
                    <h5><b>ID: ${data.info.studentID}</b></h5>
                    <h5><b>Status: ${data.info.status}</b></h5>
                    <div class="d-flex justify-content-center">
                        <div class="col ">
                            <a type="button" class="mt-3 btn btn-secondary m-3" href="/adminSeeAllHistory?id=${data.info.studentID}">See All Reservation</a>
                        </div>
                    </div>
                </div>
            </div>`;
            section1.insertAdjacentHTML('beforeend',markup);

            const image = document.querySelector('.image');

            image.src = `data:${data.info.image.contentType};base64,${arrayBufferToBase64(data.info.image.data.data)}`;   
 

            function arrayBufferToBase64(buffer) {
                let binary = '';
                const bytes = new Uint8Array(buffer);
                const len = bytes.byteLength;
                for (let i = 0; i < len; i++) {
                binary += String.fromCharCode(bytes[i]);
                }
                return window.btoa(binary);
            }

        }else{
            alert(data.message);
            window.location.href = '/adminHome';
        }
    }).catch(err=>{
        console.log(err.message);
    })
});
