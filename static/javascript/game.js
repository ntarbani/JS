score=0;
cross=true;
audiogo = new Audio('/static/audio/kill.mp3');
audio=new Audio('/static/audio/background.mp3');
setTimeout(()=>{
    audio.play();
},1000);
audio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);



document.onkeydown=function(e)
{
    
    if(e.keyCode==38)
    {
        dragon=document.querySelector(".dragon");
        dragon.classList.add('animateDragon');
        setTimeout(()=>{
            dragon.classList.remove('animateDragon');
        },700);
    }
    if(e.keyCode==39)
    {
        dragon=document.querySelector(".dragon");
        dx=parseInt(window.getComputedStyle(dragon,null).getPropertyValue('left'));
        dragon.style.left=dx+15+"px";

    }
    if(e.keyCode==37)
    {
        dragon=document.querySelector(".dragon");
        dx=parseInt(window.getComputedStyle(dragon,null).getPropertyValue('left'));
        dragon.style.left=(dx-15)+"px";

    }
}
if(localStorage.getItem("maxScore")==null)
{
    maxScore=0;
    localStorage.setItem('maxScore',JSON.stringify(maxScore));
    
}
else
{
    maxScoreStr=localStorage.getItem("maxScore");
    maxScore=parseInt(maxScoreStr);
    scoreMax=document.getElementById('scoreMax');
    scoreMax.innerHTML="Your Max-Score: "+maxScore;
    console.log(maxScore);
}
setInterval(() => {
    dragon=document.querySelector(".dragon");
    enemy=document.querySelector(".enemy");
    gameOver=document.querySelector(".gameOver");
    dx=parseInt(window.getComputedStyle(dragon,null).getPropertyValue('left'));
    ex=parseInt(window.getComputedStyle(enemy,null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(dragon,null).getPropertyValue('top'));
    ey=parseInt(window.getComputedStyle(enemy,null).getPropertyValue('top'));
    dx1=dx+170;
    offsetX=dx1-ex;
    offsetY=Math.abs(dy-ey);
    //console.log(offsetX,offsetY)
    
    if((offsetX>40 && offsetX<200) && offsetY<35)
    {
        //console.log(dx1,ex);

        gameOver.style.visibility='visible';
        enemy.style.top=ey+"px";
        enemy.style.left=ex+"px";
        dragon.style.top=dy+"px";
        dragon.style.left=dx+"px";
        enemy.classList.remove('animateEnemy');
        aniDur=parseFloat(window.getComputedStyle(enemy,null).getPropertyValue('animation-duration'));
        //console.log(aniDur);
        audio.pause();
        audio.currentTime=0;
        audiogo.play();
        setTimeout(()=>{
            audiogo.pause();
            audiogo.currentTime = 0;
            enemy.style.bottom="225px";
            enemy.style.left="700px";
            dragon.style.bottom="218px";
            dragon.style.left="50px";
        },1200); 
        maxScoreStr=localStorage.getItem("maxScore");
        maxScore=parseInt(maxScoreStr);
        console.log(maxScore);
        if(maxScore<score)
        {
            maxScore=score;
            localStorage.setItem('maxScore',JSON.stringify(maxScore));
            scoreMax.innerHTML="Your Max-Score: "+maxScore;
        }
    }
    else{
        if((offsetX>40 && offsetX<200) && cross==true)
        {
            score+=1;
            scoreCont.innerHTML="Your score: "+score;
            cross=false;
            setTimeout(()=>{
                cross=true;
                aniDur=parseFloat(window.getComputedStyle(enemy,null).getPropertyValue('animation-duration'));
                if(aniDur>3.2)
                {
                    newDur=aniDur-0.075;
                    enemy.style.animationDuration=newDur+"s";
                }
            },1000)
            
        }
    }

}, 10);