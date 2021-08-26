
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('skills-row-animation');
        }
    });
});

observer.observe(document.querySelector('skills-row'));
