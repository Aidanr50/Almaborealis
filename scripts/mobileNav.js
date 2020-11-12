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