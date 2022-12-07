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
 