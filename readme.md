  # Prerequisites:
  install serverless with `npm install -g serverless`
  switch to node version 14 (optional) vian nvm `nvm use 14`
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