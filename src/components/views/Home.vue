<template>
  <div :class="{ 'is-sidebar-toggled': sidebarToggled }">
    <div class="c_app__main" @click="closeSidebar">
      <Navbar />
      <Hero />
      <About />
      <Process />
      <Range />
      <Footer />
    </div>

    <Hamburger
      :toggled="sidebarToggled"
      @hamburger-toggled="toggleSidebar"
      class="c_navbar__hamburger"
    />
    <Sidebar @close-sidebar="closeSidebar" />
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar';
  import Footer from '@/components/Footer';
  import Hamburger from '@/components/Hamburger';
  import Sidebar from '@/components/Sidebar';
  import About from '@/components/About';
  import Hero from '@/components/Hero';
  import Process from '@/components/Process';
  import Range from '@/components/Range';

  export default {
    name: 'Home',

    components: { Navbar, Footer, Hamburger, Sidebar, About, Hero, Process, Range },

    data() {
      return {
        sidebarToggled: false,
      };
    },

    methods: {
      toggleSidebar() {
        this.sidebarToggled = !this.sidebarToggled;
      },

      closeSidebar() {
        this.sidebarToggled = false;
      },
    },
  }
</script>
