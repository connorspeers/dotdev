FROM denoland/deno:1.28.2 AS base
WORKDIR /app
USER deno
COPY deps.ts .
RUN deno cache deps.ts
CMD ["run", "--unstable", "--watch", "-A", "main.ts"]

FROM base AS dev
VOLUME /app

FROM base AS prod
COPY . .
RUN deno cache main.ts
