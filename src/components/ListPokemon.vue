<template>
    <div>
        <div class="content text-center">
            <h1 class="encabezado-titulo">Pokémon</h1>
        </div>
 
        <div  class="container-fluid text-center">
            <div v-if="pokemon" class="list-items row p-5 d-flex justify-content-center">
                <router-link class="item col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-5" v-for="(poke, id) in pokemon" 
                                                                                    :key="id" 
                                                                                    :to="{name: 'PokemonDetail', params: {pokemonname: poke}}"
                                                                                    :title="`${id}-${poke}`">
                    <img loading="lazy" class="pokemon-list" :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`" :alt="`${id}-${poke}`">
                    <p class="gen">{{poke}}</p> 
                </router-link>
            </div>
            <div v-else  class="container-fluid text-center">
                <p class="poke-no-found">Pokémon no encontrado</p>
            </div>
        </div>
    </div>
</template>

<script>
import {useStore} from 'vuex'
import { onMounted, computed } from '@vue/runtime-core'

export default {
    setup(){
        const store = useStore()

        const pokemon = computed(() =>{
            return store.getters.pokemonList
        })

        onMounted(async() => {
            await store.dispatch('requestAllPokemon')
            await store.dispatch('filterPokemon', 'all')
        })

        window.scrollTo(0, 0);

        return {pokemon}
    },
}
</script>

<style>
.poke-no-found{
    margin-top: 1em;
    font-size: 50px;
    color: rgb(168, 0, 0);
}
</style>