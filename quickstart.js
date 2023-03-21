/*
* 1. Accept private & public api keys
* 2. Download dependecies if not in docker container
* 3. Add button product to stripe account using private key, this returns a product id
* 4. Use product id and public key to build the website into dist
*/
const { spawnSync } = require('node:child_process')
const { execSync  } = require('node:child_process')
const { program   } = require('commander')
const Stripe        = require('stripe')
const fs            = require('fs')

// 1. Accept params, declare static variables
program
  .description('Downloads dependecies, adds a product to stripe, builds the website')
  .requiredOption('-x, --privatekey <char>', 'Private api key from stripe dashboard')
  .requiredOption('-p, --publickey  <char>', 'Public  api key from stripe dashboard')
  .option('-d, --price <number>', 'Price of the button')
program.parse()
const options         = program.opts()
const PRIVATE_API_KEY = options.privatekey
const PUBLIC_API_KEY  = options.publickey
const PRICE_USD       = options?.price ? options?.price*100 : 100
const PRODUCT_NAME    = "A Vue Stripe Button"
const PRODUCT_DESCRIPTION = "ie. the code for a purchasable button"

async function main(){
    // 2.Download dependencies
    const fileToCheck = "/.dockerenv"
    const inDocker    = fs.existsSync(fileToCheck)
    if (!inDocker){
        console.log('Downloading dependencies... (1/3)')
        spawnSync('npm', ['install'])                            
        spawnSync('npm', ['--prefix', './src', 'install', './src'])
    }

    // 3. Add button product to stripe if it doesn't exist
    console.log('Adding product to stripe... (2/3)')
    const stripe  = Stripe(PRIVATE_API_KEY)
    let product   = (await stripe.products.search({query: `active:'true' AND name:'${PRODUCT_NAME}'`}))['data']?.[0]
    let previous_price = ""
    try{ 
        previous_price = (await stripe.prices.retrieve(product?.default_price))?.unit_amount
    }catch{}   

    // Create a new product if one doesn't exist
    if (!product){
        console.log('\tCreating new product...')
        product = await stripe.products.create({
            name               : PRODUCT_NAME,
            description        : PRODUCT_DESCRIPTION,
            active             : true
        })
    }

    // Update the price if one doesn't exist, or it's different from the last one
    let price_id = product?.default_price
    if (`${previous_price}`!=`${PRICE_USD}`){
        console.log('\tUpdating product price...')
        price_id = (await stripe.prices.create({
            unit_amount: `${PRICE_USD}`,
            currency   : 'usd',
            product    : product.id,
        }))
        product = await stripe.products.update(product.id,{default_price:price_id})
    }
    
    // 4. Build website into dist
    console.log('Building webiste -> dist... (3/3)')
    execSync(`VITE_STRIPE_PUBLIC_API_KEY="${PUBLIC_API_KEY}" VITE_STRIPE_PRICE_ID="${price_id}" npm --prefix ./src run build`)
}

main()