FROM nginx
COPY ./static_source/ /usr/share/nginx/html
COPY ./nginx/freecdn-boot.conf /etc/nginx
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 443