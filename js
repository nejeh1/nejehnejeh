function toggleDropdown() {
    var dropdownMenu = document.querySelector(".dropdown-menu");
    dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
  }
  
 
  window.onload = function() {
    alert('Welcome to Mr cheapy , Enjoy!');
    };

    document.getElementById("contactForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevents the default form submission
    
      // Perform any desired actions here, such as sending the form data to a server or performing validation
    
      window.location.href = "./index.html"; // Redirect to the home page
    });
