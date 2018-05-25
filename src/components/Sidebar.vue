<template>
  <div class="c_navbar__sidebar">
    <ul class="c_navbar__sidebar-list">
      <li class="c_navbar__sidebar-list-item">
        <a href="#" class="c_navbar__sidebar-link">
          <svgicon name="te-logo" class="c_navbar__logo"></svgicon>
        </a>
      </li>
      <li class="c_navbar__sidebar-list-item">
        <a href="#" @click="closeSidebar(); $scrollTo('#about')" class="c_navbar__sidebar-link">About</a>
      </li>
      <li class="c_navbar__sidebar-list-item">
        <a href="#" @click="closeSidebar(); $scrollTo('#process')" class="c_navbar__sidebar-link">Process</a>
      </li>
      <li class="c_navbar__sidebar-list-item">
        <a href="#" @click="closeSidebar(); $scrollTo('#range')" class="c_navbar__sidebar-link">Range</a>
      </li>
      <li class="c_navbar__sidebar-list-item">
        <a href="#" @click="closeSidebar(); $scrollTo('#purchase')" class="c_navbar__sidebar-link">Purchase</a>
      </li>
      <li class="c_navbar__sidebar-list-item">
        <a href="#" @click="closeSidebar(); $scrollTo('#contact')" class="c_navbar__sidebar-link">Contact</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Sidebar',

    methods: {
      closeSidebar() {
        this.$emit('close-sidebar');
      },
    },
  };
</script>
