function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("show");
}



// Animate progress bars on page load
    document.addEventListener("DOMContentLoaded", () => {
      const progresses = document.querySelectorAll(".progress");
      progresses.forEach(bar => {
        let width = bar.style.width;
        bar.style.width = "0";
        setTimeout(() => {
          bar.style.width = width;
        }, 300);
      });
    });



     document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    alert("Right click is disabled!");
  });