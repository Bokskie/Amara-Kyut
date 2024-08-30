document.addEventListener('DOMContentLoaded', function() {
    var container = document.querySelector('.services-container');
    var wrapper = document.querySelector('.services-content-wrapper');

    var isPaused = false;

    container.addEventListener('click', function() {
        if (isPaused) {
            wrapper.style.animationPlayState = 'running';
            isPaused = false;
        } else {
            wrapper.style.animationPlayState = 'paused';
            isPaused = true;
        }
    });

    document.addEventListener('click', function(event) {
        if (!container.contains(event.target)) {
            if (isPaused) {
                wrapper.style.animationPlayState = 'running';
                isPaused = false;
            }
        }
    });
});
