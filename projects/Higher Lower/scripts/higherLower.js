let guesses = [];
//Prompts user to enter the highest range
let max = prompt("Enter the highest value");
if(isNaN(max)||max===""||max === null)
{
    alert("Entered value is not a valid number.");
    location.reload();
}
else
{
    //Appends the upper range to the paragraph
    let instruction = document.querySelector(".instruction");
    let newP = document.createElement("p");
    newP.innerHTML = `Guess a number between 1 and ${max}.`; 
    instruction.appendChild(newP);
}

//Generates the random number between 1 and the submitted range
let rand = Math.floor(Math.random()*Number(max))+1;

console.log(rand);
//This function is called when the user clicks the "Guess" button.
function checkValue()
{
    //Gets the user's guess from the textbox
    let input = document.getElementById('guessBox').value;

    //Checks the entry to see if it is a number, empty string or null value
    if(isNaN(input)||input===""||input === null)
    {
        alert("Entered value is not a valid number.");
    }
    //Checks to see if the entry is in between the 1 and upper range
    else if(input < 1||input > Number(max))
    {
        alert("Entered value is not in range, try again.");
        console.log(`Your Guess: ${input}`);
        console.log(`The max: ${max}`);
    }
    //Checks to see if the entry has already been submitted
    else if(guesses.includes(input))
    {
        alert("Entered value has already been entered. Choose a different value.");
    }
    else
    {
        guesses.push(input);
        if(input==rand)
        {
            //console.log("You got it!");
            if (guesses.length==1)
            {
                resultParagraph(`You got it! It took you ${guesses.length} try and your guess was ${guesses}.`,1);
            }
            else
            {
                resultParagraph(`You got it! It took you ${guesses.length} tries and your guesses were ${guesses}.`,1);
            }
            
        }
        else if(input<rand)
        {
            //console.log("No, try a higher number.");
            resultParagraph("No, try a higher number.",2);
        }
        else if(input>rand)
        {
            //console.log("No, try a lower number.");
            resultParagraph("No, try a lower number.",3);
        }
        else
        {
            console.log("Error");
        }
    }
}
//This function adds the paragraph to the index.html with various colors depending on the guess result.
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
            break;
        default:
            break;
    }
    resultP.appendChild(newNode);
}