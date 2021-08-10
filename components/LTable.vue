<template>
  <div>
    <v-table>
      <template v-for="(index, name) in $scopedSlots" #[name]="data">
        <slot :name="name" v-bind="data" />
      </template>
    </v-table>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
