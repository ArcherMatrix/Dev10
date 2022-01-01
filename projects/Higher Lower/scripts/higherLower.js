let rand = Math.floor(Math.random()*20)+1;

console.log(rand);

function checkValue()
{
    let input = document.getElementById('guessBox').value;

    if(input==rand)
    {
        console.log("You got it!");
    }
    else if(input<rand)
    {
        console.log("No, try a higher number.");
    }
    else if(input>rand)
    {
        console.log("No, try a lower number.");
    }
}