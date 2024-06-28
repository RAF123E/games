


// import { FreeToPlayGames } from './games.js';

// document.addEventListener('DOMContentLoaded', () => {
//     const games = new FreeToPlayGames('mmorpg');
//     const loader = document.getElementById('loader');
    
//     const showLoader = () => loader.classList.remove('d-none');
//     games.getData();

//     document.querySelectorAll('.nav-link').forEach(link => {
//         link.addEventListener('click', (event) => {
//             event.preventDefault();

//             // Remove active class from all links
//             document.querySelectorAll('.nav-item .nav-link').forEach(link => {
//                 link.classList.remove('active');
//                 link.classList.add('link');
//             });

//             // Add active class to the clicked link
//             event.target.classList.remove('link');
//             event.target.classList.add('active');

//             // Get the category from the clicked link
//             const category = event.target.getAttribute('data-category');
//             games.updateCategory(category);
//         });
//     });
// });


import { FreeToPlayGames } from './games.js';

document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    
    const showLoader = () => loader.classList.remove('d-none');
    const hideLoader = () => loader.classList.add('d-none');

    const games = new FreeToPlayGames('mmorpg');
    
    showLoader();
    games.getData().finally(hideLoader);

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            // Remove active class from all links
            document.querySelectorAll('.nav-item .nav-link').forEach(link => {
                link.classList.remove('active');
                link.classList.add('link');
            });

            // Add active class to the clicked link
            event.target.classList.remove('link');
            event.target.classList.add('active');

            // Show loader
            showLoader();

            // Get the category from the clicked link and fetch data
            const category = event.target.getAttribute('data-category');
            games.updateCategory(category).finally(hideLoader);
        });
    });
});
