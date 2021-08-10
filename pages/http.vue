<template>
  <div></div>
</template>

<script>
import api from '@/service/api'
export default {
  async mounted() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const response = await api.get('information/last')
    debugger
  },
}
</script>
