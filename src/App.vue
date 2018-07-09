<template>
  <div id="app" class="c_app has-background-white-bis">
    <modal modal-mask-class="is-opaque" v-if="showModal" @close="acceptOver18">
      <div slot="body">
        <p>Té Winery advocates responsible alcohol consumption</p>
        <p>This website is only for persons of legal age</p>
        <p>Please confirm to continue:</p>
      </div>
      <span slot="footer">
        I am over 18 years of age
      </span>
    </modal>
    <router-view/>
    <vue-cookie-accept-decline
      :debug="false"
      :position="'bottom'"
      :disableDecline="false"
      :transitionName="'slideFromBottom'"
      :acceptText="'Got It'"
      :declineText="'Opt Out'"
      @clickedAccept="cookieClickedAccept"
      @status="cookieStatus">
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

      cookieStatus(status) {
        if (status == "accept") {
          this.setupGoogleAnalytics();
        }
      },

      cookieClickedAccept() {
        this.setupGoogleAnalytics();
      },

      setupGoogleAnalytics() {
        Vue.use(VueAnalytics, {
          id: 'UA-122016847-1',
          router,
          checkDuplicatedScript: true
        });
        console.log("setupGoogleAnalytics");
      },
    },

    beforeMount() {
      this.checkHasAlreadyAcceptedOver18();
    },

    components: { Modal },
  };
</script>

<style lang="scss"></style>
