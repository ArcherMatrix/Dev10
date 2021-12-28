let human = new Object;
human.name = "Sheldon";
human.age = 22;
human.sayHello = function()
{
    console.log(`${this.name} says 'Hello!'`);
};

human.sayHello();