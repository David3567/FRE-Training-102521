
document.getElementById("demo").innerHTML = "0h 0m 0s "; 
var resume=1;
var time=1;

  function myFunction(){
    var hour = document.getElementById("hours").value;
    var minutes = document.getElementById("minutes").value;
    var seconds = document.getElementById("seconds").value;

    var x = setInterval(function() {

      
        document.getElementById("demo").innerHTML = hour + "h "+minutes + "m " + seconds + "s "; 
        seconds--;
        if (seconds == 00) {
          minutes -=1;
          seconds = 60;
          if (minutes == 0) {
              hour-=1;
              minutes = 60;
          }
        }

        if (hour < 0||minutes<0||seconds<0) {
          clearInterval(x);
          document.getElementById("demo").innerHTML = "Timer END";
        }
        if(resume==0){
          document.getElementById("demo").innerHTML = hour + "h "+minutes + "m " + seconds + "s ";
          resume=1;
          document.getElementById("hours").value=hour;
          document.getElementById("minutes").value=minutes;
          document.getElementById("seconds").value=seconds;
          clearInterval(x);
        }
      },time);
  }


function Start_and_Pause() 
{
    var button1 = document.getElementById("myButton1");
    if (button1.value=="Start"){
      myFunction();
      button1.value = "Pause";
      button1.style.backgroundColor = "Red"
    }
    else {
      button1.value = "Start";
      resume=0;
      button1.style.backgroundColor = "Green"
    }
}

function reset(){
  var button2 = document.getElementById("myButton2");
  button2.style.backgroundColor = "Yellow"
  location.reload();
}




