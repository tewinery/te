<template>
  <div id="contact" class="has-background-white-bis">
    <div class="o_block o_block--large">
      <div class="columns has-text-centered">
        <div class="column">
          <svgicon name="te-tagline" class="c_te-tagline c_te-tagline--massive"></svgicon>
        </div>
      </div>
    </div>
    <section class="section">
      <div class="o_block o_block--spacious c_footer">
        <div class="section container">
          <div class="columns o_block o_block--large o_block--bottom">
            <div class="column u_last-mb-0">
              <p>
                The Peaks
                <span class="is-font-playfair">&amp;</span>
                Otter (Drinks) Co. Ltd
              </p>
            </div>
            <div class="column u_last-mb-0">
              <p>
                85 Great Portland Street<br />
                First Floor<br />
                London<br />
                W1W 7LT
              </p>
            </div>
            <div class="column u_last-mb-0">
              <p>
                <span class="is-lowercase">t:</span> 020 3475 0631<br />
                <span class="is-lowercase">f:</span> 020 7183 3073<br />
                <span class="is-lowercase">e:</span> <a href="mailto:hello@tewinery.com">hello@tewinery.com</a>
              </p>
            </div>
          </div>
          <p>Sign up:</p>
          <div class="columns o_block o_block--large o_block--bottom">
            <div class="column u_last-mb-0 is-half-tablet">
              <Signup />
            </div>
            <div class="column is-one-third-tablet is-offset-2-tablet u_last-mb-0">
              <a href="/terms-and-conditions" target="_blank">
                Terms
                <span class="is-font-playfair">&amp;</span>
                Conditions
              </a><br />
              <a href="/privacy-policy" target="_blank">Privacy Policy</a><br />
              <a href="/refund-policy" target="_blank">Refund Policy</a>
            </div>
          </div>
          <div class="columns c_footer__end">
            <div class="column is-two-thirds-tablet u_last-mb-0">
              <p>
                &copy; The Peaks
                <span class="is-font-playfair">&amp;</span>
                Otter (Drinks) Co. Ltd
                {{ (new Date()).getFullYear() }}
              </p>
            </div>
            <div class="column is-one-third-tablet u_last-mb-0">
              <a href="http://www.studiodbd.com/" target="_blank" style="background: none;" class="is-size-7">Design by Studio DBD</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import Signup from "@/components/Signup";

  export default {
    name: 'Footer',

    components: { Signup },
  };
</script>
