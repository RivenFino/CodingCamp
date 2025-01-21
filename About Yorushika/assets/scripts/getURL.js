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
    }
}

menuItems.forEach((item) => {
    item.addEventListener('click', function(event) {
        // Menghapus query string jika ada
        if (window.location.search) {
            history.pushState({}, document.title, window.location.pathname);
        }
    });
});

