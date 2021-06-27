let now;
let time;
let date;
let  utc;
let time_tz=new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


//function to update time after one second
setInterval(() => {
    time_tz.setSeconds( time_tz.getSeconds() + 1 );
    
    //to change hours, mins and seconds into minimum two digits
    formatted_hrs=time_tz.getHours().toLocaleString('en-US', {minimumIntegerDigits: 2,useGrouping: false});
    formatted_mins=time_tz.getMinutes().toLocaleString('en-US', {minimumIntegerDigits: 2,useGrouping: false});
    formatted_sec=time_tz.getSeconds().toLocaleString('en-US', {minimumIntegerDigits: 2,useGrouping: false}); 
    
    time=formatted_hrs+":"+formatted_mins+":"+formatted_sec;
    date=time_tz.toLocaleDateString(undefined,options);
    document.getElementById('time').innerHTML=time+" <br> "+date;
    }, 1000);




    //Function to convert current time to selected time zone.
function time_zone()
{
    let sel = document.getElementById("timeZone");
    tz = sel.value;
    getvalue = sel.options[sel.selectedIndex].text;
    document.getElementById('showTZ').innerHTML=getvalue;


    //to extract offset of selected time zone
    hr=tz.charAt(1)+tz.charAt(2);
    hr_min=parseInt(hr)*60;
    min=tz.charAt(4)+tz.charAt(5);
    total_min=parseInt(min)+hr_min;
    total_ms=total_min*60000;
    if(tz.charAt(0)=='-')
    total_ms=-1*total_ms;
    
    now = new Date();           //to get local time.
    utc = new Date(now.getTime() + now.getTimezoneOffset() * 60000);  // to convert local time to UTC.
    time_tz=new Date(utc.getTime()+total_ms); //to convert UTC to desired time zone.
    
}