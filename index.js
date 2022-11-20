const timer = () => {

    let [day, hour, min, sec] = [
        document.getElementById('d'), 
        document.getElementById('h'),
        document.getElementById('m'), 
        document.getElementById('s')
    ]
    
    let date = new Date();
    let finalDate = new Date();
    
    finalDate.setDate(date.getDate() + 8)

    day.innerText = ('0' + (finalDate.getDate() - date.getDate())).slice(-2)
    hour.innerText = ('0' + finalDate.getHours()).slice(-2)
    min.innerText = ('0' + finalDate.getMinutes()).slice(-2)
    sec.innerText = ('0' + finalDate.getSeconds()).slice(-2)

    setInterval(() => {
        if(sec.innerText == 0) {
            sec.innerText = 59;
            if(min.innerText == 0){
                min.innerText = 59;
                if(hour.innerText == 0){
                    hour.innerText = 59;
                    if(day.innerText == 0){
                        day.innerText = 59;
                    }
                    else day.innerText = ('0' + --day.innerText).slice(-2)
                }
                else hour.innerText = ('0' + --hour.innerText).slice(-2)
            }
            else min.innerText = ('0' + --min.innerText).slice(-2)
        }
        else sec.innerText = ('0' + --sec.innerText).slice(-2)

    }, 1000);
}

timer();