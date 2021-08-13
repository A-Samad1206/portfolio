const navMenu = document.querySelector("#nav-menu"),
  toggleMenu = document.querySelector("#nav-toggle"),
  navClose = document.querySelector("#nav-close");

toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

navClose.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Toogle side nav on clicking link.
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => navMenu.classList.remove("show");

navLink.forEach((n) => n.addEventListener("click", linkAction));
/* Scroll section active link */
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__item a[href=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav__item a[href=" + sectionId + "]")
        .classList.remove("active");
    }
  });
};
window.addEventListener("scroll", scrollActive);
