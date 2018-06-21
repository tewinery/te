<template>
  <section
    id="process"
    class="section o_block o_block--large o_block--mb-default
      has-background-grey-dark has-text-centered has-text-light"
  >
    <div class="container" v-in-viewport>
      <h2 class="subtitle">How we make it</h2>

      <div class="columns o_block is-multiline is-desktop">
        <div class="column is-half-tablet-only is-flex">
          <div class="c_card has-background-lighter-blue">
            <div class="c_card__inner">
              <h3 class="subtitle">Step one</h3>
              <p class="c_card__main">We steep the finest loose leaf tea with filtered water</p>
            </div>
          </div>
        </div>
        <div class="column is-half-tablet-only is-flex">
          <div class="c_card has-background-white-bis">
            <div class="c_card__inner">
              <h3 class="subtitle">Step two</h3>
              <p class="c_card__main">Our tea is then sweetened and yeast added to it</p>
            </div>
          </div>
        </div>
        <div class="column is-half-tablet-only is-flex">
          <div class="c_card has-background-light">
            <div class="c_card__inner">
              <h3 class="subtitle">Step three</h3>
              <p class="c_card__main">Our tea then undergoes a temperature controlled fermentation</p>
            </div>
          </div>
        </div>
        <div class="column is-half-tablet-only is-flex">
          <div class="c_card has-background-white-bis">
            <div class="c_card__inner">
              <h3 class="subtitle">Step four</h3>
              <p class="c_card__main">Finally we adjust sweetness to compliment the complex flavours of each tea</p>
            </div>
          </div>
        </div>
      </div>

      <div class="columns is-centered has-text-dark has-horizontal-lines">
        <div class="column is-two-thirds-tablet is-half-desktop">
          <h3 class="subtitle">Provenance</h3>
          <div class="o_bookend">
            <span class="o_bookend__left"></span>
            <p class="is-marginless">
              All of our teas are sourced through the ethical tea&nbsp;partnership
            </p>
            <span class="o_bookend__right"></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

  export default {
    name: 'Process',
  };
</script>
