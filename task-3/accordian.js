var ac = document.getElementById("accord");

var i;

for (i = 0; i < ac.length; i++) {
  ac[i].addEventListner("click", function () {
    this.classList.toggle("active");
    var division = this.nextElementSibling;
    if (division.style.display === "block") {
      division.style.display = "none";
    } else {
      division.style.display = "block";
    }
  });
}
