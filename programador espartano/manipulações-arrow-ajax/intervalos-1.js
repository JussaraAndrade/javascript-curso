let timer;

comecar = () => {
    timer = setInterval(showTime, 10);
}

parar = () => {
    clearInterval(timer);
}

showTime = () => {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let txt = h+':'+m+':'+s;
    
    document.querySelector('.demo').innerHTML = txt;
}






