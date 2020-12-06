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
function insertNewButton(color, id/*imageURL*/){
  var context = {
    "color": color,
    "id": id
    // Figure out later "imageURL": imageURL
  }

  var newButtonHTML = Handlebars.templates.newButton(context);
  var buttonDiv = document.getElementById("buttonDiv");
  buttonDiv.insertAdjacentHTML("beforeend", newButtonHTML);
}
function setColor(color)
{
  document.getElementById(color+"ID").addEventListener("click", function(){
      document.getElementById("borderImageID").style.backgroundColor = color;
  })
}



var test= document.getElementsByClassName("selection");
console.log(test.length);




for (i = 0; i < test.length; i++) {
    var x = document.getElementsByTagName("button")[i].getAttribute("data-color"); 
    document.getElementById(x + "ID").style.backgroundColor = x;
    setColor(x);
}
/*
for(i = 0; i< test.length; i++){
  test[i].addEventListener("click", function(){
    document.getElementById("borderImageID").style.backgroundColor = x;
  })
}
document.getElementById(x + "ID").addEventListener("click", function(){
      document.getElementById("borderImageID").style.backgroundColor = x;
    })
*/