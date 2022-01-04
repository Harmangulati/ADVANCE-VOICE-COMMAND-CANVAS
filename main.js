x = 0;
y = 0;
to_number="";
draw_apple = "";
screen_w=0;
screen_h=0;

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();
function preload(){
  loadImage(apple.png);
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {
to_number=Number(content);
if(Number.isInteger(to_number))
document.getElementById("status").innerHTML= "Started drawing apple";
recognition.start();
 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
 screen_w=window.innerWidth;
 screen_h=window.innerHeight;
 createCanvas(screen_w,screen_h-150);
 Canvas.position(0,150);
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  Math.floor(Math.random()*700)
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
