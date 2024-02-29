// contact with page

let contactUs = document.querySelector(".contact_us");
let contact_with_page = document.querySelector(".contact_with_page");
let icons_close_contact = document.getElementById("icons_close_contact");
let isClick = true;

contactUs.addEventListener("click", function () {
  contact_with_page.classList.toggle("contact_with_page2");
  if (isClick) {
    icons_close_contact.setAttribute("class", "bi bi-x-lg");
    isClick = false;
  } else {
    icons_close_contact.setAttribute("class", "bi bi-chat-square-fill");
    isClick = true;
  }
});

// search page

let btn_search = document.querySelector(".btn_search");
let search_in_page = document.querySelector(".search_in_page");
let close_search = document.querySelector(".close_search");

btn_search.addEventListener("click", function () {
  search_in_page.style.top = "0";
});

close_search.onclick = function () {
  search_in_page.style.top = "-2000px";
};

////----------------------------

// start navbar
buttonNav = document.getElementById("btn_nav");
buttonNavClose = document.querySelector(".close_nav_icons");
all_NavList = document.getElementById("all_NavList");

// this function open list of links
buttonNav.onclick = function () {
  all_NavList.style.left = "0";
};

// this function close list of links
buttonNavClose.onclick = function () {
  all_NavList.style.left = "-300px";
};

//---------------

// start login page

user_login_click = document.querySelector(".user_login_click");
login_page = document.querySelector(".login_page");
close_login_page = document.querySelector(".close_login_page");
body_section = document.querySelector(".body_section");

user_login_click.onclick = function () {
  login_page.style.right = "0";
};

close_login_page.onclick = function () {
  login_page.style.right = "-600px";
  close_login_page.style.transform = "rotate(180deg)";
};

// end login page

// this is plugins wow js file
var wow = new WOW({
  boxClass: "animate__animated", // animated element css class (default is wow)
  animateClass: "animated", // animation css class (default is animated)
  offset: 0, // distance to the element when triggering the animation (default is 0)
  mobile: true, // trigger animations on mobile devices (default is true)
  live: true, // act on asynchronously loaded content (default is true)
  callback: function (box) {
    // the callback is fired every time an animation is started
    // the argument that is passed in is the DOM node being animated
  },
  scrollContainer: null, // optional scroll container selector, otherwise use window,
  resetAnimation: true, // reset animation on end (default is true)
});
wow.init();

$(".sec2 .owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayTimeout: 10000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

$(".sec6 .owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayTimeout: 5000,
  responsive: {
    0: {
      items: 1,
    },
    900: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});

$(".sec4_about_us .owl-carousel").owlCarousel({
  loop: false,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    750: {
      items: 2,
    },
    900: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});
$(".logoAbout .owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay: true,
  autoplayTimeout: 5000,
  responsive: {
    0: {
      items: 2,
    },
    900: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

// navbar fixed
let header_nav = document.querySelector(".header_nav");

window.onscroll = function () {
  if (scrollY > 0) {
    header_nav.classList.add("header_nav22");
  } else {
    header_nav.classList.remove("header_nav22");
  }
};

let owlPrev = document.querySelectorAll(".owl-prev");
let owlNext = document.querySelectorAll(".owl-next");
let prev = document.createElement("i");

// owlNext[0].innerHTML = `<i class="bi bi-arrow-right"></i>`;
// owlPrev[0].innerHTML = ` <i class="bi bi-arrow-left"></i>`;

// owlNext[1].innerHTML = `<i class="bi bi-arrow-right"></i>`;
// owlPrev[1].innerHTML = ` <i class="bi bi-arrow-left"></i>`;

for (let i = 0; i < owlNext.length; i++) {
  owlNext[i].innerHTML = `<i class="bi bi-arrow-right"></i>`;
  owlPrev[i].innerHTML = ` <i class="bi bi-arrow-left"></i> `;
}

// animation in page wow

// section 1
