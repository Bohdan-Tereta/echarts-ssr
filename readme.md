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
  