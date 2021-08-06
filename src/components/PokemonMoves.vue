<template>
  <div>
    <h2>
      Ataques
    </h2>
    <div v-for="move, index in moves" :key="`move-${index}`">
        {{ move.move.name }}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      moves: []
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
      this.moves = data.move
    }
  }
}
</script>
