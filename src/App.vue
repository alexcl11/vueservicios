<template>
  <MenuComponent/>
  <router-view></router-view>
</template>

<script>
// import CochesComponent from './components/CochesComponent.vue'
// import CustomersComponent from './components/CustomersComponent.vue'
// import EmpleadosComponent from './components/EmpleadosComponent.vue'
import MenuComponent from './components/MenuComponent.vue'

export default {
  name: 'App',
  components: {
    // CochesComponent, 
    // CustomersComponent
    // EmpleadosComponent
    MenuComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
