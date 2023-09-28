
// Function used to detect the button
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick); 
    
    function handleClick() {

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
        
    }
}

//Function used to detect keyboard sounds
document.addEventListener("keydown", handleKeyDown);

function handleKeyDown(event) {
    
    makeSound(event.key);
    
    buttonAnimation(event.key);
}

function makeSound(key){
    switch (key){
        case "w": 
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
        break;

        case "a": 
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
        break;

        case "s": 
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
        break;

        case "d": 
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
        break;

        case "j": 
            var snareSound = new Audio('./sounds/snare.mp3');
            snareSound.play();
        break;

        case "k": 
            var crashSound = new Audio('./sounds/crash.mp3');
            crashSound.play();
        break;

        case "l": 
            var kickSound = new Audio('./sounds/kick-bass.mp3');
            kickSound.play();
        break;

        default: console.log(buttonInnerHTML);
    }
}

function buttonAnimation(currentKey){
    
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 200);
}