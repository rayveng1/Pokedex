const type_colors = {
    "normal": "#a8a878",
    "fire": "#f08030",
    "water": "#6890f0",
    "electric": "#f8d030",
    "grass": "#78c850",
    "ice": "#98d8d8",
    "fighting": "#c03028",
    "poison": "#a040a0",
    "ground": "#e0c068",
    "flying": "#a890f0",
    "psychic": "#f85888",
    "bug": "#a8b820",
    "rock": "#b8a038",
    "ghost": "#705898",
    "dragon": "#7038f8",
    "dark": "#705848",
    "steel": "#b8b8d0",
    "fairy": "#f0b6bc",
}

async function generateNewPokemon(){
    const pokemonData = await requestPokeAPI(Math.ceil(Math.random() * 251));
    document.querySelector("main.container").innerHTML += `
    <section class="d-flex pokemon backdrop-blur-md">
            <div class="d-flex column pokemon_info">
                <h2 class="pokemon_name">${pokemonData[0]}</h2>
                <h4 class="pokemon_number">#${pokemonData[1]}</h4>
                <div class="d-flex">
                    ${pokemonData[2]}
                </div>
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
    const pokemonJSON = await response.json();
    let name = `${pokemonJSON.name[0].toUpperCase()}${pokemonJSON.name.substring(1, pokemonJSON.name.length)}`;
    getPokemonTypesHTML(pokemonJSON.types);
    let id = pokemonJSON.id;
    let type = getPokemonTypesHTML(pokemonJSON.types);

    const responseFlavorText = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`)
    const flavorTextJSON = await responseFlavorText.json();
    let flavorText = flavorTextJSON.flavor_text_entries[0].flavor_text.replace("", " ");
    let sprite = pokemonJSON.sprites.front_default;
    return [name, id, type, flavorText, sprite];
}

function getPokemonTypesHTML(pokemonTypes){
    console.log(pokemonTypes[0].type.name)
    let html = "";
    for(typeObj of pokemonTypes){
        console.log(typeObj)
        html += 
        `
        <div class="pokemon_type ${typeObj.type.name}">${typeObj.type.name[0].toUpperCase()}${typeObj.type.name.substring(1, typeObj.type.name.length)}</div>
        `
    }
    return html;
}
