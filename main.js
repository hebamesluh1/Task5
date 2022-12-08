// variables 
let timer = document.querySelector('.timer');
let timerCounter = document.querySelector('#timer-counter')
let stopwatch = document.querySelector('.stopwatch');
let stopCounter = document.querySelector('.stop-watch-counter');
let startBtn =document.querySelector('#start');
let resetBtn = document.querySelector('#reset');
let timeline = document.querySelector('.timeline');

//time stopwatch
let sec = document.querySelector('.second');
let m_sec=document.querySelector('.m-second');
let min=document.querySelector('.minute');
let hr=document.querySelector('.hour');
let m_second=00;
let second=00;
let minute = 00;
let hours = 00;
let interval;
let timeOf;




// timer and stopwatch interface
stopwatch.addEventListener('click',()=>{
    stopwatch.classList.add('active');
    timer.classList.remove('active');
    stopCounter.style.display='block';
    timerCounter.style.display='none';
});
timer.addEventListener('click',()=>{
    stopwatch.classList.remove('active');
    timer.classList.add('active');
    stopCounter.style.display='none';
    timerCounter.style.display='block';

});



//when click on start button 
startBtn.addEventListener('click',()=>{
    if(startBtn.textContent === 'start'){
        //stopwatch work
        if(stopCounter.style.display == 'block' ){
            clearInterval(interval);
            interval = setInterval(startTimer, 10);
        }else{
            clearInterval(timeOf);
            timeOf = setInterval(updateCountdown,1000);
        }
            startBtn.textContent='stop';
    }else{
        clearInterval(interval);
        clearInterval(timeOf);
        startBtn.textContent='start';
    }

});




//start time function
function startTimer(){
    m_second++;
    if(m_second<=9){
        m_sec.innerHTML ="0"+m_second;
    }
    if(m_second>9)
        m_sec.innerHTML = m_second;
    if(m_second>99){
        console.log('second');
        second++;
        sec.innerHTML=second;
        m_second=0;
        m_sec.innerHTML="0"+0;
    }
    if(second>=59){
        console.log('minute');
        minute++;
        document.querySelector('.min').style.display='inline-block';
        min.innerHTML=minute;
        m_second=0;
        m_sec.innerHTML="0"+0;
        second=0;
        sec.innerHTML=0;
    }
    if(minute>60){
        console.log('hour');
        hours++;
        document.querySelector('.hr').style.display='inline-block';
        hr.innerHTML=hours;
        m_second=0;
        m_sec.innerHTML="0"+0;
        second=0;
        sec.innerHTML=0;
        minute=0;
        min.innerHTML=0;
    }
}




//counterDown 
const startMin = 5;
let time = startMin *60;
const timeMin = document.querySelector('.time_minutes');
const timeSec = document.querySelector('.time_sec');
function updateCountdown(){
    const minutes = Math.floor(time/60);
    let sec =time% 60;
    sec= sec<10?'0'+sec:sec;
    timeMin.innerHTML = minutes;
    timeSec.innerHTML = sec;
    time--;
    let timeLineWidth = timeline.offsetWidth;
    timeLineWidth = timeLineWidth+2.03;
    timeline.style.width = `${timeLineWidth}px`
}






// when click on reset button
resetBtn.addEventListener('click',()=>{

    //reset stopwatch counter 
        clearInterval(interval);
        let m_second=00;
        let second=00;
        let minute=00;
        let hours =00;
        m_sec.innerHTML='0'+m_second;
        sec.innerHTML=second;
        min.innerHTML=minute;
        hr.innerHTML=hours;
        document.querySelector('.hr').style.display='none';
        document.querySelector('.min').style.display='none';

    //timeline reset
    timeline.style.width = 0;
    //reset timer counter 

    // clearInterval(timeOf);
    //     timeMin.innerHTML = 5;
    //     timeSec.innerHTML = '0'+second;
});


//expand window
    let expand = document.querySelector('.fa-expand');
    expand.addEventListener('click',()=>{
        document.querySelector('main').classList.toggle('expand');
    });