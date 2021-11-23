var dog=0;
var cat=0;
var cow=0;
var lion=0;


function startClassification(){
     navigator.mediaDevices.getUserMedia({audio:true});
     classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/5SsjqT0sp/model.json',modelReady); 
}


function modelReady(){
     classifier.classify(gotResults);
}

function gotResults(error,results){
     if(error){
       console.error(error);
     }
     else{
          console.log(results);
          random_number_r = Math.floor(Math.random()*255) + 1;
          random_number_g = Math.floor(Math.random()*255) + 1;
          random_number_b = Math.floor(Math.random()*255) + 1;

          document.getElementById("detected").innerHTML = "Detected Dog -"+dog+" ,Detected Cat - "+cat+" ,Detected Cow - "+cow+" ,Dectected Lion - "+lion;
          document.getElementById("detected").style.color = "rgb("+random_number_b+""+random_number_g+""+random_number_b+")";

          document.getElementById("result_label").innerHTML = "Detected Voice Is Of - " + results[0].label;
          document.getElementById("result_label").style.color="rgb("+random_number_b+""+random_number_g+""+random_number_b+")";

          img=document.getElementById("animal_images");

          if(results[0].label == "bark"){
               img.src="https://i.postimg.cc/Njdbgcvy/dog-dribbble.gif";
               dog = dog + 1;
          }

          else if(results[0].label =="meow"){
               img.src="https://i.postimg.cc/9fT4LdbW/kitten-clipart-1.jpg";
               cat = cat + 1;
          }

          else if(results[0].label=="mooing"){
               img.src="https://i.postimg.cc/Y28vDq6m/Bitter-Secondary-Horse-size-restricted.gif";
               cow = cow + 1;
          }

          else if(results[0].label =="roar"){
               img.src="https://i.postimg.cc/XvMqBZbt/lion-roar.gif";
               lion = lion + 1;
          }

          else if(results[0].label ==""){
               img.src="https://www.clipartmax.com/png/middle/14-144457_clip-art-ear.png";
          }
     }
}