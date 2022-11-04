FROM node:16.13.1-alpine

WORKDIR /app

COPY .env .eslintrc.js .node-version .prettierrc.json next-env.d.ts next.config.js package-lock.json package.json  postcss.config.js  tailwind.config.js tsconfig.json  yarn.lock  ./
RUN yarn install

COPY src ./src
COPY public ./public
COPY _posts ./_posts
COPY @types ./@types

CMD ["yarn", "dev"]