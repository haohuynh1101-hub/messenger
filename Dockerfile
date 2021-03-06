FROM node:10.21.0

# Install yarrn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

WORKDIR /usr/src/app

# install package
COPY yarn.lock .
COPY package.json .
RUN yarn install
RUN yarn global add serve

COPY . .
RUN yarn build
RUN rm -r src

EXPOSE 5555
CMD [ "serve","-s", "build" ]
