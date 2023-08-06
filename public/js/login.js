const form = document.querySelector('.form');
let invalidP = document.querySelector('.message');

form.addEventListener('submit',(e)=>{

    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const jsonData = JSON.stringify(data);


    fetch('/login',{
        method: 'POST',
        headers : {
            'content-type': 'application/json' 
        },
        body: jsonData
    }).then(res => res.json())
    .then(data =>{
        if(data.success){
            if(data.role == "student"){
                window.location.href = "/studentHome";
            }else if(data.role == "teacher"){
                window.location.href = "/attendance";
            }else{
                window.location.href = "/adminHome";
            }
        }else{
            invalidP.innerHTML = "";
            invalidP.innerHTML = data.message;
        }
    }).catch(err=>{
        console.log(err.message);
    })

});