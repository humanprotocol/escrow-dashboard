#!/usr/bin/env bash

set -x # verbose
set -e # quit on error with last exit code
set -eo pipefail

readonly IMAGE="$1"
readonly CONTAINER_NAME="escrow-dashboard"

if [ "$(docker ps -q -f name=${CONTAINER_NAME})" ]; then
	echo "Stopping escrow-dashboard container"
	docker stop $CONTAINER_NAME
fi

if [ "$(docker ps -aq -f status=exited -f name=${CONTAINER_NAME})" ]; then
	# cleanup
	docker rm $CONTAINER_NAME
fi

echo "Runing new escrow-dashboard container: $IMAGE"
docker run \
  --name=$CONTAINER_NAME \
  -d \
  -p 80:3000 \
  --restart=always \
  $IMAGE
