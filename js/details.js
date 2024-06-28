import { UI } from './ui.js';

export class GameDetails {
    constructor(gameId) {
        this.gameId = gameId;
        this.apiKey = '0a034be5e9mshdeab3a859ab5756p1d08dajsn4d7ba4bad89a';
        this.apiHost = 'free-to-play-games-database.p.rapidapi.com';
    }

    async getGameDetails() {
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': this.apiKey,
                'x-rapidapi-host': this.apiHost
            }
        };

        try {
            let response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${this.gameId}`, options);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            let game = await response.json();
            UI.displayGameDetails(game);
        } catch (error) {
            console.error('Error fetching game details:', error);
        }
    }
}
