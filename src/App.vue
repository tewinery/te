<template>
  <div
    id="app"
    class="c_app has-background-white-bis"
    :class="{ 'is-navbar-toggled': navbarToggled }"
  >
    <Navbar @navbar-toggled="toggleNavbar" :toggled="navbarToggled" />
    <Home />
    <Footer />
  </div>
</template>

<script>
  import Home from '@/components/views/Home';
  import Navbar from '@/components/Navbar';
  import Footer from '@/components/Footer';

  export default {
    name: 'App',

    data() {
      return {
        navbarToggled: false,
      };
    },

    components: { Navbar, Home, Footer },

    methods: {
      toggleNavbar() {
        this.navbarToggled = !this.navbarToggled;
      },
    },
  };
</script>

<style lang="scss"></style>
