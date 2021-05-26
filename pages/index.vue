<template>
  <div></div>
</template>

<script>
import api from '@/service/api'
export default {
  async mounted() {
    const response = await api.get('information/last')
    debugger
  },
}
</script>
/information/last
