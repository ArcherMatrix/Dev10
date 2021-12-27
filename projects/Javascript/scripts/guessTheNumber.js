let a = Math.floor(Math.random()*10)+1;

let input = window.prompt("Guess the number! (1-10)");

input = Number(input);

if(a === input)
{
    console.log("Correct");
}
else
{
    console.log(`Incorrect: Actual Number is ${a}`);
}
