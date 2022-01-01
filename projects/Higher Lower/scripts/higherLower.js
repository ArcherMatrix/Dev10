let rand = Math.floor(Math.random()*20)+1;

console.log(rand);

function checkValue()
{
    let input = document.getElementById('guessBox').value;

    if(input==rand)
    {
        //console.log("You got it!");
        resultParagraph("You got it!",1);
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