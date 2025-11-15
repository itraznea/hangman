let theWord = document.getElementById("theword");
let theImage = document.getElementById("dynamicimg");
let allKeyboardButtons = document.querySelectorAll('.keyboard button');
let firstChar = randomWord[0];
let lastChar = randomWord[randomWord.length - 1];
let tempWord = "";
let mistakes = 0;
let firstCharButton = document.getElementById(firstChar);
let lastCharButton = document.getElementById(lastChar);

function initializeWord(firstChar, lastChar){
    for (let i = 0; i < randomWord.length; i++){
        if(randomWord[i] == firstChar || randomWord[i] == lastChar)
            tempWord += randomWord[i];
        else
            tempWord += ".";
    }
    theWord.innerText = tempWord;
    disableButton(firstCharButton);
    disableButton(lastCharButton);
}

function restartGame(){
    const currentPath = window.location.pathname;
    if (currentPath === '/easy'){
        window.location.href = '/easy';
    } else if (currentPath === '/medium'){
        window.location.href = '/medium';
    } else if (currentPath === '/hard'){
        window.location.href = '/hard';
    } else {
        window.location.href = '/';
    }
}

function changeDifficulty(){
    window.location.href = '/';
}

function updateImage(mistakes){
    if(mistakes == 0)
        theImage.src = "/static/img/structure.png";
    else if(mistakes == 1)
        theImage.src = "/static/img/head.png";
    else if(mistakes == 2)
        theImage.src = "/static/img/neck.png";
    else if(mistakes == 3)
        theImage.src = "/static/img/body.png";
    else if(mistakes == 4)
        theImage.src = "/static/img/hand1.png";
    else if(mistakes == 5)
        theImage.src = "/static/img/hand2.png";
    else if(mistakes == 6)
        theImage.src = "/static/img/leg1.png";
    else if(mistakes == 7)
        theImage.src = "/static/img/leg2.png";
    else if(mistakes == 8)
    {
        theImage.src = "/static/img/game_lost.png";
        allKeyboardButtons.forEach(button => disableButton(button));
        theWord.innerText = randomWord;
    }
}

function disableButton(button){
    button.disabled = true;
    button.style.backgroundColor = "gray";
    button.style.cursor = "not-allowed";
}

function congratulations(tempWord){
    if (randomWord === tempWord)
    {
        theImage.src = "/static/img/game_won.png";
        allKeyboardButtons.forEach(button => disableButton(button));
    }
        
}

function checkLetter(letter, button){
    let updateWord = "";
    let foundLetter = false;
    for (let i = 0; i < randomWord.length; i++){
        if(randomWord[i] == letter)
        {
            updateWord += letter;
            foundLetter = true;
        }
        else if(tempWord[i] != '.')
            updateWord += tempWord[i];
        else
            updateWord += '.';
    }
    tempWord = updateWord;
    theWord.innerText = updateWord;
    if(!foundLetter)
        mistakes++;
    updateImage(mistakes);
    disableButton(button);
    congratulations(tempWord)
}

initializeWord(firstChar, lastChar);