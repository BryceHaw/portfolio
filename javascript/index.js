//Get text
const text = document.querySelector("#welcomeText");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

//create a span for each letter of text
for(let i=0; i < splitText.length; i++){
    text.innerHTML += "<span id='textWelcome'>" + splitText[i] + "</span>";
}

//set character and interval
let char = 0;
let timer = setInterval(onTick, 50);

//create function to loop through each character
function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if(char === splitText.length){
        complete();
        return;
    }
}

//create function to stop after each letter is printed
function complete(){
    clearInterval(timer);
    timer = null;
}
