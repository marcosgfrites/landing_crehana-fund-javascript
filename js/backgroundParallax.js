(function() {

	var propertyParallax = {

		section: document.querySelector('.parallax'),
		career: null,
		limit: null

	};

	var methodParallax = {
		
		start: function () {

			window.addEventListener('scroll', methodParallax.scrollParallax);
		},

		scrollParallax: function() {

			propertyParallax.career = window.pageYOffset;
			propertyParallax.limit = propertyParallax.section.offsetTop + propertyParallax.section.offsetHeight;

			if (propertyParallax.career > propertyParallax.section.offsetTop - window.outerHeight && propertyParallax.career <= propertyParallax.limit) {

				propertyParallax.section.style.backgroundPositionY = (propertyParallax.career - propertyParallax.section.offsetTop) / 1.5 + 'px';

			} else {

				propertyParallax.section.style.backgroundPositionY = 0;

			};

		}

	};

	methodParallax.start();

}())