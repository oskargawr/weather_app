FROM node:16-alpine as builder

WORKDIR /app

COPY package.json ./
RUN npm install --force

COPY . .

RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html

# COPY default.conf /etc/nginx/conf.d/default.conf
#