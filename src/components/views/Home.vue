<template>
  <div>
    <Hero />
    <About />
    <Process />
    <Range />
  </div>
</template>

<script>
  import Hero from '@/components/Hero';
  import About from '@/components/About';
  import Process from '@/components/Process';
  import Range from '@/components/Range';

  export default {
    name: 'Home',

    components: { Hero, About, Process, Range },
  }
</script>
