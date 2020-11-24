window.onload = function() {
    generateInvoice()
}
  
  function generateInvoice() {
    var invoiceSize = document.getElementById("invoiceSize");
    var invoiceQty = document.getElementById("invoiceQty");

    var bodyColourTxt = document.getElementById("bodyColourTag");
    var armColourTxt = document.getElementById("armColourTag");
    var collarColourTxt = document.getElementById("collarColourTag");
    var panelColourTxt = document.getElementById("panelColourTag");
    var cuffColourTxt = document.getElementById("cuffColourTag");
    var hemColourTxt = document.getElementById("hemColourTag");
    var skirtColourTxt = document.getElementById("skirtColourTag");

    var bodyImg = document.getElementById("body-img");
    var armImg = document.getElementById("arm-img");
    var collarImg = document.getElementById("collar-img");
    var panelImg = document.getElementById("panel-img");
    var cuffImg = document.getElementById("cuff-img");
    var hemImg = document.getElementById("hem-img");
    var skirtImg = document.getElementById("skirt-img");

    invoiceSize.innerHTML = localStorage.getItem("sizeVal");
    invoiceQty.innerHTML = localStorage.getItem("qtyVal");
    bodyColourTxt.innerHTML = localStorage.getItem("bodyColourVal");
    armColourTxt.innerHTML = localStorage.getItem("armColourVal");
    collarColourTxt.innerHTML = localStorage.getItem("collarColourVal");
    panelColourTxt.innerHTML = localStorage.getItem("panelColourVal");
    cuffColourTxt.innerHTML = localStorage.getItem("cuffColourVal");
    hemColourTxt.innerHTML = localStorage.getItem("hemColourVal");
    skirtColourTxt.innerHTML = localStorage.getItem("skirtColourVal");

    bodyImg.src = `img/config/dress/dress-body-${localStorage.getItem("bodyColourVal")}-min.png`;
    armImg.src = `img/config/dress/dress-arm-${localStorage.getItem("armColourVal")}-min.png`;
    collarImg.src = `img/config/dress/dress-collar-regal-${localStorage.getItem("collarColourVal")}-min.png`;
    panelImg.src = `img/config/dress/dress-panel-${localStorage.getItem("panelColourVal")}-min.png`;
    cuffImg.src = `img/config/dress/dress-cuff-${localStorage.getItem("cuffColourVal")}-min.png`;
    hemImg.src = `img/config/dress/dress-hem-${localStorage.getItem("hemColourVal")}-min.png`;
    skirtImg.src = `img/config/dress/dress-skirt-${localStorage.getItem("skirtColourVal")}-min.png`;

    // Continue passing data from colour tag parts from config.html
    // remember mobile responsiveness
}
