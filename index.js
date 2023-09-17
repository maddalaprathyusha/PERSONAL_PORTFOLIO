document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar");
    const hamburger = document.querySelector(".ham");
    const cross = document.querySelector(".cross");
    
    // Function to open the sidebar
    function openSidebar() {
      sidebar.style.transform = "translate(0, 0)";
    }
    
    // Function to close the sidebar
    function closeSidebar() {
      sidebar.style.transform = "translate(-443px, 0)";
    }
    
    // Event listener for hamburger menu click
    hamburger.addEventListener("click", openSidebar);
    
    // Event listener for close button click
    cross.addEventListener("click", closeSidebar);
  });
  