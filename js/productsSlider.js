(function() {
	var propertySliderAboutUs = {

		slider: document.getElementById('products-slider'),
		firstSlide: null

	}

	var methodSliderAboutUs = {

		start: function() {

			setInterval(methodSliderAboutUs.moveSlideAboutUs, 4000);

		},

		moveSlideAboutUs: function() {

			propertySliderAboutUs.slider.style.transition = 'all 1s ease';
			propertySliderAboutUs.slider.style.marginLeft = '-300px';

			setTimeout(function() {

				propertySliderAboutUs.firstSlide = propertySliderAboutUs.slider.firstElementChild;
				propertySliderAboutUs.slider.appendChild(propertySliderAboutUs.firstSlide);
				propertySliderAboutUs.slider.style.transition = 'unset';
				propertySliderAboutUs.slider.style.marginLeft = 0;

			}, 1000);

		}

	}

	methodSliderAboutUs.start();

}())