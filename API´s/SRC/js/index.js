document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const Buscador = document.getElementById('searchInput').value;
    searchAnime(Buscador);
});

async function searchAnime(Buscador) {
    await fetch(`https://api.jikan.moe/v4/anime?q=${Buscador}`)
        .then(response => response.json())
        .then(data => {
            const animeList = data.data;
            displayResults(animeList);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function displayResults(animeList) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    animeList.forEach(anime => {
        const animeCard = document.createElement('div');
        animeCard.className = 'col-md-4 mb-4';
        animeCard.innerHTML = `
            <div class="card mb-3 shadow-lg " style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${anime.images.jpg.image_url}" class="img-fluid rounded-start" alt="${anime.title}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${anime.title}</h5>
                            <p class="card-text">Episodios: ${anime.episodes}</p>
                            <p class="card-text">Puntuación: ${anime.score}</p>
                            <a href="https://myanimelist.net/anime/${anime.mal_id}" class="btn btn-dark text-center" target="_blank">Más Información</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        resultsContainer.appendChild(animeCard);
    });
}


