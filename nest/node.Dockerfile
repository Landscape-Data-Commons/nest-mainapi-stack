###################
# BUILD FOR PRODUCTION
###################

FROM node:19-alpine3.17 As build

WORKDIR /usr/src/app

COPY --chown=node:node ./nest/package*.json .

RUN npm ci

COPY --chown=node:node ./nest .
RUN npx prisma generate


# alternate client generation script
COPY --chown=node:node ./nest/prisma/.prisma/client_aero /usr/src/app/node_modules/.prisma/client_aero
COPY --chown=node:node ./nest/prisma/.prisma/client_limited /usr/src/app/node_modules/.prisma/client_limited
COPY --chown=node:node ./nest/prisma/.prisma/client_ndow /usr/src/app/node_modules/.prisma/client_ndow

RUN npm run build 


ENV NODE_ENV production

USER node

###################
# PRODUCTION
###################

FROM node:19-alpine3.17 As production

COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist

CMD [ "node", "dist/main.js" ]

