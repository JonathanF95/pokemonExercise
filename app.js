const pokemonDiv = document.querySelector('.pokemon');

function pokemonCreator(){
    for(let i = 1; i <= 151; i++){
        let pokemonImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
        let div = document.createElement('div');
        let label = document.createElement('span');
        label.textContent = `# ${i}`;
        div.classList.add('active');
        let img = document.createElement('img');
        img.src = pokemonImg;
        div.appendChild(img);
        div.appendChild(label);
        pokemonDiv.appendChild(div)
    }
}



pokemonCreator();