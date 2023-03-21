# Button
Vite + Vue3 + Stripe client only example. It's a button that lets you buy this free code for a dollar, [see it live](https://barakbinyamin.github.io/Button/)

<p style="text-align:center" align="center">
  <a href="https://barakbinyamin.github.io/Button/">
    <img src="demo.png" width="25%"/>
  </a>
</p>

## Quickstart
1. Fork this repo
2. [Create a stripe account](https://stripe.com/), [Enable client only checkout](https://stripe.com/docs/payments/checkout/client#enable-checkout) (add your domain like **example.github.io**), collect [your public and private api keys](https://dashboard.stripe.com/apikeys)
3. Add this product to your stripe account and rebuild the website with your public api key with the quickstart script
```bash
git clone YOUR-FORK-URL && cd button
npm install
node quickstart.js --publickey PUBLIC_APIKEY --privatekey PRIVATE_APIKEY
git commit -m "Let's make some money" && git push
```

### Docker
#TODO

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
