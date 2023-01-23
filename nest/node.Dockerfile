# https://github.com/prisma/prisma/issues/10649
FROM node:19-alpine3.17 AS development

WORKDIR /usr/src/app

COPY --chown=node:node ./nest/package*.json ./

RUN npm i

COPY --chown=node:node ./nest .

USER node

###################
# BUILD FOR PRODUCTION
###################

FROM node:19-alpine3.17 As build

WORKDIR /usr/src/app

COPY --chown=node:node ./nest/package*.json ./

COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules

COPY --chown=node:node ./nest/prisma .
COPY --chown=node:node ./nest/tsconfig.json .
# COPY --chown=node:node ./nest/prisma ./prisma

RUN npm run build -- --path ./tsconfig.json

ENV NODE_ENV production

RUN npm ci --only=production && npm cache clean --force

USER node

###################
# PRODUCTION
###################

 FROM node:19-alpine3.17 As production

COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist

CMD [ "node", "dist/main.js" ]
