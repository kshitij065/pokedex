const pokemonList = [
  {
    name: 'Bulbasaur',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    type: ['Grass', 'Poison'],
    description: 'A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.'
  },
  {
    name: 'Charmander',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    type: ['Fire'],
    description: 'The flame on its tail shows the strength of its life force. If it is weak, the flame also burns weakly.'
  },
  {
    name: 'Squirtle',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
    type: ['Water'],
    description: 'When it retracts its long neck into its shell, it squirts out water with vigorous force.'
  }
];

const pokemonListElement = document.getElementById('pokemon-list');

function renderPokemonList() {
  pokemonList.forEach(pokemon => {
    const pokemonElement = document.createElement('li');
    pokemonElement.innerHTML = `
      <img src="${pokemon.image}" alt="${pokemon.name}">
      <h2>${pokemon.name}</h2>
      <p>Type: ${pokemon.type.join(', ')}</p>
      <p>${pokemon.description}</p>
    `;
    pokemonListElement.appendChild(pokemonElement);
  });
}

renderPokemonList();
