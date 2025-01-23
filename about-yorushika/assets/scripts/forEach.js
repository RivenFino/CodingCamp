const albums = [
    {
        id: "summer-grass",
        title: "Summer Grass",
        cover: "summer-grass.png"
    },
    {
        id: "underdog",
        title: "Underdog",
        cover: "underdog.png"
    },
    {
        id: "moonlight", 
        title: "Moonlight",
        cover: "moonlight.png"
    },
    {
        id: "elma",
        title: "Elma",
        cover: "elma.png"
    },
    {
        id: "plagiarism",
        title: "Plagiarism", 
        cover: "plagiarism.png"
    },
    {
        id: "creation",
        title: "Creation",
        cover: "creation.png"
    },
    {
        id: "magic-lantern",
        title: "Magic Lantern",
        cover: "magic-lantern.png"
    }
];

function renderAlbumList() {
    const albumList = document.querySelector('.album-list');
    albums.forEach(album => {
        const albumItem = `
            <a class="album-list-item" href="?album=${album.id}">
                <div class="album-cover">
                    <img src="assets/images/covers/${album.cover}" class="cover-size" height="200" alt="${album.id}">
                </div>
                <h3>${album.title}</h3>
            </a>
        `;
        albumList.innerHTML += albumItem;
    });
}

document.addEventListener('DOMContentLoaded', renderAlbumList);