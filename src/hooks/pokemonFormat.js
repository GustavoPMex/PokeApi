

export function pokemonFormat(obj){
    const formattedList = []
    
    function get_pokemon_number(url_pokemon){
        return url_pokemon.split('/')[6]
    }

    function sortedByKeys(list_dis) {
        return Object.keys(list_dis).sort().reduce((r, k) => (r[k] = list_dis[k], r), {})
    }

    for(const pokemon in obj){
        const current_id = get_pokemon_number(obj[pokemon].url)
        const current_pokemon = obj[pokemon].name
        formattedList[current_id] = current_pokemon
    }

    return sortedByKeys(formattedList)
}