# https://github.com/prisma/prisma/issues/10649
FROM node:19-alpine3.16 AS development
# FROM node:16.17-alpine3.15 AS development

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./
COPY --chown=node:node ./prisma/schema.prisma ./
RUN npm ci

# build nest/client

RUN npx prisma db pull --schema ./schema.prisma
RUN npx prisma generate

COPY --chown=node:node . .

USER node

###################
# BUILD FOR PRODUCTION
###################

FROM node:19-alpine3.16 As build
#FROM node:16.17-alpine3.15 As build

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./

COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules

COPY --chown=node:node . .

RUN npm run build

ENV NODE_ENV production

RUN npm ci --only=production && npm cache clean --force

USER node

###################
# PRODUCTION
###################

 FROM node:19-alpine3.16 As production
# FROM node:16.17-alpine3.15 As production

COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist

CMD [ "node", "dist/main.js" ]