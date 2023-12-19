// FADE IN ANIMATION
const appearOptions = {
    threshold: 0,
    rootMargin: "0% 0% -35% 0%",
  };
  const fades = document.querySelectorAll(".fade-in");
  const slides = document.querySelectorAll(".slide");
  
  const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
  ) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);
  
  fades.forEach(
    (fade) => {
      appearOnScroll.observe(fade);
    },
    slides.forEach((slide) => {
      appearOnScroll.observe(slide);
    })
  );
  
  var tablinks = document.getElementsByClassName("tab-links");
  var tabcontents = document.getElementsByClassName("tab-contents");
  function opentab(tabname) {
    for (tablink of tablinks) {
      tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
      tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
  }
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling animation
    });
  }
  