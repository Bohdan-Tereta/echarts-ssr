# docker create -ti --name echarts-ssr bash
docker build -t echarts-ssr .   
docker rm  echarts-ssr       
docker create --name echarts-ssr echarts-ssr
rm -rf ./node_modules
docker cp echarts-ssr:/var/task/node_modules ./

