FROM node:18
WORKDIR /button
COPY    package.* .
RUN     npm install
COPY    . .
ENTRYPOINT ["node", "quickstart.js"]