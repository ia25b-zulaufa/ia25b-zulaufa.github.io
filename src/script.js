import {parse} from "./parser.js";
import {stringify} from "./parser.js";
//import * as fs from "node:fs";
//const fs = require('fs');
/*const filePath = './scores.csv';
const data = 'Hello from BrowserStack!';
fs.writeFileSync(filePath, data)*/

const rows = document.querySelectorAll(".row");
const time = document.querySelector(".time");
let letter = document.createElement("p");
const popUp = document.querySelector(".popUp");
const score = document.querySelector(".score");
const correct = document.querySelector(".correct");
const list = document.querySelector(".list");
const listItems = document.querySelectorAll(".list *");
const difficultySelector = document.querySelector(".difficultySelector");
difficultySelector.addEventListener("click", (e) => {
    if (e.target.value === "Easy"){
        speed = 1600;
        startSpeed = 1600;
    }else if (e.target.value === "Medium"){
        speed = 1000;
        startSpeed = 1000;
    }if (e.target.value === "Hard"){
        speed = 700;
        startSpeed = 700;
    }if (e.target.value === "Extreme"){
        speed = 550;
        startSpeed = 550;
    }if (e.target.value === "Impossible"){
        speed = 450;
        startSpeed = 450;
    }
    x = startSpeed / (seed - 200);
    s = speed * seed * 3.3;
});
const restartButton = document.querySelector("button");
restartButton.addEventListener("click", () => {
    restartButton.disabled = true;
    let j = 10;
    popUp.style.top = (window.innerHeight / 10) + window.innerHeight / 7 + "px";
    let interval = setInterval(() => {
        popUp.style.top = (window.innerHeight / j) + window.innerHeight / 7 + "px";
        j -= 0.05;
        if (j <= 1.5){
            popUp.style.visibility = "hidden";
            wrongLettersTyped = 0;
            lettersTyped = 0;
            g = 45;
            score.textContent = "Score: NaN";
            console.log("cleared");
            clearInterval(interval);
        }
    });
    startTime = new Date().getTime();
    resetBiggestPadding();

    /*rows.forEach((row) => {
        row.firstElementChild.i = window.innerWidth / 100 * Math.random() * 70;
        row.firstElementChild.textContent = " ";
    })*/

    rows.forEach((row) => {
        let k = 0;
        let interval1 = setInterval(() => {
            row.firstElementChild.style.filter = "blur(" + k + "px)";
            k += 0.5;
            if (k >= 100){
                row.firstElementChild.textContent = " ";
                row.firstElementChild.i = window.innerHeight / 100 * (Math.random() * 70 + 30);
                row.firstElementChild.style.filter = "none";
                gameOver = false;
                clearInterval(interval1);
            }
        }, 5);
    });
})
let seed = Math.random() * 1000;
let startSpeed = 1000;
let x = startSpeed / (seed - 200);
let c = false;
let speed = 1000;
let s = speed * seed * 3.3;
let lettersTyped = 0;
let g = 45;
let wrongLettersTyped = 0;
let keyPressed;
let gameOver = false;
let startTime;
let biggestTopPaddingA = 0;
let biggestTopPaddingB = 0;
let biggestTopPaddingC = 0;
let biggestTopPaddingD = 0;
let biggestTopPaddingE = 0;
let biggestTopPaddingF = 0;
let biggestTopPaddingG = 0;
let biggestTopPaddingH = 0;
let biggestTopPaddingI = 0;
let biggestTopPaddingJ = 0;
let biggestTopPaddingK = 0;
let biggestTopPaddingL = 0;
let biggestTopPaddingM = 0;
let biggestTopPaddingN = 0;
let biggestTopPaddingO = 0;
let biggestTopPaddingP = 0;
let biggestTopPaddingQ = 0;
let biggestTopPaddingR = 0;
let biggestTopPaddingS = 0;
let biggestTopPaddingT = 0;
let biggestTopPaddingU = 0;
let biggestTopPaddingV = 0;
let biggestTopPaddingW = 0;
let biggestTopPaddingX = 0;
let biggestTopPaddingY = 0;
let biggestTopPaddingZ = 0;
let userName;
let inputValue;
let lastInputValue;
const input = document.querySelector(".login");
const inputSelector = document.querySelector(".inputSelector");
inputSelector.addEventListener("click", (e)=>{
    if (e.target.value === "Login"){
        input.placeholder = "Enter Name";
    }else if (e.target.value === "Sign Up"){
        input.placeholder = "YourName;Password123";
    }
    console.log(e.target.value);
})
input.addEventListener("input", (e) => {
    inputValue = e.target.value;
})
input.addEventListener("keypress", (e) => {
    if (inputSelector.value === "Login"){
        if (e.key === "Enter"){
            input.value = "";
            fetch("src/users.csv")
                .then((res) => res.text())
                .then((text) => {
                    if (!(text.includes("#" + inputValue + ",") || input.placeholder === "Enter Password")){
                        input.placeholder = "Enter a valid Name";
                    }else {
                        if (input.placeholder === "Enter Password"){
                            if (text.includes(lastInputValue + "," + inputValue + "#")){
                                input.placeholder = "";
                                userName = lastInputValue;
                                console.log(userName)
                            }else {
                                input.placeholder = "Enter Name";
                            }
                        }else {
                            lastInputValue = inputValue;
                            input.placeholder = "Enter Password";
                        }
                    }
                })
                .catch((e) => console.error(e));
        }
    } else {
        if (e.key === "Enter") {
            input.value = "";
            input.placeholder = "YourName;Passwort123";
            if (!inputValue.includes(";")) {
                alert("Please Separate YourName and Password with ;");
            }else if (inputValue.includes(",") || inputValue.includes("#") || inputValue.toString().substring(inputValue.toString().indexOf(";") + 1, inputValue.toString().length).includes(";")) {
                alert("Please don't use , # or ; in your Name or Password");
            }else {
                let password = inputValue.toString().substring(inputValue.toString().indexOf(";") + 1, inputValue.toString().length);
                let name = inputValue.toString().substring(0, inputValue.toString().length - password.length - 1);
                console.log(password)
                console.log(name)
                fetch("users.csv")
                    .then((res) => res.text())
                    .then((text) => {
                        if (text.includes("#" + name + ",")){
                            alert("Name is already taken");
                        }

                    })
                    .catch((e) => console.error(e));
            }
        }
    }
})

document.addEventListener("keypress", (e) =>{
    keyPressed = e.key.toLowerCase();
})

gameOver = true;
difficultySelector.value = "Medium";

setInterval(() => {
    fetch("src/scores.csv")
        .then((res) => res.text())
        .then((text) => {
            let i = 0;
            for (const item of listItems){
                let array = parse(text);
                if (i >= 3){
                    for (let j = 0; j < array.length; j++){
                        i++;
                        if (userName === array[i][0]){
                            listItems.item(4).textContent = i + ": " + array[i][0] + " | Score: " + array[i][1];
                            console.log("succes");
                            break;
                        }else {
                            listItems.item(4).textContent = "No Data available";
                        }
                    }
                    console.log("fail");
                    break;
                }else {
                    i++;
                    item.textContent = i + ": " + array[i][0] + " | Score: " + array[i][1];
                }
            }
        })
        .catch((e) => console.error(e));

}, 500) //get names for scoreboard

rows.forEach((row) => {
    letter = document.createElement("p");
    letter.textContent = createRandomString(0);
    letter.i = window.innerHeight / 100 * (Math.random() * 70 + 40);
    row.appendChild(letter);
});

setInterval(() => {
    rows.forEach((row) => {
        if (row.firstElementChild.textContent === "A" && biggestTopPaddingA < row.firstElementChild.i){
            biggestTopPaddingA = row.firstElementChild.i;
        }else if (row.firstElementChild.textContent === "B" && biggestTopPaddingB < row.firstElementChild.i){
            biggestTopPaddingB = row.firstElementChild.i;
        }else if (row.firstElementChild.textContent === "C" && biggestTopPaddingC < row.firstElementChild.i){
            biggestTopPaddingC = row.firstElementChild.i;
        }else if (row.firstElementChild.textContent === "D" && biggestTopPaddingD < row.firstElementChild.i){
            biggestTopPaddingD = row.firstElementChild.i;
        }else if (row.firstElementChild.textContent === "E" && biggestTopPaddingE < row.firstElementChild.i){
            biggestTopPaddingE = row.firstElementChild.i;
        }else if (row.firstElementChild.textContent === "F" && biggestTopPaddingF < row.firstElementChild.i){
            biggestTopPaddingF = row.firstElementChild.i;
        }else if (row.firstElementChild.textContent === "G" && biggestTopPaddingG < row.firstElementChild.i){
            biggestTopPaddingG = row.firstElementChild.i;
        }else if (row.firstElementChild.textContent === "H" && biggestTopPaddingH < row.firstElementChild.i){
            biggestTopPaddingH = row.firstElementChild.i;
        }else if (row.firstElementChild.textContent === "I" && biggestTopPaddingI < row.firstElementChild.i){
            biggestTopPaddingI = row.firstElementChild.i;
        }else if (row.firstElementChild.textContent === "J" && biggestTopPaddingJ < row.firstElementChild.i){
            biggestTopPaddingJ = row.firstElementChild.i;
        }else if (row.firstElementChild.textContent === "K" && biggestTopPaddingK < row.firstElementChild.i){
            biggestTopPaddingK = row.firstElementChild.i;
        }else if (row.firstElementChild.textContent === "L" && biggestTopPaddingL < row.firstElementChild.i){
            biggestTopPaddingL = row.firstElementChild.i;
        }else if (row.firstElementChild.textContent === "M" && biggestTopPaddingM < row.firstElementChild.i){
            biggestTopPaddingM = row.firstElementChild.i;
        }else if (row.firstElementChild.textContent === "N" && biggestTopPaddingN < row.firstElementChild.i){
            biggestTopPaddingN = row.firstElementChild.i;
        }else if (row.firstElementChild.textContent === "O" && biggestTopPaddingO < row.firstElementChild.i){
            biggestTopPaddingO = row.firstElementChild.i;
        }else if (row.firstElementChild.textContent === "P" && biggestTopPaddingP < row.firstElementChild.i){
            biggestTopPaddingP = row.firstElementChild.i;
        }else if (row.firstElementChild.textContent === "Q" && biggestTopPaddingQ < row.firstElementChild.i){
            biggestTopPaddingQ = row.firstElementChild.i;
        }else if (row.firstElementChild.textContent === "R" && biggestTopPaddingR < row.firstElementChild.i){
            biggestTopPaddingR = row.firstElementChild.i;
        }else if (row.firstElementChild.textContent === "S" && biggestTopPaddingS < row.firstElementChild.i){
            biggestTopPaddingS = row.firstElementChild.i;
        }else if (row.firstElementChild.textContent === "T" && biggestTopPaddingT < row.firstElementChild.i){
            biggestTopPaddingT = row.firstElementChild.i;
        }else if (row.firstElementChild.textContent === "U" && biggestTopPaddingU < row.firstElementChild.i){
            biggestTopPaddingU = row.firstElementChild.i;
        }else if (row.firstElementChild.textContent === "V" && biggestTopPaddingV < row.firstElementChild.i){
            biggestTopPaddingV = row.firstElementChild.i;
        }else if (row.firstElementChild.textContent === "W" && biggestTopPaddingW < row.firstElementChild.i){
            biggestTopPaddingW = row.firstElementChild.i;
        }else if (row.firstElementChild.textContent === "X" && biggestTopPaddingX < row.firstElementChild.i){
            biggestTopPaddingX = row.firstElementChild.i;
        }else if (row.firstElementChild.textContent === "Y" && biggestTopPaddingY < row.firstElementChild.i){
            biggestTopPaddingY = row.firstElementChild.i;
        }else if (row.firstElementChild.textContent === "Z" && biggestTopPaddingZ < row.firstElementChild.i){
            biggestTopPaddingZ = row.firstElementChild.i;
        }
    })

    if (speed !== Math.round(s / seed / 3.3 * 100) / 100){
        speed = 20000;
        c = true;
    }

    rows.forEach((row) => {
        row.firstElementChild.style.marginTop = row.firstElementChild.i + "px";
        row.firstElementChild.i += window.innerHeight / speed;
        if (row.firstElementChild.i > window.innerHeight / 100 * 60){
            row.firstElementChild.style.color = "lightgray";
        }else if (row.firstElementChild.style.color !== "yellow"){
            row.firstElementChild.style.color = "white";
        }

        if (row.firstElementChild.textContent.toLowerCase() === keyPressed && keyPressed !== " " && isFirstLetter(row.firstElementChild) && !gameOver){
            let subtract = 0;
            if (row.firstElementChild.i < window.innerHeight / 100 * 60){
                subtract = Math.round(45 / (100 / window.innerHeight * row.firstElementChild.i) * 100) / 100;
                if (subtract > 10) {
                    subtract = 10;
                }
                row.firstElementChild.textContent = "+" + Math.round(subtract * 10) / 10;
                speed -= subtract;
                speed = Math.round(speed * 100) / 100
                s = speed * seed * 3.3;
                console.log(speed);
            }else {
                row.firstElementChild.textContent = "+0";
            }
            row.firstElementChild.style.color = "yellow";
            let y = 1;
            let p = 50;
            let interval = setInterval(() => {
                row.firstElementChild.style.opacity = y + "";
                row.firstElementChild.style.fontSize = p + "px";
                y -= 0.03;
                p -= 0.2;
            }, 10);
            setTimeout(() => {
                row.firstElementChild.textContent = " ";
                row.firstElementChild.style.color = "white";
                clearInterval(interval);
                row.firstElementChild.style.opacity = "1";
                row.firstElementChild.style.fontSize = "50px";
            }, 300)
            let i = Math.floor(Math.random() * rows.length);
            let j = 0;
            while (rows[i].firstElementChild.textContent !== " " && j < 20){
                i = Math.floor(Math.random() * (rows.length - 1));
                j++;
            }
            rows[i].firstElementChild.i = 0;
            rows[i].firstElementChild.textContent = createRandomString(1);
            lettersTyped++;
            g = lettersTyped / 234.3 * seed + 45;
            keyPressed = null;
            resetBiggestPadding();
        }else {
            let i = 0;
            rows.forEach((row) => {
                if (row.firstElementChild.textContent.toLowerCase() !== keyPressed && !(keyPressed === null || keyPressed === undefined)) {
                    i++;
                }
            })

            if (i === 10) {
                wrongLettersTyped++;
                console.log(wrongLettersTyped);
                keyPressed = null;
            }
        }

        if (row.firstElementChild.i > window.innerHeight){
            if (row.firstElementChild.textContent !== " " && !gameOver){
                if (score.textContent !== "Score: NaN" || lettersTyped !== Math.round((g - 45) / seed * 234.3) || startSpeed !== Math.round((seed - 200) * x) || c){
                    console.log(startSpeed + "=" + (seed - 200) * x + "| x=" + x);
                    console.log(score.textContent);
                    console.log(Math.round((g - 45) / seed * 234.3) + "=" + lettersTyped);
                    document.body.addEventListener("click", () => open("https://www.youtube.com/watch?v=2qBlE2-WL60", "_target"));
                    console.log("catched")
                }
                popUp.style.top = window.innerHeight + "px";
                popUp.style.visibility = "visible";
                let j = 1;
                let interval = setInterval(() => {
                    popUp.style.top = (window.innerHeight / j) + window.innerHeight / 3.45 + "px";
                    j -= 0.05;
                    if (j <= -25){
                        restartButton.disabled = false;
                        console.log("cleared");
                        clearInterval(interval);
                    }
                })
                score.textContent = "Score: " + Math.floor((((startSpeed - speed) + (lettersTyped / 20)) - (wrongLettersTyped / 3)) * 100) / 100;
                correct.textContent = "Letters Typed: " + lettersTyped;
                let seconds = Math.round((new Date().getTime() - startTime) / 1000);
                let minutes = 0;
                while (seconds >= 60){
                    minutes += 1;
                    seconds -= 60;
                }
                time.textContent = "Time: " + minutes + ":" + seconds;
                gameOver = true;
                lettersTyped = 0;
                wrongLettersTyped = 0;
                speed = startSpeed;
                s = speed * seed * 3.3;
            }
            row.firstElementChild.i = 0;
            row.firstElementChild.textContent = createRandomString(1);
        }
    });
}, 10); //logic for letters

function createRandomString(length) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXY       ";
    let result = "";
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

function isFirstLetter(element){
    if (element.textContent === "A" ){
        return element.i >= biggestTopPaddingA;
    }else if (element.textContent === "B" ){
        return element.i >= biggestTopPaddingB;
    }else if (element.textContent === "C" ){
        return element.i >= biggestTopPaddingC;
    }else if (element.textContent === "D" ){
        return element.i >= biggestTopPaddingD;
    }else if (element.textContent === "E" ){
        return element.i >= biggestTopPaddingE;
    }else if (element.textContent === "F" ){
        return element.i >= biggestTopPaddingF;
    }else if (element.textContent === "G" ){
        return element.i >= biggestTopPaddingG;
    }else if (element.textContent === "H" ){
        return element.i >= biggestTopPaddingH;
    }else if (element.textContent === "I" ){
        return element.i >= biggestTopPaddingI;
    }else if (element.textContent === "J" ){
        return element.i >= biggestTopPaddingJ;
    }else if (element.textContent === "K" ){
        return element.i >= biggestTopPaddingK;
    }else if (element.textContent === "L" ){
        return element.i >= biggestTopPaddingL;
    }else if (element.textContent === "M" ){
        return element.i >= biggestTopPaddingM;
    }else if (element.textContent === "N" ){
        return element.i >= biggestTopPaddingN;
    }else if (element.textContent === "O" ){
        return element.i >= biggestTopPaddingO;
    }else if (element.textContent === "P" ){
        return element.i >= biggestTopPaddingP;
    }else if (element.textContent === "Q" ){
        return element.i >= biggestTopPaddingQ;
    }else if (element.textContent === "R" ){
        return element.i >= biggestTopPaddingR;
    }else if (element.textContent === "S" ){
        return element.i >= biggestTopPaddingS;
    }else if (element.textContent === "T" ){
        return element.i >= biggestTopPaddingT;
    }else if (element.textContent === "U" ){
        return element.i >= biggestTopPaddingU;
    }else if (element.textContent === "V" ){
        return element.i >= biggestTopPaddingV;
    }else if (element.textContent === "W" ){
        return element.i >= biggestTopPaddingW;
    }else if (element.textContent === "X" ){
        return element.i >= biggestTopPaddingX;
    }else if (element.textContent === "Y" ){
        return element.i >= biggestTopPaddingY;
    }else if (element.textContent === "Z" ){
        return element.i >= biggestTopPaddingZ;
    }else {
        return true;
    }
}

function resetBiggestPadding(){
    biggestTopPaddingA = 0;
    biggestTopPaddingB = 0;
    biggestTopPaddingC = 0;
    biggestTopPaddingD = 0;
    biggestTopPaddingE = 0;
    biggestTopPaddingF = 0;
    biggestTopPaddingG = 0;
    biggestTopPaddingH = 0;
    biggestTopPaddingI = 0;
    biggestTopPaddingJ = 0;
    biggestTopPaddingK = 0;
    biggestTopPaddingL = 0;
    biggestTopPaddingM = 0;
    biggestTopPaddingN = 0;
    biggestTopPaddingO = 0;
    biggestTopPaddingP = 0;
    biggestTopPaddingQ = 0;
    biggestTopPaddingR = 0;
    biggestTopPaddingS = 0;
    biggestTopPaddingT = 0;
    biggestTopPaddingU = 0;
    biggestTopPaddingV = 0;
    biggestTopPaddingW = 0;
    biggestTopPaddingX = 0;
    biggestTopPaddingY = 0;
    biggestTopPaddingZ = 0;
}

