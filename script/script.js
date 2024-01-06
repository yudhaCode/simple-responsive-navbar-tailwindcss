const mToggleMenu = document.getElementById("m-toggle-menu");
const navMenu = document.getElementById("nav-menu");

mToggleMenu.addEventListener("click", () => {
  const isMenuClosed = navMenu.classList.contains("right-[-100%]");

  // Toggle kelas berdasarkan kondisi
  navMenu.classList.replace(
    isMenuClosed ? "right-[-100%]" : "right-0",
    isMenuClosed ? "right-0" : "right-[-100%]"
  );
});
