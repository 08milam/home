document.addEventListener("DOMContentLoaded", function () {
  const image = document.querySelector("img");
  const profileImage = document.querySelector(".profileImage");
  const navbar = document.querySelector(".navbar");
  const sideMenu = document.querySelector("#showmenu");
  const closeMenu = document.querySelector("#hidesidebar");

  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;
    const opacity = 1 - scrollPosition / 10;
    image.style.opacity = opacity;

    const halfwayPoint = window.innerHeight / 10;
    if (scrollPosition >= halfwayPoint) {
      navbar.style.backgroundColor = "rgba(52, 52, 52, 0.9)";
    } else {
      navbar.style.backgroundColor = "transparent";
    }
  });

  sideMenu.addEventListener("click", function () {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
  });

  closeMenu.addEventListener("click", function () {
    const hideMenu = document.querySelector(".sidebar");
    hideMenu.style.display = "none";
  });
});
