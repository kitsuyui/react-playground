#!/usr/bin/env bash

pnpm link ./config/eslint-config

# components
components=(clock timer stopwatch dekamoji measure treemap)
for component in "${components[@]}"; do
  pnpm link "./packages/$component"
done

# @kitsuyui/react-components
cd ./packages/components
for component in "${components[@]}"; do
  pnpm link "../../packages/$component"
done
cd -
pnpm link ./packages/components

# @kitsuyui/react-style-bulma
cd ./packages/style-bulma
pnpm link ../../packages/components
for component in "${components[@]}"; do
  pnpm link "../../packages/$component"
done
cd -
pnpm link ./packages/style-bulma

# examples depends each components
cd ./examples/storybook
for component in "${components[@]}"; do
  pnpm link "../../packages/$component"
done
pnpm link ../../packages/components
pnpm link ../../packages/style-bulma
cd -
