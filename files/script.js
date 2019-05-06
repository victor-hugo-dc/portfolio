var showProject = function(a){
  $("#project-".concat(a)).addClass("active").siblings().removeClass("active"),
  $("#li-".concat(a)).addClass("active").siblings().removeClass("active")};

var showEd = function(a){
  $("#".concat(a)).addClass("active").siblings().removeClass("active"),
  $("#li-".concat(a)).addClass("active").siblings().removeClass("active")};

function openMap(){
  var x = document.getElementById("map");
  if(x.style.display === "none"){
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

var changeName = function() {
  var x = document.getElementById('name');
  x.onmouseenter = function() { this.textContent = 'DEL CARPIO'; }
  x.onmouseout   = function() { this.textContent = 'HUGO';  }
}
