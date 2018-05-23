<template>
  <section class="section o_block o_block--spacious has-background-dark has-text-light has-text-centered">
    <div class="container">
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
  </section>
</template>

<script>
  import '@/icons/te-tagline';
  import '@/icons/te-logo';
  import '@/icons/te-teapicker-darjeeling';

  export default {
    name: 'Hero',
  };
</script>
