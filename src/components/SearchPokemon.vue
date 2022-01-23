<template>
    <div class="search-input mx-auto">
        <input
            class="form-control mr-sm-2 mb-3 mt-3"
            type="text"
            placeholder="Ej: Pikachu"
            v-model.trim='searchValue'
            @keyup="searchPokemon">
    </div>
    
</template>

<script>
import { ref } from '@vue/reactivity'

import { useStore } from 'vuex'

export default {
    setup() {
        const searchValue = ref('')
        const store = useStore()

        const searchPokemon = () => {
            const pokemonName = searchValue.value.toLowerCase()
            store.dispatch('filterSearch', pokemonName)
        }

        return {searchValue, searchPokemon}


    }
}
</script>