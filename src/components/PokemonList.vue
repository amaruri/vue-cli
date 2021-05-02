<template>
  <div style="width: 100%; margin: 0 20%">
    <table style="width: 100%; text-align: left;">
      <thead>
        <tr>
          <th style="width: 20%;">
            Número en pokedex
          </th>
          <th>
            Nombre
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pokemon, index in list" :key="`pokemon-${index}`">
          <th>
            {{ index + 1 }}
          </th>
          <th>
            <router-link :to="{ name: 'Pokemon', params: { id: pokemon.name } }">
              {{ pokemon.name }}
            </router-link>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  mounted () {
    this.get()
  },
  methods: {
    async get () {
      const { data } = await this.$req.get(`/pokemon?offset=0&limit=151`)
      this.list = data.results
    }
  }
}
</script>
