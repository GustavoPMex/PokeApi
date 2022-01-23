import { createStore } from 'vuex'
import { pokemonFormat } from '../hooks/pokemonFormat'
import {typeEs} from '../hooks/typesEs'
import {genFilter} from '../hooks/genFilter.js'

export default createStore({
  state: {
    all_pokemon: [],
    filter_pokemon: [],
    pokemon_details: {}
  },
  mutations: {
    setAllPokemon(state, payload){
      state.all_pokemon = payload
    },

    setFilterPokemon(state, payload){
      state.filter_pokemon = payload
    },
    setPokemonDetail(state, payload){
      state.pokemon_details = payload
    }
  },
  actions: {
    async requestAllPokemon({commit}){
      try {
        const request = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=898')
        const data = await request.json()
        
        const allpokemon = data["results"]

        commit('setAllPokemon', pokemonFormat(allpokemon))

      } catch (error) {
        console.log(error)
      }
    },
    async requestPokemonDetail({commit}, name){
      try {
        const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const data = await request.json()
        data.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`
        data.type_es = typeEs(data.types)
        commit('setPokemonDetail', data)
        
      } catch (error) {
        console.log(error)
      }
    },
    filterPokemon({commit, state}, generacion){
      let pokemons = []
      if (generacion === 'all') {
        pokemons = state.all_pokemon
      }else{
        const asArray = Object.entries(state.all_pokemon);
        const range = genFilter(generacion)

        const PokeFiltered = asArray.filter(element => {
          const currentNumber = Number(element[0])
          if (currentNumber >= range.min && currentNumber <= range.max) {
            return element
          }

        });

        pokemons = Object.fromEntries(PokeFiltered);
      }
      
      commit('setFilterPokemon', pokemons)
    },
    filterSearch({commit, state}, nameInput){
      const textInput = nameInput.toLowerCase()
      const asArray = Object.entries(state.all_pokemon);

      const filter = asArray.filter(element => {
        const currentName = element[1]
        //  Para que el include busque solo al principio del string
        const lenNameInput = nameInput.length
        const name = currentName.slice(0, lenNameInput)
        
        if (name.includes(textInput)) {
          return element
        }
      })

      const pokemons = Object.fromEntries(filter)
      let pokemonResult = ''

      if (Object.values(pokemons).length){
        pokemonResult = pokemons
      } else {
        pokemonResult = false
      }
      
      commit('setFilterPokemon', pokemonResult)
    }
  },
  getters:{
    pokemonList(state){
      return state.filter_pokemon
    },
    pokemonDetail(state){
      return state.pokemon_details
    }
  },
  modules: {
  }
})
