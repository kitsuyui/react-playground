#!/bin/sh
set -eu

docker run --rm \
  -e CI=true \
  -v "$PWD":/work \
  -v react-playground-node_modules:/work/node_modules \
  -w /work \
  mcr.microsoft.com/playwright:v1.58.1-noble \
  /bin/bash -lc '
    set -eu
    export BUN_INSTALL=/root/.bun
    export PATH="$BUN_INSTALL/bin:$PATH"
    if ! command -v bun >/dev/null 2>&1; then
      apt-get update
      apt-get install -y curl unzip
      curl -fsSL https://bun.sh/install | bash -s -- bun-v1.3.11
    fi
    bun install --frozen-lockfile
    bun x vitest run --config vitest.browser.config.mts "$@"
  ' -- "$@"
