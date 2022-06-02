#!/usr/bin/env bash

set -x # verbose
set -e # quit on error with last exit code
set -eo pipefail

readonly IMAGE="$1"
#readonly REPO="${IMAGE%%:*}"
readonly CONTAINER_NAME="escrow-dashboard"
readonly AVAIL_ZONE=$(curl -s http://169.254.169.254/latest/meta-data/placement/availability-zone)
readonly REGION="$(echo "$AVAIL_ZONE" | sed 's/[a-z]$//g')"
readonly ACC_ID=$(aws sts get-caller-identity --query "Account" --output text)
readonly REGISTRY=$ACC_ID.dkr.ecr.$REGION.amazonaws.com

if ! grep -q "${REGISTRY}" ~/.docker/config.json ; then
        #readonly TOKEN=$(aws ecr get-authorization-token --region "${REGION}" --output text --query 'authorizationData[].authorizationToken')
        #curl -i -H "Authorization: Basic $TOKEN" https://"${REGISTRY}"/v2/amazonlinux/tags/list
        aws ecr get-login-password --region "${REGION}" | docker login -u AWS "${REGISTRY}" --password-stdin
        #aws ecr get-login-password --region "${REGION}" | docker login -u AWS "${REPO}" -p
fi

docker pull $IMAGE || echo "Failed to pull docker image $IMAGE"

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
