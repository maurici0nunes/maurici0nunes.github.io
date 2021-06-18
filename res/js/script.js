AOS.init();

document.addEventListener("DOMContentLoaded", () => {
  let loader = document.getElementById("loader");
  loader.classList.remove("is-active");

  new Typed("#typed", {
    strings: [
      "<b>SERVIÇOS</b>",
      "Criação de <b>LOGOTIPO</b>",
      "Criação de <b>IDENTIDADE VISUAL</b>",
      "Desenvolvimento de <b>WEBSITE</b>",
      "Edição de <b>VÍDEO</b>",
    ],
    typeSpeed: 60,
    cursorChar: "&#10073;",
    backSpeed: 25,
    backDelay: 1600,
    loop: true,
  });

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

lightGallery(document.getElementById("gallery"));
