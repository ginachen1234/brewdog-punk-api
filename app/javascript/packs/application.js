import "bootstrap";



// navbar
const navbarToggler = document.querySelector(".navbar-toggler");
const navbarMenu = document.querySelector(".navbar ul");
const navbarLinks = document.querySelectorAll(".navbar a");

navbarToggler.addEventListener("click", navbarTogglerClick);

function navbarTogglerClick() {
  navbarToggler.classList.toggle("open-navbar-toggler");
  navbarMenu.classList.toggle("open");
}

navbarLinks.forEach(elem => elem.addEventListener("click", navbarLinkClick));

function navbarLinkClick() {
  if(navbarMenu.classList.contains("open")) {
    navbarToggler.click();
  }
}

var results = document.getElementById("results");

fetch("https://api.punkapi.com/v2/beers?brewed_after=12-2015&abv_gt=5&abv_lt=11")
  .then(response => response.json())
  .then((data) => {

    data.forEach((result) => {
      var brewed = result.first_brewed;
      var brewed_year = parseInt(brewed.substring(brewed.indexOf("/")+1));
      var ingredients = result.ingredients.malt; console.log(ingredients[0].name);

      if((result.abv > 5 && result.abv<11) && brewed_year>=2015) {
        const beers = '<li><img src="'+result.image_url+'" alt=""><h3>'+result.name+'</h3><p>'+result.ingredients+'</p><p>'+result.abv+'</p><p>'+result.description+'</p></li>';
        results.insertAdjacentHTML("beforeend", beers);
      }

    });
  });

   $(document).ready(function() {
  $('.pour') //Pour Me Another Drink, Bartender!
    .delay(2000)
    .animate({
      height: '360px'
      }, 1500)
    .delay(1600)
    .slideUp(500);

  $('#liquid') // I Said Fill 'Er Up!
    .delay(3400)
    .animate({
      height: '170px'
    }, 2500);

  $('.beer-foam') // Keep that Foam Rollin' Toward the Top! Yahooo!
    .delay(3400)
    .animate({
      bottom: '200px'
      }, 2500);
  });

var button = $("btn")

// handle click and add class
btn.on("click", function() {
  $("html, body").animate({ scrollTop: $(document).height() }, 800);
})

/* ?(Fluent Design)-> is by Microsoft, used in Windows 10 devices and platforms. */

// code might be messy
// ===================

var btn = document.querySelector(".btn");

function addSpans(btn) {
  var span1 = document.createElement("span");
  span1.className = "span1";

  var span2 = document.createElement("span");
  span2.className = "span2";

  btn.appendChild(span1);
  btn.appendChild(span2);
}

function mouseEnter(span) {
  span.style.opacity = "1";
}

function mouseLeave(span) {
  span.style.opacity = "0";
}

function mouseDown(span) {
  span.style.transition = "box-shadow .6s";
  span.style.boxShadow = "0 0 10rem 4rem hsl(0, 0%, 94%), inset 0 0 1rem hsl(0, 0%, 94%)";
  span.style.width = "2rem";
  span.style.height = "2rem";
}

function mouseUp(span) {
  span.style.transition = "box-shadow 0s";
  span.style.boxShadow = "0 0 0 0 hsl(0, 0%, 94%), inset 0 0 1rem hsl(0, 0%, 94%)";
  span.style.width = "0";
  span.style.height = "0";
}

function mouseMove(span, e) {
  span.style.top = e.offsetY + "px";
  span.style.left = e.offsetX + "px";
}

function keyDown(span) {
  mouseDown(span);
  span.style.top = "100%";
  span.style.left = "50%";
}

window.addEventListener("load", addSpans(btn));
var span1 = btn.querySelector(".span1");
var span2 = btn.querySelector(".span2");


// mouse events
// ============
// edge issue
// not applying filter: blur() properly
if (window.navigator.userAgent.indexOf("Edge") > -1) {
  span1.style.display = "none";
} else {
  btn.addEventListener("mouseenter", function() { mouseEnter(span1) });
  btn.addEventListener("mouseleave", function() { mouseLeave(span1) });
  btn.addEventListener("mousemove", function(e) { mouseMove(span1, e) });
}

btn.addEventListener("mouseleave", function() { mouseUp(span2)} );
btn.addEventListener("mousemove", function(e) { mouseMove(span2, e) });
btn.addEventListener("mousedown", function() { mouseDown(span2) });
btn.addEventListener("mouseup", function() { mouseUp(span2) });

// keyboard events
// ===============
btn.addEventListener("keydown", function(e) {
  if(e.key === " " && (e.code === "Space" || e.keyCode === 32) || e.key === "Spacebar" && e.keyCode === 32) {
    keyDown(span2)
  }
})
btn.addEventListener("keyup", function(e) {
  if(e.key === " " && (e.code === "Space" || e.keyCode === 32) || e.key === "Spacebar" && e.keyCode === 32) {
    mouseUp(span2)
  }
})

// touch events
// ============
btn.addEventListener("touchstart", function() { keyDown(span2) });
btn.addEventListener("touchend", function() { mouseUp(span2) });
//







