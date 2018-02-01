var lines = 0;
var speedOfTick = 1000;
var timer = setInterval(increaseLines, speedOfTick);

var costOfProgrammer = 10;
var costOfManager = 50;
var costOfCoffee = 10;
var costOfRecursion = 10;
var costOfSynergy = 50;
var costOfKeyboard = 500;

var numberOfProgammers = 0;
var numberOfManagers = 0;
var numberOfKeyboard = 0;

var numberOfCoffee = 0;
var numberOfSynergy = 0;
var numberOfKeyboard = 0;

var programmerIncrease = 1;
var managerIncrease = 10;
var keyboardIncrease = 100;

function refresh() {
    //document.getElementById('speed').innerHTML = speed;
    document.getElementById('lines').innerHTML = lines;
    document.getElementById('pro cost').innerHTML = "cost: " + costOfProgrammer;
    document.getElementById('man cost').innerHTML = "cost: " + costOfManager;
    document.getElementById('cof cost').innerHTML = "cost: " + costOfCoffee;
    document.getElementById('rec cost').innerHTML = "cost: " + costOfRecursion;
    document.getElementById('syn cost').innerHTML = "cost: " + costOfSynergy;
    document.getElementById('key cost').innerHTML = "cost: " + costOfKeyboard;
    
    document.getElementById('pro inc').innerHTML = "+" + numberOfProgammers*programmerIncrease;
    document.getElementById('man inc').innerHTML = "+" + managerIncrease * numberOfManagers;
    document.getElementById('key inc').innerHTML = "+" + Math.pow(numberOfKeyboard,keyboardIncrease);
}

//########### Workers ###########

function buyProgrammer() {
    if(lines >= costOfProgrammer)
    {
        lines -= costOfProgrammer;
        numberOfProgammers += 1;
        costOfProgrammer = Math.floor(10 * Math.pow(1.1,numberOfProgammers)); 
    }
    refresh();
}

function buyManager() {
    if(lines >= costOfManager)
    {
        lines -= costOfManager;
        numberOfManagers += 1;
        costOfManager = Math.floor(100 * Math.pow(1.5,numberOfManagers)); 
    }
    refresh();
}

function buyKeyboard() {
    if(lines >= costOfKeyboard)
    {
        lines -= costOfKeyboard;
        numberOfKeyboard += 1;
        costOfKeyboard = Math.floor(100 * Math.pow(2,numberOfKeyboard)); 
    }
    refresh();
}

//########### Upgrades ###########

function buyRecursion()
{
    if(lines >= costOfRecursion)
    {
        clearInterval(timer);
        lines -= costOfRecursion;
        speedOfTick = speedOfTick / 2;
        costOfRecursion = Math.floor(100 * Math.pow(1.4,1000/speedOfTick)); 
        var timer = setInterval(increaseLines, speedOfTick);
    }
    refresh();
}

function buyCoffee()
{
    if(lines >= costOfCoffee)
    {
        
        lines -= costOfCoffee;
        numberOfCoffee += 1;
        costOfCoffee = Math.floor(1*Math.pow(costOfCoffee,1.4));
        programmerIncrease += 1;
        
    }
    refresh();
}

function buySynergy()
{
    if(lines >= costOfSynergy)
    {
        lines -= costOfSynergy;
        numberOfSynergy += 1;
        costOfSynergy = Math.floor(Math.pow(costOfSynergy,1.1));
        managerIncrease *= 2;
        
    }
    refresh();
}

//########### General ###########

function writeCode()
{
    lines += 1;
    refresh();
}

function increaseLines()
{
    lines += numberOfProgammers*programmerIncrease;
    lines += managerIncrease * numberOfManagers;
    lines += Math.pow(numberOfKeyboard,keyboardIncrease);
    refresh();
}

refresh();