<template>
    <Filter />
    <SearchPokemon />
    <ListPokemon />
</template>

<script>
import ListPokemon from '../components/ListPokemon.vue'
import Filter from '../components/Filter.vue'
import SearchPokemon from '../components/SearchPokemon.vue'

export default {
  name: 'Home',
  components: {
    ListPokemon, Filter, SearchPokemon
  }
}

</script>
