<template>
  <section
    id="range"
    class="section o_block o_block--large has-background-white-bis has-text-centered"
  >
    <div class="container">
      <div class="o_block o_block--large o_block--bottom">
        <h2 class="subtitle" style="max-width:240px;">First Amongst Equals</h2>

        <div class="columns is-centered">
          <div class="column is-two-thirds-tablet">
            <p class="is-size-3">
            </p>
          </div>
        </div>

        <div class="columns is-vcentered is-centered is-stacked">
          <div class="column is-two-thirds-mobile" style="margin: 0 auto;">
            <div style="max-width: 282px; margin: 0 auto;">
              <svgicon name="te-teapicker-darjeeling-combo" class="c_te-teapicker-combo"></svgicon>
            </div>
          </div>
          <div class="section column has-text-left-tablet is-font-lato">
            <p class="is-size-5">
              Darjeeling is known as the 'Champagne of Teas' and has a unique
              aroma likened to that of the Muscatel grape.
            </p>
            <p class="is-size-5">
              We specifically source our Darjeeling from the Mim Estate, which
              is nestled in the foothills of the Himalayan Mountains, in
              the Indian State of West Bengal, at an elevation of 6,700 feet.
            </p>
            <p class="is-size-5">
              The Mim Estate is a government-owned tea garden, which produces a
              finest, tippy, golden, flowery, orange, pekoe leaf, or in short
              an FTGFOP-1.
            </p>
            <p class="is-size-5">
              As a wine Té Darjeeling pairs well with coriander, cardamom and
              fish-based dishes, or serve chilled as an aperitif.
            </p>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column is-two-thirds">
          <div class="c_details">
            <img
              src="../assets/images/te-109.jpg"
              alt="Té wine bottle"
              class="c_details__image"
            />
            <div class="c_details__content">
              <div class="o_circle">
                <div class="o_circle__content">
                  <h3 class="subtitle">Good to know</h3>
                  <p class="is-size-5-mobile">
                    Type: Fine Wine<br />
                    ABV: 11%<br />
                    Serve: 11°C<br />
                    Allergens: Contains Sulphites<br />
                    Suitability: Vegetarians
                    <br class="is-hidden-mobile is-hidden-tablet-only" />
                    and Vegans<br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="purchase" class="o_block o_block--large">
        <div class="o_block o_block--bottom">
          <h3 class="subtitle">Retail</h3>
        </div>

        <div class="o_block o_block--bottom">
          <p class="is-size-4">
            To become a stockist please contact us at: <a href="mailto:hello@tewinery.com">hello@tewinery.com</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import '@/icons/from-the-mim-estate';
  import '@/icons/enjoy-our-wine-chilled';
  import '@/icons/te-teapicker-darjeeling-combo';

  export default {
    name: 'Range',

    methods: {
      resizeRetinaImage(ref) {
        const image = this.$refs[ref];
        image.style.maxWidth = image.width / 2 + "px";
      },
    },
  };
</script>
