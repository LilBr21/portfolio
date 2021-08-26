// let scroll = window.requestAnimationFrame || 
//     function(callback) {
//         window.setTimeout(callback, 1000/60)
//     };

// let elementsToShow = document.querySelectorAll('.show-on-scroll');

// function isElementInVievport(el) {
//     if (typeof jQuery === "function" && el instanceof jQuery) {
//         el = el[0];
//     }
//     var rect = el.getBoundingClientRect();
//         return (
//             (rect.top <= 0) 
//             ||
//             (rect.bottom >= (
//                 window.innerHeight || document.documentElement.clientHeight
//             )
//             && rect.top <= (
//                 window.innerHeight || document.documentElement.clientHeight
//             ))
//             ||
//             (rect.top >= 0 &&
//                 rect.bottom <= (window.innerHeight ||
//             document.documentElement.clientHeight)) 
//         );
// };

// function loop() {
//     Array.prototype.forEach.call(elementsToShow, 
//         function(element) {
//             if (isElementInVievport(element)) {
//                 element.classList.add('is-visible')
//             }
//         });
//         scroll(loop);
// };

// loop();

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('skills-row-animation');
        }
    });
});

observer.observe(document.querySelector('skills-row'));
