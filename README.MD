# NestJS/Fastify Rest API for LDC Tall table data

This stack features a production build of NestJS inside a container proxied by Traefik(also containerized). Leverages Fastify instead of Express to handle routes/controllers, and Prisma as an ORM to interact with a Postgresql DB.

Documented by swagger (this-apis-domain.com/api-docs)

## For Development:

As the ```sh npm run dev:watch``` is very slow inside a container (with a bind mount), dev work is worked outside of the containerized setup. 

so: 
```sh
cd nest
npm install
npm run dev:watch
```

## For Production:

** todo **

