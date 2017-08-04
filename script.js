//-This script makes it possible to "light up" each
//---cell of an empty table with a new background
//---color when a single table cell is clicked.
//-Then, after each cell has been clicked at least
//---once, it'll change the page's header to very
//---self-affirming text. :)

//--------*VARIABLES*-----------------------//

  //--creates variables that can be used to change elements
  //--when triggered by an event (i.e., a click):
var h1s = document.getElementsByTagName("h1");
var h1 = h1s[0];
var tables = document.getElementById("m");


  //--based on which CSS class has been assigned, groups all
  //--table cells into two variables:
var lightCells = document.getElementsByClassName("light");
var darkCells = document.getElementsByClassName("dark");

  //--creates a variable that contains all table cells:
var allCells = document.getElementsByTagName("td");



//--------*FUNCTIONS*-----------------------//

  //--creates functions that will change the background
  //--color of table cells:
function showLight(event) {
  event.target.style.backgroundColor = "#37A3FF";
}

function showDark(event) {
  event.target.style.backgroundColor = "#064479";
}

//--creates a function that will change the page's header
//--text after all table cells have been clicked:
function notDone(event) {
  for (var i = 0; i < allCells.length; i++) {
    if (allCells[i].style.backgroundColor == "") {
      var notAllClicked = true;
      break;
    }
    else {
      notAllClicked = false;
    }
  }
  console.log(notAllClicked);
  if (notAllClicked == false) {
    console.log("Holy hell.");
    h1.textContent = "M is for Matthew!";
  }
}



//----*THE CODE THAT MAKES STUFF HAPPEN*----//

  //--creates event listeners that will call the relevant
  //--function when a specific table cell is clicked:
for (var i = 0; i < lightCells.length; i++) {
  lightCells[i].addEventListener("click", showLight);
}

for (var i = 0; i < darkCells.length; i++) {
  darkCells[i].addEventListener("click", showDark);
}

tables.addEventListener("click", notDone);


//--Note to self: You used an ID in the CSS file that
//--made it a one-step process to select the page's
//--only table. If you ever want to scale this to
//--something more fun, you'll probably want to make
//--sure you aren't using IDs too much, since that
//--makes it harder to scale. (According to Harry
//--from CSS Wizardry, anyway.)
//----Also: On line 54, you could add even more fun
//----changes in the DOM. You turned this in because
//----you still had a shit-ton of stuff to do, but
//----come back to it later to keep playing around
//----with integrating HTML, CSS, and JavaScript.