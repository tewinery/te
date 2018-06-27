<template>
  <button
    type="button"
    class="c_hamburger"
    :class="{ 'is-toggled': toggled }"
    @click="toggleHamburger"
  >
    <span class="c_hamburger__box">
      <span class="c_hamburger__inner"></span>
    </span>
  </button>
</template>

<script>
  export default {
    name: 'Hamburger',

    props: {
      toggled: {
        type: Boolean,
        required: true,
      },
    },

    methods: {
      toggleHamburger() {
        this.$emit('hamburger-toggled');
      },
    },
  }
</script>
