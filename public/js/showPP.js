const image = document.querySelector('.image');

function ppDisplay(){
    fetch('/showPP')
    .then(res => res.json())
    .then(data => {
        if(data.success){
            image.src = `data:${data.memory.image.contentType};base64,${arrayBufferToBase64(data.memory.image.data.data)}`;   
        }
    })
    .catch(err => console.log(err.message));
}

function arrayBufferToBase64(buffer) {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
}

ppDisplay();