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






