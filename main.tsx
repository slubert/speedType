import "./styles/cssReaset.scss";
import "./styles/style.scss";

const outputTextElement = document.getElementById("output");

let words:Array<string> = ["KAPPA", "OUTDATED", "POGCHAMP", "OVERRATED", "LONG", "HAVE", "WE", "WAITED", "NOW", "WE", "JEBAITED" ]
let nextLetter:number = 0
let nextWord:number = 0
let done:boolean = false
let timeStart
let timeFin
let youTime:number 

window.addEventListener('keydown', onkeydown)

render()

function onkeydown(KeyPressed){
    if(nextLetter == 0 && nextWord == 0){
        timeStart = new Date();
        console.log("timeStart")
    }

    let letterPressed = KeyPressed.key.toUpperCase();

    if(letterPressed == words[nextWord].charAt(nextLetter)){
        
        nextLetter ++
        
        if(nextLetter == words[nextWord].length){
            nextWord ++
            nextLetter = 0
        }

        if(nextWord == words.length){
            window.removeEventListener('keydown', onkeydown)
            done = true
            timeFin = new Date();
            console.log("time stop")
            youTime = (timeFin.getTime() - timeStart.getTime()) / 1000

        }

        render()
    }
    
}

function render(){
    outputTextElement.innerHTML = " "
    if(done == true){
        outputTextElement.innerHTML = "your time was: " + youTime + "s"
    }
    else{
        for(let i:number = 0; i < words[nextWord].length; i++){   
            if(i < nextLetter){
                outputTextElement.innerHTML += '<span class="writen">' + words[nextWord].charAt(i) + '</span>'
            }
            else{
                outputTextElement.innerHTML +='<span>' + words[nextWord].charAt(i) + '</span>'
            }
        }
    }
}

