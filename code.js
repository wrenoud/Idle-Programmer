var lines;

try {
    lines = getCookie("lines2");
}
catch(err) {
    lines = 0;    
}

var speedOfTick = 1000;
var timer = setInterval(increaseLines, speedOfTick);

class Upgrade {
  constructor(id, base_cost, cost_increase_rate, effect, count=0){
    this.id = id;
    this.base_cost = base_cost;
    this.cost_increase_rate = cost_increase_rate;
    this.loc_effect = effect;
    this.count = count;
  };
  
  cost(){
    return this.base_cost * Math.power(1 + this.cost_increase_rate, this.count);
  }
}

var costOfProgrammer = 10;
var costOfManager = 1500;
var costOfCoffee = 25;
var costOfRecursion = 9999999;
var costOfSynergy = 60000;
var costOfKeyboard = 180000;

var numberOfProgammers = 0;
var numberOfManagers = 0;
var numberOfKeyboard = 0;

var numberOfCoffee = 0;
var numberOfSynergy = 0;
var numberOfKeyboard = 0;

var programmerIncrease = 1;
var managerIncrease = 10;
var keyboardIncrease = 100;

var coffee = new Upgrade("cof cost", 25, 1, "+1");
var synergy = new Upgrade("syn cost", 60000, 1, "*2");
var recursion = new Upgrade("rec cost", 9999999, 1, "*2");

var numeral = numeral;

function format(number)
{
  if(number < 1000)
    return number;
  else
    return numeral(number).format('0.0 a').trim();
}

function format_payout(count, increase)
{
  return "+" + format(increase) + " LOC/s (total: " + format((count * increase)) + ")";
}

function get_increase()
{
  return numberOfProgammers * programmerIncrease
    + numberOfManagers * managerIncrease
    + numberOfKeyboard * keyboardIncrease;
}

function refresh_loc()
{
      document.getElementById('lines').innerHTML = format(lines) + " LOC";
}

function refresh() {
   refresh_loc();
    document.getElementById('locps').innerHTML = "(+" + format(get_increase()) + " LOC/s)";

    document.getElementById('pro cost').innerHTML = "cost: " + format(costOfProgrammer) + " (" + format(numberOfProgammers) + ")";
    document.getElementById('man cost').innerHTML = "cost: " + format(costOfManager) + " (" + format(numberOfManagers) + ")";
    document.getElementById('cof cost').innerHTML = "cost: " + format(costOfCoffee) + " (" + format(numberOfCoffee) + ")";
    document.getElementById('rec cost').innerHTML = "cost: " + format(costOfRecursion);
    document.getElementById('syn cost').innerHTML = "cost: " + format(costOfSynergy) + " (" + format(numberOfSynergy) + ")";
    document.getElementById('key cost').innerHTML = "cost: " + format(costOfKeyboard) + " (" + format(numberOfKeyboard) + ")";
    
    document.getElementById('pro inc').innerHTML = format_payout(numberOfProgammers, programmerIncrease);
    document.getElementById('man inc').innerHTML = format_payout(numberOfManagers, managerIncrease);
    document.getElementById('key inc').innerHTML = format_payout(numberOfKeyboard, keyboardIncrease);
    
    setCookie("lines2", format(lines));
}

//########### Workers ###########

function buyProgrammer() {
    if (lines >= costOfProgrammer) {
        lines -= costOfProgrammer;
        numberOfProgammers += 1;
        costOfProgrammer = Math.floor(10 * Math.pow(1.1, numberOfProgammers));
    }
    refresh();
}

function buyManager() {
    if (lines >= costOfManager) {
        lines -= costOfManager;
        numberOfManagers += 1;
        costOfManager = Math.floor(100 * Math.pow(1.5, numberOfManagers));
    }
    refresh();
}

function buyKeyboard() {
    if (lines >= costOfKeyboard) {
        lines -= costOfKeyboard;
        numberOfKeyboard += 1;
        costOfKeyboard = Math.floor(100 * Math.pow(2, numberOfKeyboard));
    }
    refresh();
}

//########### Upgrades ###########

function buyRecursion() {
    if (lines >= costOfRecursion) {
        clearInterval(timer);
        lines -= costOfRecursion;
        speedOfTick = speedOfTick / 2;
        costOfRecursion = Math.floor(100 * Math.pow(1.4, 1000 / speedOfTick));
        timer = setInterval(increaseLines, speedOfTick);
    }
    refresh();
}

function buyCoffee() {
    if (lines >= costOfCoffee) {
        
        lines -= costOfCoffee;
        numberOfCoffee += 1;
        costOfCoffee = Math.floor(Math.pow(costOfCoffee, 1.4));
        programmerIncrease += 1;
        
    }
    refresh();
}

function buySynergy() {
    if (lines >= costOfSynergy) {
        lines -= costOfSynergy;
        numberOfSynergy += 1;
        costOfSynergy = Math.floor(Math.pow(costOfSynergy, 1.1));
        managerIncrease *= 2;
        
    }
    refresh();
}

//########### General ###########

function writeCode() {
  lines += 1;
  refresh_loc();
}

function increaseLines() {
  lines += get_increase();
  refresh_loc();
}

refresh();

//########### Cookies ###########

function setCookie(name, value) {
    document.cookie = name + "=" + escape(value) + "; path=/;";
}

function getCookie(name)
{
    var re = new RegExp(name + "=([^;]+)");
    var value = re.exec(document.cookie);
    return (value != null) ? unescape(value[1]) : null;
}