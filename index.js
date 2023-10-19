document.getElementById('viewMenuLink').addEventListener('click', function () {
    var menuUrl = 'restraurantMenu.html';
    window.open(menuUrl, 'Menu', 'width=650,height=580,left=150,top=50,toolbar=0,status=0');
});

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  }

  // Show the "Go to Top" button when the user scrolls down 20px from the top of the document
  window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("goTopBtn").style.display = "block";
    } else {
      document.getElementById("goTopBtn").style.display = "none";
    }
  }