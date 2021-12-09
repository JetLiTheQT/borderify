
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
      document.getElementById("borderImageID").style.transitionProperty = "background-color";
      document.getElementById("borderImageID").style.transitionDuration = "1.5s";
      if(document.getElementById("borderImageID").style.backgroundImage !== "")
      {
        document.getElementById("borderImageID").style.backgroundImage = "";
      }
  })
}
//Loads buttons at start 
function loadButtons(){
  var test= document.getElementsByClassName("selection");
  for (i = 0; i < test.length; i++) {
      var x = document.getElementsByClassName("selection")[i].getAttribute("data-color");
      document.getElementById(x + "ID").style.backgroundColor = x;
      setColor(x);
  }

}


//Function to insert a new img Button.
function insertNewIMGButton(photoURL, id/*imageURL*/){
  var context = {
    "id": id,
    "photoURL": photoURL
    // Figure out later "imageURL": imageURL (For the second tab for image borders!)
  }
  var newIMGButtonHTML = Handlebars.templates.newIMGButton(context);
  var imgButtonDiv = document.getElementById("imgButtonDiv");
  imgButtonDiv.insertAdjacentHTML("beforeend", newIMGButtonHTML);
}

//Function to set bg.color of the borderImage, called from loadButtons()
function setIMG(photoURL)
{
  document.getElementById(photoURL+"ID").addEventListener("click", function(){
    document.getElementById("borderImageID").style.backgroundImage = "url("+photoURL+")";
    document.getElementById("borderImageID").style.transitionProperty = "background-image";
    document.getElementById("borderImageID").style.backgroundSize = "cover";
    document.getElementById("borderImageID").style.backgroundPosition = "center";
    document.getElementById("borderImageID").style.transitionDuration = "1.5s";
    if(document.getElementById("borderImageID").style.backgroundColor !== "")
      document.getElementById("borderImageID").style.backgroundColor = "";   
})
}
//Loads buttons at start 
function loadIMGButtons(){
  var test= document.getElementsByClassName("imgselection");
  for (i = 0; i < test.length; i++) {
      var x = document.getElementsByClassName("imgselection")[i].getAttribute("data-photoURL"); 
      document.getElementById(x + "ID").style.backgroundImage = "url("+x+")";
      setIMG(x);
  }

}


/* Setup Slider */

var sliderChange = document.getElementById("myRange");

sliderChange.addEventListener("input", function(){
  var sliderNum = document.getElementById("myRange").value;
  var divToChange = document.getElementById("borderImageID");
  divToChange.style.padding = "" +sliderNum+ "px";
  divToChange.style.transitionProperty = "padding";
  divToChange.style.transitionDuration = ".5s";
})

var addBorderBtn = document.getElementById("borderBtn");
addBorderBtn.addEventListener("click", function(){ 
  if(document.getElementById("borderImageUsrPic").style.border !== "")
    document.getElementById("borderImageUsrPic").style.border = "";
  else{
    document.getElementById("borderImageUsrPic").style.border = "2px solid black";
  }
})


/* Function for Input for image-only files.
   GOAL: Take that input, store it in index.js and create a new dom where borderImage should be. 
    - Make sure to set width to 100% to fill the borderImage container */
window.onload = function() {

  var fileInput = document.getElementById('imgUsrFile');
  var fileDisplayArea = document.getElementById('borderImageUsrPic');
  var hideWebIntro = document.getElementById('websiteIntro');
  var setHWAuto = document.getElementById('borderImageID');
  fileInput.addEventListener('change', function(e) {
    var file = fileInput.files[0];
    var reader = new FileReader();

    reader.onload = function(e) {
      fileDisplayArea.innerHTML = "";

      var img = new Image();
      img.src = reader.result;
      hideWebIntro.style.display = 'none';
      fileDisplayArea.style.height= 'auto';
      fileDisplayArea.style.width = 'auto';
      fileDisplayArea.style.border ="";
      setHWAuto.style.height= 'auto';
      setHWAuto.style.width = 'auto';

      fileDisplayArea.appendChild(img);
    }

    reader.readAsDataURL(file);	
    var fileDisplayAreaz = document.getElementById('borderForPic');
    fileDisplayAreaz.style.padding = "25px";
    fileDisplayAreaz.style.maxWidth = "800px";
    fileDisplayAreaz.style.maxHeight = "50%";
     });
  
}
var download = function (filename) {
  var element = document.createElement('a');
  element.setAttribute('href', filename);
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appenSdChild(element);

  element.click();

  document.body.removeChild(element);
}

function makeAndTake(){
  html2canvas(document.getElementById("borderImageID"),{backgroundColor: "rgba(0,0,0,0)"}).then(function(canvas) {
    /*var dataURL = canvas.toDataURL("image/jpeg", 1.0);
        var a = document.createElement('a');
        a.href = dataURL;
        a.download = 'untitled.jpeg';
        document.body.appendChild(a);
        a.click(); */

    return Canvas2Image.saveAsPNG(canvas);


});



}

function colorPickerFunc(){
  var colorpicker = document.getElementById('colorpicker');
  
  colorpicker.addEventListener("input", function(){
      var colorpickerz = document.getElementById('colorpicker');
      document.getElementById("borderImageID").style.backgroundColor = colorpickerz.value;
      document.getElementById("colorpicker").style.backgroundColor = colorpickerz.value;

  });
  colorpicker.addEventListener("change", function(){
     var colorpickerz = document.getElementById('colorpicker');
      document.getElementById("borderImageID").style.backgroundColor = colorpickerz.value;
      document.getElementById("colorpicker").style.backgroundColor = colorpickerz.value;
  });
}

//When the website is loaded, it will automatically load all the buttons. 
//GOAL 
//Make the website automatically load a random image/color when initially loaded so the background-color of the borderImageContainer & borderImage aren't the same

window.addEventListener("load", loadButtons);
window.addEventListener("load", colorPickerFunc);
window.addEventListener("load", loadIMGButtons);


//Get Color Picker



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

//tester for the pop-up
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}