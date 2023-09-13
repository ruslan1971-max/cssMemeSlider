const buttonsWrapper = document.querySelector(".about__pagination");
const slides = document.querySelector(".about__slider");
const descriptions = document.querySelector('.slider__text');

buttonsWrapper.addEventListener("click", e => {
  if (e.target.nodeName === "BUTTON") {
    Array.from(buttonsWrapper.children).forEach(item =>
      item.classList.remove("active")
    );
    if (e.target.classList.contains("first")) {
      slides.style.transform = "translateX(-0%)";
			descriptions.style.transform = "translateX(-0%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("second")) {
      slides.style.transform = "translateX(-100%)";
			descriptions.style.transform = "translateX(-25%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains('third')){
      slides.style.transform = 'translatex(-200%)';
			descriptions.style.transform = "translateX(-50%)";
      e.target.classList.add('active');
    }
	   else if (e.target.classList.contains('fourth')){
		  slides.style.transform = 'translatex(-300%)';
			descriptions.style.transform = "translateX(-75%)";
		  e.target.classList.add('active');
	  }
  }
});



