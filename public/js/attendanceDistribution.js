const distributionBtn = document.querySelector('.attendanceSearch');


distributionBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const date = document.querySelector('.date').value;
    const game = document.querySelector('.board').value;

    console.log(date,game);
    //Write ur POST method fetch api code here
    
})