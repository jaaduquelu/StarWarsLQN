let pokemonNames = ['audino', 'bagon', 'baltoy', 'banette', 'bidoof', 'braviary', 'bronzor', 'carracosta', 'charmeleon', 'cresselia', 'croagunk', 'darmanitan', 'deino', 'emboar',
    'emolga', 'exeggcute', 'gabite', 'girafarig', 'gulpin', 'haxorus', 'heatmor', 'heatran', 'ivysaur', 'jellicent', 'jumpluff', 'kangaskhan', 'kricketune', 'landorus',
    'ledyba', 'loudred', 'lumineon', 'lunatone', 'machamp', 'magnezone', 'mamoswine', 'nosepass', 'petilil', 'pidgeotto', 'pikachu', 'pinsir', 'poliwrath', 'poochyena',
    'porygon2', 'porygonz', 'registeel', 'relicanth', 'remoraid', 'rufflet', 'sableye', 'scolipede', 'scrafty', 'seaking', 'sealeo', 'silcoon',
    'simisear', 'snivy', 'snorlax', 'spoink', 'starly', 'tirtouga', 'trapinch', 'treecko', 'tyrogue', 'vigoroth', 'vulpix', 'wailord', 'wartortle', 'whismur', 'wingull', 'yamask'];

let longest = [];
let found;

for (i = 0; i < pokemonNames.length; i++) {
    let current = [];
    current.push(pokemonNames[i]); //Starts the root of the sequence    
    let temp = pokemonNames.slice();
    temp.splice(i, 1);  // Delete the current

    do {
        found = false;
        let last = current[(current.length) - 1]?.slice(-1);
        for (y = 0; y < temp.length; y++) {
            if (temp[y].slice(0, 1) == last) {
                current.push(temp[y]);
                temp.splice(y, 1);
                found = true;
                y = temp.length;
            }
        }
    } while (found);

    if (current.length >= longest.length) {
        longest = current;
    }
}
console.log(longest);