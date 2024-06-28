
// import { UI } from './ui.js';
// import { GameDetails } from './details.js';

// export class FreeToPlayGames {
//     constructor(category) {
//         this.category = category;
//         this.apiKey = '0a034be5e9mshdeab3a859ab5756p1d08dajsn4d7ba4bad89a';
//         this.apiHost = 'free-to-play-games-database.p.rapidapi.com';
//     }

//     async getData() {
//         const options = {
//             method: 'GET',
//             headers: {
//                 'x-rapidapi-key': this.apiKey,
//                 'x-rapidapi-host': this.apiHost
//             }
//         };

//         try {
//             let response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${this.category}`, options);
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             let result = await response.json();
//             UI.displayGames(result);

//             document.querySelectorAll('.game-item').forEach(item => {
//                 item.addEventListener('click', (event) => {
//                     const gameId = event.currentTarget.getAttribute('data-id');
//                     const gameDetails = new GameDetails(gameId);
//                     gameDetails.getGameDetails();
//                 });
//             });
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     }

//     updateCategory(newCategory) {
//         this.category = newCategory;
//         this.getData();
//     }
// }

import { UI } from './ui.js';
import { GameDetails } from './details.js';

export class FreeToPlayGames {
    constructor(category) {
        this.category = category;
        this.apiKey = '0a034be5e9mshdeab3a859ab5756p1d08dajsn4d7ba4bad89a';
        this.apiHost = 'free-to-play-games-database.p.rapidapi.com';
    }

    async getData() {
        const loader = document.getElementById('loader');
        const showLoader = () => loader.classList.remove('d-none');
        const hideLoader = () => loader.classList.add('d-none');

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': this.apiKey,
                'x-rapidapi-host': this.apiHost
            }
        };

        try {
            showLoader();
            let response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${this.category}`, options);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            let result = await response.json();
            UI.displayGames(result);

            document.querySelectorAll('.game-item').forEach(item => {
                item.addEventListener('click', (event) => {
                    const gameId = event.currentTarget.getAttribute('data-id');
                    const gameDetails = new GameDetails(gameId);

                    showLoader();
                    gameDetails.getGameDetails().finally(hideLoader);
                });
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            hideLoader();
        }
    }

    updateCategory(newCategory) {
        this.category = newCategory;
        this.getData();

        // Remove active class from all links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            link.classList.add('link');
        });

        // Add active class to the clicked link
        const activeLink = document.querySelector(`[data-category="${newCategory}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
            activeLink.classList.remove('link');
        }
    }
}

