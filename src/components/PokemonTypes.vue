<template>
  <div>
    <h2>
      Tipo
    </h2>
    <div v-for="type, index in types" :key="`type-${index}`">
        {{ type.type.name }}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      types: []
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
      this.types = data.types
    }
  }
}
</script>
