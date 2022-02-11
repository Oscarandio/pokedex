// Seleccionamos el contenedor de pokemons
const pokemonContainer = document.querySelector(".pokemon-container");

// Traemos la api de los pokemon con su id
async function getPokemon(id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
  const response = await fetch(url);
  const data = await response.json();
  return createPokemon(data);
}

function listPokemon(number) {
    for (let i = 1; i <= number; i++) {
        getPokemon(i);
    }
}

function createPokemon(pokemon) {
    const card = document.createElement('div');
    card.classList.add('pokemon-block');

    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('img-container');

    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.front_default;

    spriteContainer.appendChild(sprite);

    const number = document.createElement('div');
    number.classList.add('number');
    number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

    const name = document.createElement('div');
    name.classList.add('name');
    name.textContent = pokemon.name;

    const type = document.createElement('div');
    type.classList.add('type');
    type.textContent = "Tipo: " + pokemon.types[0].type.name;

    const ability = document.createElement('div');
    ability.classList.add('type');
    ability.textContent = "Habilidad: " + pokemon.abilities[0].ability.name;

    card.appendChild(name);
    card.appendChild(number);
    card.appendChild(spriteContainer);
    card.appendChild(type);
    card.appendChild(ability);



    pokemonContainer.appendChild(card);
}

listPokemon(898);


// Creamos las funciones donde hacemos la request de los pokemon a listar después
// async function getPokemonIds(n = 9) {
//   const pokemon = await getPokemon(id);
//   const ids = pokemon.slice(0, n).map((pokemon) => pokemon.id);
//   return ids;
// }

// async function listPokemon() {
//   const ids = await getPokemonIds();
//   const pokemons = [];

//   for (const id of ids) {
//     const pokemon = await getPokemon(id);
//     pokemons.push(pokemon);
//   }

//   return pokemons;
// }
