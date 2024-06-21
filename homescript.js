let slideIndex = 0;
        const slidesWrapper = document.querySelector('.slides-wrapper');
        const dots = document.querySelectorAll('.dot');
        const totalSlides = document.querySelectorAll('.mySlides').length;

        function plusSlides(n) {
            slideIndex += n;
            if (slideIndex > totalSlides - 3) {
                slideIndex = 0;
            } else if (slideIndex < 0) {
                slideIndex = totalSlides - 3;
            }
            showSlides();
        }

        function currentSlide(n) {
            slideIndex = n - 1;
            showSlides();
        }

        function showSlides() {
            slidesWrapper.style.transform = `translateX(-${slideIndex * 34.33}%)`;
            dots.forEach((dot, index) => {
                dot.className = dot.className.replace(" active", "");
                if (index === slideIndex) {
                    dot.className += " active";
                }
            });
        }

        showSlides();