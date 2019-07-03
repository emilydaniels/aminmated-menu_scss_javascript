function toggleNav() {
  var updateElement = document.getElementById("menu-icon");
  updateElement.classList.toggle ("open");
  var updatePosition = document.getElementById("sidebar");
  updatePosition.classList.toggle ("slide-over"); 
}