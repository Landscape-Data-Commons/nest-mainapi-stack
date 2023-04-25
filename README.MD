# NestJS/Fastify Rest API for LDC Tall table data

## todo:
- public/authorized authguard resources, making it optional like express/next():
  - https://dev.to/dannypule/exclude-route-from-nest-js-authgaurd-h0
  - https://stackoverflow.com/a/75508767
  - https://blog.logrocket.com/understanding-guards-nestjs/
  - https://docs.nestjs.com/guards

This stack features a production build of NestJS inside a container proxied by Traefik(also containerized). Leverages Fastify instead of Express to handle routes/controllers, and Prisma as an ORM to interact with a Postgresql DB.

Documented by swagger (this-apis-domain.com/api-docs)

## For Development:

As the ``` npm run dev:watch``` is very slow inside a container (with a bind mount), dev work is worked outside of the containerized setup. 

so: 
```sh
cd nest
npm install
npm run dev:watch
```

## For Production:

1. create the external docker network that will host traefik, portainer and the node application (in this example, the network is called proxy):

```sh
docker network create --attachable --scope=swarm proxy
```
2. deploy the traefik stack (includes portainer):

```sh
docker stack deploy traefik --compose-file ./traefik/docker-compose.yml 
```

3. deploy the node application:

```sh

```
