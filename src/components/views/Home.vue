<template>
  <div>
    <Hero />
    <About />
    <Process />
    <Give />
    <Range />
  </div>
</template>

<script>
  import About from '@/components/About';
  import Hero from '@/components/Hero';
  import Give from '@/components/Give';
  import Process from '@/components/Process';
  import Range from '@/components/Range';

  export default {
    name: 'Home',

    components: { About, Hero, Give, Process, Range },
  }
</script>
