<template>
      <div class="content w-100 mt-5 mt-xs-0 mt-lg-0 mb-5 mx-0 p-lg-5">
        <div class="pokemon-card-content mx-auto text-center disable-select">
            <div class="mb-2 mb-md-5">
                <h1 class="encabezado-titulo">{{poke_details.name}}</h1>
                <div class="container-img-pokemon mx-auto mt-4">
                    <img v-if="poke_details.image" class="img-pokemon" :src="`${poke_details.image}`"  :alt="`${poke_details.name}`">
                    <img v-else  class="img-pokemon" src="../../public/assets/poke_ball.svg" alt="NOT FOUND">
                </div>
            </div>

            <div class="card-pokemon mt-0 text-center">
                <div class="section">
                    <p v-if="poke_details.types && poke_details.types.length > 1" class="section-titulo">Tipos</p>
                    <p v-else class="section-titulo">Tipo</p>
                    <p class="section-respuesta type-pokemon" 
                        :style="{background: pokemon_colours[type.type.name]}"
                        v-for="(type, index) in poke_details.types"
                        :key="index">
                        {{poke_details.type_es[type.type.name]}}
                    </p>
                </div>
                <div class="section mt-4">
                    <p class="section-titulo">Experiencia base</p>
                    <p class="section-respuesta">{{poke_details.base_experience}} XP</p>
                </div>
                <div class="section mt-4">
                    <p class="section-titulo">Altura</p>
                    <p class="section-respuesta">{{poke_details.height / 10}} m</p>
                </div>
                <div class="section mt-4">
                    <p class="section-titulo">Peso</p>
                    <p class="section-respuesta">{{poke_details.weight / 10}} kg</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import { onMounted, computed } from '@vue/runtime-core'
import {useRoute} from 'vue-router'

export default {

    setup(props) {

        const pokemon_colours =  {
            normal: '#A8A77A',
            fire: '#EE8130',
            water: '#6390F0',
            electric: '#F7D02C',
            grass: '#7AC74C',
            ice: '#96D9D6',
            fighting: '#C22E28',
            poison: '#A33EA1',
            ground: '#E2BF65',
            flying: '#A98FF3',
            psychic: '#F95587',
            bug: '#A6B91A',
            rock: '#B6A136',
            ghost: '#735797',
            dragon: '#6F35FC',
            dark: '#705746',
            steel: '#B7B7CE',
            fairy: '#D685AD',
        }

        const store = useStore()

        const poke_name = useRoute().params.pokemonname

        const poke_details = computed(() => {
            return store.getters.pokemonDetail
        })

        onMounted(async() =>{
            await store.dispatch('requestPokemonDetail', poke_name)
        })

        window.scrollTo(0, 0);
        return {poke_details, pokemon_colours}

    }
}
</script>

