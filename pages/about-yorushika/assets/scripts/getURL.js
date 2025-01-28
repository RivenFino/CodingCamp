// Ambil parameter album dari URL
const urlParams = new URLSearchParams(window.location.search);
const album = urlParams.get('album');
const menuItems = document.querySelectorAll('.menu');

// Sembunyikan semua album
document.querySelectorAll('.album-item').forEach((albumItem) => {
    albumItem.style.display = 'none';
});

if (album) {
    const targetAlbum = document.getElementById(album);
    if (targetAlbum) {
        targetAlbum.style.display = 'flex';
        // Scroll ke album yang dipilih
        targetAlbum.scrollIntoView({
            behavior: 'instant',   
            block: 'center'
        });
        // delay scroll offset
        setTimeout(() => {
            window.scrollBy({
                top: 600,
                behavior: 'smooth'
            });
        }, 400);
    }
}

menuItems.forEach((item) => {
    item.addEventListener('click', function (event) {
        if (window.location.search) {
            history.pushState({}, document.title, window.location.pathname);
        }
    });
});

