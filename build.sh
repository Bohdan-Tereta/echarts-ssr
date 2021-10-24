# docker create -ti --name echarts-ssr bash
docker build -t echarts-ssr ./functions/get-chart
docker rm  echarts-ssr       
docker create --name echarts-ssr echarts-ssr
rm -rf ./output
mkdir ./output
mkdir ./output/nodejs/
mkdir ./output/nodejs/node14
mkdir ./output/lib
docker cp echarts-ssr:/var/task/node_modules ./output/nodejs/node14
docker cp echarts-ssr:/usr/lib64/libuuid.so ./output/lib/libuuid.so
docker cp echarts-ssr:/usr/lib64/libuuid.so.1 ./output/lib/libuuid.so.1
docker cp echarts-ssr:/usr/lib64/libuuid.so.1.3.0 ./output/lib/libuuid.so.1.3.0
docker cp echarts-ssr:/usr/lib64/libmount.so.1 ./output/lib/libmount.so.1
docker cp echarts-ssr:/usr/lib64/libmount.so.1.1.0 ./output/lib/libmount.so.1.1.0
docker cp echarts-ssr:/usr/lib64/libblkid.so.1 ./output/lib/libblkid.so.1
docker cp echarts-ssr:/usr/lib64/libblkid.so.1.1.0 ./output/lib/libblkid.so.1.1.0
cd ./output 
zip -rm node_modules.zip .
