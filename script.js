async function generateNewPokemon(){
    const pokemonData = await requestPokeAPI(Math.ceil(Math.random() * 151));
    document.querySelector("main.container").innerHTML += `
    <section class="d-flex pokemon">
            <div class="d-flex column pokemon_info">
                <h2 class="pokemon_name">${pokemonData[0]}</h2>
                <h4 class="pokemon_number">#${pokemonData[1]}</h4>
                <h3 class="pokemon_type">${pokemonData[2]}</h3>
            </div>
            <p class="pokemon_description">${pokemonData[3]}</p>
            <img class="pokemon_img" src="${pokemonData[4]}" alt="bulbasaur picture">
        </section>
    `
}

function resetPokedex(){
    document.querySelector("main.container").innerHTML = ""
}

async function requestPokeAPI(pokemon){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const pokemonJSON = await response.json();;
    let name = `${pokemonJSON.name[0].toUpperCase()}${pokemonJSON.name.substring(1, pokemonJSON.name.length)}`;
    let id = pokemonJSON.id;
    let hi = pokemonJSON.types[0].type.name
    let type = `${pokemonJSON.types[0].type.name[0].toUpperCase()}${pokemonJSON.types[0].type.name.substring(1, pokemonJSON.types[0].type.name.length)}`;

    const responseFlavorText = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`)
    const flavorTextJSON = await responseFlavorText.json();
    let flavorText = flavorTextJSON.flavor_text_entries[0].flavor_text.replace("", " ");
    let sprite = pokemonJSON.sprites.front_default;
    return [name, id, type, flavorText, sprite];
}
