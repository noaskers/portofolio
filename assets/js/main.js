const iconToggle = document.querySelector(".toggle_icon");
const navbarMenu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu_link");
const iconClose = document.querySelector(".close_icon");

iconToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
  console.log("clicked");
});

iconClose.addEventListener("click", () => {
  navbarMenu.classList.remove("active");
});

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", () => {
    navbarMenu.classList.remove("active");
  });
});

// Change background header
function scrollHeader() {
  const header = document.getElementById("header");
  this.scrollY >= 20
    ? header.classList.add("active")
    : header.classList.remove("active");
}

window.addEventListener("scroll", scrollHeader);

// Hero type effect
const typed = document.querySelector(".typed");

if (typed) {
  let typed_strings = typed.getAttribute("data-typed-items");
  typed_strings = typed_strings.split(",");
  new Typed('.typed', {
    strings: typed_strings,
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000
  })
}

// Add scroll-based menu highlighting
document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("section[id]");
  const menuLinks = document.querySelectorAll(".menu_link");
  const headerHeight = document.getElementById("header").offsetHeight;

  function highlightMenuItem() {
      let scrollPosition = window.scrollY + headerHeight;

      sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (
              scrollPosition >= sectionTop - 50 &&
              scrollPosition < sectionTop + sectionHeight - 50
          ) {
              let targetId = section.getAttribute("id");
              menuLinks.forEach(link => {
                  if (link.getAttribute("href") === `/#${targetId}`) {
                      link.classList.add("active-link");
                  } else {
                      link.classList.remove("active-link");
                  }
              });
          }
      });
  }

  window.addEventListener("scroll", highlightMenuItem);
});

