const time=document.querySelector('.clock');
const frame=document.querySelector('.frame');
const Am=document.createElement('p')
   frame.appendChild(Am)
    Am.innerText='PM'
function changes()
{
    const hour=new Date().getHours();
    const minutes=new Date().getMinutes();
    const seconds=new Date().getSeconds();
    if(hour==12)
        hour= hour+12;
    time.innerHTML=(hour)+" : "+(minutes<10?'0'+minutes:minutes)+" : "+(seconds<10?'0'+seconds:seconds);
    
   if(hour<12)
   Am.innerText='AM'
    

   
   


    

}
changes()
setInterval(changes,1000)