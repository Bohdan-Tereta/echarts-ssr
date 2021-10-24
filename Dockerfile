FROM public.ecr.aws/lambda/nodejs:14

# set up container
RUN yum -y update \
&& yum -y groupinstall "Development Tools" \
&& yum install -y nodejs gcc-c++ cairo-devel libjpeg-turbo-devel pango-devel giflib-devel

RUN npm install --build-from-source canvas@next
RUN npm install \
chartjs-node-canvas \
chart.js

COPY ./ package* ./
RUN npm install
COPY ./handler.js ./
