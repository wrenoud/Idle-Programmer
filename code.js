var lines=0;
var proCost=10;
var manCost=50;
var cofCost=10;
var recCost=10;
var synCost=50;
var numberProgammers = 0;
var numberManagers = 0;
var speed = 1000;
var numberCoffee = 0;
var numberSynergy = 0;
var programmerIncrease = 1;
var managerIncrease = 10;



var timer = setInterval(increaseLines, speed);

function refresh()
{
    //document.getElementById('speed').innerHTML = speed;
    document.getElementById('lines').innerHTML = lines;
    document.getElementById('pro cost').innerHTML = proCost;
    document.getElementById('man cost').innerHTML = manCost;
    document.getElementById('cof cost').innerHTML = cofCost;
    document.getElementById('rec cost').innerHTML = recCost;
    document.getElementById('syn cost').innerHTML = synCost;
}

function buyProgrammer()
{
    if(lines >= proCost)
    {
        lines -= proCost;
        numberProgammers += 1;
        refresh()
        proCost = Math.floor(10 * Math.pow(1.1,numberProgammers)); 
    }
    refresh();
}

function buyCoffee()
{
    if(lines >= cofCost)
    {
        
        lines -= cofCost;
        numberCoffee += 1;
        cofCost = Math.floor(1*Math.pow(cofCost,1.4));
        programmerIncrease += 1;
        
    }
    refresh();
}


function buySynergy()
{
    if(lines >= synCost)
    {
        lines -= synCost;
        numberSynergy += 1;
        synCost = Math.floor(Math.pow(synCost,1.1));
        managerIncrease *= 2;
        
    }
    refresh();
}

function buyRecursion()
{
    if(lines >= recCost)
    {
        clearInterval(timer);
        lines -= recCost;
        speed = speed / 2;
        refresh()
        recCost = Math.floor(100 * Math.pow(1.4,1000/speed)); 
        var timer = setInterval(increaseLines, speed);
    }
    refresh();
}

function buyManager()
{
    if(lines >= manCost)
    {
        lines -= manCost;
        numberManagers += 1;
        refresh()
        manCost = Math.floor(100 * Math.pow(1.5,numberManagers)); 
    }
    refresh();
}

function writeCode()
{
    lines += 1;
    refresh();
}



function increaseLines()
{
    lines += numberProgammers*programmerIncrease;
    lines += managerIncrease * numberManagers;
    refresh();
}

refresh();

