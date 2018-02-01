var lines = 0;
var proCost = 10;
var manCost = 50;
var cofCost = 10;
var recCost = 10;
var synCost = 50;

function increaseLines() {
    //lines += numberProgammers*programmerIncrease;
    //lines += managerIncrease * numberManagers;
    //refresh();
}

//var timer = setInterval(increaseLines, speed);

function refresh() {
    //document.getElementById('speed').innerHTML = speed;
    document.getElementById('lines').innerHTML = lines;
    document.getElementById('pro cost').innerHTML = proCost;
    document.getElementById('man cost').innerHTML = manCost;
    document.getElementById('cof cost').innerHTML = cofCost;
    document.getElementById('rec cost').innerHTML = recCost;
    document.getElementById('syn cost').innerHTML = synCost;
}

refresh();