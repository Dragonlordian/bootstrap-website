

async function renderArtists() {
    const artistsList = document.getElementById('artists-list')
    const artistsSlides = document.getElementById('artists-slides')

    const response = await fetch('/script/data/artists.json')
    const artistsData = await response.json();

    artistsData.data.forEach((artist,i) => {
        
        artistsList.innerHTML += `<a class="col d-flex card" data-index="${artist.id}" href="/artist.html?id=${artist.id}"> 
                                    <div class="card artist-card w-100 rounded-0" style="background-image: url(${artist.photo_path});">
                                        <div class="card-body text-center text-white">
                                            <div class="display-2">
                                                <h5 class="card-title display-2--desc">${artist.name}</h5>
                                            </div>
                                        </div>
                                    </div>
                                  </a>`
                                  
        if(i === 0){
            artistsSlides.innerHTML += `<a class="carousel-item active card" href="/artist.html?id=${artist.id}">
                                            <img class="d-block w-100" src=${artist.photo_path} alt="${artist.name}">
                                            <div class="carousel-caption">
                                                <div class="display-2">
                                                    <h5 class="card-title display-2--desc">${artist.name}</h5>
                                                </div>
                                            </div>
                                        </a>
                                    `
        }else{
            artistsSlides.innerHTML += `<a class="carousel-item card" href="/artist.html?id=${artist.id}">
                                            <img class="d-block w-100" src=${artist.photo_path} alt="${artist.name}">
                                            <div class="carousel-caption">
                                                <div class="display-2">
                                                    <h5 class="card-title display-2--desc">${artist.name}</h5>
                                                </div>
                                            </div>
                                        </a>
                                    `
        }
        

        
    });
}

document.addEventListener("DOMContentLoaded", () =>{
    renderArtists()

    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', () => {
          const offcanvas = document.querySelector('#offcanvasNavbar');
          const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
          if (bsOffcanvas) {
            bsOffcanvas.hide();
          }
        });
    });
})

