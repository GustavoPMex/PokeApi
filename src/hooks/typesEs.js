

export function typeEs(types){
    const types_es = []

    const pokemon_type_es = {
        normal: 'normal',
        fire: 'fuego',
        water: 'Agua',
        electric: 'eléctrico',
        grass: 'planta',
        ice: 'hielo',
        fighting: 'lucha',
        poison: 'veneno',
        ground: 'tierra',
        flying: 'volador',
        psychic: 'psíquico',
        bug: 'bicho',
        rock: 'roca',
        ghost: 'fantasma',
        dragon: 'dragón',
        dark: 'siniestro',
        steel: 'acero',
        fairy: 'hada',
    }
    types.forEach(current_type => {
        const name_type = current_type.type.name
        types_es[name_type] = pokemon_type_es[name_type]
    })

    return types_es
}