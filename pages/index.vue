<template>
  <l-s-table>
    <template #header>
      <h1 @click="dalhe">Teste</h1>
    </template>
  </l-s-table>
</template>

<script>
export default {
  methods: {
    dalhe() {
      alert('oioi')
    },
  },
}
</script>

<style></style>
