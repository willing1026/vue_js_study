<template>
  <header>
      <h1>{{ propsdata }}</h1>
      <h2 v-text='propsdata'/>
  </header>
</template>

<script>
export default {
    props: ['propsdata']
}
</script>

<style>

</style>