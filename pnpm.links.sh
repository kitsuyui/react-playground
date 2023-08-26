#!/usr/bin/env bash
# components
components=(clock timer stopwatch dekamoji measure treemap)

# @kitsuyui/react-components depends each components
cd ./packages/components
for component in "${components[@]}"
do
  pnpm link "../../packages/$component"
done
cd -

# @kitsuyui/react-style-bulma depends @kitsuyui/react-components and each components
cd ./packages/style-bulma
pnpm link ../../packages/components
for component in "${components[@]}"
do
  pnpm link "../../packages/$component"
done
cd -

# examples depends each components
cd ./examples/storybook
for component in "${components[@]}"
do
  pnpm link "../../packages/$component"
done
cd -

# project root depends @kitsuyui/react-style-bulma and @kitsuyui/react-components and each components
pnpm link ./packages/style-bulma
pnpm link ./packages/components
for component in "${components[@]}"
do
  pnpm link "./packages/$component"
done

pnpm link ./config/eslint-config-custom