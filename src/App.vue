<template>
  <div id="app" class="c_app has-background-white-bis">
    <router-view/>
    <vue-cookie-accept-decline
      :debug="false"
      :position="'bottom'"
      :disableDecline="false"
      :transitionName="'slideFromBottom'"
      :acceptText="'Got It!'"
      :declineText="'Opt Out'"
      @status="cookieStatus"
      @clickedAccept="cookieClickedAccept"
      @clickedDecline="cookieClickedDecline">
      <div slot="message">
          We use cookies to ensure you get the best experience on our website.
          <a href="https://cookiesandyou.com/" target="_blank">Learn More...</a>
      </div>
    </vue-cookie-accept-decline>
  </div>
</template>

<script>
  export default {
    name: 'App',
  };
</script>

<style lang="scss"></style>
