# Button
Vite + Vue3 + Stripe browser only example. It's a button that lets you buy this free code for a dollar

## Quickstart
1. Fork this repo
2. [Create a stripe account](https://stripe.com/), [Enable browser only checkout](https://stripe.com/docs/payments/checkout/client#enable-checkout), collect [your public and private api keys](https://dashboard.stripe.com/apikeys)
3. [Add this product to stripe](#stripe-automation) and rebuild the website with 
```bash
git clone YOUR-FORK-URL && cd button
npm install
node quickstart.js --publickey PUBLIC_APIKEY --privatekey PRIVATE_APIKEY
```

### Docker
#todo
```bash
git clone YOUR-FORK-URL && cd button
docker build ---
node quickstart.js --publickey PUBLIC_APIKEY --privatekey PRIVATE_APIKEY
```

## Stripe Automation
Stripe offers an [API](https://stripe.com/docs/api/products/create) to configure stripe settings, and add/update products. 

You can add a product on [the stripe dashboard](https://support.stripe.com/questions/how-to-create-products-and-prices)

Stripe also offers an extensive [API](https://stripe.com/docs/api/products/create?lang=node), this project uses the [stripe-node](https://github.com/stripe/stripe-node) wrapper to create a product named "button" for the price of $1 USD

View your public and private api key @ [https://dashboard.stripe.com/apikeys](https://dashboard.stripe.com/apikeys)
```
node addButtonToStripe.js --apikey PRIVATE_APIKEY --usd DOLLARS
```

## Approach
```html
<template>
  <!-- If success exists -->
    <!-- If success=true show download button and message-->
    <!-- If success=false  -->
  <!-- Else Show Buy This Button -->
</template>
```

## Resources
- [Vite](https://vitejs.dev/guide/)
- [Vue](https://vuejs.org/)
- [Stripe](https://stripe.com/)
- [Stripe API](https://stripe.com/docs/api)
- [Stripe API Keys](https://stripe.com/docs/keys)
- [Vue Stripe Library](https://vuestripe.com/)
- [Stripe testing info](https://stripe.com/docs/testing)
- [Stripe checkout logo](https://dashboard.stripe.com/settings/branding)
- [Software liscense brochure](https://choosealicense.com/licenses/)
- [Vite environment variables](https://vitejs.dev/guide/env-and-mode.html)
- [Vite change build directory](https://stackoverflow.com/questions/66863200/changing-the-input-and-output-directory-in-vite)
- [Access URL query paramaters](https://stackoverflow.com/questions/35914069/how-can-i-get-query-parameters-from-a-url-in-vue-js)
