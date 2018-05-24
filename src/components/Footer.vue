<template>
  <div>
    <div class="o_block o_block--large">
      <div class="columns has-text-centered">
        <div class="column">
          <div class="section">
            <svgicon name="te-tagline" class="c_te-tagline c_te-tagline--massive"></svgicon>
          </div>
        </div>
      </div>
    </div>
    <section class="section">
      <div class="o_block o_block--spacious c_footer">
        <div class="container">
          <div class="columns o_block o_block--large o_block--bottom">
            <div class="column">
              <p>
                Peaks
                <span class="is-font-playfair">&amp;</span>
                Otter (Drinks) Co. Ltd
              </p>
            </div>
            <div class="column">
              <p>
                85 Great Portland Street<br />
                London<br />
                W1W 7LT
              </p>
            </div>
            <div class="column">
              <p>
                e: info@tewinery.com<br />
                t: 020 xxxxxxxx
              </p>
            </div>
          </div>
          <div class="columns o_block o_block--large o_block--bottom">
            <div class="column is-two-thirds-tablet">
              <p>Sign up to our mailing list for more details:</p>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <p>
                &copy; Peaks
                <span class="is-font-playfair">&amp;</span>
                Otter (Drinks) Co. Ltd
                {{ (new Date()).getFullYear() }}
              </p>
            </div>
            <div class="column has-text-right">
              <p>Design by StudioDBD</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'Footer',
  };
</script>
