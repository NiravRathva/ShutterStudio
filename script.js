document.addEventListener("DOMContentLoaded", ()=> {
  // Get all the anchor tags in the navbar
  const navLinks = document.querySelectorAll("a") 

  // Attach click event listener to each anchor tag
  navLinks.forEach((link) =>{
    link.addEventListener("click", (e)=> {
      // Prevent default anchor tag behavior
      e.preventDefault();

      // Get the target section's ID from the href attribute
      const targetId = link.getAttribute("href");

      // Scroll smoothly to the target section
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
});
