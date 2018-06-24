<template>
  <div id="app" class="c_app has-background-white-bis">
    <modal v-if="showModal" @close="acceptOver18">
      <h3 slot="header">Adults only (18+)</h3>
      <p slot="body">
        Té sell alcohol, their website is only suitable for those 18 years or
        older. Enter only if you are at least 18 years of age.
      </p>
    </modal>
    <router-view/>
    <vue-cookie-accept-decline
      :debug="false"
      :position="'bottom'"
      :disableDecline="false"
      :transitionName="'slideFromBottom'"
      :acceptText="'Got It'"
      :declineText="'Opt Out'">
      <div slot="message">
          We use cookies to ensure you get the best experience on our website.
          <!--<a href="https://cookiesandyou.com/" target="_blank">Learn More...</a>-->
      </div>
    </vue-cookie-accept-decline>
  </div>
</template>

<script>
  import Modal from '@/components/Modal';

  export default {
    name: 'App',

    data() {
      return {
        showModal: false,
      }
    },

    methods: {
      checkHasAlreadyAcceptedOver18() {
        const cookie = this.$cookie.get('acceptOver18');

        if (!cookie) {
          this.showModal = true;
        }
      },

      acceptOver18() {
        this.showModal = false;
        this.$cookie.set('acceptOver18', true, { expires: '1Y' });
      },
    },

    beforeMount() {
      this.checkHasAlreadyAcceptedOver18();
    },

    components: { Modal },
  };
</script>

<style lang="scss"></style>
