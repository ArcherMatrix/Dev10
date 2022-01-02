let guesses = [];
let max = prompt("Enter the highest value");
if(isNaN(max)||max===""||max === null)
{
    alert("Entered value is not a valid number.");
    location.reload();
}
else
{
    let instruction = document.querySelector(".instruction");
    let newP = document.createElement("p");
    newP.innerHTML = `Guess a number between 1 and ${max}.`; 
    instruction.appendChild(newP);
}


let rand = Math.floor(Math.random()*max)+1;

console.log(rand);

function checkValue()
{
    let input = document.getElementById('guessBox').value;

    if(isNaN(input)||input===""||input === null)
    {
        alert("Entered value is not a valid number.");
    }
    else if(input<0||input>max)
    {
        alert("Entered value is not in range, try again.");
    }
    else if(input==rand)
    {
        //console.log("You got it!");
        guesses.push(input);
        resultParagraph(`You got it! It took you ${guesses.length} tries and your guesses were ${guesses}.`,1);
    }
    else if(input<rand)
    {
        //console.log("No, try a higher number.");
        guesses.push(input);
        resultParagraph("No, try a higher number.",2);
    }
    else if(input>rand)
    {
        //console.log("No, try a lower number.");
        guesses.push(input);
        resultParagraph("No, try a lower number.",3);
    }
    else
    {
        console.log("Error");
    }
}

function resultParagraph(result,flag)
{
    let resultP = document.querySelector(".results");
    let oldP = document.getElementById("resultP");
    //console.log(oldP);
    if(oldP!=null)
    {
        resultP.removeChild(oldP);
    }
    let newNode =document.createElement("p");
    newNode.innerHTML = result;
    newNode.style.fontWeight = "900";
    newNode.id = "resultP";
    
    switch(flag)
    {
        case 1:
            newNode.style.color = "green";
            break;
        case 2:
            newNode.style.color = "blue";
            break;
        case 3:
            newNode.style.color = "red";

    }
    resultP.appendChild(newNode);
}