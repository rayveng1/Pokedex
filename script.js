function generateNewPokemon(){
    document.querySelector("main.container").innerHTML += `
    <section class="d-flex pokemon">
            <div class="d-flex column pokemon_info">
                <h2 class="pokemon_name">Bulbasaur</h2>
                <h4 class="pokemon_number">#001</h4>
                <h3 class="pokemon_type">Grass</h3>
            </div>
            <p class="pokemon_description">Some filler text that I can think of that blaha blahadfisjfaslfsl;ajfsl;afjl;jfl;wajfl;k sakldfnl;asjf l;kfjwi'aofj lk;asfkn lka sfj
                pawjfioasjflkjsal;djflk;asjdf
            </p>
            <img class="pokemon_img" src="./bruce.jpg" alt="bulbasaur picture">
        </section>
    `
    console.log("hei");
}

function resetPokedex(){
    document.querySelector("main.container").innerHTML = ""
}