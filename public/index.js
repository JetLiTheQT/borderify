//Test code to change the background color of the border.

/*
var allBtn = [];

function getBtnInfo(){
  var color = document.getElementById('post-color-input').value.trim();
  allPosts.push({
    color: color
  });
}
*/

//code to make the colors tab the default selected tab
//document.getElementById("defaultOpen").click();


//Function to insert a new button.
function insertNewButton(color, id/*imageURL*/){
  var context = {
    "color": color,
    "id": id
    // Figure out later "imageURL": imageURL (For the second tab for image borders!)
  }
  var newButtonHTML = Handlebars.templates.newButton(context);
  var buttonDiv = document.getElementById("buttonDiv");
  buttonDiv.insertAdjacentHTML("beforeend", newButtonHTML);
}
//Function to set bg.color of the borderImage, called from loadButtons()
function setColor(color)
{
  document.getElementById(color+"ID").addEventListener("click", function(){
      document.getElementById("borderImageID").style.backgroundColor = color;
  })
}
//Loads buttons at start 
function loadButtons(){
  var test= document.getElementsByClassName("selection");

  for (i = 0; i < test.length; i++) {
      var x = document.getElementsByTagName("button")[i].getAttribute("data-color"); 
      document.getElementById(x + "ID").style.backgroundColor = x;
      setColor(x);
  }
}





/* Function for Input for image-only files.
   GOAL: Take that input, store it in index.js and create a new dom where borderImage should be. 
    - Make sure to set width to 100% to fill the borderImage container */
    



//When the website is loaded, it will automatically load all the buttons. 
//GOAL 
//Make the website automatically load a random image/color when initially loaded so the background-color of the borderImageContainer & borderImage aren't the same
window.addEventListener("load", loadButtons);

//Tabs functions
function openTab(evt, tabCorI) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabCorI).style.display = "block";
  evt.currentTarget.className += " active";
}