let rand = Math.floor(Math.random()*20)+1;

console.log(rand);

function checkValue()
{
    let input = document.getElementById('guessBox').value;

    if(input==rand)
    {
        //console.log("You got it!");
        resultParagraph("You got it!");
    }
    else if(input<rand)
    {
        //console.log("No, try a higher number.");
        resultParagraph("No, try a higher number.");
    }
    else if(input>rand)
    {
        //console.log("No, try a lower number.");
        resultParagraph("No, try a lower number.");
    }
}
function resultParagraph(result)
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
    newNode.id = "resultP";
    resultP.appendChild(newNode);
}