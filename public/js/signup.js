const id = document.querySelector('.id');
const password = document.querySelector('.password');
const otpInput = document.querySelector('.otpInput');
const signupBtn = document.querySelector('.signup-btn');
const otpBtn = document.querySelector('.otp-btn');

otpBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const userId = id.value;
    const userPassword = password.value;

    sessionStorage.setItem('id', userId);
    sessionStorage.setItem('password', userPassword);

    const data = {
        'id' : userId,
    };

    fetch('/signinRequest',{
        method: 'POST',
        headers : {
            'content-type': 'application/json' 
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
    .then(data =>{
        if(!data.success){
            alert(data.message);
            sessionStorage.removeItem('id');
            sessionStorage.removeItem('password');
            window.location.href = "/";
        }else{
            sessionStorage.setItem('otp', data.otp);
            sessionStorage.setItem('uid', data.user._id);
            sessionStorage.setItem('email', data.user.email);
            sessionStorage.setItem('name', data.user.name);
            alert(data.message);
        }
    }).catch(err=>{
        console.log(err.message);
    })
});

signupBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const sentOtp = sessionStorage.getItem('otp');
    const user = {
        'id' : sessionStorage.getItem('id'),
        'password' : sessionStorage.getItem('password'),
        'uid' : sessionStorage.getItem('uid'),
        'name' : sessionStorage.getItem('name'),
        'email' : sessionStorage.getItem('email')       
    };
    
    if(sentOtp===otpInput.value){
        fetch('/signinValidation',{
            method: 'POST',
            headers : {
                'content-type': 'application/json' 
            },
            body: JSON.stringify(user)
        }).then(res => res.json())
        .then(data =>{
            if(data.success){
                sessionStorage.removeItem('otp');
                sessionStorage.removeItem('id');
                sessionStorage.removeItem('password');
                sessionStorage.removeItem('uid');
                sessionStorage.removeItem('name');
                sessionStorage.removeItem('email');
                alert(data.message);
                window.location.href = "/";
            }else{
                alert(data.message);
                sessionStorage.removeItem('otp');
                sessionStorage.removeItem('id');
                sessionStorage.removeItem('password');
                sessionStorage.removeItem('uid');
                sessionStorage.removeItem('name');
                sessionStorage.removeItem('email');
                window.location.href = "/";
            }
        }).catch(err=>{
            console.log(err.message);
        })
    }else{
        alert("You have entered wrong OTP!! Please try again....");
        sessionStorage.removeItem('otp');
        sessionStorage.removeItem('id');
        sessionStorage.removeItem('password');
        sessionStorage.removeItem('uid');
        sessionStorage.removeItem('name');
        sessionStorage.removeItem('email');
        window.location.href = "/";
    }
});