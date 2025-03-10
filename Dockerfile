# stage1 as builder
FROM node:20.11.1-slim as builder

# copy the package.json to install dependencies
COPY package.json package-lock.json ./

# Install the dependencies and make the folder
RUN npm install && mkdir /vuejs-ui && mv ./node_modules ./vuejs-ui

WORKDIR /vuejs-ui

COPY . .
COPY .env .
ARG CONTEXT='/'
RUN sed -i "s|"/\basepath"|"${CONTEXT}"|g" .env

# Build the project and copy the files
RUN VUE_APP_CONTEXT_PATH=${CONTEXT} npm run build

FROM node:20.11.1-slim
ARG CONTEXT='/'

#!/bin/sh
#RUN apk add sudo && addgroup -S lazsa && adduser -S -G root --uid 1001  lazsa
#RUN echo "lazsa ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers.d/lazsa

# Copy from the stahg 1
COPY --from=builder /vuejs-ui/dist /vuejs-ui/dist
COPY ./server.js /vuejs-ui
WORKDIR /vuejs-ui

# USER lazsa
RUN npm install express
#CMD ["REACT_APP_CONTEXT=${CONTEXT} node server.js"]
#CMD ["REACT_APP_CONTEXT=${CONTEXT} ", "node", "server.js"]
CMD VUE_APP_CONTEXT_PATH=${CONTEXT} node server.js
