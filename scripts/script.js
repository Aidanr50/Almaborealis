//Body variables
const bodySelect = document.getElementById("body-pick");
const bodyImage = document.getElementById("body-img");
const bodyBox = document.getElementById("bodyBox")
const bodyTag = document.getElementById("bodyTag")
//Arm Variables
const armSelect = document.getElementById("arm-pick");
const armImage = document.getElementById("arm-img");
const armBox = document.getElementById("armBox")
const armTag = document.getElementById("armTag")
//Collar Variables
const collarSelect = document.getElementById("collar-pick");
const collarImage = document.getElementById("collar-img");
const collarBox = document.getElementById("collarBox")
const collarTag = document.getElementById("collarTag")
//Hem Variables
const hemSelect = document.getElementById("hem-pick");
const hemImage = document.getElementById("hem-img");
const hemBox = document.getElementById("hemBox")
const hemTag = document.getElementById("hemTag")

//Changes body colour
function bodyChange() {
    let colour = bodySelect.value;
    bodyImage.src = `img/config/jumper/jumper-body-lowres-${colour}.png`;
    bodyBox.classList.remove("bg-red-700", "bg-green-700", "bg-blue-700")
    bodyBox.classList.add(`bg-${colour}-700`)
    bodyTag.innerHTML = colour
}
//Changes arm colour
function armChange() {
    let colour = armSelect.value;
    armImage.src = `img/config/jumper/jumper-arm-lowres-${colour}.png`;
    armBox.classList.remove("bg-red-700", "bg-green-700", "bg-blue-700")
    armBox.classList.add(`bg-${colour}-700`)
    armTag.innerHTML = colour
}
//Changes collar colour
function collarChange() {
    let colour = collarSelect.value; 
    collarImage.src = `img/config/jumper/jumper-neck-lowres-${colour}.png`;
    collarBox.classList.remove("bg-red-700", "bg-green-700", "bg-blue-700")
    collarBox.classList.add(`bg-${colour}-700`)
    collarTag.innerHTML = colour
}
//Changes hem colour
function hemChange() {
    let colour = hemSelect.value;
    hemImage.src = `img/config/jumper/jumper-hem-lowres-${colour}.png`;
    hemBox.classList.remove("bg-red-700", "bg-green-700", "bg-blue-700")
    hemBox.classList.add(`bg-${colour}-700`)
    hemTag.innerHTML = colour
}



function tabOpen(e, tab) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("menuTab");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("menuToggle");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" text-red-700 border-b-2 border-red-400", "");
    }
    document.getElementById(tab).style.display = "block";
    e.currentTarget.className += " text-red-700 border-b-2 border-red-400";
  }

  document.getElementById("defaultOpen").click();
  
