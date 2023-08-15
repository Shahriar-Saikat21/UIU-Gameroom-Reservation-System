const canecelBtns = document.querySelectorAll('.cancelBtn');

for(let i of canecelBtns){
    i.addEventListener('click', (e) => {
        e.preventDefault();
    
        const cancelId = i.id;
    
        console.log(cancelId);
        //Here u have to write the fetch api func to delete the reservation (GET method)
    });
}
