FROM node:20-alpine AS base

RUN npm i --global --no-update-notifier --no-fund pnpm@9.15.9

FROM base AS dependencies

WORKDIR /app

COPY package.json pnpm-lock.yaml .npmrc ./

RUN pnpm install --frozen-lockfile

FROM base AS build

WORKDIR /app

COPY . .
COPY --from=dependencies /app/node_modules ./node_modules

RUN pnpm build

FROM base

WORKDIR /app

COPY --from=build --chown=node:node /app/.output .
COPY --chown=node:node ./public ./public

USER node

CMD  ["node", "server/index.mjs"]
