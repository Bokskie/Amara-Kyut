document.addEventListener('DOMContentLoaded', function () {

    const elementsToAnimate = {
        '.home-header-name': 'slideFromLeft',
        '.home-sub-header-name': 'slideFromLeft',
        '.home-paragraph': 'slideFromLeft',
        '.home-social-media-icons': 'slideFromBottom',
        '.home-buttons': 'slideFromBottom',
        '.home-image-container': 'slideFromRight',
        '.management-content': 'slideFromBottom',
        '.device-responsive-header-name': 'slideFromTop',
        '.device-responsive-text-header-name': 'slideFromLeft',
        '.device-responsive-paragraph': 'slideFromRight',
        '.device-responsive-image-section': 'slideFromBottom',
        '.about-header-name': 'slideFromTop',
        '.about-history-header-name': 'slideFromLeft',
        '.about-history-paragraph': 'slideFromRight',
        '.about-image': 'slideFromBottom'
    };

   
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const animationClass = elementsToAnimate['.' + element.classList[0]];

                if (animationClass) {
                    element.classList.add(animationClass);
                }

          
                observer.unobserve(element);
            }
        });
    }, {
        threshold: 0.1
    });


    Object.keys(elementsToAnimate).forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            observer.observe(element);
        });
    });
});
