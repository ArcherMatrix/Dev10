function flipCoin(id)
{
    let choice = document.getElementById(id);
    //console.log(choice.innerText);

    let result = Math.floor(Math.random()*2);
    let pick;
    switch(result)
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
        let resultP = document.querySelector(".results");
        let newNode =document.createElement("p");
        newNode.innerHTML = "You are correct!";
        resultP.appendChild(newNode);
    }
    else
    {
        //console.log("incorrect");
        let resultP = document.querySelector(".results");
        let newNode =document.createElement("p");
        newNode.innerHTML = "You are incorrect!";
        resultP.appendChild(newNode);
    }
};
