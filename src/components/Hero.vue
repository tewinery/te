<template>
  <section class="section c_hero has-background-dark has-text-light has-text-centered">
    <div class="o_block o_block--spacious c_hero__main container slide-up">
      <div class="columns is-centered is-vcentered is-mobile">
        <div class="column is-one-quarter is-hidden-xsmall">
          <svgicon name="te-teapicker-darjeeling" class="c_te-teapicker"></svgicon>
        </div>
        <div class="column is-narrow">
          <div class="o_block o_block--bottom">
            <svgicon name="te-tagline" class="c_te-tagline c_te-tagline--massive"></svgicon>
          </div>
          <svgicon name="te-logo" class="c_te-logo c_te-logo--massive"></svgicon>
        </div>
        <div class="column is-one-quarter is-hidden-xsmall">
          <svgicon name="te-teapicker-darjeeling" class="c_te-teapicker c_te-teapicker--reverse"></svgicon>
        </div>
      </div>
    </div>
    <agile :arrows="false" :dots="false" :speed="1000" :autoplaySpeed="5000"
        :timing="'linear'" :fade="true"
        :autoplay="true" :pauseOnHover="false" class="c_hero__bg">
        <div class="slide slide--1"></div>
        <div class="slide slide--2"></div>
        <div class="slide slide--3"></div>
        <div class="slide slide--4"></div>
        <div class="slide slide--5"></div>
        <div class="slide slide--6"></div>
    </agile>
  </section>
</template>

<script>
  import '@/icons/te-tagline';
  import '@/icons/te-logo';
  import '@/icons/te-teapicker-darjeeling';
  import Parallax from 'vue-parallaxy'

  export default {
    name: 'Hero',

    components: { Parallax },

    methods: {
      inView() {
        console.log('in view!');
      },
    }
  };
</script>
