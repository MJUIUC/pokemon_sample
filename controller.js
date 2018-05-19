// Persistant state object
const state = {};
// Dom elements
const goButton = $('#go-button');
const searchBar = $('#search-bar');
const pokemonSprite = $('#pokemon-sprite');

const pokeApiBaseUrlV2 = 'https://pokeapi.co/api/v2';

goButton.on('click', () => {
    $.get(`${pokeApiBaseUrlV2}/pokemon/${searchBar.val()}`, result => {
        // Here we can set the sprite of the searched pokemon
        pokemonSprite.attr('src', result.sprites.front_default);
        // Show the returned data object
        console.log('pokemon api response: ', result);
        // get the description of the pokemon
        $.get(`${pokeApiBaseUrlV2}/pokemon-species/${result.id}`, descriptionCallResult => {
            console.log('description result: ', descriptionCallResult.flavor_text_entries[2]);
        });
    }).fail( err => {
        if (err.status === 404) {
            // could change this to something pretty later
            console.log('pokemon not found');
        }
    });
});
