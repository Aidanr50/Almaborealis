window.onload = function() {
    generateInvoice()
}
  
  function generateInvoice() {
    var invoiceSize = document.getElementById("invoiceSize");
    invoiceSize.innerHTML = localStorage.getItem("sizeVal");

    var invoiceQty = document.getElementById("invoiceQty");
    invoiceQty.innerHTML = localStorage.getItem("qtyVal");

    var bodyColourTag = document.getElementById("bodyColour");
    bodyColourTag.innerHTML = localStorage.getItem("bodyColour");   

    // Continue passing data from colour tag parts from config.html
    // remember mobile responsiveness
}