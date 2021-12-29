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

function flipCoin(id)
{
    let choice = document.getElementById(id);
    //console.log(choice.innerText);

    let flip = Math.floor(Math.random()*2);
    let pick;
    switch(flip)
    {
        case 0:
            pick = "Heads";
            //console.log(`CPU chose:${result}`);
            break;
        case 1:
            pick = "Tails";
            //console.log(`CPU chose:${result}`);
            break;
        default:
            console.error("invalid number generation");
            break;
    }
    if(choice.innerText == pick)
    {
        //console.log("correct");
        resultParagraph("You are correct!");
    }
    else
    {
        //console.log("incorrect");
        resultParagraph("You are incorrect!");
    }
};
