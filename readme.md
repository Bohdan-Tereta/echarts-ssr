  # Prerequisites:
  install serverless with `npm install -g serverless`
  switch to node version 14 (optional) via nvm `nvm use 14`
  # How to run 
  For layer version (default), run ./build.sh first to build layer
  deploy: `serverless deploy`
  test: `curl -X POST {your url}`
  remove: `serverless remove`
  # Useful links: 
  https://medium.com/appgambit/part-2-create-lambda-layers-with-serverless-framework-and-offline-support-ad2a5a8dabfb
  http://blog.maxieduncan.co.nz/aws/2021/07/07/lambda-container-image-support
  # Some statistics
  Docker init duration: 11 seconds
  Layer init duration 1 second
  Response time under 1 second in both cases after warmed
  Layer size 40+ MB
  Lambda size 40+ KB

  # TODO
  - cleanup build script to copy all libs from array list of names
  - rename help function to getChart
  - genreal optimisations and cleanup
  - add serverless warmup plugin
  - set up local debugging

  # Misc Info
  Sveltekit demo app `npm init svelte@next my-app`
  https://dev.to/juranki/diy-sveltekit-cdk-adapter-3enp
  Debugger: `node --inspect $(npm bin)/sls offline start`

  https://stackoverflow.com/questions/41572237/how-can-we-use-serverless-yml-to-create-an-aws-s3-bucket-and-add-a-file-to-it
  https://github.com/thenikso/adapter-serverless/blob/main/src/serverless.js

  https://forum.serverless.com/t/how-to-create-api-gateway-with-lambda-proxy-integration/4131

  https://github.com/yarbsemaj/sveltekit-adapter-lambda/tree/master/src

  try 
  {proxy+} replace with {proxy*} to see if it solves index page path on aws
  try all 3 plugins
  base in svelte.config doesn't work
  server-side data fetch returns "Request is not defined"
  


  {
  host: undefined,
  method: 'GET',
  body: undefined,
  headers: {
    host: 'localhost:3000',
    connection: 'keep-alive',
    'sec-ch-ua': '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
    accept: '*/*',
    'sec-ch-ua-mobile': '?0',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    referer: 'http://localhost:3000/dev/sveltekit/todos',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'en-GB,en;q=0.9,uk-UA;q=0.8,uk;q=0.7,ru-UA;q=0.6,ru;q=0.5,ja-JP;q=0.4,ja;q=0.3,en-US;q=0.2',
    cookie: 'cacheVersion=0.1.0; csrftoken=lqgEDTk1k9c723akYQeNNcn2u2efVzlcyigXDEVYnpn1KbMgQcm7w9lzqmIyZG6d; snexid=7b4c3f8a-f08d-4db2-b7e4-9f6b2902292b; _ga=GA1.1.1483983887.1623737899; _snplid_6fdfe96e-5d06-4143-b027-bd76a99a1b13=d3600f3f-4da8-41ee-8700-e7289affa500; _snplid_e715b7e1-f44b-46f0-bb57-3ece35d9a27e=87e8d115-45e0-46c8-8eda-a139d2550719; _snplid_5fe18e17-7239-4ace-aa02-38a0c7330799=35a231a6-2b81-4fea-b99b-1e7665527117; _ga_3C5JHLZT03=GS1.1.1635585177.40.0.1635585177.0; _ga_CMK2ESV2PK=GS1.1.1635617251.3.1.1635617373.0; userid=bc6fc669-8bb4-40bb-b285-671ab520641f',
    'if-none-match': '"3hnkz"'
  },
  query: URLSearchParams {},
  path: '/sveltekit/todos.json',
  params: {},
  locals: { userid: 'bc6fc669-8bb4-40bb-b285-671ab520641f' }
}

use vercel as adapter, make it work by pasting handler from the lambda
sls offline start --noPrependStageInUrl
add nginx or cloudfront alt 0 1 01 0 gateway rule

https://docs.aws.amazon.com/de_de/apigateway/latest/developerguide/http-api-vs-rest.html
https://stackoverflow.com/questions/46857335/how-to-remove-stage-from-urls-for-aws-lambda-functions-serverless-framework



    path: path.replace(/.*\/sveltekit\//, '/').replace(/.*\/sveltekit$/, '/'),

## How to run: 
- for sveltekit function please do the following: 
- cd functions/sveltekit/handler
- run ./replace.sh
- this will patch vercel module with proper lambda handler for aws
- cd functions/sveltekit/my-app && npm run build
cd root and sls offline
turn on proxy by cd proxy and node index.js
app on 3000, p 3001

functions/sveltekit/my-app/.svelte-kit/output/server/app.js - put breakpoints here

limitations: root path in svelte not possible as gateway does use it for other purpose, move root path page to some other route, map on cludfront / proxy level
put static in subfolder under static for easier rules of proxy

debug local: run `npm run offline` + Attach in vscode
or
run `Launch via NPM` in vscode 

3001 - app
3000/dev/sveltekit - lambdas
8081 - static

sls deploy
sls domainInfo

sls syncToS3
sls bucketInfo
sls domainInfo




serverless syncToS3
sls bucketInfo
sls domainInfo

 aws s3 rm s3://echarts-ssr-dev-webapps3bucket-1576pjtx3xi6u --recursive

aws cloudfront list-distributions | grep "d2ylbbabg24fpg.cloudfront.net" | awk '{print $6}' 
create-invalidation distribution-id E7C7ZGCKIA171 --paths /*
aws cloudfront create-invalidation --distribution-id E7C7ZGCKIA171 --paths "/*"


#!/bin/bash

CLOUDFRONT_DOMAIN="mydomain.com" # change this

# Get Distribution ID (requires node.js to be installed)
DISTRIBUTION_ID=$(aws cloudfront list-distributions --query "DistributionList.Items[].{Id: Id, DomainName: DomainName, OriginDomainName: Origins.Items[0].DomainName }[?contains(OriginDomainName, 'd2ylbbabg24fpg.cloudfront.net')] | [0]" | node -pe "JSON.parse(require('fs').readFileSync('/dev/stdin').toString()).Id")

# Invalidate cache
echo "Invalidating CloudFront distribution $DISTRIBUTION_ID ..."
aws cloudfront create-invalidation --distribution-id=$DISTRIBUTION_ID --paths '/*'
echo "Invalidation requested."

#!/bin/bash

CLOUDFRONT_DOMAIN="mydomain.com" # change this

# Get Distribution ID (requires node.js to be installed)
DISTRIBUTION_ID=$(aws cloudfront list-distributions --query "DistributionList.Items[].{Id: Id, DomainName: DomainName, OriginDomainName: Origins.Items[0].DomainName }[?contains(OriginDomainName, '$CLOUDFRONT_DOMAIN')] | [0]" | node -pe "JSON.parse(require('fs').readFileSync('/dev/stdin').toString()).Id")

# Invalidate cache
echo "Invalidating CloudFront distribution $DISTRIBUTION_ID ..."
aws cloudfront create-invalidation --distribution-id=$DISTRIBUTION_ID --paths '/*'
echo "Invalidation requested."


