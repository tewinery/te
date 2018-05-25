<template>
  <div
    id="app"
    class="c_app has-background-white-bis"
    :class="{ 'is-sidebar-toggled': sidebarToggled }"
  >
    <div class="c_app__main" @click="closeSidebar">
      <Navbar />
      <Home />
      <Footer />
    </div>
    <Hamburger
      :toggled="sidebarToggled"
      @hamburger-toggled="toggleSidebar"
      class="c_navbar__hamburger"
    />
    <Sidebar />
  </div>
</template>

<script>
  import Home from '@/components/views/Home';
  import Navbar from '@/components/Navbar';
  import Footer from '@/components/Footer';
  import Hamburger from '@/components/Hamburger';
  import Sidebar from '@/components/Sidebar';

  export default {
    name: 'App',

    data() {
      return {
        sidebarToggled: false,
      };
    },

    components: { Navbar, Home, Footer, Hamburger, Sidebar },

    methods: {
      toggleSidebar() {
        this.sidebarToggled = !this.sidebarToggled;
      },

      closeSidebar() {
        this.sidebarToggled = false;
      },
    },
  };
</script>

<style lang="scss"></style>
