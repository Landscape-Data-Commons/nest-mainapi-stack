FROM node:18-alpine3.15 AS development

WORKDIR /usr/src/app

COPY --chown=node:node ./nest-test/package*.json ./

RUN npm ci

COPY --chown=node:node ./nest-test .

# RUN npm run build
USER node

### build for prod

FROM node:18-alpine3.15 As build

WORKDIR /usr/src/app

COPY --chown=node:node ./nest-test/package*.json ./

COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules

COPY --chown=node:node ./nest-test .

RUN npm run build

ENV NODE_ENV production

# Running `npm ci` removes the existing node_modules directory.
# Passing in --only=production ensures that only the production dependencies are installed.
# This ensures that the node_modules directory is as optimized as possible.
RUN npm ci --only=production && npm cache clean --force

USER node


###################
# PRODUCTION
###################

FROM node:18-alpine As production

# Copy the bundled code from the build stage to the production image
COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist

# Start the server using the production build
CMD [ "node", "dist/main" ]




################
## PRODUCTION ##
################
# Build another image named production
# FROM node:18-alpine3.15 AS production

# # Set node env to prod
# ARG NODE_ENV=production
# ENV NODE_ENV=${NODE_ENV}

# # Set Working Directory
# WORKDIR /usr/src/app

# # Copy all from development stage
# COPY --from=development /usr/src/app .

# # Run app
# CMD [ "node", "dist/main" ]