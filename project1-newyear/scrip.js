const Days=document.getElementById('days')
const hours=document.getElementById('hours')
const minutes=document.getElementById('minutes')
const seconds=document.getElementById('seconds')



function timer()

{
const currentyear=new Date().getFullYear();
const newyear=new Date(`
     ${currentyear+1} `)
const currentDate=new Date();
const diff=newyear-currentDate
const days=Math.floor(diff/1000/60/60/24)
const h=Math.floor((diff/1000/60/60)%24)
const M=Math.floor((diff/1000/60)%60)
const s=Math.floor((diff/1000)%60)
Days.innerHTML=(days>10?days:'0'+days)+' :';
hours.innerHTML=(h<10?'0'+h:h)+' :';
minutes.innerHTML=(M>10?M:'0'+M)+' :';
seconds.innerHTML=(s>10?s:'0'+s);


//console.log(days+" "+h+" "+M+" "+s);
}
timer()
setInterval(timer,1000)
/*
1000ms=1s
60s=1m
60m=1hr
24hr=1day
*/