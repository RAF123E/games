export class UI {
    static displayGames(games) {
        let cartona = '';
        for (let i = 0; i < games.length; i++) {
            cartona += `
                <div class="col-md-3 mt-3 game-item sm-100 md-50 lg-33 xl-25" data-id="${games[i].id}">
                    <img src="${games[i].thumbnail}" alt="" class="w-100">
                    <div class="d-flex justify-content-between py-3 px-3">
                        <h6 class="text-white">${games[i].title}</h6>
                        <span class="primary">Free</span>
                    </div>
                    <p class="text-center">${games[i].short_description}</p>
                    <div class="d-flex justify-content-between text-white">
                        <span class="text-bg-dark item">${games[i].genre}</span>
                        <span class="text-bg-dark">${games[i].platform}</span>
                    </div>
                </div>
            `;
        }
        document.getElementById('demo').innerHTML = cartona;
    }

    static displayGameDetails(game) {
        let details = `
            <div class="game-details col-md-4">
            <img src="${game.thumbnail}" alt="${game.title}">
            </div>
            <div class="col-md-7 offset-1 text-white" >
                <h3 class="mx-1"> Title: ${game.title}</h3>
                <h6>Category:<span class="text-bg-info mx-1"> ${game.genre}</span></h6>
                <h6>Platform:<span class="text-bg-info mx-1"> ${game.platform}</span></h6>
                <h6>Status:<span class="text-bg-info mx-1"> ${game.status}</span></h6>
                <h6 class="mt-4">${game.description}</h6>
                <a href="${game.game_url}" class="btn btn-outline-warning">Show Game</a>
            </div>
        `
        ;
        document.getElementById('details').innerHTML = details;

        
        document.querySelector('#demo1').classList.add('d-none');
        document.querySelector('#demo2').classList.remove('d-none');

        
        document.getElementById('btnClose').addEventListener('click', () => {
            document.querySelector('#demo1').classList.remove('d-none');
            document.querySelector('#demo2').classList.add('d-none');
        });
    }
}
