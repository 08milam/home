// function rotateElement(event) {
//     const element = document.querySelector('.hover-element');
//     const rect = element.getBoundingClientRect();

//     // Calculate the angle of rotation based on mouse position
//     const angleX = (event.clientY - rect.top - rect.height / 2) / (rect.height / 2) * 20;
//     const angleY = (event.clientX - rect.left - rect.width / 2) / (rect.width / 2) * -20;

//     // Apply the rotation and tilt using CSS transform property
//     element.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
// }

// // Reset the rotation when the mouse leaves the element
// document.querySelector('.hover-element').onmouseleave = function () {
//     this.style.transform = 'rotateX(0deg) rotateY(0deg)';
// };




    var targetElement = document.querySelector(".navbar");
    var halfwayPoint = window.innerHeight / 2;
    window.onscroll = function() {
      var scrollPosition = window.scrollY;
      if (scrollPosition >= halfwayPoint) {
        targetElement.style.backgroundColor = "rgba(23, 23, 23, 0.9)"; 
        // targetElement.style.backdropFilter = "blur(10px)";
      } else {
        targetElement.style.backgroundColor = "transparent";
        // targetElement.style.backdropFilter = "transparent";
      }
    };