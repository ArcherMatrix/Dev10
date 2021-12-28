//Free-hand syntax

let human = new Object;
human.name = "Sheldon";
human.age = 22;
human.sayHello = function()
{
    console.log(`${this.name} says 'Hello!'`);
};

human.sayHello();

//Object Intialization Syntax

let human2 =
{
    name:"Bobby",
    age: 21,
    sayHello: function()
    {
        console.log(`${this.name} says 'Wassup!'`);
    }
};

human2.sayHello();

//Associative Arrays

console.log(human.age);

//Comparing Objects

console.log(typeof(human)==typeof(human2));

console.log(human==human2);

console.log(human);

human2.sayBye = function()
{
    console.log(`${this.name} says 'Bye!'`);
}

console.log(typeof(human)==typeof(human2));

//JSON
let json_Sheldon = '{"name":"Sheldon","age":22}';
let human3 = JSON.parse(json_Sheldon);
console.log(human3);