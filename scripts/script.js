// //Body variables
// const bodySelect = document.getElementById("body-pick");
// const bodyImage = document.getElementById("body-img");
// const bodyBox = document.getElementById("bodyBox")
// const bodyTag = document.getElementById("bodyTag")
// //Arm Variables
// const armSelect = document.getElementById("arm-pick");
// const armImage = document.getElementById("arm-img");
// const armBox = document.getElementById("armBox")
// const armTag = document.getElementById("armTag")
// //Collar Variables
// const collarSelect = document.getElementById("collar-pick");
// const collarImage = document.getElementById("collar-img");
// const collarBox = document.getElementById("collarBox")
// const collarTag = document.getElementById("collarTag")
// //Hem Variables
// const hemSelect = document.getElementById("hem-pick");
// const hemImage = document.getElementById("hem-img");
// const hemBox = document.getElementById("hemBox")
// const hemTag = document.getElementById("hemTag")

// //Changes body colour
// function bodyChange() {
//     let colour = bodySelect.value;
//     bodyImage.src = `img/config/jumper/jumper-body-lowres-${colour}.png`;
//     bodyBox.classList.remove("bg-red-700", "bg-green-700", "bg-blue-700")
//     bodyBox.classList.add(`bg-${colour}-700`)
//     bodyTag.innerHTML = colour
// }
// //Changes arm colour
// function armChange() {
//     let colour = armSelect.value;
//     armImage.src = `img/config/jumper/jumper-arm-lowres-${colour}.png`;
//     armBox.classList.remove("bg-red-700", "bg-green-700", "bg-blue-700")
//     armBox.classList.add(`bg-${colour}-700`)
//     armTag.innerHTML = colour
// }
// //Changes collar colour
// function collarChange() {
//     let colour = collarSelect.value; 
//     collarImage.src = `img/config/jumper/jumper-neck-lowres-${colour}.png`;
//     collarBox.classList.remove("bg-red-700", "bg-green-700", "bg-blue-700")
//     collarBox.classList.add(`bg-${colour}-700`)
//     collarTag.innerHTML = colour
// }
// //Changes hem colour
// function hemChange() {
//     let colour = hemSelect.value;
//     hemImage.src = `img/config/jumper/jumper-hem-lowres-${colour}.png`;
//     hemBox.classList.remove("bg-red-700", "bg-green-700", "bg-blue-700")
//     hemBox.classList.add(`bg-${colour}-700`)
//     hemTag.innerHTML = colour
// }

function changeColour(colour, part) {
  let colour_btn_els = document.querySelectorAll(`.${part}-button`);
  let partBox = document.getElementById(`${part}Box`);
  let partTag = document.getElementById(`${part}Tag`);
  let accordion = document.getElementById(`${part}Accordion`);
  let styleSelector = document.getElementById(`${part}Style`);

  let imagery_el = document.getElementById(`${part}-img`);
  imagery_el.src = `img/config/dress/dress-${part}-${colour}.png`;
  partBox.classList.remove("bg-red-700", "bg-green-700", "bg-blue-700");
  partBox.classList.add(`bg-${colour}-700`);
  partTag.innerHTML = colour;
  accordion.classList.remove("border-red-700", "border-green-700", "border-blue-700");
  accordion.classList.add(`border-${colour}-700`);
}

function changeStyle(style, part) {
  let currentStyle = style.value;
  let imageSrc = document.getElementById(`${part}-img`).src;
  
  imageSrc.replace
  console.log(imageSrc)
}

// Scroll to top Script

var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.opacity = "1";
  } else {
    mybutton.style.opacity = "0";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Configurator tab motion

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


// Accordion Scripts

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");  
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

// Mobile Navigation

function menuToggle() {
  let nav = document.getElementById('mobileNav');
  
  if (nav.classList.contains('hidden')) {
    nav.classList.add('block')
    nav.classList.remove('hidden')
  } else {
    nav.classList.add('hidden')
    nav.classList.remove('block')
  }
}