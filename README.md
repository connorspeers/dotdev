# [Garage](https://speers.dev)

## Stack

- [x] Containers: [Docker](https://docker.com)
- [x] Orchestration: [Docker Compose](https://docs.docker.com/compose/)
- [x] Reverse proxy: [Caddy](https://caddyserver.com)
- [x] Blog: [Deno](https://deno.land) + [Tin](https://github.com/connorspeers/tin)
- [ ] Fediverse: [Mastodon](https://joinmastodon.org)

## Deps

- [Docker](https://docker.com) (v20.10.17 or higher)

## Dev

1. `ln -s docker-compose.dev.yml docker-compose.override.yml`
2. `docker compose up`
3. http://localhost:8000
 
## Goals

- **The blog works offline, without a server**
  - i.e. You can double click on any HTML file in the [`./blog/assets/`](./blog/assets/) directory and it'll still work
  - For relative links between pages, I link to the full `./**/*.html` path so that the pagination works even offline. In production, this results in a 302 redirect to the same path without the `.html` extension, where the proper HTML is served. This extra hop is the price I'm paying to get offline pagination working
- **Blog pages that use JavaScript still work as much as possible without it**
  - The plan is to have all the main content looking good in the HTML alone. Then, if JavaScript is available and I want to use something like Preact as the frontend, the content is pulled from the original HTML and injected back into the Preact app (or whatever it is I'm using)
