//Test code to change the background color of the border.
var test=document.getElementsByClassName('selection');

for (i = 0; i < test.length; i++) {
    test[i].addEventListener("click", function(){
      document.getElementById("borderImageID").style.backgroundColor = "black";
    })
}


