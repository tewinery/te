<template>
  <div id="about">
    <section class="section o_block o_block--large has-background-grey-light has-text-centered">
      <div class="container slide-up" v-in-viewport.once="0">
        <div class="columns is-centered">
          <div class="column is-two-thirds-desktop">
            <div class="o_block o_block--bottom" v-parallax="0.05" style="margin-top: 30px;">
              <h2 class="subtitle">About</h2>

              <p class="is-size-3">
                Té was founded by Ross Kenyon who has roots that go back to the
                industrial heartlands of Yorkshire, where tea is more than a
                drink, it’s a way of life.
              </p>
            </div>
          </div>
        </div>

        <div class="columns is-centered">
          <div class="column is-two-thirds-tablet is-half-desktop">
            <div class="o_block o_block--bottom">
              <img
                src="../assets/images/adventure-begins.jpg"
                alt="The adventure begins"
              />
            </div>
          </div>
        </div>
        <div class="columns is-centered">
          <div class="column is-two-thirds-desktop">
            <div class="o_block o_block--bottom" v-parallax="0.05">
              <h2 class="subtitle">Our wines</h2>

              <p class="is-size-3">
                Té is a range of six unique wines made from six unique teas
                grown in six unique places.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'About',
  };
</script>
