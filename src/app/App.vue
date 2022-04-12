<template>

  <Header/>

  <router-view/>

  <Footer/>

</template>

<script>
import Header from "@/app/shared/components/Header";
import Footer from "@/app/shared/components/Footer";

export default {
  name: 'App',
  components: {Footer, Header},
  mounted() {
    setTimeout(() => {
      this.$store.dispatch("auth/oidc/loadUser").then(() => {
        console.log('user', this.$store.state.auth?.oidc?.user);
      });
    }, 2000);
  }
}
</script>
<style>
</style>

