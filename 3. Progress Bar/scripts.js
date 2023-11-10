const progress = document.querySelector('.progress-bar__fill');

window.addEventListener('scroll', () => {
    const max = document.body.scrollHeight - innerHeight;
    progress.style.width = `${(scrollY / max) * 100}%`;
    }
);