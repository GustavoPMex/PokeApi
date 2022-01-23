<template>
    <div class="text-center mt-5">
        <h3 class="encabezado-titulo">Generaciones</h3>
        <div class="btn-group flex-wrap my-3 mx-4">
            <button class="btn btn-dark btn-filter" @click="filter_gen('all')">Todas</button>
            <button class="btn btn-dark btn-filter" @click="filter_gen(1)">1°</button>
            <button class="btn btn-dark btn-filter" @click="filter_gen(2)">2°</button>
            <button class="btn btn-dark btn-filter" @click="filter_gen(3)">3°</button>
            <button class="btn btn-dark btn-filter" @click="filter_gen(4)">4°</button>
            <button class="btn btn-dark btn-filter" @click="filter_gen(5)">5°</button>
            <button class="btn btn-dark btn-filter" @click="filter_gen(6)">6°</button>
            <button class="btn btn-dark btn-filter" @click="filter_gen(7)">7°</button>
            <button class="btn btn-dark btn-filter" @click="filter_gen(8)">8°</button>
        </div>
    </div>
</template>

<script>
import ListPokemon from '../components/ListPokemon.vue'
import { useStore } from 'vuex'

export default {
    name: 'Home',
    components: {
        ListPokemon
    },
    setup() {
        
        const store = useStore()

        const filter_gen = (gen) => {
            store.dispatch('filterPokemon', gen)
        }

        return {filter_gen}
    }
}

</script>

<style>
.text-btns{
    font-size: 40px;
    color: white;
}

.btn-filter{
    font-size: 20px !important;
    margin-bottom: .5em;
}

</style>