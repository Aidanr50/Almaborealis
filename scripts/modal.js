// Video Modal Script

function openModal() {
    let modal = document.getElementById('modal');
  
    modal.classList.remove('hidden')
    modal.classList.add('flex')
  }
  
  const open = document.getElementById('open');
  open.addEventListener("click", openModal);
  
  function closeModal() {
    let modal = document.getElementById('modal');
  
    modal.classList.remove('flex')
    modal.classList.add('hidden')
    player.stopVideo();
  }
  
  const close = document.getElementById("close");
  close.addEventListener("click", closeModal);