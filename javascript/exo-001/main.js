const apis = {
    characters: {
        url: 'https://hp-api.onrender.com/api/characters'
    }
};

async function getAllCharactersRaw() {
    const response = await fetch(apis.characters.url);
    const characters = await response.json();

    return characters;
}

async function getAllCharacters(getAllRaw) {
    const characters = await getAllRaw();
    return characters.map(character => ({ prenom: character.name, nom: character.name }));
}

async function afficherCharacters(callbackAffichage) {
    if (typeof callbackAffichage !== 'function') {
        throw new Error('callbackAffichage doit être une fonction');
    }

    const characters = await getAllCharacters(getAllCharactersRaw);
    callbackAffichage(characters);
}

function afficherCharactersInConsole(characters) {
    characters.forEach(character => console.info(`${character.prenom} ${character.nom}`));
}

function afficherCharactersInUl(characters) {
    const ul = document.createElement('ul');

    characters.forEach(character => {
        const li = document.createElement('li');
        li.textContent = `${character.prenom} ${character.nom}`;

        ul.appendChild(li);
    });

    document.body.appendChild(ul);
}

const styleAffichage = [afficherCharactersInConsole, afficherCharactersInUl];

// afficherCharacters(1); // possible mais pas normal à faire

afficherCharacters(styleAffichage[0]);
afficherCharacters(styleAffichage[1]);