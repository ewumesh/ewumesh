window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    document.getElementById("header").style.padding = "0px ";
	document.getElementById("logo").style.fontSize = "10px";
	document.getElementById("logo").style.width = "40px";
	document.getElementById("logo").style.height = "40px";

	if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
		document.getElementById("navs").style.backgroundColor = "rgba(59, 59, 59, 0.5)";
	} else {
		document.getElementById("navs").style.backgroundColor = "";
		document.getElementById("navs").style.margin = "0px";
		document.getElementById("navs").style.padding = "10px 0";
	}
	
  } else {
    document.getElementById("header").style.padding = "0px 0px";
	document.getElementById("logo").style.fontSize = "20px";
	document.getElementById("logo").style.width = "60px";
	document.getElementById("logo").style.height = "60px";
  }
}



// For hide navbar on scroll
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
// var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("header").style.top = "0";
//   } else {
//     document.getElementById("header").style.top = "-100px";
//   }
//   prevScrollpos = currentScrollPos;
// }

// ...

var slides = document.querySelectorAll('#research .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}
