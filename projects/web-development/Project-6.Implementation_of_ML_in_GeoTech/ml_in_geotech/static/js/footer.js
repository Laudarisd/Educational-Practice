// For footer

window.addEventListener("scroll", function() {
    var footer = document.getElementById("footer");
    var scrollPosition = window.innerHeight + window.pageYOffset;
    var pageHeight = document.documentElement.scrollHeight;
    
    if (scrollPosition >= pageHeight) {
      footer.classList.add("show-footer");
    } else {
      footer.classList.remove("show-footer");
    }
  });
  