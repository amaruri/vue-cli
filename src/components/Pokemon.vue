<template>
  <div>
    <h2>
      Pokemon: {{ pokemon.name }}
    </h2>

    <div>
      <div>
        <router-link :to="{ name: 'Pokemon', params: { id: pokemon.name} }">
          <img :src="(pokemon.sprites || {}).front_default" alt="" srcset="">
        </router-link>
      </div>

      <div>
        <div>
          <router-link :to="{ name: 'PokemonMoves' }">
            Ataques
          </router-link>
        </div>
        <div>
          <router-link :to="{ name: 'PokemonTypes' }">
            Tipos
          </router-link>
        </div>
      </div>

      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pokemon: {}
    }
  },
  computed: {
    id () {
      return this.$route.params.id
    }
  },
  mounted () {
    this.get()
  },
  methods: {
    async get () {
      const { data } = await this.$req.get(`pokemon/${this.id}`)
      this.pokemon = data
    }
  }
}
</script>
