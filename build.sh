# docker create -ti --name echarts-ssr bash
docker build -t echarts-ssr ./functions/get-chart   
docker rm  echarts-ssr       
docker create --name echarts-ssr echarts-ssr
rm -rf ./output
mkdir ./output
mkdir ./output/nodejs/
mkdir ./output/nodejs/node14
mkdir ./output/nodejs/lib
docker cp echarts-ssr:/var/task/node_modules ./output/nodejs/node14
# docker cp echarts-ssr:/ ./output/lib
cd ./output && zip -rm node_modules.zip ./nodejs

