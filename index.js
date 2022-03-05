for(var i=0;i<document.querySelectorAll("button.drum").length;i++){

document.querySelectorAll("button")[i].addEventListener("click", function () {
   var kit= this.innerText;
    this.style.color="white";
    checkKey(kit);
    buttonAnimation(kit);        
    });
}
document.addEventListener("keydown", function (event) {
    checkKey(event.key);
    buttonAnimation(event.key);
});
function checkKey(keyboard){
    switch (keyboard){
        case 'w': 
        var tom1= new Audio("./sounds/tom-1.mp3")
        tom1.play();
        break;
        case 'a': 
        var tom2= new Audio("./sounds/tom-2.mp3")
        tom2.play();
        break;
        case 's': 
        var tom3= new Audio("./sounds/tom-3.mp3")
        tom3.play();
        break;
        case 'd': 
        var tom4 = new Audio("./sounds/tom-4.mp3")
        tom4.play();
        break;
        case 'j': 
        var snare= new Audio("./sounds/snare.mp3")
        snare.play();
        break;
        case 'k': 
        var crash= new Audio("./sounds/crash.mp3")
        crash.play();
        break;
        case 'l': 
        var kickBass= new Audio("./sounds/kick-bass.mp3")
        kickBass.play();
        break;
}}
function buttonAnimation(button){
    document.querySelector("."+button).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+button).classList.remove("pressed");
    }, 1000);
}