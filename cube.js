document.querySelectorAll('.face').forEach(face => {
    face.addEventListener('click', function (e) {
        if (!e.currentTarget.classList.contains('face')) return;
        const color = window.getComputedStyle(face).backgroundColor;
        document.body.style.backgroundColor = color;
    });
});