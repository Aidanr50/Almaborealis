
document.getElementById("collarStyle").addEventListener("change", changeStyle);

function changeStyle() {
    let stylePicker = document.getElementById('collarStyle');
    alert('Poo')
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