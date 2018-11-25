
FROM mhart/alpine-node:10 AS build
WORKDIR /
COPY . .
RUN npm install --registry=https://registry.npm.taobao.org
RUN npm run build


FROM hub.c.163.com/library/nginx  AS final
WORKDIR /
RUN rm /etc/nginx/conf.d/default.conf
COPY --from=build /dist /usr/share/nginx/html/
ADD default.conf /etc/nginx/conf.d/
