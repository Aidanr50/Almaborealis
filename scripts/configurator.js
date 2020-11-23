// Configurator Scripts

function changeColour(colour, part) {
    let colour_btn_els = document.querySelectorAll(`.${part}-button`);
    let partBox = document.getElementById(`${part}Box`);
    let partTag = document.getElementById(`${part}Tag`);
    let accordion = document.getElementById(`${part}Accordion`);
    let styleSelector = document.getElementById(`${part}Style`);
  
    let imagery_el = document.getElementById(`${part}-img`);
    imagery_el.src = `img/config/dress/dress-${part}-${colour}.png`;
    partBox.classList.remove("bg-red-700", "bg-yellow-700", "bg-blue-700");
    partBox.classList.add(`bg-${colour}-700`);
    partTag.innerHTML = colour;
    accordion.classList.remove("border-red-700", "border-yellow-700", "border-blue-700");
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

  function createInvoice() {
    let size = document.getElementById("ageSelect").value;
    let qty = document.getElementById("prodQuantity").value;
    let bodyColour_el = document.getElementById("bodyTag").textContent;

    localStorage.setItem("sizeVal", size);
    localStorage.setItem("qtyVal", qty);
    localStorage.setItem("bodyColour", bodyColour_el);

    window.location.href = 'invoice.html';
  }