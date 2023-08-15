const updateStatusBtn = document.querySelector('.updateSearch');
const section5 = document.querySelector('.section5');

updateStatusBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    const token = document.querySelector('.tokenNum').value;
    console.log(token);
    
});

function updateStatus(){
    const updateToken = document.querySelector('.updateBtn').id;
    const status = document.querySelector('.board').value;

    console.log(updateToken,status);

    
};