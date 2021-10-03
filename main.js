// Your Code Here!

// Create a function that "rolls a die" and give you a number 1-6.
function rollDie() {
  i = Math.floor(Math.random() * 6 + 1);
  //console.log(i); // For testing function to confirm 1-6
  return i;
}

//rollDie();

// Then roll two dice and add them together.

// https://www.w3schools.com/jsref/jsref_random.asp Thanks for the syntax help!

function rollDice() {
  let rollOne = rollDie(); //Math.floor(Math.random() * 6 + 1);
  let rollTwo = rollDie(); //Math.floor(Math.random() * 6 + 1);
  let result = rollOne + rollTwo;
  console.log(result);
  return result;
}

//rollDice(); //test to see if function works

// Do that 1000 times and create an array of how frequently each result occurrs.

let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let largeNum = 0;

function rollOfDice() {
  for (r = 1; r <= 1000; r++) {
    let rollOfDice = rollDice();
    //rollDice(); not needed because line below is rolling the function for dice
    count[rollOfDice] = count[rollOfDice] + 1;
    if (count[rollOfDice] > largeNum) {
      largeNum = count[rollOfDice];
    }
  }
  console.log(count);
  let tally = document.createElement("p");
  let total = document.createTextNode(count);
  document.body.prepend(tally);
  tally.innerHTML =
    "<strong>Output</strong>: " +
    "<br>" +
    "2: " +
    count[2] +
    "<br>" +
    "3: " +
    count[3] +
    "<br>" +
    "4: " +
    count[4] +
    "<br>" +
    "5: " +
    count[5] +
    "<br>" +
    "6: " +
    count[6] +
    "<br>" +
    "7: " +
    count[7] +
    "<br>" +
    "8: " +
    count[8] +
    "<br>" +
    "9: " +
    count[9] +
    "<br>" +
    "10: " +
    count[10] +
    "<br>" +
    "11: " +
    count[11] +
    "<br>" +
    "12: " +
    count[12] +
    "<br>" +
    "Array Outout: ";
  tally.append(total); //no longer needed

  /*let val = document.createElement("p");
  let ue = document.createTextNode(val);
  document.body.prepend(val);
  val.innerHTML = "Number: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12";
  document.querySelector("tally");
  tally.classList.add("box1");*/

  let graph2 = document.querySelector(".two");
  graph2.style.backgroundColor = "red";
  let wPer2 = (graph2.innerText =
    Math.floor((count[2] / largeNum) * 100) + "%");
  graph2.style.width = wPer2;
  graph2.style.color = "black";

  let graph3 = document.querySelector(".three");
  graph3.style.backgroundColor = "darkmagenta";
  let wPer3 = (graph3.innerText =
    Math.floor((count[3] / largeNum) * 100) + "%");
  graph3.style.width = wPer3;
  graph3.style.color = "black";

  let graph4 = document.querySelector(".four");
  graph4.style.backgroundColor = "orange";
  let wPer4 = (graph4.innerText =
    Math.floor((count[4] / largeNum) * 100) + "%");
  graph4.style.width = wPer4;
  graph4.style.color = "black";

  let graph5 = document.querySelector(".five");
  graph5.style.backgroundColor = "green";
  let wPer5 = (graph5.innerText =
    Math.floor((count[5] / largeNum) * 100) + "%");
  graph5.style.width = wPer5;
  graph5.style.color = "black";

  let graph6 = document.querySelector(".six");
  graph6.style.backgroundColor = "aqua";
  let wPer6 = (graph6.innerText =
    Math.floor((count[6] / largeNum) * 100) + "%");
  graph6.style.width = wPer6;
  graph6.style.color = "black";

  let graph7 = document.querySelector(".seven");
  graph7.style.backgroundColor = "yellowgreen";
  let wPer7 = Math.floor(
    (graph7.innerText = (count[7] / largeNum) * 100) + "%"
  );
  graph7.style.width = wPer7;
  graph7.style.color = "black";

  let graph8 = document.querySelector(".eight");
  graph8.style.backgroundColor = "pink";
  let wPer8 = (graph8.innerText =
    Math.floor((count[8] / largeNum) * 100) + "%");
  graph8.style.width = wPer8;
  graph8.style.color = "black";

  let graph9 = document.querySelector(".nine");
  graph9.style.backgroundColor = "gold";
  let wPer9 = (graph9.innerText =
    Math.floor((count[9] / largeNum) * 100) + "%");
  graph9.style.width = wPer9;
  graph9.style.color = "black";

  let graph10 = document.querySelector(".ten");
  graph10.style.backgroundColor = "yellow";
  let wPer10 = (graph10.innerText =
    Math.floor((count[10] / largeNum) * 100) + "%");
  graph10.style.width = wPer10;
  graph10.style.color = "black";

  let graph11 = document.querySelector(".eleven");
  graph11.style.backgroundColor = "silver";
  let wPer11 = (graph11.innerText =
    Math.floor((count[11] / largeNum) * 100) + "%");
  graph11.style.width = wPer11;
  graph11.style.color = "black";

  let graph12 = document.querySelector(".pie");
  graph12.style.backgroundColor = "violet";
  let wPer12 = (graph12.innerText =
    Math.floor((count[12] / largeNum) * 100) + "%");
  graph12.style.width = wPer12;
  graph12.style.color = "black";
}

rollOfDice();
// Then render the output to the HTML page.
