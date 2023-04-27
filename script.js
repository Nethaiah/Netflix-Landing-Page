document.getElementById("email").addEventListener("input", error);

function error(){
    const email = document.getElementById("email").value;

    if(document.getElementById("email").value == ""){
        document.getElementById("errorMess").style.visibility = "visible";
        document.getElementById("error-name").innerHTML = "Email Address is Required!";
    }else if(!email.includes("@")){
      document.getElementById("errorMess").style.visibility = "visible";
      document.getElementById("error-name").innerHTML = "Valid Email Address is Required!";
    }else{
        document.getElementById("errorMess").style.visibility = "hidden";
    }
}

document.getElementById("tab-item-1").classList.add("identifier");

document.getElementById("tab-item-1").addEventListener("click", function(){
    document.getElementById("tab-item-1").classList.add("identifier");
    document.getElementById("tab-item-2").classList.remove("identifier");
    document.getElementById("tab-item-3").classList.remove("identifier");
    document.getElementById("tab-content-1-show").setAttribute("style", "display: block !important");
    document.getElementById("tab-content-2-show").setAttribute("style", "display: none !important");
    document.getElementById("tab-content-3-show").setAttribute("style", "display: none !important");
});

document.getElementById("tab-item-2").addEventListener("click", function () {
  document.getElementById("tab-item-2").classList.add("identifier");
  document.getElementById("tab-item-1").classList.remove("identifier");
  document.getElementById("tab-item-3").classList.remove("identifier");
  document.getElementById("tab-content-1-show").setAttribute("style", "display: none !important");
  document.getElementById("tab-content-2-show").setAttribute("style", "display: block !important");
  document.getElementById("tab-content-3-show").setAttribute("style", "display: none !important");
});

document.getElementById("tab-item-3").addEventListener("click", function () {
  document.getElementById("tab-item-3").classList.add("identifier");
  document.getElementById("tab-item-1").classList.remove("identifier");
  document.getElementById("tab-item-2").classList.remove("identifier");
  document.getElementById("tab-content-1-show").setAttribute("style", "display: none !important");
  document.getElementById("tab-content-2-show").setAttribute("style", "display: none !important");
  document.getElementById("tab-content-3-show").setAttribute("style", "display: block !important");
});

let detailsElements = document.querySelectorAll("details");

detailsElements.forEach(function(detailsElem) {
  detailsElem.addEventListener("toggle", function () {
    if (detailsElem.open) {
      detailsElements.forEach(function(otherDetailsElem) {
        if (otherDetailsElem !== detailsElem) {
          otherDetailsElem.open = false;
        }
      });
    }
  });
});