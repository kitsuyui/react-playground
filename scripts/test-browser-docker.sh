#!/bin/sh
set -eu

IMAGE_NAME=react-playground-playwright-bun:1.3.11

docker build \
  -f Dockerfile.playwright-bun \
  -t "$IMAGE_NAME" \
  .

docker run --rm \
  -e CI=true \
  -v "$PWD":/work \
  -v react-playground-node_modules:/work/node_modules \
  -w /work \
  "$IMAGE_NAME" \
  /bin/bash -lc '
    set -eu
    bun install --frozen-lockfile
    bun x vitest run --config vitest.browser.config.mts "$@"
  ' -- "$@"
