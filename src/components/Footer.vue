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
          </div>
          <div class="columns">
            <div class="column u_last-mb-0">
              <p>
                &copy; The Peaks
                <span class="is-font-playfair">&amp;</span>
                Otter (Drinks) Co. Ltd
                {{ (new Date()).getFullYear() }}
              </p>
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
