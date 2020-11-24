// Configurator Scripts

function changeColour(colour, part) {
    let partBox = document.getElementById(`${part}Box`);
    let partTag = document.getElementById(`${part}Tag`);
    let accordion = document.getElementById(`${part}Accordion`);
  
    let imagery_el = document.getElementById(`${part}-img`);
    imagery_el.src = `img/config/dress/dress-${part}-${colour}-min.png`;
    partBox.classList.remove("orange", "yellow", "green", "blue", "lightblue", "pink", "grey");
    partBox.classList.add(`${colour}`);
    partTag.innerHTML = colour;
    accordion.classList.remove("orange-border", "yellow-border", "green-border", "blue-border", "lightblue-border", "pink-border", "grey-border");
    accordion.classList.add(`${colour}-border`);
  }
  
  function changeStyle() {
    let collarImg = document.getElementById("collar-img").src;
    let collarStyle = document.getElementById("collarStyle").value

    let newSrc = collarImg.replace(/frill|regal/g, collarStyle);

    document.getElementById("collar-img").src = newSrc;
  }

  function changeCollarColour(colour) {
    let partBox = document.getElementById(`collarBox`);
    let partTag = document.getElementById(`collarTag`);
    let accordion = document.getElementById(`collarAccordion`);
    let collarImg = document.getElementById("collar-img").src;

    let newSrc = collarImg.replace(/orange|blue|lightblue|grey|green|pink|yellow/g, colour);

    document.getElementById("collar-img").src = newSrc;
    partBox.classList.remove("orange", "yellow", "green", "blue", "lightblue", "pink", "grey");
    partBox.classList.add(`${colour}`);
    partTag.innerHTML = colour;
    accordion.classList.remove("orange-border", "yellow-border", "green-border", "blue-border", "lightblue-border", "pink-border", "grey-border");
    accordion.classList.add(`${colour}-border`);
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
    let armColour_el = document.getElementById("armTag").textContent;
    let panelColour_el = document.getElementById("panelTag").textContent;
    let collarColour_el = document.getElementById("collarTag").textContent;
    let cuffColour_el = document.getElementById("cuffTag").textContent;
    let hemColour_el = document.getElementById("hemTag").textContent;
    let skirtColour_el = document.getElementById("skirtTag").textContent;

    localStorage.setItem("sizeVal", size);
    localStorage.setItem("qtyVal", qty);
    localStorage.setItem("bodyColourVal", bodyColour_el);
    localStorage.setItem("armColourVal", armColour_el);
    localStorage.setItem("collarColourVal", collarColour_el);
    localStorage.setItem("panelColourVal", panelColour_el);
    localStorage.setItem("cuffColourVal", cuffColour_el);
    localStorage.setItem("hemColourVal", hemColour_el);
    localStorage.setItem("skirtColourVal", skirtColour_el);

    window.location.href = 'invoice.html';
  }