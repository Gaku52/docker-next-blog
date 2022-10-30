FROM node:16.13.1-alpine

WORKDIR /app

COPY .env .eslintrc.js .node-version .prettierrc.json next-env.d.ts package.json yarn.lock postcss.config.js next.config.js tsconfig.json tailwind.config.js ./
RUN yarn install

COPY src ./src
COPY public ./public
COPY _posts ./_posts
COPY @types ./@types

CMD ["yarn", "dev"]