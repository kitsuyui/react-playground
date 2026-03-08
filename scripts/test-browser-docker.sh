#!/bin/sh
set -eu

docker run --rm \
  -e CI=true \
  -v "$PWD":/work \
  -v react-playground-node_modules:/work/node_modules \
  -v react-playground-pnpm-store:/pnpm/store \
  -w /work \
  mcr.microsoft.com/playwright:v1.58.1-noble \
  /bin/bash -lc '
    set -eu
    corepack enable
    pnpm config set store-dir /pnpm/store
    pnpm install --frozen-lockfile
    pnpm test:browser -- "$@"
  ' -- "$@"
