<template>
  <section
    id="range"
    class="section o_block o_block--large has-background-white-bis has-text-centered"
  >
    <div class="container">
      <div class="o_block o_block--large o_block--bottom">
        <h2 class="subtitle">The Range</h2>

        <div class="columns is-centered">
          <div class="column is-two-thirds-tablet">
            <p class="is-size-3">
              Té is a range of six wines made from six unique teas grown in six
              unique places.
            </p>
            <p class="is-size-3">
              Our first is 'Darjeeling' which will be joined by others along
              the way and watch out too for occasional special additions.
            </p>
          </div>
        </div>

        <div class="columns is-vcentered is-centered">
          <div class="column">
            <div>
              <img
                src="@/assets/images/teapicker-darjeeling.png"
                alt="Darjeeling tea logo"
                v-on:load="resizeRetinaImage('teapicker')"
                ref="teapicker"
              />
            </div>
          </div>
          <div class="column has-text-left-tablet is-font-lato">
            <p class="is-size-5">
              Darjeeling is known as the 'Champagne of teas' and has a unique
              aroma likened to that of the Muscatel grape.
            </p>
            <p class="is-size-5">
              It is harvested around its namesake town of Darjeeling which is
              located in the Indian State of West Bengal, at an elevation of
              6,700 feet.
            </p>
            <p class="is-size-5">
              We specifically source our Darjeeling from the Mim Estate located
              in Sukhiapokhri, nestled in the foothills of the Himalayas. It is
              a government owned tea garden, which produces a finest, tippy,
              golden, flowery, orange, pekoe leaf or in-short an FTGFOP-1
            </p>
            <p class="is-size-5">
              This single origin tea yields a light orange coloured liquor with
              a delicate floral aroma, that has just a hint of spiciness.
            </p>
            <p class="is-size-5">
              As a wine our Darjeeling pairs well with coriander, cardamom and
              fish based dishes, or serve chilled as an aperitif.
            </p>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column is-two-thirds">
          <div class="c_details">
            <img
              src="@/assets/images/te-wine-bottle.png"
              alt="Té wine bottle"
              class="c_details__image"
            />
            <div class="c_details__content">
              <svgicon
                name="from-the-mim-estate"
                class="c_svg-icon--6x c_details__icon">
              </svgicon>
              <div class="o_circle">
                <div class="o_circle__content">
                  <h3 class="subtitle">Good to know</h3>
                  <p class="is-size-5-mobile">
                    Type: Fine Dry Wine<br />
                    ABV: 11%<br />
                    Serve: Chilled<br />
                    Allergens: Contains Sulphites<br />
                    Suitability: Vegetarians
                    <br class="is-hidden-mobile is-hidden-tablet-only" />
                    and Vegans<br />
                  </p>
                </div>
              </div>
              <svgicon
                name="enjoy-our-wine-chilled"
                class="c_svg-icon--6x c_details__icon">
              </svgicon>
            </div>
          </div>
        </div>
      </div>

      <div id="purchase" class="o_block o_block--large">
        <div class="o_block o_block--bottom">
          <h3 class="subtitle">Buy</h3>
        </div>

        <div class="o_block o_block--bottom">
          <p class="is-size-3">
            We ship Thursday for a Friday delivery.
          </p>
        </div>

        <a href="#" class="button is-large">Buy our wine</a>
      </div>

      <div class="columns is-centered">
        <div class="column is-two-thirds-tablet">
          <div id="purchase" class="o_block o_block--large o_block--top">
            <div class="o_block o_block--bottom">
              <h4 class="is-size-4">How do I become a stockist?</h4>
            </div>
          </div>

          <div class="o_block o_block--bottom">
            <p>
              Drop us an email at hello@tewinery.com with some information on your business & we will connect you with the right member of our team who can arrange a tasting.
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
  import '@/icons/from-the-mim-estate';
  import '@/icons/enjoy-our-wine-chilled';

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
