## Building
`make docker-build`

## Running
`make docker-run`

## Stopping
`docker ps`
`docker stop <container ID>` (or, you could docker kill)
... TODO: use docker-compose instead


### Tip: Using CURL inside node:alpine
docker exec -i <container ID> sh
su #runs as root
apk add --no-cache --virtual .build-deps curl
curl http://localhost:8080/
