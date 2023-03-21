# Button
Vite + Vue3 + Stripe browser only example. It's a button that lets you buy this free code for a dollar, [see it live](https://barakbinyamin.github.io/Button/)

<a href="https://barakbinyamin.github.io/Button/">
<p style="text-align:center"><img src="demo.png" width="50%"/></p></a>

## Quickstart
1. Fork this repo
2. [Create a stripe account](https://stripe.com/), [Enable browser only checkout](https://stripe.com/docs/payments/checkout/client#enable-checkout) (be sure to include your domain), collect [your public and private api keys](https://dashboard.stripe.com/apikeys)
3. Add this product to stripe and rebuild the website with the quickstart script
```bash
git clone YOUR-FORK-URL && cd button
npm install
node quickstart.js --publickey PUBLIC_APIKEY --privatekey PRIVATE_APIKEY
```

### Docker
#TODO

## Stripe Automation
Stripe offers an [API](https://stripe.com/docs/api/products/create) to configure stripe settings, and add/update products. 

You can add a product on [the stripe dashboard](https://support.stripe.com/questions/how-to-create-products-and-prices)

Stripe also offers an extensive [API](https://stripe.com/docs/api/products/create?lang=node), this project uses the [stripe-node](https://github.com/stripe/stripe-node) wrapper to create a product named "button" for the price of $1 USD

View your public and private api key @ [https://dashboard.stripe.com/apikeys](https://dashboard.stripe.com/apikeys)

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
- [Access url properties using javascript](https://stackoverflow.com/questions/11401897/get-the-current-domain-name-with-javascript-not-the-path-etc)
