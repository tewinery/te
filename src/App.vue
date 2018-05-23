<template>
  <div id="app" class="c_app" :class="{ 'is-navbar-toggled': navbarToggled }">
    <Navbar @navbar-toggled="toggleNavbar" :toggled="navbarToggled" />
    <Home />
  </div>
</template>

<script>
  import Home from '@/components/Home';
  import Navbar from '@/components/Navbar';

  export default {
    name: 'App',

    data() {
      return {
        navbarToggled: false,
      };
    },

    components: { Navbar, Home },

    methods: {
      toggleNavbar() {
        this.navbarToggled = !this.navbarToggled;
      },
    },
  };
</script>

<style lang="scss"></style>
