class Parallax {
    constructor() {
        
        this.events()
    }

    events() {
        window.addEventListener('scroll', this.throttle(this.parallaxFunction, 14));
    }

    throttle(fn, wait) {
        var time = Date.now();
        return function() {
          if ((time + wait - Date.now()) < 0) {
            fn();
            time = Date.now();
          }
        }
    };

    parallaxFunction() {
        var scrolled = window.pageYOffset;
        var parallax = document.querySelector(".parallax");
        // You can adjust the 0.4 to change the speed
        var coords = (scrolled * 0.4) + 'px'  
        parallax.style.transform = 'translateY(' + coords + ')';
    }
}

export default Parallax;