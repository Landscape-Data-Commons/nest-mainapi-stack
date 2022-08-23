FROM traefik:v2.8.1

WORKDIR / 

RUN  touch acme.json && chmod 600 acme.json