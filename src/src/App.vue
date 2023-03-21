<template>

  <!-- If success query exists -->
  <div v-if="paramExists">
    <!-- If success=true  show download button and message-->
    <div v-if="success" class="title">Transaction succeeded!</div>
    <!-- If success=false show failure prompt -->
    <div v-else         class="title">Transaction failed, try again...</div>

    <div v-if="success">
      <!-- Download svg -->
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 16L12 8" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 13L11.913 15.913V15.913C11.961 15.961 12.039 15.961 12.087 15.913V15.913L15 13" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M3 15L3 16L3 19C3 20.1046 3.89543 21 5 21L19 21C20.1046 21 21 20.1046 21 19L21 16L21 15" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    </div>
  </div>
    
  <div v-if="!paramExists || !success" class="button" @click="submit">Buy this button</div>
  <div v-else class="button" @click="download">Download the code!</div>

  <!-- Stripe checkout handler -->
  <stripe-checkout
    ref="checkoutRef"
    mode="payment"
    :pk="public_key"
    :line-items="[{'price': product_price_id, 'quantity': 1 }]"
    :success-url="succuessURL"
    :cancel-url="cancelURL"
    @loading="v => loading = v"
  />

</template>

<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe';

const downloadRepo="https://github.com/BarakBinyamin/Button/archive/refs/heads/main.zip"
const randomPass="17baface-7b1c-4b5a-9f19-db3d2401070b"

export default{
  components: { StripeCheckout },
  data(){
    return{
      // Stripe checkout variables
      public_key       : import.meta.env.VITE_STRIPE_PUBLIC_API_KEY,
      product_price_id : import.meta.env.VITE_STRIPE_PRICE_ID,
      lineitems        : [{'price': this.product_price_id, 'quantity': 1 }],
      cancelURL        : `${window.location.origin}${window.location.pathname}?success=false`,
      succuessURL      : `${window.location.origin}${window.location.pathname}?success=${randomPass}`,
      // Logic variables
      paramExists      : "",
      success          : "",
    }
  },
  mounted(){
    // Check if redirected from checkout
    let urlParams      = new URLSearchParams(window.location.search)
    this.paramExists   = urlParams.has('success')  
    // Check if checkout was successful
    this.success       = urlParams.get('success')===randomPass

    // Sizing css
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    window.addEventListener('resize', () => {let vh = window.innerHeight * 0.01;document.documentElement.style.setProperty('--vh', `${vh}px`);});
  },
  methods: {
    submit () {
      // You will be redirected to Stripe's secure checkout page
      this.$refs.checkoutRef.redirectToCheckout()
    },
    download(){
      window.open(downloadRepo)
    }
  }
}
</script>

<style>
.button{
  border: black 1px solid;
  border-radius: 5px;
  text-align: center;
  padding: 5px;
  width: max-content;
  align-self: center;
  justify-self: center;
}

.button:hover{
  color:blue;
  box-shadow: 0px 0px 4px 0px rgba(0,0,0,1);
}

#app{
  display: grid;
  align-items: center;
  justify-content: center;
  height: max-content;
  grid-gap: 5px;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body{  
  margin: 0;
  padding: 0;
  /*display: grid;*/
  /*width: 100vw;*/
  overflow: scroll;
  position: relative;
  /*overflow: hidden;*/  
  /*max-width: 100vw;*/
  /*Getting the right height for mobile devices: https://css-tricks.com/the-trick-to-viewport-units-on-mobile/ */
  min-height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  min-height: calc(var(--vh, 1vh) * 100);

  display: grid;
  align-items: center;
  justify-content: center;
}

html { 
  background-color: whitesmoke;/*#0d1117;*/
  /*margin-right:10px;*/

  -webkit-overflow-scrolling: touch; /* enables “momentum” (smooth) scrolling */
  overflow-x: hidden;

  /* Nice Font */
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  /* By default text is non selectable */
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none; 

  /* no zoom */
  touch-action: pan-x pan-y;
  /* touch-action: none; /* no scroll, no zoom for sure */
}

::selection {
  background: #1e4173;
}
</style>
