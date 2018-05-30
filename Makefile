default: docker-build docker-run

docker-build:
	cd ./web/ && docker build -t web .

docker-run:
	cd ./web/ && docker run -p 8080:8080 web

web-run:
	cd ./web/ && yarn && node_modules/.bin/webpack-dev-server -d --devtool '#source-map' --inline --env.server

.PHONY: \
	docker-build \
	docker-run \
	web-run
