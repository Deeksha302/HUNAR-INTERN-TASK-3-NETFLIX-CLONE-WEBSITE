const rowPosters = document.querySelectorAll('.row-posters');

rowPosters.forEach(row => {
    row.addEventListener('wheel', (e) => {
        if (e.deltaY > 0) {
            row.scrollLeft += 100;
        } else {
            row.scrollLeft -= 100;
        }
    });
});
