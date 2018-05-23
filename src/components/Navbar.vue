<template>
  <nav class="c_navbar has-background-primary">
    <div class="c_navbar__bar">
      <ul class="c_navbar__social">
        <li class="c_navbar__social-item"><a href="https://twitter.com/tewinery">Twitter</a></li>
        <li class="c_navbar__social-item"><a href="https://www.instagram.com/tewinery/">Instagram</a></li>
      </ul>
    </div>
    <Hamburger
      :toggled="toggled"
      @hamburger-toggled="toggleMenu"
      class="c_navbar__hamburger"
    />
    <div class="c_navbar__sidebar">
      <ul class="c_navbar__sidebar-list">
        <li class="c_navbar__sidebar-list-item">
          <a href="#" class="c_navbar__sidebar-link">
            <svgicon name="te-logo" class="c_navbar__logo"></svgicon>
          </a>
        </li>
        <li class="c_navbar__sidebar-list-item">
          <a href="#" class="c_navbar__sidebar-link">About</a>
        </li>
        <li class="c_navbar__sidebar-list-item">
          <a href="#" class="c_navbar__sidebar-link">Process</a>
        </li>
        <li class="c_navbar__sidebar-list-item">
          <a href="#" class="c_navbar__sidebar-link">Range</a>
        </li>
        <li class="c_navbar__sidebar-list-item">
          <a href="#" class="c_navbar__sidebar-link">Purchase</a>
        </li>
        <li class="c_navbar__sidebar-list-item">
          <a href="#" class="c_navbar__sidebar-link">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  import '@/icons/te-logo';
  import Hamburger from '@/components/Hamburger';

  export default {
    name: 'Navbar',

    props: {
      toggled: {
        type: Boolean,
        required: true,
      },
    },

    components: { Hamburger },

    methods: {
      toggleMenu() {
        this.$emit('navbar-toggled');
      },
    },
  }
</script>
