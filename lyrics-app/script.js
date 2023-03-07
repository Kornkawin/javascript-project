const form=document.getElementById('form');
const search=document.getElementById('search');
const result=document.getElementById('result');
const more=document.getElementById('more');

const apiUrl = "https://api.lyrics.ovh";

form.addEventListener('submit', e=>{
    e.preventDefault();
    const songTxt = search.value.trim();
    if(!songTxt) {
        alert("Get wrong input!");
    } else {
        const res = searchLyrics(songTxt);
    }
});

const searchLyrics = async (song) => {
    const response = await fetch(`${apiUrl}/suggest/${song}`);
    const allSongs = await response.json();
    showData(allSongs);
}

const showData = (songs) => {
    result.innerHTML = `
        <ul class="song">
            ${songs.data.map(song=>
                `<li>
                    <span><strong>${song.artist.name}</strong> - ${song.title}</span>
                    <button>Lyric</button>
                </li>`
            ).join("")}
        </ul>
    `;
}
