"use strict";(self.webpackChunk_kitsuyui_react_storybook=self.webpackChunk_kitsuyui_react_storybook||[]).push([[767],{"../../node_modules/.pnpm/css-loader@6.10.0_webpack@5.91.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!../../node_modules/.pnpm/bulma@1.0.0/node_modules/bulma/css/bulma.css":(a,l,r)=>{r.d(l,{A:()=>u});var e=r("../../node_modules/.pnpm/css-loader@6.10.0_webpack@5.91.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=r.n(e),n=r("../../node_modules/.pnpm/css-loader@6.10.0_webpack@5.91.0/node_modules/css-loader/dist/runtime/api.js"),t=r.n(n)()(i());t.push([a.id,`@charset "UTF-8";
/*! bulma.io v1.0.0 | MIT License | github.com/jgthms/bulma */
/* Bulma Utilities */
:root {
  --bulma-control-radius: var(--bulma-radius);
  --bulma-control-radius-small: var(--bulma-radius-small);
  --bulma-control-border-width: 1px;
  --bulma-control-height: 2.5em;
  --bulma-control-line-height: 1.5;
  --bulma-control-padding-vertical: calc(0.5em - 1px);
  --bulma-control-padding-horizontal: calc(0.75em - 1px);
  --bulma-control-size: var(--bulma-size-normal);
  --bulma-control-focus-shadow-l: 50%;
}

/* Bulma Themes */
:root {
  --bulma-scheme-h: 221;
  --bulma-scheme-s: 14%;
  --bulma-light-l: 90%;
  --bulma-light-invert-l: 20%;
  --bulma-dark-l: 20%;
  --bulma-dark-invert-l: 90%;
  --bulma-soft-l: 90%;
  --bulma-bold-l: 20%;
  --bulma-soft-invert-l: 20%;
  --bulma-bold-invert-l: 90%;
  --bulma-hover-background-l-delta: -5%;
  --bulma-active-background-l-delta: -10%;
  --bulma-hover-border-l-delta: -10%;
  --bulma-active-border-l-delta: -20%;
  --bulma-hover-color-l-delta: -5%;
  --bulma-active-color-l-delta: -10%;
  --bulma-hover-shadow-a-delta: -0.05;
  --bulma-active-shadow-a-delta: -0.1;
  --bulma-scheme-brightness: light;
  --bulma-scheme-main-l: 100%;
  --bulma-scheme-main-bis-l: 98%;
  --bulma-scheme-main-ter-l: 96%;
  --bulma-background-l: 96%;
  --bulma-border-weak-l: 93%;
  --bulma-border-l: 86%;
  --bulma-text-weak-l: 48%;
  --bulma-text-l: 29%;
  --bulma-text-strong-l: 21%;
  --bulma-text-title-l: 14%;
  --bulma-scheme-invert-ter-l: 14%;
  --bulma-scheme-invert-bis-l: 7%;
  --bulma-scheme-invert-l: 4%;
  --bulma-family-primary: Inter, SF Pro, Segoe UI, Roboto, Oxygen, Ubuntu, Helvetica Neue, Helvetica, Arial, sans-serif;
  --bulma-family-secondary: Inter, SF Pro, Segoe UI, Roboto, Oxygen, Ubuntu, Helvetica Neue, Helvetica, Arial, sans-serif;
  --bulma-family-code: Inconsolata, Hack, SF Mono, Roboto Mono, Source Code Pro, Ubuntu Mono, monospace;
  --bulma-size-small: 0.75rem;
  --bulma-size-normal: 1rem;
  --bulma-size-medium: 1.25rem;
  --bulma-size-large: 1.5rem;
  --bulma-weight-light: 300;
  --bulma-weight-normal: 400;
  --bulma-weight-medium: 500;
  --bulma-weight-semibold: 600;
  --bulma-weight-bold: 700;
  --bulma-weight-extrabold: 800;
  --bulma-block-spacing: 1.5rem;
  --bulma-duration: 294ms;
  --bulma-easing: ease-out;
  --bulma-radius-small: 0.25rem;
  --bulma-radius: 0.375rem;
  --bulma-radius-medium: 0.5em;
  --bulma-radius-large: 0.75rem;
  --bulma-radius-rounded: 9999px;
  --bulma-speed: 86ms;
  --bulma-loading-color: var(--bulma-border);
  --bulma-burger-h: var(--bulma-link-h);
  --bulma-burger-s: var(--bulma-link-s);
  --bulma-burger-l: var(--bulma-link-l);
  --bulma-burger-border-radius: 0.5em;
  --bulma-burger-gap: 5px;
  --bulma-burger-item-height: 2px;
  --bulma-burger-item-width: 20px;
  --bulma-white: hsla(var(--bulma-white-h), var(--bulma-white-s), var(--bulma-white-l), 1);
  --bulma-white-base: hsla(var(--bulma-white-h), var(--bulma-white-s), var(--bulma-white-l), 1);
  --bulma-white-rgb: 255, 255, 255;
  --bulma-white-h: 221deg;
  --bulma-white-s: 14%;
  --bulma-white-l: 100%;
  --bulma-white-invert-l: 4%;
  --bulma-white-invert: hsl(221, 14%, 4%);
  --bulma-white-on-scheme-l: 35%;
  --bulma-white-on-scheme: hsla(var(--bulma-white-h), var(--bulma-white-s), var(--bulma-white-on-scheme-l), 1);
  --bulma-black: hsla(var(--bulma-black-h), var(--bulma-black-s), var(--bulma-black-l), 1);
  --bulma-black-base: hsla(var(--bulma-black-h), var(--bulma-black-s), var(--bulma-black-l), 1);
  --bulma-black-rgb: 9, 10, 12;
  --bulma-black-h: 221deg;
  --bulma-black-s: 14%;
  --bulma-black-l: 4%;
  --bulma-black-invert-l: 100%;
  --bulma-black-invert: hsl(221, 14%, 100%);
  --bulma-black-on-scheme-l: 4%;
  --bulma-black-on-scheme: hsla(var(--bulma-black-h), var(--bulma-black-s), var(--bulma-black-on-scheme-l), 1);
  --bulma-light: hsla(var(--bulma-light-h), var(--bulma-light-s), var(--bulma-light-l), 1);
  --bulma-light-base: hsla(var(--bulma-light-h), var(--bulma-light-s), var(--bulma-light-l), 1);
  --bulma-light-rgb: 243, 244, 246;
  --bulma-light-h: 221deg;
  --bulma-light-s: 14%;
  --bulma-light-l: 96%;
  --bulma-light-invert-l: 21%;
  --bulma-light-invert: hsl(221, 14%, 21%);
  --bulma-light-on-scheme-l: 36%;
  --bulma-light-on-scheme: hsla(var(--bulma-light-h), var(--bulma-light-s), var(--bulma-light-on-scheme-l), 1);
  --bulma-dark: hsla(var(--bulma-dark-h), var(--bulma-dark-s), var(--bulma-dark-l), 1);
  --bulma-dark-base: hsla(var(--bulma-dark-h), var(--bulma-dark-s), var(--bulma-dark-l), 1);
  --bulma-dark-rgb: 46, 51, 61;
  --bulma-dark-h: 221deg;
  --bulma-dark-s: 14%;
  --bulma-dark-l: 21%;
  --bulma-dark-invert-l: 96%;
  --bulma-dark-invert: hsl(221, 14%, 96%);
  --bulma-dark-on-scheme-l: 21%;
  --bulma-dark-on-scheme: hsla(var(--bulma-dark-h), var(--bulma-dark-s), var(--bulma-dark-on-scheme-l), 1);
  --bulma-text: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-l), 1);
  --bulma-text-base: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-l), 1);
  --bulma-text-rgb: 64, 70, 84;
  --bulma-text-h: 221deg;
  --bulma-text-s: 14%;
  --bulma-text-l: 29%;
  --bulma-text-00-l: 0%;
  --bulma-text-05-l: 4%;
  --bulma-text-10-l: 9%;
  --bulma-text-15-l: 14%;
  --bulma-text-20-l: 19%;
  --bulma-text-25-l: 24%;
  --bulma-text-30-l: 29%;
  --bulma-text-35-l: 34%;
  --bulma-text-40-l: 39%;
  --bulma-text-45-l: 44%;
  --bulma-text-50-l: 49%;
  --bulma-text-55-l: 54%;
  --bulma-text-60-l: 59%;
  --bulma-text-65-l: 64%;
  --bulma-text-70-l: 69%;
  --bulma-text-75-l: 74%;
  --bulma-text-80-l: 79%;
  --bulma-text-85-l: 84%;
  --bulma-text-90-l: 89%;
  --bulma-text-95-l: 94%;
  --bulma-text-100-l: 100%;
  --bulma-text-00: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-00-l), 1);
  --bulma-text-00-invert-l: var(--bulma-text-60-l);
  --bulma-text-00-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-00-invert-l), 1);
  --bulma-text-05: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-05-l), 1);
  --bulma-text-05-invert-l: var(--bulma-text-60-l);
  --bulma-text-05-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-05-invert-l), 1);
  --bulma-text-10: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-10-l), 1);
  --bulma-text-10-invert-l: var(--bulma-text-70-l);
  --bulma-text-10-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-10-invert-l), 1);
  --bulma-text-15: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-15-l), 1);
  --bulma-text-15-invert-l: var(--bulma-text-75-l);
  --bulma-text-15-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-15-invert-l), 1);
  --bulma-text-20: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-20-l), 1);
  --bulma-text-20-invert-l: var(--bulma-text-85-l);
  --bulma-text-20-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-20-invert-l), 1);
  --bulma-text-25: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-25-l), 1);
  --bulma-text-25-invert-l: var(--bulma-text-95-l);
  --bulma-text-25-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-25-invert-l), 1);
  --bulma-text-30: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-30-l), 1);
  --bulma-text-30-invert-l: var(--bulma-text-100-l);
  --bulma-text-30-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-30-invert-l), 1);
  --bulma-text-35: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-35-l), 1);
  --bulma-text-35-invert-l: var(--bulma-text-100-l);
  --bulma-text-35-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-35-invert-l), 1);
  --bulma-text-40: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-40-l), 1);
  --bulma-text-40-invert-l: var(--bulma-text-100-l);
  --bulma-text-40-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-40-invert-l), 1);
  --bulma-text-45: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-45-l), 1);
  --bulma-text-45-invert-l: var(--bulma-text-100-l);
  --bulma-text-45-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-45-invert-l), 1);
  --bulma-text-50: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-50-l), 1);
  --bulma-text-50-invert-l: var(--bulma-text-100-l);
  --bulma-text-50-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-50-invert-l), 1);
  --bulma-text-55: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-55-l), 1);
  --bulma-text-55-invert-l: var(--bulma-text-100-l);
  --bulma-text-55-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-55-invert-l), 1);
  --bulma-text-60: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-60-l), 1);
  --bulma-text-60-invert-l: var(--bulma-text-05-l);
  --bulma-text-60-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-60-invert-l), 1);
  --bulma-text-65: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-65-l), 1);
  --bulma-text-65-invert-l: var(--bulma-text-05-l);
  --bulma-text-65-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-65-invert-l), 1);
  --bulma-text-70: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-70-l), 1);
  --bulma-text-70-invert-l: var(--bulma-text-10-l);
  --bulma-text-70-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-70-invert-l), 1);
  --bulma-text-75: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-75-l), 1);
  --bulma-text-75-invert-l: var(--bulma-text-15-l);
  --bulma-text-75-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-75-invert-l), 1);
  --bulma-text-80: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-80-l), 1);
  --bulma-text-80-invert-l: var(--bulma-text-15-l);
  --bulma-text-80-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-80-invert-l), 1);
  --bulma-text-85: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-85-l), 1);
  --bulma-text-85-invert-l: var(--bulma-text-20-l);
  --bulma-text-85-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-85-invert-l), 1);
  --bulma-text-90: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-90-l), 1);
  --bulma-text-90-invert-l: var(--bulma-text-20-l);
  --bulma-text-90-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-90-invert-l), 1);
  --bulma-text-95: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-95-l), 1);
  --bulma-text-95-invert-l: var(--bulma-text-25-l);
  --bulma-text-95-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-95-invert-l), 1);
  --bulma-text-100: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-100-l), 1);
  --bulma-text-100-invert-l: var(--bulma-text-30-l);
  --bulma-text-100-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-100-invert-l), 1);
  --bulma-text-invert-l: var(--bulma-text-100-l);
  --bulma-text-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-invert-l), 1);
  --bulma-text-light-l: var(--bulma-text-90-l);
  --bulma-text-light: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-light-l), 1);
  --bulma-text-light-invert-l: var(--bulma-text-20-l);
  --bulma-text-light-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-light-invert-l), 1);
  --bulma-text-dark-l: var(--bulma-text-10-l);
  --bulma-text-dark: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-dark-l), 1);
  --bulma-text-dark-invert-l: var(--bulma-text-70-l);
  --bulma-text-dark-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-dark-invert-l), 1);
  --bulma-text-soft: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-soft-l), 1);
  --bulma-text-bold: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-bold-l), 1);
  --bulma-text-soft-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-soft-invert-l), 1);
  --bulma-text-bold-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-bold-invert-l), 1);
  --bulma-text-on-scheme-l: 29%;
  --bulma-text-on-scheme: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-on-scheme-l), 1);
  --bulma-primary: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-l), 1);
  --bulma-primary-base: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-l), 1);
  --bulma-primary-rgb: 0, 209, 178;
  --bulma-primary-h: 171deg;
  --bulma-primary-s: 100%;
  --bulma-primary-l: 41%;
  --bulma-primary-00-l: 1%;
  --bulma-primary-05-l: 6%;
  --bulma-primary-10-l: 11%;
  --bulma-primary-15-l: 16%;
  --bulma-primary-20-l: 21%;
  --bulma-primary-25-l: 26%;
  --bulma-primary-30-l: 31%;
  --bulma-primary-35-l: 36%;
  --bulma-primary-40-l: 41%;
  --bulma-primary-45-l: 46%;
  --bulma-primary-50-l: 51%;
  --bulma-primary-55-l: 56%;
  --bulma-primary-60-l: 61%;
  --bulma-primary-65-l: 66%;
  --bulma-primary-70-l: 71%;
  --bulma-primary-75-l: 76%;
  --bulma-primary-80-l: 81%;
  --bulma-primary-85-l: 86%;
  --bulma-primary-90-l: 91%;
  --bulma-primary-95-l: 96%;
  --bulma-primary-100-l: 100%;
  --bulma-primary-00: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-00-l), 1);
  --bulma-primary-00-invert-l: var(--bulma-primary-30-l);
  --bulma-primary-00-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-00-invert-l), 1);
  --bulma-primary-05: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-05-l), 1);
  --bulma-primary-05-invert-l: var(--bulma-primary-40-l);
  --bulma-primary-05-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-05-invert-l), 1);
  --bulma-primary-10: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-10-l), 1);
  --bulma-primary-10-invert-l: var(--bulma-primary-50-l);
  --bulma-primary-10-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-10-invert-l), 1);
  --bulma-primary-15: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-15-l), 1);
  --bulma-primary-15-invert-l: var(--bulma-primary-100-l);
  --bulma-primary-15-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-15-invert-l), 1);
  --bulma-primary-20: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-20-l), 1);
  --bulma-primary-20-invert-l: var(--bulma-primary-100-l);
  --bulma-primary-20-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-20-invert-l), 1);
  --bulma-primary-25: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-25-l), 1);
  --bulma-primary-25-invert-l: var(--bulma-primary-100-l);
  --bulma-primary-25-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-25-invert-l), 1);
  --bulma-primary-30: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-30-l), 1);
  --bulma-primary-30-invert-l: var(--bulma-primary-00-l);
  --bulma-primary-30-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-30-invert-l), 1);
  --bulma-primary-35: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-35-l), 1);
  --bulma-primary-35-invert-l: var(--bulma-primary-00-l);
  --bulma-primary-35-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-35-invert-l), 1);
  --bulma-primary-40: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-40-l), 1);
  --bulma-primary-40-invert-l: var(--bulma-primary-05-l);
  --bulma-primary-40-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-40-invert-l), 1);
  --bulma-primary-45: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-45-l), 1);
  --bulma-primary-45-invert-l: var(--bulma-primary-05-l);
  --bulma-primary-45-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-45-invert-l), 1);
  --bulma-primary-50: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-50-l), 1);
  --bulma-primary-50-invert-l: var(--bulma-primary-10-l);
  --bulma-primary-50-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-50-invert-l), 1);
  --bulma-primary-55: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-55-l), 1);
  --bulma-primary-55-invert-l: var(--bulma-primary-10-l);
  --bulma-primary-55-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-55-invert-l), 1);
  --bulma-primary-60: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-60-l), 1);
  --bulma-primary-60-invert-l: var(--bulma-primary-10-l);
  --bulma-primary-60-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-60-invert-l), 1);
  --bulma-primary-65: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-65-l), 1);
  --bulma-primary-65-invert-l: var(--bulma-primary-10-l);
  --bulma-primary-65-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-65-invert-l), 1);
  --bulma-primary-70: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-70-l), 1);
  --bulma-primary-70-invert-l: var(--bulma-primary-10-l);
  --bulma-primary-70-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-70-invert-l), 1);
  --bulma-primary-75: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-75-l), 1);
  --bulma-primary-75-invert-l: var(--bulma-primary-10-l);
  --bulma-primary-75-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-75-invert-l), 1);
  --bulma-primary-80: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-80-l), 1);
  --bulma-primary-80-invert-l: var(--bulma-primary-10-l);
  --bulma-primary-80-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-80-invert-l), 1);
  --bulma-primary-85: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-85-l), 1);
  --bulma-primary-85-invert-l: var(--bulma-primary-10-l);
  --bulma-primary-85-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-85-invert-l), 1);
  --bulma-primary-90: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-90-l), 1);
  --bulma-primary-90-invert-l: var(--bulma-primary-10-l);
  --bulma-primary-90-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-90-invert-l), 1);
  --bulma-primary-95: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-95-l), 1);
  --bulma-primary-95-invert-l: var(--bulma-primary-10-l);
  --bulma-primary-95-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-95-invert-l), 1);
  --bulma-primary-100: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-100-l), 1);
  --bulma-primary-100-invert-l: var(--bulma-primary-15-l);
  --bulma-primary-100-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-100-invert-l), 1);
  --bulma-primary-invert-l: var(--bulma-primary-05-l);
  --bulma-primary-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-invert-l), 1);
  --bulma-primary-light-l: var(--bulma-primary-90-l);
  --bulma-primary-light: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-light-l), 1);
  --bulma-primary-light-invert-l: var(--bulma-primary-10-l);
  --bulma-primary-light-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-light-invert-l), 1);
  --bulma-primary-dark-l: var(--bulma-primary-10-l);
  --bulma-primary-dark: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-dark-l), 1);
  --bulma-primary-dark-invert-l: var(--bulma-primary-50-l);
  --bulma-primary-dark-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-dark-invert-l), 1);
  --bulma-primary-soft: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-soft-l), 1);
  --bulma-primary-bold: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-bold-l), 1);
  --bulma-primary-soft-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-soft-invert-l), 1);
  --bulma-primary-bold-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-bold-invert-l), 1);
  --bulma-primary-on-scheme-l: 21%;
  --bulma-primary-on-scheme: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-on-scheme-l), 1);
  --bulma-link: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-l), 1);
  --bulma-link-base: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-l), 1);
  --bulma-link-rgb: 66, 88, 255;
  --bulma-link-h: 233deg;
  --bulma-link-s: 100%;
  --bulma-link-l: 63%;
  --bulma-link-00-l: 0%;
  --bulma-link-05-l: 3%;
  --bulma-link-10-l: 8%;
  --bulma-link-15-l: 13%;
  --bulma-link-20-l: 18%;
  --bulma-link-25-l: 23%;
  --bulma-link-30-l: 28%;
  --bulma-link-35-l: 33%;
  --bulma-link-40-l: 38%;
  --bulma-link-45-l: 43%;
  --bulma-link-50-l: 48%;
  --bulma-link-55-l: 53%;
  --bulma-link-60-l: 58%;
  --bulma-link-65-l: 63%;
  --bulma-link-70-l: 68%;
  --bulma-link-75-l: 73%;
  --bulma-link-80-l: 78%;
  --bulma-link-85-l: 83%;
  --bulma-link-90-l: 88%;
  --bulma-link-95-l: 93%;
  --bulma-link-100-l: 100%;
  --bulma-link-00: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-00-l), 1);
  --bulma-link-00-invert-l: var(--bulma-link-75-l);
  --bulma-link-00-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-00-invert-l), 1);
  --bulma-link-05: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-05-l), 1);
  --bulma-link-05-invert-l: var(--bulma-link-75-l);
  --bulma-link-05-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-05-invert-l), 1);
  --bulma-link-10: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-10-l), 1);
  --bulma-link-10-invert-l: var(--bulma-link-75-l);
  --bulma-link-10-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-10-invert-l), 1);
  --bulma-link-15: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-15-l), 1);
  --bulma-link-15-invert-l: var(--bulma-link-80-l);
  --bulma-link-15-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-15-invert-l), 1);
  --bulma-link-20: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-20-l), 1);
  --bulma-link-20-invert-l: var(--bulma-link-80-l);
  --bulma-link-20-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-20-invert-l), 1);
  --bulma-link-25: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-25-l), 1);
  --bulma-link-25-invert-l: var(--bulma-link-85-l);
  --bulma-link-25-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-25-invert-l), 1);
  --bulma-link-30: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-30-l), 1);
  --bulma-link-30-invert-l: var(--bulma-link-90-l);
  --bulma-link-30-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-30-invert-l), 1);
  --bulma-link-35: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-35-l), 1);
  --bulma-link-35-invert-l: var(--bulma-link-90-l);
  --bulma-link-35-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-35-invert-l), 1);
  --bulma-link-40: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-40-l), 1);
  --bulma-link-40-invert-l: var(--bulma-link-95-l);
  --bulma-link-40-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-40-invert-l), 1);
  --bulma-link-45: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-45-l), 1);
  --bulma-link-45-invert-l: var(--bulma-link-100-l);
  --bulma-link-45-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-45-invert-l), 1);
  --bulma-link-50: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-50-l), 1);
  --bulma-link-50-invert-l: var(--bulma-link-100-l);
  --bulma-link-50-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-50-invert-l), 1);
  --bulma-link-55: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-55-l), 1);
  --bulma-link-55-invert-l: var(--bulma-link-100-l);
  --bulma-link-55-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-55-invert-l), 1);
  --bulma-link-60: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-60-l), 1);
  --bulma-link-60-invert-l: var(--bulma-link-100-l);
  --bulma-link-60-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-60-invert-l), 1);
  --bulma-link-65: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-65-l), 1);
  --bulma-link-65-invert-l: var(--bulma-link-100-l);
  --bulma-link-65-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-65-invert-l), 1);
  --bulma-link-70: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-70-l), 1);
  --bulma-link-70-invert-l: var(--bulma-link-100-l);
  --bulma-link-70-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-70-invert-l), 1);
  --bulma-link-75: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-75-l), 1);
  --bulma-link-75-invert-l: var(--bulma-link-10-l);
  --bulma-link-75-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-75-invert-l), 1);
  --bulma-link-80: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-80-l), 1);
  --bulma-link-80-invert-l: var(--bulma-link-20-l);
  --bulma-link-80-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-80-invert-l), 1);
  --bulma-link-85: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-85-l), 1);
  --bulma-link-85-invert-l: var(--bulma-link-25-l);
  --bulma-link-85-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-85-invert-l), 1);
  --bulma-link-90: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-90-l), 1);
  --bulma-link-90-invert-l: var(--bulma-link-35-l);
  --bulma-link-90-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-90-invert-l), 1);
  --bulma-link-95: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-95-l), 1);
  --bulma-link-95-invert-l: var(--bulma-link-40-l);
  --bulma-link-95-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-95-invert-l), 1);
  --bulma-link-100: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-100-l), 1);
  --bulma-link-100-invert-l: var(--bulma-link-50-l);
  --bulma-link-100-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-100-invert-l), 1);
  --bulma-link-invert-l: var(--bulma-link-100-l);
  --bulma-link-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-invert-l), 1);
  --bulma-link-light-l: var(--bulma-link-90-l);
  --bulma-link-light: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-light-l), 1);
  --bulma-link-light-invert-l: var(--bulma-link-35-l);
  --bulma-link-light-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-light-invert-l), 1);
  --bulma-link-dark-l: var(--bulma-link-10-l);
  --bulma-link-dark: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-dark-l), 1);
  --bulma-link-dark-invert-l: var(--bulma-link-75-l);
  --bulma-link-dark-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-dark-invert-l), 1);
  --bulma-link-soft: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-soft-l), 1);
  --bulma-link-bold: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-bold-l), 1);
  --bulma-link-soft-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-soft-invert-l), 1);
  --bulma-link-bold-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-bold-invert-l), 1);
  --bulma-link-on-scheme-l: 58%;
  --bulma-link-on-scheme: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-on-scheme-l), 1);
  --bulma-info: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-l), 1);
  --bulma-info-base: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-l), 1);
  --bulma-info-rgb: 102, 209, 255;
  --bulma-info-h: 198deg;
  --bulma-info-s: 100%;
  --bulma-info-l: 70%;
  --bulma-info-00-l: 0%;
  --bulma-info-05-l: 5%;
  --bulma-info-10-l: 10%;
  --bulma-info-15-l: 15%;
  --bulma-info-20-l: 20%;
  --bulma-info-25-l: 25%;
  --bulma-info-30-l: 30%;
  --bulma-info-35-l: 35%;
  --bulma-info-40-l: 40%;
  --bulma-info-45-l: 45%;
  --bulma-info-50-l: 50%;
  --bulma-info-55-l: 55%;
  --bulma-info-60-l: 60%;
  --bulma-info-65-l: 65%;
  --bulma-info-70-l: 70%;
  --bulma-info-75-l: 75%;
  --bulma-info-80-l: 80%;
  --bulma-info-85-l: 85%;
  --bulma-info-90-l: 90%;
  --bulma-info-95-l: 95%;
  --bulma-info-100-l: 100%;
  --bulma-info-00: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-00-l), 1);
  --bulma-info-00-invert-l: var(--bulma-info-45-l);
  --bulma-info-00-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-00-invert-l), 1);
  --bulma-info-05: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-05-l), 1);
  --bulma-info-05-invert-l: var(--bulma-info-50-l);
  --bulma-info-05-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-05-invert-l), 1);
  --bulma-info-10: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-10-l), 1);
  --bulma-info-10-invert-l: var(--bulma-info-60-l);
  --bulma-info-10-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-10-invert-l), 1);
  --bulma-info-15: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-15-l), 1);
  --bulma-info-15-invert-l: var(--bulma-info-80-l);
  --bulma-info-15-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-15-invert-l), 1);
  --bulma-info-20: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-20-l), 1);
  --bulma-info-20-invert-l: var(--bulma-info-95-l);
  --bulma-info-20-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-20-invert-l), 1);
  --bulma-info-25: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-25-l), 1);
  --bulma-info-25-invert-l: var(--bulma-info-100-l);
  --bulma-info-25-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-25-invert-l), 1);
  --bulma-info-30: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-30-l), 1);
  --bulma-info-30-invert-l: var(--bulma-info-100-l);
  --bulma-info-30-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-30-invert-l), 1);
  --bulma-info-35: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-35-l), 1);
  --bulma-info-35-invert-l: var(--bulma-info-100-l);
  --bulma-info-35-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-35-invert-l), 1);
  --bulma-info-40: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-40-l), 1);
  --bulma-info-40-invert-l: var(--bulma-info-100-l);
  --bulma-info-40-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-40-invert-l), 1);
  --bulma-info-45: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-45-l), 1);
  --bulma-info-45-invert-l: var(--bulma-info-00-l);
  --bulma-info-45-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-45-invert-l), 1);
  --bulma-info-50: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-50-l), 1);
  --bulma-info-50-invert-l: var(--bulma-info-05-l);
  --bulma-info-50-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-50-invert-l), 1);
  --bulma-info-55: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-55-l), 1);
  --bulma-info-55-invert-l: var(--bulma-info-05-l);
  --bulma-info-55-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-55-invert-l), 1);
  --bulma-info-60: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-60-l), 1);
  --bulma-info-60-invert-l: var(--bulma-info-10-l);
  --bulma-info-60-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-60-invert-l), 1);
  --bulma-info-65: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-65-l), 1);
  --bulma-info-65-invert-l: var(--bulma-info-10-l);
  --bulma-info-65-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-65-invert-l), 1);
  --bulma-info-70: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-70-l), 1);
  --bulma-info-70-invert-l: var(--bulma-info-10-l);
  --bulma-info-70-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-70-invert-l), 1);
  --bulma-info-75: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-75-l), 1);
  --bulma-info-75-invert-l: var(--bulma-info-10-l);
  --bulma-info-75-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-75-invert-l), 1);
  --bulma-info-80: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-80-l), 1);
  --bulma-info-80-invert-l: var(--bulma-info-15-l);
  --bulma-info-80-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-80-invert-l), 1);
  --bulma-info-85: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-85-l), 1);
  --bulma-info-85-invert-l: var(--bulma-info-15-l);
  --bulma-info-85-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-85-invert-l), 1);
  --bulma-info-90: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-90-l), 1);
  --bulma-info-90-invert-l: var(--bulma-info-15-l);
  --bulma-info-90-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-90-invert-l), 1);
  --bulma-info-95: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-95-l), 1);
  --bulma-info-95-invert-l: var(--bulma-info-20-l);
  --bulma-info-95-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-95-invert-l), 1);
  --bulma-info-100: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-100-l), 1);
  --bulma-info-100-invert-l: var(--bulma-info-20-l);
  --bulma-info-100-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-100-invert-l), 1);
  --bulma-info-invert-l: var(--bulma-info-10-l);
  --bulma-info-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-invert-l), 1);
  --bulma-info-light-l: var(--bulma-info-90-l);
  --bulma-info-light: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-light-l), 1);
  --bulma-info-light-invert-l: var(--bulma-info-15-l);
  --bulma-info-light-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-light-invert-l), 1);
  --bulma-info-dark-l: var(--bulma-info-10-l);
  --bulma-info-dark: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-dark-l), 1);
  --bulma-info-dark-invert-l: var(--bulma-info-60-l);
  --bulma-info-dark-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-dark-invert-l), 1);
  --bulma-info-soft: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-soft-l), 1);
  --bulma-info-bold: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-bold-l), 1);
  --bulma-info-soft-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-soft-invert-l), 1);
  --bulma-info-bold-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-bold-invert-l), 1);
  --bulma-info-on-scheme-l: 25%;
  --bulma-info-on-scheme: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-on-scheme-l), 1);
  --bulma-success: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-l), 1);
  --bulma-success-base: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-l), 1);
  --bulma-success-rgb: 72, 199, 142;
  --bulma-success-h: 153deg;
  --bulma-success-s: 53%;
  --bulma-success-l: 53%;
  --bulma-success-00-l: 0%;
  --bulma-success-05-l: 3%;
  --bulma-success-10-l: 8%;
  --bulma-success-15-l: 13%;
  --bulma-success-20-l: 18%;
  --bulma-success-25-l: 23%;
  --bulma-success-30-l: 28%;
  --bulma-success-35-l: 33%;
  --bulma-success-40-l: 38%;
  --bulma-success-45-l: 43%;
  --bulma-success-50-l: 48%;
  --bulma-success-55-l: 53%;
  --bulma-success-60-l: 58%;
  --bulma-success-65-l: 63%;
  --bulma-success-70-l: 68%;
  --bulma-success-75-l: 73%;
  --bulma-success-80-l: 78%;
  --bulma-success-85-l: 83%;
  --bulma-success-90-l: 88%;
  --bulma-success-95-l: 93%;
  --bulma-success-100-l: 100%;
  --bulma-success-00: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-00-l), 1);
  --bulma-success-00-invert-l: var(--bulma-success-45-l);
  --bulma-success-00-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-00-invert-l), 1);
  --bulma-success-05: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-05-l), 1);
  --bulma-success-05-invert-l: var(--bulma-success-45-l);
  --bulma-success-05-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-05-invert-l), 1);
  --bulma-success-10: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-10-l), 1);
  --bulma-success-10-invert-l: var(--bulma-success-55-l);
  --bulma-success-10-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-10-invert-l), 1);
  --bulma-success-15: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-15-l), 1);
  --bulma-success-15-invert-l: var(--bulma-success-75-l);
  --bulma-success-15-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-15-invert-l), 1);
  --bulma-success-20: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-20-l), 1);
  --bulma-success-20-invert-l: var(--bulma-success-90-l);
  --bulma-success-20-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-20-invert-l), 1);
  --bulma-success-25: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-25-l), 1);
  --bulma-success-25-invert-l: var(--bulma-success-100-l);
  --bulma-success-25-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-25-invert-l), 1);
  --bulma-success-30: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-30-l), 1);
  --bulma-success-30-invert-l: var(--bulma-success-100-l);
  --bulma-success-30-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-30-invert-l), 1);
  --bulma-success-35: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-35-l), 1);
  --bulma-success-35-invert-l: var(--bulma-success-100-l);
  --bulma-success-35-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-35-invert-l), 1);
  --bulma-success-40: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-40-l), 1);
  --bulma-success-40-invert-l: var(--bulma-success-100-l);
  --bulma-success-40-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-40-invert-l), 1);
  --bulma-success-45: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-45-l), 1);
  --bulma-success-45-invert-l: var(--bulma-success-05-l);
  --bulma-success-45-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-45-invert-l), 1);
  --bulma-success-50: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-50-l), 1);
  --bulma-success-50-invert-l: var(--bulma-success-05-l);
  --bulma-success-50-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-50-invert-l), 1);
  --bulma-success-55: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-55-l), 1);
  --bulma-success-55-invert-l: var(--bulma-success-10-l);
  --bulma-success-55-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-55-invert-l), 1);
  --bulma-success-60: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-60-l), 1);
  --bulma-success-60-invert-l: var(--bulma-success-10-l);
  --bulma-success-60-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-60-invert-l), 1);
  --bulma-success-65: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-65-l), 1);
  --bulma-success-65-invert-l: var(--bulma-success-10-l);
  --bulma-success-65-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-65-invert-l), 1);
  --bulma-success-70: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-70-l), 1);
  --bulma-success-70-invert-l: var(--bulma-success-10-l);
  --bulma-success-70-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-70-invert-l), 1);
  --bulma-success-75: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-75-l), 1);
  --bulma-success-75-invert-l: var(--bulma-success-15-l);
  --bulma-success-75-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-75-invert-l), 1);
  --bulma-success-80: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-80-l), 1);
  --bulma-success-80-invert-l: var(--bulma-success-15-l);
  --bulma-success-80-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-80-invert-l), 1);
  --bulma-success-85: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-85-l), 1);
  --bulma-success-85-invert-l: var(--bulma-success-15-l);
  --bulma-success-85-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-85-invert-l), 1);
  --bulma-success-90: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-90-l), 1);
  --bulma-success-90-invert-l: var(--bulma-success-20-l);
  --bulma-success-90-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-90-invert-l), 1);
  --bulma-success-95: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-95-l), 1);
  --bulma-success-95-invert-l: var(--bulma-success-20-l);
  --bulma-success-95-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-95-invert-l), 1);
  --bulma-success-100: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-100-l), 1);
  --bulma-success-100-invert-l: var(--bulma-success-20-l);
  --bulma-success-100-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-100-invert-l), 1);
  --bulma-success-invert-l: var(--bulma-success-10-l);
  --bulma-success-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-invert-l), 1);
  --bulma-success-light-l: var(--bulma-success-90-l);
  --bulma-success-light: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-light-l), 1);
  --bulma-success-light-invert-l: var(--bulma-success-20-l);
  --bulma-success-light-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-light-invert-l), 1);
  --bulma-success-dark-l: var(--bulma-success-10-l);
  --bulma-success-dark: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-dark-l), 1);
  --bulma-success-dark-invert-l: var(--bulma-success-55-l);
  --bulma-success-dark-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-dark-invert-l), 1);
  --bulma-success-soft: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-soft-l), 1);
  --bulma-success-bold: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-bold-l), 1);
  --bulma-success-soft-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-soft-invert-l), 1);
  --bulma-success-bold-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-bold-invert-l), 1);
  --bulma-success-on-scheme-l: 23%;
  --bulma-success-on-scheme: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-on-scheme-l), 1);
  --bulma-warning: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-l), 1);
  --bulma-warning-base: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-l), 1);
  --bulma-warning-rgb: 255, 183, 15;
  --bulma-warning-h: 42deg;
  --bulma-warning-s: 100%;
  --bulma-warning-l: 53%;
  --bulma-warning-00-l: 0%;
  --bulma-warning-05-l: 3%;
  --bulma-warning-10-l: 8%;
  --bulma-warning-15-l: 13%;
  --bulma-warning-20-l: 18%;
  --bulma-warning-25-l: 23%;
  --bulma-warning-30-l: 28%;
  --bulma-warning-35-l: 33%;
  --bulma-warning-40-l: 38%;
  --bulma-warning-45-l: 43%;
  --bulma-warning-50-l: 48%;
  --bulma-warning-55-l: 53%;
  --bulma-warning-60-l: 58%;
  --bulma-warning-65-l: 63%;
  --bulma-warning-70-l: 68%;
  --bulma-warning-75-l: 73%;
  --bulma-warning-80-l: 78%;
  --bulma-warning-85-l: 83%;
  --bulma-warning-90-l: 88%;
  --bulma-warning-95-l: 93%;
  --bulma-warning-100-l: 100%;
  --bulma-warning-00: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-00-l), 1);
  --bulma-warning-00-invert-l: var(--bulma-warning-40-l);
  --bulma-warning-00-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-00-invert-l), 1);
  --bulma-warning-05: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-05-l), 1);
  --bulma-warning-05-invert-l: var(--bulma-warning-45-l);
  --bulma-warning-05-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-05-invert-l), 1);
  --bulma-warning-10: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-10-l), 1);
  --bulma-warning-10-invert-l: var(--bulma-warning-50-l);
  --bulma-warning-10-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-10-invert-l), 1);
  --bulma-warning-15: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-15-l), 1);
  --bulma-warning-15-invert-l: var(--bulma-warning-70-l);
  --bulma-warning-15-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-15-invert-l), 1);
  --bulma-warning-20: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-20-l), 1);
  --bulma-warning-20-invert-l: var(--bulma-warning-100-l);
  --bulma-warning-20-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-20-invert-l), 1);
  --bulma-warning-25: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-25-l), 1);
  --bulma-warning-25-invert-l: var(--bulma-warning-100-l);
  --bulma-warning-25-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-25-invert-l), 1);
  --bulma-warning-30: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-30-l), 1);
  --bulma-warning-30-invert-l: var(--bulma-warning-100-l);
  --bulma-warning-30-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-30-invert-l), 1);
  --bulma-warning-35: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-35-l), 1);
  --bulma-warning-35-invert-l: var(--bulma-warning-100-l);
  --bulma-warning-35-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-35-invert-l), 1);
  --bulma-warning-40: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-40-l), 1);
  --bulma-warning-40-invert-l: var(--bulma-warning-00-l);
  --bulma-warning-40-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-40-invert-l), 1);
  --bulma-warning-45: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-45-l), 1);
  --bulma-warning-45-invert-l: var(--bulma-warning-05-l);
  --bulma-warning-45-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-45-invert-l), 1);
  --bulma-warning-50: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-50-l), 1);
  --bulma-warning-50-invert-l: var(--bulma-warning-10-l);
  --bulma-warning-50-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-50-invert-l), 1);
  --bulma-warning-55: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-55-l), 1);
  --bulma-warning-55-invert-l: var(--bulma-warning-10-l);
  --bulma-warning-55-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-55-invert-l), 1);
  --bulma-warning-60: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-60-l), 1);
  --bulma-warning-60-invert-l: var(--bulma-warning-10-l);
  --bulma-warning-60-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-60-invert-l), 1);
  --bulma-warning-65: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-65-l), 1);
  --bulma-warning-65-invert-l: var(--bulma-warning-10-l);
  --bulma-warning-65-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-65-invert-l), 1);
  --bulma-warning-70: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-70-l), 1);
  --bulma-warning-70-invert-l: var(--bulma-warning-15-l);
  --bulma-warning-70-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-70-invert-l), 1);
  --bulma-warning-75: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-75-l), 1);
  --bulma-warning-75-invert-l: var(--bulma-warning-15-l);
  --bulma-warning-75-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-75-invert-l), 1);
  --bulma-warning-80: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-80-l), 1);
  --bulma-warning-80-invert-l: var(--bulma-warning-15-l);
  --bulma-warning-80-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-80-invert-l), 1);
  --bulma-warning-85: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-85-l), 1);
  --bulma-warning-85-invert-l: var(--bulma-warning-15-l);
  --bulma-warning-85-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-85-invert-l), 1);
  --bulma-warning-90: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-90-l), 1);
  --bulma-warning-90-invert-l: var(--bulma-warning-15-l);
  --bulma-warning-90-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-90-invert-l), 1);
  --bulma-warning-95: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-95-l), 1);
  --bulma-warning-95-invert-l: var(--bulma-warning-15-l);
  --bulma-warning-95-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-95-invert-l), 1);
  --bulma-warning-100: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-100-l), 1);
  --bulma-warning-100-invert-l: var(--bulma-warning-20-l);
  --bulma-warning-100-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-100-invert-l), 1);
  --bulma-warning-invert-l: var(--bulma-warning-10-l);
  --bulma-warning-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-invert-l), 1);
  --bulma-warning-light-l: var(--bulma-warning-90-l);
  --bulma-warning-light: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-light-l), 1);
  --bulma-warning-light-invert-l: var(--bulma-warning-15-l);
  --bulma-warning-light-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-light-invert-l), 1);
  --bulma-warning-dark-l: var(--bulma-warning-10-l);
  --bulma-warning-dark: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-dark-l), 1);
  --bulma-warning-dark-invert-l: var(--bulma-warning-50-l);
  --bulma-warning-dark-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-dark-invert-l), 1);
  --bulma-warning-soft: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-soft-l), 1);
  --bulma-warning-bold: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-bold-l), 1);
  --bulma-warning-soft-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-soft-invert-l), 1);
  --bulma-warning-bold-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-bold-invert-l), 1);
  --bulma-warning-on-scheme-l: 23%;
  --bulma-warning-on-scheme: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-on-scheme-l), 1);
  --bulma-danger: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-l), 1);
  --bulma-danger-base: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-l), 1);
  --bulma-danger-rgb: 255, 102, 133;
  --bulma-danger-h: 348deg;
  --bulma-danger-s: 100%;
  --bulma-danger-l: 70%;
  --bulma-danger-00-l: 0%;
  --bulma-danger-05-l: 5%;
  --bulma-danger-10-l: 10%;
  --bulma-danger-15-l: 15%;
  --bulma-danger-20-l: 20%;
  --bulma-danger-25-l: 25%;
  --bulma-danger-30-l: 30%;
  --bulma-danger-35-l: 35%;
  --bulma-danger-40-l: 40%;
  --bulma-danger-45-l: 45%;
  --bulma-danger-50-l: 50%;
  --bulma-danger-55-l: 55%;
  --bulma-danger-60-l: 60%;
  --bulma-danger-65-l: 65%;
  --bulma-danger-70-l: 70%;
  --bulma-danger-75-l: 75%;
  --bulma-danger-80-l: 80%;
  --bulma-danger-85-l: 85%;
  --bulma-danger-90-l: 90%;
  --bulma-danger-95-l: 95%;
  --bulma-danger-100-l: 100%;
  --bulma-danger-00: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-00-l), 1);
  --bulma-danger-00-invert-l: var(--bulma-danger-65-l);
  --bulma-danger-00-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-00-invert-l), 1);
  --bulma-danger-05: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-05-l), 1);
  --bulma-danger-05-invert-l: var(--bulma-danger-70-l);
  --bulma-danger-05-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-05-invert-l), 1);
  --bulma-danger-10: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-10-l), 1);
  --bulma-danger-10-invert-l: var(--bulma-danger-75-l);
  --bulma-danger-10-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-10-invert-l), 1);
  --bulma-danger-15: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-15-l), 1);
  --bulma-danger-15-invert-l: var(--bulma-danger-80-l);
  --bulma-danger-15-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-15-invert-l), 1);
  --bulma-danger-20: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-20-l), 1);
  --bulma-danger-20-invert-l: var(--bulma-danger-85-l);
  --bulma-danger-20-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-20-invert-l), 1);
  --bulma-danger-25: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-25-l), 1);
  --bulma-danger-25-invert-l: var(--bulma-danger-90-l);
  --bulma-danger-25-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-25-invert-l), 1);
  --bulma-danger-30: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-30-l), 1);
  --bulma-danger-30-invert-l: var(--bulma-danger-100-l);
  --bulma-danger-30-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-30-invert-l), 1);
  --bulma-danger-35: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-35-l), 1);
  --bulma-danger-35-invert-l: var(--bulma-danger-100-l);
  --bulma-danger-35-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-35-invert-l), 1);
  --bulma-danger-40: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-40-l), 1);
  --bulma-danger-40-invert-l: var(--bulma-danger-100-l);
  --bulma-danger-40-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-40-invert-l), 1);
  --bulma-danger-45: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-45-l), 1);
  --bulma-danger-45-invert-l: var(--bulma-danger-100-l);
  --bulma-danger-45-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-45-invert-l), 1);
  --bulma-danger-50: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-50-l), 1);
  --bulma-danger-50-invert-l: var(--bulma-danger-100-l);
  --bulma-danger-50-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-50-invert-l), 1);
  --bulma-danger-55: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-55-l), 1);
  --bulma-danger-55-invert-l: var(--bulma-danger-100-l);
  --bulma-danger-55-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-55-invert-l), 1);
  --bulma-danger-60: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-60-l), 1);
  --bulma-danger-60-invert-l: var(--bulma-danger-100-l);
  --bulma-danger-60-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-60-invert-l), 1);
  --bulma-danger-65: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-65-l), 1);
  --bulma-danger-65-invert-l: var(--bulma-danger-00-l);
  --bulma-danger-65-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-65-invert-l), 1);
  --bulma-danger-70: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-70-l), 1);
  --bulma-danger-70-invert-l: var(--bulma-danger-05-l);
  --bulma-danger-70-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-70-invert-l), 1);
  --bulma-danger-75: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-75-l), 1);
  --bulma-danger-75-invert-l: var(--bulma-danger-10-l);
  --bulma-danger-75-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-75-invert-l), 1);
  --bulma-danger-80: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-80-l), 1);
  --bulma-danger-80-invert-l: var(--bulma-danger-15-l);
  --bulma-danger-80-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-80-invert-l), 1);
  --bulma-danger-85: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-85-l), 1);
  --bulma-danger-85-invert-l: var(--bulma-danger-20-l);
  --bulma-danger-85-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-85-invert-l), 1);
  --bulma-danger-90: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-90-l), 1);
  --bulma-danger-90-invert-l: var(--bulma-danger-25-l);
  --bulma-danger-90-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-90-invert-l), 1);
  --bulma-danger-95: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-95-l), 1);
  --bulma-danger-95-invert-l: var(--bulma-danger-25-l);
  --bulma-danger-95-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-95-invert-l), 1);
  --bulma-danger-100: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-100-l), 1);
  --bulma-danger-100-invert-l: var(--bulma-danger-30-l);
  --bulma-danger-100-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-100-invert-l), 1);
  --bulma-danger-invert-l: var(--bulma-danger-05-l);
  --bulma-danger-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-invert-l), 1);
  --bulma-danger-light-l: var(--bulma-danger-90-l);
  --bulma-danger-light: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-light-l), 1);
  --bulma-danger-light-invert-l: var(--bulma-danger-25-l);
  --bulma-danger-light-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-light-invert-l), 1);
  --bulma-danger-dark-l: var(--bulma-danger-10-l);
  --bulma-danger-dark: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-dark-l), 1);
  --bulma-danger-dark-invert-l: var(--bulma-danger-75-l);
  --bulma-danger-dark-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-dark-invert-l), 1);
  --bulma-danger-soft: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-soft-l), 1);
  --bulma-danger-bold: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-bold-l), 1);
  --bulma-danger-soft-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-soft-invert-l), 1);
  --bulma-danger-bold-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-bold-invert-l), 1);
  --bulma-danger-on-scheme-l: 40%;
  --bulma-danger-on-scheme: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-on-scheme-l), 1);
  --bulma-black-bis: hsl(221, 14%, 9%);
  --bulma-black-ter: hsl(221, 14%, 14%);
  --bulma-grey-darker: hsl(221, 14%, 21%);
  --bulma-grey-dark: hsl(221, 14%, 29%);
  --bulma-grey: hsl(221, 14%, 48%);
  --bulma-grey-light: hsl(221, 14%, 71%);
  --bulma-grey-lighter: hsl(221, 14%, 86%);
  --bulma-white-ter: hsl(221, 14%, 96%);
  --bulma-white-bis: hsl(221, 14%, 98%);
  --bulma-shadow-h: 221deg;
  --bulma-shadow-s: 14%;
  --bulma-shadow-l: 4%;
  --bulma-size-1: 3rem;
  --bulma-size-2: 2.5rem;
  --bulma-size-3: 2rem;
  --bulma-size-4: 1.5rem;
  --bulma-size-5: 1.25rem;
  --bulma-size-6: 1rem;
  --bulma-size-7: 0.75rem;
  --bulma-scheme-main: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-scheme-main-l));
  --bulma-scheme-main-bis: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-scheme-main-bis-l));
  --bulma-scheme-main-ter: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-scheme-main-ter-l));
  --bulma-background: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-background-l));
  --bulma-background-hover: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), calc(var(--bulma-background-l) + var(--bulma-hover-background-l-delta)));
  --bulma-background-active: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), calc(var(--bulma-background-l) + var(--bulma-active-background-l-delta)));
  --bulma-border-weak: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-border-weak-l));
  --bulma-border: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-border-l));
  --bulma-border-hover: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), calc(var(--bulma-border-l) + var(--bulma-hover-border-l-delta)));
  --bulma-border-active: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), calc(var(--bulma-border-l) + var(--bulma-active-border-l-delta)));
  --bulma-text-weak: hsl(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-weak-l));
  --bulma-text: hsl(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-l));
  --bulma-text-strong: hsl(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-strong-l));
  --bulma-scheme-invert-ter: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-scheme-invert-ter-l));
  --bulma-scheme-invert-bis: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-scheme-invert-bis-l));
  --bulma-scheme-invert: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-scheme-invert-l));
  --bulma-link: hsl(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-l));
  --bulma-link-text: hsl(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-on-scheme-l));
  --bulma-link-text-hover: hsl(var(--bulma-link-h), var(--bulma-link-s), calc(var(--bulma-link-on-scheme-l) + var(--bulma-hover-color-l-delta)));
  --bulma-link-text-active: hsl(var(--bulma-link-h), var(--bulma-link-s), calc(var(--bulma-link-on-scheme-l) + var(--bulma-active-color-l-delta)));
  --bulma-focus-h: var(--bulma-link-h);
  --bulma-focus-s: var(--bulma-link-s);
  --bulma-focus-l: var(--bulma-link-l);
  --bulma-focus-offset: 1px;
  --bulma-focus-style: solid;
  --bulma-focus-width: 2px;
  --bulma-focus-shadow-size: 0 0 0 0.1875em;
  --bulma-focus-shadow-alpha: 0.25;
  --bulma-code: hsl(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-on-scheme-l));
  --bulma-code-background: var(--bulma-background);
  --bulma-pre: var(--bulma-text);
  --bulma-pre-background: var(--bulma-background);
  --bulma-shadow: 0 0.5em 1em -0.125em hsla(var(--bulma-shadow-h), var(--bulma-shadow-s), var(--bulma-shadow-l), 0.1), 0 0px 0 1px hsla(var(--bulma-shadow-h), var(--bulma-shadow-s), var(--bulma-shadow-l), 0.02);
}

@media (prefers-color-scheme: light) {
  :root {
    --bulma-scheme-h: 221;
    --bulma-scheme-s: 14%;
    --bulma-light-l: 90%;
    --bulma-light-invert-l: 20%;
    --bulma-dark-l: 20%;
    --bulma-dark-invert-l: 90%;
    --bulma-soft-l: 90%;
    --bulma-bold-l: 20%;
    --bulma-soft-invert-l: 20%;
    --bulma-bold-invert-l: 90%;
    --bulma-hover-background-l-delta: -5%;
    --bulma-active-background-l-delta: -10%;
    --bulma-hover-border-l-delta: -10%;
    --bulma-active-border-l-delta: -20%;
    --bulma-hover-color-l-delta: -5%;
    --bulma-active-color-l-delta: -10%;
    --bulma-hover-shadow-a-delta: -0.05;
    --bulma-active-shadow-a-delta: -0.1;
    --bulma-scheme-brightness: light;
    --bulma-scheme-main-l: 100%;
    --bulma-scheme-main-bis-l: 98%;
    --bulma-scheme-main-ter-l: 96%;
    --bulma-background-l: 96%;
    --bulma-border-weak-l: 93%;
    --bulma-border-l: 86%;
    --bulma-text-weak-l: 48%;
    --bulma-text-l: 29%;
    --bulma-text-strong-l: 21%;
    --bulma-text-title-l: 14%;
    --bulma-scheme-invert-ter-l: 14%;
    --bulma-scheme-invert-bis-l: 7%;
    --bulma-scheme-invert-l: 4%;
    --bulma-family-primary: Inter, SF Pro, Segoe UI, Roboto, Oxygen, Ubuntu, Helvetica Neue, Helvetica, Arial, sans-serif;
    --bulma-family-secondary: Inter, SF Pro, Segoe UI, Roboto, Oxygen, Ubuntu, Helvetica Neue, Helvetica, Arial, sans-serif;
    --bulma-family-code: Inconsolata, Hack, SF Mono, Roboto Mono, Source Code Pro, Ubuntu Mono, monospace;
    --bulma-size-small: 0.75rem;
    --bulma-size-normal: 1rem;
    --bulma-size-medium: 1.25rem;
    --bulma-size-large: 1.5rem;
    --bulma-weight-light: 300;
    --bulma-weight-normal: 400;
    --bulma-weight-medium: 500;
    --bulma-weight-semibold: 600;
    --bulma-weight-bold: 700;
    --bulma-weight-extrabold: 800;
    --bulma-block-spacing: 1.5rem;
    --bulma-duration: 294ms;
    --bulma-easing: ease-out;
    --bulma-radius-small: 0.25rem;
    --bulma-radius: 0.375rem;
    --bulma-radius-medium: 0.5em;
    --bulma-radius-large: 0.75rem;
    --bulma-radius-rounded: 9999px;
    --bulma-speed: 86ms;
    --bulma-loading-color: var(--bulma-border);
    --bulma-burger-h: var(--bulma-link-h);
    --bulma-burger-s: var(--bulma-link-s);
    --bulma-burger-l: var(--bulma-link-l);
    --bulma-burger-border-radius: 0.5em;
    --bulma-burger-gap: 5px;
    --bulma-burger-item-height: 2px;
    --bulma-burger-item-width: 20px;
    --bulma-white: hsla(var(--bulma-white-h), var(--bulma-white-s), var(--bulma-white-l), 1);
    --bulma-white-base: hsla(var(--bulma-white-h), var(--bulma-white-s), var(--bulma-white-l), 1);
    --bulma-white-rgb: 255, 255, 255;
    --bulma-white-h: 221deg;
    --bulma-white-s: 14%;
    --bulma-white-l: 100%;
    --bulma-white-invert-l: 4%;
    --bulma-white-invert: hsl(221, 14%, 4%);
    --bulma-white-on-scheme-l: 35%;
    --bulma-white-on-scheme: hsla(var(--bulma-white-h), var(--bulma-white-s), var(--bulma-white-on-scheme-l), 1);
    --bulma-black: hsla(var(--bulma-black-h), var(--bulma-black-s), var(--bulma-black-l), 1);
    --bulma-black-base: hsla(var(--bulma-black-h), var(--bulma-black-s), var(--bulma-black-l), 1);
    --bulma-black-rgb: 9, 10, 12;
    --bulma-black-h: 221deg;
    --bulma-black-s: 14%;
    --bulma-black-l: 4%;
    --bulma-black-invert-l: 100%;
    --bulma-black-invert: hsl(221, 14%, 100%);
    --bulma-black-on-scheme-l: 4%;
    --bulma-black-on-scheme: hsla(var(--bulma-black-h), var(--bulma-black-s), var(--bulma-black-on-scheme-l), 1);
    --bulma-light: hsla(var(--bulma-light-h), var(--bulma-light-s), var(--bulma-light-l), 1);
    --bulma-light-base: hsla(var(--bulma-light-h), var(--bulma-light-s), var(--bulma-light-l), 1);
    --bulma-light-rgb: 243, 244, 246;
    --bulma-light-h: 221deg;
    --bulma-light-s: 14%;
    --bulma-light-l: 96%;
    --bulma-light-invert-l: 21%;
    --bulma-light-invert: hsl(221, 14%, 21%);
    --bulma-light-on-scheme-l: 36%;
    --bulma-light-on-scheme: hsla(var(--bulma-light-h), var(--bulma-light-s), var(--bulma-light-on-scheme-l), 1);
    --bulma-dark: hsla(var(--bulma-dark-h), var(--bulma-dark-s), var(--bulma-dark-l), 1);
    --bulma-dark-base: hsla(var(--bulma-dark-h), var(--bulma-dark-s), var(--bulma-dark-l), 1);
    --bulma-dark-rgb: 46, 51, 61;
    --bulma-dark-h: 221deg;
    --bulma-dark-s: 14%;
    --bulma-dark-l: 21%;
    --bulma-dark-invert-l: 96%;
    --bulma-dark-invert: hsl(221, 14%, 96%);
    --bulma-dark-on-scheme-l: 21%;
    --bulma-dark-on-scheme: hsla(var(--bulma-dark-h), var(--bulma-dark-s), var(--bulma-dark-on-scheme-l), 1);
    --bulma-text: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-l), 1);
    --bulma-text-base: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-l), 1);
    --bulma-text-rgb: 64, 70, 84;
    --bulma-text-h: 221deg;
    --bulma-text-s: 14%;
    --bulma-text-l: 29%;
    --bulma-text-00-l: 0%;
    --bulma-text-05-l: 4%;
    --bulma-text-10-l: 9%;
    --bulma-text-15-l: 14%;
    --bulma-text-20-l: 19%;
    --bulma-text-25-l: 24%;
    --bulma-text-30-l: 29%;
    --bulma-text-35-l: 34%;
    --bulma-text-40-l: 39%;
    --bulma-text-45-l: 44%;
    --bulma-text-50-l: 49%;
    --bulma-text-55-l: 54%;
    --bulma-text-60-l: 59%;
    --bulma-text-65-l: 64%;
    --bulma-text-70-l: 69%;
    --bulma-text-75-l: 74%;
    --bulma-text-80-l: 79%;
    --bulma-text-85-l: 84%;
    --bulma-text-90-l: 89%;
    --bulma-text-95-l: 94%;
    --bulma-text-100-l: 100%;
    --bulma-text-00: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-00-l), 1);
    --bulma-text-00-invert-l: var(--bulma-text-60-l);
    --bulma-text-00-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-00-invert-l), 1);
    --bulma-text-05: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-05-l), 1);
    --bulma-text-05-invert-l: var(--bulma-text-60-l);
    --bulma-text-05-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-05-invert-l), 1);
    --bulma-text-10: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-10-l), 1);
    --bulma-text-10-invert-l: var(--bulma-text-70-l);
    --bulma-text-10-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-10-invert-l), 1);
    --bulma-text-15: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-15-l), 1);
    --bulma-text-15-invert-l: var(--bulma-text-75-l);
    --bulma-text-15-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-15-invert-l), 1);
    --bulma-text-20: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-20-l), 1);
    --bulma-text-20-invert-l: var(--bulma-text-85-l);
    --bulma-text-20-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-20-invert-l), 1);
    --bulma-text-25: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-25-l), 1);
    --bulma-text-25-invert-l: var(--bulma-text-95-l);
    --bulma-text-25-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-25-invert-l), 1);
    --bulma-text-30: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-30-l), 1);
    --bulma-text-30-invert-l: var(--bulma-text-100-l);
    --bulma-text-30-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-30-invert-l), 1);
    --bulma-text-35: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-35-l), 1);
    --bulma-text-35-invert-l: var(--bulma-text-100-l);
    --bulma-text-35-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-35-invert-l), 1);
    --bulma-text-40: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-40-l), 1);
    --bulma-text-40-invert-l: var(--bulma-text-100-l);
    --bulma-text-40-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-40-invert-l), 1);
    --bulma-text-45: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-45-l), 1);
    --bulma-text-45-invert-l: var(--bulma-text-100-l);
    --bulma-text-45-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-45-invert-l), 1);
    --bulma-text-50: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-50-l), 1);
    --bulma-text-50-invert-l: var(--bulma-text-100-l);
    --bulma-text-50-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-50-invert-l), 1);
    --bulma-text-55: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-55-l), 1);
    --bulma-text-55-invert-l: var(--bulma-text-100-l);
    --bulma-text-55-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-55-invert-l), 1);
    --bulma-text-60: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-60-l), 1);
    --bulma-text-60-invert-l: var(--bulma-text-05-l);
    --bulma-text-60-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-60-invert-l), 1);
    --bulma-text-65: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-65-l), 1);
    --bulma-text-65-invert-l: var(--bulma-text-05-l);
    --bulma-text-65-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-65-invert-l), 1);
    --bulma-text-70: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-70-l), 1);
    --bulma-text-70-invert-l: var(--bulma-text-10-l);
    --bulma-text-70-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-70-invert-l), 1);
    --bulma-text-75: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-75-l), 1);
    --bulma-text-75-invert-l: var(--bulma-text-15-l);
    --bulma-text-75-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-75-invert-l), 1);
    --bulma-text-80: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-80-l), 1);
    --bulma-text-80-invert-l: var(--bulma-text-15-l);
    --bulma-text-80-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-80-invert-l), 1);
    --bulma-text-85: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-85-l), 1);
    --bulma-text-85-invert-l: var(--bulma-text-20-l);
    --bulma-text-85-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-85-invert-l), 1);
    --bulma-text-90: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-90-l), 1);
    --bulma-text-90-invert-l: var(--bulma-text-20-l);
    --bulma-text-90-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-90-invert-l), 1);
    --bulma-text-95: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-95-l), 1);
    --bulma-text-95-invert-l: var(--bulma-text-25-l);
    --bulma-text-95-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-95-invert-l), 1);
    --bulma-text-100: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-100-l), 1);
    --bulma-text-100-invert-l: var(--bulma-text-30-l);
    --bulma-text-100-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-100-invert-l), 1);
    --bulma-text-invert-l: var(--bulma-text-100-l);
    --bulma-text-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-invert-l), 1);
    --bulma-text-light-l: var(--bulma-text-90-l);
    --bulma-text-light: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-light-l), 1);
    --bulma-text-light-invert-l: var(--bulma-text-20-l);
    --bulma-text-light-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-light-invert-l), 1);
    --bulma-text-dark-l: var(--bulma-text-10-l);
    --bulma-text-dark: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-dark-l), 1);
    --bulma-text-dark-invert-l: var(--bulma-text-70-l);
    --bulma-text-dark-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-dark-invert-l), 1);
    --bulma-text-soft: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-soft-l), 1);
    --bulma-text-bold: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-bold-l), 1);
    --bulma-text-soft-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-soft-invert-l), 1);
    --bulma-text-bold-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-bold-invert-l), 1);
    --bulma-text-on-scheme-l: 29%;
    --bulma-text-on-scheme: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-on-scheme-l), 1);
    --bulma-primary: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-l), 1);
    --bulma-primary-base: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-l), 1);
    --bulma-primary-rgb: 0, 209, 178;
    --bulma-primary-h: 171deg;
    --bulma-primary-s: 100%;
    --bulma-primary-l: 41%;
    --bulma-primary-00-l: 1%;
    --bulma-primary-05-l: 6%;
    --bulma-primary-10-l: 11%;
    --bulma-primary-15-l: 16%;
    --bulma-primary-20-l: 21%;
    --bulma-primary-25-l: 26%;
    --bulma-primary-30-l: 31%;
    --bulma-primary-35-l: 36%;
    --bulma-primary-40-l: 41%;
    --bulma-primary-45-l: 46%;
    --bulma-primary-50-l: 51%;
    --bulma-primary-55-l: 56%;
    --bulma-primary-60-l: 61%;
    --bulma-primary-65-l: 66%;
    --bulma-primary-70-l: 71%;
    --bulma-primary-75-l: 76%;
    --bulma-primary-80-l: 81%;
    --bulma-primary-85-l: 86%;
    --bulma-primary-90-l: 91%;
    --bulma-primary-95-l: 96%;
    --bulma-primary-100-l: 100%;
    --bulma-primary-00: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-00-l), 1);
    --bulma-primary-00-invert-l: var(--bulma-primary-30-l);
    --bulma-primary-00-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-00-invert-l), 1);
    --bulma-primary-05: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-05-l), 1);
    --bulma-primary-05-invert-l: var(--bulma-primary-40-l);
    --bulma-primary-05-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-05-invert-l), 1);
    --bulma-primary-10: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-10-l), 1);
    --bulma-primary-10-invert-l: var(--bulma-primary-50-l);
    --bulma-primary-10-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-10-invert-l), 1);
    --bulma-primary-15: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-15-l), 1);
    --bulma-primary-15-invert-l: var(--bulma-primary-100-l);
    --bulma-primary-15-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-15-invert-l), 1);
    --bulma-primary-20: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-20-l), 1);
    --bulma-primary-20-invert-l: var(--bulma-primary-100-l);
    --bulma-primary-20-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-20-invert-l), 1);
    --bulma-primary-25: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-25-l), 1);
    --bulma-primary-25-invert-l: var(--bulma-primary-100-l);
    --bulma-primary-25-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-25-invert-l), 1);
    --bulma-primary-30: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-30-l), 1);
    --bulma-primary-30-invert-l: var(--bulma-primary-00-l);
    --bulma-primary-30-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-30-invert-l), 1);
    --bulma-primary-35: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-35-l), 1);
    --bulma-primary-35-invert-l: var(--bulma-primary-00-l);
    --bulma-primary-35-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-35-invert-l), 1);
    --bulma-primary-40: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-40-l), 1);
    --bulma-primary-40-invert-l: var(--bulma-primary-05-l);
    --bulma-primary-40-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-40-invert-l), 1);
    --bulma-primary-45: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-45-l), 1);
    --bulma-primary-45-invert-l: var(--bulma-primary-05-l);
    --bulma-primary-45-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-45-invert-l), 1);
    --bulma-primary-50: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-50-l), 1);
    --bulma-primary-50-invert-l: var(--bulma-primary-10-l);
    --bulma-primary-50-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-50-invert-l), 1);
    --bulma-primary-55: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-55-l), 1);
    --bulma-primary-55-invert-l: var(--bulma-primary-10-l);
    --bulma-primary-55-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-55-invert-l), 1);
    --bulma-primary-60: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-60-l), 1);
    --bulma-primary-60-invert-l: var(--bulma-primary-10-l);
    --bulma-primary-60-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-60-invert-l), 1);
    --bulma-primary-65: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-65-l), 1);
    --bulma-primary-65-invert-l: var(--bulma-primary-10-l);
    --bulma-primary-65-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-65-invert-l), 1);
    --bulma-primary-70: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-70-l), 1);
    --bulma-primary-70-invert-l: var(--bulma-primary-10-l);
    --bulma-primary-70-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-70-invert-l), 1);
    --bulma-primary-75: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-75-l), 1);
    --bulma-primary-75-invert-l: var(--bulma-primary-10-l);
    --bulma-primary-75-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-75-invert-l), 1);
    --bulma-primary-80: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-80-l), 1);
    --bulma-primary-80-invert-l: var(--bulma-primary-10-l);
    --bulma-primary-80-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-80-invert-l), 1);
    --bulma-primary-85: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-85-l), 1);
    --bulma-primary-85-invert-l: var(--bulma-primary-10-l);
    --bulma-primary-85-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-85-invert-l), 1);
    --bulma-primary-90: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-90-l), 1);
    --bulma-primary-90-invert-l: var(--bulma-primary-10-l);
    --bulma-primary-90-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-90-invert-l), 1);
    --bulma-primary-95: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-95-l), 1);
    --bulma-primary-95-invert-l: var(--bulma-primary-10-l);
    --bulma-primary-95-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-95-invert-l), 1);
    --bulma-primary-100: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-100-l), 1);
    --bulma-primary-100-invert-l: var(--bulma-primary-15-l);
    --bulma-primary-100-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-100-invert-l), 1);
    --bulma-primary-invert-l: var(--bulma-primary-05-l);
    --bulma-primary-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-invert-l), 1);
    --bulma-primary-light-l: var(--bulma-primary-90-l);
    --bulma-primary-light: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-light-l), 1);
    --bulma-primary-light-invert-l: var(--bulma-primary-10-l);
    --bulma-primary-light-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-light-invert-l), 1);
    --bulma-primary-dark-l: var(--bulma-primary-10-l);
    --bulma-primary-dark: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-dark-l), 1);
    --bulma-primary-dark-invert-l: var(--bulma-primary-50-l);
    --bulma-primary-dark-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-dark-invert-l), 1);
    --bulma-primary-soft: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-soft-l), 1);
    --bulma-primary-bold: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-bold-l), 1);
    --bulma-primary-soft-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-soft-invert-l), 1);
    --bulma-primary-bold-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-bold-invert-l), 1);
    --bulma-primary-on-scheme-l: 21%;
    --bulma-primary-on-scheme: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-on-scheme-l), 1);
    --bulma-link: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-l), 1);
    --bulma-link-base: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-l), 1);
    --bulma-link-rgb: 66, 88, 255;
    --bulma-link-h: 233deg;
    --bulma-link-s: 100%;
    --bulma-link-l: 63%;
    --bulma-link-00-l: 0%;
    --bulma-link-05-l: 3%;
    --bulma-link-10-l: 8%;
    --bulma-link-15-l: 13%;
    --bulma-link-20-l: 18%;
    --bulma-link-25-l: 23%;
    --bulma-link-30-l: 28%;
    --bulma-link-35-l: 33%;
    --bulma-link-40-l: 38%;
    --bulma-link-45-l: 43%;
    --bulma-link-50-l: 48%;
    --bulma-link-55-l: 53%;
    --bulma-link-60-l: 58%;
    --bulma-link-65-l: 63%;
    --bulma-link-70-l: 68%;
    --bulma-link-75-l: 73%;
    --bulma-link-80-l: 78%;
    --bulma-link-85-l: 83%;
    --bulma-link-90-l: 88%;
    --bulma-link-95-l: 93%;
    --bulma-link-100-l: 100%;
    --bulma-link-00: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-00-l), 1);
    --bulma-link-00-invert-l: var(--bulma-link-75-l);
    --bulma-link-00-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-00-invert-l), 1);
    --bulma-link-05: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-05-l), 1);
    --bulma-link-05-invert-l: var(--bulma-link-75-l);
    --bulma-link-05-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-05-invert-l), 1);
    --bulma-link-10: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-10-l), 1);
    --bulma-link-10-invert-l: var(--bulma-link-75-l);
    --bulma-link-10-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-10-invert-l), 1);
    --bulma-link-15: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-15-l), 1);
    --bulma-link-15-invert-l: var(--bulma-link-80-l);
    --bulma-link-15-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-15-invert-l), 1);
    --bulma-link-20: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-20-l), 1);
    --bulma-link-20-invert-l: var(--bulma-link-80-l);
    --bulma-link-20-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-20-invert-l), 1);
    --bulma-link-25: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-25-l), 1);
    --bulma-link-25-invert-l: var(--bulma-link-85-l);
    --bulma-link-25-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-25-invert-l), 1);
    --bulma-link-30: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-30-l), 1);
    --bulma-link-30-invert-l: var(--bulma-link-90-l);
    --bulma-link-30-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-30-invert-l), 1);
    --bulma-link-35: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-35-l), 1);
    --bulma-link-35-invert-l: var(--bulma-link-90-l);
    --bulma-link-35-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-35-invert-l), 1);
    --bulma-link-40: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-40-l), 1);
    --bulma-link-40-invert-l: var(--bulma-link-95-l);
    --bulma-link-40-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-40-invert-l), 1);
    --bulma-link-45: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-45-l), 1);
    --bulma-link-45-invert-l: var(--bulma-link-100-l);
    --bulma-link-45-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-45-invert-l), 1);
    --bulma-link-50: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-50-l), 1);
    --bulma-link-50-invert-l: var(--bulma-link-100-l);
    --bulma-link-50-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-50-invert-l), 1);
    --bulma-link-55: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-55-l), 1);
    --bulma-link-55-invert-l: var(--bulma-link-100-l);
    --bulma-link-55-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-55-invert-l), 1);
    --bulma-link-60: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-60-l), 1);
    --bulma-link-60-invert-l: var(--bulma-link-100-l);
    --bulma-link-60-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-60-invert-l), 1);
    --bulma-link-65: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-65-l), 1);
    --bulma-link-65-invert-l: var(--bulma-link-100-l);
    --bulma-link-65-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-65-invert-l), 1);
    --bulma-link-70: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-70-l), 1);
    --bulma-link-70-invert-l: var(--bulma-link-100-l);
    --bulma-link-70-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-70-invert-l), 1);
    --bulma-link-75: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-75-l), 1);
    --bulma-link-75-invert-l: var(--bulma-link-10-l);
    --bulma-link-75-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-75-invert-l), 1);
    --bulma-link-80: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-80-l), 1);
    --bulma-link-80-invert-l: var(--bulma-link-20-l);
    --bulma-link-80-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-80-invert-l), 1);
    --bulma-link-85: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-85-l), 1);
    --bulma-link-85-invert-l: var(--bulma-link-25-l);
    --bulma-link-85-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-85-invert-l), 1);
    --bulma-link-90: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-90-l), 1);
    --bulma-link-90-invert-l: var(--bulma-link-35-l);
    --bulma-link-90-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-90-invert-l), 1);
    --bulma-link-95: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-95-l), 1);
    --bulma-link-95-invert-l: var(--bulma-link-40-l);
    --bulma-link-95-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-95-invert-l), 1);
    --bulma-link-100: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-100-l), 1);
    --bulma-link-100-invert-l: var(--bulma-link-50-l);
    --bulma-link-100-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-100-invert-l), 1);
    --bulma-link-invert-l: var(--bulma-link-100-l);
    --bulma-link-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-invert-l), 1);
    --bulma-link-light-l: var(--bulma-link-90-l);
    --bulma-link-light: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-light-l), 1);
    --bulma-link-light-invert-l: var(--bulma-link-35-l);
    --bulma-link-light-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-light-invert-l), 1);
    --bulma-link-dark-l: var(--bulma-link-10-l);
    --bulma-link-dark: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-dark-l), 1);
    --bulma-link-dark-invert-l: var(--bulma-link-75-l);
    --bulma-link-dark-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-dark-invert-l), 1);
    --bulma-link-soft: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-soft-l), 1);
    --bulma-link-bold: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-bold-l), 1);
    --bulma-link-soft-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-soft-invert-l), 1);
    --bulma-link-bold-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-bold-invert-l), 1);
    --bulma-link-on-scheme-l: 58%;
    --bulma-link-on-scheme: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-on-scheme-l), 1);
    --bulma-info: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-l), 1);
    --bulma-info-base: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-l), 1);
    --bulma-info-rgb: 102, 209, 255;
    --bulma-info-h: 198deg;
    --bulma-info-s: 100%;
    --bulma-info-l: 70%;
    --bulma-info-00-l: 0%;
    --bulma-info-05-l: 5%;
    --bulma-info-10-l: 10%;
    --bulma-info-15-l: 15%;
    --bulma-info-20-l: 20%;
    --bulma-info-25-l: 25%;
    --bulma-info-30-l: 30%;
    --bulma-info-35-l: 35%;
    --bulma-info-40-l: 40%;
    --bulma-info-45-l: 45%;
    --bulma-info-50-l: 50%;
    --bulma-info-55-l: 55%;
    --bulma-info-60-l: 60%;
    --bulma-info-65-l: 65%;
    --bulma-info-70-l: 70%;
    --bulma-info-75-l: 75%;
    --bulma-info-80-l: 80%;
    --bulma-info-85-l: 85%;
    --bulma-info-90-l: 90%;
    --bulma-info-95-l: 95%;
    --bulma-info-100-l: 100%;
    --bulma-info-00: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-00-l), 1);
    --bulma-info-00-invert-l: var(--bulma-info-45-l);
    --bulma-info-00-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-00-invert-l), 1);
    --bulma-info-05: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-05-l), 1);
    --bulma-info-05-invert-l: var(--bulma-info-50-l);
    --bulma-info-05-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-05-invert-l), 1);
    --bulma-info-10: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-10-l), 1);
    --bulma-info-10-invert-l: var(--bulma-info-60-l);
    --bulma-info-10-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-10-invert-l), 1);
    --bulma-info-15: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-15-l), 1);
    --bulma-info-15-invert-l: var(--bulma-info-80-l);
    --bulma-info-15-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-15-invert-l), 1);
    --bulma-info-20: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-20-l), 1);
    --bulma-info-20-invert-l: var(--bulma-info-95-l);
    --bulma-info-20-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-20-invert-l), 1);
    --bulma-info-25: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-25-l), 1);
    --bulma-info-25-invert-l: var(--bulma-info-100-l);
    --bulma-info-25-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-25-invert-l), 1);
    --bulma-info-30: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-30-l), 1);
    --bulma-info-30-invert-l: var(--bulma-info-100-l);
    --bulma-info-30-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-30-invert-l), 1);
    --bulma-info-35: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-35-l), 1);
    --bulma-info-35-invert-l: var(--bulma-info-100-l);
    --bulma-info-35-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-35-invert-l), 1);
    --bulma-info-40: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-40-l), 1);
    --bulma-info-40-invert-l: var(--bulma-info-100-l);
    --bulma-info-40-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-40-invert-l), 1);
    --bulma-info-45: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-45-l), 1);
    --bulma-info-45-invert-l: var(--bulma-info-00-l);
    --bulma-info-45-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-45-invert-l), 1);
    --bulma-info-50: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-50-l), 1);
    --bulma-info-50-invert-l: var(--bulma-info-05-l);
    --bulma-info-50-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-50-invert-l), 1);
    --bulma-info-55: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-55-l), 1);
    --bulma-info-55-invert-l: var(--bulma-info-05-l);
    --bulma-info-55-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-55-invert-l), 1);
    --bulma-info-60: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-60-l), 1);
    --bulma-info-60-invert-l: var(--bulma-info-10-l);
    --bulma-info-60-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-60-invert-l), 1);
    --bulma-info-65: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-65-l), 1);
    --bulma-info-65-invert-l: var(--bulma-info-10-l);
    --bulma-info-65-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-65-invert-l), 1);
    --bulma-info-70: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-70-l), 1);
    --bulma-info-70-invert-l: var(--bulma-info-10-l);
    --bulma-info-70-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-70-invert-l), 1);
    --bulma-info-75: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-75-l), 1);
    --bulma-info-75-invert-l: var(--bulma-info-10-l);
    --bulma-info-75-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-75-invert-l), 1);
    --bulma-info-80: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-80-l), 1);
    --bulma-info-80-invert-l: var(--bulma-info-15-l);
    --bulma-info-80-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-80-invert-l), 1);
    --bulma-info-85: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-85-l), 1);
    --bulma-info-85-invert-l: var(--bulma-info-15-l);
    --bulma-info-85-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-85-invert-l), 1);
    --bulma-info-90: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-90-l), 1);
    --bulma-info-90-invert-l: var(--bulma-info-15-l);
    --bulma-info-90-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-90-invert-l), 1);
    --bulma-info-95: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-95-l), 1);
    --bulma-info-95-invert-l: var(--bulma-info-20-l);
    --bulma-info-95-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-95-invert-l), 1);
    --bulma-info-100: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-100-l), 1);
    --bulma-info-100-invert-l: var(--bulma-info-20-l);
    --bulma-info-100-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-100-invert-l), 1);
    --bulma-info-invert-l: var(--bulma-info-10-l);
    --bulma-info-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-invert-l), 1);
    --bulma-info-light-l: var(--bulma-info-90-l);
    --bulma-info-light: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-light-l), 1);
    --bulma-info-light-invert-l: var(--bulma-info-15-l);
    --bulma-info-light-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-light-invert-l), 1);
    --bulma-info-dark-l: var(--bulma-info-10-l);
    --bulma-info-dark: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-dark-l), 1);
    --bulma-info-dark-invert-l: var(--bulma-info-60-l);
    --bulma-info-dark-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-dark-invert-l), 1);
    --bulma-info-soft: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-soft-l), 1);
    --bulma-info-bold: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-bold-l), 1);
    --bulma-info-soft-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-soft-invert-l), 1);
    --bulma-info-bold-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-bold-invert-l), 1);
    --bulma-info-on-scheme-l: 25%;
    --bulma-info-on-scheme: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-on-scheme-l), 1);
    --bulma-success: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-l), 1);
    --bulma-success-base: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-l), 1);
    --bulma-success-rgb: 72, 199, 142;
    --bulma-success-h: 153deg;
    --bulma-success-s: 53%;
    --bulma-success-l: 53%;
    --bulma-success-00-l: 0%;
    --bulma-success-05-l: 3%;
    --bulma-success-10-l: 8%;
    --bulma-success-15-l: 13%;
    --bulma-success-20-l: 18%;
    --bulma-success-25-l: 23%;
    --bulma-success-30-l: 28%;
    --bulma-success-35-l: 33%;
    --bulma-success-40-l: 38%;
    --bulma-success-45-l: 43%;
    --bulma-success-50-l: 48%;
    --bulma-success-55-l: 53%;
    --bulma-success-60-l: 58%;
    --bulma-success-65-l: 63%;
    --bulma-success-70-l: 68%;
    --bulma-success-75-l: 73%;
    --bulma-success-80-l: 78%;
    --bulma-success-85-l: 83%;
    --bulma-success-90-l: 88%;
    --bulma-success-95-l: 93%;
    --bulma-success-100-l: 100%;
    --bulma-success-00: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-00-l), 1);
    --bulma-success-00-invert-l: var(--bulma-success-45-l);
    --bulma-success-00-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-00-invert-l), 1);
    --bulma-success-05: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-05-l), 1);
    --bulma-success-05-invert-l: var(--bulma-success-45-l);
    --bulma-success-05-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-05-invert-l), 1);
    --bulma-success-10: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-10-l), 1);
    --bulma-success-10-invert-l: var(--bulma-success-55-l);
    --bulma-success-10-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-10-invert-l), 1);
    --bulma-success-15: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-15-l), 1);
    --bulma-success-15-invert-l: var(--bulma-success-75-l);
    --bulma-success-15-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-15-invert-l), 1);
    --bulma-success-20: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-20-l), 1);
    --bulma-success-20-invert-l: var(--bulma-success-90-l);
    --bulma-success-20-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-20-invert-l), 1);
    --bulma-success-25: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-25-l), 1);
    --bulma-success-25-invert-l: var(--bulma-success-100-l);
    --bulma-success-25-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-25-invert-l), 1);
    --bulma-success-30: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-30-l), 1);
    --bulma-success-30-invert-l: var(--bulma-success-100-l);
    --bulma-success-30-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-30-invert-l), 1);
    --bulma-success-35: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-35-l), 1);
    --bulma-success-35-invert-l: var(--bulma-success-100-l);
    --bulma-success-35-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-35-invert-l), 1);
    --bulma-success-40: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-40-l), 1);
    --bulma-success-40-invert-l: var(--bulma-success-100-l);
    --bulma-success-40-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-40-invert-l), 1);
    --bulma-success-45: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-45-l), 1);
    --bulma-success-45-invert-l: var(--bulma-success-05-l);
    --bulma-success-45-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-45-invert-l), 1);
    --bulma-success-50: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-50-l), 1);
    --bulma-success-50-invert-l: var(--bulma-success-05-l);
    --bulma-success-50-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-50-invert-l), 1);
    --bulma-success-55: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-55-l), 1);
    --bulma-success-55-invert-l: var(--bulma-success-10-l);
    --bulma-success-55-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-55-invert-l), 1);
    --bulma-success-60: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-60-l), 1);
    --bulma-success-60-invert-l: var(--bulma-success-10-l);
    --bulma-success-60-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-60-invert-l), 1);
    --bulma-success-65: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-65-l), 1);
    --bulma-success-65-invert-l: var(--bulma-success-10-l);
    --bulma-success-65-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-65-invert-l), 1);
    --bulma-success-70: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-70-l), 1);
    --bulma-success-70-invert-l: var(--bulma-success-10-l);
    --bulma-success-70-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-70-invert-l), 1);
    --bulma-success-75: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-75-l), 1);
    --bulma-success-75-invert-l: var(--bulma-success-15-l);
    --bulma-success-75-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-75-invert-l), 1);
    --bulma-success-80: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-80-l), 1);
    --bulma-success-80-invert-l: var(--bulma-success-15-l);
    --bulma-success-80-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-80-invert-l), 1);
    --bulma-success-85: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-85-l), 1);
    --bulma-success-85-invert-l: var(--bulma-success-15-l);
    --bulma-success-85-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-85-invert-l), 1);
    --bulma-success-90: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-90-l), 1);
    --bulma-success-90-invert-l: var(--bulma-success-20-l);
    --bulma-success-90-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-90-invert-l), 1);
    --bulma-success-95: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-95-l), 1);
    --bulma-success-95-invert-l: var(--bulma-success-20-l);
    --bulma-success-95-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-95-invert-l), 1);
    --bulma-success-100: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-100-l), 1);
    --bulma-success-100-invert-l: var(--bulma-success-20-l);
    --bulma-success-100-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-100-invert-l), 1);
    --bulma-success-invert-l: var(--bulma-success-10-l);
    --bulma-success-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-invert-l), 1);
    --bulma-success-light-l: var(--bulma-success-90-l);
    --bulma-success-light: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-light-l), 1);
    --bulma-success-light-invert-l: var(--bulma-success-20-l);
    --bulma-success-light-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-light-invert-l), 1);
    --bulma-success-dark-l: var(--bulma-success-10-l);
    --bulma-success-dark: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-dark-l), 1);
    --bulma-success-dark-invert-l: var(--bulma-success-55-l);
    --bulma-success-dark-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-dark-invert-l), 1);
    --bulma-success-soft: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-soft-l), 1);
    --bulma-success-bold: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-bold-l), 1);
    --bulma-success-soft-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-soft-invert-l), 1);
    --bulma-success-bold-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-bold-invert-l), 1);
    --bulma-success-on-scheme-l: 23%;
    --bulma-success-on-scheme: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-on-scheme-l), 1);
    --bulma-warning: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-l), 1);
    --bulma-warning-base: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-l), 1);
    --bulma-warning-rgb: 255, 183, 15;
    --bulma-warning-h: 42deg;
    --bulma-warning-s: 100%;
    --bulma-warning-l: 53%;
    --bulma-warning-00-l: 0%;
    --bulma-warning-05-l: 3%;
    --bulma-warning-10-l: 8%;
    --bulma-warning-15-l: 13%;
    --bulma-warning-20-l: 18%;
    --bulma-warning-25-l: 23%;
    --bulma-warning-30-l: 28%;
    --bulma-warning-35-l: 33%;
    --bulma-warning-40-l: 38%;
    --bulma-warning-45-l: 43%;
    --bulma-warning-50-l: 48%;
    --bulma-warning-55-l: 53%;
    --bulma-warning-60-l: 58%;
    --bulma-warning-65-l: 63%;
    --bulma-warning-70-l: 68%;
    --bulma-warning-75-l: 73%;
    --bulma-warning-80-l: 78%;
    --bulma-warning-85-l: 83%;
    --bulma-warning-90-l: 88%;
    --bulma-warning-95-l: 93%;
    --bulma-warning-100-l: 100%;
    --bulma-warning-00: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-00-l), 1);
    --bulma-warning-00-invert-l: var(--bulma-warning-40-l);
    --bulma-warning-00-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-00-invert-l), 1);
    --bulma-warning-05: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-05-l), 1);
    --bulma-warning-05-invert-l: var(--bulma-warning-45-l);
    --bulma-warning-05-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-05-invert-l), 1);
    --bulma-warning-10: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-10-l), 1);
    --bulma-warning-10-invert-l: var(--bulma-warning-50-l);
    --bulma-warning-10-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-10-invert-l), 1);
    --bulma-warning-15: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-15-l), 1);
    --bulma-warning-15-invert-l: var(--bulma-warning-70-l);
    --bulma-warning-15-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-15-invert-l), 1);
    --bulma-warning-20: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-20-l), 1);
    --bulma-warning-20-invert-l: var(--bulma-warning-100-l);
    --bulma-warning-20-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-20-invert-l), 1);
    --bulma-warning-25: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-25-l), 1);
    --bulma-warning-25-invert-l: var(--bulma-warning-100-l);
    --bulma-warning-25-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-25-invert-l), 1);
    --bulma-warning-30: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-30-l), 1);
    --bulma-warning-30-invert-l: var(--bulma-warning-100-l);
    --bulma-warning-30-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-30-invert-l), 1);
    --bulma-warning-35: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-35-l), 1);
    --bulma-warning-35-invert-l: var(--bulma-warning-100-l);
    --bulma-warning-35-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-35-invert-l), 1);
    --bulma-warning-40: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-40-l), 1);
    --bulma-warning-40-invert-l: var(--bulma-warning-00-l);
    --bulma-warning-40-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-40-invert-l), 1);
    --bulma-warning-45: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-45-l), 1);
    --bulma-warning-45-invert-l: var(--bulma-warning-05-l);
    --bulma-warning-45-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-45-invert-l), 1);
    --bulma-warning-50: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-50-l), 1);
    --bulma-warning-50-invert-l: var(--bulma-warning-10-l);
    --bulma-warning-50-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-50-invert-l), 1);
    --bulma-warning-55: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-55-l), 1);
    --bulma-warning-55-invert-l: var(--bulma-warning-10-l);
    --bulma-warning-55-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-55-invert-l), 1);
    --bulma-warning-60: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-60-l), 1);
    --bulma-warning-60-invert-l: var(--bulma-warning-10-l);
    --bulma-warning-60-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-60-invert-l), 1);
    --bulma-warning-65: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-65-l), 1);
    --bulma-warning-65-invert-l: var(--bulma-warning-10-l);
    --bulma-warning-65-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-65-invert-l), 1);
    --bulma-warning-70: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-70-l), 1);
    --bulma-warning-70-invert-l: var(--bulma-warning-15-l);
    --bulma-warning-70-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-70-invert-l), 1);
    --bulma-warning-75: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-75-l), 1);
    --bulma-warning-75-invert-l: var(--bulma-warning-15-l);
    --bulma-warning-75-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-75-invert-l), 1);
    --bulma-warning-80: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-80-l), 1);
    --bulma-warning-80-invert-l: var(--bulma-warning-15-l);
    --bulma-warning-80-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-80-invert-l), 1);
    --bulma-warning-85: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-85-l), 1);
    --bulma-warning-85-invert-l: var(--bulma-warning-15-l);
    --bulma-warning-85-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-85-invert-l), 1);
    --bulma-warning-90: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-90-l), 1);
    --bulma-warning-90-invert-l: var(--bulma-warning-15-l);
    --bulma-warning-90-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-90-invert-l), 1);
    --bulma-warning-95: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-95-l), 1);
    --bulma-warning-95-invert-l: var(--bulma-warning-15-l);
    --bulma-warning-95-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-95-invert-l), 1);
    --bulma-warning-100: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-100-l), 1);
    --bulma-warning-100-invert-l: var(--bulma-warning-20-l);
    --bulma-warning-100-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-100-invert-l), 1);
    --bulma-warning-invert-l: var(--bulma-warning-10-l);
    --bulma-warning-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-invert-l), 1);
    --bulma-warning-light-l: var(--bulma-warning-90-l);
    --bulma-warning-light: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-light-l), 1);
    --bulma-warning-light-invert-l: var(--bulma-warning-15-l);
    --bulma-warning-light-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-light-invert-l), 1);
    --bulma-warning-dark-l: var(--bulma-warning-10-l);
    --bulma-warning-dark: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-dark-l), 1);
    --bulma-warning-dark-invert-l: var(--bulma-warning-50-l);
    --bulma-warning-dark-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-dark-invert-l), 1);
    --bulma-warning-soft: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-soft-l), 1);
    --bulma-warning-bold: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-bold-l), 1);
    --bulma-warning-soft-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-soft-invert-l), 1);
    --bulma-warning-bold-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-bold-invert-l), 1);
    --bulma-warning-on-scheme-l: 23%;
    --bulma-warning-on-scheme: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-on-scheme-l), 1);
    --bulma-danger: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-l), 1);
    --bulma-danger-base: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-l), 1);
    --bulma-danger-rgb: 255, 102, 133;
    --bulma-danger-h: 348deg;
    --bulma-danger-s: 100%;
    --bulma-danger-l: 70%;
    --bulma-danger-00-l: 0%;
    --bulma-danger-05-l: 5%;
    --bulma-danger-10-l: 10%;
    --bulma-danger-15-l: 15%;
    --bulma-danger-20-l: 20%;
    --bulma-danger-25-l: 25%;
    --bulma-danger-30-l: 30%;
    --bulma-danger-35-l: 35%;
    --bulma-danger-40-l: 40%;
    --bulma-danger-45-l: 45%;
    --bulma-danger-50-l: 50%;
    --bulma-danger-55-l: 55%;
    --bulma-danger-60-l: 60%;
    --bulma-danger-65-l: 65%;
    --bulma-danger-70-l: 70%;
    --bulma-danger-75-l: 75%;
    --bulma-danger-80-l: 80%;
    --bulma-danger-85-l: 85%;
    --bulma-danger-90-l: 90%;
    --bulma-danger-95-l: 95%;
    --bulma-danger-100-l: 100%;
    --bulma-danger-00: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-00-l), 1);
    --bulma-danger-00-invert-l: var(--bulma-danger-65-l);
    --bulma-danger-00-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-00-invert-l), 1);
    --bulma-danger-05: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-05-l), 1);
    --bulma-danger-05-invert-l: var(--bulma-danger-70-l);
    --bulma-danger-05-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-05-invert-l), 1);
    --bulma-danger-10: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-10-l), 1);
    --bulma-danger-10-invert-l: var(--bulma-danger-75-l);
    --bulma-danger-10-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-10-invert-l), 1);
    --bulma-danger-15: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-15-l), 1);
    --bulma-danger-15-invert-l: var(--bulma-danger-80-l);
    --bulma-danger-15-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-15-invert-l), 1);
    --bulma-danger-20: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-20-l), 1);
    --bulma-danger-20-invert-l: var(--bulma-danger-85-l);
    --bulma-danger-20-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-20-invert-l), 1);
    --bulma-danger-25: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-25-l), 1);
    --bulma-danger-25-invert-l: var(--bulma-danger-90-l);
    --bulma-danger-25-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-25-invert-l), 1);
    --bulma-danger-30: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-30-l), 1);
    --bulma-danger-30-invert-l: var(--bulma-danger-100-l);
    --bulma-danger-30-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-30-invert-l), 1);
    --bulma-danger-35: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-35-l), 1);
    --bulma-danger-35-invert-l: var(--bulma-danger-100-l);
    --bulma-danger-35-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-35-invert-l), 1);
    --bulma-danger-40: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-40-l), 1);
    --bulma-danger-40-invert-l: var(--bulma-danger-100-l);
    --bulma-danger-40-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-40-invert-l), 1);
    --bulma-danger-45: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-45-l), 1);
    --bulma-danger-45-invert-l: var(--bulma-danger-100-l);
    --bulma-danger-45-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-45-invert-l), 1);
    --bulma-danger-50: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-50-l), 1);
    --bulma-danger-50-invert-l: var(--bulma-danger-100-l);
    --bulma-danger-50-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-50-invert-l), 1);
    --bulma-danger-55: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-55-l), 1);
    --bulma-danger-55-invert-l: var(--bulma-danger-100-l);
    --bulma-danger-55-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-55-invert-l), 1);
    --bulma-danger-60: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-60-l), 1);
    --bulma-danger-60-invert-l: var(--bulma-danger-100-l);
    --bulma-danger-60-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-60-invert-l), 1);
    --bulma-danger-65: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-65-l), 1);
    --bulma-danger-65-invert-l: var(--bulma-danger-00-l);
    --bulma-danger-65-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-65-invert-l), 1);
    --bulma-danger-70: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-70-l), 1);
    --bulma-danger-70-invert-l: var(--bulma-danger-05-l);
    --bulma-danger-70-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-70-invert-l), 1);
    --bulma-danger-75: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-75-l), 1);
    --bulma-danger-75-invert-l: var(--bulma-danger-10-l);
    --bulma-danger-75-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-75-invert-l), 1);
    --bulma-danger-80: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-80-l), 1);
    --bulma-danger-80-invert-l: var(--bulma-danger-15-l);
    --bulma-danger-80-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-80-invert-l), 1);
    --bulma-danger-85: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-85-l), 1);
    --bulma-danger-85-invert-l: var(--bulma-danger-20-l);
    --bulma-danger-85-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-85-invert-l), 1);
    --bulma-danger-90: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-90-l), 1);
    --bulma-danger-90-invert-l: var(--bulma-danger-25-l);
    --bulma-danger-90-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-90-invert-l), 1);
    --bulma-danger-95: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-95-l), 1);
    --bulma-danger-95-invert-l: var(--bulma-danger-25-l);
    --bulma-danger-95-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-95-invert-l), 1);
    --bulma-danger-100: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-100-l), 1);
    --bulma-danger-100-invert-l: var(--bulma-danger-30-l);
    --bulma-danger-100-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-100-invert-l), 1);
    --bulma-danger-invert-l: var(--bulma-danger-05-l);
    --bulma-danger-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-invert-l), 1);
    --bulma-danger-light-l: var(--bulma-danger-90-l);
    --bulma-danger-light: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-light-l), 1);
    --bulma-danger-light-invert-l: var(--bulma-danger-25-l);
    --bulma-danger-light-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-light-invert-l), 1);
    --bulma-danger-dark-l: var(--bulma-danger-10-l);
    --bulma-danger-dark: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-dark-l), 1);
    --bulma-danger-dark-invert-l: var(--bulma-danger-75-l);
    --bulma-danger-dark-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-dark-invert-l), 1);
    --bulma-danger-soft: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-soft-l), 1);
    --bulma-danger-bold: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-bold-l), 1);
    --bulma-danger-soft-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-soft-invert-l), 1);
    --bulma-danger-bold-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-bold-invert-l), 1);
    --bulma-danger-on-scheme-l: 40%;
    --bulma-danger-on-scheme: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-on-scheme-l), 1);
    --bulma-black-bis: hsl(221, 14%, 9%);
    --bulma-black-ter: hsl(221, 14%, 14%);
    --bulma-grey-darker: hsl(221, 14%, 21%);
    --bulma-grey-dark: hsl(221, 14%, 29%);
    --bulma-grey: hsl(221, 14%, 48%);
    --bulma-grey-light: hsl(221, 14%, 71%);
    --bulma-grey-lighter: hsl(221, 14%, 86%);
    --bulma-white-ter: hsl(221, 14%, 96%);
    --bulma-white-bis: hsl(221, 14%, 98%);
    --bulma-shadow-h: 221deg;
    --bulma-shadow-s: 14%;
    --bulma-shadow-l: 4%;
    --bulma-size-1: 3rem;
    --bulma-size-2: 2.5rem;
    --bulma-size-3: 2rem;
    --bulma-size-4: 1.5rem;
    --bulma-size-5: 1.25rem;
    --bulma-size-6: 1rem;
    --bulma-size-7: 0.75rem;
  }
}
@media (prefers-color-scheme: dark) {
  :root {
    --bulma-white-on-scheme-l: 100%;
    --bulma-white-on-scheme: hsla(var(--bulma-white-h), var(--bulma-white-s), var(--bulma-white-on-scheme-l), 1);
    --bulma-black-on-scheme-l: 0%;
    --bulma-black-on-scheme: hsla(var(--bulma-black-h), var(--bulma-black-s), var(--bulma-black-on-scheme-l), 1);
    --bulma-light-on-scheme-l: 96%;
    --bulma-light-on-scheme: hsla(var(--bulma-light-h), var(--bulma-light-s), var(--bulma-light-on-scheme-l), 1);
    --bulma-dark-on-scheme-l: 56%;
    --bulma-dark-on-scheme: hsla(var(--bulma-dark-h), var(--bulma-dark-s), var(--bulma-dark-on-scheme-l), 1);
    --bulma-text-on-scheme-l: 54%;
    --bulma-text-on-scheme: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-on-scheme-l), 1);
    --bulma-primary-on-scheme-l: 41%;
    --bulma-primary-on-scheme: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-on-scheme-l), 1);
    --bulma-link-on-scheme-l: 73%;
    --bulma-link-on-scheme: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-on-scheme-l), 1);
    --bulma-info-on-scheme-l: 70%;
    --bulma-info-on-scheme: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-on-scheme-l), 1);
    --bulma-success-on-scheme-l: 53%;
    --bulma-success-on-scheme: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-on-scheme-l), 1);
    --bulma-warning-on-scheme-l: 53%;
    --bulma-warning-on-scheme: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-on-scheme-l), 1);
    --bulma-danger-on-scheme-l: 70%;
    --bulma-danger-on-scheme: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-on-scheme-l), 1);
    --bulma-scheme-brightness: dark;
    --bulma-scheme-main-l: 9%;
    --bulma-scheme-main-bis-l: 11%;
    --bulma-scheme-main-ter-l: 13%;
    --bulma-soft-l: 20%;
    --bulma-bold-l: 90%;
    --bulma-soft-invert-l: 90%;
    --bulma-bold-invert-l: 20%;
    --bulma-background-l: 14%;
    --bulma-border-weak-l: 21%;
    --bulma-border-l: 24%;
    --bulma-text-weak-l: 53%;
    --bulma-text-l: 71%;
    --bulma-text-strong-l: 93%;
    --bulma-text-title-l: 100%;
    --bulma-hover-background-l-delta: 5%;
    --bulma-active-background-l-delta: 10%;
    --bulma-hover-border-l-delta: 10%;
    --bulma-active-border-l-delta: 20%;
    --bulma-hover-color-l-delta: 5%;
    --bulma-active-color-l-delta: 10%;
    --bulma-shadow-h: 0deg;
    --bulma-shadow-s: 0%;
    --bulma-shadow-l: 100%;
  }
}
[data-theme=light],
.theme-light {
  --bulma-scheme-h: 221;
  --bulma-scheme-s: 14%;
  --bulma-light-l: 90%;
  --bulma-light-invert-l: 20%;
  --bulma-dark-l: 20%;
  --bulma-dark-invert-l: 90%;
  --bulma-soft-l: 90%;
  --bulma-bold-l: 20%;
  --bulma-soft-invert-l: 20%;
  --bulma-bold-invert-l: 90%;
  --bulma-hover-background-l-delta: -5%;
  --bulma-active-background-l-delta: -10%;
  --bulma-hover-border-l-delta: -10%;
  --bulma-active-border-l-delta: -20%;
  --bulma-hover-color-l-delta: -5%;
  --bulma-active-color-l-delta: -10%;
  --bulma-hover-shadow-a-delta: -0.05;
  --bulma-active-shadow-a-delta: -0.1;
  --bulma-scheme-brightness: light;
  --bulma-scheme-main-l: 100%;
  --bulma-scheme-main-bis-l: 98%;
  --bulma-scheme-main-ter-l: 96%;
  --bulma-background-l: 96%;
  --bulma-border-weak-l: 93%;
  --bulma-border-l: 86%;
  --bulma-text-weak-l: 48%;
  --bulma-text-l: 29%;
  --bulma-text-strong-l: 21%;
  --bulma-text-title-l: 14%;
  --bulma-scheme-invert-ter-l: 14%;
  --bulma-scheme-invert-bis-l: 7%;
  --bulma-scheme-invert-l: 4%;
  --bulma-family-primary: Inter, SF Pro, Segoe UI, Roboto, Oxygen, Ubuntu, Helvetica Neue, Helvetica, Arial, sans-serif;
  --bulma-family-secondary: Inter, SF Pro, Segoe UI, Roboto, Oxygen, Ubuntu, Helvetica Neue, Helvetica, Arial, sans-serif;
  --bulma-family-code: Inconsolata, Hack, SF Mono, Roboto Mono, Source Code Pro, Ubuntu Mono, monospace;
  --bulma-size-small: 0.75rem;
  --bulma-size-normal: 1rem;
  --bulma-size-medium: 1.25rem;
  --bulma-size-large: 1.5rem;
  --bulma-weight-light: 300;
  --bulma-weight-normal: 400;
  --bulma-weight-medium: 500;
  --bulma-weight-semibold: 600;
  --bulma-weight-bold: 700;
  --bulma-weight-extrabold: 800;
  --bulma-block-spacing: 1.5rem;
  --bulma-duration: 294ms;
  --bulma-easing: ease-out;
  --bulma-radius-small: 0.25rem;
  --bulma-radius: 0.375rem;
  --bulma-radius-medium: 0.5em;
  --bulma-radius-large: 0.75rem;
  --bulma-radius-rounded: 9999px;
  --bulma-speed: 86ms;
  --bulma-loading-color: var(--bulma-border);
  --bulma-burger-h: var(--bulma-link-h);
  --bulma-burger-s: var(--bulma-link-s);
  --bulma-burger-l: var(--bulma-link-l);
  --bulma-burger-border-radius: 0.5em;
  --bulma-burger-gap: 5px;
  --bulma-burger-item-height: 2px;
  --bulma-burger-item-width: 20px;
  --bulma-white: hsla(var(--bulma-white-h), var(--bulma-white-s), var(--bulma-white-l), 1);
  --bulma-white-base: hsla(var(--bulma-white-h), var(--bulma-white-s), var(--bulma-white-l), 1);
  --bulma-white-rgb: 255, 255, 255;
  --bulma-white-h: 221deg;
  --bulma-white-s: 14%;
  --bulma-white-l: 100%;
  --bulma-white-invert-l: 4%;
  --bulma-white-invert: hsl(221, 14%, 4%);
  --bulma-white-on-scheme-l: 35%;
  --bulma-white-on-scheme: hsla(var(--bulma-white-h), var(--bulma-white-s), var(--bulma-white-on-scheme-l), 1);
  --bulma-black: hsla(var(--bulma-black-h), var(--bulma-black-s), var(--bulma-black-l), 1);
  --bulma-black-base: hsla(var(--bulma-black-h), var(--bulma-black-s), var(--bulma-black-l), 1);
  --bulma-black-rgb: 9, 10, 12;
  --bulma-black-h: 221deg;
  --bulma-black-s: 14%;
  --bulma-black-l: 4%;
  --bulma-black-invert-l: 100%;
  --bulma-black-invert: hsl(221, 14%, 100%);
  --bulma-black-on-scheme-l: 4%;
  --bulma-black-on-scheme: hsla(var(--bulma-black-h), var(--bulma-black-s), var(--bulma-black-on-scheme-l), 1);
  --bulma-light: hsla(var(--bulma-light-h), var(--bulma-light-s), var(--bulma-light-l), 1);
  --bulma-light-base: hsla(var(--bulma-light-h), var(--bulma-light-s), var(--bulma-light-l), 1);
  --bulma-light-rgb: 243, 244, 246;
  --bulma-light-h: 221deg;
  --bulma-light-s: 14%;
  --bulma-light-l: 96%;
  --bulma-light-invert-l: 21%;
  --bulma-light-invert: hsl(221, 14%, 21%);
  --bulma-light-on-scheme-l: 36%;
  --bulma-light-on-scheme: hsla(var(--bulma-light-h), var(--bulma-light-s), var(--bulma-light-on-scheme-l), 1);
  --bulma-dark: hsla(var(--bulma-dark-h), var(--bulma-dark-s), var(--bulma-dark-l), 1);
  --bulma-dark-base: hsla(var(--bulma-dark-h), var(--bulma-dark-s), var(--bulma-dark-l), 1);
  --bulma-dark-rgb: 46, 51, 61;
  --bulma-dark-h: 221deg;
  --bulma-dark-s: 14%;
  --bulma-dark-l: 21%;
  --bulma-dark-invert-l: 96%;
  --bulma-dark-invert: hsl(221, 14%, 96%);
  --bulma-dark-on-scheme-l: 21%;
  --bulma-dark-on-scheme: hsla(var(--bulma-dark-h), var(--bulma-dark-s), var(--bulma-dark-on-scheme-l), 1);
  --bulma-text: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-l), 1);
  --bulma-text-base: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-l), 1);
  --bulma-text-rgb: 64, 70, 84;
  --bulma-text-h: 221deg;
  --bulma-text-s: 14%;
  --bulma-text-l: 29%;
  --bulma-text-00-l: 0%;
  --bulma-text-05-l: 4%;
  --bulma-text-10-l: 9%;
  --bulma-text-15-l: 14%;
  --bulma-text-20-l: 19%;
  --bulma-text-25-l: 24%;
  --bulma-text-30-l: 29%;
  --bulma-text-35-l: 34%;
  --bulma-text-40-l: 39%;
  --bulma-text-45-l: 44%;
  --bulma-text-50-l: 49%;
  --bulma-text-55-l: 54%;
  --bulma-text-60-l: 59%;
  --bulma-text-65-l: 64%;
  --bulma-text-70-l: 69%;
  --bulma-text-75-l: 74%;
  --bulma-text-80-l: 79%;
  --bulma-text-85-l: 84%;
  --bulma-text-90-l: 89%;
  --bulma-text-95-l: 94%;
  --bulma-text-100-l: 100%;
  --bulma-text-00: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-00-l), 1);
  --bulma-text-00-invert-l: var(--bulma-text-60-l);
  --bulma-text-00-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-00-invert-l), 1);
  --bulma-text-05: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-05-l), 1);
  --bulma-text-05-invert-l: var(--bulma-text-60-l);
  --bulma-text-05-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-05-invert-l), 1);
  --bulma-text-10: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-10-l), 1);
  --bulma-text-10-invert-l: var(--bulma-text-70-l);
  --bulma-text-10-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-10-invert-l), 1);
  --bulma-text-15: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-15-l), 1);
  --bulma-text-15-invert-l: var(--bulma-text-75-l);
  --bulma-text-15-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-15-invert-l), 1);
  --bulma-text-20: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-20-l), 1);
  --bulma-text-20-invert-l: var(--bulma-text-85-l);
  --bulma-text-20-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-20-invert-l), 1);
  --bulma-text-25: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-25-l), 1);
  --bulma-text-25-invert-l: var(--bulma-text-95-l);
  --bulma-text-25-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-25-invert-l), 1);
  --bulma-text-30: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-30-l), 1);
  --bulma-text-30-invert-l: var(--bulma-text-100-l);
  --bulma-text-30-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-30-invert-l), 1);
  --bulma-text-35: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-35-l), 1);
  --bulma-text-35-invert-l: var(--bulma-text-100-l);
  --bulma-text-35-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-35-invert-l), 1);
  --bulma-text-40: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-40-l), 1);
  --bulma-text-40-invert-l: var(--bulma-text-100-l);
  --bulma-text-40-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-40-invert-l), 1);
  --bulma-text-45: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-45-l), 1);
  --bulma-text-45-invert-l: var(--bulma-text-100-l);
  --bulma-text-45-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-45-invert-l), 1);
  --bulma-text-50: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-50-l), 1);
  --bulma-text-50-invert-l: var(--bulma-text-100-l);
  --bulma-text-50-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-50-invert-l), 1);
  --bulma-text-55: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-55-l), 1);
  --bulma-text-55-invert-l: var(--bulma-text-100-l);
  --bulma-text-55-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-55-invert-l), 1);
  --bulma-text-60: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-60-l), 1);
  --bulma-text-60-invert-l: var(--bulma-text-05-l);
  --bulma-text-60-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-60-invert-l), 1);
  --bulma-text-65: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-65-l), 1);
  --bulma-text-65-invert-l: var(--bulma-text-05-l);
  --bulma-text-65-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-65-invert-l), 1);
  --bulma-text-70: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-70-l), 1);
  --bulma-text-70-invert-l: var(--bulma-text-10-l);
  --bulma-text-70-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-70-invert-l), 1);
  --bulma-text-75: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-75-l), 1);
  --bulma-text-75-invert-l: var(--bulma-text-15-l);
  --bulma-text-75-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-75-invert-l), 1);
  --bulma-text-80: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-80-l), 1);
  --bulma-text-80-invert-l: var(--bulma-text-15-l);
  --bulma-text-80-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-80-invert-l), 1);
  --bulma-text-85: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-85-l), 1);
  --bulma-text-85-invert-l: var(--bulma-text-20-l);
  --bulma-text-85-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-85-invert-l), 1);
  --bulma-text-90: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-90-l), 1);
  --bulma-text-90-invert-l: var(--bulma-text-20-l);
  --bulma-text-90-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-90-invert-l), 1);
  --bulma-text-95: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-95-l), 1);
  --bulma-text-95-invert-l: var(--bulma-text-25-l);
  --bulma-text-95-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-95-invert-l), 1);
  --bulma-text-100: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-100-l), 1);
  --bulma-text-100-invert-l: var(--bulma-text-30-l);
  --bulma-text-100-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-100-invert-l), 1);
  --bulma-text-invert-l: var(--bulma-text-100-l);
  --bulma-text-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-invert-l), 1);
  --bulma-text-light-l: var(--bulma-text-90-l);
  --bulma-text-light: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-light-l), 1);
  --bulma-text-light-invert-l: var(--bulma-text-20-l);
  --bulma-text-light-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-light-invert-l), 1);
  --bulma-text-dark-l: var(--bulma-text-10-l);
  --bulma-text-dark: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-dark-l), 1);
  --bulma-text-dark-invert-l: var(--bulma-text-70-l);
  --bulma-text-dark-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-dark-invert-l), 1);
  --bulma-text-soft: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-soft-l), 1);
  --bulma-text-bold: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-bold-l), 1);
  --bulma-text-soft-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-soft-invert-l), 1);
  --bulma-text-bold-invert: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-bold-invert-l), 1);
  --bulma-text-on-scheme-l: 29%;
  --bulma-text-on-scheme: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-on-scheme-l), 1);
  --bulma-primary: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-l), 1);
  --bulma-primary-base: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-l), 1);
  --bulma-primary-rgb: 0, 209, 178;
  --bulma-primary-h: 171deg;
  --bulma-primary-s: 100%;
  --bulma-primary-l: 41%;
  --bulma-primary-00-l: 1%;
  --bulma-primary-05-l: 6%;
  --bulma-primary-10-l: 11%;
  --bulma-primary-15-l: 16%;
  --bulma-primary-20-l: 21%;
  --bulma-primary-25-l: 26%;
  --bulma-primary-30-l: 31%;
  --bulma-primary-35-l: 36%;
  --bulma-primary-40-l: 41%;
  --bulma-primary-45-l: 46%;
  --bulma-primary-50-l: 51%;
  --bulma-primary-55-l: 56%;
  --bulma-primary-60-l: 61%;
  --bulma-primary-65-l: 66%;
  --bulma-primary-70-l: 71%;
  --bulma-primary-75-l: 76%;
  --bulma-primary-80-l: 81%;
  --bulma-primary-85-l: 86%;
  --bulma-primary-90-l: 91%;
  --bulma-primary-95-l: 96%;
  --bulma-primary-100-l: 100%;
  --bulma-primary-00: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-00-l), 1);
  --bulma-primary-00-invert-l: var(--bulma-primary-30-l);
  --bulma-primary-00-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-00-invert-l), 1);
  --bulma-primary-05: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-05-l), 1);
  --bulma-primary-05-invert-l: var(--bulma-primary-40-l);
  --bulma-primary-05-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-05-invert-l), 1);
  --bulma-primary-10: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-10-l), 1);
  --bulma-primary-10-invert-l: var(--bulma-primary-50-l);
  --bulma-primary-10-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-10-invert-l), 1);
  --bulma-primary-15: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-15-l), 1);
  --bulma-primary-15-invert-l: var(--bulma-primary-100-l);
  --bulma-primary-15-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-15-invert-l), 1);
  --bulma-primary-20: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-20-l), 1);
  --bulma-primary-20-invert-l: var(--bulma-primary-100-l);
  --bulma-primary-20-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-20-invert-l), 1);
  --bulma-primary-25: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-25-l), 1);
  --bulma-primary-25-invert-l: var(--bulma-primary-100-l);
  --bulma-primary-25-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-25-invert-l), 1);
  --bulma-primary-30: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-30-l), 1);
  --bulma-primary-30-invert-l: var(--bulma-primary-00-l);
  --bulma-primary-30-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-30-invert-l), 1);
  --bulma-primary-35: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-35-l), 1);
  --bulma-primary-35-invert-l: var(--bulma-primary-00-l);
  --bulma-primary-35-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-35-invert-l), 1);
  --bulma-primary-40: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-40-l), 1);
  --bulma-primary-40-invert-l: var(--bulma-primary-05-l);
  --bulma-primary-40-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-40-invert-l), 1);
  --bulma-primary-45: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-45-l), 1);
  --bulma-primary-45-invert-l: var(--bulma-primary-05-l);
  --bulma-primary-45-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-45-invert-l), 1);
  --bulma-primary-50: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-50-l), 1);
  --bulma-primary-50-invert-l: var(--bulma-primary-10-l);
  --bulma-primary-50-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-50-invert-l), 1);
  --bulma-primary-55: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-55-l), 1);
  --bulma-primary-55-invert-l: var(--bulma-primary-10-l);
  --bulma-primary-55-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-55-invert-l), 1);
  --bulma-primary-60: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-60-l), 1);
  --bulma-primary-60-invert-l: var(--bulma-primary-10-l);
  --bulma-primary-60-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-60-invert-l), 1);
  --bulma-primary-65: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-65-l), 1);
  --bulma-primary-65-invert-l: var(--bulma-primary-10-l);
  --bulma-primary-65-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-65-invert-l), 1);
  --bulma-primary-70: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-70-l), 1);
  --bulma-primary-70-invert-l: var(--bulma-primary-10-l);
  --bulma-primary-70-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-70-invert-l), 1);
  --bulma-primary-75: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-75-l), 1);
  --bulma-primary-75-invert-l: var(--bulma-primary-10-l);
  --bulma-primary-75-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-75-invert-l), 1);
  --bulma-primary-80: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-80-l), 1);
  --bulma-primary-80-invert-l: var(--bulma-primary-10-l);
  --bulma-primary-80-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-80-invert-l), 1);
  --bulma-primary-85: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-85-l), 1);
  --bulma-primary-85-invert-l: var(--bulma-primary-10-l);
  --bulma-primary-85-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-85-invert-l), 1);
  --bulma-primary-90: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-90-l), 1);
  --bulma-primary-90-invert-l: var(--bulma-primary-10-l);
  --bulma-primary-90-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-90-invert-l), 1);
  --bulma-primary-95: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-95-l), 1);
  --bulma-primary-95-invert-l: var(--bulma-primary-10-l);
  --bulma-primary-95-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-95-invert-l), 1);
  --bulma-primary-100: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-100-l), 1);
  --bulma-primary-100-invert-l: var(--bulma-primary-15-l);
  --bulma-primary-100-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-100-invert-l), 1);
  --bulma-primary-invert-l: var(--bulma-primary-05-l);
  --bulma-primary-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-invert-l), 1);
  --bulma-primary-light-l: var(--bulma-primary-90-l);
  --bulma-primary-light: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-light-l), 1);
  --bulma-primary-light-invert-l: var(--bulma-primary-10-l);
  --bulma-primary-light-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-light-invert-l), 1);
  --bulma-primary-dark-l: var(--bulma-primary-10-l);
  --bulma-primary-dark: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-dark-l), 1);
  --bulma-primary-dark-invert-l: var(--bulma-primary-50-l);
  --bulma-primary-dark-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-dark-invert-l), 1);
  --bulma-primary-soft: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-soft-l), 1);
  --bulma-primary-bold: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-bold-l), 1);
  --bulma-primary-soft-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-soft-invert-l), 1);
  --bulma-primary-bold-invert: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-bold-invert-l), 1);
  --bulma-primary-on-scheme-l: 21%;
  --bulma-primary-on-scheme: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-on-scheme-l), 1);
  --bulma-link: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-l), 1);
  --bulma-link-base: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-l), 1);
  --bulma-link-rgb: 66, 88, 255;
  --bulma-link-h: 233deg;
  --bulma-link-s: 100%;
  --bulma-link-l: 63%;
  --bulma-link-00-l: 0%;
  --bulma-link-05-l: 3%;
  --bulma-link-10-l: 8%;
  --bulma-link-15-l: 13%;
  --bulma-link-20-l: 18%;
  --bulma-link-25-l: 23%;
  --bulma-link-30-l: 28%;
  --bulma-link-35-l: 33%;
  --bulma-link-40-l: 38%;
  --bulma-link-45-l: 43%;
  --bulma-link-50-l: 48%;
  --bulma-link-55-l: 53%;
  --bulma-link-60-l: 58%;
  --bulma-link-65-l: 63%;
  --bulma-link-70-l: 68%;
  --bulma-link-75-l: 73%;
  --bulma-link-80-l: 78%;
  --bulma-link-85-l: 83%;
  --bulma-link-90-l: 88%;
  --bulma-link-95-l: 93%;
  --bulma-link-100-l: 100%;
  --bulma-link-00: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-00-l), 1);
  --bulma-link-00-invert-l: var(--bulma-link-75-l);
  --bulma-link-00-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-00-invert-l), 1);
  --bulma-link-05: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-05-l), 1);
  --bulma-link-05-invert-l: var(--bulma-link-75-l);
  --bulma-link-05-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-05-invert-l), 1);
  --bulma-link-10: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-10-l), 1);
  --bulma-link-10-invert-l: var(--bulma-link-75-l);
  --bulma-link-10-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-10-invert-l), 1);
  --bulma-link-15: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-15-l), 1);
  --bulma-link-15-invert-l: var(--bulma-link-80-l);
  --bulma-link-15-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-15-invert-l), 1);
  --bulma-link-20: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-20-l), 1);
  --bulma-link-20-invert-l: var(--bulma-link-80-l);
  --bulma-link-20-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-20-invert-l), 1);
  --bulma-link-25: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-25-l), 1);
  --bulma-link-25-invert-l: var(--bulma-link-85-l);
  --bulma-link-25-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-25-invert-l), 1);
  --bulma-link-30: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-30-l), 1);
  --bulma-link-30-invert-l: var(--bulma-link-90-l);
  --bulma-link-30-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-30-invert-l), 1);
  --bulma-link-35: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-35-l), 1);
  --bulma-link-35-invert-l: var(--bulma-link-90-l);
  --bulma-link-35-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-35-invert-l), 1);
  --bulma-link-40: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-40-l), 1);
  --bulma-link-40-invert-l: var(--bulma-link-95-l);
  --bulma-link-40-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-40-invert-l), 1);
  --bulma-link-45: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-45-l), 1);
  --bulma-link-45-invert-l: var(--bulma-link-100-l);
  --bulma-link-45-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-45-invert-l), 1);
  --bulma-link-50: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-50-l), 1);
  --bulma-link-50-invert-l: var(--bulma-link-100-l);
  --bulma-link-50-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-50-invert-l), 1);
  --bulma-link-55: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-55-l), 1);
  --bulma-link-55-invert-l: var(--bulma-link-100-l);
  --bulma-link-55-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-55-invert-l), 1);
  --bulma-link-60: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-60-l), 1);
  --bulma-link-60-invert-l: var(--bulma-link-100-l);
  --bulma-link-60-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-60-invert-l), 1);
  --bulma-link-65: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-65-l), 1);
  --bulma-link-65-invert-l: var(--bulma-link-100-l);
  --bulma-link-65-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-65-invert-l), 1);
  --bulma-link-70: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-70-l), 1);
  --bulma-link-70-invert-l: var(--bulma-link-100-l);
  --bulma-link-70-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-70-invert-l), 1);
  --bulma-link-75: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-75-l), 1);
  --bulma-link-75-invert-l: var(--bulma-link-10-l);
  --bulma-link-75-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-75-invert-l), 1);
  --bulma-link-80: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-80-l), 1);
  --bulma-link-80-invert-l: var(--bulma-link-20-l);
  --bulma-link-80-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-80-invert-l), 1);
  --bulma-link-85: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-85-l), 1);
  --bulma-link-85-invert-l: var(--bulma-link-25-l);
  --bulma-link-85-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-85-invert-l), 1);
  --bulma-link-90: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-90-l), 1);
  --bulma-link-90-invert-l: var(--bulma-link-35-l);
  --bulma-link-90-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-90-invert-l), 1);
  --bulma-link-95: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-95-l), 1);
  --bulma-link-95-invert-l: var(--bulma-link-40-l);
  --bulma-link-95-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-95-invert-l), 1);
  --bulma-link-100: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-100-l), 1);
  --bulma-link-100-invert-l: var(--bulma-link-50-l);
  --bulma-link-100-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-100-invert-l), 1);
  --bulma-link-invert-l: var(--bulma-link-100-l);
  --bulma-link-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-invert-l), 1);
  --bulma-link-light-l: var(--bulma-link-90-l);
  --bulma-link-light: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-light-l), 1);
  --bulma-link-light-invert-l: var(--bulma-link-35-l);
  --bulma-link-light-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-light-invert-l), 1);
  --bulma-link-dark-l: var(--bulma-link-10-l);
  --bulma-link-dark: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-dark-l), 1);
  --bulma-link-dark-invert-l: var(--bulma-link-75-l);
  --bulma-link-dark-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-dark-invert-l), 1);
  --bulma-link-soft: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-soft-l), 1);
  --bulma-link-bold: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-bold-l), 1);
  --bulma-link-soft-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-soft-invert-l), 1);
  --bulma-link-bold-invert: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-bold-invert-l), 1);
  --bulma-link-on-scheme-l: 58%;
  --bulma-link-on-scheme: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-on-scheme-l), 1);
  --bulma-info: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-l), 1);
  --bulma-info-base: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-l), 1);
  --bulma-info-rgb: 102, 209, 255;
  --bulma-info-h: 198deg;
  --bulma-info-s: 100%;
  --bulma-info-l: 70%;
  --bulma-info-00-l: 0%;
  --bulma-info-05-l: 5%;
  --bulma-info-10-l: 10%;
  --bulma-info-15-l: 15%;
  --bulma-info-20-l: 20%;
  --bulma-info-25-l: 25%;
  --bulma-info-30-l: 30%;
  --bulma-info-35-l: 35%;
  --bulma-info-40-l: 40%;
  --bulma-info-45-l: 45%;
  --bulma-info-50-l: 50%;
  --bulma-info-55-l: 55%;
  --bulma-info-60-l: 60%;
  --bulma-info-65-l: 65%;
  --bulma-info-70-l: 70%;
  --bulma-info-75-l: 75%;
  --bulma-info-80-l: 80%;
  --bulma-info-85-l: 85%;
  --bulma-info-90-l: 90%;
  --bulma-info-95-l: 95%;
  --bulma-info-100-l: 100%;
  --bulma-info-00: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-00-l), 1);
  --bulma-info-00-invert-l: var(--bulma-info-45-l);
  --bulma-info-00-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-00-invert-l), 1);
  --bulma-info-05: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-05-l), 1);
  --bulma-info-05-invert-l: var(--bulma-info-50-l);
  --bulma-info-05-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-05-invert-l), 1);
  --bulma-info-10: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-10-l), 1);
  --bulma-info-10-invert-l: var(--bulma-info-60-l);
  --bulma-info-10-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-10-invert-l), 1);
  --bulma-info-15: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-15-l), 1);
  --bulma-info-15-invert-l: var(--bulma-info-80-l);
  --bulma-info-15-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-15-invert-l), 1);
  --bulma-info-20: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-20-l), 1);
  --bulma-info-20-invert-l: var(--bulma-info-95-l);
  --bulma-info-20-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-20-invert-l), 1);
  --bulma-info-25: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-25-l), 1);
  --bulma-info-25-invert-l: var(--bulma-info-100-l);
  --bulma-info-25-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-25-invert-l), 1);
  --bulma-info-30: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-30-l), 1);
  --bulma-info-30-invert-l: var(--bulma-info-100-l);
  --bulma-info-30-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-30-invert-l), 1);
  --bulma-info-35: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-35-l), 1);
  --bulma-info-35-invert-l: var(--bulma-info-100-l);
  --bulma-info-35-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-35-invert-l), 1);
  --bulma-info-40: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-40-l), 1);
  --bulma-info-40-invert-l: var(--bulma-info-100-l);
  --bulma-info-40-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-40-invert-l), 1);
  --bulma-info-45: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-45-l), 1);
  --bulma-info-45-invert-l: var(--bulma-info-00-l);
  --bulma-info-45-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-45-invert-l), 1);
  --bulma-info-50: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-50-l), 1);
  --bulma-info-50-invert-l: var(--bulma-info-05-l);
  --bulma-info-50-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-50-invert-l), 1);
  --bulma-info-55: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-55-l), 1);
  --bulma-info-55-invert-l: var(--bulma-info-05-l);
  --bulma-info-55-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-55-invert-l), 1);
  --bulma-info-60: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-60-l), 1);
  --bulma-info-60-invert-l: var(--bulma-info-10-l);
  --bulma-info-60-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-60-invert-l), 1);
  --bulma-info-65: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-65-l), 1);
  --bulma-info-65-invert-l: var(--bulma-info-10-l);
  --bulma-info-65-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-65-invert-l), 1);
  --bulma-info-70: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-70-l), 1);
  --bulma-info-70-invert-l: var(--bulma-info-10-l);
  --bulma-info-70-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-70-invert-l), 1);
  --bulma-info-75: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-75-l), 1);
  --bulma-info-75-invert-l: var(--bulma-info-10-l);
  --bulma-info-75-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-75-invert-l), 1);
  --bulma-info-80: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-80-l), 1);
  --bulma-info-80-invert-l: var(--bulma-info-15-l);
  --bulma-info-80-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-80-invert-l), 1);
  --bulma-info-85: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-85-l), 1);
  --bulma-info-85-invert-l: var(--bulma-info-15-l);
  --bulma-info-85-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-85-invert-l), 1);
  --bulma-info-90: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-90-l), 1);
  --bulma-info-90-invert-l: var(--bulma-info-15-l);
  --bulma-info-90-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-90-invert-l), 1);
  --bulma-info-95: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-95-l), 1);
  --bulma-info-95-invert-l: var(--bulma-info-20-l);
  --bulma-info-95-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-95-invert-l), 1);
  --bulma-info-100: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-100-l), 1);
  --bulma-info-100-invert-l: var(--bulma-info-20-l);
  --bulma-info-100-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-100-invert-l), 1);
  --bulma-info-invert-l: var(--bulma-info-10-l);
  --bulma-info-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-invert-l), 1);
  --bulma-info-light-l: var(--bulma-info-90-l);
  --bulma-info-light: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-light-l), 1);
  --bulma-info-light-invert-l: var(--bulma-info-15-l);
  --bulma-info-light-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-light-invert-l), 1);
  --bulma-info-dark-l: var(--bulma-info-10-l);
  --bulma-info-dark: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-dark-l), 1);
  --bulma-info-dark-invert-l: var(--bulma-info-60-l);
  --bulma-info-dark-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-dark-invert-l), 1);
  --bulma-info-soft: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-soft-l), 1);
  --bulma-info-bold: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-bold-l), 1);
  --bulma-info-soft-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-soft-invert-l), 1);
  --bulma-info-bold-invert: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-bold-invert-l), 1);
  --bulma-info-on-scheme-l: 25%;
  --bulma-info-on-scheme: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-on-scheme-l), 1);
  --bulma-success: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-l), 1);
  --bulma-success-base: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-l), 1);
  --bulma-success-rgb: 72, 199, 142;
  --bulma-success-h: 153deg;
  --bulma-success-s: 53%;
  --bulma-success-l: 53%;
  --bulma-success-00-l: 0%;
  --bulma-success-05-l: 3%;
  --bulma-success-10-l: 8%;
  --bulma-success-15-l: 13%;
  --bulma-success-20-l: 18%;
  --bulma-success-25-l: 23%;
  --bulma-success-30-l: 28%;
  --bulma-success-35-l: 33%;
  --bulma-success-40-l: 38%;
  --bulma-success-45-l: 43%;
  --bulma-success-50-l: 48%;
  --bulma-success-55-l: 53%;
  --bulma-success-60-l: 58%;
  --bulma-success-65-l: 63%;
  --bulma-success-70-l: 68%;
  --bulma-success-75-l: 73%;
  --bulma-success-80-l: 78%;
  --bulma-success-85-l: 83%;
  --bulma-success-90-l: 88%;
  --bulma-success-95-l: 93%;
  --bulma-success-100-l: 100%;
  --bulma-success-00: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-00-l), 1);
  --bulma-success-00-invert-l: var(--bulma-success-45-l);
  --bulma-success-00-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-00-invert-l), 1);
  --bulma-success-05: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-05-l), 1);
  --bulma-success-05-invert-l: var(--bulma-success-45-l);
  --bulma-success-05-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-05-invert-l), 1);
  --bulma-success-10: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-10-l), 1);
  --bulma-success-10-invert-l: var(--bulma-success-55-l);
  --bulma-success-10-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-10-invert-l), 1);
  --bulma-success-15: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-15-l), 1);
  --bulma-success-15-invert-l: var(--bulma-success-75-l);
  --bulma-success-15-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-15-invert-l), 1);
  --bulma-success-20: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-20-l), 1);
  --bulma-success-20-invert-l: var(--bulma-success-90-l);
  --bulma-success-20-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-20-invert-l), 1);
  --bulma-success-25: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-25-l), 1);
  --bulma-success-25-invert-l: var(--bulma-success-100-l);
  --bulma-success-25-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-25-invert-l), 1);
  --bulma-success-30: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-30-l), 1);
  --bulma-success-30-invert-l: var(--bulma-success-100-l);
  --bulma-success-30-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-30-invert-l), 1);
  --bulma-success-35: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-35-l), 1);
  --bulma-success-35-invert-l: var(--bulma-success-100-l);
  --bulma-success-35-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-35-invert-l), 1);
  --bulma-success-40: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-40-l), 1);
  --bulma-success-40-invert-l: var(--bulma-success-100-l);
  --bulma-success-40-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-40-invert-l), 1);
  --bulma-success-45: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-45-l), 1);
  --bulma-success-45-invert-l: var(--bulma-success-05-l);
  --bulma-success-45-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-45-invert-l), 1);
  --bulma-success-50: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-50-l), 1);
  --bulma-success-50-invert-l: var(--bulma-success-05-l);
  --bulma-success-50-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-50-invert-l), 1);
  --bulma-success-55: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-55-l), 1);
  --bulma-success-55-invert-l: var(--bulma-success-10-l);
  --bulma-success-55-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-55-invert-l), 1);
  --bulma-success-60: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-60-l), 1);
  --bulma-success-60-invert-l: var(--bulma-success-10-l);
  --bulma-success-60-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-60-invert-l), 1);
  --bulma-success-65: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-65-l), 1);
  --bulma-success-65-invert-l: var(--bulma-success-10-l);
  --bulma-success-65-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-65-invert-l), 1);
  --bulma-success-70: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-70-l), 1);
  --bulma-success-70-invert-l: var(--bulma-success-10-l);
  --bulma-success-70-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-70-invert-l), 1);
  --bulma-success-75: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-75-l), 1);
  --bulma-success-75-invert-l: var(--bulma-success-15-l);
  --bulma-success-75-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-75-invert-l), 1);
  --bulma-success-80: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-80-l), 1);
  --bulma-success-80-invert-l: var(--bulma-success-15-l);
  --bulma-success-80-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-80-invert-l), 1);
  --bulma-success-85: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-85-l), 1);
  --bulma-success-85-invert-l: var(--bulma-success-15-l);
  --bulma-success-85-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-85-invert-l), 1);
  --bulma-success-90: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-90-l), 1);
  --bulma-success-90-invert-l: var(--bulma-success-20-l);
  --bulma-success-90-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-90-invert-l), 1);
  --bulma-success-95: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-95-l), 1);
  --bulma-success-95-invert-l: var(--bulma-success-20-l);
  --bulma-success-95-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-95-invert-l), 1);
  --bulma-success-100: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-100-l), 1);
  --bulma-success-100-invert-l: var(--bulma-success-20-l);
  --bulma-success-100-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-100-invert-l), 1);
  --bulma-success-invert-l: var(--bulma-success-10-l);
  --bulma-success-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-invert-l), 1);
  --bulma-success-light-l: var(--bulma-success-90-l);
  --bulma-success-light: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-light-l), 1);
  --bulma-success-light-invert-l: var(--bulma-success-20-l);
  --bulma-success-light-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-light-invert-l), 1);
  --bulma-success-dark-l: var(--bulma-success-10-l);
  --bulma-success-dark: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-dark-l), 1);
  --bulma-success-dark-invert-l: var(--bulma-success-55-l);
  --bulma-success-dark-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-dark-invert-l), 1);
  --bulma-success-soft: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-soft-l), 1);
  --bulma-success-bold: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-bold-l), 1);
  --bulma-success-soft-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-soft-invert-l), 1);
  --bulma-success-bold-invert: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-bold-invert-l), 1);
  --bulma-success-on-scheme-l: 23%;
  --bulma-success-on-scheme: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-on-scheme-l), 1);
  --bulma-warning: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-l), 1);
  --bulma-warning-base: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-l), 1);
  --bulma-warning-rgb: 255, 183, 15;
  --bulma-warning-h: 42deg;
  --bulma-warning-s: 100%;
  --bulma-warning-l: 53%;
  --bulma-warning-00-l: 0%;
  --bulma-warning-05-l: 3%;
  --bulma-warning-10-l: 8%;
  --bulma-warning-15-l: 13%;
  --bulma-warning-20-l: 18%;
  --bulma-warning-25-l: 23%;
  --bulma-warning-30-l: 28%;
  --bulma-warning-35-l: 33%;
  --bulma-warning-40-l: 38%;
  --bulma-warning-45-l: 43%;
  --bulma-warning-50-l: 48%;
  --bulma-warning-55-l: 53%;
  --bulma-warning-60-l: 58%;
  --bulma-warning-65-l: 63%;
  --bulma-warning-70-l: 68%;
  --bulma-warning-75-l: 73%;
  --bulma-warning-80-l: 78%;
  --bulma-warning-85-l: 83%;
  --bulma-warning-90-l: 88%;
  --bulma-warning-95-l: 93%;
  --bulma-warning-100-l: 100%;
  --bulma-warning-00: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-00-l), 1);
  --bulma-warning-00-invert-l: var(--bulma-warning-40-l);
  --bulma-warning-00-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-00-invert-l), 1);
  --bulma-warning-05: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-05-l), 1);
  --bulma-warning-05-invert-l: var(--bulma-warning-45-l);
  --bulma-warning-05-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-05-invert-l), 1);
  --bulma-warning-10: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-10-l), 1);
  --bulma-warning-10-invert-l: var(--bulma-warning-50-l);
  --bulma-warning-10-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-10-invert-l), 1);
  --bulma-warning-15: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-15-l), 1);
  --bulma-warning-15-invert-l: var(--bulma-warning-70-l);
  --bulma-warning-15-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-15-invert-l), 1);
  --bulma-warning-20: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-20-l), 1);
  --bulma-warning-20-invert-l: var(--bulma-warning-100-l);
  --bulma-warning-20-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-20-invert-l), 1);
  --bulma-warning-25: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-25-l), 1);
  --bulma-warning-25-invert-l: var(--bulma-warning-100-l);
  --bulma-warning-25-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-25-invert-l), 1);
  --bulma-warning-30: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-30-l), 1);
  --bulma-warning-30-invert-l: var(--bulma-warning-100-l);
  --bulma-warning-30-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-30-invert-l), 1);
  --bulma-warning-35: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-35-l), 1);
  --bulma-warning-35-invert-l: var(--bulma-warning-100-l);
  --bulma-warning-35-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-35-invert-l), 1);
  --bulma-warning-40: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-40-l), 1);
  --bulma-warning-40-invert-l: var(--bulma-warning-00-l);
  --bulma-warning-40-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-40-invert-l), 1);
  --bulma-warning-45: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-45-l), 1);
  --bulma-warning-45-invert-l: var(--bulma-warning-05-l);
  --bulma-warning-45-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-45-invert-l), 1);
  --bulma-warning-50: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-50-l), 1);
  --bulma-warning-50-invert-l: var(--bulma-warning-10-l);
  --bulma-warning-50-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-50-invert-l), 1);
  --bulma-warning-55: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-55-l), 1);
  --bulma-warning-55-invert-l: var(--bulma-warning-10-l);
  --bulma-warning-55-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-55-invert-l), 1);
  --bulma-warning-60: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-60-l), 1);
  --bulma-warning-60-invert-l: var(--bulma-warning-10-l);
  --bulma-warning-60-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-60-invert-l), 1);
  --bulma-warning-65: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-65-l), 1);
  --bulma-warning-65-invert-l: var(--bulma-warning-10-l);
  --bulma-warning-65-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-65-invert-l), 1);
  --bulma-warning-70: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-70-l), 1);
  --bulma-warning-70-invert-l: var(--bulma-warning-15-l);
  --bulma-warning-70-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-70-invert-l), 1);
  --bulma-warning-75: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-75-l), 1);
  --bulma-warning-75-invert-l: var(--bulma-warning-15-l);
  --bulma-warning-75-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-75-invert-l), 1);
  --bulma-warning-80: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-80-l), 1);
  --bulma-warning-80-invert-l: var(--bulma-warning-15-l);
  --bulma-warning-80-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-80-invert-l), 1);
  --bulma-warning-85: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-85-l), 1);
  --bulma-warning-85-invert-l: var(--bulma-warning-15-l);
  --bulma-warning-85-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-85-invert-l), 1);
  --bulma-warning-90: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-90-l), 1);
  --bulma-warning-90-invert-l: var(--bulma-warning-15-l);
  --bulma-warning-90-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-90-invert-l), 1);
  --bulma-warning-95: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-95-l), 1);
  --bulma-warning-95-invert-l: var(--bulma-warning-15-l);
  --bulma-warning-95-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-95-invert-l), 1);
  --bulma-warning-100: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-100-l), 1);
  --bulma-warning-100-invert-l: var(--bulma-warning-20-l);
  --bulma-warning-100-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-100-invert-l), 1);
  --bulma-warning-invert-l: var(--bulma-warning-10-l);
  --bulma-warning-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-invert-l), 1);
  --bulma-warning-light-l: var(--bulma-warning-90-l);
  --bulma-warning-light: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-light-l), 1);
  --bulma-warning-light-invert-l: var(--bulma-warning-15-l);
  --bulma-warning-light-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-light-invert-l), 1);
  --bulma-warning-dark-l: var(--bulma-warning-10-l);
  --bulma-warning-dark: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-dark-l), 1);
  --bulma-warning-dark-invert-l: var(--bulma-warning-50-l);
  --bulma-warning-dark-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-dark-invert-l), 1);
  --bulma-warning-soft: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-soft-l), 1);
  --bulma-warning-bold: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-bold-l), 1);
  --bulma-warning-soft-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-soft-invert-l), 1);
  --bulma-warning-bold-invert: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-bold-invert-l), 1);
  --bulma-warning-on-scheme-l: 23%;
  --bulma-warning-on-scheme: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-on-scheme-l), 1);
  --bulma-danger: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-l), 1);
  --bulma-danger-base: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-l), 1);
  --bulma-danger-rgb: 255, 102, 133;
  --bulma-danger-h: 348deg;
  --bulma-danger-s: 100%;
  --bulma-danger-l: 70%;
  --bulma-danger-00-l: 0%;
  --bulma-danger-05-l: 5%;
  --bulma-danger-10-l: 10%;
  --bulma-danger-15-l: 15%;
  --bulma-danger-20-l: 20%;
  --bulma-danger-25-l: 25%;
  --bulma-danger-30-l: 30%;
  --bulma-danger-35-l: 35%;
  --bulma-danger-40-l: 40%;
  --bulma-danger-45-l: 45%;
  --bulma-danger-50-l: 50%;
  --bulma-danger-55-l: 55%;
  --bulma-danger-60-l: 60%;
  --bulma-danger-65-l: 65%;
  --bulma-danger-70-l: 70%;
  --bulma-danger-75-l: 75%;
  --bulma-danger-80-l: 80%;
  --bulma-danger-85-l: 85%;
  --bulma-danger-90-l: 90%;
  --bulma-danger-95-l: 95%;
  --bulma-danger-100-l: 100%;
  --bulma-danger-00: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-00-l), 1);
  --bulma-danger-00-invert-l: var(--bulma-danger-65-l);
  --bulma-danger-00-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-00-invert-l), 1);
  --bulma-danger-05: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-05-l), 1);
  --bulma-danger-05-invert-l: var(--bulma-danger-70-l);
  --bulma-danger-05-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-05-invert-l), 1);
  --bulma-danger-10: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-10-l), 1);
  --bulma-danger-10-invert-l: var(--bulma-danger-75-l);
  --bulma-danger-10-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-10-invert-l), 1);
  --bulma-danger-15: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-15-l), 1);
  --bulma-danger-15-invert-l: var(--bulma-danger-80-l);
  --bulma-danger-15-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-15-invert-l), 1);
  --bulma-danger-20: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-20-l), 1);
  --bulma-danger-20-invert-l: var(--bulma-danger-85-l);
  --bulma-danger-20-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-20-invert-l), 1);
  --bulma-danger-25: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-25-l), 1);
  --bulma-danger-25-invert-l: var(--bulma-danger-90-l);
  --bulma-danger-25-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-25-invert-l), 1);
  --bulma-danger-30: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-30-l), 1);
  --bulma-danger-30-invert-l: var(--bulma-danger-100-l);
  --bulma-danger-30-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-30-invert-l), 1);
  --bulma-danger-35: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-35-l), 1);
  --bulma-danger-35-invert-l: var(--bulma-danger-100-l);
  --bulma-danger-35-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-35-invert-l), 1);
  --bulma-danger-40: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-40-l), 1);
  --bulma-danger-40-invert-l: var(--bulma-danger-100-l);
  --bulma-danger-40-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-40-invert-l), 1);
  --bulma-danger-45: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-45-l), 1);
  --bulma-danger-45-invert-l: var(--bulma-danger-100-l);
  --bulma-danger-45-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-45-invert-l), 1);
  --bulma-danger-50: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-50-l), 1);
  --bulma-danger-50-invert-l: var(--bulma-danger-100-l);
  --bulma-danger-50-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-50-invert-l), 1);
  --bulma-danger-55: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-55-l), 1);
  --bulma-danger-55-invert-l: var(--bulma-danger-100-l);
  --bulma-danger-55-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-55-invert-l), 1);
  --bulma-danger-60: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-60-l), 1);
  --bulma-danger-60-invert-l: var(--bulma-danger-100-l);
  --bulma-danger-60-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-60-invert-l), 1);
  --bulma-danger-65: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-65-l), 1);
  --bulma-danger-65-invert-l: var(--bulma-danger-00-l);
  --bulma-danger-65-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-65-invert-l), 1);
  --bulma-danger-70: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-70-l), 1);
  --bulma-danger-70-invert-l: var(--bulma-danger-05-l);
  --bulma-danger-70-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-70-invert-l), 1);
  --bulma-danger-75: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-75-l), 1);
  --bulma-danger-75-invert-l: var(--bulma-danger-10-l);
  --bulma-danger-75-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-75-invert-l), 1);
  --bulma-danger-80: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-80-l), 1);
  --bulma-danger-80-invert-l: var(--bulma-danger-15-l);
  --bulma-danger-80-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-80-invert-l), 1);
  --bulma-danger-85: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-85-l), 1);
  --bulma-danger-85-invert-l: var(--bulma-danger-20-l);
  --bulma-danger-85-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-85-invert-l), 1);
  --bulma-danger-90: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-90-l), 1);
  --bulma-danger-90-invert-l: var(--bulma-danger-25-l);
  --bulma-danger-90-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-90-invert-l), 1);
  --bulma-danger-95: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-95-l), 1);
  --bulma-danger-95-invert-l: var(--bulma-danger-25-l);
  --bulma-danger-95-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-95-invert-l), 1);
  --bulma-danger-100: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-100-l), 1);
  --bulma-danger-100-invert-l: var(--bulma-danger-30-l);
  --bulma-danger-100-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-100-invert-l), 1);
  --bulma-danger-invert-l: var(--bulma-danger-05-l);
  --bulma-danger-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-invert-l), 1);
  --bulma-danger-light-l: var(--bulma-danger-90-l);
  --bulma-danger-light: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-light-l), 1);
  --bulma-danger-light-invert-l: var(--bulma-danger-25-l);
  --bulma-danger-light-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-light-invert-l), 1);
  --bulma-danger-dark-l: var(--bulma-danger-10-l);
  --bulma-danger-dark: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-dark-l), 1);
  --bulma-danger-dark-invert-l: var(--bulma-danger-75-l);
  --bulma-danger-dark-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-dark-invert-l), 1);
  --bulma-danger-soft: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-soft-l), 1);
  --bulma-danger-bold: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-bold-l), 1);
  --bulma-danger-soft-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-soft-invert-l), 1);
  --bulma-danger-bold-invert: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-bold-invert-l), 1);
  --bulma-danger-on-scheme-l: 40%;
  --bulma-danger-on-scheme: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-on-scheme-l), 1);
  --bulma-black-bis: hsl(221, 14%, 9%);
  --bulma-black-ter: hsl(221, 14%, 14%);
  --bulma-grey-darker: hsl(221, 14%, 21%);
  --bulma-grey-dark: hsl(221, 14%, 29%);
  --bulma-grey: hsl(221, 14%, 48%);
  --bulma-grey-light: hsl(221, 14%, 71%);
  --bulma-grey-lighter: hsl(221, 14%, 86%);
  --bulma-white-ter: hsl(221, 14%, 96%);
  --bulma-white-bis: hsl(221, 14%, 98%);
  --bulma-shadow-h: 221deg;
  --bulma-shadow-s: 14%;
  --bulma-shadow-l: 4%;
  --bulma-size-1: 3rem;
  --bulma-size-2: 2.5rem;
  --bulma-size-3: 2rem;
  --bulma-size-4: 1.5rem;
  --bulma-size-5: 1.25rem;
  --bulma-size-6: 1rem;
  --bulma-size-7: 0.75rem;
  --bulma-scheme-main: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-scheme-main-l));
  --bulma-scheme-main-bis: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-scheme-main-bis-l));
  --bulma-scheme-main-ter: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-scheme-main-ter-l));
  --bulma-background: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-background-l));
  --bulma-background-hover: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), calc(var(--bulma-background-l) + var(--bulma-hover-background-l-delta)));
  --bulma-background-active: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), calc(var(--bulma-background-l) + var(--bulma-active-background-l-delta)));
  --bulma-border-weak: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-border-weak-l));
  --bulma-border: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-border-l));
  --bulma-border-hover: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), calc(var(--bulma-border-l) + var(--bulma-hover-border-l-delta)));
  --bulma-border-active: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), calc(var(--bulma-border-l) + var(--bulma-active-border-l-delta)));
  --bulma-text-weak: hsl(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-weak-l));
  --bulma-text: hsl(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-l));
  --bulma-text-strong: hsl(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-strong-l));
  --bulma-scheme-invert-ter: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-scheme-invert-ter-l));
  --bulma-scheme-invert-bis: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-scheme-invert-bis-l));
  --bulma-scheme-invert: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-scheme-invert-l));
  --bulma-link: hsl(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-l));
  --bulma-link-text: hsl(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-on-scheme-l));
  --bulma-link-text-hover: hsl(var(--bulma-link-h), var(--bulma-link-s), calc(var(--bulma-link-on-scheme-l) + var(--bulma-hover-color-l-delta)));
  --bulma-link-text-active: hsl(var(--bulma-link-h), var(--bulma-link-s), calc(var(--bulma-link-on-scheme-l) + var(--bulma-active-color-l-delta)));
  --bulma-focus-h: var(--bulma-link-h);
  --bulma-focus-s: var(--bulma-link-s);
  --bulma-focus-l: var(--bulma-link-l);
  --bulma-focus-offset: 1px;
  --bulma-focus-style: solid;
  --bulma-focus-width: 2px;
  --bulma-focus-shadow-size: 0 0 0 0.1875em;
  --bulma-focus-shadow-alpha: 0.25;
  --bulma-code: hsl(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-on-scheme-l));
  --bulma-code-background: var(--bulma-background);
  --bulma-pre: var(--bulma-text);
  --bulma-pre-background: var(--bulma-background);
  --bulma-shadow: 0 0.5em 1em -0.125em hsla(var(--bulma-shadow-h), var(--bulma-shadow-s), var(--bulma-shadow-l), 0.1), 0 0px 0 1px hsla(var(--bulma-shadow-h), var(--bulma-shadow-s), var(--bulma-shadow-l), 0.02);
}

[data-theme=dark],
.theme-dark {
  --bulma-white-on-scheme-l: 100%;
  --bulma-white-on-scheme: hsla(var(--bulma-white-h), var(--bulma-white-s), var(--bulma-white-on-scheme-l), 1);
  --bulma-black-on-scheme-l: 0%;
  --bulma-black-on-scheme: hsla(var(--bulma-black-h), var(--bulma-black-s), var(--bulma-black-on-scheme-l), 1);
  --bulma-light-on-scheme-l: 96%;
  --bulma-light-on-scheme: hsla(var(--bulma-light-h), var(--bulma-light-s), var(--bulma-light-on-scheme-l), 1);
  --bulma-dark-on-scheme-l: 56%;
  --bulma-dark-on-scheme: hsla(var(--bulma-dark-h), var(--bulma-dark-s), var(--bulma-dark-on-scheme-l), 1);
  --bulma-text-on-scheme-l: 54%;
  --bulma-text-on-scheme: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-on-scheme-l), 1);
  --bulma-primary-on-scheme-l: 41%;
  --bulma-primary-on-scheme: hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-on-scheme-l), 1);
  --bulma-link-on-scheme-l: 73%;
  --bulma-link-on-scheme: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-on-scheme-l), 1);
  --bulma-info-on-scheme-l: 70%;
  --bulma-info-on-scheme: hsla(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-on-scheme-l), 1);
  --bulma-success-on-scheme-l: 53%;
  --bulma-success-on-scheme: hsla(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-on-scheme-l), 1);
  --bulma-warning-on-scheme-l: 53%;
  --bulma-warning-on-scheme: hsla(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-on-scheme-l), 1);
  --bulma-danger-on-scheme-l: 70%;
  --bulma-danger-on-scheme: hsla(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-on-scheme-l), 1);
  --bulma-scheme-brightness: dark;
  --bulma-scheme-main-l: 9%;
  --bulma-scheme-main-bis-l: 11%;
  --bulma-scheme-main-ter-l: 13%;
  --bulma-soft-l: 20%;
  --bulma-bold-l: 90%;
  --bulma-soft-invert-l: 90%;
  --bulma-bold-invert-l: 20%;
  --bulma-background-l: 14%;
  --bulma-border-weak-l: 21%;
  --bulma-border-l: 24%;
  --bulma-text-weak-l: 53%;
  --bulma-text-l: 71%;
  --bulma-text-strong-l: 93%;
  --bulma-text-title-l: 100%;
  --bulma-hover-background-l-delta: 5%;
  --bulma-active-background-l-delta: 10%;
  --bulma-hover-border-l-delta: 10%;
  --bulma-active-border-l-delta: 20%;
  --bulma-hover-color-l-delta: 5%;
  --bulma-active-color-l-delta: 10%;
  --bulma-shadow-h: 0deg;
  --bulma-shadow-s: 0%;
  --bulma-shadow-l: 100%;
  --bulma-scheme-main: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-scheme-main-l));
  --bulma-scheme-main-bis: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-scheme-main-bis-l));
  --bulma-scheme-main-ter: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-scheme-main-ter-l));
  --bulma-background: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-background-l));
  --bulma-background-hover: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), calc(var(--bulma-background-l) + var(--bulma-hover-background-l-delta)));
  --bulma-background-active: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), calc(var(--bulma-background-l) + var(--bulma-active-background-l-delta)));
  --bulma-border-weak: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-border-weak-l));
  --bulma-border: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-border-l));
  --bulma-border-hover: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), calc(var(--bulma-border-l) + var(--bulma-hover-border-l-delta)));
  --bulma-border-active: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), calc(var(--bulma-border-l) + var(--bulma-active-border-l-delta)));
  --bulma-text-weak: hsl(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-weak-l));
  --bulma-text: hsl(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-l));
  --bulma-text-strong: hsl(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-strong-l));
  --bulma-scheme-invert-ter: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-scheme-invert-ter-l));
  --bulma-scheme-invert-bis: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-scheme-invert-bis-l));
  --bulma-scheme-invert: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-scheme-invert-l));
  --bulma-link: hsl(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-l));
  --bulma-link-text: hsl(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-on-scheme-l));
  --bulma-link-text-hover: hsl(var(--bulma-link-h), var(--bulma-link-s), calc(var(--bulma-link-on-scheme-l) + var(--bulma-hover-color-l-delta)));
  --bulma-link-text-active: hsl(var(--bulma-link-h), var(--bulma-link-s), calc(var(--bulma-link-on-scheme-l) + var(--bulma-active-color-l-delta)));
  --bulma-focus-h: var(--bulma-link-h);
  --bulma-focus-s: var(--bulma-link-s);
  --bulma-focus-l: var(--bulma-link-l);
  --bulma-focus-offset: 1px;
  --bulma-focus-style: solid;
  --bulma-focus-width: 2px;
  --bulma-focus-shadow-size: 0 0 0 0.1875em;
  --bulma-focus-shadow-alpha: 0.25;
  --bulma-code: hsl(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-on-scheme-l));
  --bulma-code-background: var(--bulma-background);
  --bulma-pre: var(--bulma-text);
  --bulma-pre-background: var(--bulma-background);
  --bulma-shadow: 0 0.5em 1em -0.125em hsla(var(--bulma-shadow-h), var(--bulma-shadow-s), var(--bulma-shadow-l), 0.1), 0 0px 0 1px hsla(var(--bulma-shadow-h), var(--bulma-shadow-s), var(--bulma-shadow-l), 0.02);
}

/* Bulma Base */
/*! minireset.css v0.0.6 | MIT License | github.com/jgthms/minireset.css */
html,
body,
p,
ol,
ul,
li,
dl,
dt,
dd,
blockquote,
figure,
fieldset,
legend,
textarea,
pre,
iframe,
hr,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal;
}

ul {
  list-style: none;
}

button,
input,
select,
textarea {
  margin: 0;
}

html {
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: inherit;
}

img,
video {
  height: auto;
  max-width: 100%;
}

iframe {
  border: 0;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

td,
th {
  padding: 0;
}
td:not([align]),
th:not([align]) {
  text-align: inherit;
}

:root {
  --bulma-body-background-color: var(--bulma-scheme-main);
  --bulma-body-size: 1em;
  --bulma-body-min-width: 300px;
  --bulma-body-rendering: optimizeLegibility;
  --bulma-body-family: var(--bulma-family-primary);
  --bulma-body-overflow-x: hidden;
  --bulma-body-overflow-y: scroll;
  --bulma-body-color: var(--bulma-text);
  --bulma-body-font-size: 1em;
  --bulma-body-weight: var(--bulma-weight-normal);
  --bulma-body-line-height: 1.5;
  --bulma-code-family: var(--bulma-family-code);
  --bulma-code-padding: 0.25em 0.5em 0.25em;
  --bulma-code-weight: normal;
  --bulma-code-size: 0.875em;
  --bulma-small-font-size: 0.875em;
  --bulma-hr-background-color: var(--bulma-background);
  --bulma-hr-height: 2px;
  --bulma-hr-margin: 1.5rem 0;
  --bulma-strong-color: var(--bulma-text-strong);
  --bulma-strong-weight: var(--bulma-weight-semibold);
  --bulma-pre-font-size: 0.875em;
  --bulma-pre-padding: 1.25rem 1.5rem;
  --bulma-pre-code-font-size: 1em;
}

html {
  background-color: var(--bulma-body-background-color);
  font-size: var(--bulma-body-size);
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  min-width: var(--bulma-body-min-width);
  overflow-x: var(--bulma-body-overflow-x);
  overflow-y: var(--bulma-body-overflow-y);
  text-rendering: var(--bulma-body-rendering);
  text-size-adjust: 100%;
}

article,
aside,
figure,
footer,
header,
hgroup,
section {
  display: block;
}

body,
button,
input,
optgroup,
select,
textarea {
  font-family: var(--bulma-body-family);
}

code,
pre {
  -moz-osx-font-smoothing: auto;
  -webkit-font-smoothing: auto;
  font-family: var(--bulma-code-family);
}

body {
  color: var(--bulma-body-color);
  font-size: var(--bulma-body-font-size);
  font-weight: var(--bulma-body-weight);
  line-height: var(--bulma-body-line-height);
}

a,
button {
  cursor: pointer;
}
a:focus-visible,
button:focus-visible {
  outline-color: hsl(var(--bulma-focus-h), var(--bulma-focus-s), var(--bulma-focus-l));
  outline-offset: var(--bulma-focus-offset);
  outline-style: var(--bulma-focus-style);
  outline-width: var(--bulma-focus-width);
}
a:focus-visible:active,
button:focus-visible:active {
  outline-width: 1px;
}
a:active,
button:active {
  outline-width: 1px;
}

a {
  color: var(--bulma-link-text);
  cursor: pointer;
  text-decoration: none;
  transition-duration: var(--bulma-duration);
  transition-property: background-color, border-color, color;
}
a strong {
  color: currentColor;
}

button {
  appearance: none;
  background: none;
  border: none;
  color: inherit;
  font-family: inherit;
  font-size: 1em;
  margin: 0;
  padding: 0;
  transition-duration: var(--bulma-duration);
  transition-property: background-color, border-color, color;
}

code {
  background-color: var(--bulma-code-background);
  border-radius: 0.5em;
  color: var(--bulma-code);
  font-size: var(--bulma-code-size);
  font-weight: var(--bulma-code-weight);
  padding: var(--bulma-code-padding);
}

hr {
  background-color: var(--bulma-hr-background-color);
  border: none;
  display: block;
  height: var(--bulma-hr-height);
  margin: var(--bulma-hr-margin);
}

img {
  height: auto;
  max-width: 100%;
}

input[type=checkbox],
input[type=radio] {
  vertical-align: baseline;
}

small {
  font-size: var(--bulma-small-font-size);
}

span {
  font-style: inherit;
  font-weight: inherit;
}

strong {
  color: var(--bulma-strong-color);
  font-weight: var(--bulma-strong-weight);
}

svg {
  height: auto;
  width: auto;
}

fieldset {
  border: none;
}

pre {
  -webkit-overflow-scrolling: touch;
  background-color: var(--bulma-pre-background);
  color: var(--bulma-pre);
  font-size: var(--bulma-pre-font-size);
  overflow-x: auto;
  padding: var(--bulma-pre-padding);
  white-space: pre;
  word-wrap: normal;
}
pre code {
  background-color: transparent;
  color: currentColor;
  font-size: var(--bulma-pre-code-font-size);
  padding: 0;
}

table td,
table th {
  vertical-align: top;
}
table td:not([align]),
table th:not([align]) {
  text-align: inherit;
}
table th {
  color: var(--bulma-text-strong);
}

@keyframes spinAround {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
@keyframes pulsate {
  50% {
    opacity: 0.5;
  }
}
/* Bulma Elements */
.navbar-link:not(.is-arrowless)::after, .select:not(.is-multiple):not(.is-loading)::after {
  border: 0.125em solid var(--bulma-link);
  border-right: 0;
  border-top: 0;
  content: " ";
  display: block;
  height: 0.625em;
  margin-top: -0.4375em;
  pointer-events: none;
  position: absolute;
  top: 50%;
  transform: rotate(-45deg);
  transform-origin: center;
  transition-duration: var(--bulma-duration);
  transition-property: border-color;
  width: 0.625em;
}

.skeleton-block:not(:last-child), .media:not(:last-child), .level:not(:last-child), .fixed-grid:not(:last-child), .grid:not(:last-child), .tabs:not(:last-child), .pagination:not(:last-child), .message:not(:last-child), .card:not(:last-child), .breadcrumb:not(:last-child), .field:not(:last-child), .file:not(:last-child), .title:not(:last-child),
.subtitle:not(:last-child), .tags:not(:last-child), .table:not(:last-child), .table-container:not(:last-child), .progress:not(:last-child), .notification:not(:last-child), .content:not(:last-child), .buttons:not(:last-child), .box:not(:last-child), .block:not(:last-child) {
  margin-bottom: var(--bulma-block-spacing);
}

.pagination-previous,
.pagination-next,
.pagination-link,
.pagination-ellipsis, .file-cta,
.file-name, .select select, .input, .textarea, .button {
  align-items: center;
  appearance: none;
  border-color: transparent;
  border-style: solid;
  border-width: var(--bulma-control-border-width);
  border-radius: var(--bulma-control-radius);
  box-shadow: none;
  display: inline-flex;
  font-size: var(--bulma-control-size);
  height: var(--bulma-control-height);
  justify-content: flex-start;
  line-height: var(--bulma-control-line-height);
  padding-bottom: var(--bulma-control-padding-vertical);
  padding-left: var(--bulma-control-padding-horizontal);
  padding-right: var(--bulma-control-padding-horizontal);
  padding-top: var(--bulma-control-padding-vertical);
  position: relative;
  transition-duration: var(--bulma-duration);
  transition-property: background-color, border-color, box-shadow, color;
  vertical-align: top;
}
.pagination-previous:focus,
.pagination-next:focus,
.pagination-link:focus,
.pagination-ellipsis:focus, .file-cta:focus,
.file-name:focus, .select select:focus, .input:focus, .textarea:focus, .button:focus, .pagination-previous:focus-visible,
.pagination-next:focus-visible,
.pagination-link:focus-visible,
.pagination-ellipsis:focus-visible, .file-cta:focus-visible,
.file-name:focus-visible, .select select:focus-visible, .input:focus-visible, .textarea:focus-visible, .button:focus-visible, .pagination-previous:focus-within,
.pagination-next:focus-within,
.pagination-link:focus-within,
.pagination-ellipsis:focus-within, .file-cta:focus-within,
.file-name:focus-within, .select select:focus-within, .input:focus-within, .textarea:focus-within, .button:focus-within, .is-focused.pagination-previous,
.is-focused.pagination-next,
.is-focused.pagination-link,
.is-focused.pagination-ellipsis, .is-focused.file-cta,
.is-focused.file-name, .select select.is-focused, .is-focused.input, .is-focused.textarea, .is-focused.button, .pagination-previous:active,
.pagination-next:active,
.pagination-link:active,
.pagination-ellipsis:active, .file-cta:active,
.file-name:active, .select select:active, .input:active, .textarea:active, .button:active, .is-active.pagination-previous,
.is-active.pagination-next,
.is-active.pagination-link,
.is-active.pagination-ellipsis, .is-active.file-cta,
.is-active.file-name, .select select.is-active, .is-active.input, .is-active.textarea, .is-active.button {
  outline: none;
}
[disabled].pagination-previous,
[disabled].pagination-next,
[disabled].pagination-link,
[disabled].pagination-ellipsis, [disabled].file-cta,
[disabled].file-name, .select select[disabled], [disabled].input, [disabled].textarea, [disabled].button, fieldset[disabled] .pagination-previous,
fieldset[disabled] .pagination-next,
fieldset[disabled] .pagination-link,
fieldset[disabled] .pagination-ellipsis, fieldset[disabled] .file-cta,
fieldset[disabled] .file-name, fieldset[disabled] .select select, .select fieldset[disabled] select, fieldset[disabled] .input, fieldset[disabled] .textarea, fieldset[disabled] .button {
  cursor: not-allowed;
}

.modal-close {
  --bulma-delete-dimensions: 1.25rem;
  --bulma-delete-background-l: 0%;
  --bulma-delete-background-alpha: 0.5;
  --bulma-delete-color: var(--bulma-white);
  appearance: none;
  background-color: hsla(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-delete-background-l), var(--bulma-delete-background-alpha));
  border: none;
  border-radius: var(--bulma-radius-rounded);
  cursor: pointer;
  pointer-events: auto;
  display: inline-flex;
  flex-grow: 0;
  flex-shrink: 0;
  font-size: 1em;
  height: var(--bulma-delete-dimensions);
  max-height: var(--bulma-delete-dimensions);
  max-width: var(--bulma-delete-dimensions);
  min-height: var(--bulma-delete-dimensions);
  min-width: var(--bulma-delete-dimensions);
  outline: none;
  position: relative;
  vertical-align: top;
  width: var(--bulma-delete-dimensions);
}
.modal-close::before, .modal-close::after {
  background-color: var(--bulma-delete-color);
  content: "";
  display: block;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translateX(-50%) translateY(-50%) rotate(45deg);
  transform-origin: center center;
}
.modal-close::before {
  height: 2px;
  width: 50%;
}
.modal-close::after {
  height: 50%;
  width: 2px;
}
.modal-close:hover, .modal-close:focus {
  --bulma-delete-background-alpha: 0.4;
}
.modal-close:active {
  --bulma-delete-background-alpha: 0.5;
}
.is-small.modal-close {
  --bulma-delete-dimensions: 1rem;
}
.is-medium.modal-close {
  --bulma-delete-dimensions: 1.5rem;
}
.is-large.modal-close {
  --bulma-delete-dimensions: 2rem;
}

.control.is-loading::after, .select.is-loading::after, .button.is-loading::after {
  animation: spinAround 500ms infinite linear;
  border: 2px solid var(--bulma-loading-color);
  border-radius: var(--bulma-radius-rounded);
  border-right-color: transparent;
  border-top-color: transparent;
  content: "";
  display: block;
  height: 1em;
  position: relative;
  width: 1em;
}

.is-overlay, .hero-video, .modal, .modal-background {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}

.navbar-burger, .menu-list a,
.menu-list button,
.menu-list .menu-item {
  appearance: none;
  background: none;
  border: none;
  color: inherit;
  font-family: inherit;
  font-size: 1em;
  margin: 0;
  padding: 0;
}

.is-unselectable, .tabs, .pagination-previous,
.pagination-next,
.pagination-link,
.pagination-ellipsis, .breadcrumb, .file, .button {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.box {
  --bulma-box-background-color: var(--bulma-scheme-main);
  --bulma-box-color: var(--bulma-text);
  --bulma-box-radius: var(--bulma-radius-large);
  --bulma-box-shadow: var(--bulma-shadow);
  --bulma-box-padding: 1.25rem;
  --bulma-box-link-hover-shadow: 0 0.5em 1em -0.125em hsla(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-scheme-invert-l), 0.1), 0 0 0 1px var(--bulma-link);
  --bulma-box-link-active-shadow: inset 0 1px 2px hsla(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-scheme-invert-l), 0.2), 0 0 0 1px var(--bulma-link);
}

.box {
  background-color: var(--bulma-box-background-color);
  border-radius: var(--bulma-box-radius);
  box-shadow: var(--bulma-box-shadow);
  color: var(--bulma-box-color);
  display: block;
  padding: var(--bulma-box-padding);
}

a.box:hover, a.box:focus {
  box-shadow: var(--bulma-box-link-hover-shadow);
}
a.box:active {
  box-shadow: var(--bulma-box-link-active-shadow);
}

.button {
  --bulma-button-family: false;
  --bulma-button-weight: var(--bulma-weight-medium);
  --bulma-button-border-color: var(--bulma-border);
  --bulma-button-border-style: solid;
  --bulma-button-border-width: var(--bulma-control-border-width);
  --bulma-button-padding-vertical: 0.5em;
  --bulma-button-padding-horizontal: 1em;
  --bulma-button-focus-border-color: var(--bulma-link-focus-border);
  --bulma-button-focus-box-shadow-size: 0 0 0 0.125em;
  --bulma-button-focus-box-shadow-color: hsla(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-on-scheme-l), 0.25);
  --bulma-button-active-color: var(--bulma-link-active);
  --bulma-button-active-border-color: var(--bulma-link-active-border);
  --bulma-button-text-color: var(--bulma-text);
  --bulma-button-text-decoration: underline;
  --bulma-button-text-hover-background-color: var(--bulma-background);
  --bulma-button-text-hover-color: var(--bulma-text-strong);
  --bulma-button-ghost-background: none;
  --bulma-button-ghost-border-color: transparent;
  --bulma-button-ghost-color: var(--bulma-link-text);
  --bulma-button-ghost-decoration: none;
  --bulma-button-ghost-hover-color: var(--bulma-link);
  --bulma-button-ghost-hover-decoration: underline;
  --bulma-button-disabled-background-color: var(--bulma-scheme-main);
  --bulma-button-disabled-border-color: var(--bulma-border);
  --bulma-button-disabled-shadow: none;
  --bulma-button-disabled-opacity: 0.5;
  --bulma-button-static-color: var(--bulma-text-weak);
  --bulma-button-static-background-color: var(--bulma-scheme-main-ter);
  --bulma-button-static-border-color: var(--bulma-border);
}

.button {
  --bulma-button-h: var(--bulma-scheme-h);
  --bulma-button-s: var(--bulma-scheme-s);
  --bulma-button-l: var(--bulma-scheme-main-l);
  --bulma-button-background-l: var(--bulma-scheme-main-l);
  --bulma-button-background-l-delta: 0%;
  --bulma-button-hover-background-l-delta: var(--bulma-hover-background-l-delta);
  --bulma-button-active-background-l-delta: var(--bulma-active-background-l-delta);
  --bulma-button-color-l: var(--bulma-text-strong-l);
  --bulma-button-border-l: var(--bulma-border-l);
  --bulma-button-border-l-delta: 0%;
  --bulma-button-hover-border-l-delta: var(--bulma-hover-border-l-delta);
  --bulma-button-active-border-l-delta: var(--bulma-active-border-l-delta);
  --bulma-button-focus-border-l-delta: var(--bulma-focus-border-l-delta);
  --bulma-button-outer-shadow-h: 0;
  --bulma-button-outer-shadow-s: 0%;
  --bulma-button-outer-shadow-l: 20%;
  --bulma-button-outer-shadow-a: 0.05;
  --bulma-loading-color: hsl(var(--bulma-button-h), var(--bulma-button-s), var(--bulma-button-color-l));
  background-color: hsl(var(--bulma-button-h), var(--bulma-button-s), calc(var(--bulma-button-background-l) + var(--bulma-button-background-l-delta)));
  border-color: hsl(var(--bulma-button-h), var(--bulma-button-s), calc(var(--bulma-button-border-l) + var(--bulma-button-border-l-delta)));
  border-style: var(--bulma-button-border-style);
  border-width: var(--bulma-button-border-width);
  box-shadow: 0px 0.0625em 0.125em hsla(var(--bulma-button-outer-shadow-h), var(--bulma-button-outer-shadow-s), var(--bulma-button-outer-shadow-l), var(--bulma-button-outer-shadow-a)), 0px 0.125em 0.25em hsla(var(--bulma-button-outer-shadow-h), var(--bulma-button-outer-shadow-s), var(--bulma-button-outer-shadow-l), var(--bulma-button-outer-shadow-a));
  color: hsl(var(--bulma-button-h), var(--bulma-button-s), var(--bulma-button-color-l));
  cursor: pointer;
  font-weight: var(--bulma-button-weight);
  height: auto;
  justify-content: center;
  padding-bottom: calc(var(--bulma-button-padding-vertical) - var(--bulma-button-border-width));
  padding-left: calc(var(--bulma-button-padding-horizontal) - var(--bulma-button-border-width));
  padding-right: calc(var(--bulma-button-padding-horizontal) - var(--bulma-button-border-width));
  padding-top: calc(var(--bulma-button-padding-vertical) - var(--bulma-button-border-width));
  text-align: center;
  white-space: nowrap;
}
.button strong {
  color: inherit;
}
.button .icon, .button .icon.is-small, .button .icon.is-medium, .button .icon.is-large {
  height: 1.5em;
  width: 1.5em;
}
.button .icon:first-child:not(:last-child) {
  margin-inline-start: calc(-0.5 * var(--bulma-button-padding-horizontal));
  margin-inline-end: calc(var(--bulma-button-padding-horizontal) * 0.25);
}
.button .icon:last-child:not(:first-child) {
  margin-inline-start: calc(var(--bulma-button-padding-horizontal) * 0.25);
  margin-inline-end: calc(-0.5 * var(--bulma-button-padding-horizontal));
}
.button .icon:first-child:last-child {
  margin-inline-start: calc(-0.5 * var(--bulma-button-padding-horizontal));
  margin-inline-end: calc(-0.5 * var(--bulma-button-padding-horizontal));
}
.button:hover, .button.is-hovered {
  --bulma-button-background-l-delta: var(--bulma-button-hover-background-l-delta);
  --bulma-button-border-l-delta: var(--bulma-button-hover-border-l-delta);
}
.button:focus-visible, .button.is-focused {
  --bulma-button-border-width: 1px;
  border-color: hsl(var(--bulma-focus-h), var(--bulma-focus-s), var(--bulma-focus-l));
  box-shadow: var(--bulma-focus-shadow-size) hsla(var(--bulma-focus-h), var(--bulma-focus-s), var(--bulma-focus-l), var(--bulma-focus-shadow-alpha));
}
.button:active, .button.is-active {
  --bulma-button-background-l-delta: var(--bulma-button-active-background-l-delta);
  --bulma-button-border-l-delta: var(--bulma-button-active-border-l-delta);
  --bulma-button-outer-shadow-a: 0;
}
.button[disabled], fieldset[disabled] .button {
  background-color: var(--bulma-button-disabled-background-color);
  border-color: var(--bulma-button-disabled-border-color);
  box-shadow: var(--bulma-button-disabled-shadow);
  opacity: var(--bulma-button-disabled-opacity);
}
.button.is-white {
  --bulma-button-h: var(--bulma-white-h);
  --bulma-button-s: var(--bulma-white-s);
  --bulma-button-l: var(--bulma-white-l);
  --bulma-button-background-l: var(--bulma-white-l);
  --bulma-button-border-l: var(--bulma-white-l);
  --bulma-button-border-width: 0px;
  --bulma-button-color-l: var(--bulma-white-invert-l);
  --bulma-button-outer-shadow-a: 0;
}
.button.is-white:focus-visible, .button.is-white.is-focused {
  --bulma-button-border-width: 1px;
}
.button.is-white.is-soft {
  --bulma-button-background-l: var(--bulma-soft-l);
  --bulma-button-color-l: var(--bulma-soft-invert-l);
}
.button.is-white.is-bold {
  --bulma-button-background-l: var(--bulma-bold-l);
  --bulma-button-color-l: var(--bulma-bold-invert-l);
}
.button.is-white[disabled], fieldset[disabled] .button.is-white {
  background-color: var(--bulma-white);
  border-color: var(--bulma-white);
  box-shadow: none;
}
.button.is-black {
  --bulma-button-h: var(--bulma-black-h);
  --bulma-button-s: var(--bulma-black-s);
  --bulma-button-l: var(--bulma-black-l);
  --bulma-button-background-l: var(--bulma-black-l);
  --bulma-button-border-l: var(--bulma-black-l);
  --bulma-button-border-width: 0px;
  --bulma-button-color-l: var(--bulma-black-invert-l);
  --bulma-button-outer-shadow-a: 0;
}
.button.is-black:focus-visible, .button.is-black.is-focused {
  --bulma-button-border-width: 1px;
}
.button.is-black.is-soft {
  --bulma-button-background-l: var(--bulma-soft-l);
  --bulma-button-color-l: var(--bulma-soft-invert-l);
}
.button.is-black.is-bold {
  --bulma-button-background-l: var(--bulma-bold-l);
  --bulma-button-color-l: var(--bulma-bold-invert-l);
}
.button.is-black[disabled], fieldset[disabled] .button.is-black {
  background-color: var(--bulma-black);
  border-color: var(--bulma-black);
  box-shadow: none;
}
.button.is-light {
  --bulma-button-h: var(--bulma-light-h);
  --bulma-button-s: var(--bulma-light-s);
  --bulma-button-l: var(--bulma-light-l);
  --bulma-button-background-l: var(--bulma-light-l);
  --bulma-button-border-l: var(--bulma-light-l);
  --bulma-button-border-width: 0px;
  --bulma-button-color-l: var(--bulma-light-invert-l);
  --bulma-button-outer-shadow-a: 0;
}
.button.is-light:focus-visible, .button.is-light.is-focused {
  --bulma-button-border-width: 1px;
}
.button.is-light.is-soft {
  --bulma-button-background-l: var(--bulma-soft-l);
  --bulma-button-color-l: var(--bulma-soft-invert-l);
}
.button.is-light.is-bold {
  --bulma-button-background-l: var(--bulma-bold-l);
  --bulma-button-color-l: var(--bulma-bold-invert-l);
}
.button.is-light[disabled], fieldset[disabled] .button.is-light {
  background-color: var(--bulma-light);
  border-color: var(--bulma-light);
  box-shadow: none;
}
.button.is-dark {
  --bulma-button-h: var(--bulma-dark-h);
  --bulma-button-s: var(--bulma-dark-s);
  --bulma-button-l: var(--bulma-dark-l);
  --bulma-button-background-l: var(--bulma-dark-l);
  --bulma-button-border-l: var(--bulma-dark-l);
  --bulma-button-border-width: 0px;
  --bulma-button-color-l: var(--bulma-dark-invert-l);
  --bulma-button-outer-shadow-a: 0;
}
.button.is-dark:focus-visible, .button.is-dark.is-focused {
  --bulma-button-border-width: 1px;
}
.button.is-dark.is-soft {
  --bulma-button-background-l: var(--bulma-soft-l);
  --bulma-button-color-l: var(--bulma-soft-invert-l);
}
.button.is-dark.is-bold {
  --bulma-button-background-l: var(--bulma-bold-l);
  --bulma-button-color-l: var(--bulma-bold-invert-l);
}
.button.is-dark[disabled], fieldset[disabled] .button.is-dark {
  background-color: var(--bulma-dark);
  border-color: var(--bulma-dark);
  box-shadow: none;
}
.button.is-text {
  --bulma-button-h: var(--bulma-text-h);
  --bulma-button-s: var(--bulma-text-s);
  --bulma-button-l: var(--bulma-text-l);
  --bulma-button-background-l: var(--bulma-text-l);
  --bulma-button-border-l: var(--bulma-text-l);
  --bulma-button-border-width: 0px;
  --bulma-button-color-l: var(--bulma-text-invert-l);
  --bulma-button-outer-shadow-a: 0;
}
.button.is-text:focus-visible, .button.is-text.is-focused {
  --bulma-button-border-width: 1px;
}
.button.is-text.is-light {
  --bulma-button-background-l: var(--bulma-light-l);
  --bulma-button-color-l: var(--bulma-text-light-invert-l);
}
.button.is-text.is-dark {
  --bulma-button-background-l: var(--bulma-dark-l);
  --bulma-button-color-l: var(--bulma-text-dark-invert-l);
}
.button.is-text.is-soft {
  --bulma-button-background-l: var(--bulma-soft-l);
  --bulma-button-color-l: var(--bulma-soft-invert-l);
}
.button.is-text.is-bold {
  --bulma-button-background-l: var(--bulma-bold-l);
  --bulma-button-color-l: var(--bulma-bold-invert-l);
}
.button.is-text[disabled], fieldset[disabled] .button.is-text {
  background-color: var(--bulma-text);
  border-color: var(--bulma-text);
  box-shadow: none;
}
.button.is-primary {
  --bulma-button-h: var(--bulma-primary-h);
  --bulma-button-s: var(--bulma-primary-s);
  --bulma-button-l: var(--bulma-primary-l);
  --bulma-button-background-l: var(--bulma-primary-l);
  --bulma-button-border-l: var(--bulma-primary-l);
  --bulma-button-border-width: 0px;
  --bulma-button-color-l: var(--bulma-primary-invert-l);
  --bulma-button-outer-shadow-a: 0;
}
.button.is-primary:focus-visible, .button.is-primary.is-focused {
  --bulma-button-border-width: 1px;
}
.button.is-primary.is-light {
  --bulma-button-background-l: var(--bulma-light-l);
  --bulma-button-color-l: var(--bulma-primary-light-invert-l);
}
.button.is-primary.is-dark {
  --bulma-button-background-l: var(--bulma-dark-l);
  --bulma-button-color-l: var(--bulma-primary-dark-invert-l);
}
.button.is-primary.is-soft {
  --bulma-button-background-l: var(--bulma-soft-l);
  --bulma-button-color-l: var(--bulma-soft-invert-l);
}
.button.is-primary.is-bold {
  --bulma-button-background-l: var(--bulma-bold-l);
  --bulma-button-color-l: var(--bulma-bold-invert-l);
}
.button.is-primary[disabled], fieldset[disabled] .button.is-primary {
  background-color: var(--bulma-primary);
  border-color: var(--bulma-primary);
  box-shadow: none;
}
.button.is-link {
  --bulma-button-h: var(--bulma-link-h);
  --bulma-button-s: var(--bulma-link-s);
  --bulma-button-l: var(--bulma-link-l);
  --bulma-button-background-l: var(--bulma-link-l);
  --bulma-button-border-l: var(--bulma-link-l);
  --bulma-button-border-width: 0px;
  --bulma-button-color-l: var(--bulma-link-invert-l);
  --bulma-button-outer-shadow-a: 0;
}
.button.is-link:focus-visible, .button.is-link.is-focused {
  --bulma-button-border-width: 1px;
}
.button.is-link.is-light {
  --bulma-button-background-l: var(--bulma-light-l);
  --bulma-button-color-l: var(--bulma-link-light-invert-l);
}
.button.is-link.is-dark {
  --bulma-button-background-l: var(--bulma-dark-l);
  --bulma-button-color-l: var(--bulma-link-dark-invert-l);
}
.button.is-link.is-soft {
  --bulma-button-background-l: var(--bulma-soft-l);
  --bulma-button-color-l: var(--bulma-soft-invert-l);
}
.button.is-link.is-bold {
  --bulma-button-background-l: var(--bulma-bold-l);
  --bulma-button-color-l: var(--bulma-bold-invert-l);
}
.button.is-link[disabled], fieldset[disabled] .button.is-link {
  background-color: var(--bulma-link);
  border-color: var(--bulma-link);
  box-shadow: none;
}
.button.is-info {
  --bulma-button-h: var(--bulma-info-h);
  --bulma-button-s: var(--bulma-info-s);
  --bulma-button-l: var(--bulma-info-l);
  --bulma-button-background-l: var(--bulma-info-l);
  --bulma-button-border-l: var(--bulma-info-l);
  --bulma-button-border-width: 0px;
  --bulma-button-color-l: var(--bulma-info-invert-l);
  --bulma-button-outer-shadow-a: 0;
}
.button.is-info:focus-visible, .button.is-info.is-focused {
  --bulma-button-border-width: 1px;
}
.button.is-info.is-light {
  --bulma-button-background-l: var(--bulma-light-l);
  --bulma-button-color-l: var(--bulma-info-light-invert-l);
}
.button.is-info.is-dark {
  --bulma-button-background-l: var(--bulma-dark-l);
  --bulma-button-color-l: var(--bulma-info-dark-invert-l);
}
.button.is-info.is-soft {
  --bulma-button-background-l: var(--bulma-soft-l);
  --bulma-button-color-l: var(--bulma-soft-invert-l);
}
.button.is-info.is-bold {
  --bulma-button-background-l: var(--bulma-bold-l);
  --bulma-button-color-l: var(--bulma-bold-invert-l);
}
.button.is-info[disabled], fieldset[disabled] .button.is-info {
  background-color: var(--bulma-info);
  border-color: var(--bulma-info);
  box-shadow: none;
}
.button.is-success {
  --bulma-button-h: var(--bulma-success-h);
  --bulma-button-s: var(--bulma-success-s);
  --bulma-button-l: var(--bulma-success-l);
  --bulma-button-background-l: var(--bulma-success-l);
  --bulma-button-border-l: var(--bulma-success-l);
  --bulma-button-border-width: 0px;
  --bulma-button-color-l: var(--bulma-success-invert-l);
  --bulma-button-outer-shadow-a: 0;
}
.button.is-success:focus-visible, .button.is-success.is-focused {
  --bulma-button-border-width: 1px;
}
.button.is-success.is-light {
  --bulma-button-background-l: var(--bulma-light-l);
  --bulma-button-color-l: var(--bulma-success-light-invert-l);
}
.button.is-success.is-dark {
  --bulma-button-background-l: var(--bulma-dark-l);
  --bulma-button-color-l: var(--bulma-success-dark-invert-l);
}
.button.is-success.is-soft {
  --bulma-button-background-l: var(--bulma-soft-l);
  --bulma-button-color-l: var(--bulma-soft-invert-l);
}
.button.is-success.is-bold {
  --bulma-button-background-l: var(--bulma-bold-l);
  --bulma-button-color-l: var(--bulma-bold-invert-l);
}
.button.is-success[disabled], fieldset[disabled] .button.is-success {
  background-color: var(--bulma-success);
  border-color: var(--bulma-success);
  box-shadow: none;
}
.button.is-warning {
  --bulma-button-h: var(--bulma-warning-h);
  --bulma-button-s: var(--bulma-warning-s);
  --bulma-button-l: var(--bulma-warning-l);
  --bulma-button-background-l: var(--bulma-warning-l);
  --bulma-button-border-l: var(--bulma-warning-l);
  --bulma-button-border-width: 0px;
  --bulma-button-color-l: var(--bulma-warning-invert-l);
  --bulma-button-outer-shadow-a: 0;
}
.button.is-warning:focus-visible, .button.is-warning.is-focused {
  --bulma-button-border-width: 1px;
}
.button.is-warning.is-light {
  --bulma-button-background-l: var(--bulma-light-l);
  --bulma-button-color-l: var(--bulma-warning-light-invert-l);
}
.button.is-warning.is-dark {
  --bulma-button-background-l: var(--bulma-dark-l);
  --bulma-button-color-l: var(--bulma-warning-dark-invert-l);
}
.button.is-warning.is-soft {
  --bulma-button-background-l: var(--bulma-soft-l);
  --bulma-button-color-l: var(--bulma-soft-invert-l);
}
.button.is-warning.is-bold {
  --bulma-button-background-l: var(--bulma-bold-l);
  --bulma-button-color-l: var(--bulma-bold-invert-l);
}
.button.is-warning[disabled], fieldset[disabled] .button.is-warning {
  background-color: var(--bulma-warning);
  border-color: var(--bulma-warning);
  box-shadow: none;
}
.button.is-danger {
  --bulma-button-h: var(--bulma-danger-h);
  --bulma-button-s: var(--bulma-danger-s);
  --bulma-button-l: var(--bulma-danger-l);
  --bulma-button-background-l: var(--bulma-danger-l);
  --bulma-button-border-l: var(--bulma-danger-l);
  --bulma-button-border-width: 0px;
  --bulma-button-color-l: var(--bulma-danger-invert-l);
  --bulma-button-outer-shadow-a: 0;
}
.button.is-danger:focus-visible, .button.is-danger.is-focused {
  --bulma-button-border-width: 1px;
}
.button.is-danger.is-light {
  --bulma-button-background-l: var(--bulma-light-l);
  --bulma-button-color-l: var(--bulma-danger-light-invert-l);
}
.button.is-danger.is-dark {
  --bulma-button-background-l: var(--bulma-dark-l);
  --bulma-button-color-l: var(--bulma-danger-dark-invert-l);
}
.button.is-danger.is-soft {
  --bulma-button-background-l: var(--bulma-soft-l);
  --bulma-button-color-l: var(--bulma-soft-invert-l);
}
.button.is-danger.is-bold {
  --bulma-button-background-l: var(--bulma-bold-l);
  --bulma-button-color-l: var(--bulma-bold-invert-l);
}
.button.is-danger[disabled], fieldset[disabled] .button.is-danger {
  background-color: var(--bulma-danger);
  border-color: var(--bulma-danger);
  box-shadow: none;
}
.button.is-outlined {
  --bulma-button-border-width: max(1px, 0.0625em);
  background-color: transparent;
  border-color: hsl(var(--bulma-button-h), var(--bulma-button-s), var(--bulma-button-l));
  color: hsl(var(--bulma-button-h), var(--bulma-button-s), var(--bulma-button-l));
}
.button.is-outlined:hover {
  --bulma-button-border-width: max(2px, 0.125em);
  --bulma-button-outer-shadow-alpha: 1;
}
.button.is-inverted {
  background-color: hsl(var(--bulma-button-h), var(--bulma-button-s), calc(var(--bulma-button-color-l) + var(--bulma-button-background-l-delta)));
  color: hsl(var(--bulma-button-h), var(--bulma-button-s), var(--bulma-button-background-l));
}
.button.is-text {
  background-color: transparent;
  border-color: transparent;
  color: var(--bulma-button-text-color);
  text-decoration: var(--bulma-button-text-decoration);
}
.button.is-text:hover, .button.is-text.is-hovered {
  background-color: var(--bulma-button-text-hover-background-color);
  color: var(--bulma-button-text-hover-color);
}
.button.is-text:active, .button.is-text.is-active {
  color: var(--bulma-button-text-hover-color);
}
.button.is-text[disabled], fieldset[disabled] .button.is-text {
  background-color: transparent;
  border-color: transparent;
  box-shadow: none;
}
.button.is-ghost {
  background: var(--bulma-button-ghost-background);
  border-color: var(--bulma-button-ghost-border-color);
  box-shadow: none;
  color: var(--bulma-button-ghost-color);
  text-decoration: var(--bulma-button-ghost-decoration);
}
.button.is-ghost:hover, .button.is-ghost.is-hovered {
  color: var(--bulma-button-ghost-hover-color);
  text-decoration: var(--bulma-button-ghost-hover-decoration);
}
.button.is-small {
  --bulma-control-size: var(--bulma-size-small);
  --bulma-control-radius: var(--bulma-radius-small);
}
.button.is-normal {
  --bulma-control-size: var(--bulma-size-normal);
  --bulma-control-radius: var(--bulma-radius);
}
.button.is-medium {
  --bulma-control-size: var(--bulma-size-medium);
  --bulma-control-radius: var(--bulma-radius-medium);
}
.button.is-large {
  --bulma-control-size: var(--bulma-size-large);
  --bulma-control-radius: var(--bulma-radius-medium);
}
.button.is-fullwidth {
  display: flex;
  width: 100%;
}
.button.is-loading {
  box-shadow: none;
  color: transparent !important;
  pointer-events: none;
}
.button.is-loading::after {
  position: absolute;
  left: calc(50% - 1em * 0.5);
  top: calc(50% - 1em * 0.5);
  position: absolute !important;
}
.button.is-static {
  background-color: var(--bulma-button-static-background-color);
  border-color: var(--bulma-button-static-border-color);
  color: var(--bulma-button-static-color);
  box-shadow: none;
  pointer-events: none;
}
.button.is-rounded {
  border-radius: var(--bulma-radius-rounded);
  padding-left: calc(var(--bulma-button-padding-horizontal) + 0.25em);
  padding-right: calc(var(--bulma-button-padding-horizontal) + 0.25em);
}

.buttons {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: flex-start;
}
.buttons.are-small {
  --bulma-control-size: var(--bulma-size-small);
  --bulma-control-radius: var(--bulma-radius-small);
}
.buttons.are-medium {
  --bulma-control-size: var(--bulma-size-medium);
  --bulma-control-radius: var(--bulma-radius-medium);
}
.buttons.are-large {
  --bulma-control-size: var(--bulma-size-large);
  --bulma-control-radius: var(--bulma-radius-large);
}
.buttons.has-addons {
  gap: 0;
}
.buttons.has-addons .button:not(:first-child) {
  border-end-start-radius: 0;
  border-start-start-radius: 0;
}
.buttons.has-addons .button:not(:last-child) {
  border-end-end-radius: 0;
  border-start-end-radius: 0;
  margin-inline-end: -1px;
}
.buttons.has-addons .button:hover, .buttons.has-addons .button.is-hovered {
  z-index: 2;
}
.buttons.has-addons .button:focus, .buttons.has-addons .button.is-focused, .buttons.has-addons .button:active, .buttons.has-addons .button.is-active, .buttons.has-addons .button.is-selected {
  z-index: 3;
}
.buttons.has-addons .button:focus:hover, .buttons.has-addons .button.is-focused:hover, .buttons.has-addons .button:active:hover, .buttons.has-addons .button.is-active:hover, .buttons.has-addons .button.is-selected:hover {
  z-index: 4;
}
.buttons.has-addons .button.is-expanded {
  flex-grow: 1;
  flex-shrink: 1;
}
.buttons.is-centered {
  justify-content: center;
}
.buttons.is-right {
  justify-content: flex-end;
}

@media screen and (max-width: 768px) {
  .button.is-responsive.is-small {
    font-size: calc(var(--bulma-size-small) * 0.75);
  }
  .button.is-responsive,
  .button.is-responsive.is-normal {
    font-size: calc(var(--bulma-size-small) * 0.875);
  }
  .button.is-responsive.is-medium {
    font-size: var(--bulma-size-small);
  }
  .button.is-responsive.is-large {
    font-size: var(--bulma-size-normal);
  }
}
@media screen and (min-width: 769px) and (max-width: 1023px) {
  .button.is-responsive.is-small {
    font-size: calc(var(--bulma-size-small) * 0.875);
  }
  .button.is-responsive,
  .button.is-responsive.is-normal {
    font-size: var(--bulma-size-small);
  }
  .button.is-responsive.is-medium {
    font-size: var(--bulma-size-normal);
  }
  .button.is-responsive.is-large {
    font-size: var(--bulma-size-medium);
  }
}
.content {
  --bulma-content-heading-color: var(--bulma-text-strong);
  --bulma-content-heading-weight: var(--bulma-weight-extrabold);
  --bulma-content-heading-line-height: 1.125;
  --bulma-content-block-margin-bottom: 1em;
  --bulma-content-blockquote-background-color: var(--bulma-background);
  --bulma-content-blockquote-border-left: 5px solid var(--bulma-border);
  --bulma-content-blockquote-padding: 1.25em 1.5em;
  --bulma-content-pre-padding: 1.25em 1.5em;
  --bulma-content-table-cell-border: 1px solid var(--bulma-border);
  --bulma-content-table-cell-border-width: 0 0 1px;
  --bulma-content-table-cell-padding: 0.5em 0.75em;
  --bulma-content-table-cell-heading-color: var(--bulma-text-strong);
  --bulma-content-table-head-cell-border-width: 0 0 2px;
  --bulma-content-table-head-cell-color: var(--bulma-text-strong);
  --bulma-content-table-body-last-row-cell-border-bottom-width: 0;
  --bulma-content-table-foot-cell-border-width: 2px 0 0;
  --bulma-content-table-foot-cell-color: var(--bulma-text-strong);
}

.content li + li {
  margin-top: 0.25em;
}
.content p:not(:last-child),
.content dl:not(:last-child),
.content ol:not(:last-child),
.content ul:not(:last-child),
.content blockquote:not(:last-child),
.content pre:not(:last-child),
.content table:not(:last-child) {
  margin-bottom: var(--bulma-content-block-margin-bottom);
}
.content h1,
.content h2,
.content h3,
.content h4,
.content h5,
.content h6 {
  color: var(--bulma-content-heading-color);
  font-weight: var(--bulma-content-heading-weight);
  line-height: var(--bulma-content-heading-line-height);
}
.content h1 {
  font-size: 2em;
  margin-bottom: 0.5em;
}
.content h1:not(:first-child) {
  margin-top: 1em;
}
.content h2 {
  font-size: 1.75em;
  margin-bottom: 0.5714em;
}
.content h2:not(:first-child) {
  margin-top: 1.1428em;
}
.content h3 {
  font-size: 1.5em;
  margin-bottom: 0.6666em;
}
.content h3:not(:first-child) {
  margin-top: 1.3333em;
}
.content h4 {
  font-size: 1.25em;
  margin-bottom: 0.8em;
}
.content h5 {
  font-size: 1.125em;
  margin-bottom: 0.8888em;
}
.content h6 {
  font-size: 1em;
  margin-bottom: 1em;
}
.content blockquote {
  background-color: var(--bulma-content-blockquote-background-color);
  border-inline-start: var(--bulma-content-blockquote-border-left);
  padding: var(--bulma-content-blockquote-padding);
}
.content ol {
  list-style-position: outside;
  margin-inline-start: 2em;
  margin-top: 1em;
}
.content ol:not([type]) {
  list-style-type: decimal;
}
.content ol:not([type]).is-lower-alpha {
  list-style-type: lower-alpha;
}
.content ol:not([type]).is-lower-roman {
  list-style-type: lower-roman;
}
.content ol:not([type]).is-upper-alpha {
  list-style-type: upper-alpha;
}
.content ol:not([type]).is-upper-roman {
  list-style-type: upper-roman;
}
.content ul {
  list-style: disc outside;
  margin-inline-start: 2em;
  margin-top: 1em;
}
.content ul ul {
  list-style-type: circle;
  margin-bottom: 0.25em;
  margin-top: 0.25em;
}
.content ul ul ul {
  list-style-type: square;
}
.content dd {
  margin-inline-start: 2em;
}
.content figure:not([class]) {
  margin-left: 2em;
  margin-right: 2em;
  text-align: center;
}
.content figure:not([class]):not(:first-child) {
  margin-top: 2em;
}
.content figure:not([class]):not(:last-child) {
  margin-bottom: 2em;
}
.content figure:not([class]) img {
  display: inline-block;
}
.content figure:not([class]) figcaption {
  font-style: italic;
}
.content pre {
  -webkit-overflow-scrolling: touch;
  overflow-x: auto;
  padding: var(--bulma-content-pre-padding);
  white-space: pre;
  word-wrap: normal;
}
.content sup,
.content sub {
  font-size: 75%;
}
.content table td,
.content table th {
  border: var(--bulma-content-table-cell-border);
  border-width: var(--bulma-content-table-cell-border-width);
  padding: var(--bulma-content-table-cell-padding);
  vertical-align: top;
}
.content table th {
  color: var(--bulma-content-table-cell-heading-color);
}
.content table th:not([align]) {
  text-align: inherit;
}
.content table thead td,
.content table thead th {
  border-width: var(--bulma-content-table-head-cell-border-width);
  color: var(--bulma-content-table-head-cell-color);
}
.content table tfoot td,
.content table tfoot th {
  border-width: var(--bulma-content-table-foot-cell-border-width);
  color: var(--bulma-content-table-foot-cell-color);
}
.content table tbody tr:last-child td,
.content table tbody tr:last-child th {
  border-bottom-width: var(--bulma-content-table-body-last-row-cell-border-bottom-width);
}
.content .tabs li + li {
  margin-top: 0;
}
.content.is-small {
  font-size: var(--bulma-size-small);
}
.content.is-normal {
  font-size: var(--bulma-size-normal);
}
.content.is-medium {
  font-size: var(--bulma-size-medium);
}
.content.is-large {
  font-size: var(--bulma-size-large);
}

.delete {
  --bulma-delete-dimensions: 1.25rem;
  --bulma-delete-background-l: 0%;
  --bulma-delete-background-alpha: 0.5;
  --bulma-delete-color: var(--bulma-white);
  appearance: none;
  background-color: hsla(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-delete-background-l), var(--bulma-delete-background-alpha));
  border: none;
  border-radius: var(--bulma-radius-rounded);
  cursor: pointer;
  pointer-events: auto;
  display: inline-flex;
  flex-grow: 0;
  flex-shrink: 0;
  font-size: 1em;
  height: var(--bulma-delete-dimensions);
  max-height: var(--bulma-delete-dimensions);
  max-width: var(--bulma-delete-dimensions);
  min-height: var(--bulma-delete-dimensions);
  min-width: var(--bulma-delete-dimensions);
  outline: none;
  position: relative;
  vertical-align: top;
  width: var(--bulma-delete-dimensions);
}
.delete::before, .delete::after {
  background-color: var(--bulma-delete-color);
  content: "";
  display: block;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translateX(-50%) translateY(-50%) rotate(45deg);
  transform-origin: center center;
}
.delete::before {
  height: 2px;
  width: 50%;
}
.delete::after {
  height: 50%;
  width: 2px;
}
.delete:hover, .delete:focus {
  --bulma-delete-background-alpha: 0.4;
}
.delete:active {
  --bulma-delete-background-alpha: 0.5;
}
.delete.is-small {
  --bulma-delete-dimensions: 1rem;
}
.delete.is-medium {
  --bulma-delete-dimensions: 1.5rem;
}
.delete.is-large {
  --bulma-delete-dimensions: 2rem;
}

.icon,
.icon-text {
  --bulma-icon-dimensions: 1.5rem;
  --bulma-icon-dimensions-small: 1rem;
  --bulma-icon-dimensions-medium: 2rem;
  --bulma-icon-dimensions-large: 3rem;
  --bulma-icon-text-spacing: 0.25em;
}

.icon {
  align-items: center;
  display: inline-flex;
  flex-shrink: 0;
  justify-content: center;
  height: var(--bulma-icon-dimensions);
  transition-duration: var(--bulma-duration);
  transition-property: color;
  width: var(--bulma-icon-dimensions);
}
.icon.is-small {
  height: var(--bulma-icon-dimensions-small);
  width: var(--bulma-icon-dimensions-small);
}
.icon.is-medium {
  height: var(--bulma-icon-dimensions-medium);
  width: var(--bulma-icon-dimensions-medium);
}
.icon.is-large {
  height: var(--bulma-icon-dimensions-large);
  width: var(--bulma-icon-dimensions-large);
}

.icon-text {
  align-items: flex-start;
  color: inherit;
  display: inline-flex;
  flex-wrap: wrap;
  gap: var(--bulma-icon-text-spacing);
  line-height: var(--bulma-icon-dimensions);
  vertical-align: top;
}
.icon-text .icon {
  flex-grow: 0;
  flex-shrink: 0;
}

div.icon-text {
  display: flex;
}

.image {
  display: block;
  position: relative;
}
.image img {
  display: block;
  height: auto;
  width: 100%;
}
.image img.is-rounded {
  border-radius: var(--bulma-radius-rounded);
}
.image.is-fullwidth {
  width: 100%;
}
.image.is-square img,
.image.is-square .has-ratio {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 100%;
}
.image.is-square {
  aspect-ratio: 1;
}
.image.is-1by1 {
  aspect-ratio: 1/1;
}
.image.is-1by1 img,
.image.is-1by1 .has-ratio {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 100%;
}
.image.is-5by4 {
  aspect-ratio: 5/4;
}
.image.is-5by4 img,
.image.is-5by4 .has-ratio {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 100%;
}
.image.is-4by3 {
  aspect-ratio: 4/3;
}
.image.is-4by3 img,
.image.is-4by3 .has-ratio {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 100%;
}
.image.is-3by2 {
  aspect-ratio: 3/2;
}
.image.is-3by2 img,
.image.is-3by2 .has-ratio {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 100%;
}
.image.is-5by3 {
  aspect-ratio: 5/3;
}
.image.is-5by3 img,
.image.is-5by3 .has-ratio {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 100%;
}
.image.is-16by9 {
  aspect-ratio: 16/9;
}
.image.is-16by9 img,
.image.is-16by9 .has-ratio {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 100%;
}
.image.is-2by1 {
  aspect-ratio: 2/1;
}
.image.is-2by1 img,
.image.is-2by1 .has-ratio {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 100%;
}
.image.is-3by1 {
  aspect-ratio: 3/1;
}
.image.is-3by1 img,
.image.is-3by1 .has-ratio {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 100%;
}
.image.is-4by5 {
  aspect-ratio: 4/5;
}
.image.is-4by5 img,
.image.is-4by5 .has-ratio {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 100%;
}
.image.is-3by4 {
  aspect-ratio: 3/4;
}
.image.is-3by4 img,
.image.is-3by4 .has-ratio {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 100%;
}
.image.is-2by3 {
  aspect-ratio: 2/3;
}
.image.is-2by3 img,
.image.is-2by3 .has-ratio {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 100%;
}
.image.is-3by5 {
  aspect-ratio: 3/5;
}
.image.is-3by5 img,
.image.is-3by5 .has-ratio {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 100%;
}
.image.is-9by16 {
  aspect-ratio: 9/16;
}
.image.is-9by16 img,
.image.is-9by16 .has-ratio {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 100%;
}
.image.is-1by2 {
  aspect-ratio: 1/2;
}
.image.is-1by2 img,
.image.is-1by2 .has-ratio {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 100%;
}
.image.is-1by3 {
  aspect-ratio: 1/3;
}
.image.is-1by3 img,
.image.is-1by3 .has-ratio {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 100%;
}
.image.is-16x16 {
  height: 16px;
  width: 16px;
}
.image.is-24x24 {
  height: 24px;
  width: 24px;
}
.image.is-32x32 {
  height: 32px;
  width: 32px;
}
.image.is-48x48 {
  height: 48px;
  width: 48px;
}
.image.is-64x64 {
  height: 64px;
  width: 64px;
}
.image.is-96x96 {
  height: 96px;
  width: 96px;
}
.image.is-128x128 {
  height: 128px;
  width: 128px;
}

.loader {
  animation: spinAround 500ms infinite linear;
  border: 2px solid var(--bulma-border);
  border-radius: var(--bulma-radius-rounded);
  border-right-color: transparent;
  border-top-color: transparent;
  content: "";
  display: block;
  height: 1em;
  position: relative;
  width: 1em;
}

.notification {
  --bulma-notification-h: var(--bulma-scheme-h);
  --bulma-notification-s: var(--bulma-scheme-s);
  --bulma-notification-background-l: var(--bulma-background-l);
  --bulma-notification-color-l: var(--bulma-text-strong-l);
  --bulma-notification-code-background-color: var(--bulma-scheme-main);
  --bulma-notification-radius: var(--bulma-radius);
  --bulma-notification-padding: 1.375em 1.5em;
}

.notification {
  background-color: hsl(var(--bulma-notification-h), var(--bulma-notification-s), var(--bulma-notification-background-l));
  border-radius: var(--bulma-notification-radius);
  color: hsl(var(--bulma-notification-h), var(--bulma-notification-s), var(--bulma-notification-color-l));
  padding: var(--bulma-notification-padding);
  position: relative;
}
.notification a:not(.button):not(.dropdown-item) {
  color: currentColor;
  text-decoration: underline;
}
.notification strong {
  color: currentColor;
}
.notification code,
.notification pre {
  background: var(--bulma-notification-code-background-color);
}
.notification pre code {
  background: transparent;
}
.notification > .delete {
  position: absolute;
  inset-inline-end: 1rem;
  top: 1rem;
}
.notification .title,
.notification .subtitle,
.notification .content {
  color: currentColor;
}
.notification.is-white {
  --bulma-notification-h: var(--bulma-white-h);
  --bulma-notification-s: var(--bulma-white-s);
  --bulma-notification-background-l: var(--bulma-white-l);
  --bulma-notification-color-l: var(--bulma-white-invert-l);
}
.notification.is-white.is-light {
  --bulma-notification-background-l: 90%;
  --bulma-notification-color-l: var(--bulma-white-light-invert-l);
}
.notification.is-white.is-dark {
  --bulma-notification-background-l: 20%;
  --bulma-notification-color-l: var(--bulma-white-dark-invert-l);
}
.notification.is-black {
  --bulma-notification-h: var(--bulma-black-h);
  --bulma-notification-s: var(--bulma-black-s);
  --bulma-notification-background-l: var(--bulma-black-l);
  --bulma-notification-color-l: var(--bulma-black-invert-l);
}
.notification.is-black.is-light {
  --bulma-notification-background-l: 90%;
  --bulma-notification-color-l: var(--bulma-black-light-invert-l);
}
.notification.is-black.is-dark {
  --bulma-notification-background-l: 20%;
  --bulma-notification-color-l: var(--bulma-black-dark-invert-l);
}
.notification.is-light {
  --bulma-notification-h: var(--bulma-light-h);
  --bulma-notification-s: var(--bulma-light-s);
  --bulma-notification-background-l: var(--bulma-light-l);
  --bulma-notification-color-l: var(--bulma-light-invert-l);
}
.notification.is-light.is-light {
  --bulma-notification-background-l: 90%;
  --bulma-notification-color-l: var(--bulma-light-light-invert-l);
}
.notification.is-light.is-dark {
  --bulma-notification-background-l: 20%;
  --bulma-notification-color-l: var(--bulma-light-dark-invert-l);
}
.notification.is-dark {
  --bulma-notification-h: var(--bulma-dark-h);
  --bulma-notification-s: var(--bulma-dark-s);
  --bulma-notification-background-l: var(--bulma-dark-l);
  --bulma-notification-color-l: var(--bulma-dark-invert-l);
}
.notification.is-dark.is-light {
  --bulma-notification-background-l: 90%;
  --bulma-notification-color-l: var(--bulma-dark-light-invert-l);
}
.notification.is-dark.is-dark {
  --bulma-notification-background-l: 20%;
  --bulma-notification-color-l: var(--bulma-dark-dark-invert-l);
}
.notification.is-text {
  --bulma-notification-h: var(--bulma-text-h);
  --bulma-notification-s: var(--bulma-text-s);
  --bulma-notification-background-l: var(--bulma-text-l);
  --bulma-notification-color-l: var(--bulma-text-invert-l);
}
.notification.is-text.is-light {
  --bulma-notification-background-l: 90%;
  --bulma-notification-color-l: var(--bulma-text-light-invert-l);
}
.notification.is-text.is-dark {
  --bulma-notification-background-l: 20%;
  --bulma-notification-color-l: var(--bulma-text-dark-invert-l);
}
.notification.is-primary {
  --bulma-notification-h: var(--bulma-primary-h);
  --bulma-notification-s: var(--bulma-primary-s);
  --bulma-notification-background-l: var(--bulma-primary-l);
  --bulma-notification-color-l: var(--bulma-primary-invert-l);
}
.notification.is-primary.is-light {
  --bulma-notification-background-l: 90%;
  --bulma-notification-color-l: var(--bulma-primary-light-invert-l);
}
.notification.is-primary.is-dark {
  --bulma-notification-background-l: 20%;
  --bulma-notification-color-l: var(--bulma-primary-dark-invert-l);
}
.notification.is-link {
  --bulma-notification-h: var(--bulma-link-h);
  --bulma-notification-s: var(--bulma-link-s);
  --bulma-notification-background-l: var(--bulma-link-l);
  --bulma-notification-color-l: var(--bulma-link-invert-l);
}
.notification.is-link.is-light {
  --bulma-notification-background-l: 90%;
  --bulma-notification-color-l: var(--bulma-link-light-invert-l);
}
.notification.is-link.is-dark {
  --bulma-notification-background-l: 20%;
  --bulma-notification-color-l: var(--bulma-link-dark-invert-l);
}
.notification.is-info {
  --bulma-notification-h: var(--bulma-info-h);
  --bulma-notification-s: var(--bulma-info-s);
  --bulma-notification-background-l: var(--bulma-info-l);
  --bulma-notification-color-l: var(--bulma-info-invert-l);
}
.notification.is-info.is-light {
  --bulma-notification-background-l: 90%;
  --bulma-notification-color-l: var(--bulma-info-light-invert-l);
}
.notification.is-info.is-dark {
  --bulma-notification-background-l: 20%;
  --bulma-notification-color-l: var(--bulma-info-dark-invert-l);
}
.notification.is-success {
  --bulma-notification-h: var(--bulma-success-h);
  --bulma-notification-s: var(--bulma-success-s);
  --bulma-notification-background-l: var(--bulma-success-l);
  --bulma-notification-color-l: var(--bulma-success-invert-l);
}
.notification.is-success.is-light {
  --bulma-notification-background-l: 90%;
  --bulma-notification-color-l: var(--bulma-success-light-invert-l);
}
.notification.is-success.is-dark {
  --bulma-notification-background-l: 20%;
  --bulma-notification-color-l: var(--bulma-success-dark-invert-l);
}
.notification.is-warning {
  --bulma-notification-h: var(--bulma-warning-h);
  --bulma-notification-s: var(--bulma-warning-s);
  --bulma-notification-background-l: var(--bulma-warning-l);
  --bulma-notification-color-l: var(--bulma-warning-invert-l);
}
.notification.is-warning.is-light {
  --bulma-notification-background-l: 90%;
  --bulma-notification-color-l: var(--bulma-warning-light-invert-l);
}
.notification.is-warning.is-dark {
  --bulma-notification-background-l: 20%;
  --bulma-notification-color-l: var(--bulma-warning-dark-invert-l);
}
.notification.is-danger {
  --bulma-notification-h: var(--bulma-danger-h);
  --bulma-notification-s: var(--bulma-danger-s);
  --bulma-notification-background-l: var(--bulma-danger-l);
  --bulma-notification-color-l: var(--bulma-danger-invert-l);
}
.notification.is-danger.is-light {
  --bulma-notification-background-l: 90%;
  --bulma-notification-color-l: var(--bulma-danger-light-invert-l);
}
.notification.is-danger.is-dark {
  --bulma-notification-background-l: 20%;
  --bulma-notification-color-l: var(--bulma-danger-dark-invert-l);
}

.progress {
  --bulma-progress-border-radius: var(--bulma-radius-rounded);
  --bulma-progress-bar-background-color: var(--bulma-border-weak);
  --bulma-progress-value-background-color: var(--bulma-text);
  --bulma-progress-indeterminate-duration: 1.5s;
}

.progress {
  appearance: none;
  border: none;
  border-radius: var(--bulma-progress-border-radius);
  display: block;
  height: var(--bulma-size-normal);
  overflow: hidden;
  padding: 0;
  width: 100%;
}
.progress::-webkit-progress-bar {
  background-color: var(--bulma-progress-bar-background-color);
}
.progress::-webkit-progress-value {
  background-color: var(--bulma-progress-value-background-color);
}
.progress::-moz-progress-bar {
  background-color: var(--bulma-progress-value-background-color);
}
.progress::-ms-fill {
  background-color: var(--bulma-progress-value-background-color);
  border: none;
}
.progress.is-white {
  --bulma-progress-value-background-color: var(--bulma-white);
}
.progress.is-black {
  --bulma-progress-value-background-color: var(--bulma-black);
}
.progress.is-light {
  --bulma-progress-value-background-color: var(--bulma-light);
}
.progress.is-dark {
  --bulma-progress-value-background-color: var(--bulma-dark);
}
.progress.is-text {
  --bulma-progress-value-background-color: var(--bulma-text);
}
.progress.is-primary {
  --bulma-progress-value-background-color: var(--bulma-primary);
}
.progress.is-link {
  --bulma-progress-value-background-color: var(--bulma-link);
}
.progress.is-info {
  --bulma-progress-value-background-color: var(--bulma-info);
}
.progress.is-success {
  --bulma-progress-value-background-color: var(--bulma-success);
}
.progress.is-warning {
  --bulma-progress-value-background-color: var(--bulma-warning);
}
.progress.is-danger {
  --bulma-progress-value-background-color: var(--bulma-danger);
}
.progress:indeterminate {
  animation-duration: var(--bulma-progress-indeterminate-duration);
  animation-iteration-count: infinite;
  animation-name: moveIndeterminate;
  animation-timing-function: linear;
  background-color: var(--bulma-progress-bar-background-color);
  background-image: linear-gradient(to right, var(--bulma-progress-value-background-color) 30%, var(--bulma-progress-bar-background-color) 30%);
  background-position: top left;
  background-repeat: no-repeat;
  background-size: 150% 150%;
}
.progress:indeterminate::-webkit-progress-bar {
  background-color: transparent;
}
.progress:indeterminate::-moz-progress-bar {
  background-color: transparent;
}
.progress:indeterminate::-ms-fill {
  animation-name: none;
}
.progress.is-small {
  height: var(--bulma-size-small);
}
.progress.is-medium {
  height: var(--bulma-size-medium);
}
.progress.is-large {
  height: var(--bulma-size-large);
}

@keyframes moveIndeterminate {
  from {
    background-position: 200% 0;
  }
  to {
    background-position: -200% 0;
  }
}
.table {
  --bulma-table-color: var(--bulma-text-strong);
  --bulma-table-background-color: var(--bulma-scheme-main);
  --bulma-table-cell-border-color: var(--bulma-border);
  --bulma-table-cell-border-style: solid;
  --bulma-table-cell-border-width: 0 0 1px;
  --bulma-table-cell-padding: 0.5em 0.75em;
  --bulma-table-cell-heading-color: var(--bulma-text-strong);
  --bulma-table-cell-text-align: left;
  --bulma-table-head-cell-border-width: 0 0 2px;
  --bulma-table-head-cell-color: var(--bulma-text-strong);
  --bulma-table-foot-cell-border-width: 2px 0 0;
  --bulma-table-foot-cell-color: var(--bulma-text-strong);
  --bulma-table-head-background-color: transparent;
  --bulma-table-body-background-color: transparent;
  --bulma-table-foot-background-color: transparent;
  --bulma-table-row-hover-background-color: var(--bulma-scheme-main-bis);
  --bulma-table-row-active-background-color: var(--bulma-primary);
  --bulma-table-row-active-color: var(--bulma-primary-invert);
  --bulma-table-striped-row-even-background-color: var(--bulma-scheme-main-bis);
  --bulma-table-striped-row-even-hover-background-color: var(--bulma-scheme-main-ter);
}

.table {
  background-color: var(--bulma-table-background-color);
  color: var(--bulma-table-color);
}
.table td,
.table th {
  background-color: var(--bulma-table-cell-background-color);
  border-color: var(--bulma-table-cell-border-color);
  border-style: var(--bulma-table-cell-border-style);
  border-width: var(--bulma-table-cell-border-width);
  color: var(--bulma-table-color);
  padding: var(--bulma-table-cell-padding);
  vertical-align: top;
}
.table td.is-white,
.table th.is-white {
  --bulma-table-color: var(--bulma-white-invert);
  --bulma-table-cell-heading-color: var(--bulma-white-invert);
  --bulma-table-cell-background-color: var(--bulma-white);
  --bulma-table-cell-border-color: var(--bulma-white);
}
.table td.is-black,
.table th.is-black {
  --bulma-table-color: var(--bulma-black-invert);
  --bulma-table-cell-heading-color: var(--bulma-black-invert);
  --bulma-table-cell-background-color: var(--bulma-black);
  --bulma-table-cell-border-color: var(--bulma-black);
}
.table td.is-light,
.table th.is-light {
  --bulma-table-color: var(--bulma-light-invert);
  --bulma-table-cell-heading-color: var(--bulma-light-invert);
  --bulma-table-cell-background-color: var(--bulma-light);
  --bulma-table-cell-border-color: var(--bulma-light);
}
.table td.is-dark,
.table th.is-dark {
  --bulma-table-color: var(--bulma-dark-invert);
  --bulma-table-cell-heading-color: var(--bulma-dark-invert);
  --bulma-table-cell-background-color: var(--bulma-dark);
  --bulma-table-cell-border-color: var(--bulma-dark);
}
.table td.is-text,
.table th.is-text {
  --bulma-table-color: var(--bulma-text-invert);
  --bulma-table-cell-heading-color: var(--bulma-text-invert);
  --bulma-table-cell-background-color: var(--bulma-text);
  --bulma-table-cell-border-color: var(--bulma-text);
}
.table td.is-primary,
.table th.is-primary {
  --bulma-table-color: var(--bulma-primary-invert);
  --bulma-table-cell-heading-color: var(--bulma-primary-invert);
  --bulma-table-cell-background-color: var(--bulma-primary);
  --bulma-table-cell-border-color: var(--bulma-primary);
}
.table td.is-link,
.table th.is-link {
  --bulma-table-color: var(--bulma-link-invert);
  --bulma-table-cell-heading-color: var(--bulma-link-invert);
  --bulma-table-cell-background-color: var(--bulma-link);
  --bulma-table-cell-border-color: var(--bulma-link);
}
.table td.is-info,
.table th.is-info {
  --bulma-table-color: var(--bulma-info-invert);
  --bulma-table-cell-heading-color: var(--bulma-info-invert);
  --bulma-table-cell-background-color: var(--bulma-info);
  --bulma-table-cell-border-color: var(--bulma-info);
}
.table td.is-success,
.table th.is-success {
  --bulma-table-color: var(--bulma-success-invert);
  --bulma-table-cell-heading-color: var(--bulma-success-invert);
  --bulma-table-cell-background-color: var(--bulma-success);
  --bulma-table-cell-border-color: var(--bulma-success);
}
.table td.is-warning,
.table th.is-warning {
  --bulma-table-color: var(--bulma-warning-invert);
  --bulma-table-cell-heading-color: var(--bulma-warning-invert);
  --bulma-table-cell-background-color: var(--bulma-warning);
  --bulma-table-cell-border-color: var(--bulma-warning);
}
.table td.is-danger,
.table th.is-danger {
  --bulma-table-color: var(--bulma-danger-invert);
  --bulma-table-cell-heading-color: var(--bulma-danger-invert);
  --bulma-table-cell-background-color: var(--bulma-danger);
  --bulma-table-cell-border-color: var(--bulma-danger);
}
.table td.is-narrow,
.table th.is-narrow {
  white-space: nowrap;
  width: 1%;
}
.table td.is-selected,
.table th.is-selected {
  background-color: var(--bulma-table-row-active-background-color);
  color: var(--bulma-table-row-active-color);
}
.table td.is-selected a,
.table td.is-selected strong,
.table th.is-selected a,
.table th.is-selected strong {
  color: currentColor;
}
.table td.is-vcentered,
.table th.is-vcentered {
  vertical-align: middle;
}
.table th {
  color: var(--bulma-table-cell-heading-color);
}
.table th:not([align]) {
  text-align: var(--bulma-table-cell-text-align);
}
.table tr.is-selected {
  background-color: var(--bulma-table-row-active-background-color);
  color: var(--bulma-table-row-active-color);
}
.table tr.is-selected a,
.table tr.is-selected strong {
  color: currentColor;
}
.table tr.is-selected td,
.table tr.is-selected th {
  border-color: var(--bulma-table-row-active-color);
  color: currentColor;
}
.table tr.is-white {
  --bulma-table-color: var(--bulma-white-invert);
  --bulma-table-cell-heading-color: var(--bulma-white-invert);
  --bulma-table-cell-background-color: var(--bulma-white);
  --bulma-table-cell-border-color: var(--bulma-white);
}
.table tr.is-black {
  --bulma-table-color: var(--bulma-black-invert);
  --bulma-table-cell-heading-color: var(--bulma-black-invert);
  --bulma-table-cell-background-color: var(--bulma-black);
  --bulma-table-cell-border-color: var(--bulma-black);
}
.table tr.is-light {
  --bulma-table-color: var(--bulma-light-invert);
  --bulma-table-cell-heading-color: var(--bulma-light-invert);
  --bulma-table-cell-background-color: var(--bulma-light);
  --bulma-table-cell-border-color: var(--bulma-light);
}
.table tr.is-dark {
  --bulma-table-color: var(--bulma-dark-invert);
  --bulma-table-cell-heading-color: var(--bulma-dark-invert);
  --bulma-table-cell-background-color: var(--bulma-dark);
  --bulma-table-cell-border-color: var(--bulma-dark);
}
.table tr.is-text {
  --bulma-table-color: var(--bulma-text-invert);
  --bulma-table-cell-heading-color: var(--bulma-text-invert);
  --bulma-table-cell-background-color: var(--bulma-text);
  --bulma-table-cell-border-color: var(--bulma-text);
}
.table tr.is-primary {
  --bulma-table-color: var(--bulma-primary-invert);
  --bulma-table-cell-heading-color: var(--bulma-primary-invert);
  --bulma-table-cell-background-color: var(--bulma-primary);
  --bulma-table-cell-border-color: var(--bulma-primary);
}
.table tr.is-link {
  --bulma-table-color: var(--bulma-link-invert);
  --bulma-table-cell-heading-color: var(--bulma-link-invert);
  --bulma-table-cell-background-color: var(--bulma-link);
  --bulma-table-cell-border-color: var(--bulma-link);
}
.table tr.is-info {
  --bulma-table-color: var(--bulma-info-invert);
  --bulma-table-cell-heading-color: var(--bulma-info-invert);
  --bulma-table-cell-background-color: var(--bulma-info);
  --bulma-table-cell-border-color: var(--bulma-info);
}
.table tr.is-success {
  --bulma-table-color: var(--bulma-success-invert);
  --bulma-table-cell-heading-color: var(--bulma-success-invert);
  --bulma-table-cell-background-color: var(--bulma-success);
  --bulma-table-cell-border-color: var(--bulma-success);
}
.table tr.is-warning {
  --bulma-table-color: var(--bulma-warning-invert);
  --bulma-table-cell-heading-color: var(--bulma-warning-invert);
  --bulma-table-cell-background-color: var(--bulma-warning);
  --bulma-table-cell-border-color: var(--bulma-warning);
}
.table tr.is-danger {
  --bulma-table-color: var(--bulma-danger-invert);
  --bulma-table-cell-heading-color: var(--bulma-danger-invert);
  --bulma-table-cell-background-color: var(--bulma-danger);
  --bulma-table-cell-border-color: var(--bulma-danger);
}
.table thead {
  background-color: var(--bulma-table-head-background-color);
}
.table thead td,
.table thead th {
  border-width: var(--bulma-table-head-cell-border-width);
  color: var(--bulma-table-head-cell-color);
}
.table tfoot {
  background-color: var(--bulma-table-foot-background-color);
}
.table tfoot td,
.table tfoot th {
  border-width: var(--bulma-table-foot-cell-border-width);
  color: var(--bulma-table-foot-cell-color);
}
.table tbody {
  background-color: var(--bulma-table-body-background-color);
}
.table tbody tr:last-child td,
.table tbody tr:last-child th {
  border-bottom-width: 0;
}
.table.is-bordered td,
.table.is-bordered th {
  border-width: 1px;
}
.table.is-bordered tr:last-child td,
.table.is-bordered tr:last-child th {
  border-bottom-width: 1px;
}
.table.is-fullwidth {
  width: 100%;
}
.table.is-hoverable tbody tr:not(.is-selected):hover {
  background-color: var(--bulma-table-row-hover-background-color);
}
.table.is-hoverable.is-striped tbody tr:not(.is-selected):hover {
  background-color: var(--bulma-table-row-hover-background-color);
}
.table.is-hoverable.is-striped tbody tr:not(.is-selected):hover:nth-child(even) {
  background-color: var(--bulma-table-striped-row-even-hover-background-color);
}
.table.is-narrow td,
.table.is-narrow th {
  padding: 0.25em 0.5em;
}
.table.is-striped tbody tr:not(.is-selected):nth-child(even) {
  background-color: var(--bulma-table-striped-row-even-background-color);
}

.table-container {
  -webkit-overflow-scrolling: touch;
  overflow: auto;
  overflow-y: hidden;
  max-width: 100%;
}

.tags {
  align-items: center;
  color: hsl(var(--bulma-tag-h), var(--bulma-tag-s), var(--bulma-tag-color-l));
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: flex-start;
}
.tags.are-medium .tag:not(.is-normal):not(.is-large) {
  font-size: var(--bulma-size-normal);
}
.tags.are-large .tag:not(.is-normal):not(.is-medium) {
  font-size: var(--bulma-size-medium);
}
.tags.is-centered {
  gap: 0.25rem;
  justify-content: center;
}
.tags.is-right {
  justify-content: flex-end;
}
.tags.has-addons {
  gap: 0;
}
.tags.has-addons .tag:not(:first-child) {
  border-start-start-radius: 0;
  border-end-start-radius: 0;
}
.tags.has-addons .tag:not(:last-child) {
  border-start-end-radius: 0;
  border-end-end-radius: 0;
}

.tag {
  --bulma-tag-h: var(--bulma-scheme-h);
  --bulma-tag-s: var(--bulma-scheme-s);
  --bulma-tag-background-l: var(--bulma-background-l);
  --bulma-tag-background-l-delta: 0%;
  --bulma-tag-hover-background-l-delta: var(--bulma-hover-background-l-delta);
  --bulma-tag-active-background-l-delta: var(--bulma-active-background-l-delta);
  --bulma-tag-color-l: var(--bulma-text-l);
  --bulma-tag-radius: var(--bulma-radius);
  --bulma-tag-delete-margin: 1px;
  align-items: center;
  background-color: hsl(var(--bulma-tag-h), var(--bulma-tag-s), calc(var(--bulma-tag-background-l) + var(--bulma-tag-background-l-delta)));
  border-radius: var(--bulma-radius);
  color: hsl(var(--bulma-tag-h), var(--bulma-tag-s), var(--bulma-tag-color-l));
  display: inline-flex;
  font-size: var(--bulma-size-small);
  height: 2em;
  justify-content: center;
  line-height: 1.5;
  padding-left: 0.75em;
  padding-right: 0.75em;
  white-space: nowrap;
}
.tag .delete {
  margin-inline-start: 0.25rem;
  margin-inline-end: -0.375rem;
}
.tag.is-white {
  --bulma-tag-h: var(--bulma-white-h);
  --bulma-tag-s: var(--bulma-white-s);
  --bulma-tag-background-l: var(--bulma-white-l);
  --bulma-tag-color-l: var(--bulma-white-invert-l);
}
.tag.is-white.is-light {
  --bulma-tag-background-l: var(--bulma-light-l);
  --bulma-tag-color-l: var(--bulma-white-light-invert-l);
}
.tag.is-black {
  --bulma-tag-h: var(--bulma-black-h);
  --bulma-tag-s: var(--bulma-black-s);
  --bulma-tag-background-l: var(--bulma-black-l);
  --bulma-tag-color-l: var(--bulma-black-invert-l);
}
.tag.is-black.is-light {
  --bulma-tag-background-l: var(--bulma-light-l);
  --bulma-tag-color-l: var(--bulma-black-light-invert-l);
}
.tag.is-light {
  --bulma-tag-h: var(--bulma-light-h);
  --bulma-tag-s: var(--bulma-light-s);
  --bulma-tag-background-l: var(--bulma-light-l);
  --bulma-tag-color-l: var(--bulma-light-invert-l);
}
.tag.is-light.is-light {
  --bulma-tag-background-l: var(--bulma-light-l);
  --bulma-tag-color-l: var(--bulma-light-light-invert-l);
}
.tag.is-dark {
  --bulma-tag-h: var(--bulma-dark-h);
  --bulma-tag-s: var(--bulma-dark-s);
  --bulma-tag-background-l: var(--bulma-dark-l);
  --bulma-tag-color-l: var(--bulma-dark-invert-l);
}
.tag.is-dark.is-light {
  --bulma-tag-background-l: var(--bulma-light-l);
  --bulma-tag-color-l: var(--bulma-dark-light-invert-l);
}
.tag.is-text {
  --bulma-tag-h: var(--bulma-text-h);
  --bulma-tag-s: var(--bulma-text-s);
  --bulma-tag-background-l: var(--bulma-text-l);
  --bulma-tag-color-l: var(--bulma-text-invert-l);
}
.tag.is-text.is-light {
  --bulma-tag-background-l: var(--bulma-light-l);
  --bulma-tag-color-l: var(--bulma-text-light-invert-l);
}
.tag.is-primary {
  --bulma-tag-h: var(--bulma-primary-h);
  --bulma-tag-s: var(--bulma-primary-s);
  --bulma-tag-background-l: var(--bulma-primary-l);
  --bulma-tag-color-l: var(--bulma-primary-invert-l);
}
.tag.is-primary.is-light {
  --bulma-tag-background-l: var(--bulma-light-l);
  --bulma-tag-color-l: var(--bulma-primary-light-invert-l);
}
.tag.is-link {
  --bulma-tag-h: var(--bulma-link-h);
  --bulma-tag-s: var(--bulma-link-s);
  --bulma-tag-background-l: var(--bulma-link-l);
  --bulma-tag-color-l: var(--bulma-link-invert-l);
}
.tag.is-link.is-light {
  --bulma-tag-background-l: var(--bulma-light-l);
  --bulma-tag-color-l: var(--bulma-link-light-invert-l);
}
.tag.is-info {
  --bulma-tag-h: var(--bulma-info-h);
  --bulma-tag-s: var(--bulma-info-s);
  --bulma-tag-background-l: var(--bulma-info-l);
  --bulma-tag-color-l: var(--bulma-info-invert-l);
}
.tag.is-info.is-light {
  --bulma-tag-background-l: var(--bulma-light-l);
  --bulma-tag-color-l: var(--bulma-info-light-invert-l);
}
.tag.is-success {
  --bulma-tag-h: var(--bulma-success-h);
  --bulma-tag-s: var(--bulma-success-s);
  --bulma-tag-background-l: var(--bulma-success-l);
  --bulma-tag-color-l: var(--bulma-success-invert-l);
}
.tag.is-success.is-light {
  --bulma-tag-background-l: var(--bulma-light-l);
  --bulma-tag-color-l: var(--bulma-success-light-invert-l);
}
.tag.is-warning {
  --bulma-tag-h: var(--bulma-warning-h);
  --bulma-tag-s: var(--bulma-warning-s);
  --bulma-tag-background-l: var(--bulma-warning-l);
  --bulma-tag-color-l: var(--bulma-warning-invert-l);
}
.tag.is-warning.is-light {
  --bulma-tag-background-l: var(--bulma-light-l);
  --bulma-tag-color-l: var(--bulma-warning-light-invert-l);
}
.tag.is-danger {
  --bulma-tag-h: var(--bulma-danger-h);
  --bulma-tag-s: var(--bulma-danger-s);
  --bulma-tag-background-l: var(--bulma-danger-l);
  --bulma-tag-color-l: var(--bulma-danger-invert-l);
}
.tag.is-danger.is-light {
  --bulma-tag-background-l: var(--bulma-light-l);
  --bulma-tag-color-l: var(--bulma-danger-light-invert-l);
}
.tag.is-normal {
  font-size: var(--bulma-size-small);
}
.tag.is-medium {
  font-size: var(--bulma-size-normal);
}
.tag.is-large {
  font-size: var(--bulma-size-medium);
}
.tag .icon:first-child:not(:last-child) {
  margin-inline-start: -0.375em;
  margin-inline-end: 0.1875em;
}
.tag .icon:last-child:not(:first-child) {
  margin-inline-start: 0.1875em;
  margin-inline-end: -0.375em;
}
.tag .icon:first-child:last-child {
  margin-inline-start: -0.375em;
  margin-inline-end: -0.375em;
}
.tag.is-delete {
  margin-inline-start: var(--bulma-tag-delete-margin);
  padding: 0;
  position: relative;
  width: 2em;
}
.tag.is-delete::before, .tag.is-delete::after {
  background-color: currentColor;
  content: "";
  display: block;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translateX(-50%) translateY(-50%) rotate(45deg);
  transform-origin: center center;
}
.tag.is-delete::before {
  height: 1px;
  width: 50%;
}
.tag.is-delete::after {
  height: 50%;
  width: 1px;
}
.tag.is-rounded {
  border-radius: var(--bulma-radius-rounded);
}

a.tag,
button.tag,
.tag.is-hoverable {
  cursor: pointer;
}
a.tag:hover,
button.tag:hover,
.tag.is-hoverable:hover {
  --bulma-tag-background-l-delta: var(--bulma-tag-hover-background-l-delta);
}
a.tag:active,
button.tag:active,
.tag.is-hoverable:active {
  --bulma-tag-background-l-delta: var(--bulma-tag-active-background-l-delta);
}

.title,
.subtitle {
  --bulma-title-color: var(--bulma-text-strong);
  --bulma-title-family: false;
  --bulma-title-size: var(--bulma-size-3);
  --bulma-title-weight: var(--bulma-weight-extrabold);
  --bulma-title-line-height: 1.125;
  --bulma-title-strong-color: inherit;
  --bulma-title-strong-weight: inherit;
  --bulma-title-sub-size: 0.75em;
  --bulma-title-sup-size: 0.75em;
  --bulma-subtitle-color: var(--bulma-text);
  --bulma-subtitle-family: false;
  --bulma-subtitle-size: var(--bulma-size-5);
  --bulma-subtitle-weight: var(--bulma-weight-normal);
  --bulma-subtitle-line-height: 1.25;
  --bulma-subtitle-strong-color: var(--bulma-text-strong);
  --bulma-subtitle-strong-weight: var(--bulma-weight-semibold);
}

.title,
.subtitle {
  word-break: break-word;
}
.title em,
.title span,
.subtitle em,
.subtitle span {
  font-weight: inherit;
}
.title sub,
.subtitle sub {
  font-size: var(--bulma-title-sub-size);
}
.title sup,
.subtitle sup {
  font-size: var(--bulma-title-sup-size);
}
.title .tag,
.subtitle .tag {
  vertical-align: middle;
}

.title {
  color: var(--bulma-title-color);
  font-size: var(--bulma-title-size);
  font-weight: var(--bulma-title-weight);
  line-height: var(--bulma-title-line-height);
}
.title strong {
  color: var(--bulma-title-strong-color);
  font-weight: var(--bulma-title-strong-weight);
}
.title:not(.is-spaced):has(+ .subtitle) {
  margin-bottom: 0;
}
.title.is-1 {
  font-size: 3rem;
}
.title.is-2 {
  font-size: 2.5rem;
}
.title.is-3 {
  font-size: 2rem;
}
.title.is-4 {
  font-size: 1.5rem;
}
.title.is-5 {
  font-size: 1.25rem;
}
.title.is-6 {
  font-size: 1rem;
}
.title.is-7 {
  font-size: 0.75rem;
}

.subtitle {
  color: var(--bulma-subtitle-color);
  font-size: var(--bulma-subtitle-size);
  font-weight: var(--bulma-subtitle-weight);
  line-height: var(--bulma-subtitle-line-height);
}
.subtitle strong {
  color: var(--bulma-subtitle-strong-color);
  font-weight: var(--bulma-subtitle-strong-weight);
}
.subtitle:not(.is-spaced):has(+ .title) {
  margin-bottom: 0;
}
.subtitle.is-1 {
  font-size: 3rem;
}
.subtitle.is-2 {
  font-size: 2.5rem;
}
.subtitle.is-3 {
  font-size: 2rem;
}
.subtitle.is-4 {
  font-size: 1.5rem;
}
.subtitle.is-5 {
  font-size: 1.25rem;
}
.subtitle.is-6 {
  font-size: 1rem;
}
.subtitle.is-7 {
  font-size: 0.75rem;
}

/* Bulma Form */
.control,
.input,
.textarea,
.select select {
  --bulma-input-h: var(--bulma-scheme-h);
  --bulma-input-s: var(--bulma-scheme-s);
  --bulma-input-l: var(--bulma-scheme-main-l);
  --bulma-input-border-l: var(--bulma-border-l);
  --bulma-input-border-l-delta: 0%;
  --bulma-input-hover-border-l-delta: var(--bulma-hover-border-l-delta);
  --bulma-input-active-border-l-delta: var(--bulma-active-border-l-delta);
  --bulma-input-focus-h: var(--bulma-focus-h);
  --bulma-input-focus-s: var(--bulma-focus-s);
  --bulma-input-focus-l: var(--bulma-focus-l);
  --bulma-input-focus-shadow-size: var(--bulma-focus-shadow-size);
  --bulma-input-focus-shadow-alpha: var(--bulma-focus-shadow-alpha);
  --bulma-input-color-l: var(--bulma-text-strong-l);
  --bulma-input-background-l: var(--bulma-scheme-main-l);
  --bulma-input-background-l-delta: 0%;
  --bulma-input-height: var(--bulma-control-height);
  --bulma-input-shadow: inset 0 0.0625em 0.125em hsla(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-scheme-invert-l), 0.05);
  --bulma-input-placeholder-color: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-strong-l), 0.3);
  --bulma-input-disabled-color: var(--bulma-text-weak);
  --bulma-input-disabled-background-color: var(--bulma-background);
  --bulma-input-disabled-border-color: var(--bulma-background);
  --bulma-input-disabled-placeholder-color: hsla(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-weak-l), 0.3);
  --bulma-input-arrow: var(--bulma-link);
  --bulma-input-icon-color: var(--bulma-text-light);
  --bulma-input-icon-hover-color: var(--bulma-text-weak);
  --bulma-input-icon-focus-color: var(--bulma-link);
  --bulma-input-radius: var(--bulma-radius);
}

.select select, .input, .textarea {
  background-color: hsl(var(--bulma-input-h), var(--bulma-input-s), calc(var(--bulma-input-background-l) + var(--bulma-input-background-l-delta)));
  border-color: hsl(var(--bulma-input-h), var(--bulma-input-s), calc(var(--bulma-input-border-l) + var(--bulma-input-border-l-delta)));
  border-radius: var(--bulma-input-radius);
  color: hsl(var(--bulma-input-h), var(--bulma-input-s), var(--bulma-input-color-l));
}
.select select::-moz-placeholder, .input::-moz-placeholder, .textarea::-moz-placeholder {
  color: var(--bulma-input-placeholder-color);
}
.select select::-webkit-input-placeholder, .input::-webkit-input-placeholder, .textarea::-webkit-input-placeholder {
  color: var(--bulma-input-placeholder-color);
}
.select select:-moz-placeholder, .input:-moz-placeholder, .textarea:-moz-placeholder {
  color: var(--bulma-input-placeholder-color);
}
.select select:-ms-input-placeholder, .input:-ms-input-placeholder, .textarea:-ms-input-placeholder {
  color: var(--bulma-input-placeholder-color);
}
.select select:hover, .input:hover, .textarea:hover, .select select.is-hovered, .is-hovered.input, .is-hovered.textarea {
  --bulma-input-border-l-delta: var(--bulma-input-hover-border-l-delta);
}
.select select:active, .input:active, .textarea:active, .select select.is-active, .is-active.input, .is-active.textarea {
  --bulma-input-border-l-delta: var(--bulma-input-active-border-l-delta);
}
.select select:focus, .input:focus, .textarea:focus, .select select:focus-within, .input:focus-within, .textarea:focus-within, .select select.is-focused, .is-focused.input, .is-focused.textarea {
  border-color: hsl(var(--bulma-input-focus-h), var(--bulma-input-focus-s), var(--bulma-input-focus-l));
  box-shadow: var(--bulma-input-focus-shadow-size) hsla(var(--bulma-input-focus-h), var(--bulma-input-focus-s), var(--bulma-input-focus-l), var(--bulma-input-focus-shadow-alpha));
}
.select select[disabled], [disabled].input, [disabled].textarea, fieldset[disabled] .select select, .select fieldset[disabled] select, fieldset[disabled] .input, fieldset[disabled] .textarea {
  background-color: var(--bulma-input-disabled-background-color);
  border-color: var(--bulma-input-disabled-border-color);
  box-shadow: none;
  color: var(--bulma-input-disabled-color);
}
.select select[disabled]::-moz-placeholder, [disabled].input::-moz-placeholder, [disabled].textarea::-moz-placeholder, fieldset[disabled] .select select::-moz-placeholder, .select fieldset[disabled] select::-moz-placeholder, fieldset[disabled] .input::-moz-placeholder, fieldset[disabled] .textarea::-moz-placeholder {
  color: var(--bulma-input-disabled-placeholder-color);
}
.select select[disabled]::-webkit-input-placeholder, [disabled].input::-webkit-input-placeholder, [disabled].textarea::-webkit-input-placeholder, fieldset[disabled] .select select::-webkit-input-placeholder, .select fieldset[disabled] select::-webkit-input-placeholder, fieldset[disabled] .input::-webkit-input-placeholder, fieldset[disabled] .textarea::-webkit-input-placeholder {
  color: var(--bulma-input-disabled-placeholder-color);
}
.select select[disabled]:-moz-placeholder, [disabled].input:-moz-placeholder, [disabled].textarea:-moz-placeholder, fieldset[disabled] .select select:-moz-placeholder, .select fieldset[disabled] select:-moz-placeholder, fieldset[disabled] .input:-moz-placeholder, fieldset[disabled] .textarea:-moz-placeholder {
  color: var(--bulma-input-disabled-placeholder-color);
}
.select select[disabled]:-ms-input-placeholder, [disabled].input:-ms-input-placeholder, [disabled].textarea:-ms-input-placeholder, fieldset[disabled] .select select:-ms-input-placeholder, .select fieldset[disabled] select:-ms-input-placeholder, fieldset[disabled] .input:-ms-input-placeholder, fieldset[disabled] .textarea:-ms-input-placeholder {
  color: var(--bulma-input-disabled-placeholder-color);
}

/* Bulma Form */
.textarea, .input {
  --bulma-input-h: var(--bulma-scheme-h);
  --bulma-input-s: var(--bulma-scheme-s);
  --bulma-input-border-style: solid;
  --bulma-input-border-width: 1px;
  --bulma-input-border-l: var(--bulma-border-l);
  box-shadow: inset 0 0.0625em 0.125em hsla(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-scheme-invert-l), 0.05);
  max-width: 100%;
  width: 100%;
}
[readonly].textarea, [readonly].input {
  box-shadow: none;
}
.is-white.textarea, .is-white.input {
  --bulma-input-h: var(--bulma-white-h);
  --bulma-input-s: var(--bulma-white-s);
  --bulma-input-l: var(--bulma-white-l);
  --bulma-input-focus-h: var(--bulma-white-h);
  --bulma-input-focus-s: var(--bulma-white-s);
  --bulma-input-focus-l: var(--bulma-white-l);
  --bulma-input-border-l: var(--bulma-white-l);
}
.is-black.textarea, .is-black.input {
  --bulma-input-h: var(--bulma-black-h);
  --bulma-input-s: var(--bulma-black-s);
  --bulma-input-l: var(--bulma-black-l);
  --bulma-input-focus-h: var(--bulma-black-h);
  --bulma-input-focus-s: var(--bulma-black-s);
  --bulma-input-focus-l: var(--bulma-black-l);
  --bulma-input-border-l: var(--bulma-black-l);
}
.is-light.textarea, .is-light.input {
  --bulma-input-h: var(--bulma-light-h);
  --bulma-input-s: var(--bulma-light-s);
  --bulma-input-l: var(--bulma-light-l);
  --bulma-input-focus-h: var(--bulma-light-h);
  --bulma-input-focus-s: var(--bulma-light-s);
  --bulma-input-focus-l: var(--bulma-light-l);
  --bulma-input-border-l: var(--bulma-light-l);
}
.is-dark.textarea, .is-dark.input {
  --bulma-input-h: var(--bulma-dark-h);
  --bulma-input-s: var(--bulma-dark-s);
  --bulma-input-l: var(--bulma-dark-l);
  --bulma-input-focus-h: var(--bulma-dark-h);
  --bulma-input-focus-s: var(--bulma-dark-s);
  --bulma-input-focus-l: var(--bulma-dark-l);
  --bulma-input-border-l: var(--bulma-dark-l);
}
.is-text.textarea, .is-text.input {
  --bulma-input-h: var(--bulma-text-h);
  --bulma-input-s: var(--bulma-text-s);
  --bulma-input-l: var(--bulma-text-l);
  --bulma-input-focus-h: var(--bulma-text-h);
  --bulma-input-focus-s: var(--bulma-text-s);
  --bulma-input-focus-l: var(--bulma-text-l);
  --bulma-input-border-l: var(--bulma-text-l);
}
.is-primary.textarea, .is-primary.input {
  --bulma-input-h: var(--bulma-primary-h);
  --bulma-input-s: var(--bulma-primary-s);
  --bulma-input-l: var(--bulma-primary-l);
  --bulma-input-focus-h: var(--bulma-primary-h);
  --bulma-input-focus-s: var(--bulma-primary-s);
  --bulma-input-focus-l: var(--bulma-primary-l);
  --bulma-input-border-l: var(--bulma-primary-l);
}
.is-link.textarea, .is-link.input {
  --bulma-input-h: var(--bulma-link-h);
  --bulma-input-s: var(--bulma-link-s);
  --bulma-input-l: var(--bulma-link-l);
  --bulma-input-focus-h: var(--bulma-link-h);
  --bulma-input-focus-s: var(--bulma-link-s);
  --bulma-input-focus-l: var(--bulma-link-l);
  --bulma-input-border-l: var(--bulma-link-l);
}
.is-info.textarea, .is-info.input {
  --bulma-input-h: var(--bulma-info-h);
  --bulma-input-s: var(--bulma-info-s);
  --bulma-input-l: var(--bulma-info-l);
  --bulma-input-focus-h: var(--bulma-info-h);
  --bulma-input-focus-s: var(--bulma-info-s);
  --bulma-input-focus-l: var(--bulma-info-l);
  --bulma-input-border-l: var(--bulma-info-l);
}
.is-success.textarea, .is-success.input {
  --bulma-input-h: var(--bulma-success-h);
  --bulma-input-s: var(--bulma-success-s);
  --bulma-input-l: var(--bulma-success-l);
  --bulma-input-focus-h: var(--bulma-success-h);
  --bulma-input-focus-s: var(--bulma-success-s);
  --bulma-input-focus-l: var(--bulma-success-l);
  --bulma-input-border-l: var(--bulma-success-l);
}
.is-warning.textarea, .is-warning.input {
  --bulma-input-h: var(--bulma-warning-h);
  --bulma-input-s: var(--bulma-warning-s);
  --bulma-input-l: var(--bulma-warning-l);
  --bulma-input-focus-h: var(--bulma-warning-h);
  --bulma-input-focus-s: var(--bulma-warning-s);
  --bulma-input-focus-l: var(--bulma-warning-l);
  --bulma-input-border-l: var(--bulma-warning-l);
}
.is-danger.textarea, .is-danger.input {
  --bulma-input-h: var(--bulma-danger-h);
  --bulma-input-s: var(--bulma-danger-s);
  --bulma-input-l: var(--bulma-danger-l);
  --bulma-input-focus-h: var(--bulma-danger-h);
  --bulma-input-focus-s: var(--bulma-danger-s);
  --bulma-input-focus-l: var(--bulma-danger-l);
  --bulma-input-border-l: var(--bulma-danger-l);
}
.is-small.textarea, .is-small.input {
  border-radius: var(--bulma-radius-small);
  font-size: var(--bulma-size-small);
}
.is-medium.textarea, .is-medium.input {
  font-size: var(--bulma-size-medium);
}
.is-large.textarea, .is-large.input {
  font-size: var(--bulma-size-large);
}
.is-fullwidth.textarea, .is-fullwidth.input {
  display: block;
  width: 100%;
}
.is-inline.textarea, .is-inline.input {
  display: inline;
  width: auto;
}

.input.is-rounded {
  border-radius: var(--bulma-radius-rounded);
  padding-left: calc(calc(0.75em - 1px) + 0.375em);
  padding-right: calc(calc(0.75em - 1px) + 0.375em);
}
.input.is-static {
  background-color: transparent;
  border-color: transparent;
  box-shadow: none;
  padding-left: 0;
  padding-right: 0;
}

.textarea {
  --bulma-textarea-padding: var(--bulma-control-padding-horizontal);
  --bulma-textarea-max-height: 40em;
  --bulma-textarea-min-height: 8em;
  display: block;
  max-width: 100%;
  min-width: 100%;
  padding: var(--bulma-textarea-padding);
  resize: vertical;
}
.textarea:not([rows]) {
  max-height: var(--bulma-textarea-max-height);
  min-height: var(--bulma-textarea-min-height);
}
.textarea[rows] {
  height: initial;
}
.textarea.has-fixed-size {
  resize: none;
}

/* Bulma Form */
.radio, .checkbox {
  cursor: pointer;
  display: inline-block;
  line-height: 1.25;
  position: relative;
}
.radio input, .checkbox input {
  cursor: pointer;
}
[disabled].radio, [disabled].checkbox, fieldset[disabled] .radio, fieldset[disabled] .checkbox,
.radio input[disabled],
.checkbox input[disabled] {
  color: var(--bulma-text-weak);
  cursor: not-allowed;
}

.radio + .radio {
  margin-inline-start: 0.5em;
}

/* Bulma Form */
.select {
  --bulma-input-h: var(--bulma-scheme-h);
  --bulma-input-s: var(--bulma-scheme-s);
  --bulma-input-border-style: solid;
  --bulma-input-border-width: 1px;
  --bulma-input-border-l: var(--bulma-border-l);
  display: inline-block;
  max-width: 100%;
  position: relative;
  vertical-align: top;
}
.select:not(.is-multiple) {
  height: var(--bulma-control-height);
}
.select:not(.is-multiple):not(.is-loading)::after {
  inset-inline-end: 1.125em;
  z-index: 4;
}
.select.is-rounded select {
  border-radius: var(--bulma-radius-rounded);
  padding-inline-start: 1em;
}
.select select {
  cursor: pointer;
  display: block;
  font-size: 1em;
  max-width: 100%;
  outline: none;
}
.select select::-ms-expand {
  display: none;
}
.select select[disabled]:hover, fieldset[disabled] .select select:hover {
  border-color: var(--bulma-background);
}
.select select:not([multiple]) {
  padding-inline-end: 2.5em;
}
.select select[multiple] {
  height: auto;
  padding: 0;
}
.select select[multiple] option {
  padding: 0.5em 1em;
}
.select.is-white {
  --bulma-input-h: var(--bulma-white-h);
  --bulma-input-s: var(--bulma-white-s);
  --bulma-input-l: var(--bulma-white-l);
  --bulma-input-focus-h: var(--bulma-white-h);
  --bulma-input-focus-s: var(--bulma-white-s);
  --bulma-input-focus-l: var(--bulma-white-l);
  --bulma-input-border-l: var(--bulma-white-l);
}
.select.is-black {
  --bulma-input-h: var(--bulma-black-h);
  --bulma-input-s: var(--bulma-black-s);
  --bulma-input-l: var(--bulma-black-l);
  --bulma-input-focus-h: var(--bulma-black-h);
  --bulma-input-focus-s: var(--bulma-black-s);
  --bulma-input-focus-l: var(--bulma-black-l);
  --bulma-input-border-l: var(--bulma-black-l);
}
.select.is-light {
  --bulma-input-h: var(--bulma-light-h);
  --bulma-input-s: var(--bulma-light-s);
  --bulma-input-l: var(--bulma-light-l);
  --bulma-input-focus-h: var(--bulma-light-h);
  --bulma-input-focus-s: var(--bulma-light-s);
  --bulma-input-focus-l: var(--bulma-light-l);
  --bulma-input-border-l: var(--bulma-light-l);
}
.select.is-dark {
  --bulma-input-h: var(--bulma-dark-h);
  --bulma-input-s: var(--bulma-dark-s);
  --bulma-input-l: var(--bulma-dark-l);
  --bulma-input-focus-h: var(--bulma-dark-h);
  --bulma-input-focus-s: var(--bulma-dark-s);
  --bulma-input-focus-l: var(--bulma-dark-l);
  --bulma-input-border-l: var(--bulma-dark-l);
}
.select.is-text {
  --bulma-input-h: var(--bulma-text-h);
  --bulma-input-s: var(--bulma-text-s);
  --bulma-input-l: var(--bulma-text-l);
  --bulma-input-focus-h: var(--bulma-text-h);
  --bulma-input-focus-s: var(--bulma-text-s);
  --bulma-input-focus-l: var(--bulma-text-l);
  --bulma-input-border-l: var(--bulma-text-l);
}
.select.is-primary {
  --bulma-input-h: var(--bulma-primary-h);
  --bulma-input-s: var(--bulma-primary-s);
  --bulma-input-l: var(--bulma-primary-l);
  --bulma-input-focus-h: var(--bulma-primary-h);
  --bulma-input-focus-s: var(--bulma-primary-s);
  --bulma-input-focus-l: var(--bulma-primary-l);
  --bulma-input-border-l: var(--bulma-primary-l);
}
.select.is-link {
  --bulma-input-h: var(--bulma-link-h);
  --bulma-input-s: var(--bulma-link-s);
  --bulma-input-l: var(--bulma-link-l);
  --bulma-input-focus-h: var(--bulma-link-h);
  --bulma-input-focus-s: var(--bulma-link-s);
  --bulma-input-focus-l: var(--bulma-link-l);
  --bulma-input-border-l: var(--bulma-link-l);
}
.select.is-info {
  --bulma-input-h: var(--bulma-info-h);
  --bulma-input-s: var(--bulma-info-s);
  --bulma-input-l: var(--bulma-info-l);
  --bulma-input-focus-h: var(--bulma-info-h);
  --bulma-input-focus-s: var(--bulma-info-s);
  --bulma-input-focus-l: var(--bulma-info-l);
  --bulma-input-border-l: var(--bulma-info-l);
}
.select.is-success {
  --bulma-input-h: var(--bulma-success-h);
  --bulma-input-s: var(--bulma-success-s);
  --bulma-input-l: var(--bulma-success-l);
  --bulma-input-focus-h: var(--bulma-success-h);
  --bulma-input-focus-s: var(--bulma-success-s);
  --bulma-input-focus-l: var(--bulma-success-l);
  --bulma-input-border-l: var(--bulma-success-l);
}
.select.is-warning {
  --bulma-input-h: var(--bulma-warning-h);
  --bulma-input-s: var(--bulma-warning-s);
  --bulma-input-l: var(--bulma-warning-l);
  --bulma-input-focus-h: var(--bulma-warning-h);
  --bulma-input-focus-s: var(--bulma-warning-s);
  --bulma-input-focus-l: var(--bulma-warning-l);
  --bulma-input-border-l: var(--bulma-warning-l);
}
.select.is-danger {
  --bulma-input-h: var(--bulma-danger-h);
  --bulma-input-s: var(--bulma-danger-s);
  --bulma-input-l: var(--bulma-danger-l);
  --bulma-input-focus-h: var(--bulma-danger-h);
  --bulma-input-focus-s: var(--bulma-danger-s);
  --bulma-input-focus-l: var(--bulma-danger-l);
  --bulma-input-border-l: var(--bulma-danger-l);
}
.select.is-small {
  border-radius: var(--bulma-radius-small);
  font-size: var(--bulma-size-small);
}
.select.is-medium {
  font-size: var(--bulma-size-medium);
}
.select.is-large {
  font-size: var(--bulma-size-large);
}
.select.is-disabled::after {
  border-color: var(--bulma-text-weak) !important;
  opacity: 0.5;
}
.select.is-fullwidth {
  width: 100%;
}
.select.is-fullwidth select {
  width: 100%;
}
.select.is-loading::after {
  inset-inline-end: 0.625em;
  margin-top: 0;
  position: absolute;
  top: 0.625em;
  transform: none;
}
.select.is-loading.is-small:after {
  font-size: var(--bulma-size-small);
}
.select.is-loading.is-medium:after {
  font-size: var(--bulma-size-medium);
}
.select.is-loading.is-large:after {
  font-size: var(--bulma-size-large);
}

/* Bulma Form */
.file {
  --bulma-file-radius: var(--bulma-radius);
  --bulma-file-name-border-color: var(--bulma-border);
  --bulma-file-name-border-style: solid;
  --bulma-file-name-border-width: 1px 1px 1px 0;
  --bulma-file-name-max-width: 16em;
  --bulma-file-h: var(--bulma-scheme-h);
  --bulma-file-s: var(--bulma-scheme-s);
  --bulma-file-background-l: var(--bulma-scheme-main-ter-l);
  --bulma-file-background-l-delta: 0%;
  --bulma-file-hover-background-l-delta: -5%;
  --bulma-file-active-background-l-delta: -10%;
  --bulma-file-border-l: var(--bulma-border-l);
  --bulma-file-border-l-delta: 0%;
  --bulma-file-hover-border-l-delta: -10%;
  --bulma-file-active-border-l-delta: -20%;
  --bulma-file-cta-color-l: var(--bulma-text-strong-l);
  --bulma-file-name-color-l: var(--bulma-text-strong-l);
  --bulma-file-color-l-delta: 0%;
  --bulma-file-hover-color-l-delta: -5%;
  --bulma-file-active-color-l-delta: -10%;
  align-items: stretch;
  display: flex;
  justify-content: flex-start;
  position: relative;
}
.file.is-white {
  --bulma-file-h: var(--bulma-white-h);
  --bulma-file-s: var(--bulma-white-s);
  --bulma-file-background-l: var(--bulma-white-l);
  --bulma-file-border-l: var(--bulma-white-l);
  --bulma-file-cta-color-l: var(--bulma-white-invert-l);
  --bulma-file-name-color-l: var(--bulma-white-on-scheme-l);
}
.file.is-black {
  --bulma-file-h: var(--bulma-black-h);
  --bulma-file-s: var(--bulma-black-s);
  --bulma-file-background-l: var(--bulma-black-l);
  --bulma-file-border-l: var(--bulma-black-l);
  --bulma-file-cta-color-l: var(--bulma-black-invert-l);
  --bulma-file-name-color-l: var(--bulma-black-on-scheme-l);
}
.file.is-light {
  --bulma-file-h: var(--bulma-light-h);
  --bulma-file-s: var(--bulma-light-s);
  --bulma-file-background-l: var(--bulma-light-l);
  --bulma-file-border-l: var(--bulma-light-l);
  --bulma-file-cta-color-l: var(--bulma-light-invert-l);
  --bulma-file-name-color-l: var(--bulma-light-on-scheme-l);
}
.file.is-dark {
  --bulma-file-h: var(--bulma-dark-h);
  --bulma-file-s: var(--bulma-dark-s);
  --bulma-file-background-l: var(--bulma-dark-l);
  --bulma-file-border-l: var(--bulma-dark-l);
  --bulma-file-cta-color-l: var(--bulma-dark-invert-l);
  --bulma-file-name-color-l: var(--bulma-dark-on-scheme-l);
}
.file.is-text {
  --bulma-file-h: var(--bulma-text-h);
  --bulma-file-s: var(--bulma-text-s);
  --bulma-file-background-l: var(--bulma-text-l);
  --bulma-file-border-l: var(--bulma-text-l);
  --bulma-file-cta-color-l: var(--bulma-text-invert-l);
  --bulma-file-name-color-l: var(--bulma-text-on-scheme-l);
}
.file.is-primary {
  --bulma-file-h: var(--bulma-primary-h);
  --bulma-file-s: var(--bulma-primary-s);
  --bulma-file-background-l: var(--bulma-primary-l);
  --bulma-file-border-l: var(--bulma-primary-l);
  --bulma-file-cta-color-l: var(--bulma-primary-invert-l);
  --bulma-file-name-color-l: var(--bulma-primary-on-scheme-l);
}
.file.is-link {
  --bulma-file-h: var(--bulma-link-h);
  --bulma-file-s: var(--bulma-link-s);
  --bulma-file-background-l: var(--bulma-link-l);
  --bulma-file-border-l: var(--bulma-link-l);
  --bulma-file-cta-color-l: var(--bulma-link-invert-l);
  --bulma-file-name-color-l: var(--bulma-link-on-scheme-l);
}
.file.is-info {
  --bulma-file-h: var(--bulma-info-h);
  --bulma-file-s: var(--bulma-info-s);
  --bulma-file-background-l: var(--bulma-info-l);
  --bulma-file-border-l: var(--bulma-info-l);
  --bulma-file-cta-color-l: var(--bulma-info-invert-l);
  --bulma-file-name-color-l: var(--bulma-info-on-scheme-l);
}
.file.is-success {
  --bulma-file-h: var(--bulma-success-h);
  --bulma-file-s: var(--bulma-success-s);
  --bulma-file-background-l: var(--bulma-success-l);
  --bulma-file-border-l: var(--bulma-success-l);
  --bulma-file-cta-color-l: var(--bulma-success-invert-l);
  --bulma-file-name-color-l: var(--bulma-success-on-scheme-l);
}
.file.is-warning {
  --bulma-file-h: var(--bulma-warning-h);
  --bulma-file-s: var(--bulma-warning-s);
  --bulma-file-background-l: var(--bulma-warning-l);
  --bulma-file-border-l: var(--bulma-warning-l);
  --bulma-file-cta-color-l: var(--bulma-warning-invert-l);
  --bulma-file-name-color-l: var(--bulma-warning-on-scheme-l);
}
.file.is-danger {
  --bulma-file-h: var(--bulma-danger-h);
  --bulma-file-s: var(--bulma-danger-s);
  --bulma-file-background-l: var(--bulma-danger-l);
  --bulma-file-border-l: var(--bulma-danger-l);
  --bulma-file-cta-color-l: var(--bulma-danger-invert-l);
  --bulma-file-name-color-l: var(--bulma-danger-on-scheme-l);
}
.file.is-small {
  font-size: var(--bulma-size-small);
}
.file.is-normal {
  font-size: var(--bulma-size-normal);
}
.file.is-medium {
  font-size: var(--bulma-size-medium);
}
.file.is-medium .file-icon .fa {
  font-size: 1.5rem;
}
.file.is-large {
  font-size: var(--bulma-size-large);
}
.file.is-large .file-icon .fa {
  font-size: 2rem;
}
.file.has-name .file-cta {
  border-end-end-radius: 0;
  border-start-end-radius: 0;
}
.file.has-name .file-name {
  border-end-start-radius: 0;
  border-start-start-radius: 0;
}
.file.has-name.is-empty .file-cta {
  border-radius: var(--bulma-file-radius);
}
.file.has-name.is-empty .file-name {
  display: none;
}
.file.is-boxed .file-label {
  flex-direction: column;
}
.file.is-boxed .file-cta {
  flex-direction: column;
  height: auto;
  padding: 1em 3em;
}
.file.is-boxed .file-name {
  border-width: 0 1px 1px;
}
.file.is-boxed .file-icon {
  height: 1.5em;
  width: 1.5em;
}
.file.is-boxed .file-icon .fa {
  font-size: 1.5rem;
}
.file.is-boxed.is-small .file-icon .fa {
  font-size: 1rem;
}
.file.is-boxed.is-medium .file-icon .fa {
  font-size: 2rem;
}
.file.is-boxed.is-large .file-icon .fa {
  font-size: 2.5rem;
}
.file.is-boxed.has-name .file-cta {
  border-end-end-radius: 0;
  border-end-start-radius: 0;
  border-start-end-radius: var(--bulma-file-radius);
  border-start-start-radius: var(--bulma-file-radius);
}
.file.is-boxed.has-name .file-name {
  border-end-end-radius: var(--bulma-file-radius);
  border-end-start-radius: var(--bulma-file-radius);
  border-start-end-radius: 0;
  border-start-start-radius: 0;
  border-width: 0 1px 1px;
}
.file.is-centered {
  justify-content: center;
}
.file.is-fullwidth .file-label {
  width: 100%;
}
.file.is-fullwidth .file-name {
  flex-grow: 1;
  max-width: none;
}
.file.is-right {
  justify-content: flex-end;
}
.file.is-right .file-cta {
  border-radius: 0 var(--bulma-file-radius) var(--bulma-file-radius) 0;
}
.file.is-right .file-name {
  border-radius: var(--bulma-file-radius) 0 0 var(--bulma-file-radius);
  border-width: 1px 0 1px 1px;
  order: -1;
}

.file-label {
  align-items: stretch;
  display: flex;
  cursor: pointer;
  justify-content: flex-start;
  overflow: hidden;
  position: relative;
}
.file-label:hover {
  --bulma-file-background-l-delta: var(--bulma-file-hover-background-l-delta);
  --bulma-file-border-l-delta: var(--bulma-file-hover-border-l-delta);
  --bulma-file-color-l-delta: var(--bulma-file-hover-color-l-delta);
}
.file-label:active {
  --bulma-file-background-l-delta: var(--bulma-file-active-background-l-delta);
  --bulma-file-border-l-delta: var(--bulma-file-active-border-l-delta);
  --bulma-file-color-l-delta: var(--bulma-file-active-color-l-delta);
}

.file-input {
  height: 100%;
  left: 0;
  opacity: 0;
  outline: none;
  position: absolute;
  top: 0;
  width: 100%;
}

.file-cta,
.file-name {
  border-color: hsl(var(--bulma-file-h), var(--bulma-file-s), calc(var(--bulma-file-border-l) + var(--bulma-file-border-l-delta)));
  border-radius: var(--bulma-file-radius);
  font-size: 1em;
  padding-left: 1em;
  padding-right: 1em;
  white-space: nowrap;
}

.file-cta {
  background-color: hsl(var(--bulma-file-h), var(--bulma-file-s), calc(var(--bulma-file-background-l) + var(--bulma-file-background-l-delta)));
  color: hsl(var(--bulma-file-h), var(--bulma-file-s), calc(var(--bulma-file-cta-color-l) + var(--bulma-file-color-l-delta)));
}

.file-name {
  border-color: hsl(var(--bulma-file-h), var(--bulma-file-s), calc(var(--bulma-file-border-l) + var(--bulma-file-color-l-delta)));
  border-style: var(--bulma-file-name-border-style);
  border-width: var(--bulma-file-name-border-width);
  color: hsl(var(--bulma-file-h), var(--bulma-file-s), calc(var(--bulma-file-name-color-l) + var(--bulma-file-color-l-delta)));
  display: block;
  max-width: var(--bulma-file-name-max-width);
  overflow: hidden;
  text-align: inherit;
  text-overflow: ellipsis;
}

.file-icon {
  align-items: center;
  display: flex;
  height: 1em;
  justify-content: center;
  margin-inline-end: 0.5em;
  width: 1em;
}
.file-icon .fa {
  font-size: 1rem;
}

/* Bulma Form */
.label {
  color: var(--bulma-text-strong);
  display: block;
  font-size: var(--bulma-size-normal);
  font-weight: var(--bulma-weight-semibold);
}
.label:not(:last-child) {
  margin-bottom: 0.5em;
}
.label.is-small {
  font-size: var(--bulma-size-small);
}
.label.is-medium {
  font-size: var(--bulma-size-medium);
}
.label.is-large {
  font-size: var(--bulma-size-large);
}

.help {
  display: block;
  font-size: var(--bulma-size-small);
  margin-top: 0.25rem;
}
.help.is-white {
  color: hsl(var(--bulma-white-h), var(--bulma-white-s), var(--bulma-white-on-scheme-l));
}
.help.is-black {
  color: hsl(var(--bulma-black-h), var(--bulma-black-s), var(--bulma-black-on-scheme-l));
}
.help.is-light {
  color: hsl(var(--bulma-light-h), var(--bulma-light-s), var(--bulma-light-on-scheme-l));
}
.help.is-dark {
  color: hsl(var(--bulma-dark-h), var(--bulma-dark-s), var(--bulma-dark-on-scheme-l));
}
.help.is-text {
  color: hsl(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-text-on-scheme-l));
}
.help.is-primary {
  color: hsl(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-on-scheme-l));
}
.help.is-link {
  color: hsl(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-link-on-scheme-l));
}
.help.is-info {
  color: hsl(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-info-on-scheme-l));
}
.help.is-success {
  color: hsl(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-success-on-scheme-l));
}
.help.is-warning {
  color: hsl(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-warning-on-scheme-l));
}
.help.is-danger {
  color: hsl(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-danger-on-scheme-l));
}

.field {
  --bulma-block-spacing: 0.75rem;
}
.field.has-addons {
  display: flex;
  justify-content: flex-start;
}
.field.has-addons .control:not(:last-child) {
  margin-inline-end: -1px;
}
.field.has-addons .control:not(:first-child):not(:last-child) .button,
.field.has-addons .control:not(:first-child):not(:last-child) .input,
.field.has-addons .control:not(:first-child):not(:last-child) .select select {
  border-radius: 0;
}
.field.has-addons .control:first-child:not(:only-child) .button,
.field.has-addons .control:first-child:not(:only-child) .input,
.field.has-addons .control:first-child:not(:only-child) .select select {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}
.field.has-addons .control:last-child:not(:only-child) .button,
.field.has-addons .control:last-child:not(:only-child) .input,
.field.has-addons .control:last-child:not(:only-child) .select select {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}
.field.has-addons .control .button:not([disabled]):hover, .field.has-addons .control .button:not([disabled]).is-hovered,
.field.has-addons .control .input:not([disabled]):hover,
.field.has-addons .control .input:not([disabled]).is-hovered,
.field.has-addons .control .select select:not([disabled]):hover,
.field.has-addons .control .select select:not([disabled]).is-hovered {
  z-index: 2;
}
.field.has-addons .control .button:not([disabled]):focus, .field.has-addons .control .button:not([disabled]).is-focused, .field.has-addons .control .button:not([disabled]):active, .field.has-addons .control .button:not([disabled]).is-active,
.field.has-addons .control .input:not([disabled]):focus,
.field.has-addons .control .input:not([disabled]).is-focused,
.field.has-addons .control .input:not([disabled]):active,
.field.has-addons .control .input:not([disabled]).is-active,
.field.has-addons .control .select select:not([disabled]):focus,
.field.has-addons .control .select select:not([disabled]).is-focused,
.field.has-addons .control .select select:not([disabled]):active,
.field.has-addons .control .select select:not([disabled]).is-active {
  z-index: 3;
}
.field.has-addons .control .button:not([disabled]):focus:hover, .field.has-addons .control .button:not([disabled]).is-focused:hover, .field.has-addons .control .button:not([disabled]):active:hover, .field.has-addons .control .button:not([disabled]).is-active:hover,
.field.has-addons .control .input:not([disabled]):focus:hover,
.field.has-addons .control .input:not([disabled]).is-focused:hover,
.field.has-addons .control .input:not([disabled]):active:hover,
.field.has-addons .control .input:not([disabled]).is-active:hover,
.field.has-addons .control .select select:not([disabled]):focus:hover,
.field.has-addons .control .select select:not([disabled]).is-focused:hover,
.field.has-addons .control .select select:not([disabled]):active:hover,
.field.has-addons .control .select select:not([disabled]).is-active:hover {
  z-index: 4;
}
.field.has-addons .control.is-expanded {
  flex-grow: 1;
  flex-shrink: 1;
}
.field.has-addons.has-addons-centered {
  justify-content: center;
}
.field.has-addons.has-addons-right {
  justify-content: flex-end;
}
.field.has-addons.has-addons-fullwidth .control {
  flex-grow: 1;
  flex-shrink: 0;
}
.field.is-grouped {
  display: flex;
  gap: 0.75rem;
  justify-content: flex-start;
}
.field.is-grouped > .control {
  flex-shrink: 0;
}
.field.is-grouped > .control.is-expanded {
  flex-grow: 1;
  flex-shrink: 1;
}
.field.is-grouped.is-grouped-centered {
  justify-content: center;
}
.field.is-grouped.is-grouped-right {
  justify-content: flex-end;
}
.field.is-grouped.is-grouped-multiline {
  flex-wrap: wrap;
}
@media screen and (min-width: 769px), print {
  .field.is-horizontal {
    display: flex;
  }
}

.field-label .label {
  font-size: inherit;
}
@media screen and (max-width: 768px) {
  .field-label {
    margin-bottom: 0.5rem;
  }
}
@media screen and (min-width: 769px), print {
  .field-label {
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 0;
    margin-inline-end: 1.5rem;
    text-align: right;
  }
  .field-label.is-small {
    font-size: var(--bulma-size-small);
    padding-top: 0.375em;
  }
  .field-label.is-normal {
    padding-top: 0.375em;
  }
  .field-label.is-medium {
    font-size: var(--bulma-size-medium);
    padding-top: 0.375em;
  }
  .field-label.is-large {
    font-size: var(--bulma-size-large);
    padding-top: 0.375em;
  }
}

.field-body .field .field {
  margin-bottom: 0;
}
@media screen and (min-width: 769px), print {
  .field-body {
    display: flex;
    flex-basis: 0;
    flex-grow: 5;
    flex-shrink: 1;
  }
  .field-body .field {
    margin-bottom: 0;
  }
  .field-body > .field {
    flex-shrink: 1;
  }
  .field-body > .field:not(.is-narrow) {
    flex-grow: 1;
  }
  .field-body > .field:not(:last-child) {
    margin-inline-end: 0.75rem;
  }
}

.control {
  box-sizing: border-box;
  clear: both;
  font-size: var(--bulma-size-normal);
  position: relative;
  text-align: inherit;
}
.control.has-icons-left .input:hover ~ .icon,
.control.has-icons-left .select:hover ~ .icon, .control.has-icons-right .input:hover ~ .icon,
.control.has-icons-right .select:hover ~ .icon {
  color: var(--bulma-input-icon-hover-color);
}
.control.has-icons-left .input:focus ~ .icon,
.control.has-icons-left .select:focus ~ .icon, .control.has-icons-right .input:focus ~ .icon,
.control.has-icons-right .select:focus ~ .icon {
  color: var(--bulma-input-icon-focus-color);
}
.control.has-icons-left .input.is-small ~ .icon,
.control.has-icons-left .select.is-small ~ .icon, .control.has-icons-right .input.is-small ~ .icon,
.control.has-icons-right .select.is-small ~ .icon {
  font-size: var(--bulma-size-small);
}
.control.has-icons-left .input.is-medium ~ .icon,
.control.has-icons-left .select.is-medium ~ .icon, .control.has-icons-right .input.is-medium ~ .icon,
.control.has-icons-right .select.is-medium ~ .icon {
  font-size: var(--bulma-size-medium);
}
.control.has-icons-left .input.is-large ~ .icon,
.control.has-icons-left .select.is-large ~ .icon, .control.has-icons-right .input.is-large ~ .icon,
.control.has-icons-right .select.is-large ~ .icon {
  font-size: var(--bulma-size-large);
}
.control.has-icons-left .icon, .control.has-icons-right .icon {
  color: var(--bulma-input-icon-color);
  height: var(--bulma-input-height);
  pointer-events: none;
  position: absolute;
  top: 0;
  width: var(--bulma-input-height);
  z-index: 4;
}
.control.has-icons-left .input,
.control.has-icons-left .select select {
  padding-left: var(--bulma-input-height);
}
.control.has-icons-left .icon.is-left {
  left: 0;
}
.control.has-icons-right .input,
.control.has-icons-right .select select {
  padding-right: var(--bulma-input-height);
}
.control.has-icons-right .icon.is-right {
  right: 0;
}
.control.is-loading::after {
  inset-inline-end: 0.75em;
  position: absolute !important;
  top: 0.75em;
  z-index: 4;
}
.control.is-loading.is-small:after {
  font-size: var(--bulma-size-small);
}
.control.is-loading.is-medium:after {
  font-size: var(--bulma-size-medium);
}
.control.is-loading.is-large:after {
  font-size: var(--bulma-size-large);
}

/* Bulma Components */
.breadcrumb {
  --bulma-breadcrumb-item-color: var(--bulma-link-text);
  --bulma-breadcrumb-item-hover-color: var(--bulma-link-text-hover);
  --bulma-breadcrumb-item-active-color: var(--bulma-link-text-active);
  --bulma-breadcrumb-item-padding-vertical: 0;
  --bulma-breadcrumb-item-padding-horizontal: 0.75em;
  --bulma-breadcrumb-item-separator-color: var(--bulma-border);
}

.breadcrumb {
  font-size: var(--bulma-size-normal);
  white-space: nowrap;
}
.breadcrumb a {
  align-items: center;
  color: var(--bulma-breadcrumb-item-color);
  display: flex;
  justify-content: center;
  padding: var(--bulma-breadcrumb-item-padding-vertical) var(--bulma-breadcrumb-item-padding-horizontal);
}
.breadcrumb a:hover {
  color: var(--bulma-breadcrumb-item-hover-color);
}
.breadcrumb li {
  align-items: center;
  display: flex;
}
.breadcrumb li:first-child a {
  padding-inline-start: 0;
}
.breadcrumb li.is-active a {
  color: var(--bulma-breadcrumb-item-active-color);
  cursor: default;
  pointer-events: none;
}
.breadcrumb li + li::before {
  color: var(--bulma-breadcrumb-item-separator-color);
  content: "/";
}
.breadcrumb ul,
.breadcrumb ol {
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.breadcrumb .icon:first-child {
  margin-inline-end: 0.5em;
}
.breadcrumb .icon:last-child {
  margin-inline-start: 0.5em;
}
.breadcrumb.is-centered ol,
.breadcrumb.is-centered ul {
  justify-content: center;
}
.breadcrumb.is-right ol,
.breadcrumb.is-right ul {
  justify-content: flex-end;
}
.breadcrumb.is-small {
  font-size: var(--bulma-size-small);
}
.breadcrumb.is-medium {
  font-size: var(--bulma-size-medium);
}
.breadcrumb.is-large {
  font-size: var(--bulma-size-large);
}
.breadcrumb.has-arrow-separator li + li::before {
  content: "→";
}
.breadcrumb.has-bullet-separator li + li::before {
  content: "•";
}
.breadcrumb.has-dot-separator li + li::before {
  content: "\xb7";
}
.breadcrumb.has-succeeds-separator li + li::before {
  content: "≻";
}

.card {
  --bulma-card-color: var(--bulma-text);
  --bulma-card-background-color: var(--bulma-scheme-main);
  --bulma-card-shadow: var(--bulma-shadow);
  --bulma-card-radius: 0.75rem;
  --bulma-card-header-background-color: transparent;
  --bulma-card-header-color: var(--bulma-text-strong);
  --bulma-card-header-padding: 0.75rem 1rem;
  --bulma-card-header-shadow: 0 0.125em 0.25em hsla(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-scheme-invert-l), 0.1);
  --bulma-card-header-weight: var(--bulma-weight-bold);
  --bulma-card-content-background-color: transparent;
  --bulma-card-content-padding: 1.5rem;
  --bulma-card-footer-background-color: transparent;
  --bulma-card-footer-border-top: 1px solid var(--bulma-border-weak);
  --bulma-card-footer-padding: 0.75rem;
  --bulma-card-media-margin: var(--bulma-block-spacing);
}

.card {
  background-color: var(--bulma-card-background-color);
  border-radius: var(--bulma-card-radius);
  box-shadow: var(--bulma-card-shadow);
  color: var(--bulma-card-color);
  max-width: 100%;
  position: relative;
}

.card-footer:first-child, .card-content:first-child, .card-header:first-child {
  border-start-start-radius: var(--bulma-card-radius);
  border-start-end-radius: var(--bulma-card-radius);
}
.card-footer:last-child, .card-content:last-child, .card-header:last-child {
  border-end-start-radius: var(--bulma-card-radius);
  border-end-end-radius: var(--bulma-card-radius);
}

.card-header {
  background-color: var(--bulma-card-header-background-color);
  align-items: stretch;
  box-shadow: var(--bulma-card-header-shadow);
  display: flex;
}

.card-header-title {
  align-items: center;
  color: var(--bulma-card-header-color);
  display: flex;
  flex-grow: 1;
  font-weight: var(--bulma-card-header-weight);
  padding: var(--bulma-card-header-padding);
}
.card-header-title.is-centered {
  justify-content: center;
}

.card-header-icon {
  appearance: none;
  background: none;
  border: none;
  color: inherit;
  font-family: inherit;
  font-size: 1em;
  margin: 0;
  padding: 0;
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: var(--bulma-card-header-padding);
}

.card-image {
  display: block;
  position: relative;
}
.card-image:first-child img {
  border-start-start-radius: var(--bulma-card-radius);
  border-start-end-radius: var(--bulma-card-radius);
}
.card-image:last-child img {
  border-end-start-radius: var(--bulma-card-radius);
  border-end-end-radius: var(--bulma-card-radius);
}

.card-content {
  background-color: var(--bulma-card-content-background-color);
  padding: var(--bulma-card-content-padding);
}

.card-footer {
  background-color: var(--bulma-card-footer-background-color);
  border-top: var(--bulma-card-footer-border-top);
  align-items: stretch;
  display: flex;
}

.card-footer-item {
  align-items: center;
  display: flex;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 0;
  justify-content: center;
  padding: var(--bulma-card-footer-padding);
}
.card-footer-item:not(:last-child) {
  border-inline-end: var(--bulma-card-footer-border-top);
}

.card .media:not(:last-child) {
  margin-bottom: var(--bulma-card-media-margin);
}

.dropdown {
  --bulma-dropdown-menu-min-width: 12rem;
  --bulma-dropdown-content-background-color: var(--bulma-scheme-main);
  --bulma-dropdown-content-offset: 0.25rem;
  --bulma-dropdown-content-padding-bottom: 0.5rem;
  --bulma-dropdown-content-padding-top: 0.5rem;
  --bulma-dropdown-content-radius: var(--bulma-radius);
  --bulma-dropdown-content-shadow: var(--bulma-shadow);
  --bulma-dropdown-content-z: 20;
  --bulma-dropdown-item-h: var(--bulma-scheme-h);
  --bulma-dropdown-item-s: var(--bulma-scheme-s);
  --bulma-dropdown-item-l: var(--bulma-scheme-main-l);
  --bulma-dropdown-item-background-l: var(--bulma-scheme-main-l);
  --bulma-dropdown-item-background-l-delta: 0%;
  --bulma-dropdown-item-hover-background-l-delta: var(--bulma-hover-background-l-delta);
  --bulma-dropdown-item-active-background-l-delta: var(--bulma-active-background-l-delta);
  --bulma-dropdown-item-color-l: var(--bulma-text-strong-l);
  --bulma-dropdown-item-selected-h: var(--bulma-link-h);
  --bulma-dropdown-item-selected-s: var(--bulma-link-s);
  --bulma-dropdown-item-selected-l: var(--bulma-link-l);
  --bulma-dropdown-item-selected-background-l: var(--bulma-link-l);
  --bulma-dropdown-item-selected-color-l: var(--bulma-link-invert-l);
  --bulma-dropdown-divider-background-color: var(--bulma-border-weak);
}

.dropdown {
  display: inline-flex;
  position: relative;
  vertical-align: top;
}
.dropdown.is-active .dropdown-menu, .dropdown.is-hoverable:hover .dropdown-menu {
  display: block;
}
.dropdown.is-right .dropdown-menu {
  left: auto;
  right: 0;
}
.dropdown.is-up .dropdown-menu {
  bottom: 100%;
  padding-bottom: var(--bulma-dropdown-content-offset);
  padding-top: initial;
  top: auto;
}

.dropdown-menu {
  display: none;
  left: 0;
  min-width: var(--bulma-dropdown-menu-min-width);
  padding-top: var(--bulma-dropdown-content-offset);
  position: absolute;
  top: 100%;
  z-index: var(--bulma-dropdown-content-z);
}

.dropdown-content {
  background-color: var(--bulma-dropdown-content-background-color);
  border-radius: var(--bulma-dropdown-content-radius);
  box-shadow: var(--bulma-dropdown-content-shadow);
  padding-bottom: var(--bulma-dropdown-content-padding-bottom);
  padding-top: var(--bulma-dropdown-content-padding-top);
}

.dropdown-item {
  color: hsl(var(--bulma-dropdown-item-h), var(--bulma-dropdown-item-s), var(--bulma-dropdown-item-color-l));
  display: block;
  font-size: 0.875rem;
  line-height: 1.5;
  padding: 0.375rem 1rem;
}

a.dropdown-item,
button.dropdown-item {
  background-color: hsl(var(--bulma-dropdown-item-h), var(--bulma-dropdown-item-s), calc(var(--bulma-dropdown-item-background-l) + var(--bulma-dropdown-item-background-l-delta)));
  padding-inline-end: 3rem;
  text-align: inherit;
  white-space: nowrap;
  width: 100%;
}
a.dropdown-item:hover,
button.dropdown-item:hover {
  --bulma-dropdown-item-background-l-delta: var(--bulma-dropdown-item-hover-background-l-delta);
  --bulma-dropdown-item-border-l-delta: var(--bulma-dropdown-item-hover-border-l-delta);
}
a.dropdown-item:active,
button.dropdown-item:active {
  --bulma-dropdown-item-background-l-delta: var(--bulma-dropdown-item-active-background-l-delta);
  --bulma-dropdown-item-border-l-delta: var(--bulma-dropdown-item-active-border-l-delta);
}
a.dropdown-item.is-active, a.dropdown-item.is-selected,
button.dropdown-item.is-active,
button.dropdown-item.is-selected {
  --bulma-dropdown-item-h: var(--bulma-dropdown-item-selected-h);
  --bulma-dropdown-item-s: var(--bulma-dropdown-item-selected-s);
  --bulma-dropdown-item-l: var(--bulma-dropdown-item-selected-l);
  --bulma-dropdown-item-background-l: var(--bulma-dropdown-item-selected-background-l);
  --bulma-dropdown-item-color-l: var(--bulma-dropdown-item-selected-color-l);
}

.dropdown-divider {
  background-color: var(--bulma-dropdown-divider-background-color);
  border: none;
  display: block;
  height: 1px;
  margin: 0.5rem 0;
}

.menu {
  --bulma-menu-item-h: var(--bulma-scheme-h);
  --bulma-menu-item-s: var(--bulma-scheme-s);
  --bulma-menu-item-l: var(--bulma-scheme-main-l);
  --bulma-menu-item-background-l: var(--bulma-scheme-main-l);
  --bulma-menu-item-background-l-delta: 0%;
  --bulma-menu-item-hover-background-l-delta: var(--bulma-hover-background-l-delta);
  --bulma-menu-item-active-background-l-delta: var(--bulma-active-background-l-delta);
  --bulma-menu-item-color-l: var(--bulma-text-l);
  --bulma-menu-item-radius: var(--bulma-radius-small);
  --bulma-menu-item-selected-h: var(--bulma-link-h);
  --bulma-menu-item-selected-s: var(--bulma-link-s);
  --bulma-menu-item-selected-l: var(--bulma-link-l);
  --bulma-menu-item-selected-background-l: var(--bulma-link-l);
  --bulma-menu-item-selected-color-l: var(--bulma-link-invert-l);
  --bulma-menu-list-border-left: 1px solid var(--bulma-border);
  --bulma-menu-list-line-height: 1.25;
  --bulma-menu-list-link-padding: 0.5em 0.75em;
  --bulma-menu-nested-list-margin: 0.75em;
  --bulma-menu-nested-list-padding-left: 0.75em;
  --bulma-menu-label-color: var(--bulma-text-weak);
  --bulma-menu-label-font-size: 0.75em;
  --bulma-menu-label-letter-spacing: 0.1em;
  --bulma-menu-label-spacing: 1em;
}

.menu {
  font-size: var(--bulma-size-normal);
}
.menu.is-small {
  font-size: var(--bulma-size-small);
}
.menu.is-medium {
  font-size: var(--bulma-size-medium);
}
.menu.is-large {
  font-size: var(--bulma-size-large);
}

.menu-list {
  line-height: var(--bulma-menu-list-line-height);
}
.menu-list a,
.menu-list button,
.menu-list .menu-item {
  background-color: hsl(var(--bulma-menu-item-h), var(--bulma-menu-item-s), calc(var(--bulma-menu-item-background-l) + var(--bulma-menu-item-background-l-delta)));
  border-radius: var(--bulma-menu-item-radius);
  color: hsl(var(--bulma-menu-item-h), var(--bulma-menu-item-s), var(--bulma-menu-item-color-l));
  display: block;
  padding: var(--bulma-menu-list-link-padding);
  text-align: left;
  width: 100%;
}
.menu-list a:hover,
.menu-list button:hover,
.menu-list .menu-item:hover {
  --bulma-menu-item-background-l-delta: var(--bulma-menu-item-hover-background-l-delta);
}
.menu-list a:active,
.menu-list button:active,
.menu-list .menu-item:active {
  --bulma-menu-item-background-l-delta: var(--bulma-menu-item-active-background-l-delta);
}
.menu-list a.is-active, .menu-list a.is-selected,
.menu-list button.is-active,
.menu-list button.is-selected,
.menu-list .menu-item.is-active,
.menu-list .menu-item.is-selected {
  --bulma-menu-item-h: var(--bulma-menu-item-selected-h);
  --bulma-menu-item-s: var(--bulma-menu-item-selected-s);
  --bulma-menu-item-l: var(--bulma-menu-item-selected-l);
  --bulma-menu-item-background-l: var(--bulma-menu-item-selected-background-l);
  --bulma-menu-item-color-l: var(--bulma-menu-item-selected-color-l);
}
.menu-list li ul {
  border-inline-start: var(--bulma-menu-list-border-left);
  margin: var(--bulma-menu-nested-list-margin);
  padding-inline-start: var(--bulma-menu-nested-list-padding-left);
}

.menu-label {
  color: var(--bulma-menu-label-color);
  font-size: var(--bulma-menu-label-font-size);
  letter-spacing: var(--bulma-menu-label-letter-spacing);
  text-transform: uppercase;
}
.menu-label:not(:first-child) {
  margin-top: var(--bulma-menu-label-spacing);
}
.menu-label:not(:last-child) {
  margin-bottom: var(--bulma-menu-label-spacing);
}

.message {
  --bulma-message-border-l-delta: -20%;
  --bulma-message-radius: var(--bulma-radius);
  --bulma-message-header-weight: var(--bulma-weight-semibold);
  --bulma-message-header-padding: 1em 1.25em;
  --bulma-message-header-radius: var(--bulma-radius);
  --bulma-message-body-border-width: 0 0 0 4px;
  --bulma-message-body-color: var(--bulma-text);
  --bulma-message-body-padding: 1.25em 1.5em;
  --bulma-message-body-radius: var(--bulma-radius-small);
  --bulma-message-body-pre-code-background-color: transparent;
  --bulma-message-header-body-border-width: 0;
  --bulma-message-h: var(--bulma-scheme-h);
  --bulma-message-s: var(--bulma-scheme-s);
  --bulma-message-background-l: var(--bulma-background-l);
  --bulma-message-border-l: var(--bulma-border-l);
  --bulma-message-border-style: solid;
  --bulma-message-border-width: 0.25em;
  --bulma-message-color-l: var(--bulma-text-l);
  --bulma-message-header-background-l: var(--bulma-dark-l);
  --bulma-message-header-color-l: var(--bulma-text-dark-invert-l);
}

.message {
  border-radius: var(--bulma-message-radius);
  color: hsl(var(--bulma-message-h), var(--bulma-message-s), var(--bulma-message-color-l));
  font-size: var(--bulma-size-normal);
}
.message strong {
  color: currentColor;
}
.message a:not(.button):not(.tag):not(.dropdown-item) {
  color: currentColor;
  text-decoration: underline;
}
.message.is-small {
  font-size: var(--bulma-size-small);
}
.message.is-medium {
  font-size: var(--bulma-size-medium);
}
.message.is-large {
  font-size: var(--bulma-size-large);
}
.message.is-white {
  --bulma-message-h: var(--bulma-white-h);
  --bulma-message-s: var(--bulma-white-s);
  --bulma-message-border-l: calc(var(--bulma-white-l) + var(--bulma-message-border-l-delta));
  --bulma-message-color-l: var(--bulma-white-on-scheme-l);
  --bulma-message-header-background-l: var(--bulma-white-l);
  --bulma-message-header-color-l: var(--bulma-white-invert-l);
}
.message.is-black {
  --bulma-message-h: var(--bulma-black-h);
  --bulma-message-s: var(--bulma-black-s);
  --bulma-message-border-l: calc(var(--bulma-black-l) + var(--bulma-message-border-l-delta));
  --bulma-message-color-l: var(--bulma-black-on-scheme-l);
  --bulma-message-header-background-l: var(--bulma-black-l);
  --bulma-message-header-color-l: var(--bulma-black-invert-l);
}
.message.is-light {
  --bulma-message-h: var(--bulma-light-h);
  --bulma-message-s: var(--bulma-light-s);
  --bulma-message-border-l: calc(var(--bulma-light-l) + var(--bulma-message-border-l-delta));
  --bulma-message-color-l: var(--bulma-light-on-scheme-l);
  --bulma-message-header-background-l: var(--bulma-light-l);
  --bulma-message-header-color-l: var(--bulma-light-invert-l);
}
.message.is-dark {
  --bulma-message-h: var(--bulma-dark-h);
  --bulma-message-s: var(--bulma-dark-s);
  --bulma-message-border-l: calc(var(--bulma-dark-l) + var(--bulma-message-border-l-delta));
  --bulma-message-color-l: var(--bulma-dark-on-scheme-l);
  --bulma-message-header-background-l: var(--bulma-dark-l);
  --bulma-message-header-color-l: var(--bulma-dark-invert-l);
}
.message.is-text {
  --bulma-message-h: var(--bulma-text-h);
  --bulma-message-s: var(--bulma-text-s);
  --bulma-message-border-l: calc(var(--bulma-text-l) + var(--bulma-message-border-l-delta));
  --bulma-message-color-l: var(--bulma-text-on-scheme-l);
  --bulma-message-header-background-l: var(--bulma-text-l);
  --bulma-message-header-color-l: var(--bulma-text-invert-l);
}
.message.is-primary {
  --bulma-message-h: var(--bulma-primary-h);
  --bulma-message-s: var(--bulma-primary-s);
  --bulma-message-border-l: calc(var(--bulma-primary-l) + var(--bulma-message-border-l-delta));
  --bulma-message-color-l: var(--bulma-primary-on-scheme-l);
  --bulma-message-header-background-l: var(--bulma-primary-l);
  --bulma-message-header-color-l: var(--bulma-primary-invert-l);
}
.message.is-link {
  --bulma-message-h: var(--bulma-link-h);
  --bulma-message-s: var(--bulma-link-s);
  --bulma-message-border-l: calc(var(--bulma-link-l) + var(--bulma-message-border-l-delta));
  --bulma-message-color-l: var(--bulma-link-on-scheme-l);
  --bulma-message-header-background-l: var(--bulma-link-l);
  --bulma-message-header-color-l: var(--bulma-link-invert-l);
}
.message.is-info {
  --bulma-message-h: var(--bulma-info-h);
  --bulma-message-s: var(--bulma-info-s);
  --bulma-message-border-l: calc(var(--bulma-info-l) + var(--bulma-message-border-l-delta));
  --bulma-message-color-l: var(--bulma-info-on-scheme-l);
  --bulma-message-header-background-l: var(--bulma-info-l);
  --bulma-message-header-color-l: var(--bulma-info-invert-l);
}
.message.is-success {
  --bulma-message-h: var(--bulma-success-h);
  --bulma-message-s: var(--bulma-success-s);
  --bulma-message-border-l: calc(var(--bulma-success-l) + var(--bulma-message-border-l-delta));
  --bulma-message-color-l: var(--bulma-success-on-scheme-l);
  --bulma-message-header-background-l: var(--bulma-success-l);
  --bulma-message-header-color-l: var(--bulma-success-invert-l);
}
.message.is-warning {
  --bulma-message-h: var(--bulma-warning-h);
  --bulma-message-s: var(--bulma-warning-s);
  --bulma-message-border-l: calc(var(--bulma-warning-l) + var(--bulma-message-border-l-delta));
  --bulma-message-color-l: var(--bulma-warning-on-scheme-l);
  --bulma-message-header-background-l: var(--bulma-warning-l);
  --bulma-message-header-color-l: var(--bulma-warning-invert-l);
}
.message.is-danger {
  --bulma-message-h: var(--bulma-danger-h);
  --bulma-message-s: var(--bulma-danger-s);
  --bulma-message-border-l: calc(var(--bulma-danger-l) + var(--bulma-message-border-l-delta));
  --bulma-message-color-l: var(--bulma-danger-on-scheme-l);
  --bulma-message-header-background-l: var(--bulma-danger-l);
  --bulma-message-header-color-l: var(--bulma-danger-invert-l);
}

.message-header {
  align-items: center;
  background-color: hsl(var(--bulma-message-h), var(--bulma-message-s), var(--bulma-message-header-background-l));
  border-start-start-radius: var(--bulma-message-header-radius);
  border-start-end-radius: var(--bulma-message-header-radius);
  color: hsl(var(--bulma-message-h), var(--bulma-message-s), var(--bulma-message-header-color-l));
  display: flex;
  font-weight: var(--bulma-message-header-weight);
  justify-content: space-between;
  line-height: 1.25;
  padding: var(--bulma-message-header-padding);
  position: relative;
}
.message-header .delete {
  flex-grow: 0;
  flex-shrink: 0;
  margin-inline-start: 0.75em;
}
.message-header + .message-body {
  border-width: var(--bulma-message-header-body-border-width);
  border-start-start-radius: 0;
  border-start-end-radius: 0;
}

.message-body {
  background-color: hsl(var(--bulma-message-h), var(--bulma-message-s), var(--bulma-message-background-l));
  border-inline-start-color: hsl(var(--bulma-message-h), var(--bulma-message-s), var(--bulma-message-border-l));
  border-inline-start-style: var(--bulma-message-border-style);
  border-inline-start-width: var(--bulma-message-border-width);
  border-radius: var(--bulma-message-body-radius);
  padding: var(--bulma-message-body-padding);
}
.message-body code,
.message-body pre {
  background-color: hsl(var(--bulma-message-h), var(--bulma-message-s), var(--bulma-message-header-color-l));
  color: hsl(var(--bulma-message-h), var(--bulma-message-s), var(--bulma-message-header-background-l));
}
.message-body pre code {
  background-color: var(--bulma-message-body-pre-code-background-color);
}

.modal {
  --bulma-modal-z: 40;
  --bulma-modal-background-background-color: hsla(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-scheme-invert-l), 0.86);
  --bulma-modal-content-width: 40rem;
  --bulma-modal-content-margin-mobile: 1.25rem;
  --bulma-modal-content-spacing-mobile: 10rem;
  --bulma-modal-content-spacing-tablet: 2.5rem;
  --bulma-modal-close-dimensions: 2.5rem;
  --bulma-modal-close-right: 1.25rem;
  --bulma-modal-close-top: 1.25rem;
  --bulma-modal-card-spacing: 2.5rem;
  --bulma-modal-card-head-background-color: var(--bulma-scheme-main);
  --bulma-modal-card-head-padding: 2rem;
  --bulma-modal-card-head-radius: var(--bulma-radius-large);
  --bulma-modal-card-title-color: var(--bulma-text-strong);
  --bulma-modal-card-title-line-height: 1;
  --bulma-modal-card-title-size: var(--bulma-size-4);
  --bulma-modal-card-foot-background-color: var(--bulma-scheme-main-bis);
  --bulma-modal-card-foot-radius: var(--bulma-radius-large);
  --bulma-modal-card-body-background-color: var(--bulma-scheme-main);
  --bulma-modal-card-body-padding: 2rem;
}

.modal {
  align-items: center;
  display: none;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  position: fixed;
  z-index: var(--bulma-modal-z);
}
.modal.is-active {
  display: flex;
}

.modal-background {
  background-color: var(--bulma-modal-background-background-color);
}

.modal-content,
.modal-card {
  margin: 0 var(--bulma-modal-content-margin-mobile);
  max-height: calc(100vh - var(--bulma-modal-content-spacing-mobile));
  overflow: auto;
  position: relative;
  width: 100%;
}
@media screen and (min-width: 769px) {
  .modal-content,
  .modal-card {
    margin: 0 auto;
    max-height: calc(100vh - var(--bulma-modal-content-spacing-tablet));
    width: var(--bulma-modal-content-width);
  }
}

.modal-close {
  background: none;
  height: var(--bulma-modal-close-dimensions);
  inset-inline-end: var(--bulma-modal-close-right);
  position: fixed;
  top: var(--bulma-modal-close-top);
  width: var(--bulma-modal-close-dimensions);
}

.modal-card {
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - var(--bulma-modal-card-spacing));
  overflow: hidden;
  overflow-y: visible;
}

.modal-card-head,
.modal-card-foot {
  align-items: center;
  display: flex;
  flex-shrink: 0;
  justify-content: flex-start;
  padding: var(--bulma-modal-card-head-padding);
  position: relative;
}

.modal-card-head {
  background-color: var(--bulma-modal-card-head-background-color);
  border-start-start-radius: var(--bulma-modal-card-head-radius);
  border-start-end-radius: var(--bulma-modal-card-head-radius);
  box-shadow: var(--bulma-shadow);
}

.modal-card-title {
  color: var(--bulma-modal-card-title-color);
  flex-grow: 1;
  flex-shrink: 0;
  font-size: var(--bulma-modal-card-title-size);
  line-height: var(--bulma-modal-card-title-line-height);
}

.modal-card-foot {
  background-color: var(--bulma-modal-card-foot-background-color);
  border-end-start-radius: var(--bulma-modal-card-foot-radius);
  border-end-end-radius: var(--bulma-modal-card-foot-radius);
}

.modal-card-body {
  -webkit-overflow-scrolling: touch;
  background-color: var(--bulma-modal-card-body-background-color);
  flex-grow: 1;
  flex-shrink: 1;
  overflow: auto;
  padding: var(--bulma-modal-card-body-padding);
}

:root {
  --bulma-navbar-height: 3.25rem;
}

.navbar {
  --bulma-navbar-h: var(--bulma-scheme-h);
  --bulma-navbar-s: var(--bulma-scheme-s);
  --bulma-navbar-l: var(--bulma-scheme-main-l);
  --bulma-navbar-background-color: var(--bulma-scheme-main);
  --bulma-navbar-box-shadow-size: 0 0.125em 0 0;
  --bulma-navbar-box-shadow-color: var(--bulma-background);
  --bulma-navbar-padding-vertical: 1rem;
  --bulma-navbar-padding-horizontal: 2rem;
  --bulma-navbar-z: 30;
  --bulma-navbar-fixed-z: 30;
  --bulma-navbar-item-background-a: 0;
  --bulma-navbar-item-background-l: var(--bulma-scheme-main-l);
  --bulma-navbar-item-background-l-delta: 0%;
  --bulma-navbar-item-hover-background-l-delta: var(--bulma-hover-background-l-delta);
  --bulma-navbar-item-active-background-l-delta: var(--bulma-active-background-l-delta);
  --bulma-navbar-item-color-l: var(--bulma-text-l);
  --bulma-navbar-item-selected-h: var(--bulma-link-h);
  --bulma-navbar-item-selected-s: var(--bulma-link-s);
  --bulma-navbar-item-selected-l: var(--bulma-link-l);
  --bulma-navbar-item-selected-background-l: var(--bulma-link-l);
  --bulma-navbar-item-selected-color-l: var(--bulma-link-invert-l);
  --bulma-navbar-item-img-max-height: 1.75rem;
  --bulma-navbar-burger-color: var(--bulma-navbar-item-color);
  --bulma-navbar-tab-hover-background-color: transparent;
  --bulma-navbar-tab-hover-border-bottom-color: var(--bulma-link);
  --bulma-navbar-tab-active-color: var(--bulma-link);
  --bulma-navbar-tab-active-background-color: transparent;
  --bulma-navbar-tab-active-border-bottom-color: var(--bulma-link);
  --bulma-navbar-tab-active-border-bottom-style: solid;
  --bulma-navbar-tab-active-border-bottom-width: 0.1875em;
  --bulma-navbar-dropdown-background-color: var(--bulma-scheme-main);
  --bulma-navbar-dropdown-border-l: var(--bulma-border-l);
  --bulma-navbar-dropdown-border-color: hsl(var(--bulma-navbar-h), var(--bulma-navbar-s), var(--bulma-navbar-dropdown-border-l));
  --bulma-navbar-dropdown-border-style: solid;
  --bulma-navbar-dropdown-border-width: 0.125em;
  --bulma-navbar-dropdown-offset: -0.25em;
  --bulma-navbar-dropdown-arrow: var(--bulma-link);
  --bulma-navbar-dropdown-radius: var(--bulma-radius-large);
  --bulma-navbar-dropdown-z: 20;
  --bulma-navbar-dropdown-boxed-radius: var(--bulma-radius-large);
  --bulma-navbar-dropdown-boxed-shadow: 0 0.5em 0.5em hsla(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-scheme-invert-l), 0.1), 0 0 0 1px hsla(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-scheme-invert-l), 0.1);
  --bulma-navbar-dropdown-item-h: var(--bulma-scheme-h);
  --bulma-navbar-dropdown-item-s: var(--bulma-scheme-s);
  --bulma-navbar-dropdown-item-l: var(--bulma-scheme-main-l);
  --bulma-navbar-dropdown-item-background-l: var(--bulma-scheme-main-l);
  --bulma-navbar-dropdown-item-color-l: var(--bulma-text-l);
  --bulma-navbar-divider-background-l: var(--bulma-background-l);
  --bulma-navbar-divider-height: 0.125em;
  --bulma-navbar-bottom-box-shadow-size: 0 -0.125em 0 0;
}

.navbar {
  background-color: var(--bulma-navbar-background-color);
  min-height: var(--bulma-navbar-height);
  position: relative;
  z-index: var(--bulma-navbar-z);
}
.navbar.is-white {
  --bulma-navbar-h: var(--bulma-white-h);
  --bulma-navbar-s: var(--bulma-white-s);
  --bulma-navbar-l: var(--bulma-white-l);
  --bulma-burger-h: var(--bulma-white-h);
  --bulma-burger-s: var(--bulma-white-s);
  --bulma-burger-l: var(--bulma-white-invert-l);
  --bulma-navbar-background-color: var(--bulma-white);
  --bulma-navbar-item-background-l: var(--bulma-white-l);
  --bulma-navbar-item-color-l: var(--bulma-white-invert-l);
  --bulma-navbar-item-selected-h: var(--bulma-white-h);
  --bulma-navbar-item-selected-s: var(--bulma-white-s);
  --bulma-navbar-item-selected-l: var(--bulma-white-l);
  --bulma-navbar-item-selected-background-l: var(--bulma-white-l);
  --bulma-navbar-item-selected-color-l: var(--bulma-white-invert-l);
  --bulma-navbar-dropdown-arrow: var(--bulma-white-invert-l);
  --bulma-navbar-dropdown-background-color: hsl(var(--bulma-white-h), var(--bulma-white-s), var(--bulma-navbar-dropdown-item-background-l));
  --bulma-navbar-dropdown-item-h: var(--bulma-white-h);
  --bulma-navbar-dropdown-item-s: var(--bulma-white-s);
}
.navbar.is-black {
  --bulma-navbar-h: var(--bulma-black-h);
  --bulma-navbar-s: var(--bulma-black-s);
  --bulma-navbar-l: var(--bulma-black-l);
  --bulma-burger-h: var(--bulma-black-h);
  --bulma-burger-s: var(--bulma-black-s);
  --bulma-burger-l: var(--bulma-black-invert-l);
  --bulma-navbar-background-color: var(--bulma-black);
  --bulma-navbar-item-background-l: var(--bulma-black-l);
  --bulma-navbar-item-color-l: var(--bulma-black-invert-l);
  --bulma-navbar-item-selected-h: var(--bulma-black-h);
  --bulma-navbar-item-selected-s: var(--bulma-black-s);
  --bulma-navbar-item-selected-l: var(--bulma-black-l);
  --bulma-navbar-item-selected-background-l: var(--bulma-black-l);
  --bulma-navbar-item-selected-color-l: var(--bulma-black-invert-l);
  --bulma-navbar-dropdown-arrow: var(--bulma-black-invert-l);
  --bulma-navbar-dropdown-background-color: hsl(var(--bulma-black-h), var(--bulma-black-s), var(--bulma-navbar-dropdown-item-background-l));
  --bulma-navbar-dropdown-item-h: var(--bulma-black-h);
  --bulma-navbar-dropdown-item-s: var(--bulma-black-s);
}
.navbar.is-light {
  --bulma-navbar-h: var(--bulma-light-h);
  --bulma-navbar-s: var(--bulma-light-s);
  --bulma-navbar-l: var(--bulma-light-l);
  --bulma-burger-h: var(--bulma-light-h);
  --bulma-burger-s: var(--bulma-light-s);
  --bulma-burger-l: var(--bulma-light-invert-l);
  --bulma-navbar-background-color: var(--bulma-light);
  --bulma-navbar-item-background-l: var(--bulma-light-l);
  --bulma-navbar-item-color-l: var(--bulma-light-invert-l);
  --bulma-navbar-item-selected-h: var(--bulma-light-h);
  --bulma-navbar-item-selected-s: var(--bulma-light-s);
  --bulma-navbar-item-selected-l: var(--bulma-light-l);
  --bulma-navbar-item-selected-background-l: var(--bulma-light-l);
  --bulma-navbar-item-selected-color-l: var(--bulma-light-invert-l);
  --bulma-navbar-dropdown-arrow: var(--bulma-light-invert-l);
  --bulma-navbar-dropdown-background-color: hsl(var(--bulma-light-h), var(--bulma-light-s), var(--bulma-navbar-dropdown-item-background-l));
  --bulma-navbar-dropdown-item-h: var(--bulma-light-h);
  --bulma-navbar-dropdown-item-s: var(--bulma-light-s);
}
.navbar.is-dark {
  --bulma-navbar-h: var(--bulma-dark-h);
  --bulma-navbar-s: var(--bulma-dark-s);
  --bulma-navbar-l: var(--bulma-dark-l);
  --bulma-burger-h: var(--bulma-dark-h);
  --bulma-burger-s: var(--bulma-dark-s);
  --bulma-burger-l: var(--bulma-dark-invert-l);
  --bulma-navbar-background-color: var(--bulma-dark);
  --bulma-navbar-item-background-l: var(--bulma-dark-l);
  --bulma-navbar-item-color-l: var(--bulma-dark-invert-l);
  --bulma-navbar-item-selected-h: var(--bulma-dark-h);
  --bulma-navbar-item-selected-s: var(--bulma-dark-s);
  --bulma-navbar-item-selected-l: var(--bulma-dark-l);
  --bulma-navbar-item-selected-background-l: var(--bulma-dark-l);
  --bulma-navbar-item-selected-color-l: var(--bulma-dark-invert-l);
  --bulma-navbar-dropdown-arrow: var(--bulma-dark-invert-l);
  --bulma-navbar-dropdown-background-color: hsl(var(--bulma-dark-h), var(--bulma-dark-s), var(--bulma-navbar-dropdown-item-background-l));
  --bulma-navbar-dropdown-item-h: var(--bulma-dark-h);
  --bulma-navbar-dropdown-item-s: var(--bulma-dark-s);
}
.navbar.is-text {
  --bulma-navbar-h: var(--bulma-text-h);
  --bulma-navbar-s: var(--bulma-text-s);
  --bulma-navbar-l: var(--bulma-text-l);
  --bulma-burger-h: var(--bulma-text-h);
  --bulma-burger-s: var(--bulma-text-s);
  --bulma-burger-l: var(--bulma-text-invert-l);
  --bulma-navbar-background-color: var(--bulma-text);
  --bulma-navbar-item-background-l: var(--bulma-text-l);
  --bulma-navbar-item-color-l: var(--bulma-text-invert-l);
  --bulma-navbar-item-selected-h: var(--bulma-text-h);
  --bulma-navbar-item-selected-s: var(--bulma-text-s);
  --bulma-navbar-item-selected-l: var(--bulma-text-l);
  --bulma-navbar-item-selected-background-l: var(--bulma-text-l);
  --bulma-navbar-item-selected-color-l: var(--bulma-text-invert-l);
  --bulma-navbar-dropdown-arrow: var(--bulma-text-invert-l);
  --bulma-navbar-dropdown-background-color: hsl(var(--bulma-text-h), var(--bulma-text-s), var(--bulma-navbar-dropdown-item-background-l));
  --bulma-navbar-dropdown-item-h: var(--bulma-text-h);
  --bulma-navbar-dropdown-item-s: var(--bulma-text-s);
}
.navbar.is-primary {
  --bulma-navbar-h: var(--bulma-primary-h);
  --bulma-navbar-s: var(--bulma-primary-s);
  --bulma-navbar-l: var(--bulma-primary-l);
  --bulma-burger-h: var(--bulma-primary-h);
  --bulma-burger-s: var(--bulma-primary-s);
  --bulma-burger-l: var(--bulma-primary-invert-l);
  --bulma-navbar-background-color: var(--bulma-primary);
  --bulma-navbar-item-background-l: var(--bulma-primary-l);
  --bulma-navbar-item-color-l: var(--bulma-primary-invert-l);
  --bulma-navbar-item-selected-h: var(--bulma-primary-h);
  --bulma-navbar-item-selected-s: var(--bulma-primary-s);
  --bulma-navbar-item-selected-l: var(--bulma-primary-l);
  --bulma-navbar-item-selected-background-l: var(--bulma-primary-l);
  --bulma-navbar-item-selected-color-l: var(--bulma-primary-invert-l);
  --bulma-navbar-dropdown-arrow: var(--bulma-primary-invert-l);
  --bulma-navbar-dropdown-background-color: hsl(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-navbar-dropdown-item-background-l));
  --bulma-navbar-dropdown-item-h: var(--bulma-primary-h);
  --bulma-navbar-dropdown-item-s: var(--bulma-primary-s);
}
.navbar.is-link {
  --bulma-navbar-h: var(--bulma-link-h);
  --bulma-navbar-s: var(--bulma-link-s);
  --bulma-navbar-l: var(--bulma-link-l);
  --bulma-burger-h: var(--bulma-link-h);
  --bulma-burger-s: var(--bulma-link-s);
  --bulma-burger-l: var(--bulma-link-invert-l);
  --bulma-navbar-background-color: var(--bulma-link);
  --bulma-navbar-item-background-l: var(--bulma-link-l);
  --bulma-navbar-item-color-l: var(--bulma-link-invert-l);
  --bulma-navbar-item-selected-h: var(--bulma-link-h);
  --bulma-navbar-item-selected-s: var(--bulma-link-s);
  --bulma-navbar-item-selected-l: var(--bulma-link-l);
  --bulma-navbar-item-selected-background-l: var(--bulma-link-l);
  --bulma-navbar-item-selected-color-l: var(--bulma-link-invert-l);
  --bulma-navbar-dropdown-arrow: var(--bulma-link-invert-l);
  --bulma-navbar-dropdown-background-color: hsl(var(--bulma-link-h), var(--bulma-link-s), var(--bulma-navbar-dropdown-item-background-l));
  --bulma-navbar-dropdown-item-h: var(--bulma-link-h);
  --bulma-navbar-dropdown-item-s: var(--bulma-link-s);
}
.navbar.is-info {
  --bulma-navbar-h: var(--bulma-info-h);
  --bulma-navbar-s: var(--bulma-info-s);
  --bulma-navbar-l: var(--bulma-info-l);
  --bulma-burger-h: var(--bulma-info-h);
  --bulma-burger-s: var(--bulma-info-s);
  --bulma-burger-l: var(--bulma-info-invert-l);
  --bulma-navbar-background-color: var(--bulma-info);
  --bulma-navbar-item-background-l: var(--bulma-info-l);
  --bulma-navbar-item-color-l: var(--bulma-info-invert-l);
  --bulma-navbar-item-selected-h: var(--bulma-info-h);
  --bulma-navbar-item-selected-s: var(--bulma-info-s);
  --bulma-navbar-item-selected-l: var(--bulma-info-l);
  --bulma-navbar-item-selected-background-l: var(--bulma-info-l);
  --bulma-navbar-item-selected-color-l: var(--bulma-info-invert-l);
  --bulma-navbar-dropdown-arrow: var(--bulma-info-invert-l);
  --bulma-navbar-dropdown-background-color: hsl(var(--bulma-info-h), var(--bulma-info-s), var(--bulma-navbar-dropdown-item-background-l));
  --bulma-navbar-dropdown-item-h: var(--bulma-info-h);
  --bulma-navbar-dropdown-item-s: var(--bulma-info-s);
}
.navbar.is-success {
  --bulma-navbar-h: var(--bulma-success-h);
  --bulma-navbar-s: var(--bulma-success-s);
  --bulma-navbar-l: var(--bulma-success-l);
  --bulma-burger-h: var(--bulma-success-h);
  --bulma-burger-s: var(--bulma-success-s);
  --bulma-burger-l: var(--bulma-success-invert-l);
  --bulma-navbar-background-color: var(--bulma-success);
  --bulma-navbar-item-background-l: var(--bulma-success-l);
  --bulma-navbar-item-color-l: var(--bulma-success-invert-l);
  --bulma-navbar-item-selected-h: var(--bulma-success-h);
  --bulma-navbar-item-selected-s: var(--bulma-success-s);
  --bulma-navbar-item-selected-l: var(--bulma-success-l);
  --bulma-navbar-item-selected-background-l: var(--bulma-success-l);
  --bulma-navbar-item-selected-color-l: var(--bulma-success-invert-l);
  --bulma-navbar-dropdown-arrow: var(--bulma-success-invert-l);
  --bulma-navbar-dropdown-background-color: hsl(var(--bulma-success-h), var(--bulma-success-s), var(--bulma-navbar-dropdown-item-background-l));
  --bulma-navbar-dropdown-item-h: var(--bulma-success-h);
  --bulma-navbar-dropdown-item-s: var(--bulma-success-s);
}
.navbar.is-warning {
  --bulma-navbar-h: var(--bulma-warning-h);
  --bulma-navbar-s: var(--bulma-warning-s);
  --bulma-navbar-l: var(--bulma-warning-l);
  --bulma-burger-h: var(--bulma-warning-h);
  --bulma-burger-s: var(--bulma-warning-s);
  --bulma-burger-l: var(--bulma-warning-invert-l);
  --bulma-navbar-background-color: var(--bulma-warning);
  --bulma-navbar-item-background-l: var(--bulma-warning-l);
  --bulma-navbar-item-color-l: var(--bulma-warning-invert-l);
  --bulma-navbar-item-selected-h: var(--bulma-warning-h);
  --bulma-navbar-item-selected-s: var(--bulma-warning-s);
  --bulma-navbar-item-selected-l: var(--bulma-warning-l);
  --bulma-navbar-item-selected-background-l: var(--bulma-warning-l);
  --bulma-navbar-item-selected-color-l: var(--bulma-warning-invert-l);
  --bulma-navbar-dropdown-arrow: var(--bulma-warning-invert-l);
  --bulma-navbar-dropdown-background-color: hsl(var(--bulma-warning-h), var(--bulma-warning-s), var(--bulma-navbar-dropdown-item-background-l));
  --bulma-navbar-dropdown-item-h: var(--bulma-warning-h);
  --bulma-navbar-dropdown-item-s: var(--bulma-warning-s);
}
.navbar.is-danger {
  --bulma-navbar-h: var(--bulma-danger-h);
  --bulma-navbar-s: var(--bulma-danger-s);
  --bulma-navbar-l: var(--bulma-danger-l);
  --bulma-burger-h: var(--bulma-danger-h);
  --bulma-burger-s: var(--bulma-danger-s);
  --bulma-burger-l: var(--bulma-danger-invert-l);
  --bulma-navbar-background-color: var(--bulma-danger);
  --bulma-navbar-item-background-l: var(--bulma-danger-l);
  --bulma-navbar-item-color-l: var(--bulma-danger-invert-l);
  --bulma-navbar-item-selected-h: var(--bulma-danger-h);
  --bulma-navbar-item-selected-s: var(--bulma-danger-s);
  --bulma-navbar-item-selected-l: var(--bulma-danger-l);
  --bulma-navbar-item-selected-background-l: var(--bulma-danger-l);
  --bulma-navbar-item-selected-color-l: var(--bulma-danger-invert-l);
  --bulma-navbar-dropdown-arrow: var(--bulma-danger-invert-l);
  --bulma-navbar-dropdown-background-color: hsl(var(--bulma-danger-h), var(--bulma-danger-s), var(--bulma-navbar-dropdown-item-background-l));
  --bulma-navbar-dropdown-item-h: var(--bulma-danger-h);
  --bulma-navbar-dropdown-item-s: var(--bulma-danger-s);
}
.navbar > .container {
  align-items: stretch;
  display: flex;
  min-height: var(--bulma-navbar-height);
  width: 100%;
}
.navbar.has-shadow {
  box-shadow: var(--bulma-navbar-box-shadow-size) var(--bulma-navbar-box-shadow-color);
}
.navbar.is-fixed-bottom, .navbar.is-fixed-top {
  left: 0;
  position: fixed;
  right: 0;
  z-index: var(--bulma-navbar-fixed-z);
}
.navbar.is-fixed-bottom {
  bottom: 0;
}
.navbar.is-fixed-bottom.has-shadow {
  box-shadow: var(--bulma-navbar-bottom-box-shadow-size) var(--bulma-navbar-box-shadow-color);
}
.navbar.is-fixed-top {
  top: 0;
}

html.has-navbar-fixed-top,
body.has-navbar-fixed-top {
  padding-top: var(--bulma-navbar-height);
}
html.has-navbar-fixed-bottom,
body.has-navbar-fixed-bottom {
  padding-bottom: var(--bulma-navbar-height);
}

.navbar-brand,
.navbar-tabs {
  align-items: stretch;
  display: flex;
  flex-shrink: 0;
  min-height: var(--bulma-navbar-height);
}

.navbar-tabs {
  -webkit-overflow-scrolling: touch;
  max-width: 100vw;
  overflow-x: auto;
  overflow-y: hidden;
}

.navbar-burger {
  align-items: center;
  appearance: none;
  background: none;
  border: none;
  border-radius: var(--bulma-burger-border-radius);
  color: hsl(var(--bulma-burger-h), var(--bulma-burger-s), var(--bulma-burger-l));
  cursor: pointer;
  display: inline-flex;
  flex-direction: column;
  flex-shrink: 0;
  height: 2.5rem;
  justify-content: center;
  position: relative;
  vertical-align: top;
  width: 2.5rem;
  align-self: center;
  margin-inline-start: auto;
  margin-inline-end: 0.375rem;
}
.navbar-burger span {
  background-color: currentColor;
  display: block;
  height: var(--bulma-burger-item-height);
  left: calc(50% - (var(--bulma-burger-item-width)) / 2);
  position: absolute;
  transform-origin: center;
  transition-duration: var(--bulma-duration);
  transition-property: background-color, color, opacity, transform;
  transition-timing-function: var(--bulma-easing);
  width: var(--bulma-burger-item-width);
}
.navbar-burger span:nth-child(1), .navbar-burger span:nth-child(2) {
  top: calc(50% - (var(--bulma-burger-item-height)) / 2);
}
.navbar-burger span:nth-child(3) {
  bottom: calc(50% + var(--bulma-burger-gap));
}
.navbar-burger span:nth-child(4) {
  top: calc(50% + var(--bulma-burger-gap));
}
.navbar-burger:hover {
  background-color: hsla(var(--bulma-burger-h), var(--bulma-burger-s), var(--bulma-burger-l), 0.1);
}
.navbar-burger:active {
  background-color: hsla(var(--bulma-burger-h), var(--bulma-burger-s), var(--bulma-burger-l), 0.2);
}
.navbar-burger.is-active span:nth-child(1) {
  transform: rotate(-45deg);
}
.navbar-burger.is-active span:nth-child(2) {
  transform: rotate(45deg);
}
.navbar-burger.is-active span:nth-child(3), .navbar-burger.is-active span:nth-child(4) {
  opacity: 0;
}

.navbar-menu {
  display: none;
}

.navbar-item,
.navbar-link {
  color: hsl(var(--bulma-navbar-h), var(--bulma-navbar-s), var(--bulma-navbar-item-color-l));
  display: block;
  line-height: 1.5;
  padding: 0.5rem 0.75rem;
  position: relative;
}
.navbar-item .icon:only-child,
.navbar-link .icon:only-child {
  margin-left: -0.25rem;
  margin-right: -0.25rem;
}

a.navbar-item,
.navbar-link {
  background-color: hsla(var(--bulma-navbar-h), var(--bulma-navbar-s), calc(var(--bulma-navbar-item-background-l) + var(--bulma-navbar-item-background-l-delta)), var(--bulma-navbar-item-background-a));
  cursor: pointer;
}
a.navbar-item:focus, a.navbar-item:focus-within, a.navbar-item:hover,
.navbar-link:focus,
.navbar-link:focus-within,
.navbar-link:hover {
  --bulma-navbar-item-background-l-delta: var(--bulma-navbar-item-hover-background-l-delta);
  --bulma-navbar-item-background-a: 1;
}
a.navbar-item:active,
.navbar-link:active {
  --bulma-navbar-item-background-l-delta: var(--bulma-navbar-item-active-background-l-delta);
  --bulma-navbar-item-background-a: 1;
}
a.navbar-item.is-active, a.navbar-item.is-selected,
.navbar-link.is-active,
.navbar-link.is-selected {
  --bulma-navbar-h: var(--bulma-navbar-item-selected-h);
  --bulma-navbar-s: var(--bulma-navbar-item-selected-s);
  --bulma-navbar-l: var(--bulma-navbar-item-selected-l);
  --bulma-navbar-item-background-l: var(--bulma-navbar-item-selected-background-l);
  --bulma-navbar-item-background-a: 1;
  --bulma-navbar-item-color-l: var(--bulma-navbar-item-selected-color-l);
}

.navbar-item {
  flex-grow: 0;
  flex-shrink: 0;
}
.navbar-item img,
.navbar-item svg {
  max-height: var(--bulma-navbar-item-img-max-height);
}
.navbar-item.has-dropdown {
  padding: 0;
}
.navbar-item.is-expanded {
  flex-grow: 1;
  flex-shrink: 1;
}
.navbar-item.is-tab {
  border-bottom: 1px solid transparent;
  min-height: var(--bulma-navbar-height);
  padding-bottom: calc(0.5rem - 1px);
}
.navbar-item.is-tab:focus, .navbar-item.is-tab:hover {
  background-color: var(--bulma-navbar-tab-hover-background-color);
  border-bottom-color: var(--bulma-navbar-tab-hover-border-bottom-color);
}
.navbar-item.is-tab.is-active {
  background-color: var(--bulma-navbar-tab-active-background-color);
  border-bottom-color: var(--bulma-navbar-tab-active-border-bottom-color);
  border-bottom-style: var(--bulma-navbar-tab-active-border-bottom-style);
  border-bottom-width: var(--bulma-navbar-tab-active-border-bottom-width);
  color: var(--bulma-navbar-tab-active-color);
  padding-bottom: calc(0.5rem - var(--bulma-navbar-tab-active-border-bottom-width));
}

.navbar-content {
  flex-grow: 1;
  flex-shrink: 1;
}

.navbar-link:not(.is-arrowless) {
  padding-inline-end: 2.5em;
}
.navbar-link:not(.is-arrowless)::after {
  border-color: var(--bulma-navbar-dropdown-arrow);
  margin-top: -0.375em;
  inset-inline-end: 1.125em;
}

.navbar-dropdown {
  font-size: 0.875rem;
  padding-bottom: 0.75rem;
  padding-top: 0.5rem;
}
.navbar-dropdown .navbar-item {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
.navbar-dropdown .navbar-item:not(.is-active, .is-selected) {
  background-color: hsl(var(--bulma-navbar-dropdown-item-h), var(--bulma-navbar-dropdown-item-s), calc(var(--bulma-navbar-dropdown-item-background-l) + var(--bulma-navbar-item-background-l-delta)));
  color: hsl(var(--bulma-navbar-dropdown-item-h), var(--bulma-navbar-dropdown-item-s), var(--bulma-navbar-dropdown-item-color-l));
}

.navbar-divider {
  background-color: hsl(var(--bulma-navbar-h), var(--bulma-navbar-s), var(--bulma-navbar-divider-background-l));
  border: none;
  display: none;
  height: var(--bulma-navbar-divider-height);
  margin: 0.5rem 0;
}

@media screen and (max-width: 1023px) {
  .navbar > .container {
    display: block;
  }
  .navbar-brand .navbar-item,
  .navbar-tabs .navbar-item {
    align-items: center;
    display: flex;
  }
  .navbar-link::after {
    display: none;
  }
  .navbar-menu {
    background-color: var(--bulma-navbar-background-color);
    box-shadow: 0 0.5em 1em hsla(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-scheme-invert-l), 0.1);
    padding: 0.5rem 0;
  }
  .navbar-menu.is-active {
    display: block;
  }
  .navbar.is-fixed-bottom-touch, .navbar.is-fixed-top-touch {
    left: 0;
    position: fixed;
    right: 0;
    z-index: var(--bulma-navbar-fixed-z);
  }
  .navbar.is-fixed-bottom-touch {
    bottom: 0;
  }
  .navbar.is-fixed-bottom-touch.has-shadow {
    box-shadow: 0 -0.125em 0.1875em hsla(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-scheme-invert-l), 0.1);
  }
  .navbar.is-fixed-top-touch {
    top: 0;
  }
  .navbar.is-fixed-top .navbar-menu, .navbar.is-fixed-top-touch .navbar-menu {
    -webkit-overflow-scrolling: touch;
    max-height: calc(100vh - var(--bulma-navbar-height));
    overflow: auto;
  }
  html.has-navbar-fixed-top-touch,
  body.has-navbar-fixed-top-touch {
    padding-top: var(--bulma-navbar-height);
  }
  html.has-navbar-fixed-bottom-touch,
  body.has-navbar-fixed-bottom-touch {
    padding-bottom: var(--bulma-navbar-height);
  }
}
@media screen and (min-width: 1024px) {
  .navbar,
  .navbar-menu,
  .navbar-start,
  .navbar-end {
    align-items: stretch;
    display: flex;
  }
  .navbar {
    min-height: var(--bulma-navbar-height);
  }
  .navbar.is-spaced {
    padding: var(--bulma-navbar-padding-vertical) var(--bulma-navbar-padding-horizontal);
  }
  .navbar.is-spaced .navbar-start,
  .navbar.is-spaced .navbar-end {
    align-items: center;
  }
  .navbar.is-spaced a.navbar-item,
  .navbar.is-spaced .navbar-link {
    border-radius: var(--bulma-radius);
  }
  .navbar.is-transparent {
    --bulma-navbar-item-background-a: 0;
  }
  .navbar.is-transparent .navbar-dropdown a.navbar-item {
    background-color: hsl(var(--bulma-navbar-h), var(--bulma-navbar-s), calc(var(--bulma-navbar-item-background-l) + var(--bulma-navbar-item-background-l-delta)));
  }
  .navbar.is-transparent .navbar-dropdown a.navbar-item.is-active, .navbar.is-transparent .navbar-dropdown a.navbar-item.is-selected {
    --bulma-navbar-h: var(--bulma-navbar-item-selected-h);
    --bulma-navbar-s: var(--bulma-navbar-item-selected-s);
    --bulma-navbar-l: var(--bulma-navbar-item-selected-l);
    --bulma-navbar-item-background-l: var(--bulma-navbar-item-selected-background-l);
    --bulma-navbar-item-color-l: var(--bulma-navbar-item-selected-color-l);
  }
  .navbar-burger {
    display: none;
  }
  .navbar-item,
  .navbar-link {
    align-items: center;
    display: flex;
  }
  .navbar-item.has-dropdown {
    align-items: stretch;
  }
  .navbar-item.has-dropdown-up .navbar-link::after {
    transform: rotate(135deg) translate(0.25em, -0.25em);
  }
  .navbar-item.has-dropdown-up .navbar-dropdown {
    border-bottom-color: var(--bulma-navbar-dropdown-border-color);
    border-bottom-style: var(--bulma-navbar-dropdown-border-style);
    border-bottom-width: var(--bulma-navbar-dropdown-border-width);
    border-radius: var(--bulma-navbar-dropdown-radius) var(--bulma-navbar-dropdown-radius) 0 0;
    border-top: none;
    bottom: 100%;
    box-shadow: 0 -0.5em 0.5em hsla(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-scheme-invert-l), 0.1);
    top: auto;
  }
  .navbar-item.is-active .navbar-dropdown, .navbar-item.is-hoverable:focus .navbar-dropdown, .navbar-item.is-hoverable:focus-within .navbar-dropdown, .navbar-item.is-hoverable:hover .navbar-dropdown {
    display: block;
  }
  .navbar.is-spaced .navbar-item.is-active .navbar-dropdown, .navbar-item.is-active .navbar-dropdown.is-boxed, .navbar.is-spaced .navbar-item.is-hoverable:focus .navbar-dropdown, .navbar-item.is-hoverable:focus .navbar-dropdown.is-boxed, .navbar.is-spaced .navbar-item.is-hoverable:focus-within .navbar-dropdown, .navbar-item.is-hoverable:focus-within .navbar-dropdown.is-boxed, .navbar.is-spaced .navbar-item.is-hoverable:hover .navbar-dropdown, .navbar-item.is-hoverable:hover .navbar-dropdown.is-boxed {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  }
  .navbar-menu {
    flex-grow: 1;
    flex-shrink: 0;
  }
  .navbar-start {
    justify-content: flex-start;
    margin-inline-end: auto;
  }
  .navbar-end {
    justify-content: flex-end;
    margin-inline-start: auto;
  }
  .navbar-dropdown {
    background-color: var(--bulma-navbar-dropdown-background-color);
    border-bottom-left-radius: var(--bulma-navbar-dropdown-radius);
    border-bottom-right-radius: var(--bulma-navbar-dropdown-radius);
    border-top-color: var(--bulma-navbar-dropdown-border-color);
    border-top-style: var(--bulma-navbar-dropdown-border-style);
    border-top-width: var(--bulma-navbar-dropdown-border-width);
    box-shadow: 0 0.5em 0.5em hsla(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-scheme-invert-l), 0.1);
    display: none;
    font-size: 0.875rem;
    inset-inline-start: 0;
    min-width: 100%;
    position: absolute;
    top: 100%;
    z-index: var(--bulma-navbar-dropdown-z);
  }
  .navbar-dropdown .navbar-item {
    padding: 0.375rem 1rem;
    white-space: nowrap;
  }
  .navbar-dropdown a.navbar-item {
    padding-inline-end: 3rem;
  }
  .navbar-dropdown a.navbar-item:not(.is-active, .is-selected) {
    background-color: hsl(var(--bulma-navbar-dropdown-item-h), var(--bulma-navbar-dropdown-item-s), calc(var(--bulma-navbar-dropdown-item-background-l) + var(--bulma-navbar-item-background-l-delta)));
    color: hsl(var(--bulma-navbar-dropdown-item-h), var(--bulma-navbar-dropdown-item-s), var(--bulma-navbar-dropdown-item-color-l));
  }
  .navbar.is-spaced .navbar-dropdown, .navbar-dropdown.is-boxed {
    border-radius: var(--bulma-navbar-dropdown-boxed-radius);
    border-top: none;
    box-shadow: var(--bulma-navbar-dropdown-boxed-shadow);
    display: block;
    opacity: 0;
    pointer-events: none;
    top: calc(100% + (var(--bulma-navbar-dropdown-offset)));
    transform: translateY(-5px);
    transition-duration: var(--bulma-duration);
    transition-property: opacity, transform;
  }
  .navbar-dropdown.is-right {
    left: auto;
    right: 0;
  }
  .navbar-divider {
    display: block;
  }
  .navbar > .container .navbar-brand,
  .container > .navbar .navbar-brand {
    margin-inline-start: -0.75rem;
  }
  .navbar > .container .navbar-menu,
  .container > .navbar .navbar-menu {
    margin-inline-end: -0.75rem;
  }
  .navbar.is-fixed-bottom-desktop, .navbar.is-fixed-top-desktop {
    left: 0;
    position: fixed;
    right: 0;
    z-index: var(--bulma-navbar-fixed-z);
  }
  .navbar.is-fixed-bottom-desktop {
    bottom: 0;
  }
  .navbar.is-fixed-bottom-desktop.has-shadow {
    box-shadow: 0 -0.125em 0.1875em hsla(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-scheme-invert-l), 0.1);
  }
  .navbar.is-fixed-top-desktop {
    top: 0;
  }
  html.has-navbar-fixed-top-desktop,
  body.has-navbar-fixed-top-desktop {
    padding-top: var(--bulma-navbar-height);
  }
  html.has-navbar-fixed-bottom-desktop,
  body.has-navbar-fixed-bottom-desktop {
    padding-bottom: var(--bulma-navbar-height);
  }
  html.has-spaced-navbar-fixed-top,
  body.has-spaced-navbar-fixed-top {
    padding-top: calc(var(--bulma-navbar-height) + var(--bulma-navbar-padding-vertical) * 2);
  }
  html.has-spaced-navbar-fixed-bottom,
  body.has-spaced-navbar-fixed-bottom {
    padding-bottom: calc(var(--bulma-navbar-height) + var(--bulma-navbar-padding-vertical) * 2);
  }
}
.hero.is-fullheight-with-navbar {
  min-height: calc(100vh - var(--bulma-navbar-height));
}

.pagination {
  --bulma-pagination-margin: -0.25rem;
  --bulma-pagination-min-width: var(--bulma-control-height);
  --bulma-pagination-item-h: var(--bulma-scheme-h);
  --bulma-pagination-item-s: var(--bulma-scheme-s);
  --bulma-pagination-item-l: var(--bulma-scheme-main-l);
  --bulma-pagination-item-background-l-delta: 0%;
  --bulma-pagination-item-hover-background-l-delta: var(--bulma-hover-background-l-delta);
  --bulma-pagination-item-active-background-l-delta: var(--bulma-active-background-l-delta);
  --bulma-pagination-item-border-style: solid;
  --bulma-pagination-item-border-width: var(--bulma-control-border-width);
  --bulma-pagination-item-border-l: var(--bulma-border-l);
  --bulma-pagination-item-border-l-delta: 0%;
  --bulma-pagination-item-hover-border-l-delta: var(--bulma-hover-border-l-delta);
  --bulma-pagination-item-active-border-l-delta: var(--bulma-active-border-l-delta);
  --bulma-pagination-item-focus-border-l-delta: var(--bulma-focus-border-l-delta);
  --bulma-pagination-item-color-l: var(--bulma-text-strong-l);
  --bulma-pagination-item-font-size: 1em;
  --bulma-pagination-item-margin: 0.25rem;
  --bulma-pagination-item-padding-left: 0.5em;
  --bulma-pagination-item-padding-right: 0.5em;
  --bulma-pagination-item-outer-shadow-h: 0;
  --bulma-pagination-item-outer-shadow-s: 0%;
  --bulma-pagination-item-outer-shadow-l: 20%;
  --bulma-pagination-item-outer-shadow-a: 0.05;
  --bulma-pagination-nav-padding-left: 0.75em;
  --bulma-pagination-nav-padding-right: 0.75em;
  --bulma-pagination-disabled-color: var(--bulma-text-weak);
  --bulma-pagination-disabled-background-color: var(--bulma-border);
  --bulma-pagination-disabled-border-color: var(--bulma-border);
  --bulma-pagination-current-color: var(--bulma-link-invert);
  --bulma-pagination-current-background-color: var(--bulma-link);
  --bulma-pagination-current-border-color: var(--bulma-link);
  --bulma-pagination-ellipsis-color: var(--bulma-text-weak);
  --bulma-pagination-shadow-inset: inset 0 0.0625em 0.125em hsla(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-scheme-invert-l), 0.2);
  --bulma-pagination-selected-item-h: var(--bulma-link-h);
  --bulma-pagination-selected-item-s: var(--bulma-link-s);
  --bulma-pagination-selected-item-l: var(--bulma-link-l);
  --bulma-pagination-selected-item-background-l: var(--bulma-link-l);
  --bulma-pagination-selected-item-border-l: var(--bulma-link-l);
  --bulma-pagination-selected-item-color-l: var(--bulma-link-invert-l);
}

.pagination {
  font-size: var(--bulma-size-normal);
  margin: var(--bulma-pagination-margin);
}
.pagination.is-small {
  font-size: var(--bulma-size-small);
}
.pagination.is-medium {
  font-size: var(--bulma-size-medium);
}
.pagination.is-large {
  font-size: var(--bulma-size-large);
}
.pagination.is-rounded .pagination-previous,
.pagination.is-rounded .pagination-next {
  padding-left: 1em;
  padding-right: 1em;
  border-radius: var(--bulma-radius-rounded);
}
.pagination.is-rounded .pagination-link {
  border-radius: var(--bulma-radius-rounded);
}

.pagination,
.pagination-list {
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
}

.pagination-previous,
.pagination-next,
.pagination-link,
.pagination-ellipsis {
  color: hsl(var(--bulma-pagination-item-h), var(--bulma-pagination-item-s), var(--bulma-pagination-item-color-l));
  font-size: var(--bulma-pagination-item-font-size);
  justify-content: center;
  margin: var(--bulma-pagination-item-margin);
  padding-left: var(--bulma-pagination-item-padding-left);
  padding-right: var(--bulma-pagination-item-padding-right);
  text-align: center;
}

.pagination-previous,
.pagination-next,
.pagination-link {
  background-color: hsl(var(--bulma-pagination-item-h), var(--bulma-pagination-item-s), calc(var(--bulma-pagination-item-background-l) + var(--bulma-pagination-item-background-l-delta)));
  border-color: hsl(var(--bulma-pagination-item-h), var(--bulma-pagination-item-s), calc(var(--bulma-pagination-item-border-l) + var(--bulma-pagination-item-border-l-delta)));
  border-style: var(--bulma-pagination-item-border-style);
  border-width: var(--bulma-pagination-item-border-width);
  box-shadow: 0px 0.0625em 0.125em hsla(var(--bulma-pagination-item-outer-shadow-h), var(--bulma-pagination-item-outer-shadow-s), var(--bulma-pagination-item-outer-shadow-l), var(--bulma-pagination-item-outer-shadow-a)), 0px 0.125em 0.25em hsla(var(--bulma-pagination-item-outer-shadow-h), var(--bulma-pagination-item-outer-shadow-s), var(--bulma-pagination-item-outer-shadow-l), var(--bulma-pagination-item-outer-shadow-a));
  color: hsl(var(--bulma-pagination-item-h), var(--bulma-pagination-item-s), var(--bulma-pagination-item-color-l));
  min-width: var(--bulma-pagination-min-width);
  transition-duration: var(--bulma-duration);
  transition-property: background-color, border-color, box-shadow, color;
}
.pagination-previous:hover,
.pagination-next:hover,
.pagination-link:hover {
  --bulma-pagination-item-background-l-delta: var(--bulma-pagination-item-hover-background-l-delta);
  --bulma-pagination-item-border-l-delta: var(--bulma-pagination-item-hover-border-l-delta);
}
.pagination-previous:focus,
.pagination-next:focus,
.pagination-link:focus {
  --bulma-pagination-item-background-l-delta: var(--bulma-pagination-item-hover-background-l-delta);
  --bulma-pagination-item-border-l-delta: var(--bulma-pagination-item-hover-border-l-delta);
}
.pagination-previous:active,
.pagination-next:active,
.pagination-link:active {
  box-shadow: var(--bulma-pagination-shadow-inset);
}
.pagination-previous[disabled], .pagination-previous.is-disabled,
.pagination-next[disabled],
.pagination-next.is-disabled,
.pagination-link[disabled],
.pagination-link.is-disabled {
  background-color: var(--bulma-pagination-disabled-background-color);
  border-color: var(--bulma-pagination-disabled-border-color);
  box-shadow: none;
  color: var(--bulma-pagination-disabled-color);
  opacity: 0.5;
}

.pagination-previous,
.pagination-next {
  padding-left: var(--bulma-pagination-nav-padding-left);
  padding-right: var(--bulma-pagination-nav-padding-right);
  white-space: nowrap;
}

.pagination-link.is-current, .pagination-link.is-selected {
  --bulma-pagination-item-h: var(--bulma-pagination-selected-item-h);
  --bulma-pagination-item-s: var(--bulma-pagination-selected-item-s);
  --bulma-pagination-item-l: var(--bulma-pagination-selected-item-l);
  --bulma-pagination-item-background-l: var(--bulma-pagination-selected-item-background-l);
  --bulma-pagination-item-border-l: var(--bulma-pagination-selected-item-border-l);
  --bulma-pagination-item-color-l: var(--bulma-pagination-selected-item-color-l);
}

.pagination-ellipsis {
  color: var(--bulma-pagination-ellipsis-color);
  pointer-events: none;
}

.pagination-list {
  flex-wrap: wrap;
}
.pagination-list li {
  list-style: none;
}

@media screen and (max-width: 768px) {
  .pagination {
    flex-wrap: wrap;
  }
  .pagination-previous,
  .pagination-next {
    flex-grow: 1;
    flex-shrink: 1;
  }
  .pagination-list li {
    flex-grow: 1;
    flex-shrink: 1;
  }
}
@media screen and (min-width: 769px), print {
  .pagination-list {
    flex-grow: 1;
    flex-shrink: 1;
    justify-content: flex-start;
    order: 1;
  }
  .pagination-previous,
  .pagination-next,
  .pagination-link,
  .pagination-ellipsis {
    margin-bottom: 0;
    margin-top: 0;
  }
  .pagination-previous {
    order: 2;
  }
  .pagination-next {
    order: 3;
  }
  .pagination {
    justify-content: space-between;
    margin-bottom: 0;
    margin-top: 0;
  }
  .pagination.is-centered .pagination-previous {
    order: 1;
  }
  .pagination.is-centered .pagination-list {
    justify-content: center;
    order: 2;
  }
  .pagination.is-centered .pagination-next {
    order: 3;
  }
  .pagination.is-right .pagination-previous {
    order: 1;
  }
  .pagination.is-right .pagination-next {
    order: 2;
  }
  .pagination.is-right .pagination-list {
    justify-content: flex-end;
    order: 3;
  }
}
.panel {
  --bulma-panel-margin: var(--bulma-block-spacing);
  --bulma-panel-item-border: 1px solid var(--bulma-border-weak);
  --bulma-panel-radius: var(--bulma-radius-large);
  --bulma-panel-shadow: var(--bulma-shadow);
  --bulma-panel-heading-line-height: 1.25;
  --bulma-panel-heading-padding: 1em 1.25em;
  --bulma-panel-heading-radius: var(--bulma-radius);
  --bulma-panel-heading-size: 1.25em;
  --bulma-panel-heading-weight: var(--bulma-weight-bold);
  --bulma-panel-tabs-font-size: 1em;
  --bulma-panel-tab-border-bottom-color: var(--bulma-border);
  --bulma-panel-tab-border-bottom-style: solid;
  --bulma-panel-tab-border-bottom-width: 1px;
  --bulma-panel-tab-active-color: var(--bulma-link-active);
  --bulma-panel-list-item-color: var(--bulma-text);
  --bulma-panel-list-item-hover-color: var(--bulma-link);
  --bulma-panel-block-color: var(--bulma-text-strong);
  --bulma-panel-block-hover-background-color: var(--bulma-background);
  --bulma-panel-block-active-border-left-color: var(--bulma-link);
  --bulma-panel-block-active-color: var(--bulma-link-active);
  --bulma-panel-block-active-icon-color: var(--bulma-link);
  --bulma-panel-icon-color: var(--bulma-text-weak);
}

.panel {
  --bulma-panel-h: var(--bulma-scheme-h);
  --bulma-panel-s: var(--bulma-scheme-s);
  --bulma-panel-color-l: var(--bulma-text-l);
  --bulma-panel-heading-background-l: var(--bulma-text-l);
  --bulma-panel-heading-color-l: var(--bulma-text-invert-l);
  border-radius: var(--bulma-panel-radius);
  box-shadow: var(--bulma-panel-shadow);
  font-size: var(--bulma-size-normal);
}
.panel:not(:last-child) {
  margin-bottom: var(--bulma-panel-margin);
}
.panel.is-white {
  --bulma-panel-h: var(--bulma-white-h);
  --bulma-panel-s: var(--bulma-white-s);
  --bulma-panel-color-l: var(--bulma-white-l);
  --bulma-panel-heading-background-l: var(--bulma-white-l);
  --bulma-panel-heading-color-l: var(--bulma-white-invert-l);
}
.panel.is-black {
  --bulma-panel-h: var(--bulma-black-h);
  --bulma-panel-s: var(--bulma-black-s);
  --bulma-panel-color-l: var(--bulma-black-l);
  --bulma-panel-heading-background-l: var(--bulma-black-l);
  --bulma-panel-heading-color-l: var(--bulma-black-invert-l);
}
.panel.is-light {
  --bulma-panel-h: var(--bulma-light-h);
  --bulma-panel-s: var(--bulma-light-s);
  --bulma-panel-color-l: var(--bulma-light-l);
  --bulma-panel-heading-background-l: var(--bulma-light-l);
  --bulma-panel-heading-color-l: var(--bulma-light-invert-l);
}
.panel.is-dark {
  --bulma-panel-h: var(--bulma-dark-h);
  --bulma-panel-s: var(--bulma-dark-s);
  --bulma-panel-color-l: var(--bulma-dark-l);
  --bulma-panel-heading-background-l: var(--bulma-dark-l);
  --bulma-panel-heading-color-l: var(--bulma-dark-invert-l);
}
.panel.is-text {
  --bulma-panel-h: var(--bulma-text-h);
  --bulma-panel-s: var(--bulma-text-s);
  --bulma-panel-color-l: var(--bulma-text-l);
  --bulma-panel-heading-background-l: var(--bulma-text-l);
  --bulma-panel-heading-color-l: var(--bulma-text-invert-l);
}
.panel.is-primary {
  --bulma-panel-h: var(--bulma-primary-h);
  --bulma-panel-s: var(--bulma-primary-s);
  --bulma-panel-color-l: var(--bulma-primary-l);
  --bulma-panel-heading-background-l: var(--bulma-primary-l);
  --bulma-panel-heading-color-l: var(--bulma-primary-invert-l);
}
.panel.is-link {
  --bulma-panel-h: var(--bulma-link-h);
  --bulma-panel-s: var(--bulma-link-s);
  --bulma-panel-color-l: var(--bulma-link-l);
  --bulma-panel-heading-background-l: var(--bulma-link-l);
  --bulma-panel-heading-color-l: var(--bulma-link-invert-l);
}
.panel.is-info {
  --bulma-panel-h: var(--bulma-info-h);
  --bulma-panel-s: var(--bulma-info-s);
  --bulma-panel-color-l: var(--bulma-info-l);
  --bulma-panel-heading-background-l: var(--bulma-info-l);
  --bulma-panel-heading-color-l: var(--bulma-info-invert-l);
}
.panel.is-success {
  --bulma-panel-h: var(--bulma-success-h);
  --bulma-panel-s: var(--bulma-success-s);
  --bulma-panel-color-l: var(--bulma-success-l);
  --bulma-panel-heading-background-l: var(--bulma-success-l);
  --bulma-panel-heading-color-l: var(--bulma-success-invert-l);
}
.panel.is-warning {
  --bulma-panel-h: var(--bulma-warning-h);
  --bulma-panel-s: var(--bulma-warning-s);
  --bulma-panel-color-l: var(--bulma-warning-l);
  --bulma-panel-heading-background-l: var(--bulma-warning-l);
  --bulma-panel-heading-color-l: var(--bulma-warning-invert-l);
}
.panel.is-danger {
  --bulma-panel-h: var(--bulma-danger-h);
  --bulma-panel-s: var(--bulma-danger-s);
  --bulma-panel-color-l: var(--bulma-danger-l);
  --bulma-panel-heading-background-l: var(--bulma-danger-l);
  --bulma-panel-heading-color-l: var(--bulma-danger-invert-l);
}

.panel-tabs:not(:last-child),
.panel-block:not(:last-child) {
  border-bottom: var(--bulma-panel-item-border);
}

.panel-heading {
  background-color: hsl(var(--bulma-panel-h), var(--bulma-panel-s), var(--bulma-panel-heading-background-l));
  border-radius: var(--bulma-panel-radius) var(--bulma-panel-radius) 0 0;
  color: hsl(var(--bulma-panel-h), var(--bulma-panel-s), var(--bulma-panel-heading-color-l));
  font-size: var(--bulma-panel-heading-size);
  font-weight: var(--bulma-panel-heading-weight);
  line-height: var(--bulma-panel-heading-line-height);
  padding: var(--bulma-panel-heading-padding);
}

.panel-tabs {
  align-items: flex-end;
  display: flex;
  font-size: var(--bulma-panel-tabs-font-size);
  justify-content: center;
}
.panel-tabs a {
  border-bottom-color: var(--bulma-panel-tab-border-bottom-color);
  border-bottom-style: var(--bulma-panel-tab-border-bottom-style);
  border-bottom-width: var(--bulma-panel-tab-border-bottom-width);
  margin-bottom: calc(-1 * 1px);
  padding: 0.75em;
}
.panel-tabs a.is-active {
  border-bottom-color: hsl(var(--bulma-panel-h), var(--bulma-panel-s), var(--bulma-panel-color-l));
  color: var(--bulma-panel-tab-active-color);
}

.panel-list a {
  color: var(--bulma-panel-list-item-color);
}
.panel-list a:hover {
  color: var(--bulma-panel-list-item-hover-color);
}

.panel-block {
  align-items: center;
  color: var(--bulma-panel-block-color);
  display: flex;
  justify-content: flex-start;
  padding: 0.75em 1em;
}
.panel-block input[type=checkbox] {
  margin-inline-end: 0.75em;
}
.panel-block > .control {
  flex-grow: 1;
  flex-shrink: 1;
  width: 100%;
}
.panel-block.is-wrapped {
  flex-wrap: wrap;
}
.panel-block.is-active {
  border-left-color: var(--bulma-panel-block-active-border-left-color);
  color: var(--bulma-panel-block-active-color);
}
.panel-block.is-active .panel-icon {
  color: hsl(var(--bulma-panel-h), var(--bulma-panel-s), var(--bulma-panel-color-l));
}
.panel-block:last-child {
  border-bottom-left-radius: var(--bulma-panel-radius);
  border-bottom-right-radius: var(--bulma-panel-radius);
}

a.panel-block,
label.panel-block {
  cursor: pointer;
}
a.panel-block:hover,
label.panel-block:hover {
  background-color: var(--bulma-panel-block-hover-background-color);
}

.panel-icon {
  display: inline-block;
  font-size: 1em;
  height: 1em;
  line-height: 1em;
  text-align: center;
  vertical-align: top;
  width: 1em;
  color: var(--bulma-panel-icon-color);
  margin-inline-end: 0.75em;
}
.panel-icon .fa {
  font-size: inherit;
  line-height: inherit;
}

.tabs {
  --bulma-tabs-border-bottom-color: var(--bulma-border);
  --bulma-tabs-border-bottom-style: solid;
  --bulma-tabs-border-bottom-width: 1px;
  --bulma-tabs-link-color: var(--bulma-text);
  --bulma-tabs-link-hover-border-bottom-color: var(--bulma-text-strong);
  --bulma-tabs-link-hover-color: var(--bulma-text-strong);
  --bulma-tabs-link-active-border-bottom-color: var(--bulma-link-text);
  --bulma-tabs-link-active-color: var(--bulma-link-text);
  --bulma-tabs-link-padding: 0.5em 1em;
  --bulma-tabs-boxed-link-radius: var(--bulma-radius);
  --bulma-tabs-boxed-link-hover-background-color: var(--bulma-background);
  --bulma-tabs-boxed-link-hover-border-bottom-color: var(--bulma-border);
  --bulma-tabs-boxed-link-active-background-color: var(--bulma-scheme-main);
  --bulma-tabs-boxed-link-active-border-color: var(--bulma-border);
  --bulma-tabs-boxed-link-active-border-bottom-color: transparent;
  --bulma-tabs-toggle-link-border-color: var(--bulma-border);
  --bulma-tabs-toggle-link-border-style: solid;
  --bulma-tabs-toggle-link-border-width: 1px;
  --bulma-tabs-toggle-link-hover-background-color: var(--bulma-background);
  --bulma-tabs-toggle-link-hover-border-color: var(--bulma-border-hover);
  --bulma-tabs-toggle-link-radius: var(--bulma-radius);
  --bulma-tabs-toggle-link-active-background-color: var(--bulma-link);
  --bulma-tabs-toggle-link-active-border-color: var(--bulma-link);
  --bulma-tabs-toggle-link-active-color: var(--bulma-link-invert);
}

.tabs {
  -webkit-overflow-scrolling: touch;
  align-items: stretch;
  display: flex;
  font-size: var(--bulma-size-normal);
  justify-content: space-between;
  overflow: hidden;
  overflow-x: auto;
  white-space: nowrap;
}
.tabs a {
  align-items: center;
  border-bottom-color: var(--bulma-tabs-border-bottom-color);
  border-bottom-style: var(--bulma-tabs-border-bottom-style);
  border-bottom-width: var(--bulma-tabs-border-bottom-width);
  color: var(--bulma-tabs-link-color);
  display: flex;
  justify-content: center;
  margin-bottom: calc(-1 * var(--bulma-tabs-border-bottom-width));
  padding: var(--bulma-tabs-link-padding);
  transition-duration: var(--bulma-duration);
  transition-property: background-color, border-color, color;
  vertical-align: top;
}
.tabs a:hover {
  border-bottom-color: var(--bulma-tabs-link-hover-border-bottom-color);
  color: var(--bulma-tabs-link-hover-color);
}
.tabs li {
  display: block;
}
.tabs li.is-active a {
  border-bottom-color: var(--bulma-tabs-link-active-border-bottom-color);
  color: var(--bulma-tabs-link-active-color);
}
.tabs ul {
  align-items: center;
  border-bottom-color: var(--bulma-tabs-border-bottom-color);
  border-bottom-style: var(--bulma-tabs-border-bottom-style);
  border-bottom-width: var(--bulma-tabs-border-bottom-width);
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  justify-content: flex-start;
}
.tabs ul.is-left {
  padding-right: 0.75em;
}
.tabs ul.is-center {
  flex: none;
  justify-content: center;
  padding-left: 0.75em;
  padding-right: 0.75em;
}
.tabs ul.is-right {
  justify-content: flex-end;
  padding-left: 0.75em;
}
.tabs .icon:first-child {
  margin-inline-end: 0.5em;
}
.tabs .icon:last-child {
  margin-inline-start: 0.5em;
}
.tabs.is-centered ul {
  justify-content: center;
}
.tabs.is-right ul {
  justify-content: flex-end;
}
.tabs.is-boxed a {
  border: 1px solid transparent;
  border-start-start-radius: var(--bulma-tabs-boxed-link-radius);
  border-start-end-radius: var(--bulma-tabs-boxed-link-radius);
}
.tabs.is-boxed a:hover {
  background-color: var(--bulma-tabs-boxed-link-hover-background-color);
  border-bottom-color: var(--bulma-tabs-boxed-link-hover-border-bottom-color);
}
.tabs.is-boxed li.is-active a {
  background-color: var(--bulma-tabs-boxed-link-active-background-color);
  border-color: var(--bulma-tabs-boxed-link-active-border-color);
  border-bottom-color: var(--bulma-tabs-boxed-link-active-border-bottom-color) !important;
}
.tabs.is-fullwidth li {
  flex-grow: 1;
  flex-shrink: 0;
}
.tabs.is-toggle a {
  border-color: var(--bulma-tabs-toggle-link-border-color);
  border-style: var(--bulma-tabs-toggle-link-border-style);
  border-width: var(--bulma-tabs-toggle-link-border-width);
  margin-bottom: 0;
  position: relative;
}
.tabs.is-toggle a:hover {
  background-color: var(--bulma-tabs-toggle-link-hover-background-color);
  border-color: var(--bulma-tabs-toggle-link-hover-border-color);
  z-index: 2;
}
.tabs.is-toggle li + li {
  margin-inline-start: calc(-1 * var(--bulma-tabs-toggle-link-border-width));
}
.tabs.is-toggle li:first-child a {
  border-start-start-radius: var(--bulma-tabs-toggle-link-radius);
  border-end-start-radius: var(--bulma-tabs-toggle-link-radius);
}
.tabs.is-toggle li:last-child a {
  border-start-end-radius: var(--bulma-tabs-toggle-link-radius);
  border-end-end-radius: var(--bulma-tabs-toggle-link-radius);
}
.tabs.is-toggle li.is-active a {
  background-color: var(--bulma-tabs-toggle-link-active-background-color);
  border-color: var(--bulma-tabs-toggle-link-active-border-color);
  color: var(--bulma-tabs-toggle-link-active-color);
  z-index: 1;
}
.tabs.is-toggle ul {
  border-bottom: none;
}
.tabs.is-toggle.is-toggle-rounded li:first-child a {
  border-start-start-radius: var(--bulma-radius-rounded);
  border-end-start-radius: var(--bulma-radius-rounded);
  padding-inline-start: 1.25em;
}
.tabs.is-toggle.is-toggle-rounded li:last-child a {
  border-start-end-radius: var(--bulma-radius-rounded);
  border-end-end-radius: var(--bulma-radius-rounded);
  padding-inline-end: 1.25em;
}
.tabs.is-small {
  font-size: var(--bulma-size-small);
}
.tabs.is-medium {
  font-size: var(--bulma-size-medium);
}
.tabs.is-large {
  font-size: var(--bulma-size-large);
}

/* Bulma Grid */
:root {
  --bulma-column-gap: 0.75rem;
}

.column {
  display: block;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  padding: 0.75rem;
}
.columns.is-mobile > .column.is-narrow {
  flex: none;
  width: unset;
}
.columns.is-mobile > .column.is-full {
  flex: none;
  width: 100%;
}
.columns.is-mobile > .column.is-three-quarters {
  flex: none;
  width: 75%;
}
.columns.is-mobile > .column.is-two-thirds {
  flex: none;
  width: 66.6666%;
}
.columns.is-mobile > .column.is-half {
  flex: none;
  width: 50%;
}
.columns.is-mobile > .column.is-one-third {
  flex: none;
  width: 33.3333%;
}
.columns.is-mobile > .column.is-one-quarter {
  flex: none;
  width: 25%;
}
.columns.is-mobile > .column.is-one-fifth {
  flex: none;
  width: 20%;
}
.columns.is-mobile > .column.is-two-fifths {
  flex: none;
  width: 40%;
}
.columns.is-mobile > .column.is-three-fifths {
  flex: none;
  width: 60%;
}
.columns.is-mobile > .column.is-four-fifths {
  flex: none;
  width: 80%;
}
.columns.is-mobile > .column.is-offset-three-quarters {
  margin-inline-start: 75%;
}
.columns.is-mobile > .column.is-offset-two-thirds {
  margin-inline-start: 66.6666%;
}
.columns.is-mobile > .column.is-offset-half {
  margin-inline-start: 50%;
}
.columns.is-mobile > .column.is-offset-one-third {
  margin-inline-start: 0.3333%;
}
.columns.is-mobile > .column.is-offset-one-quarter {
  margin-inline-start: 25%;
}
.columns.is-mobile > .column.is-offset-one-fifth {
  margin-inline-start: 20%;
}
.columns.is-mobile > .column.is-offset-two-fifths {
  margin-inline-start: 40%;
}
.columns.is-mobile > .column.is-offset-three-fifths {
  margin-inline-start: 60%;
}
.columns.is-mobile > .column.is-offset-four-fifths {
  margin-inline-start: 80%;
}
.columns.is-mobile > .column.is-0 {
  flex: none;
  width: calc(0% - var(--bulma-column-gap) / 2);
}
.columns.is-mobile > .column.is-offset-0 {
  margin-inline-start: 0%;
}
.columns.is-mobile > .column.is-1 {
  flex: none;
  width: calc(8.3333333333% - var(--bulma-column-gap) / 2);
}
.columns.is-mobile > .column.is-offset-1 {
  margin-inline-start: 8.3333333333%;
}
.columns.is-mobile > .column.is-2 {
  flex: none;
  width: calc(16.6666666667% - var(--bulma-column-gap) / 2);
}
.columns.is-mobile > .column.is-offset-2 {
  margin-inline-start: 16.6666666667%;
}
.columns.is-mobile > .column.is-3 {
  flex: none;
  width: calc(25% - var(--bulma-column-gap) / 2);
}
.columns.is-mobile > .column.is-offset-3 {
  margin-inline-start: 25%;
}
.columns.is-mobile > .column.is-4 {
  flex: none;
  width: calc(33.3333333333% - var(--bulma-column-gap) / 2);
}
.columns.is-mobile > .column.is-offset-4 {
  margin-inline-start: 33.3333333333%;
}
.columns.is-mobile > .column.is-5 {
  flex: none;
  width: calc(41.6666666667% - var(--bulma-column-gap) / 2);
}
.columns.is-mobile > .column.is-offset-5 {
  margin-inline-start: 41.6666666667%;
}
.columns.is-mobile > .column.is-6 {
  flex: none;
  width: calc(50% - var(--bulma-column-gap) / 2);
}
.columns.is-mobile > .column.is-offset-6 {
  margin-inline-start: 50%;
}
.columns.is-mobile > .column.is-7 {
  flex: none;
  width: calc(58.3333333333% - var(--bulma-column-gap) / 2);
}
.columns.is-mobile > .column.is-offset-7 {
  margin-inline-start: 58.3333333333%;
}
.columns.is-mobile > .column.is-8 {
  flex: none;
  width: calc(66.6666666667% - var(--bulma-column-gap) / 2);
}
.columns.is-mobile > .column.is-offset-8 {
  margin-inline-start: 66.6666666667%;
}
.columns.is-mobile > .column.is-9 {
  flex: none;
  width: calc(75% - var(--bulma-column-gap) / 2);
}
.columns.is-mobile > .column.is-offset-9 {
  margin-inline-start: 75%;
}
.columns.is-mobile > .column.is-10 {
  flex: none;
  width: calc(83.3333333333% - var(--bulma-column-gap) / 2);
}
.columns.is-mobile > .column.is-offset-10 {
  margin-inline-start: 83.3333333333%;
}
.columns.is-mobile > .column.is-11 {
  flex: none;
  width: calc(91.6666666667% - var(--bulma-column-gap) / 2);
}
.columns.is-mobile > .column.is-offset-11 {
  margin-inline-start: 91.6666666667%;
}
.columns.is-mobile > .column.is-12 {
  flex: none;
  width: calc(100% - var(--bulma-column-gap) / 2);
}
.columns.is-mobile > .column.is-offset-12 {
  margin-inline-start: 100%;
}
@media screen and (max-width: 768px) {
  .column.is-narrow-mobile {
    flex: none;
    width: unset;
  }
  .column.is-full-mobile {
    flex: none;
    width: 100%;
  }
  .column.is-three-quarters-mobile {
    flex: none;
    width: 75%;
  }
  .column.is-two-thirds-mobile {
    flex: none;
    width: 66.6666%;
  }
  .column.is-half-mobile {
    flex: none;
    width: 50%;
  }
  .column.is-one-third-mobile {
    flex: none;
    width: 33.3333%;
  }
  .column.is-one-quarter-mobile {
    flex: none;
    width: 25%;
  }
  .column.is-one-fifth-mobile {
    flex: none;
    width: 20%;
  }
  .column.is-two-fifths-mobile {
    flex: none;
    width: 40%;
  }
  .column.is-three-fifths-mobile {
    flex: none;
    width: 60%;
  }
  .column.is-four-fifths-mobile {
    flex: none;
    width: 80%;
  }
  .column.is-offset-three-quarters-mobile {
    margin-inline-start: 75%;
  }
  .column.is-offset-two-thirds-mobile {
    margin-inline-start: 66.6666%;
  }
  .column.is-offset-half-mobile {
    margin-inline-start: 50%;
  }
  .column.is-offset-one-third-mobile {
    margin-inline-start: 0.3333%;
  }
  .column.is-offset-one-quarter-mobile {
    margin-inline-start: 25%;
  }
  .column.is-offset-one-fifth-mobile {
    margin-inline-start: 20%;
  }
  .column.is-offset-two-fifths-mobile {
    margin-inline-start: 40%;
  }
  .column.is-offset-three-fifths-mobile {
    margin-inline-start: 60%;
  }
  .column.is-offset-four-fifths-mobile {
    margin-inline-start: 80%;
  }
  .column.is-0-mobile {
    flex: none;
    width: calc(0% - var(--bulma-column-gap) / 2);
  }
  .column.is-offset-0-mobile {
    margin-inline-start: 0%;
  }
  .column.is-1-mobile {
    flex: none;
    width: calc(8.3333333333% - var(--bulma-column-gap) / 2);
  }
  .column.is-offset-1-mobile {
    margin-inline-start: 8.3333333333%;
  }
  .column.is-2-mobile {
    flex: none;
    width: calc(16.6666666667% - var(--bulma-column-gap) / 2);
  }
  .column.is-offset-2-mobile {
    margin-inline-start: 16.6666666667%;
  }
  .column.is-3-mobile {
    flex: none;
    width: calc(25% - var(--bulma-column-gap) / 2);
  }
  .column.is-offset-3-mobile {
    margin-inline-start: 25%;
  }
  .column.is-4-mobile {
    flex: none;
    width: calc(33.3333333333% - var(--bulma-column-gap) / 2);
  }
  .column.is-offset-4-mobile {
    margin-inline-start: 33.3333333333%;
  }
  .column.is-5-mobile {
    flex: none;
    width: calc(41.6666666667% - var(--bulma-column-gap) / 2);
  }
  .column.is-offset-5-mobile {
    margin-inline-start: 41.6666666667%;
  }
  .column.is-6-mobile {
    flex: none;
    width: calc(50% - var(--bulma-column-gap) / 2);
  }
  .column.is-offset-6-mobile {
    margin-inline-start: 50%;
  }
  .column.is-7-mobile {
    flex: none;
    width: calc(58.3333333333% - var(--bulma-column-gap) / 2);
  }
  .column.is-offset-7-mobile {
    margin-inline-start: 58.3333333333%;
  }
  .column.is-8-mobile {
    flex: none;
    width: calc(66.6666666667% - var(--bulma-column-gap) / 2);
  }
  .column.is-offset-8-mobile {
    margin-inline-start: 66.6666666667%;
  }
  .column.is-9-mobile {
    flex: none;
    width: calc(75% - var(--bulma-column-gap) / 2);
  }
  .column.is-offset-9-mobile {
    margin-inline-start: 75%;
  }
  .column.is-10-mobile {
    flex: none;
    width: calc(83.3333333333% - var(--bulma-column-gap) / 2);
  }
  .column.is-offset-10-mobile {
    margin-inline-start: 83.3333333333%;
  }
  .column.is-11-mobile {
    flex: none;
    width: calc(91.6666666667% - var(--bulma-column-gap) / 2);
  }
  .column.is-offset-11-mobile {
    margin-inline-start: 91.6666666667%;
  }
  .column.is-12-mobile {
    flex: none;
    width: calc(100% - var(--bulma-column-gap) / 2);
  }
  .column.is-offset-12-mobile {
    margin-inline-start: 100%;
  }
}
@media screen and (min-width: 769px), print {
  .column.is-narrow, .column.is-narrow-tablet {
    flex: none;
    width: unset;
  }
  .column.is-full, .column.is-full-tablet {
    flex: none;
    width: 100%;
  }
  .column.is-three-quarters, .column.is-three-quarters-tablet {
    flex: none;
    width: 75%;
  }
  .column.is-two-thirds, .column.is-two-thirds-tablet {
    flex: none;
    width: 66.6666%;
  }
  .column.is-half, .column.is-half-tablet {
    flex: none;
    width: 50%;
  }
  .column.is-one-third, .column.is-one-third-tablet {
    flex: none;
    width: 33.3333%;
  }
  .column.is-one-quarter, .column.is-one-quarter-tablet {
    flex: none;
    width: 25%;
  }
  .column.is-one-fifth, .column.is-one-fifth-tablet {
    flex: none;
    width: 20%;
  }
  .column.is-two-fifths, .column.is-two-fifths-tablet {
    flex: none;
    width: 40%;
  }
  .column.is-three-fifths, .column.is-three-fifths-tablet {
    flex: none;
    width: 60%;
  }
  .column.is-four-fifths, .column.is-four-fifths-tablet {
    flex: none;
    width: 80%;
  }
  .column.is-offset-three-quarters, .column.is-offset-three-quarters-tablet {
    margin-inline-start: 75%;
  }
  .column.is-offset-two-thirds, .column.is-offset-two-thirds-tablet {
    margin-inline-start: 66.6666%;
  }
  .column.is-offset-half, .column.is-offset-half-tablet {
    margin-inline-start: 50%;
  }
  .column.is-offset-one-third, .column.is-offset-one-third-tablet {
    margin-inline-start: 0.3333%;
  }
  .column.is-offset-one-quarter, .column.is-offset-one-quarter-tablet {
    margin-inline-start: 25%;
  }
  .column.is-offset-one-fifth, .column.is-offset-one-fifth-tablet {
    margin-inline-start: 20%;
  }
  .column.is-offset-two-fifths, .column.is-offset-two-fifths-tablet {
    margin-inline-start: 40%;
  }
  .column.is-offset-three-fifths, .column.is-offset-three-fifths-tablet {
    margin-inline-start: 60%;
  }
  .column.is-offset-four-fifths, .column.is-offset-four-fifths-tablet {
    margin-inline-start: 80%;
  }
  .column.is-0, .column.is-0-tablet {
    flex: none;
    width: calc(0% - var(--bulma-column-gap) / 2);
  }
  .column.is-offset-0, .column.is-offset-0-tablet {
    margin-inline-start: 0%;
  }
  .column.is-1, .column.is-1-tablet {
    flex: none;
    width: calc(8.3333333333% - var(--bulma-column-gap) / 2);
  }
  .column.is-offset-1, .column.is-offset-1-tablet {
    margin-inline-start: 8.3333333333%;
  }
  .column.is-2, .column.is-2-tablet {
    flex: none;
    width: calc(16.6666666667% - var(--bulma-column-gap) / 2);
  }
  .column.is-offset-2, .column.is-offset-2-tablet {
    margin-inline-start: 16.6666666667%;
  }
  .column.is-3, .column.is-3-tablet {
    flex: none;
    width: calc(25% - var(--bulma-column-gap) / 2);
  }
  .column.is-offset-3, .column.is-offset-3-tablet {
    margin-inline-start: 25%;
  }
  .column.is-4, .column.is-4-tablet {
    flex: none;
    width: calc(33.3333333333% - var(--bulma-column-gap) / 2);
  }
  .column.is-offset-4, .column.is-offset-4-tablet {
    margin-inline-start: 33.3333333333%;
  }
  .column.is-5, .column.is-5-tablet {
    flex: none;
    width: calc(41.6666666667% - var(--bulma-column-gap) / 2);
  }
  .column.is-offset-5, .column.is-offset-5-tablet {
    margin-inline-start: 41.6666666667%;
  }
  .column.is-6, .column.is-6-tablet {
    flex: none;
    width: calc(50% - var(--bulma-column-gap) / 2);
  }
  .column.is-offset-6, .column.is-offset-6-tablet {
    margin-inline-start: 50%;
  }
  .column.is-7, .column.is-7-tablet {
    flex: none;
    width: calc(58.3333333333% - var(--bulma-column-gap) / 2);
  }
  .column.is-offset-7, .column.is-offset-7-tablet {
    margin-inline-start: 58.3333333333%;
  }
  .column.is-8, .column.is-8-tablet {
    flex: none;
    width: calc(66.6666666667% - var(--bulma-column-gap) / 2);
  }
  .column.is-offset-8, .column.is-offset-8-tablet {
    margin-inline-start: 66.6666666667%;
  }
  .column.is-9, .column.is-9-tablet {
    flex: none;
    width: calc(75% - var(--bulma-column-gap) / 2);
  }
  .column.is-offset-9, .column.is-offset-9-tablet {
    margin-inline-start: 75%;
  }
  .column.is-10, .column.is-10-tablet {
    flex: none;
    width: calc(83.3333333333% - var(--bulma-column-gap) / 2);
  }
  .column.is-offset-10, .column.is-offset-10-tablet {
    margin-inline-start: 83.3333333333%;
  }
  .column.is-11, .column.is-11-tablet {
    flex: none;
    width: calc(91.6666666667% - var(--bulma-column-gap) / 2);
  }
  .column.is-offset-11, .column.is-offset-11-tablet {
    margin-inline-start: 91.6666666667%;
  }
  .column.is-12, .column.is-12-tablet {
    flex: none;
    width: calc(100% - var(--bulma-column-gap) / 2);
  }
  .column.is-offset-12, .column.is-offset-12-tablet {
    margin-inline-start: 100%;
  }
}
@media screen and (max-width: 1023px) {
  .column.is-narrow-touch {
    flex: none;
    width: unset;
  }
  .column.is-full-touch {
    flex: none;
    width: 100%;
  }
  .column.is-three-quarters-touch {
    flex: none;
    width: 75%;
  }
  .column.is-two-thirds-touch {
    flex: none;
    width: 66.6666%;
  }
  .column.is-half-touch {
    flex: none;
    width: 50%;
  }
  .column.is-one-third-touch {
    flex: none;
    width: 33.3333%;
  }
  .column.is-one-quarter-touch {
    flex: none;
    width: 25%;
  }
  .column.is-one-fifth-touch {
    flex: none;
    width: 20%;
  }
  .column.is-two-fifths-touch {
    flex: none;
    width: 40%;
  }
  .column.is-three-fifths-touch {
    flex: none;
    width: 60%;
  }
  .column.is-four-fifths-touch {
    flex: none;
    width: 80%;
  }
  .column.is-offset-three-quarters-touch {
    margin-inline-start: 75%;
  }
  .column.is-offset-two-thirds-touch {
    margin-inline-start: 66.6666%;
  }
  .column.is-offset-half-touch {
    margin-inline-start: 50%;
  }
  .column.is-offset-one-third-touch {
    margin-inline-start: 0.3333%;
  }
  .column.is-offset-one-quarter-touch {
    margin-inline-start: 25%;
  }
  .column.is-offset-one-fifth-touch {
    margin-inline-start: 20%;
  }
  .column.is-offset-two-fifths-touch {
    margin-inline-start: 40%;
  }
  .column.is-offset-three-fifths-touch {
    margin-inline-start: 60%;
  }
  .column.is-offset-four-fifths-touch {
    margin-inline-start: 80%;
  }
  .column.is-0-touch {
    flex: none;
    width: 0%;
  }
  .column.is-offset-0-touch {
    margin-inline-start: 0%;
  }
  .column.is-1-touch {
    flex: none;
    width: 8.3333333333%;
  }
  .column.is-offset-1-touch {
    margin-inline-start: 8.3333333333%;
  }
  .column.is-2-touch {
    flex: none;
    width: 16.6666666667%;
  }
  .column.is-offset-2-touch {
    margin-inline-start: 16.6666666667%;
  }
  .column.is-3-touch {
    flex: none;
    width: 25%;
  }
  .column.is-offset-3-touch {
    margin-inline-start: 25%;
  }
  .column.is-4-touch {
    flex: none;
    width: 33.3333333333%;
  }
  .column.is-offset-4-touch {
    margin-inline-start: 33.3333333333%;
  }
  .column.is-5-touch {
    flex: none;
    width: 41.6666666667%;
  }
  .column.is-offset-5-touch {
    margin-inline-start: 41.6666666667%;
  }
  .column.is-6-touch {
    flex: none;
    width: 50%;
  }
  .column.is-offset-6-touch {
    margin-inline-start: 50%;
  }
  .column.is-7-touch {
    flex: none;
    width: 58.3333333333%;
  }
  .column.is-offset-7-touch {
    margin-inline-start: 58.3333333333%;
  }
  .column.is-8-touch {
    flex: none;
    width: 66.6666666667%;
  }
  .column.is-offset-8-touch {
    margin-inline-start: 66.6666666667%;
  }
  .column.is-9-touch {
    flex: none;
    width: 75%;
  }
  .column.is-offset-9-touch {
    margin-inline-start: 75%;
  }
  .column.is-10-touch {
    flex: none;
    width: 83.3333333333%;
  }
  .column.is-offset-10-touch {
    margin-inline-start: 83.3333333333%;
  }
  .column.is-11-touch {
    flex: none;
    width: 91.6666666667%;
  }
  .column.is-offset-11-touch {
    margin-inline-start: 91.6666666667%;
  }
  .column.is-12-touch {
    flex: none;
    width: 100%;
  }
  .column.is-offset-12-touch {
    margin-inline-start: 100%;
  }
}
@media screen and (min-width: 1024px) {
  .column.is-narrow-desktop {
    flex: none;
    width: unset;
  }
  .column.is-full-desktop {
    flex: none;
    width: 100%;
  }
  .column.is-three-quarters-desktop {
    flex: none;
    width: 75%;
  }
  .column.is-two-thirds-desktop {
    flex: none;
    width: 66.6666%;
  }
  .column.is-half-desktop {
    flex: none;
    width: 50%;
  }
  .column.is-one-third-desktop {
    flex: none;
    width: 33.3333%;
  }
  .column.is-one-quarter-desktop {
    flex: none;
    width: 25%;
  }
  .column.is-one-fifth-desktop {
    flex: none;
    width: 20%;
  }
  .column.is-two-fifths-desktop {
    flex: none;
    width: 40%;
  }
  .column.is-three-fifths-desktop {
    flex: none;
    width: 60%;
  }
  .column.is-four-fifths-desktop {
    flex: none;
    width: 80%;
  }
  .column.is-offset-three-quarters-desktop {
    margin-inline-start: 75%;
  }
  .column.is-offset-two-thirds-desktop {
    margin-inline-start: 66.6666%;
  }
  .column.is-offset-half-desktop {
    margin-inline-start: 50%;
  }
  .column.is-offset-one-third-desktop {
    margin-inline-start: 0.3333%;
  }
  .column.is-offset-one-quarter-desktop {
    margin-inline-start: 25%;
  }
  .column.is-offset-one-fifth-desktop {
    margin-inline-start: 20%;
  }
  .column.is-offset-two-fifths-desktop {
    margin-inline-start: 40%;
  }
  .column.is-offset-three-fifths-desktop {
    margin-inline-start: 60%;
  }
  .column.is-offset-four-fifths-desktop {
    margin-inline-start: 80%;
  }
  .column.is-0-desktop {
    flex: none;
    width: calc(0% - var(--bulma-column-gap) / 2);
  }
  .column.is-offset-0-desktop {
    margin-inline-start: 0%;
  }
  .column.is-1-desktop {
    flex: none;
    width: calc(8.3333333333% - var(--bulma-column-gap) / 2);
  }
  .column.is-offset-1-desktop {
    margin-inline-start: 8.3333333333%;
  }
  .column.is-2-desktop {
    flex: none;
    width: calc(16.6666666667% - var(--bulma-column-gap) / 2);
  }
  .column.is-offset-2-desktop {
    margin-inline-start: 16.6666666667%;
  }
  .column.is-3-desktop {
    flex: none;
    width: calc(25% - var(--bulma-column-gap) / 2);
  }
  .column.is-offset-3-desktop {
    margin-inline-start: 25%;
  }
  .column.is-4-desktop {
    flex: none;
    width: calc(33.3333333333% - var(--bulma-column-gap) / 2);
  }
  .column.is-offset-4-desktop {
    margin-inline-start: 33.3333333333%;
  }
  .column.is-5-desktop {
    flex: none;
    width: calc(41.6666666667% - var(--bulma-column-gap) / 2);
  }
  .column.is-offset-5-desktop {
    margin-inline-start: 41.6666666667%;
  }
  .column.is-6-desktop {
    flex: none;
    width: calc(50% - var(--bulma-column-gap) / 2);
  }
  .column.is-offset-6-desktop {
    margin-inline-start: 50%;
  }
  .column.is-7-desktop {
    flex: none;
    width: calc(58.3333333333% - var(--bulma-column-gap) / 2);
  }
  .column.is-offset-7-desktop {
    margin-inline-start: 58.3333333333%;
  }
  .column.is-8-desktop {
    flex: none;
    width: calc(66.6666666667% - var(--bulma-column-gap) / 2);
  }
  .column.is-offset-8-desktop {
    margin-inline-start: 66.6666666667%;
  }
  .column.is-9-desktop {
    flex: none;
    width: calc(75% - var(--bulma-column-gap) / 2);
  }
  .column.is-offset-9-desktop {
    margin-inline-start: 75%;
  }
  .column.is-10-desktop {
    flex: none;
    width: calc(83.3333333333% - var(--bulma-column-gap) / 2);
  }
  .column.is-offset-10-desktop {
    margin-inline-start: 83.3333333333%;
  }
  .column.is-11-desktop {
    flex: none;
    width: calc(91.6666666667% - var(--bulma-column-gap) / 2);
  }
  .column.is-offset-11-desktop {
    margin-inline-start: 91.6666666667%;
  }
  .column.is-12-desktop {
    flex: none;
    width: calc(100% - var(--bulma-column-gap) / 2);
  }
  .column.is-offset-12-desktop {
    margin-inline-start: 100%;
  }
}
@media screen and (min-width: 1216px) {
  .column.is-narrow-widescreen {
    flex: none;
    width: unset;
  }
  .column.is-full-widescreen {
    flex: none;
    width: 100%;
  }
  .column.is-three-quarters-widescreen {
    flex: none;
    width: 75%;
  }
  .column.is-two-thirds-widescreen {
    flex: none;
    width: 66.6666%;
  }
  .column.is-half-widescreen {
    flex: none;
    width: 50%;
  }
  .column.is-one-third-widescreen {
    flex: none;
    width: 33.3333%;
  }
  .column.is-one-quarter-widescreen {
    flex: none;
    width: 25%;
  }
  .column.is-one-fifth-widescreen {
    flex: none;
    width: 20%;
  }
  .column.is-two-fifths-widescreen {
    flex: none;
    width: 40%;
  }
  .column.is-three-fifths-widescreen {
    flex: none;
    width: 60%;
  }
  .column.is-four-fifths-widescreen {
    flex: none;
    width: 80%;
  }
  .column.is-offset-three-quarters-widescreen {
    margin-inline-start: 75%;
  }
  .column.is-offset-two-thirds-widescreen {
    margin-inline-start: 66.6666%;
  }
  .column.is-offset-half-widescreen {
    margin-inline-start: 50%;
  }
  .column.is-offset-one-third-widescreen {
    margin-inline-start: 0.3333%;
  }
  .column.is-offset-one-quarter-widescreen {
    margin-inline-start: 25%;
  }
  .column.is-offset-one-fifth-widescreen {
    margin-inline-start: 20%;
  }
  .column.is-offset-two-fifths-widescreen {
    margin-inline-start: 40%;
  }
  .column.is-offset-three-fifths-widescreen {
    margin-inline-start: 60%;
  }
  .column.is-offset-four-fifths-widescreen {
    margin-inline-start: 80%;
  }
  .column.is-0-widescreen {
    flex: none;
    width: calc(0% - var(--bulma-column-gap) / 2);
  }
  .column.is-offset-0-widescreen {
    margin-inline-start: 0%;
  }
  .column.is-1-widescreen {
    flex: none;
    width: calc(8.3333333333% - var(--bulma-column-gap) / 2);
  }
  .column.is-offset-1-widescreen {
    margin-inline-start: 8.3333333333%;
  }
  .column.is-2-widescreen {
    flex: none;
    width: calc(16.6666666667% - var(--bulma-column-gap) / 2);
  }
  .column.is-offset-2-widescreen {
    margin-inline-start: 16.6666666667%;
  }
  .column.is-3-widescreen {
    flex: none;
    width: calc(25% - var(--bulma-column-gap) / 2);
  }
  .column.is-offset-3-widescreen {
    margin-inline-start: 25%;
  }
  .column.is-4-widescreen {
    flex: none;
    width: calc(33.3333333333% - var(--bulma-column-gap) / 2);
  }
  .column.is-offset-4-widescreen {
    margin-inline-start: 33.3333333333%;
  }
  .column.is-5-widescreen {
    flex: none;
    width: calc(41.6666666667% - var(--bulma-column-gap) / 2);
  }
  .column.is-offset-5-widescreen {
    margin-inline-start: 41.6666666667%;
  }
  .column.is-6-widescreen {
    flex: none;
    width: calc(50% - var(--bulma-column-gap) / 2);
  }
  .column.is-offset-6-widescreen {
    margin-inline-start: 50%;
  }
  .column.is-7-widescreen {
    flex: none;
    width: calc(58.3333333333% - var(--bulma-column-gap) / 2);
  }
  .column.is-offset-7-widescreen {
    margin-inline-start: 58.3333333333%;
  }
  .column.is-8-widescreen {
    flex: none;
    width: calc(66.6666666667% - var(--bulma-column-gap) / 2);
  }
  .column.is-offset-8-widescreen {
    margin-inline-start: 66.6666666667%;
  }
  .column.is-9-widescreen {
    flex: none;
    width: calc(75% - var(--bulma-column-gap) / 2);
  }
  .column.is-offset-9-widescreen {
    margin-inline-start: 75%;
  }
  .column.is-10-widescreen {
    flex: none;
    width: calc(83.3333333333% - var(--bulma-column-gap) / 2);
  }
  .column.is-offset-10-widescreen {
    margin-inline-start: 83.3333333333%;
  }
  .column.is-11-widescreen {
    flex: none;
    width: calc(91.6666666667% - var(--bulma-column-gap) / 2);
  }
  .column.is-offset-11-widescreen {
    margin-inline-start: 91.6666666667%;
  }
  .column.is-12-widescreen {
    flex: none;
    width: calc(100% - var(--bulma-column-gap) / 2);
  }
  .column.is-offset-12-widescreen {
    margin-inline-start: 100%;
  }
}
@media screen and (min-width: 1408px) {
  .column.is-narrow-fullhd {
    flex: none;
    width: unset;
  }
  .column.is-full-fullhd {
    flex: none;
    width: 100%;
  }
  .column.is-three-quarters-fullhd {
    flex: none;
    width: 75%;
  }
  .column.is-two-thirds-fullhd {
    flex: none;
    width: 66.6666%;
  }
  .column.is-half-fullhd {
    flex: none;
    width: 50%;
  }
  .column.is-one-third-fullhd {
    flex: none;
    width: 33.3333%;
  }
  .column.is-one-quarter-fullhd {
    flex: none;
    width: 25%;
  }
  .column.is-one-fifth-fullhd {
    flex: none;
    width: 20%;
  }
  .column.is-two-fifths-fullhd {
    flex: none;
    width: 40%;
  }
  .column.is-three-fifths-fullhd {
    flex: none;
    width: 60%;
  }
  .column.is-four-fifths-fullhd {
    flex: none;
    width: 80%;
  }
  .column.is-offset-three-quarters-fullhd {
    margin-inline-start: 75%;
  }
  .column.is-offset-two-thirds-fullhd {
    margin-inline-start: 66.6666%;
  }
  .column.is-offset-half-fullhd {
    margin-inline-start: 50%;
  }
  .column.is-offset-one-third-fullhd {
    margin-inline-start: 33.3333%;
  }
  .column.is-offset-one-quarter-fullhd {
    margin-inline-start: 25%;
  }
  .column.is-offset-one-fifth-fullhd {
    margin-inline-start: 20%;
  }
  .column.is-offset-two-fifths-fullhd {
    margin-inline-start: 40%;
  }
  .column.is-offset-three-fifths-fullhd {
    margin-inline-start: 60%;
  }
  .column.is-offset-four-fifths-fullhd {
    margin-inline-start: 80%;
  }
  .column.is-0-fullhd {
    flex: none;
    width: 0%;
  }
  .column.is-offset-0-fullhd {
    margin-inline-start: 0%;
  }
  .column.is-1-fullhd {
    flex: none;
    width: 8.3333333333%;
  }
  .column.is-offset-1-fullhd {
    margin-inline-start: 8.3333333333%;
  }
  .column.is-2-fullhd {
    flex: none;
    width: 16.6666666667%;
  }
  .column.is-offset-2-fullhd {
    margin-inline-start: 16.6666666667%;
  }
  .column.is-3-fullhd {
    flex: none;
    width: 25%;
  }
  .column.is-offset-3-fullhd {
    margin-inline-start: 25%;
  }
  .column.is-4-fullhd {
    flex: none;
    width: 33.3333333333%;
  }
  .column.is-offset-4-fullhd {
    margin-inline-start: 33.3333333333%;
  }
  .column.is-5-fullhd {
    flex: none;
    width: 41.6666666667%;
  }
  .column.is-offset-5-fullhd {
    margin-inline-start: 41.6666666667%;
  }
  .column.is-6-fullhd {
    flex: none;
    width: 50%;
  }
  .column.is-offset-6-fullhd {
    margin-inline-start: 50%;
  }
  .column.is-7-fullhd {
    flex: none;
    width: 58.3333333333%;
  }
  .column.is-offset-7-fullhd {
    margin-inline-start: 58.3333333333%;
  }
  .column.is-8-fullhd {
    flex: none;
    width: 66.6666666667%;
  }
  .column.is-offset-8-fullhd {
    margin-inline-start: 66.6666666667%;
  }
  .column.is-9-fullhd {
    flex: none;
    width: 75%;
  }
  .column.is-offset-9-fullhd {
    margin-inline-start: 75%;
  }
  .column.is-10-fullhd {
    flex: none;
    width: 83.3333333333%;
  }
  .column.is-offset-10-fullhd {
    margin-inline-start: 83.3333333333%;
  }
  .column.is-11-fullhd {
    flex: none;
    width: 91.6666666667%;
  }
  .column.is-offset-11-fullhd {
    margin-inline-start: 91.6666666667%;
  }
  .column.is-12-fullhd {
    flex: none;
    width: 100%;
  }
  .column.is-offset-12-fullhd {
    margin-inline-start: 100%;
  }
}

.columns {
  margin-inline-start: calc(-1 * var(--bulma-column-gap));
  margin-inline-end: calc(-1 * var(--bulma-column-gap));
  margin-top: calc(-1 * var(--bulma-column-gap));
}
.columns:last-child {
  margin-bottom: calc(-1 * var(--bulma-column-gap));
}
.columns:not(:last-child) {
  margin-bottom: calc(1.5rem - 0.75rem);
}
.columns.is-centered {
  justify-content: center;
}
.columns.is-gapless {
  margin-inline-start: 0;
  margin-inline-end: 0;
  margin-top: 0;
}
.columns.is-gapless > .column {
  margin: 0;
  padding: 0 !important;
}
.columns.is-gapless:not(:last-child) {
  margin-bottom: 1.5rem;
}
.columns.is-gapless:last-child {
  margin-bottom: 0;
}
.columns.is-mobile {
  display: flex;
}
.columns.is-multiline {
  flex-wrap: wrap;
}
.columns.is-vcentered {
  align-items: center;
}
@media screen and (min-width: 769px), print {
  .columns:not(.is-desktop) {
    display: flex;
  }
}
@media screen and (min-width: 1024px) {
  .columns.is-desktop {
    display: flex;
  }
}

.fixed-grid {
  container-name: bulma-fixed-grid;
  container-type: inline-size;
}
.fixed-grid .grid {
  --bulma-grid-gap-count: calc(var(--bulma-grid-column-count) - 1);
  --bulma-grid-column-count: 2;
  grid-template-columns: repeat(var(--bulma-grid-column-count), 1fr);
}
.fixed-grid.has-1-cols .grid {
  --bulma-grid-column-count: 1;
}
.fixed-grid.has-2-cols .grid {
  --bulma-grid-column-count: 2;
}
.fixed-grid.has-3-cols .grid {
  --bulma-grid-column-count: 3;
}
.fixed-grid.has-4-cols .grid {
  --bulma-grid-column-count: 4;
}
.fixed-grid.has-5-cols .grid {
  --bulma-grid-column-count: 5;
}
.fixed-grid.has-6-cols .grid {
  --bulma-grid-column-count: 6;
}
.fixed-grid.has-7-cols .grid {
  --bulma-grid-column-count: 7;
}
.fixed-grid.has-8-cols .grid {
  --bulma-grid-column-count: 8;
}
.fixed-grid.has-9-cols .grid {
  --bulma-grid-column-count: 9;
}
.fixed-grid.has-10-cols .grid {
  --bulma-grid-column-count: 10;
}
.fixed-grid.has-11-cols .grid {
  --bulma-grid-column-count: 11;
}
.fixed-grid.has-12-cols .grid {
  --bulma-grid-column-count: 12;
}
@container bulma-fixed-grid (max-width: 768px) {
  .fixed-grid.has-1-cols-mobile .grid {
    --bulma-grid-column-count: 1;
  }
  .fixed-grid.has-2-cols-mobile .grid {
    --bulma-grid-column-count: 2;
  }
  .fixed-grid.has-3-cols-mobile .grid {
    --bulma-grid-column-count: 3;
  }
  .fixed-grid.has-4-cols-mobile .grid {
    --bulma-grid-column-count: 4;
  }
  .fixed-grid.has-5-cols-mobile .grid {
    --bulma-grid-column-count: 5;
  }
  .fixed-grid.has-6-cols-mobile .grid {
    --bulma-grid-column-count: 6;
  }
  .fixed-grid.has-7-cols-mobile .grid {
    --bulma-grid-column-count: 7;
  }
  .fixed-grid.has-8-cols-mobile .grid {
    --bulma-grid-column-count: 8;
  }
  .fixed-grid.has-9-cols-mobile .grid {
    --bulma-grid-column-count: 9;
  }
  .fixed-grid.has-10-cols-mobile .grid {
    --bulma-grid-column-count: 10;
  }
  .fixed-grid.has-11-cols-mobile .grid {
    --bulma-grid-column-count: 11;
  }
  .fixed-grid.has-12-cols-mobile .grid {
    --bulma-grid-column-count: 12;
  }
}
@container bulma-fixed-grid (min-width: 769px) {
  .fixed-grid.has-1-cols-tablet .grid {
    --bulma-grid-column-count: 1;
  }
  .fixed-grid.has-2-cols-tablet .grid {
    --bulma-grid-column-count: 2;
  }
  .fixed-grid.has-3-cols-tablet .grid {
    --bulma-grid-column-count: 3;
  }
  .fixed-grid.has-4-cols-tablet .grid {
    --bulma-grid-column-count: 4;
  }
  .fixed-grid.has-5-cols-tablet .grid {
    --bulma-grid-column-count: 5;
  }
  .fixed-grid.has-6-cols-tablet .grid {
    --bulma-grid-column-count: 6;
  }
  .fixed-grid.has-7-cols-tablet .grid {
    --bulma-grid-column-count: 7;
  }
  .fixed-grid.has-8-cols-tablet .grid {
    --bulma-grid-column-count: 8;
  }
  .fixed-grid.has-9-cols-tablet .grid {
    --bulma-grid-column-count: 9;
  }
  .fixed-grid.has-10-cols-tablet .grid {
    --bulma-grid-column-count: 10;
  }
  .fixed-grid.has-11-cols-tablet .grid {
    --bulma-grid-column-count: 11;
  }
  .fixed-grid.has-12-cols-tablet .grid {
    --bulma-grid-column-count: 12;
  }
}
@container bulma-fixed-grid (min-width: 1024px) {
  .fixed-grid.has-1-cols-desktop .grid {
    --bulma-grid-column-count: 1;
  }
  .fixed-grid.has-2-cols-desktop .grid {
    --bulma-grid-column-count: 2;
  }
  .fixed-grid.has-3-cols-desktop .grid {
    --bulma-grid-column-count: 3;
  }
  .fixed-grid.has-4-cols-desktop .grid {
    --bulma-grid-column-count: 4;
  }
  .fixed-grid.has-5-cols-desktop .grid {
    --bulma-grid-column-count: 5;
  }
  .fixed-grid.has-6-cols-desktop .grid {
    --bulma-grid-column-count: 6;
  }
  .fixed-grid.has-7-cols-desktop .grid {
    --bulma-grid-column-count: 7;
  }
  .fixed-grid.has-8-cols-desktop .grid {
    --bulma-grid-column-count: 8;
  }
  .fixed-grid.has-9-cols-desktop .grid {
    --bulma-grid-column-count: 9;
  }
  .fixed-grid.has-10-cols-desktop .grid {
    --bulma-grid-column-count: 10;
  }
  .fixed-grid.has-11-cols-desktop .grid {
    --bulma-grid-column-count: 11;
  }
  .fixed-grid.has-12-cols-desktop .grid {
    --bulma-grid-column-count: 12;
  }
}
@container bulma-fixed-grid (min-width: 1216px) {
  .fixed-grid.has-1-cols-widescreen .grid {
    --bulma-grid-column-count: 1;
  }
  .fixed-grid.has-2-cols-widescreen .grid {
    --bulma-grid-column-count: 2;
  }
  .fixed-grid.has-3-cols-widescreen .grid {
    --bulma-grid-column-count: 3;
  }
  .fixed-grid.has-4-cols-widescreen .grid {
    --bulma-grid-column-count: 4;
  }
  .fixed-grid.has-5-cols-widescreen .grid {
    --bulma-grid-column-count: 5;
  }
  .fixed-grid.has-6-cols-widescreen .grid {
    --bulma-grid-column-count: 6;
  }
  .fixed-grid.has-7-cols-widescreen .grid {
    --bulma-grid-column-count: 7;
  }
  .fixed-grid.has-8-cols-widescreen .grid {
    --bulma-grid-column-count: 8;
  }
  .fixed-grid.has-9-cols-widescreen .grid {
    --bulma-grid-column-count: 9;
  }
  .fixed-grid.has-10-cols-widescreen .grid {
    --bulma-grid-column-count: 10;
  }
  .fixed-grid.has-11-cols-widescreen .grid {
    --bulma-grid-column-count: 11;
  }
  .fixed-grid.has-12-cols-widescreen .grid {
    --bulma-grid-column-count: 12;
  }
}
@container bulma-fixed-grid (min-width: 1408px) {
  .fixed-grid.has-1-cols-fullhd .grid {
    --bulma-grid-column-count: 1;
  }
  .fixed-grid.has-2-cols-fullhd .grid {
    --bulma-grid-column-count: 2;
  }
  .fixed-grid.has-3-cols-fullhd .grid {
    --bulma-grid-column-count: 3;
  }
  .fixed-grid.has-4-cols-fullhd .grid {
    --bulma-grid-column-count: 4;
  }
  .fixed-grid.has-5-cols-fullhd .grid {
    --bulma-grid-column-count: 5;
  }
  .fixed-grid.has-6-cols-fullhd .grid {
    --bulma-grid-column-count: 6;
  }
  .fixed-grid.has-7-cols-fullhd .grid {
    --bulma-grid-column-count: 7;
  }
  .fixed-grid.has-8-cols-fullhd .grid {
    --bulma-grid-column-count: 8;
  }
  .fixed-grid.has-9-cols-fullhd .grid {
    --bulma-grid-column-count: 9;
  }
  .fixed-grid.has-10-cols-fullhd .grid {
    --bulma-grid-column-count: 10;
  }
  .fixed-grid.has-11-cols-fullhd .grid {
    --bulma-grid-column-count: 11;
  }
  .fixed-grid.has-12-cols-fullhd .grid {
    --bulma-grid-column-count: 12;
  }
}
@container bulma-fixed-grid (max-width: 768px) {
  .fixed-grid.has-auto-count .grid {
    --bulma-grid-column-count: 2;
  }
}
@container bulma-fixed-grid (min-width: 769px) {
  .fixed-grid.has-auto-count .grid {
    --bulma-grid-column-count: 4;
  }
}
@container bulma-fixed-grid (min-width: 1024px) {
  .fixed-grid.has-auto-count .grid {
    --bulma-grid-column-count: 8;
  }
}
@container bulma-fixed-grid (min-width: 1216px) {
  .fixed-grid.has-auto-count .grid {
    --bulma-grid-column-count: 12;
  }
}
@container bulma-fixed-grid (min-width: 1408px) {
  .fixed-grid.has-auto-count .grid {
    --bulma-grid-column-count: 16;
  }
}

.grid {
  --bulma-grid-gap: 0.75rem;
  --bulma-grid-column-min: 9rem;
  --bulma-grid-cell-column-span: 1;
  --bulma-grid-cell-row-span: 1;
  display: grid;
  gap: var(--bulma-grid-gap);
  column-gap: var(--bulma-grid-column-gap, var(--bulma-grid-gap));
  row-gap: var(--bulma-grid-row-gap, var(--bulma-grid-gap));
  grid-template-columns: repeat(auto-fit, minmax(var(--bulma-grid-column-min), 1fr));
  grid-template-rows: auto;
}
.grid.is-auto-fill {
  grid-template-columns: repeat(auto-fill, minmax(var(--bulma-grid-column-min), 1fr));
}
.grid.is-col-min-1 {
  --bulma-grid-column-min: 1.5rem;
}
.grid.is-col-min-2 {
  --bulma-grid-column-min: 3rem;
}
.grid.is-col-min-3 {
  --bulma-grid-column-min: 4.5rem;
}
.grid.is-col-min-4 {
  --bulma-grid-column-min: 6rem;
}
.grid.is-col-min-5 {
  --bulma-grid-column-min: 7.5rem;
}
.grid.is-col-min-6 {
  --bulma-grid-column-min: 9rem;
}
.grid.is-col-min-7 {
  --bulma-grid-column-min: 10.5rem;
}
.grid.is-col-min-8 {
  --bulma-grid-column-min: 12rem;
}
.grid.is-col-min-9 {
  --bulma-grid-column-min: 13.5rem;
}
.grid.is-col-min-10 {
  --bulma-grid-column-min: 15rem;
}
.grid.is-col-min-11 {
  --bulma-grid-column-min: 16.5rem;
}
.grid.is-col-min-12 {
  --bulma-grid-column-min: 18rem;
}

.cell {
  grid-column-end: span var(--bulma-grid-cell-column-span);
  grid-column-start: var(--bulma-grid-cell-column-start);
  grid-row-end: span var(--bulma-grid-cell-row-span);
  grid-row-start: var(--bulma-grid-cell-row-start);
}
.cell.is-col-start-end {
  --bulma-grid-cell-column-start: -1;
}
.cell.is-row-start-end {
  --bulma-grid-cell-row-start: -1;
}
.cell.is-col-start-1 {
  --bulma-grid-cell-column-start: 1;
}
.cell.is-col-end-1 {
  --bulma-grid-cell-column-end: 1;
}
.cell.is-col-from-end-1 {
  --bulma-grid-cell-column-start: -1;
}
.cell.is-col-span-1 {
  --bulma-grid-cell-column-span: 1;
}
.cell.is-row-start-1 {
  --bulma-grid-cell-row-start: 1;
}
.cell.is-row-end-1 {
  --bulma-grid-cell-row-end: 1;
}
.cell.is-row-from-end-1 {
  --bulma-grid-cell-row-start: -1;
}
.cell.is-row-span-1 {
  --bulma-grid-cell-row-span: 1;
}
.cell.is-col-start-2 {
  --bulma-grid-cell-column-start: 2;
}
.cell.is-col-end-2 {
  --bulma-grid-cell-column-end: 2;
}
.cell.is-col-from-end-2 {
  --bulma-grid-cell-column-start: -2;
}
.cell.is-col-span-2 {
  --bulma-grid-cell-column-span: 2;
}
.cell.is-row-start-2 {
  --bulma-grid-cell-row-start: 2;
}
.cell.is-row-end-2 {
  --bulma-grid-cell-row-end: 2;
}
.cell.is-row-from-end-2 {
  --bulma-grid-cell-row-start: -2;
}
.cell.is-row-span-2 {
  --bulma-grid-cell-row-span: 2;
}
.cell.is-col-start-3 {
  --bulma-grid-cell-column-start: 3;
}
.cell.is-col-end-3 {
  --bulma-grid-cell-column-end: 3;
}
.cell.is-col-from-end-3 {
  --bulma-grid-cell-column-start: -3;
}
.cell.is-col-span-3 {
  --bulma-grid-cell-column-span: 3;
}
.cell.is-row-start-3 {
  --bulma-grid-cell-row-start: 3;
}
.cell.is-row-end-3 {
  --bulma-grid-cell-row-end: 3;
}
.cell.is-row-from-end-3 {
  --bulma-grid-cell-row-start: -3;
}
.cell.is-row-span-3 {
  --bulma-grid-cell-row-span: 3;
}
.cell.is-col-start-4 {
  --bulma-grid-cell-column-start: 4;
}
.cell.is-col-end-4 {
  --bulma-grid-cell-column-end: 4;
}
.cell.is-col-from-end-4 {
  --bulma-grid-cell-column-start: -4;
}
.cell.is-col-span-4 {
  --bulma-grid-cell-column-span: 4;
}
.cell.is-row-start-4 {
  --bulma-grid-cell-row-start: 4;
}
.cell.is-row-end-4 {
  --bulma-grid-cell-row-end: 4;
}
.cell.is-row-from-end-4 {
  --bulma-grid-cell-row-start: -4;
}
.cell.is-row-span-4 {
  --bulma-grid-cell-row-span: 4;
}
.cell.is-col-start-5 {
  --bulma-grid-cell-column-start: 5;
}
.cell.is-col-end-5 {
  --bulma-grid-cell-column-end: 5;
}
.cell.is-col-from-end-5 {
  --bulma-grid-cell-column-start: -5;
}
.cell.is-col-span-5 {
  --bulma-grid-cell-column-span: 5;
}
.cell.is-row-start-5 {
  --bulma-grid-cell-row-start: 5;
}
.cell.is-row-end-5 {
  --bulma-grid-cell-row-end: 5;
}
.cell.is-row-from-end-5 {
  --bulma-grid-cell-row-start: -5;
}
.cell.is-row-span-5 {
  --bulma-grid-cell-row-span: 5;
}
.cell.is-col-start-6 {
  --bulma-grid-cell-column-start: 6;
}
.cell.is-col-end-6 {
  --bulma-grid-cell-column-end: 6;
}
.cell.is-col-from-end-6 {
  --bulma-grid-cell-column-start: -6;
}
.cell.is-col-span-6 {
  --bulma-grid-cell-column-span: 6;
}
.cell.is-row-start-6 {
  --bulma-grid-cell-row-start: 6;
}
.cell.is-row-end-6 {
  --bulma-grid-cell-row-end: 6;
}
.cell.is-row-from-end-6 {
  --bulma-grid-cell-row-start: -6;
}
.cell.is-row-span-6 {
  --bulma-grid-cell-row-span: 6;
}
.cell.is-col-start-7 {
  --bulma-grid-cell-column-start: 7;
}
.cell.is-col-end-7 {
  --bulma-grid-cell-column-end: 7;
}
.cell.is-col-from-end-7 {
  --bulma-grid-cell-column-start: -7;
}
.cell.is-col-span-7 {
  --bulma-grid-cell-column-span: 7;
}
.cell.is-row-start-7 {
  --bulma-grid-cell-row-start: 7;
}
.cell.is-row-end-7 {
  --bulma-grid-cell-row-end: 7;
}
.cell.is-row-from-end-7 {
  --bulma-grid-cell-row-start: -7;
}
.cell.is-row-span-7 {
  --bulma-grid-cell-row-span: 7;
}
.cell.is-col-start-8 {
  --bulma-grid-cell-column-start: 8;
}
.cell.is-col-end-8 {
  --bulma-grid-cell-column-end: 8;
}
.cell.is-col-from-end-8 {
  --bulma-grid-cell-column-start: -8;
}
.cell.is-col-span-8 {
  --bulma-grid-cell-column-span: 8;
}
.cell.is-row-start-8 {
  --bulma-grid-cell-row-start: 8;
}
.cell.is-row-end-8 {
  --bulma-grid-cell-row-end: 8;
}
.cell.is-row-from-end-8 {
  --bulma-grid-cell-row-start: -8;
}
.cell.is-row-span-8 {
  --bulma-grid-cell-row-span: 8;
}
.cell.is-col-start-9 {
  --bulma-grid-cell-column-start: 9;
}
.cell.is-col-end-9 {
  --bulma-grid-cell-column-end: 9;
}
.cell.is-col-from-end-9 {
  --bulma-grid-cell-column-start: -9;
}
.cell.is-col-span-9 {
  --bulma-grid-cell-column-span: 9;
}
.cell.is-row-start-9 {
  --bulma-grid-cell-row-start: 9;
}
.cell.is-row-end-9 {
  --bulma-grid-cell-row-end: 9;
}
.cell.is-row-from-end-9 {
  --bulma-grid-cell-row-start: -9;
}
.cell.is-row-span-9 {
  --bulma-grid-cell-row-span: 9;
}
.cell.is-col-start-10 {
  --bulma-grid-cell-column-start: 10;
}
.cell.is-col-end-10 {
  --bulma-grid-cell-column-end: 10;
}
.cell.is-col-from-end-10 {
  --bulma-grid-cell-column-start: -10;
}
.cell.is-col-span-10 {
  --bulma-grid-cell-column-span: 10;
}
.cell.is-row-start-10 {
  --bulma-grid-cell-row-start: 10;
}
.cell.is-row-end-10 {
  --bulma-grid-cell-row-end: 10;
}
.cell.is-row-from-end-10 {
  --bulma-grid-cell-row-start: -10;
}
.cell.is-row-span-10 {
  --bulma-grid-cell-row-span: 10;
}
.cell.is-col-start-11 {
  --bulma-grid-cell-column-start: 11;
}
.cell.is-col-end-11 {
  --bulma-grid-cell-column-end: 11;
}
.cell.is-col-from-end-11 {
  --bulma-grid-cell-column-start: -11;
}
.cell.is-col-span-11 {
  --bulma-grid-cell-column-span: 11;
}
.cell.is-row-start-11 {
  --bulma-grid-cell-row-start: 11;
}
.cell.is-row-end-11 {
  --bulma-grid-cell-row-end: 11;
}
.cell.is-row-from-end-11 {
  --bulma-grid-cell-row-start: -11;
}
.cell.is-row-span-11 {
  --bulma-grid-cell-row-span: 11;
}
.cell.is-col-start-12 {
  --bulma-grid-cell-column-start: 12;
}
.cell.is-col-end-12 {
  --bulma-grid-cell-column-end: 12;
}
.cell.is-col-from-end-12 {
  --bulma-grid-cell-column-start: -12;
}
.cell.is-col-span-12 {
  --bulma-grid-cell-column-span: 12;
}
.cell.is-row-start-12 {
  --bulma-grid-cell-row-start: 12;
}
.cell.is-row-end-12 {
  --bulma-grid-cell-row-end: 12;
}
.cell.is-row-from-end-12 {
  --bulma-grid-cell-row-start: -12;
}
.cell.is-row-span-12 {
  --bulma-grid-cell-row-span: 12;
}
@media screen and (max-width: 768px) {
  .cell.is-col-start-1-mobile {
    --bulma-grid-cell-column-start: 1;
  }
  .cell.is-col-end-1-mobile {
    --bulma-grid-cell-column-end: 1;
  }
  .cell.is-col-from-end-1-mobile {
    --bulma-grid-cell-column-start: -1;
  }
  .cell.is-col-span-1-mobile {
    --bulma-grid-cell-column-span: 1;
  }
  .cell.is-row-start-1-mobile {
    --bulma-grid-cell-row-start: 1;
  }
  .cell.is-row-end-1-mobile {
    --bulma-grid-cell-row-end: 1;
  }
  .cell.is-row-from-end-1-mobile {
    --bulma-grid-cell-row-start: -1;
  }
  .cell.is-row-span-1-mobile {
    --bulma-grid-cell-row-span: 1;
  }
  .cell.is-col-start-2-mobile {
    --bulma-grid-cell-column-start: 2;
  }
  .cell.is-col-end-2-mobile {
    --bulma-grid-cell-column-end: 2;
  }
  .cell.is-col-from-end-2-mobile {
    --bulma-grid-cell-column-start: -2;
  }
  .cell.is-col-span-2-mobile {
    --bulma-grid-cell-column-span: 2;
  }
  .cell.is-row-start-2-mobile {
    --bulma-grid-cell-row-start: 2;
  }
  .cell.is-row-end-2-mobile {
    --bulma-grid-cell-row-end: 2;
  }
  .cell.is-row-from-end-2-mobile {
    --bulma-grid-cell-row-start: -2;
  }
  .cell.is-row-span-2-mobile {
    --bulma-grid-cell-row-span: 2;
  }
  .cell.is-col-start-3-mobile {
    --bulma-grid-cell-column-start: 3;
  }
  .cell.is-col-end-3-mobile {
    --bulma-grid-cell-column-end: 3;
  }
  .cell.is-col-from-end-3-mobile {
    --bulma-grid-cell-column-start: -3;
  }
  .cell.is-col-span-3-mobile {
    --bulma-grid-cell-column-span: 3;
  }
  .cell.is-row-start-3-mobile {
    --bulma-grid-cell-row-start: 3;
  }
  .cell.is-row-end-3-mobile {
    --bulma-grid-cell-row-end: 3;
  }
  .cell.is-row-from-end-3-mobile {
    --bulma-grid-cell-row-start: -3;
  }
  .cell.is-row-span-3-mobile {
    --bulma-grid-cell-row-span: 3;
  }
  .cell.is-col-start-4-mobile {
    --bulma-grid-cell-column-start: 4;
  }
  .cell.is-col-end-4-mobile {
    --bulma-grid-cell-column-end: 4;
  }
  .cell.is-col-from-end-4-mobile {
    --bulma-grid-cell-column-start: -4;
  }
  .cell.is-col-span-4-mobile {
    --bulma-grid-cell-column-span: 4;
  }
  .cell.is-row-start-4-mobile {
    --bulma-grid-cell-row-start: 4;
  }
  .cell.is-row-end-4-mobile {
    --bulma-grid-cell-row-end: 4;
  }
  .cell.is-row-from-end-4-mobile {
    --bulma-grid-cell-row-start: -4;
  }
  .cell.is-row-span-4-mobile {
    --bulma-grid-cell-row-span: 4;
  }
  .cell.is-col-start-5-mobile {
    --bulma-grid-cell-column-start: 5;
  }
  .cell.is-col-end-5-mobile {
    --bulma-grid-cell-column-end: 5;
  }
  .cell.is-col-from-end-5-mobile {
    --bulma-grid-cell-column-start: -5;
  }
  .cell.is-col-span-5-mobile {
    --bulma-grid-cell-column-span: 5;
  }
  .cell.is-row-start-5-mobile {
    --bulma-grid-cell-row-start: 5;
  }
  .cell.is-row-end-5-mobile {
    --bulma-grid-cell-row-end: 5;
  }
  .cell.is-row-from-end-5-mobile {
    --bulma-grid-cell-row-start: -5;
  }
  .cell.is-row-span-5-mobile {
    --bulma-grid-cell-row-span: 5;
  }
  .cell.is-col-start-6-mobile {
    --bulma-grid-cell-column-start: 6;
  }
  .cell.is-col-end-6-mobile {
    --bulma-grid-cell-column-end: 6;
  }
  .cell.is-col-from-end-6-mobile {
    --bulma-grid-cell-column-start: -6;
  }
  .cell.is-col-span-6-mobile {
    --bulma-grid-cell-column-span: 6;
  }
  .cell.is-row-start-6-mobile {
    --bulma-grid-cell-row-start: 6;
  }
  .cell.is-row-end-6-mobile {
    --bulma-grid-cell-row-end: 6;
  }
  .cell.is-row-from-end-6-mobile {
    --bulma-grid-cell-row-start: -6;
  }
  .cell.is-row-span-6-mobile {
    --bulma-grid-cell-row-span: 6;
  }
  .cell.is-col-start-7-mobile {
    --bulma-grid-cell-column-start: 7;
  }
  .cell.is-col-end-7-mobile {
    --bulma-grid-cell-column-end: 7;
  }
  .cell.is-col-from-end-7-mobile {
    --bulma-grid-cell-column-start: -7;
  }
  .cell.is-col-span-7-mobile {
    --bulma-grid-cell-column-span: 7;
  }
  .cell.is-row-start-7-mobile {
    --bulma-grid-cell-row-start: 7;
  }
  .cell.is-row-end-7-mobile {
    --bulma-grid-cell-row-end: 7;
  }
  .cell.is-row-from-end-7-mobile {
    --bulma-grid-cell-row-start: -7;
  }
  .cell.is-row-span-7-mobile {
    --bulma-grid-cell-row-span: 7;
  }
  .cell.is-col-start-8-mobile {
    --bulma-grid-cell-column-start: 8;
  }
  .cell.is-col-end-8-mobile {
    --bulma-grid-cell-column-end: 8;
  }
  .cell.is-col-from-end-8-mobile {
    --bulma-grid-cell-column-start: -8;
  }
  .cell.is-col-span-8-mobile {
    --bulma-grid-cell-column-span: 8;
  }
  .cell.is-row-start-8-mobile {
    --bulma-grid-cell-row-start: 8;
  }
  .cell.is-row-end-8-mobile {
    --bulma-grid-cell-row-end: 8;
  }
  .cell.is-row-from-end-8-mobile {
    --bulma-grid-cell-row-start: -8;
  }
  .cell.is-row-span-8-mobile {
    --bulma-grid-cell-row-span: 8;
  }
  .cell.is-col-start-9-mobile {
    --bulma-grid-cell-column-start: 9;
  }
  .cell.is-col-end-9-mobile {
    --bulma-grid-cell-column-end: 9;
  }
  .cell.is-col-from-end-9-mobile {
    --bulma-grid-cell-column-start: -9;
  }
  .cell.is-col-span-9-mobile {
    --bulma-grid-cell-column-span: 9;
  }
  .cell.is-row-start-9-mobile {
    --bulma-grid-cell-row-start: 9;
  }
  .cell.is-row-end-9-mobile {
    --bulma-grid-cell-row-end: 9;
  }
  .cell.is-row-from-end-9-mobile {
    --bulma-grid-cell-row-start: -9;
  }
  .cell.is-row-span-9-mobile {
    --bulma-grid-cell-row-span: 9;
  }
  .cell.is-col-start-10-mobile {
    --bulma-grid-cell-column-start: 10;
  }
  .cell.is-col-end-10-mobile {
    --bulma-grid-cell-column-end: 10;
  }
  .cell.is-col-from-end-10-mobile {
    --bulma-grid-cell-column-start: -10;
  }
  .cell.is-col-span-10-mobile {
    --bulma-grid-cell-column-span: 10;
  }
  .cell.is-row-start-10-mobile {
    --bulma-grid-cell-row-start: 10;
  }
  .cell.is-row-end-10-mobile {
    --bulma-grid-cell-row-end: 10;
  }
  .cell.is-row-from-end-10-mobile {
    --bulma-grid-cell-row-start: -10;
  }
  .cell.is-row-span-10-mobile {
    --bulma-grid-cell-row-span: 10;
  }
  .cell.is-col-start-11-mobile {
    --bulma-grid-cell-column-start: 11;
  }
  .cell.is-col-end-11-mobile {
    --bulma-grid-cell-column-end: 11;
  }
  .cell.is-col-from-end-11-mobile {
    --bulma-grid-cell-column-start: -11;
  }
  .cell.is-col-span-11-mobile {
    --bulma-grid-cell-column-span: 11;
  }
  .cell.is-row-start-11-mobile {
    --bulma-grid-cell-row-start: 11;
  }
  .cell.is-row-end-11-mobile {
    --bulma-grid-cell-row-end: 11;
  }
  .cell.is-row-from-end-11-mobile {
    --bulma-grid-cell-row-start: -11;
  }
  .cell.is-row-span-11-mobile {
    --bulma-grid-cell-row-span: 11;
  }
  .cell.is-col-start-12-mobile {
    --bulma-grid-cell-column-start: 12;
  }
  .cell.is-col-end-12-mobile {
    --bulma-grid-cell-column-end: 12;
  }
  .cell.is-col-from-end-12-mobile {
    --bulma-grid-cell-column-start: -12;
  }
  .cell.is-col-span-12-mobile {
    --bulma-grid-cell-column-span: 12;
  }
  .cell.is-row-start-12-mobile {
    --bulma-grid-cell-row-start: 12;
  }
  .cell.is-row-end-12-mobile {
    --bulma-grid-cell-row-end: 12;
  }
  .cell.is-row-from-end-12-mobile {
    --bulma-grid-cell-row-start: -12;
  }
  .cell.is-row-span-12-mobile {
    --bulma-grid-cell-row-span: 12;
  }
}
@media screen and (min-width: 769px), print {
  .cell.is-col-start-1-tablet {
    --bulma-grid-cell-column-start: 1;
  }
  .cell.is-col-end-1-tablet {
    --bulma-grid-cell-column-end: 1;
  }
  .cell.is-col-from-end-1-tablet {
    --bulma-grid-cell-column-start: -1;
  }
  .cell.is-col-span-1-tablet {
    --bulma-grid-cell-column-span: 1;
  }
  .cell.is-row-start-1-tablet {
    --bulma-grid-cell-row-start: 1;
  }
  .cell.is-row-end-1-tablet {
    --bulma-grid-cell-row-end: 1;
  }
  .cell.is-row-from-end-1-tablet {
    --bulma-grid-cell-row-start: -1;
  }
  .cell.is-row-span-1-tablet {
    --bulma-grid-cell-row-span: 1;
  }
  .cell.is-col-start-2-tablet {
    --bulma-grid-cell-column-start: 2;
  }
  .cell.is-col-end-2-tablet {
    --bulma-grid-cell-column-end: 2;
  }
  .cell.is-col-from-end-2-tablet {
    --bulma-grid-cell-column-start: -2;
  }
  .cell.is-col-span-2-tablet {
    --bulma-grid-cell-column-span: 2;
  }
  .cell.is-row-start-2-tablet {
    --bulma-grid-cell-row-start: 2;
  }
  .cell.is-row-end-2-tablet {
    --bulma-grid-cell-row-end: 2;
  }
  .cell.is-row-from-end-2-tablet {
    --bulma-grid-cell-row-start: -2;
  }
  .cell.is-row-span-2-tablet {
    --bulma-grid-cell-row-span: 2;
  }
  .cell.is-col-start-3-tablet {
    --bulma-grid-cell-column-start: 3;
  }
  .cell.is-col-end-3-tablet {
    --bulma-grid-cell-column-end: 3;
  }
  .cell.is-col-from-end-3-tablet {
    --bulma-grid-cell-column-start: -3;
  }
  .cell.is-col-span-3-tablet {
    --bulma-grid-cell-column-span: 3;
  }
  .cell.is-row-start-3-tablet {
    --bulma-grid-cell-row-start: 3;
  }
  .cell.is-row-end-3-tablet {
    --bulma-grid-cell-row-end: 3;
  }
  .cell.is-row-from-end-3-tablet {
    --bulma-grid-cell-row-start: -3;
  }
  .cell.is-row-span-3-tablet {
    --bulma-grid-cell-row-span: 3;
  }
  .cell.is-col-start-4-tablet {
    --bulma-grid-cell-column-start: 4;
  }
  .cell.is-col-end-4-tablet {
    --bulma-grid-cell-column-end: 4;
  }
  .cell.is-col-from-end-4-tablet {
    --bulma-grid-cell-column-start: -4;
  }
  .cell.is-col-span-4-tablet {
    --bulma-grid-cell-column-span: 4;
  }
  .cell.is-row-start-4-tablet {
    --bulma-grid-cell-row-start: 4;
  }
  .cell.is-row-end-4-tablet {
    --bulma-grid-cell-row-end: 4;
  }
  .cell.is-row-from-end-4-tablet {
    --bulma-grid-cell-row-start: -4;
  }
  .cell.is-row-span-4-tablet {
    --bulma-grid-cell-row-span: 4;
  }
  .cell.is-col-start-5-tablet {
    --bulma-grid-cell-column-start: 5;
  }
  .cell.is-col-end-5-tablet {
    --bulma-grid-cell-column-end: 5;
  }
  .cell.is-col-from-end-5-tablet {
    --bulma-grid-cell-column-start: -5;
  }
  .cell.is-col-span-5-tablet {
    --bulma-grid-cell-column-span: 5;
  }
  .cell.is-row-start-5-tablet {
    --bulma-grid-cell-row-start: 5;
  }
  .cell.is-row-end-5-tablet {
    --bulma-grid-cell-row-end: 5;
  }
  .cell.is-row-from-end-5-tablet {
    --bulma-grid-cell-row-start: -5;
  }
  .cell.is-row-span-5-tablet {
    --bulma-grid-cell-row-span: 5;
  }
  .cell.is-col-start-6-tablet {
    --bulma-grid-cell-column-start: 6;
  }
  .cell.is-col-end-6-tablet {
    --bulma-grid-cell-column-end: 6;
  }
  .cell.is-col-from-end-6-tablet {
    --bulma-grid-cell-column-start: -6;
  }
  .cell.is-col-span-6-tablet {
    --bulma-grid-cell-column-span: 6;
  }
  .cell.is-row-start-6-tablet {
    --bulma-grid-cell-row-start: 6;
  }
  .cell.is-row-end-6-tablet {
    --bulma-grid-cell-row-end: 6;
  }
  .cell.is-row-from-end-6-tablet {
    --bulma-grid-cell-row-start: -6;
  }
  .cell.is-row-span-6-tablet {
    --bulma-grid-cell-row-span: 6;
  }
  .cell.is-col-start-7-tablet {
    --bulma-grid-cell-column-start: 7;
  }
  .cell.is-col-end-7-tablet {
    --bulma-grid-cell-column-end: 7;
  }
  .cell.is-col-from-end-7-tablet {
    --bulma-grid-cell-column-start: -7;
  }
  .cell.is-col-span-7-tablet {
    --bulma-grid-cell-column-span: 7;
  }
  .cell.is-row-start-7-tablet {
    --bulma-grid-cell-row-start: 7;
  }
  .cell.is-row-end-7-tablet {
    --bulma-grid-cell-row-end: 7;
  }
  .cell.is-row-from-end-7-tablet {
    --bulma-grid-cell-row-start: -7;
  }
  .cell.is-row-span-7-tablet {
    --bulma-grid-cell-row-span: 7;
  }
  .cell.is-col-start-8-tablet {
    --bulma-grid-cell-column-start: 8;
  }
  .cell.is-col-end-8-tablet {
    --bulma-grid-cell-column-end: 8;
  }
  .cell.is-col-from-end-8-tablet {
    --bulma-grid-cell-column-start: -8;
  }
  .cell.is-col-span-8-tablet {
    --bulma-grid-cell-column-span: 8;
  }
  .cell.is-row-start-8-tablet {
    --bulma-grid-cell-row-start: 8;
  }
  .cell.is-row-end-8-tablet {
    --bulma-grid-cell-row-end: 8;
  }
  .cell.is-row-from-end-8-tablet {
    --bulma-grid-cell-row-start: -8;
  }
  .cell.is-row-span-8-tablet {
    --bulma-grid-cell-row-span: 8;
  }
  .cell.is-col-start-9-tablet {
    --bulma-grid-cell-column-start: 9;
  }
  .cell.is-col-end-9-tablet {
    --bulma-grid-cell-column-end: 9;
  }
  .cell.is-col-from-end-9-tablet {
    --bulma-grid-cell-column-start: -9;
  }
  .cell.is-col-span-9-tablet {
    --bulma-grid-cell-column-span: 9;
  }
  .cell.is-row-start-9-tablet {
    --bulma-grid-cell-row-start: 9;
  }
  .cell.is-row-end-9-tablet {
    --bulma-grid-cell-row-end: 9;
  }
  .cell.is-row-from-end-9-tablet {
    --bulma-grid-cell-row-start: -9;
  }
  .cell.is-row-span-9-tablet {
    --bulma-grid-cell-row-span: 9;
  }
  .cell.is-col-start-10-tablet {
    --bulma-grid-cell-column-start: 10;
  }
  .cell.is-col-end-10-tablet {
    --bulma-grid-cell-column-end: 10;
  }
  .cell.is-col-from-end-10-tablet {
    --bulma-grid-cell-column-start: -10;
  }
  .cell.is-col-span-10-tablet {
    --bulma-grid-cell-column-span: 10;
  }
  .cell.is-row-start-10-tablet {
    --bulma-grid-cell-row-start: 10;
  }
  .cell.is-row-end-10-tablet {
    --bulma-grid-cell-row-end: 10;
  }
  .cell.is-row-from-end-10-tablet {
    --bulma-grid-cell-row-start: -10;
  }
  .cell.is-row-span-10-tablet {
    --bulma-grid-cell-row-span: 10;
  }
  .cell.is-col-start-11-tablet {
    --bulma-grid-cell-column-start: 11;
  }
  .cell.is-col-end-11-tablet {
    --bulma-grid-cell-column-end: 11;
  }
  .cell.is-col-from-end-11-tablet {
    --bulma-grid-cell-column-start: -11;
  }
  .cell.is-col-span-11-tablet {
    --bulma-grid-cell-column-span: 11;
  }
  .cell.is-row-start-11-tablet {
    --bulma-grid-cell-row-start: 11;
  }
  .cell.is-row-end-11-tablet {
    --bulma-grid-cell-row-end: 11;
  }
  .cell.is-row-from-end-11-tablet {
    --bulma-grid-cell-row-start: -11;
  }
  .cell.is-row-span-11-tablet {
    --bulma-grid-cell-row-span: 11;
  }
  .cell.is-col-start-12-tablet {
    --bulma-grid-cell-column-start: 12;
  }
  .cell.is-col-end-12-tablet {
    --bulma-grid-cell-column-end: 12;
  }
  .cell.is-col-from-end-12-tablet {
    --bulma-grid-cell-column-start: -12;
  }
  .cell.is-col-span-12-tablet {
    --bulma-grid-cell-column-span: 12;
  }
  .cell.is-row-start-12-tablet {
    --bulma-grid-cell-row-start: 12;
  }
  .cell.is-row-end-12-tablet {
    --bulma-grid-cell-row-end: 12;
  }
  .cell.is-row-from-end-12-tablet {
    --bulma-grid-cell-row-start: -12;
  }
  .cell.is-row-span-12-tablet {
    --bulma-grid-cell-row-span: 12;
  }
}
@media screen and (min-width: 769px) and (max-width: 1023px) {
  .cell.is-col-start-1-tablet-only {
    --bulma-grid-cell-column-start: 1;
  }
  .cell.is-col-end-1-tablet-only {
    --bulma-grid-cell-column-end: 1;
  }
  .cell.is-col-from-end-1-tablet-only {
    --bulma-grid-cell-column-start: -1;
  }
  .cell.is-col-span-1-tablet-only {
    --bulma-grid-cell-column-span: 1;
  }
  .cell.is-row-start-1-tablet-only {
    --bulma-grid-cell-row-start: 1;
  }
  .cell.is-row-end-1-tablet-only {
    --bulma-grid-cell-row-end: 1;
  }
  .cell.is-row-from-end-1-tablet-only {
    --bulma-grid-cell-row-start: -1;
  }
  .cell.is-row-span-1-tablet-only {
    --bulma-grid-cell-row-span: 1;
  }
  .cell.is-col-start-2-tablet-only {
    --bulma-grid-cell-column-start: 2;
  }
  .cell.is-col-end-2-tablet-only {
    --bulma-grid-cell-column-end: 2;
  }
  .cell.is-col-from-end-2-tablet-only {
    --bulma-grid-cell-column-start: -2;
  }
  .cell.is-col-span-2-tablet-only {
    --bulma-grid-cell-column-span: 2;
  }
  .cell.is-row-start-2-tablet-only {
    --bulma-grid-cell-row-start: 2;
  }
  .cell.is-row-end-2-tablet-only {
    --bulma-grid-cell-row-end: 2;
  }
  .cell.is-row-from-end-2-tablet-only {
    --bulma-grid-cell-row-start: -2;
  }
  .cell.is-row-span-2-tablet-only {
    --bulma-grid-cell-row-span: 2;
  }
  .cell.is-col-start-3-tablet-only {
    --bulma-grid-cell-column-start: 3;
  }
  .cell.is-col-end-3-tablet-only {
    --bulma-grid-cell-column-end: 3;
  }
  .cell.is-col-from-end-3-tablet-only {
    --bulma-grid-cell-column-start: -3;
  }
  .cell.is-col-span-3-tablet-only {
    --bulma-grid-cell-column-span: 3;
  }
  .cell.is-row-start-3-tablet-only {
    --bulma-grid-cell-row-start: 3;
  }
  .cell.is-row-end-3-tablet-only {
    --bulma-grid-cell-row-end: 3;
  }
  .cell.is-row-from-end-3-tablet-only {
    --bulma-grid-cell-row-start: -3;
  }
  .cell.is-row-span-3-tablet-only {
    --bulma-grid-cell-row-span: 3;
  }
  .cell.is-col-start-4-tablet-only {
    --bulma-grid-cell-column-start: 4;
  }
  .cell.is-col-end-4-tablet-only {
    --bulma-grid-cell-column-end: 4;
  }
  .cell.is-col-from-end-4-tablet-only {
    --bulma-grid-cell-column-start: -4;
  }
  .cell.is-col-span-4-tablet-only {
    --bulma-grid-cell-column-span: 4;
  }
  .cell.is-row-start-4-tablet-only {
    --bulma-grid-cell-row-start: 4;
  }
  .cell.is-row-end-4-tablet-only {
    --bulma-grid-cell-row-end: 4;
  }
  .cell.is-row-from-end-4-tablet-only {
    --bulma-grid-cell-row-start: -4;
  }
  .cell.is-row-span-4-tablet-only {
    --bulma-grid-cell-row-span: 4;
  }
  .cell.is-col-start-5-tablet-only {
    --bulma-grid-cell-column-start: 5;
  }
  .cell.is-col-end-5-tablet-only {
    --bulma-grid-cell-column-end: 5;
  }
  .cell.is-col-from-end-5-tablet-only {
    --bulma-grid-cell-column-start: -5;
  }
  .cell.is-col-span-5-tablet-only {
    --bulma-grid-cell-column-span: 5;
  }
  .cell.is-row-start-5-tablet-only {
    --bulma-grid-cell-row-start: 5;
  }
  .cell.is-row-end-5-tablet-only {
    --bulma-grid-cell-row-end: 5;
  }
  .cell.is-row-from-end-5-tablet-only {
    --bulma-grid-cell-row-start: -5;
  }
  .cell.is-row-span-5-tablet-only {
    --bulma-grid-cell-row-span: 5;
  }
  .cell.is-col-start-6-tablet-only {
    --bulma-grid-cell-column-start: 6;
  }
  .cell.is-col-end-6-tablet-only {
    --bulma-grid-cell-column-end: 6;
  }
  .cell.is-col-from-end-6-tablet-only {
    --bulma-grid-cell-column-start: -6;
  }
  .cell.is-col-span-6-tablet-only {
    --bulma-grid-cell-column-span: 6;
  }
  .cell.is-row-start-6-tablet-only {
    --bulma-grid-cell-row-start: 6;
  }
  .cell.is-row-end-6-tablet-only {
    --bulma-grid-cell-row-end: 6;
  }
  .cell.is-row-from-end-6-tablet-only {
    --bulma-grid-cell-row-start: -6;
  }
  .cell.is-row-span-6-tablet-only {
    --bulma-grid-cell-row-span: 6;
  }
  .cell.is-col-start-7-tablet-only {
    --bulma-grid-cell-column-start: 7;
  }
  .cell.is-col-end-7-tablet-only {
    --bulma-grid-cell-column-end: 7;
  }
  .cell.is-col-from-end-7-tablet-only {
    --bulma-grid-cell-column-start: -7;
  }
  .cell.is-col-span-7-tablet-only {
    --bulma-grid-cell-column-span: 7;
  }
  .cell.is-row-start-7-tablet-only {
    --bulma-grid-cell-row-start: 7;
  }
  .cell.is-row-end-7-tablet-only {
    --bulma-grid-cell-row-end: 7;
  }
  .cell.is-row-from-end-7-tablet-only {
    --bulma-grid-cell-row-start: -7;
  }
  .cell.is-row-span-7-tablet-only {
    --bulma-grid-cell-row-span: 7;
  }
  .cell.is-col-start-8-tablet-only {
    --bulma-grid-cell-column-start: 8;
  }
  .cell.is-col-end-8-tablet-only {
    --bulma-grid-cell-column-end: 8;
  }
  .cell.is-col-from-end-8-tablet-only {
    --bulma-grid-cell-column-start: -8;
  }
  .cell.is-col-span-8-tablet-only {
    --bulma-grid-cell-column-span: 8;
  }
  .cell.is-row-start-8-tablet-only {
    --bulma-grid-cell-row-start: 8;
  }
  .cell.is-row-end-8-tablet-only {
    --bulma-grid-cell-row-end: 8;
  }
  .cell.is-row-from-end-8-tablet-only {
    --bulma-grid-cell-row-start: -8;
  }
  .cell.is-row-span-8-tablet-only {
    --bulma-grid-cell-row-span: 8;
  }
  .cell.is-col-start-9-tablet-only {
    --bulma-grid-cell-column-start: 9;
  }
  .cell.is-col-end-9-tablet-only {
    --bulma-grid-cell-column-end: 9;
  }
  .cell.is-col-from-end-9-tablet-only {
    --bulma-grid-cell-column-start: -9;
  }
  .cell.is-col-span-9-tablet-only {
    --bulma-grid-cell-column-span: 9;
  }
  .cell.is-row-start-9-tablet-only {
    --bulma-grid-cell-row-start: 9;
  }
  .cell.is-row-end-9-tablet-only {
    --bulma-grid-cell-row-end: 9;
  }
  .cell.is-row-from-end-9-tablet-only {
    --bulma-grid-cell-row-start: -9;
  }
  .cell.is-row-span-9-tablet-only {
    --bulma-grid-cell-row-span: 9;
  }
  .cell.is-col-start-10-tablet-only {
    --bulma-grid-cell-column-start: 10;
  }
  .cell.is-col-end-10-tablet-only {
    --bulma-grid-cell-column-end: 10;
  }
  .cell.is-col-from-end-10-tablet-only {
    --bulma-grid-cell-column-start: -10;
  }
  .cell.is-col-span-10-tablet-only {
    --bulma-grid-cell-column-span: 10;
  }
  .cell.is-row-start-10-tablet-only {
    --bulma-grid-cell-row-start: 10;
  }
  .cell.is-row-end-10-tablet-only {
    --bulma-grid-cell-row-end: 10;
  }
  .cell.is-row-from-end-10-tablet-only {
    --bulma-grid-cell-row-start: -10;
  }
  .cell.is-row-span-10-tablet-only {
    --bulma-grid-cell-row-span: 10;
  }
  .cell.is-col-start-11-tablet-only {
    --bulma-grid-cell-column-start: 11;
  }
  .cell.is-col-end-11-tablet-only {
    --bulma-grid-cell-column-end: 11;
  }
  .cell.is-col-from-end-11-tablet-only {
    --bulma-grid-cell-column-start: -11;
  }
  .cell.is-col-span-11-tablet-only {
    --bulma-grid-cell-column-span: 11;
  }
  .cell.is-row-start-11-tablet-only {
    --bulma-grid-cell-row-start: 11;
  }
  .cell.is-row-end-11-tablet-only {
    --bulma-grid-cell-row-end: 11;
  }
  .cell.is-row-from-end-11-tablet-only {
    --bulma-grid-cell-row-start: -11;
  }
  .cell.is-row-span-11-tablet-only {
    --bulma-grid-cell-row-span: 11;
  }
  .cell.is-col-start-12-tablet-only {
    --bulma-grid-cell-column-start: 12;
  }
  .cell.is-col-end-12-tablet-only {
    --bulma-grid-cell-column-end: 12;
  }
  .cell.is-col-from-end-12-tablet-only {
    --bulma-grid-cell-column-start: -12;
  }
  .cell.is-col-span-12-tablet-only {
    --bulma-grid-cell-column-span: 12;
  }
  .cell.is-row-start-12-tablet-only {
    --bulma-grid-cell-row-start: 12;
  }
  .cell.is-row-end-12-tablet-only {
    --bulma-grid-cell-row-end: 12;
  }
  .cell.is-row-from-end-12-tablet-only {
    --bulma-grid-cell-row-start: -12;
  }
  .cell.is-row-span-12-tablet-only {
    --bulma-grid-cell-row-span: 12;
  }
}
@media screen and (min-width: 1024px) {
  .cell.is-col-start-1-desktop {
    --bulma-grid-cell-column-start: 1;
  }
  .cell.is-col-end-1-desktop {
    --bulma-grid-cell-column-end: 1;
  }
  .cell.is-col-from-end-1-desktop {
    --bulma-grid-cell-column-start: -1;
  }
  .cell.is-col-span-1-desktop {
    --bulma-grid-cell-column-span: 1;
  }
  .cell.is-row-start-1-desktop {
    --bulma-grid-cell-row-start: 1;
  }
  .cell.is-row-end-1-desktop {
    --bulma-grid-cell-row-end: 1;
  }
  .cell.is-row-from-end-1-desktop {
    --bulma-grid-cell-row-start: -1;
  }
  .cell.is-row-span-1-desktop {
    --bulma-grid-cell-row-span: 1;
  }
  .cell.is-col-start-2-desktop {
    --bulma-grid-cell-column-start: 2;
  }
  .cell.is-col-end-2-desktop {
    --bulma-grid-cell-column-end: 2;
  }
  .cell.is-col-from-end-2-desktop {
    --bulma-grid-cell-column-start: -2;
  }
  .cell.is-col-span-2-desktop {
    --bulma-grid-cell-column-span: 2;
  }
  .cell.is-row-start-2-desktop {
    --bulma-grid-cell-row-start: 2;
  }
  .cell.is-row-end-2-desktop {
    --bulma-grid-cell-row-end: 2;
  }
  .cell.is-row-from-end-2-desktop {
    --bulma-grid-cell-row-start: -2;
  }
  .cell.is-row-span-2-desktop {
    --bulma-grid-cell-row-span: 2;
  }
  .cell.is-col-start-3-desktop {
    --bulma-grid-cell-column-start: 3;
  }
  .cell.is-col-end-3-desktop {
    --bulma-grid-cell-column-end: 3;
  }
  .cell.is-col-from-end-3-desktop {
    --bulma-grid-cell-column-start: -3;
  }
  .cell.is-col-span-3-desktop {
    --bulma-grid-cell-column-span: 3;
  }
  .cell.is-row-start-3-desktop {
    --bulma-grid-cell-row-start: 3;
  }
  .cell.is-row-end-3-desktop {
    --bulma-grid-cell-row-end: 3;
  }
  .cell.is-row-from-end-3-desktop {
    --bulma-grid-cell-row-start: -3;
  }
  .cell.is-row-span-3-desktop {
    --bulma-grid-cell-row-span: 3;
  }
  .cell.is-col-start-4-desktop {
    --bulma-grid-cell-column-start: 4;
  }
  .cell.is-col-end-4-desktop {
    --bulma-grid-cell-column-end: 4;
  }
  .cell.is-col-from-end-4-desktop {
    --bulma-grid-cell-column-start: -4;
  }
  .cell.is-col-span-4-desktop {
    --bulma-grid-cell-column-span: 4;
  }
  .cell.is-row-start-4-desktop {
    --bulma-grid-cell-row-start: 4;
  }
  .cell.is-row-end-4-desktop {
    --bulma-grid-cell-row-end: 4;
  }
  .cell.is-row-from-end-4-desktop {
    --bulma-grid-cell-row-start: -4;
  }
  .cell.is-row-span-4-desktop {
    --bulma-grid-cell-row-span: 4;
  }
  .cell.is-col-start-5-desktop {
    --bulma-grid-cell-column-start: 5;
  }
  .cell.is-col-end-5-desktop {
    --bulma-grid-cell-column-end: 5;
  }
  .cell.is-col-from-end-5-desktop {
    --bulma-grid-cell-column-start: -5;
  }
  .cell.is-col-span-5-desktop {
    --bulma-grid-cell-column-span: 5;
  }
  .cell.is-row-start-5-desktop {
    --bulma-grid-cell-row-start: 5;
  }
  .cell.is-row-end-5-desktop {
    --bulma-grid-cell-row-end: 5;
  }
  .cell.is-row-from-end-5-desktop {
    --bulma-grid-cell-row-start: -5;
  }
  .cell.is-row-span-5-desktop {
    --bulma-grid-cell-row-span: 5;
  }
  .cell.is-col-start-6-desktop {
    --bulma-grid-cell-column-start: 6;
  }
  .cell.is-col-end-6-desktop {
    --bulma-grid-cell-column-end: 6;
  }
  .cell.is-col-from-end-6-desktop {
    --bulma-grid-cell-column-start: -6;
  }
  .cell.is-col-span-6-desktop {
    --bulma-grid-cell-column-span: 6;
  }
  .cell.is-row-start-6-desktop {
    --bulma-grid-cell-row-start: 6;
  }
  .cell.is-row-end-6-desktop {
    --bulma-grid-cell-row-end: 6;
  }
  .cell.is-row-from-end-6-desktop {
    --bulma-grid-cell-row-start: -6;
  }
  .cell.is-row-span-6-desktop {
    --bulma-grid-cell-row-span: 6;
  }
  .cell.is-col-start-7-desktop {
    --bulma-grid-cell-column-start: 7;
  }
  .cell.is-col-end-7-desktop {
    --bulma-grid-cell-column-end: 7;
  }
  .cell.is-col-from-end-7-desktop {
    --bulma-grid-cell-column-start: -7;
  }
  .cell.is-col-span-7-desktop {
    --bulma-grid-cell-column-span: 7;
  }
  .cell.is-row-start-7-desktop {
    --bulma-grid-cell-row-start: 7;
  }
  .cell.is-row-end-7-desktop {
    --bulma-grid-cell-row-end: 7;
  }
  .cell.is-row-from-end-7-desktop {
    --bulma-grid-cell-row-start: -7;
  }
  .cell.is-row-span-7-desktop {
    --bulma-grid-cell-row-span: 7;
  }
  .cell.is-col-start-8-desktop {
    --bulma-grid-cell-column-start: 8;
  }
  .cell.is-col-end-8-desktop {
    --bulma-grid-cell-column-end: 8;
  }
  .cell.is-col-from-end-8-desktop {
    --bulma-grid-cell-column-start: -8;
  }
  .cell.is-col-span-8-desktop {
    --bulma-grid-cell-column-span: 8;
  }
  .cell.is-row-start-8-desktop {
    --bulma-grid-cell-row-start: 8;
  }
  .cell.is-row-end-8-desktop {
    --bulma-grid-cell-row-end: 8;
  }
  .cell.is-row-from-end-8-desktop {
    --bulma-grid-cell-row-start: -8;
  }
  .cell.is-row-span-8-desktop {
    --bulma-grid-cell-row-span: 8;
  }
  .cell.is-col-start-9-desktop {
    --bulma-grid-cell-column-start: 9;
  }
  .cell.is-col-end-9-desktop {
    --bulma-grid-cell-column-end: 9;
  }
  .cell.is-col-from-end-9-desktop {
    --bulma-grid-cell-column-start: -9;
  }
  .cell.is-col-span-9-desktop {
    --bulma-grid-cell-column-span: 9;
  }
  .cell.is-row-start-9-desktop {
    --bulma-grid-cell-row-start: 9;
  }
  .cell.is-row-end-9-desktop {
    --bulma-grid-cell-row-end: 9;
  }
  .cell.is-row-from-end-9-desktop {
    --bulma-grid-cell-row-start: -9;
  }
  .cell.is-row-span-9-desktop {
    --bulma-grid-cell-row-span: 9;
  }
  .cell.is-col-start-10-desktop {
    --bulma-grid-cell-column-start: 10;
  }
  .cell.is-col-end-10-desktop {
    --bulma-grid-cell-column-end: 10;
  }
  .cell.is-col-from-end-10-desktop {
    --bulma-grid-cell-column-start: -10;
  }
  .cell.is-col-span-10-desktop {
    --bulma-grid-cell-column-span: 10;
  }
  .cell.is-row-start-10-desktop {
    --bulma-grid-cell-row-start: 10;
  }
  .cell.is-row-end-10-desktop {
    --bulma-grid-cell-row-end: 10;
  }
  .cell.is-row-from-end-10-desktop {
    --bulma-grid-cell-row-start: -10;
  }
  .cell.is-row-span-10-desktop {
    --bulma-grid-cell-row-span: 10;
  }
  .cell.is-col-start-11-desktop {
    --bulma-grid-cell-column-start: 11;
  }
  .cell.is-col-end-11-desktop {
    --bulma-grid-cell-column-end: 11;
  }
  .cell.is-col-from-end-11-desktop {
    --bulma-grid-cell-column-start: -11;
  }
  .cell.is-col-span-11-desktop {
    --bulma-grid-cell-column-span: 11;
  }
  .cell.is-row-start-11-desktop {
    --bulma-grid-cell-row-start: 11;
  }
  .cell.is-row-end-11-desktop {
    --bulma-grid-cell-row-end: 11;
  }
  .cell.is-row-from-end-11-desktop {
    --bulma-grid-cell-row-start: -11;
  }
  .cell.is-row-span-11-desktop {
    --bulma-grid-cell-row-span: 11;
  }
  .cell.is-col-start-12-desktop {
    --bulma-grid-cell-column-start: 12;
  }
  .cell.is-col-end-12-desktop {
    --bulma-grid-cell-column-end: 12;
  }
  .cell.is-col-from-end-12-desktop {
    --bulma-grid-cell-column-start: -12;
  }
  .cell.is-col-span-12-desktop {
    --bulma-grid-cell-column-span: 12;
  }
  .cell.is-row-start-12-desktop {
    --bulma-grid-cell-row-start: 12;
  }
  .cell.is-row-end-12-desktop {
    --bulma-grid-cell-row-end: 12;
  }
  .cell.is-row-from-end-12-desktop {
    --bulma-grid-cell-row-start: -12;
  }
  .cell.is-row-span-12-desktop {
    --bulma-grid-cell-row-span: 12;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .cell.is-col-start-1-desktop-only {
    --bulma-grid-cell-column-start: 1;
  }
  .cell.is-col-end-1-desktop-only {
    --bulma-grid-cell-column-end: 1;
  }
  .cell.is-col-from-end-1-desktop-only {
    --bulma-grid-cell-column-start: -1;
  }
  .cell.is-col-span-1-desktop-only {
    --bulma-grid-cell-column-span: 1;
  }
  .cell.is-row-start-1-desktop-only {
    --bulma-grid-cell-row-start: 1;
  }
  .cell.is-row-end-1-desktop-only {
    --bulma-grid-cell-row-end: 1;
  }
  .cell.is-row-from-end-1-desktop-only {
    --bulma-grid-cell-row-start: -1;
  }
  .cell.is-row-span-1-desktop-only {
    --bulma-grid-cell-row-span: 1;
  }
  .cell.is-col-start-2-desktop-only {
    --bulma-grid-cell-column-start: 2;
  }
  .cell.is-col-end-2-desktop-only {
    --bulma-grid-cell-column-end: 2;
  }
  .cell.is-col-from-end-2-desktop-only {
    --bulma-grid-cell-column-start: -2;
  }
  .cell.is-col-span-2-desktop-only {
    --bulma-grid-cell-column-span: 2;
  }
  .cell.is-row-start-2-desktop-only {
    --bulma-grid-cell-row-start: 2;
  }
  .cell.is-row-end-2-desktop-only {
    --bulma-grid-cell-row-end: 2;
  }
  .cell.is-row-from-end-2-desktop-only {
    --bulma-grid-cell-row-start: -2;
  }
  .cell.is-row-span-2-desktop-only {
    --bulma-grid-cell-row-span: 2;
  }
  .cell.is-col-start-3-desktop-only {
    --bulma-grid-cell-column-start: 3;
  }
  .cell.is-col-end-3-desktop-only {
    --bulma-grid-cell-column-end: 3;
  }
  .cell.is-col-from-end-3-desktop-only {
    --bulma-grid-cell-column-start: -3;
  }
  .cell.is-col-span-3-desktop-only {
    --bulma-grid-cell-column-span: 3;
  }
  .cell.is-row-start-3-desktop-only {
    --bulma-grid-cell-row-start: 3;
  }
  .cell.is-row-end-3-desktop-only {
    --bulma-grid-cell-row-end: 3;
  }
  .cell.is-row-from-end-3-desktop-only {
    --bulma-grid-cell-row-start: -3;
  }
  .cell.is-row-span-3-desktop-only {
    --bulma-grid-cell-row-span: 3;
  }
  .cell.is-col-start-4-desktop-only {
    --bulma-grid-cell-column-start: 4;
  }
  .cell.is-col-end-4-desktop-only {
    --bulma-grid-cell-column-end: 4;
  }
  .cell.is-col-from-end-4-desktop-only {
    --bulma-grid-cell-column-start: -4;
  }
  .cell.is-col-span-4-desktop-only {
    --bulma-grid-cell-column-span: 4;
  }
  .cell.is-row-start-4-desktop-only {
    --bulma-grid-cell-row-start: 4;
  }
  .cell.is-row-end-4-desktop-only {
    --bulma-grid-cell-row-end: 4;
  }
  .cell.is-row-from-end-4-desktop-only {
    --bulma-grid-cell-row-start: -4;
  }
  .cell.is-row-span-4-desktop-only {
    --bulma-grid-cell-row-span: 4;
  }
  .cell.is-col-start-5-desktop-only {
    --bulma-grid-cell-column-start: 5;
  }
  .cell.is-col-end-5-desktop-only {
    --bulma-grid-cell-column-end: 5;
  }
  .cell.is-col-from-end-5-desktop-only {
    --bulma-grid-cell-column-start: -5;
  }
  .cell.is-col-span-5-desktop-only {
    --bulma-grid-cell-column-span: 5;
  }
  .cell.is-row-start-5-desktop-only {
    --bulma-grid-cell-row-start: 5;
  }
  .cell.is-row-end-5-desktop-only {
    --bulma-grid-cell-row-end: 5;
  }
  .cell.is-row-from-end-5-desktop-only {
    --bulma-grid-cell-row-start: -5;
  }
  .cell.is-row-span-5-desktop-only {
    --bulma-grid-cell-row-span: 5;
  }
  .cell.is-col-start-6-desktop-only {
    --bulma-grid-cell-column-start: 6;
  }
  .cell.is-col-end-6-desktop-only {
    --bulma-grid-cell-column-end: 6;
  }
  .cell.is-col-from-end-6-desktop-only {
    --bulma-grid-cell-column-start: -6;
  }
  .cell.is-col-span-6-desktop-only {
    --bulma-grid-cell-column-span: 6;
  }
  .cell.is-row-start-6-desktop-only {
    --bulma-grid-cell-row-start: 6;
  }
  .cell.is-row-end-6-desktop-only {
    --bulma-grid-cell-row-end: 6;
  }
  .cell.is-row-from-end-6-desktop-only {
    --bulma-grid-cell-row-start: -6;
  }
  .cell.is-row-span-6-desktop-only {
    --bulma-grid-cell-row-span: 6;
  }
  .cell.is-col-start-7-desktop-only {
    --bulma-grid-cell-column-start: 7;
  }
  .cell.is-col-end-7-desktop-only {
    --bulma-grid-cell-column-end: 7;
  }
  .cell.is-col-from-end-7-desktop-only {
    --bulma-grid-cell-column-start: -7;
  }
  .cell.is-col-span-7-desktop-only {
    --bulma-grid-cell-column-span: 7;
  }
  .cell.is-row-start-7-desktop-only {
    --bulma-grid-cell-row-start: 7;
  }
  .cell.is-row-end-7-desktop-only {
    --bulma-grid-cell-row-end: 7;
  }
  .cell.is-row-from-end-7-desktop-only {
    --bulma-grid-cell-row-start: -7;
  }
  .cell.is-row-span-7-desktop-only {
    --bulma-grid-cell-row-span: 7;
  }
  .cell.is-col-start-8-desktop-only {
    --bulma-grid-cell-column-start: 8;
  }
  .cell.is-col-end-8-desktop-only {
    --bulma-grid-cell-column-end: 8;
  }
  .cell.is-col-from-end-8-desktop-only {
    --bulma-grid-cell-column-start: -8;
  }
  .cell.is-col-span-8-desktop-only {
    --bulma-grid-cell-column-span: 8;
  }
  .cell.is-row-start-8-desktop-only {
    --bulma-grid-cell-row-start: 8;
  }
  .cell.is-row-end-8-desktop-only {
    --bulma-grid-cell-row-end: 8;
  }
  .cell.is-row-from-end-8-desktop-only {
    --bulma-grid-cell-row-start: -8;
  }
  .cell.is-row-span-8-desktop-only {
    --bulma-grid-cell-row-span: 8;
  }
  .cell.is-col-start-9-desktop-only {
    --bulma-grid-cell-column-start: 9;
  }
  .cell.is-col-end-9-desktop-only {
    --bulma-grid-cell-column-end: 9;
  }
  .cell.is-col-from-end-9-desktop-only {
    --bulma-grid-cell-column-start: -9;
  }
  .cell.is-col-span-9-desktop-only {
    --bulma-grid-cell-column-span: 9;
  }
  .cell.is-row-start-9-desktop-only {
    --bulma-grid-cell-row-start: 9;
  }
  .cell.is-row-end-9-desktop-only {
    --bulma-grid-cell-row-end: 9;
  }
  .cell.is-row-from-end-9-desktop-only {
    --bulma-grid-cell-row-start: -9;
  }
  .cell.is-row-span-9-desktop-only {
    --bulma-grid-cell-row-span: 9;
  }
  .cell.is-col-start-10-desktop-only {
    --bulma-grid-cell-column-start: 10;
  }
  .cell.is-col-end-10-desktop-only {
    --bulma-grid-cell-column-end: 10;
  }
  .cell.is-col-from-end-10-desktop-only {
    --bulma-grid-cell-column-start: -10;
  }
  .cell.is-col-span-10-desktop-only {
    --bulma-grid-cell-column-span: 10;
  }
  .cell.is-row-start-10-desktop-only {
    --bulma-grid-cell-row-start: 10;
  }
  .cell.is-row-end-10-desktop-only {
    --bulma-grid-cell-row-end: 10;
  }
  .cell.is-row-from-end-10-desktop-only {
    --bulma-grid-cell-row-start: -10;
  }
  .cell.is-row-span-10-desktop-only {
    --bulma-grid-cell-row-span: 10;
  }
  .cell.is-col-start-11-desktop-only {
    --bulma-grid-cell-column-start: 11;
  }
  .cell.is-col-end-11-desktop-only {
    --bulma-grid-cell-column-end: 11;
  }
  .cell.is-col-from-end-11-desktop-only {
    --bulma-grid-cell-column-start: -11;
  }
  .cell.is-col-span-11-desktop-only {
    --bulma-grid-cell-column-span: 11;
  }
  .cell.is-row-start-11-desktop-only {
    --bulma-grid-cell-row-start: 11;
  }
  .cell.is-row-end-11-desktop-only {
    --bulma-grid-cell-row-end: 11;
  }
  .cell.is-row-from-end-11-desktop-only {
    --bulma-grid-cell-row-start: -11;
  }
  .cell.is-row-span-11-desktop-only {
    --bulma-grid-cell-row-span: 11;
  }
  .cell.is-col-start-12-desktop-only {
    --bulma-grid-cell-column-start: 12;
  }
  .cell.is-col-end-12-desktop-only {
    --bulma-grid-cell-column-end: 12;
  }
  .cell.is-col-from-end-12-desktop-only {
    --bulma-grid-cell-column-start: -12;
  }
  .cell.is-col-span-12-desktop-only {
    --bulma-grid-cell-column-span: 12;
  }
  .cell.is-row-start-12-desktop-only {
    --bulma-grid-cell-row-start: 12;
  }
  .cell.is-row-end-12-desktop-only {
    --bulma-grid-cell-row-end: 12;
  }
  .cell.is-row-from-end-12-desktop-only {
    --bulma-grid-cell-row-start: -12;
  }
  .cell.is-row-span-12-desktop-only {
    --bulma-grid-cell-row-span: 12;
  }
}
@media screen and (min-width: 1216px) {
  .cell.is-col-start-1-widescreen {
    --bulma-grid-cell-column-start: 1;
  }
  .cell.is-col-end-1-widescreen {
    --bulma-grid-cell-column-end: 1;
  }
  .cell.is-col-from-end-1-widescreen {
    --bulma-grid-cell-column-start: -1;
  }
  .cell.is-col-span-1-widescreen {
    --bulma-grid-cell-column-span: 1;
  }
  .cell.is-row-start-1-widescreen {
    --bulma-grid-cell-row-start: 1;
  }
  .cell.is-row-end-1-widescreen {
    --bulma-grid-cell-row-end: 1;
  }
  .cell.is-row-from-end-1-widescreen {
    --bulma-grid-cell-row-start: -1;
  }
  .cell.is-row-span-1-widescreen {
    --bulma-grid-cell-row-span: 1;
  }
  .cell.is-col-start-2-widescreen {
    --bulma-grid-cell-column-start: 2;
  }
  .cell.is-col-end-2-widescreen {
    --bulma-grid-cell-column-end: 2;
  }
  .cell.is-col-from-end-2-widescreen {
    --bulma-grid-cell-column-start: -2;
  }
  .cell.is-col-span-2-widescreen {
    --bulma-grid-cell-column-span: 2;
  }
  .cell.is-row-start-2-widescreen {
    --bulma-grid-cell-row-start: 2;
  }
  .cell.is-row-end-2-widescreen {
    --bulma-grid-cell-row-end: 2;
  }
  .cell.is-row-from-end-2-widescreen {
    --bulma-grid-cell-row-start: -2;
  }
  .cell.is-row-span-2-widescreen {
    --bulma-grid-cell-row-span: 2;
  }
  .cell.is-col-start-3-widescreen {
    --bulma-grid-cell-column-start: 3;
  }
  .cell.is-col-end-3-widescreen {
    --bulma-grid-cell-column-end: 3;
  }
  .cell.is-col-from-end-3-widescreen {
    --bulma-grid-cell-column-start: -3;
  }
  .cell.is-col-span-3-widescreen {
    --bulma-grid-cell-column-span: 3;
  }
  .cell.is-row-start-3-widescreen {
    --bulma-grid-cell-row-start: 3;
  }
  .cell.is-row-end-3-widescreen {
    --bulma-grid-cell-row-end: 3;
  }
  .cell.is-row-from-end-3-widescreen {
    --bulma-grid-cell-row-start: -3;
  }
  .cell.is-row-span-3-widescreen {
    --bulma-grid-cell-row-span: 3;
  }
  .cell.is-col-start-4-widescreen {
    --bulma-grid-cell-column-start: 4;
  }
  .cell.is-col-end-4-widescreen {
    --bulma-grid-cell-column-end: 4;
  }
  .cell.is-col-from-end-4-widescreen {
    --bulma-grid-cell-column-start: -4;
  }
  .cell.is-col-span-4-widescreen {
    --bulma-grid-cell-column-span: 4;
  }
  .cell.is-row-start-4-widescreen {
    --bulma-grid-cell-row-start: 4;
  }
  .cell.is-row-end-4-widescreen {
    --bulma-grid-cell-row-end: 4;
  }
  .cell.is-row-from-end-4-widescreen {
    --bulma-grid-cell-row-start: -4;
  }
  .cell.is-row-span-4-widescreen {
    --bulma-grid-cell-row-span: 4;
  }
  .cell.is-col-start-5-widescreen {
    --bulma-grid-cell-column-start: 5;
  }
  .cell.is-col-end-5-widescreen {
    --bulma-grid-cell-column-end: 5;
  }
  .cell.is-col-from-end-5-widescreen {
    --bulma-grid-cell-column-start: -5;
  }
  .cell.is-col-span-5-widescreen {
    --bulma-grid-cell-column-span: 5;
  }
  .cell.is-row-start-5-widescreen {
    --bulma-grid-cell-row-start: 5;
  }
  .cell.is-row-end-5-widescreen {
    --bulma-grid-cell-row-end: 5;
  }
  .cell.is-row-from-end-5-widescreen {
    --bulma-grid-cell-row-start: -5;
  }
  .cell.is-row-span-5-widescreen {
    --bulma-grid-cell-row-span: 5;
  }
  .cell.is-col-start-6-widescreen {
    --bulma-grid-cell-column-start: 6;
  }
  .cell.is-col-end-6-widescreen {
    --bulma-grid-cell-column-end: 6;
  }
  .cell.is-col-from-end-6-widescreen {
    --bulma-grid-cell-column-start: -6;
  }
  .cell.is-col-span-6-widescreen {
    --bulma-grid-cell-column-span: 6;
  }
  .cell.is-row-start-6-widescreen {
    --bulma-grid-cell-row-start: 6;
  }
  .cell.is-row-end-6-widescreen {
    --bulma-grid-cell-row-end: 6;
  }
  .cell.is-row-from-end-6-widescreen {
    --bulma-grid-cell-row-start: -6;
  }
  .cell.is-row-span-6-widescreen {
    --bulma-grid-cell-row-span: 6;
  }
  .cell.is-col-start-7-widescreen {
    --bulma-grid-cell-column-start: 7;
  }
  .cell.is-col-end-7-widescreen {
    --bulma-grid-cell-column-end: 7;
  }
  .cell.is-col-from-end-7-widescreen {
    --bulma-grid-cell-column-start: -7;
  }
  .cell.is-col-span-7-widescreen {
    --bulma-grid-cell-column-span: 7;
  }
  .cell.is-row-start-7-widescreen {
    --bulma-grid-cell-row-start: 7;
  }
  .cell.is-row-end-7-widescreen {
    --bulma-grid-cell-row-end: 7;
  }
  .cell.is-row-from-end-7-widescreen {
    --bulma-grid-cell-row-start: -7;
  }
  .cell.is-row-span-7-widescreen {
    --bulma-grid-cell-row-span: 7;
  }
  .cell.is-col-start-8-widescreen {
    --bulma-grid-cell-column-start: 8;
  }
  .cell.is-col-end-8-widescreen {
    --bulma-grid-cell-column-end: 8;
  }
  .cell.is-col-from-end-8-widescreen {
    --bulma-grid-cell-column-start: -8;
  }
  .cell.is-col-span-8-widescreen {
    --bulma-grid-cell-column-span: 8;
  }
  .cell.is-row-start-8-widescreen {
    --bulma-grid-cell-row-start: 8;
  }
  .cell.is-row-end-8-widescreen {
    --bulma-grid-cell-row-end: 8;
  }
  .cell.is-row-from-end-8-widescreen {
    --bulma-grid-cell-row-start: -8;
  }
  .cell.is-row-span-8-widescreen {
    --bulma-grid-cell-row-span: 8;
  }
  .cell.is-col-start-9-widescreen {
    --bulma-grid-cell-column-start: 9;
  }
  .cell.is-col-end-9-widescreen {
    --bulma-grid-cell-column-end: 9;
  }
  .cell.is-col-from-end-9-widescreen {
    --bulma-grid-cell-column-start: -9;
  }
  .cell.is-col-span-9-widescreen {
    --bulma-grid-cell-column-span: 9;
  }
  .cell.is-row-start-9-widescreen {
    --bulma-grid-cell-row-start: 9;
  }
  .cell.is-row-end-9-widescreen {
    --bulma-grid-cell-row-end: 9;
  }
  .cell.is-row-from-end-9-widescreen {
    --bulma-grid-cell-row-start: -9;
  }
  .cell.is-row-span-9-widescreen {
    --bulma-grid-cell-row-span: 9;
  }
  .cell.is-col-start-10-widescreen {
    --bulma-grid-cell-column-start: 10;
  }
  .cell.is-col-end-10-widescreen {
    --bulma-grid-cell-column-end: 10;
  }
  .cell.is-col-from-end-10-widescreen {
    --bulma-grid-cell-column-start: -10;
  }
  .cell.is-col-span-10-widescreen {
    --bulma-grid-cell-column-span: 10;
  }
  .cell.is-row-start-10-widescreen {
    --bulma-grid-cell-row-start: 10;
  }
  .cell.is-row-end-10-widescreen {
    --bulma-grid-cell-row-end: 10;
  }
  .cell.is-row-from-end-10-widescreen {
    --bulma-grid-cell-row-start: -10;
  }
  .cell.is-row-span-10-widescreen {
    --bulma-grid-cell-row-span: 10;
  }
  .cell.is-col-start-11-widescreen {
    --bulma-grid-cell-column-start: 11;
  }
  .cell.is-col-end-11-widescreen {
    --bulma-grid-cell-column-end: 11;
  }
  .cell.is-col-from-end-11-widescreen {
    --bulma-grid-cell-column-start: -11;
  }
  .cell.is-col-span-11-widescreen {
    --bulma-grid-cell-column-span: 11;
  }
  .cell.is-row-start-11-widescreen {
    --bulma-grid-cell-row-start: 11;
  }
  .cell.is-row-end-11-widescreen {
    --bulma-grid-cell-row-end: 11;
  }
  .cell.is-row-from-end-11-widescreen {
    --bulma-grid-cell-row-start: -11;
  }
  .cell.is-row-span-11-widescreen {
    --bulma-grid-cell-row-span: 11;
  }
  .cell.is-col-start-12-widescreen {
    --bulma-grid-cell-column-start: 12;
  }
  .cell.is-col-end-12-widescreen {
    --bulma-grid-cell-column-end: 12;
  }
  .cell.is-col-from-end-12-widescreen {
    --bulma-grid-cell-column-start: -12;
  }
  .cell.is-col-span-12-widescreen {
    --bulma-grid-cell-column-span: 12;
  }
  .cell.is-row-start-12-widescreen {
    --bulma-grid-cell-row-start: 12;
  }
  .cell.is-row-end-12-widescreen {
    --bulma-grid-cell-row-end: 12;
  }
  .cell.is-row-from-end-12-widescreen {
    --bulma-grid-cell-row-start: -12;
  }
  .cell.is-row-span-12-widescreen {
    --bulma-grid-cell-row-span: 12;
  }
}
@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .cell.is-col-start-1-widescreen-only {
    --bulma-grid-cell-column-start: 1;
  }
  .cell.is-col-end-1-widescreen-only {
    --bulma-grid-cell-column-end: 1;
  }
  .cell.is-col-from-end-1-widescreen-only {
    --bulma-grid-cell-column-start: -1;
  }
  .cell.is-col-span-1-widescreen-only {
    --bulma-grid-cell-column-span: 1;
  }
  .cell.is-row-start-1-widescreen-only {
    --bulma-grid-cell-row-start: 1;
  }
  .cell.is-row-end-1-widescreen-only {
    --bulma-grid-cell-row-end: 1;
  }
  .cell.is-row-from-end-1-widescreen-only {
    --bulma-grid-cell-row-start: -1;
  }
  .cell.is-row-span-1-widescreen-only {
    --bulma-grid-cell-row-span: 1;
  }
  .cell.is-col-start-2-widescreen-only {
    --bulma-grid-cell-column-start: 2;
  }
  .cell.is-col-end-2-widescreen-only {
    --bulma-grid-cell-column-end: 2;
  }
  .cell.is-col-from-end-2-widescreen-only {
    --bulma-grid-cell-column-start: -2;
  }
  .cell.is-col-span-2-widescreen-only {
    --bulma-grid-cell-column-span: 2;
  }
  .cell.is-row-start-2-widescreen-only {
    --bulma-grid-cell-row-start: 2;
  }
  .cell.is-row-end-2-widescreen-only {
    --bulma-grid-cell-row-end: 2;
  }
  .cell.is-row-from-end-2-widescreen-only {
    --bulma-grid-cell-row-start: -2;
  }
  .cell.is-row-span-2-widescreen-only {
    --bulma-grid-cell-row-span: 2;
  }
  .cell.is-col-start-3-widescreen-only {
    --bulma-grid-cell-column-start: 3;
  }
  .cell.is-col-end-3-widescreen-only {
    --bulma-grid-cell-column-end: 3;
  }
  .cell.is-col-from-end-3-widescreen-only {
    --bulma-grid-cell-column-start: -3;
  }
  .cell.is-col-span-3-widescreen-only {
    --bulma-grid-cell-column-span: 3;
  }
  .cell.is-row-start-3-widescreen-only {
    --bulma-grid-cell-row-start: 3;
  }
  .cell.is-row-end-3-widescreen-only {
    --bulma-grid-cell-row-end: 3;
  }
  .cell.is-row-from-end-3-widescreen-only {
    --bulma-grid-cell-row-start: -3;
  }
  .cell.is-row-span-3-widescreen-only {
    --bulma-grid-cell-row-span: 3;
  }
  .cell.is-col-start-4-widescreen-only {
    --bulma-grid-cell-column-start: 4;
  }
  .cell.is-col-end-4-widescreen-only {
    --bulma-grid-cell-column-end: 4;
  }
  .cell.is-col-from-end-4-widescreen-only {
    --bulma-grid-cell-column-start: -4;
  }
  .cell.is-col-span-4-widescreen-only {
    --bulma-grid-cell-column-span: 4;
  }
  .cell.is-row-start-4-widescreen-only {
    --bulma-grid-cell-row-start: 4;
  }
  .cell.is-row-end-4-widescreen-only {
    --bulma-grid-cell-row-end: 4;
  }
  .cell.is-row-from-end-4-widescreen-only {
    --bulma-grid-cell-row-start: -4;
  }
  .cell.is-row-span-4-widescreen-only {
    --bulma-grid-cell-row-span: 4;
  }
  .cell.is-col-start-5-widescreen-only {
    --bulma-grid-cell-column-start: 5;
  }
  .cell.is-col-end-5-widescreen-only {
    --bulma-grid-cell-column-end: 5;
  }
  .cell.is-col-from-end-5-widescreen-only {
    --bulma-grid-cell-column-start: -5;
  }
  .cell.is-col-span-5-widescreen-only {
    --bulma-grid-cell-column-span: 5;
  }
  .cell.is-row-start-5-widescreen-only {
    --bulma-grid-cell-row-start: 5;
  }
  .cell.is-row-end-5-widescreen-only {
    --bulma-grid-cell-row-end: 5;
  }
  .cell.is-row-from-end-5-widescreen-only {
    --bulma-grid-cell-row-start: -5;
  }
  .cell.is-row-span-5-widescreen-only {
    --bulma-grid-cell-row-span: 5;
  }
  .cell.is-col-start-6-widescreen-only {
    --bulma-grid-cell-column-start: 6;
  }
  .cell.is-col-end-6-widescreen-only {
    --bulma-grid-cell-column-end: 6;
  }
  .cell.is-col-from-end-6-widescreen-only {
    --bulma-grid-cell-column-start: -6;
  }
  .cell.is-col-span-6-widescreen-only {
    --bulma-grid-cell-column-span: 6;
  }
  .cell.is-row-start-6-widescreen-only {
    --bulma-grid-cell-row-start: 6;
  }
  .cell.is-row-end-6-widescreen-only {
    --bulma-grid-cell-row-end: 6;
  }
  .cell.is-row-from-end-6-widescreen-only {
    --bulma-grid-cell-row-start: -6;
  }
  .cell.is-row-span-6-widescreen-only {
    --bulma-grid-cell-row-span: 6;
  }
  .cell.is-col-start-7-widescreen-only {
    --bulma-grid-cell-column-start: 7;
  }
  .cell.is-col-end-7-widescreen-only {
    --bulma-grid-cell-column-end: 7;
  }
  .cell.is-col-from-end-7-widescreen-only {
    --bulma-grid-cell-column-start: -7;
  }
  .cell.is-col-span-7-widescreen-only {
    --bulma-grid-cell-column-span: 7;
  }
  .cell.is-row-start-7-widescreen-only {
    --bulma-grid-cell-row-start: 7;
  }
  .cell.is-row-end-7-widescreen-only {
    --bulma-grid-cell-row-end: 7;
  }
  .cell.is-row-from-end-7-widescreen-only {
    --bulma-grid-cell-row-start: -7;
  }
  .cell.is-row-span-7-widescreen-only {
    --bulma-grid-cell-row-span: 7;
  }
  .cell.is-col-start-8-widescreen-only {
    --bulma-grid-cell-column-start: 8;
  }
  .cell.is-col-end-8-widescreen-only {
    --bulma-grid-cell-column-end: 8;
  }
  .cell.is-col-from-end-8-widescreen-only {
    --bulma-grid-cell-column-start: -8;
  }
  .cell.is-col-span-8-widescreen-only {
    --bulma-grid-cell-column-span: 8;
  }
  .cell.is-row-start-8-widescreen-only {
    --bulma-grid-cell-row-start: 8;
  }
  .cell.is-row-end-8-widescreen-only {
    --bulma-grid-cell-row-end: 8;
  }
  .cell.is-row-from-end-8-widescreen-only {
    --bulma-grid-cell-row-start: -8;
  }
  .cell.is-row-span-8-widescreen-only {
    --bulma-grid-cell-row-span: 8;
  }
  .cell.is-col-start-9-widescreen-only {
    --bulma-grid-cell-column-start: 9;
  }
  .cell.is-col-end-9-widescreen-only {
    --bulma-grid-cell-column-end: 9;
  }
  .cell.is-col-from-end-9-widescreen-only {
    --bulma-grid-cell-column-start: -9;
  }
  .cell.is-col-span-9-widescreen-only {
    --bulma-grid-cell-column-span: 9;
  }
  .cell.is-row-start-9-widescreen-only {
    --bulma-grid-cell-row-start: 9;
  }
  .cell.is-row-end-9-widescreen-only {
    --bulma-grid-cell-row-end: 9;
  }
  .cell.is-row-from-end-9-widescreen-only {
    --bulma-grid-cell-row-start: -9;
  }
  .cell.is-row-span-9-widescreen-only {
    --bulma-grid-cell-row-span: 9;
  }
  .cell.is-col-start-10-widescreen-only {
    --bulma-grid-cell-column-start: 10;
  }
  .cell.is-col-end-10-widescreen-only {
    --bulma-grid-cell-column-end: 10;
  }
  .cell.is-col-from-end-10-widescreen-only {
    --bulma-grid-cell-column-start: -10;
  }
  .cell.is-col-span-10-widescreen-only {
    --bulma-grid-cell-column-span: 10;
  }
  .cell.is-row-start-10-widescreen-only {
    --bulma-grid-cell-row-start: 10;
  }
  .cell.is-row-end-10-widescreen-only {
    --bulma-grid-cell-row-end: 10;
  }
  .cell.is-row-from-end-10-widescreen-only {
    --bulma-grid-cell-row-start: -10;
  }
  .cell.is-row-span-10-widescreen-only {
    --bulma-grid-cell-row-span: 10;
  }
  .cell.is-col-start-11-widescreen-only {
    --bulma-grid-cell-column-start: 11;
  }
  .cell.is-col-end-11-widescreen-only {
    --bulma-grid-cell-column-end: 11;
  }
  .cell.is-col-from-end-11-widescreen-only {
    --bulma-grid-cell-column-start: -11;
  }
  .cell.is-col-span-11-widescreen-only {
    --bulma-grid-cell-column-span: 11;
  }
  .cell.is-row-start-11-widescreen-only {
    --bulma-grid-cell-row-start: 11;
  }
  .cell.is-row-end-11-widescreen-only {
    --bulma-grid-cell-row-end: 11;
  }
  .cell.is-row-from-end-11-widescreen-only {
    --bulma-grid-cell-row-start: -11;
  }
  .cell.is-row-span-11-widescreen-only {
    --bulma-grid-cell-row-span: 11;
  }
  .cell.is-col-start-12-widescreen-only {
    --bulma-grid-cell-column-start: 12;
  }
  .cell.is-col-end-12-widescreen-only {
    --bulma-grid-cell-column-end: 12;
  }
  .cell.is-col-from-end-12-widescreen-only {
    --bulma-grid-cell-column-start: -12;
  }
  .cell.is-col-span-12-widescreen-only {
    --bulma-grid-cell-column-span: 12;
  }
  .cell.is-row-start-12-widescreen-only {
    --bulma-grid-cell-row-start: 12;
  }
  .cell.is-row-end-12-widescreen-only {
    --bulma-grid-cell-row-end: 12;
  }
  .cell.is-row-from-end-12-widescreen-only {
    --bulma-grid-cell-row-start: -12;
  }
  .cell.is-row-span-12-widescreen-only {
    --bulma-grid-cell-row-span: 12;
  }
}
@media screen and (min-width: 1408px) {
  .cell.is-col-start-1-fullhd {
    --bulma-grid-cell-column-start: 1;
  }
  .cell.is-col-end-1-fullhd {
    --bulma-grid-cell-column-end: 1;
  }
  .cell.is-col-from-end-1-fullhd {
    --bulma-grid-cell-column-start: -1;
  }
  .cell.is-col-span-1-fullhd {
    --bulma-grid-cell-column-span: 1;
  }
  .cell.is-row-start-1-fullhd {
    --bulma-grid-cell-row-start: 1;
  }
  .cell.is-row-end-1-fullhd {
    --bulma-grid-cell-row-end: 1;
  }
  .cell.is-row-from-end-1-fullhd {
    --bulma-grid-cell-row-start: -1;
  }
  .cell.is-row-span-1-fullhd {
    --bulma-grid-cell-row-span: 1;
  }
  .cell.is-col-start-2-fullhd {
    --bulma-grid-cell-column-start: 2;
  }
  .cell.is-col-end-2-fullhd {
    --bulma-grid-cell-column-end: 2;
  }
  .cell.is-col-from-end-2-fullhd {
    --bulma-grid-cell-column-start: -2;
  }
  .cell.is-col-span-2-fullhd {
    --bulma-grid-cell-column-span: 2;
  }
  .cell.is-row-start-2-fullhd {
    --bulma-grid-cell-row-start: 2;
  }
  .cell.is-row-end-2-fullhd {
    --bulma-grid-cell-row-end: 2;
  }
  .cell.is-row-from-end-2-fullhd {
    --bulma-grid-cell-row-start: -2;
  }
  .cell.is-row-span-2-fullhd {
    --bulma-grid-cell-row-span: 2;
  }
  .cell.is-col-start-3-fullhd {
    --bulma-grid-cell-column-start: 3;
  }
  .cell.is-col-end-3-fullhd {
    --bulma-grid-cell-column-end: 3;
  }
  .cell.is-col-from-end-3-fullhd {
    --bulma-grid-cell-column-start: -3;
  }
  .cell.is-col-span-3-fullhd {
    --bulma-grid-cell-column-span: 3;
  }
  .cell.is-row-start-3-fullhd {
    --bulma-grid-cell-row-start: 3;
  }
  .cell.is-row-end-3-fullhd {
    --bulma-grid-cell-row-end: 3;
  }
  .cell.is-row-from-end-3-fullhd {
    --bulma-grid-cell-row-start: -3;
  }
  .cell.is-row-span-3-fullhd {
    --bulma-grid-cell-row-span: 3;
  }
  .cell.is-col-start-4-fullhd {
    --bulma-grid-cell-column-start: 4;
  }
  .cell.is-col-end-4-fullhd {
    --bulma-grid-cell-column-end: 4;
  }
  .cell.is-col-from-end-4-fullhd {
    --bulma-grid-cell-column-start: -4;
  }
  .cell.is-col-span-4-fullhd {
    --bulma-grid-cell-column-span: 4;
  }
  .cell.is-row-start-4-fullhd {
    --bulma-grid-cell-row-start: 4;
  }
  .cell.is-row-end-4-fullhd {
    --bulma-grid-cell-row-end: 4;
  }
  .cell.is-row-from-end-4-fullhd {
    --bulma-grid-cell-row-start: -4;
  }
  .cell.is-row-span-4-fullhd {
    --bulma-grid-cell-row-span: 4;
  }
  .cell.is-col-start-5-fullhd {
    --bulma-grid-cell-column-start: 5;
  }
  .cell.is-col-end-5-fullhd {
    --bulma-grid-cell-column-end: 5;
  }
  .cell.is-col-from-end-5-fullhd {
    --bulma-grid-cell-column-start: -5;
  }
  .cell.is-col-span-5-fullhd {
    --bulma-grid-cell-column-span: 5;
  }
  .cell.is-row-start-5-fullhd {
    --bulma-grid-cell-row-start: 5;
  }
  .cell.is-row-end-5-fullhd {
    --bulma-grid-cell-row-end: 5;
  }
  .cell.is-row-from-end-5-fullhd {
    --bulma-grid-cell-row-start: -5;
  }
  .cell.is-row-span-5-fullhd {
    --bulma-grid-cell-row-span: 5;
  }
  .cell.is-col-start-6-fullhd {
    --bulma-grid-cell-column-start: 6;
  }
  .cell.is-col-end-6-fullhd {
    --bulma-grid-cell-column-end: 6;
  }
  .cell.is-col-from-end-6-fullhd {
    --bulma-grid-cell-column-start: -6;
  }
  .cell.is-col-span-6-fullhd {
    --bulma-grid-cell-column-span: 6;
  }
  .cell.is-row-start-6-fullhd {
    --bulma-grid-cell-row-start: 6;
  }
  .cell.is-row-end-6-fullhd {
    --bulma-grid-cell-row-end: 6;
  }
  .cell.is-row-from-end-6-fullhd {
    --bulma-grid-cell-row-start: -6;
  }
  .cell.is-row-span-6-fullhd {
    --bulma-grid-cell-row-span: 6;
  }
  .cell.is-col-start-7-fullhd {
    --bulma-grid-cell-column-start: 7;
  }
  .cell.is-col-end-7-fullhd {
    --bulma-grid-cell-column-end: 7;
  }
  .cell.is-col-from-end-7-fullhd {
    --bulma-grid-cell-column-start: -7;
  }
  .cell.is-col-span-7-fullhd {
    --bulma-grid-cell-column-span: 7;
  }
  .cell.is-row-start-7-fullhd {
    --bulma-grid-cell-row-start: 7;
  }
  .cell.is-row-end-7-fullhd {
    --bulma-grid-cell-row-end: 7;
  }
  .cell.is-row-from-end-7-fullhd {
    --bulma-grid-cell-row-start: -7;
  }
  .cell.is-row-span-7-fullhd {
    --bulma-grid-cell-row-span: 7;
  }
  .cell.is-col-start-8-fullhd {
    --bulma-grid-cell-column-start: 8;
  }
  .cell.is-col-end-8-fullhd {
    --bulma-grid-cell-column-end: 8;
  }
  .cell.is-col-from-end-8-fullhd {
    --bulma-grid-cell-column-start: -8;
  }
  .cell.is-col-span-8-fullhd {
    --bulma-grid-cell-column-span: 8;
  }
  .cell.is-row-start-8-fullhd {
    --bulma-grid-cell-row-start: 8;
  }
  .cell.is-row-end-8-fullhd {
    --bulma-grid-cell-row-end: 8;
  }
  .cell.is-row-from-end-8-fullhd {
    --bulma-grid-cell-row-start: -8;
  }
  .cell.is-row-span-8-fullhd {
    --bulma-grid-cell-row-span: 8;
  }
  .cell.is-col-start-9-fullhd {
    --bulma-grid-cell-column-start: 9;
  }
  .cell.is-col-end-9-fullhd {
    --bulma-grid-cell-column-end: 9;
  }
  .cell.is-col-from-end-9-fullhd {
    --bulma-grid-cell-column-start: -9;
  }
  .cell.is-col-span-9-fullhd {
    --bulma-grid-cell-column-span: 9;
  }
  .cell.is-row-start-9-fullhd {
    --bulma-grid-cell-row-start: 9;
  }
  .cell.is-row-end-9-fullhd {
    --bulma-grid-cell-row-end: 9;
  }
  .cell.is-row-from-end-9-fullhd {
    --bulma-grid-cell-row-start: -9;
  }
  .cell.is-row-span-9-fullhd {
    --bulma-grid-cell-row-span: 9;
  }
  .cell.is-col-start-10-fullhd {
    --bulma-grid-cell-column-start: 10;
  }
  .cell.is-col-end-10-fullhd {
    --bulma-grid-cell-column-end: 10;
  }
  .cell.is-col-from-end-10-fullhd {
    --bulma-grid-cell-column-start: -10;
  }
  .cell.is-col-span-10-fullhd {
    --bulma-grid-cell-column-span: 10;
  }
  .cell.is-row-start-10-fullhd {
    --bulma-grid-cell-row-start: 10;
  }
  .cell.is-row-end-10-fullhd {
    --bulma-grid-cell-row-end: 10;
  }
  .cell.is-row-from-end-10-fullhd {
    --bulma-grid-cell-row-start: -10;
  }
  .cell.is-row-span-10-fullhd {
    --bulma-grid-cell-row-span: 10;
  }
  .cell.is-col-start-11-fullhd {
    --bulma-grid-cell-column-start: 11;
  }
  .cell.is-col-end-11-fullhd {
    --bulma-grid-cell-column-end: 11;
  }
  .cell.is-col-from-end-11-fullhd {
    --bulma-grid-cell-column-start: -11;
  }
  .cell.is-col-span-11-fullhd {
    --bulma-grid-cell-column-span: 11;
  }
  .cell.is-row-start-11-fullhd {
    --bulma-grid-cell-row-start: 11;
  }
  .cell.is-row-end-11-fullhd {
    --bulma-grid-cell-row-end: 11;
  }
  .cell.is-row-from-end-11-fullhd {
    --bulma-grid-cell-row-start: -11;
  }
  .cell.is-row-span-11-fullhd {
    --bulma-grid-cell-row-span: 11;
  }
  .cell.is-col-start-12-fullhd {
    --bulma-grid-cell-column-start: 12;
  }
  .cell.is-col-end-12-fullhd {
    --bulma-grid-cell-column-end: 12;
  }
  .cell.is-col-from-end-12-fullhd {
    --bulma-grid-cell-column-start: -12;
  }
  .cell.is-col-span-12-fullhd {
    --bulma-grid-cell-column-span: 12;
  }
  .cell.is-row-start-12-fullhd {
    --bulma-grid-cell-row-start: 12;
  }
  .cell.is-row-end-12-fullhd {
    --bulma-grid-cell-row-end: 12;
  }
  .cell.is-row-from-end-12-fullhd {
    --bulma-grid-cell-row-start: -12;
  }
  .cell.is-row-span-12-fullhd {
    --bulma-grid-cell-row-span: 12;
  }
}

/* Bulma Components */
.container {
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  width: 100%;
}
.container.is-fluid {
  max-width: none !important;
  padding-left: 32px;
  padding-right: 32px;
  width: 100%;
}
@media screen and (min-width: 1024px) {
  .container {
    max-width: 960px;
  }
}
@media screen and (max-width: 1215px) {
  .container.is-widescreen:not(.is-max-desktop) {
    max-width: 1152px;
  }
}
@media screen and (max-width: 1407px) {
  .container.is-fullhd:not(.is-max-desktop):not(.is-max-widescreen) {
    max-width: 1344px;
  }
}
@media screen and (min-width: 1216px) {
  .container:not(.is-max-desktop) {
    max-width: 1152px;
  }
}
@media screen and (min-width: 1408px) {
  .container:not(.is-max-desktop):not(.is-max-widescreen) {
    max-width: 1344px;
  }
}

.footer {
  --bulma-footer-background-color: var(--bulma-scheme-main-bis);
  --bulma-footer-color: false;
  --bulma-footer-padding: 3rem 1.5rem 6rem;
  background-color: var(--bulma-footer-background-color);
  padding: var(--bulma-footer-padding);
}

.hero {
  --bulma-hero-body-padding: 3rem 1.5rem;
  --bulma-hero-body-padding-tablet: 3rem 3rem;
  --bulma-hero-body-padding-small: 1.5rem;
  --bulma-hero-body-padding-medium: 9rem 4.5rem;
  --bulma-hero-body-padding-large: 18rem 6rem;
}

.hero {
  align-items: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.hero .navbar {
  background: none;
}
.hero .tabs ul {
  border-bottom: none;
}
.hero.is-white {
  --bulma-hero-h: var(--bulma-white-h);
  --bulma-hero-s: var(--bulma-white-s);
  --bulma-hero-background-l: var(--bulma-white-l);
  --bulma-hero-color-l: var(--bulma-white-invert-l);
  background-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l));
  color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
}
.hero.is-white .navbar {
  --bulma-navbar-item-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-navbar-item-hover-background-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-navbar-item-hover-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l));
  --bulma-navbar-item-active-background-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-navbar-item-active-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l));
}
.hero.is-white .tabs {
  --bulma-tabs-link-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-tabs-boxed-link-active-background-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-tabs-boxed-link-active-border-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l));
  --bulma-tabs-link-active-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l));
}
.hero.is-white .subtitle {
  --bulma-subtitle-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-subtitle-strong-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
}
.hero.is-white .title {
  --bulma-title-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-title-strong-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
}
.hero.is-white.is-bold {
  background-image: linear-gradient(141deg, hsl(calc(var(--bulma-hero-h) - 5deg), calc(var(--bulma-hero-s) + 10%), calc(var(--bulma-hero-background-l) + 5%)) 0%, hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l)) 71%, hsl(calc(var(--bulma-hero-h) + 5deg), calc(var(--bulma-hero-s) - 10%), calc(var(--bulma-hero-background-l) - 5%)) 100%);
}
@media screen and (max-width: 768px) {
  .hero.is-white.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, hsl(calc(var(--bulma-hero-h) - 5deg), calc(var(--bulma-hero-s) + 10%), calc(var(--bulma-hero-background-l) + 5%)) 0%, hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l)) 71%, hsl(calc(var(--bulma-hero-h) + 5deg), calc(var(--bulma-hero-s) - 10%), calc(var(--bulma-hero-background-l) - 5%)) 100%);
  }
}
.hero.is-black {
  --bulma-hero-h: var(--bulma-black-h);
  --bulma-hero-s: var(--bulma-black-s);
  --bulma-hero-background-l: var(--bulma-black-l);
  --bulma-hero-color-l: var(--bulma-black-invert-l);
  background-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l));
  color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
}
.hero.is-black .navbar {
  --bulma-navbar-item-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-navbar-item-hover-background-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-navbar-item-hover-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l));
  --bulma-navbar-item-active-background-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-navbar-item-active-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l));
}
.hero.is-black .tabs {
  --bulma-tabs-link-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-tabs-boxed-link-active-background-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-tabs-boxed-link-active-border-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l));
  --bulma-tabs-link-active-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l));
}
.hero.is-black .subtitle {
  --bulma-subtitle-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-subtitle-strong-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
}
.hero.is-black .title {
  --bulma-title-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-title-strong-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
}
.hero.is-black.is-bold {
  background-image: linear-gradient(141deg, hsl(calc(var(--bulma-hero-h) - 5deg), calc(var(--bulma-hero-s) + 10%), calc(var(--bulma-hero-background-l) + 5%)) 0%, hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l)) 71%, hsl(calc(var(--bulma-hero-h) + 5deg), calc(var(--bulma-hero-s) - 10%), calc(var(--bulma-hero-background-l) - 5%)) 100%);
}
@media screen and (max-width: 768px) {
  .hero.is-black.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, hsl(calc(var(--bulma-hero-h) - 5deg), calc(var(--bulma-hero-s) + 10%), calc(var(--bulma-hero-background-l) + 5%)) 0%, hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l)) 71%, hsl(calc(var(--bulma-hero-h) + 5deg), calc(var(--bulma-hero-s) - 10%), calc(var(--bulma-hero-background-l) - 5%)) 100%);
  }
}
.hero.is-light {
  --bulma-hero-h: var(--bulma-light-h);
  --bulma-hero-s: var(--bulma-light-s);
  --bulma-hero-background-l: var(--bulma-light-l);
  --bulma-hero-color-l: var(--bulma-light-invert-l);
  background-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l));
  color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
}
.hero.is-light .navbar {
  --bulma-navbar-item-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-navbar-item-hover-background-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-navbar-item-hover-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l));
  --bulma-navbar-item-active-background-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-navbar-item-active-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l));
}
.hero.is-light .tabs {
  --bulma-tabs-link-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-tabs-boxed-link-active-background-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-tabs-boxed-link-active-border-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l));
  --bulma-tabs-link-active-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l));
}
.hero.is-light .subtitle {
  --bulma-subtitle-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-subtitle-strong-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
}
.hero.is-light .title {
  --bulma-title-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-title-strong-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
}
.hero.is-light.is-bold {
  background-image: linear-gradient(141deg, hsl(calc(var(--bulma-hero-h) - 5deg), calc(var(--bulma-hero-s) + 10%), calc(var(--bulma-hero-background-l) + 5%)) 0%, hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l)) 71%, hsl(calc(var(--bulma-hero-h) + 5deg), calc(var(--bulma-hero-s) - 10%), calc(var(--bulma-hero-background-l) - 5%)) 100%);
}
@media screen and (max-width: 768px) {
  .hero.is-light.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, hsl(calc(var(--bulma-hero-h) - 5deg), calc(var(--bulma-hero-s) + 10%), calc(var(--bulma-hero-background-l) + 5%)) 0%, hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l)) 71%, hsl(calc(var(--bulma-hero-h) + 5deg), calc(var(--bulma-hero-s) - 10%), calc(var(--bulma-hero-background-l) - 5%)) 100%);
  }
}
.hero.is-dark {
  --bulma-hero-h: var(--bulma-dark-h);
  --bulma-hero-s: var(--bulma-dark-s);
  --bulma-hero-background-l: var(--bulma-dark-l);
  --bulma-hero-color-l: var(--bulma-dark-invert-l);
  background-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l));
  color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
}
.hero.is-dark .navbar {
  --bulma-navbar-item-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-navbar-item-hover-background-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-navbar-item-hover-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l));
  --bulma-navbar-item-active-background-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-navbar-item-active-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l));
}
.hero.is-dark .tabs {
  --bulma-tabs-link-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-tabs-boxed-link-active-background-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-tabs-boxed-link-active-border-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l));
  --bulma-tabs-link-active-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l));
}
.hero.is-dark .subtitle {
  --bulma-subtitle-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-subtitle-strong-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
}
.hero.is-dark .title {
  --bulma-title-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-title-strong-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
}
.hero.is-dark.is-bold {
  background-image: linear-gradient(141deg, hsl(calc(var(--bulma-hero-h) - 5deg), calc(var(--bulma-hero-s) + 10%), calc(var(--bulma-hero-background-l) + 5%)) 0%, hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l)) 71%, hsl(calc(var(--bulma-hero-h) + 5deg), calc(var(--bulma-hero-s) - 10%), calc(var(--bulma-hero-background-l) - 5%)) 100%);
}
@media screen and (max-width: 768px) {
  .hero.is-dark.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, hsl(calc(var(--bulma-hero-h) - 5deg), calc(var(--bulma-hero-s) + 10%), calc(var(--bulma-hero-background-l) + 5%)) 0%, hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l)) 71%, hsl(calc(var(--bulma-hero-h) + 5deg), calc(var(--bulma-hero-s) - 10%), calc(var(--bulma-hero-background-l) - 5%)) 100%);
  }
}
.hero.is-text {
  --bulma-hero-h: var(--bulma-text-h);
  --bulma-hero-s: var(--bulma-text-s);
  --bulma-hero-background-l: var(--bulma-text-l);
  --bulma-hero-color-l: var(--bulma-text-invert-l);
  background-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l));
  color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
}
.hero.is-text .navbar {
  --bulma-navbar-item-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-navbar-item-hover-background-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-navbar-item-hover-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l));
  --bulma-navbar-item-active-background-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-navbar-item-active-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l));
}
.hero.is-text .tabs {
  --bulma-tabs-link-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-tabs-boxed-link-active-background-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-tabs-boxed-link-active-border-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l));
  --bulma-tabs-link-active-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l));
}
.hero.is-text .subtitle {
  --bulma-subtitle-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-subtitle-strong-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
}
.hero.is-text .title {
  --bulma-title-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-title-strong-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
}
.hero.is-text.is-bold {
  background-image: linear-gradient(141deg, hsl(calc(var(--bulma-hero-h) - 5deg), calc(var(--bulma-hero-s) + 10%), calc(var(--bulma-hero-background-l) + 5%)) 0%, hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l)) 71%, hsl(calc(var(--bulma-hero-h) + 5deg), calc(var(--bulma-hero-s) - 10%), calc(var(--bulma-hero-background-l) - 5%)) 100%);
}
@media screen and (max-width: 768px) {
  .hero.is-text.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, hsl(calc(var(--bulma-hero-h) - 5deg), calc(var(--bulma-hero-s) + 10%), calc(var(--bulma-hero-background-l) + 5%)) 0%, hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l)) 71%, hsl(calc(var(--bulma-hero-h) + 5deg), calc(var(--bulma-hero-s) - 10%), calc(var(--bulma-hero-background-l) - 5%)) 100%);
  }
}
.hero.is-primary {
  --bulma-hero-h: var(--bulma-primary-h);
  --bulma-hero-s: var(--bulma-primary-s);
  --bulma-hero-background-l: var(--bulma-primary-l);
  --bulma-hero-color-l: var(--bulma-primary-invert-l);
  background-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l));
  color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
}
.hero.is-primary .navbar {
  --bulma-navbar-item-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-navbar-item-hover-background-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-navbar-item-hover-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l));
  --bulma-navbar-item-active-background-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-navbar-item-active-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l));
}
.hero.is-primary .tabs {
  --bulma-tabs-link-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-tabs-boxed-link-active-background-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-tabs-boxed-link-active-border-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l));
  --bulma-tabs-link-active-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l));
}
.hero.is-primary .subtitle {
  --bulma-subtitle-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-subtitle-strong-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
}
.hero.is-primary .title {
  --bulma-title-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-title-strong-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
}
.hero.is-primary.is-bold {
  background-image: linear-gradient(141deg, hsl(calc(var(--bulma-hero-h) - 5deg), calc(var(--bulma-hero-s) + 10%), calc(var(--bulma-hero-background-l) + 5%)) 0%, hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l)) 71%, hsl(calc(var(--bulma-hero-h) + 5deg), calc(var(--bulma-hero-s) - 10%), calc(var(--bulma-hero-background-l) - 5%)) 100%);
}
@media screen and (max-width: 768px) {
  .hero.is-primary.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, hsl(calc(var(--bulma-hero-h) - 5deg), calc(var(--bulma-hero-s) + 10%), calc(var(--bulma-hero-background-l) + 5%)) 0%, hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l)) 71%, hsl(calc(var(--bulma-hero-h) + 5deg), calc(var(--bulma-hero-s) - 10%), calc(var(--bulma-hero-background-l) - 5%)) 100%);
  }
}
.hero.is-link {
  --bulma-hero-h: var(--bulma-link-h);
  --bulma-hero-s: var(--bulma-link-s);
  --bulma-hero-background-l: var(--bulma-link-l);
  --bulma-hero-color-l: var(--bulma-link-invert-l);
  background-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l));
  color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
}
.hero.is-link .navbar {
  --bulma-navbar-item-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-navbar-item-hover-background-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-navbar-item-hover-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l));
  --bulma-navbar-item-active-background-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-navbar-item-active-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l));
}
.hero.is-link .tabs {
  --bulma-tabs-link-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-tabs-boxed-link-active-background-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-tabs-boxed-link-active-border-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l));
  --bulma-tabs-link-active-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l));
}
.hero.is-link .subtitle {
  --bulma-subtitle-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-subtitle-strong-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
}
.hero.is-link .title {
  --bulma-title-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-title-strong-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
}
.hero.is-link.is-bold {
  background-image: linear-gradient(141deg, hsl(calc(var(--bulma-hero-h) - 5deg), calc(var(--bulma-hero-s) + 10%), calc(var(--bulma-hero-background-l) + 5%)) 0%, hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l)) 71%, hsl(calc(var(--bulma-hero-h) + 5deg), calc(var(--bulma-hero-s) - 10%), calc(var(--bulma-hero-background-l) - 5%)) 100%);
}
@media screen and (max-width: 768px) {
  .hero.is-link.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, hsl(calc(var(--bulma-hero-h) - 5deg), calc(var(--bulma-hero-s) + 10%), calc(var(--bulma-hero-background-l) + 5%)) 0%, hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l)) 71%, hsl(calc(var(--bulma-hero-h) + 5deg), calc(var(--bulma-hero-s) - 10%), calc(var(--bulma-hero-background-l) - 5%)) 100%);
  }
}
.hero.is-info {
  --bulma-hero-h: var(--bulma-info-h);
  --bulma-hero-s: var(--bulma-info-s);
  --bulma-hero-background-l: var(--bulma-info-l);
  --bulma-hero-color-l: var(--bulma-info-invert-l);
  background-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l));
  color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
}
.hero.is-info .navbar {
  --bulma-navbar-item-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-navbar-item-hover-background-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-navbar-item-hover-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l));
  --bulma-navbar-item-active-background-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-navbar-item-active-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l));
}
.hero.is-info .tabs {
  --bulma-tabs-link-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-tabs-boxed-link-active-background-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-tabs-boxed-link-active-border-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l));
  --bulma-tabs-link-active-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l));
}
.hero.is-info .subtitle {
  --bulma-subtitle-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-subtitle-strong-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
}
.hero.is-info .title {
  --bulma-title-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-title-strong-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
}
.hero.is-info.is-bold {
  background-image: linear-gradient(141deg, hsl(calc(var(--bulma-hero-h) - 5deg), calc(var(--bulma-hero-s) + 10%), calc(var(--bulma-hero-background-l) + 5%)) 0%, hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l)) 71%, hsl(calc(var(--bulma-hero-h) + 5deg), calc(var(--bulma-hero-s) - 10%), calc(var(--bulma-hero-background-l) - 5%)) 100%);
}
@media screen and (max-width: 768px) {
  .hero.is-info.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, hsl(calc(var(--bulma-hero-h) - 5deg), calc(var(--bulma-hero-s) + 10%), calc(var(--bulma-hero-background-l) + 5%)) 0%, hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l)) 71%, hsl(calc(var(--bulma-hero-h) + 5deg), calc(var(--bulma-hero-s) - 10%), calc(var(--bulma-hero-background-l) - 5%)) 100%);
  }
}
.hero.is-success {
  --bulma-hero-h: var(--bulma-success-h);
  --bulma-hero-s: var(--bulma-success-s);
  --bulma-hero-background-l: var(--bulma-success-l);
  --bulma-hero-color-l: var(--bulma-success-invert-l);
  background-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l));
  color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
}
.hero.is-success .navbar {
  --bulma-navbar-item-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-navbar-item-hover-background-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-navbar-item-hover-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l));
  --bulma-navbar-item-active-background-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-navbar-item-active-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l));
}
.hero.is-success .tabs {
  --bulma-tabs-link-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-tabs-boxed-link-active-background-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-tabs-boxed-link-active-border-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l));
  --bulma-tabs-link-active-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l));
}
.hero.is-success .subtitle {
  --bulma-subtitle-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-subtitle-strong-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
}
.hero.is-success .title {
  --bulma-title-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-title-strong-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
}
.hero.is-success.is-bold {
  background-image: linear-gradient(141deg, hsl(calc(var(--bulma-hero-h) - 5deg), calc(var(--bulma-hero-s) + 10%), calc(var(--bulma-hero-background-l) + 5%)) 0%, hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l)) 71%, hsl(calc(var(--bulma-hero-h) + 5deg), calc(var(--bulma-hero-s) - 10%), calc(var(--bulma-hero-background-l) - 5%)) 100%);
}
@media screen and (max-width: 768px) {
  .hero.is-success.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, hsl(calc(var(--bulma-hero-h) - 5deg), calc(var(--bulma-hero-s) + 10%), calc(var(--bulma-hero-background-l) + 5%)) 0%, hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l)) 71%, hsl(calc(var(--bulma-hero-h) + 5deg), calc(var(--bulma-hero-s) - 10%), calc(var(--bulma-hero-background-l) - 5%)) 100%);
  }
}
.hero.is-warning {
  --bulma-hero-h: var(--bulma-warning-h);
  --bulma-hero-s: var(--bulma-warning-s);
  --bulma-hero-background-l: var(--bulma-warning-l);
  --bulma-hero-color-l: var(--bulma-warning-invert-l);
  background-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l));
  color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
}
.hero.is-warning .navbar {
  --bulma-navbar-item-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-navbar-item-hover-background-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-navbar-item-hover-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l));
  --bulma-navbar-item-active-background-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-navbar-item-active-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l));
}
.hero.is-warning .tabs {
  --bulma-tabs-link-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-tabs-boxed-link-active-background-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-tabs-boxed-link-active-border-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l));
  --bulma-tabs-link-active-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l));
}
.hero.is-warning .subtitle {
  --bulma-subtitle-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-subtitle-strong-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
}
.hero.is-warning .title {
  --bulma-title-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-title-strong-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
}
.hero.is-warning.is-bold {
  background-image: linear-gradient(141deg, hsl(calc(var(--bulma-hero-h) - 5deg), calc(var(--bulma-hero-s) + 10%), calc(var(--bulma-hero-background-l) + 5%)) 0%, hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l)) 71%, hsl(calc(var(--bulma-hero-h) + 5deg), calc(var(--bulma-hero-s) - 10%), calc(var(--bulma-hero-background-l) - 5%)) 100%);
}
@media screen and (max-width: 768px) {
  .hero.is-warning.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, hsl(calc(var(--bulma-hero-h) - 5deg), calc(var(--bulma-hero-s) + 10%), calc(var(--bulma-hero-background-l) + 5%)) 0%, hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l)) 71%, hsl(calc(var(--bulma-hero-h) + 5deg), calc(var(--bulma-hero-s) - 10%), calc(var(--bulma-hero-background-l) - 5%)) 100%);
  }
}
.hero.is-danger {
  --bulma-hero-h: var(--bulma-danger-h);
  --bulma-hero-s: var(--bulma-danger-s);
  --bulma-hero-background-l: var(--bulma-danger-l);
  --bulma-hero-color-l: var(--bulma-danger-invert-l);
  background-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l));
  color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
}
.hero.is-danger .navbar {
  --bulma-navbar-item-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-navbar-item-hover-background-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-navbar-item-hover-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l));
  --bulma-navbar-item-active-background-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-navbar-item-active-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l));
}
.hero.is-danger .tabs {
  --bulma-tabs-link-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-tabs-boxed-link-active-background-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-tabs-boxed-link-active-border-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l));
  --bulma-tabs-link-active-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l));
}
.hero.is-danger .subtitle {
  --bulma-subtitle-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-subtitle-strong-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
}
.hero.is-danger .title {
  --bulma-title-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
  --bulma-title-strong-color: hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l));
}
.hero.is-danger.is-bold {
  background-image: linear-gradient(141deg, hsl(calc(var(--bulma-hero-h) - 5deg), calc(var(--bulma-hero-s) + 10%), calc(var(--bulma-hero-background-l) + 5%)) 0%, hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-background-l)) 71%, hsl(calc(var(--bulma-hero-h) + 5deg), calc(var(--bulma-hero-s) - 10%), calc(var(--bulma-hero-background-l) - 5%)) 100%);
}
@media screen and (max-width: 768px) {
  .hero.is-danger.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, hsl(calc(var(--bulma-hero-h) - 5deg), calc(var(--bulma-hero-s) + 10%), calc(var(--bulma-hero-background-l) + 5%)) 0%, hsl(var(--bulma-hero-h), var(--bulma-hero-s), var(--bulma-hero-color-l)) 71%, hsl(calc(var(--bulma-hero-h) + 5deg), calc(var(--bulma-hero-s) - 10%), calc(var(--bulma-hero-background-l) - 5%)) 100%);
  }
}
.hero.is-small .hero-body {
  padding: var(--bulma-hero-body-padding-small);
}
@media screen and (min-width: 769px), print {
  .hero.is-medium .hero-body {
    padding: var(--bulma-hero-body-padding-medium);
  }
}
@media screen and (min-width: 769px), print {
  .hero.is-large .hero-body {
    padding: var(--bulma-hero-body-padding-large);
  }
}
.hero.is-halfheight .hero-body, .hero.is-fullheight .hero-body, .hero.is-fullheight-with-navbar .hero-body {
  align-items: center;
  display: flex;
}
.hero.is-halfheight .hero-body > .container, .hero.is-fullheight .hero-body > .container, .hero.is-fullheight-with-navbar .hero-body > .container {
  flex-grow: 1;
  flex-shrink: 1;
}
.hero.is-halfheight {
  min-height: 50vh;
}
.hero.is-fullheight {
  min-height: 100vh;
}

.hero-video {
  overflow: hidden;
}
.hero-video video {
  left: 50%;
  min-height: 100%;
  min-width: 100%;
  position: absolute;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
}
.hero-video.is-transparent {
  opacity: 0.3;
}
@media screen and (max-width: 768px) {
  .hero-video {
    display: none;
  }
}

.hero-buttons {
  margin-top: 1.5rem;
}
@media screen and (max-width: 768px) {
  .hero-buttons .button {
    display: flex;
  }
  .hero-buttons .button:not(:last-child) {
    margin-bottom: 0.75rem;
  }
}
@media screen and (min-width: 769px), print {
  .hero-buttons {
    display: flex;
    justify-content: center;
  }
  .hero-buttons .button:not(:last-child) {
    margin-inline-end: 1.5rem;
  }
}

.hero-head,
.hero-foot {
  flex-grow: 0;
  flex-shrink: 0;
}

.hero-body {
  flex-grow: 1;
  flex-shrink: 0;
  padding: var(--bulma-hero-body-padding);
}
@media screen and (min-width: 769px), print {
  .hero-body {
    padding: var(--bulma-hero-body-padding-tablet);
  }
}

.level {
  --bulma-level-item-spacing: calc(var(--bulma-block-spacing) * 0.5);
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--bulma-level-item-spacing);
}
.level code {
  border-radius: var(--bulma-radius);
}
.level img {
  display: inline-block;
  vertical-align: top;
}
.level.is-mobile {
  display: flex;
  flex-direction: row;
}
.level.is-mobile .level-left,
.level.is-mobile .level-right {
  display: flex;
}
.level.is-mobile .level-item:not(.is-narrow) {
  flex-grow: 1;
}
@media screen and (min-width: 769px), print {
  .level {
    display: flex;
    flex-direction: row;
  }
  .level > .level-item:not(.is-narrow) {
    flex-grow: 1;
  }
}

.level-item {
  align-items: center;
  display: flex;
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
  justify-content: center;
}
.level-item .title,
.level-item .subtitle {
  margin-bottom: 0;
}

.level-left,
.level-right {
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
  gap: calc(var(--bulma-block-spacing) * 0.5);
}
.level-left .level-item.is-flexible,
.level-right .level-item.is-flexible {
  flex-grow: 1;
}

.level-left {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
@media screen and (min-width: 769px), print {
  .level-left {
    flex-direction: row;
  }
}

.level-right {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
@media screen and (min-width: 769px), print {
  .level-right {
    flex-direction: row;
  }
}

.media {
  --bulma-media-border-color: hsla(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-border-l), 0.5);
  --bulma-media-border-size: 1px;
  --bulma-media-spacing: 1rem;
  --bulma-media-spacing-large: 1.5rem;
  --bulma-media-content-spacing: 0.75rem;
  --bulma-media-level-1-spacing: 0.75rem;
  --bulma-media-level-1-content-spacing: 0.5rem;
  --bulma-media-level-2-spacing: 0.5rem;
  align-items: flex-start;
  display: flex;
  text-align: inherit;
}
.media .content:not(:last-child) {
  margin-bottom: var(--bulma-media-content-spacing);
}
.media .media {
  border-top-color: var(--bulma-media-border-color);
  border-top-style: solid;
  border-top-width: var(--bulma-media-border-size);
  display: flex;
  padding-top: var(--bulma-media-level-1-spacing);
}
.media .media .content:not(:last-child),
.media .media .control:not(:last-child) {
  margin-bottom: var(--bulma-media-level-1-content-spacing);
}
.media .media .media {
  padding-top: var(--bulma-media-level-2-spacing);
}
.media .media .media + .media {
  margin-top: var(--bulma-media-level-2-spacing);
}
.media + .media {
  border-top-color: var(--bulma-media-border-color);
  border-top-style: solid;
  border-top-width: var(--bulma-media-border-size);
  margin-top: var(--bulma-media-spacing);
  padding-top: var(--bulma-media-spacing);
}
.media.is-large + .media {
  margin-top: var(--bulma-media-spacing-large);
  padding-top: var(--bulma-media-spacing-large);
}

.media-left,
.media-right {
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
}

.media-left {
  margin-inline-end: var(--bulma-media-spacing);
}

.media-right {
  margin-inline-start: var(--bulma-media-spacing);
}

.media-content {
  flex-basis: auto;
  flex-grow: 1;
  flex-shrink: 1;
  text-align: inherit;
}

@media screen and (max-width: 768px) {
  .media-content {
    overflow-x: auto;
  }
}
.section {
  --bulma-section-padding: 3rem 1.5rem;
  --bulma-section-padding-desktop: 3rem 3rem;
  --bulma-section-padding-medium: 9rem 4.5rem;
  --bulma-section-padding-large: 18rem 6rem;
  padding: var(--bulma-section-padding);
}
@media screen and (min-width: 1024px) {
  .section {
    padding: var(--bulma-section-padding-desktop);
  }
  .section.is-medium {
    padding: var(--bulma-section-padding-medium);
  }
  .section.is-large {
    padding: var(--bulma-section-padding-large);
  }
}

:root {
  --bulma-skeleton-background: var(--bulma-border);
  --bulma-skeleton-radius: var(--bulma-radius-small);
  --bulma-skeleton-block-min-height: 4.5em;
  --bulma-skeleton-lines-gap: 0.75em;
  --bulma-skeleton-line-height: 0.75em;
}

.skeleton-lines > div, .skeleton-block, .has-skeleton::after, .is-skeleton {
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-name: pulsate;
  animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--bulma-skeleton-background);
  border-radius: var(--bulma-skeleton-radius);
  box-shadow: none;
  pointer-events: none;
}

.is-skeleton {
  color: transparent !important;
}
.is-skeleton em,
.is-skeleton strong {
  color: inherit;
}
.is-skeleton img {
  visibility: hidden;
}
.is-skeleton.checkbox input {
  opacity: 0;
}
.is-skeleton.delete {
  border-radius: var(--bulma-radius-rounded);
}
.is-skeleton.delete::before, .is-skeleton.delete::after {
  display: none;
}

input.is-skeleton,
textarea.is-skeleton {
  resize: none;
}
input.is-skeleton::-moz-placeholder,
textarea.is-skeleton::-moz-placeholder {
  color: transparent !important;
}
input.is-skeleton::-webkit-input-placeholder,
textarea.is-skeleton::-webkit-input-placeholder {
  color: transparent !important;
}
input.is-skeleton:-moz-placeholder,
textarea.is-skeleton:-moz-placeholder {
  color: transparent !important;
}
input.is-skeleton:-ms-input-placeholder,
textarea.is-skeleton:-ms-input-placeholder {
  color: transparent !important;
}

.has-skeleton {
  color: transparent !important;
  position: relative;
}
.has-skeleton::after {
  content: "";
  display: block;
  height: 100%;
  left: 0;
  max-width: 100%;
  min-width: 10%;
  position: absolute;
  top: 0;
  width: 7em;
}

.skeleton-block {
  color: transparent !important;
  min-height: var(--bulma-skeleton-block-min-height);
}

.skeleton-lines {
  color: transparent !important;
  display: flex;
  flex-direction: column;
  gap: var(--bulma-skeleton-lines-gap);
  position: relative;
}
.skeleton-lines > div {
  height: var(--bulma-skeleton-line-height);
}
.skeleton-lines > div:last-child {
  min-width: 4em;
  width: 30%;
}

.skeleton {
  background-image: linear-gradient(0deg, transparent 0%, transparent 50%, #f60 50%, #f60 100%);
  background-position: top left;
  background-size: 1.5em;
}

/* Bulma Helpers */
.is-aspect-ratio-1by1 {
  aspect-ratio: 1/1;
}

.is-aspect-ratio-5by4 {
  aspect-ratio: 5/4;
}

.is-aspect-ratio-4by3 {
  aspect-ratio: 4/3;
}

.is-aspect-ratio-3by2 {
  aspect-ratio: 3/2;
}

.is-aspect-ratio-5by3 {
  aspect-ratio: 5/3;
}

.is-aspect-ratio-16by9 {
  aspect-ratio: 16/9;
}

.is-aspect-ratio-2by1 {
  aspect-ratio: 2/1;
}

.is-aspect-ratio-3by1 {
  aspect-ratio: 3/1;
}

.is-aspect-ratio-4by5 {
  aspect-ratio: 4/5;
}

.is-aspect-ratio-3by4 {
  aspect-ratio: 3/4;
}

.is-aspect-ratio-2by3 {
  aspect-ratio: 2/3;
}

.is-aspect-ratio-3by5 {
  aspect-ratio: 3/5;
}

.is-aspect-ratio-9by16 {
  aspect-ratio: 9/16;
}

.is-aspect-ratio-1by2 {
  aspect-ratio: 1/2;
}

.is-aspect-ratio-1by3 {
  aspect-ratio: 1/3;
}

.has-radius-small {
  border-radius: var(--bulma-radius-small);
}

.has-radius-normal {
  border-radius: var(--bulma-radius);
}

.has-radius-large {
  border-radius: var(--bulma-radius-large);
}

.has-radius-rounded {
  border-radius: var(--bulma-radius-rounded);
}

.has-background {
  background-color: var(--bulma-background);
}

[class*=is-color-white],
[class*=has-text-white] {
  --bulma-color-l: var(--bulma-white-l);
  --bulma-color-l-delta: 0%;
  color: hsl(var(--bulma-white-h), var(--bulma-white-s), calc(var(--bulma-color-l) + var(--bulma-color-l-delta))) !important;
}

[class*=is-background-white],
[class*=has-background-white] {
  --bulma-background-l: var(--bulma-white-l);
  --bulma-background-l-delta: 0%;
  background-color: hsl(var(--bulma-white-h), var(--bulma-white-s), calc(var(--bulma-background-l) + var(--bulma-background-l-delta))) !important;
}

.is-color-white-invert,
.has-text-white-invert {
  --bulma-color-l: var(--bulma-white-invert-l);
}

.is-background-white-invert,
.has-background-white-invert {
  --bulma-background-l: var(--bulma-white-invert-l);
}

.is-color-white-on-scheme,
.has-text-white-on-scheme {
  --bulma-color-l: var(--bulma-white-on-scheme-l);
}

.is-background-white-on-scheme,
.has-background-white-on-scheme {
  --bulma-background-l: var(--bulma-white-on-scheme-l);
}

.is-color-white-light,
.has-text-white-light {
  --bulma-color-l: var(--bulma-white-light-l);
}

.is-background-white-light,
.has-background-white-light {
  --bulma-background-l: var(--bulma-white-light-l);
}

.is-color-white-light-invert,
.has-text-white-light-invert {
  --bulma-color-l: var(--bulma-white-light-invert-l);
}

.is-background-white-light-invert,
.has-background-white-light-invert {
  --bulma-background-l: var(--bulma-white-light-invert-l);
}

.is-color-white-dark,
.has-text-white-dark {
  --bulma-color-l: var(--bulma-white-dark-l);
}

.is-background-white-dark,
.has-background-white-dark {
  --bulma-background-l: var(--bulma-white-dark-l);
}

.is-color-white-dark-invert,
.has-text-white-dark-invert {
  --bulma-color-l: var(--bulma-white-dark-invert-l);
}

.is-background-white-dark-invert,
.has-background-white-dark-invert {
  --bulma-background-l: var(--bulma-white-dark-invert-l);
}

.is-color-white-soft,
.has-text-white-soft {
  --bulma-color-l: var(--bulma-soft-l);
}

.is-background-white-soft,
.has-background-white-soft {
  --bulma-background-l: var(--bulma-soft-l);
}

.is-color-white-bold,
.has-text-white-bold {
  --bulma-color-l: var(--bulma-bold-l);
}

.is-background-white-bold,
.has-background-white-bold {
  --bulma-background-l: var(--bulma-bold-l);
}

.is-color-white-soft-invert,
.has-text-white-soft-invert {
  --bulma-color-l: var(--bulma-soft-invert-l);
}

.is-background-white-soft-invert,
.has-background-white-soft-invert {
  --bulma-background-l: var(--bulma-soft-invert-l);
}

.is-color-white-bold-invert,
.has-text-white-bold-invert {
  --bulma-color-l: var(--bulma-bold-invert-l);
}

.is-background-white-bold-invert,
.has-background-white-bold-invert {
  --bulma-background-l: var(--bulma-bold-invert-l);
}

.is-color-white-00,
.has-text-white-00 {
  --bulma-color-l: var(--bulma-white-00-l);
}

.is-background-white-00,
.has-background-white-00 {
  --bulma-background-l: var(--bulma-white-00-l);
}

.is-color-white-00-invert,
.has-text-white-00-invert {
  --bulma-color-l: var(--bulma-white-00-invert-l);
}

.is-background-white-00-invert,
.has-background-white-00-invert {
  --bulma-background-l: var(--bulma-white-00-invert-l);
}

.is-color-white-05,
.has-text-white-05 {
  --bulma-color-l: var(--bulma-white-05-l);
}

.is-background-white-05,
.has-background-white-05 {
  --bulma-background-l: var(--bulma-white-05-l);
}

.is-color-white-05-invert,
.has-text-white-05-invert {
  --bulma-color-l: var(--bulma-white-05-invert-l);
}

.is-background-white-05-invert,
.has-background-white-05-invert {
  --bulma-background-l: var(--bulma-white-05-invert-l);
}

.is-color-white-10,
.has-text-white-10 {
  --bulma-color-l: var(--bulma-white-10-l);
}

.is-background-white-10,
.has-background-white-10 {
  --bulma-background-l: var(--bulma-white-10-l);
}

.is-color-white-10-invert,
.has-text-white-10-invert {
  --bulma-color-l: var(--bulma-white-10-invert-l);
}

.is-background-white-10-invert,
.has-background-white-10-invert {
  --bulma-background-l: var(--bulma-white-10-invert-l);
}

.is-color-white-15,
.has-text-white-15 {
  --bulma-color-l: var(--bulma-white-15-l);
}

.is-background-white-15,
.has-background-white-15 {
  --bulma-background-l: var(--bulma-white-15-l);
}

.is-color-white-15-invert,
.has-text-white-15-invert {
  --bulma-color-l: var(--bulma-white-15-invert-l);
}

.is-background-white-15-invert,
.has-background-white-15-invert {
  --bulma-background-l: var(--bulma-white-15-invert-l);
}

.is-color-white-20,
.has-text-white-20 {
  --bulma-color-l: var(--bulma-white-20-l);
}

.is-background-white-20,
.has-background-white-20 {
  --bulma-background-l: var(--bulma-white-20-l);
}

.is-color-white-20-invert,
.has-text-white-20-invert {
  --bulma-color-l: var(--bulma-white-20-invert-l);
}

.is-background-white-20-invert,
.has-background-white-20-invert {
  --bulma-background-l: var(--bulma-white-20-invert-l);
}

.is-color-white-25,
.has-text-white-25 {
  --bulma-color-l: var(--bulma-white-25-l);
}

.is-background-white-25,
.has-background-white-25 {
  --bulma-background-l: var(--bulma-white-25-l);
}

.is-color-white-25-invert,
.has-text-white-25-invert {
  --bulma-color-l: var(--bulma-white-25-invert-l);
}

.is-background-white-25-invert,
.has-background-white-25-invert {
  --bulma-background-l: var(--bulma-white-25-invert-l);
}

.is-color-white-30,
.has-text-white-30 {
  --bulma-color-l: var(--bulma-white-30-l);
}

.is-background-white-30,
.has-background-white-30 {
  --bulma-background-l: var(--bulma-white-30-l);
}

.is-color-white-30-invert,
.has-text-white-30-invert {
  --bulma-color-l: var(--bulma-white-30-invert-l);
}

.is-background-white-30-invert,
.has-background-white-30-invert {
  --bulma-background-l: var(--bulma-white-30-invert-l);
}

.is-color-white-35,
.has-text-white-35 {
  --bulma-color-l: var(--bulma-white-35-l);
}

.is-background-white-35,
.has-background-white-35 {
  --bulma-background-l: var(--bulma-white-35-l);
}

.is-color-white-35-invert,
.has-text-white-35-invert {
  --bulma-color-l: var(--bulma-white-35-invert-l);
}

.is-background-white-35-invert,
.has-background-white-35-invert {
  --bulma-background-l: var(--bulma-white-35-invert-l);
}

.is-color-white-40,
.has-text-white-40 {
  --bulma-color-l: var(--bulma-white-40-l);
}

.is-background-white-40,
.has-background-white-40 {
  --bulma-background-l: var(--bulma-white-40-l);
}

.is-color-white-40-invert,
.has-text-white-40-invert {
  --bulma-color-l: var(--bulma-white-40-invert-l);
}

.is-background-white-40-invert,
.has-background-white-40-invert {
  --bulma-background-l: var(--bulma-white-40-invert-l);
}

.is-color-white-45,
.has-text-white-45 {
  --bulma-color-l: var(--bulma-white-45-l);
}

.is-background-white-45,
.has-background-white-45 {
  --bulma-background-l: var(--bulma-white-45-l);
}

.is-color-white-45-invert,
.has-text-white-45-invert {
  --bulma-color-l: var(--bulma-white-45-invert-l);
}

.is-background-white-45-invert,
.has-background-white-45-invert {
  --bulma-background-l: var(--bulma-white-45-invert-l);
}

.is-color-white-50,
.has-text-white-50 {
  --bulma-color-l: var(--bulma-white-50-l);
}

.is-background-white-50,
.has-background-white-50 {
  --bulma-background-l: var(--bulma-white-50-l);
}

.is-color-white-50-invert,
.has-text-white-50-invert {
  --bulma-color-l: var(--bulma-white-50-invert-l);
}

.is-background-white-50-invert,
.has-background-white-50-invert {
  --bulma-background-l: var(--bulma-white-50-invert-l);
}

.is-color-white-55,
.has-text-white-55 {
  --bulma-color-l: var(--bulma-white-55-l);
}

.is-background-white-55,
.has-background-white-55 {
  --bulma-background-l: var(--bulma-white-55-l);
}

.is-color-white-55-invert,
.has-text-white-55-invert {
  --bulma-color-l: var(--bulma-white-55-invert-l);
}

.is-background-white-55-invert,
.has-background-white-55-invert {
  --bulma-background-l: var(--bulma-white-55-invert-l);
}

.is-color-white-60,
.has-text-white-60 {
  --bulma-color-l: var(--bulma-white-60-l);
}

.is-background-white-60,
.has-background-white-60 {
  --bulma-background-l: var(--bulma-white-60-l);
}

.is-color-white-60-invert,
.has-text-white-60-invert {
  --bulma-color-l: var(--bulma-white-60-invert-l);
}

.is-background-white-60-invert,
.has-background-white-60-invert {
  --bulma-background-l: var(--bulma-white-60-invert-l);
}

.is-color-white-65,
.has-text-white-65 {
  --bulma-color-l: var(--bulma-white-65-l);
}

.is-background-white-65,
.has-background-white-65 {
  --bulma-background-l: var(--bulma-white-65-l);
}

.is-color-white-65-invert,
.has-text-white-65-invert {
  --bulma-color-l: var(--bulma-white-65-invert-l);
}

.is-background-white-65-invert,
.has-background-white-65-invert {
  --bulma-background-l: var(--bulma-white-65-invert-l);
}

.is-color-white-70,
.has-text-white-70 {
  --bulma-color-l: var(--bulma-white-70-l);
}

.is-background-white-70,
.has-background-white-70 {
  --bulma-background-l: var(--bulma-white-70-l);
}

.is-color-white-70-invert,
.has-text-white-70-invert {
  --bulma-color-l: var(--bulma-white-70-invert-l);
}

.is-background-white-70-invert,
.has-background-white-70-invert {
  --bulma-background-l: var(--bulma-white-70-invert-l);
}

.is-color-white-75,
.has-text-white-75 {
  --bulma-color-l: var(--bulma-white-75-l);
}

.is-background-white-75,
.has-background-white-75 {
  --bulma-background-l: var(--bulma-white-75-l);
}

.is-color-white-75-invert,
.has-text-white-75-invert {
  --bulma-color-l: var(--bulma-white-75-invert-l);
}

.is-background-white-75-invert,
.has-background-white-75-invert {
  --bulma-background-l: var(--bulma-white-75-invert-l);
}

.is-color-white-80,
.has-text-white-80 {
  --bulma-color-l: var(--bulma-white-80-l);
}

.is-background-white-80,
.has-background-white-80 {
  --bulma-background-l: var(--bulma-white-80-l);
}

.is-color-white-80-invert,
.has-text-white-80-invert {
  --bulma-color-l: var(--bulma-white-80-invert-l);
}

.is-background-white-80-invert,
.has-background-white-80-invert {
  --bulma-background-l: var(--bulma-white-80-invert-l);
}

.is-color-white-85,
.has-text-white-85 {
  --bulma-color-l: var(--bulma-white-85-l);
}

.is-background-white-85,
.has-background-white-85 {
  --bulma-background-l: var(--bulma-white-85-l);
}

.is-color-white-85-invert,
.has-text-white-85-invert {
  --bulma-color-l: var(--bulma-white-85-invert-l);
}

.is-background-white-85-invert,
.has-background-white-85-invert {
  --bulma-background-l: var(--bulma-white-85-invert-l);
}

.is-color-white-90,
.has-text-white-90 {
  --bulma-color-l: var(--bulma-white-90-l);
}

.is-background-white-90,
.has-background-white-90 {
  --bulma-background-l: var(--bulma-white-90-l);
}

.is-color-white-90-invert,
.has-text-white-90-invert {
  --bulma-color-l: var(--bulma-white-90-invert-l);
}

.is-background-white-90-invert,
.has-background-white-90-invert {
  --bulma-background-l: var(--bulma-white-90-invert-l);
}

.is-color-white-95,
.has-text-white-95 {
  --bulma-color-l: var(--bulma-white-95-l);
}

.is-background-white-95,
.has-background-white-95 {
  --bulma-background-l: var(--bulma-white-95-l);
}

.is-color-white-95-invert,
.has-text-white-95-invert {
  --bulma-color-l: var(--bulma-white-95-invert-l);
}

.is-background-white-95-invert,
.has-background-white-95-invert {
  --bulma-background-l: var(--bulma-white-95-invert-l);
}

.is-color-white-100,
.has-text-white-100 {
  --bulma-color-l: var(--bulma-white-100-l);
}

.is-background-white-100,
.has-background-white-100 {
  --bulma-background-l: var(--bulma-white-100-l);
}

.is-color-white-100-invert,
.has-text-white-100-invert {
  --bulma-color-l: var(--bulma-white-100-invert-l);
}

.is-background-white-100-invert,
.has-background-white-100-invert {
  --bulma-background-l: var(--bulma-white-100-invert-l);
}

a.is-color-white:hover, a.is-color-white:focus-visible,
button.is-color-white:hover,
button.is-color-white:focus-visible,
is-color-white.is-hoverable:hover,
is-color-white.is-hoverable:focus-visible,
a.has-text-white:hover,
a.has-text-white:focus-visible,
button.has-text-white:hover,
button.has-text-white:focus-visible,
has-text-white.is-hoverable:hover,
has-text-white.is-hoverable:focus-visible {
  --bulma-color-l-delta: var(--bulma-hover-color-l-delta);
}
a.is-color-white:active,
button.is-color-white:active,
is-color-white.is-hoverable:active,
a.has-text-white:active,
button.has-text-white:active,
has-text-white.is-hoverable:active {
  --bulma-color-l-delta: var(--bulma-active-color-l-delta);
}

a.is-background-white:hover, a.is-background-white:focus-visible,
button.is-background-white:hover,
button.is-background-white:focus-visible,
is-background-white.is-hoverable:hover,
is-background-white.is-hoverable:focus-visible,
a.has-background-white:hover,
a.has-background-white:focus-visible,
button.has-background-white:hover,
button.has-background-white:focus-visible,
has-background-white.is-hoverable:hover,
has-background-white.is-hoverable:focus-visible {
  --bulma-background-l-delta: var(--bulma-hover-background-l-delta);
}
a.is-background-white:active,
button.is-background-white:active,
is-background-white.is-hoverable:active,
a.has-background-white:active,
button.has-background-white:active,
has-background-white.is-hoverable:active {
  --bulma-background-l-delta: var(--bulma-active-background-l-delta);
}

.is-palette-white {
  --h: var(--bulma-white-h);
  --s: var(--bulma-white-s);
  --l: var(--bulma-white-l);
  --color: hsl(var(--h), var(--s), var(--l));
  --00-l: var(--bulma-white-00-l);
  --color-00: hsl(var(--h), var(--s), var(--00-l));
  --05-l: var(--bulma-white-05-l);
  --color-05: hsl(var(--h), var(--s), var(--05-l));
  --10-l: var(--bulma-white-10-l);
  --color-10: hsl(var(--h), var(--s), var(--10-l));
  --15-l: var(--bulma-white-15-l);
  --color-15: hsl(var(--h), var(--s), var(--15-l));
  --20-l: var(--bulma-white-20-l);
  --color-20: hsl(var(--h), var(--s), var(--20-l));
  --25-l: var(--bulma-white-25-l);
  --color-25: hsl(var(--h), var(--s), var(--25-l));
  --30-l: var(--bulma-white-30-l);
  --color-30: hsl(var(--h), var(--s), var(--30-l));
  --35-l: var(--bulma-white-35-l);
  --color-35: hsl(var(--h), var(--s), var(--35-l));
  --40-l: var(--bulma-white-40-l);
  --color-40: hsl(var(--h), var(--s), var(--40-l));
  --45-l: var(--bulma-white-45-l);
  --color-45: hsl(var(--h), var(--s), var(--45-l));
  --50-l: var(--bulma-white-50-l);
  --color-50: hsl(var(--h), var(--s), var(--50-l));
  --55-l: var(--bulma-white-55-l);
  --color-55: hsl(var(--h), var(--s), var(--55-l));
  --60-l: var(--bulma-white-60-l);
  --color-60: hsl(var(--h), var(--s), var(--60-l));
  --65-l: var(--bulma-white-65-l);
  --color-65: hsl(var(--h), var(--s), var(--65-l));
  --70-l: var(--bulma-white-70-l);
  --color-70: hsl(var(--h), var(--s), var(--70-l));
  --75-l: var(--bulma-white-75-l);
  --color-75: hsl(var(--h), var(--s), var(--75-l));
  --80-l: var(--bulma-white-80-l);
  --color-80: hsl(var(--h), var(--s), var(--80-l));
  --85-l: var(--bulma-white-85-l);
  --color-85: hsl(var(--h), var(--s), var(--85-l));
  --90-l: var(--bulma-white-90-l);
  --color-90: hsl(var(--h), var(--s), var(--90-l));
  --95-l: var(--bulma-white-95-l);
  --color-95: hsl(var(--h), var(--s), var(--95-l));
  --100-l: var(--bulma-white-100-l);
  --color-100: hsl(var(--h), var(--s), var(--100-l));
}

[class*=is-color-black],
[class*=has-text-black] {
  --bulma-color-l: var(--bulma-black-l);
  --bulma-color-l-delta: 0%;
  color: hsl(var(--bulma-black-h), var(--bulma-black-s), calc(var(--bulma-color-l) + var(--bulma-color-l-delta))) !important;
}

[class*=is-background-black],
[class*=has-background-black] {
  --bulma-background-l: var(--bulma-black-l);
  --bulma-background-l-delta: 0%;
  background-color: hsl(var(--bulma-black-h), var(--bulma-black-s), calc(var(--bulma-background-l) + var(--bulma-background-l-delta))) !important;
}

.is-color-black-invert,
.has-text-black-invert {
  --bulma-color-l: var(--bulma-black-invert-l);
}

.is-background-black-invert,
.has-background-black-invert {
  --bulma-background-l: var(--bulma-black-invert-l);
}

.is-color-black-on-scheme,
.has-text-black-on-scheme {
  --bulma-color-l: var(--bulma-black-on-scheme-l);
}

.is-background-black-on-scheme,
.has-background-black-on-scheme {
  --bulma-background-l: var(--bulma-black-on-scheme-l);
}

.is-color-black-light,
.has-text-black-light {
  --bulma-color-l: var(--bulma-black-light-l);
}

.is-background-black-light,
.has-background-black-light {
  --bulma-background-l: var(--bulma-black-light-l);
}

.is-color-black-light-invert,
.has-text-black-light-invert {
  --bulma-color-l: var(--bulma-black-light-invert-l);
}

.is-background-black-light-invert,
.has-background-black-light-invert {
  --bulma-background-l: var(--bulma-black-light-invert-l);
}

.is-color-black-dark,
.has-text-black-dark {
  --bulma-color-l: var(--bulma-black-dark-l);
}

.is-background-black-dark,
.has-background-black-dark {
  --bulma-background-l: var(--bulma-black-dark-l);
}

.is-color-black-dark-invert,
.has-text-black-dark-invert {
  --bulma-color-l: var(--bulma-black-dark-invert-l);
}

.is-background-black-dark-invert,
.has-background-black-dark-invert {
  --bulma-background-l: var(--bulma-black-dark-invert-l);
}

.is-color-black-soft,
.has-text-black-soft {
  --bulma-color-l: var(--bulma-soft-l);
}

.is-background-black-soft,
.has-background-black-soft {
  --bulma-background-l: var(--bulma-soft-l);
}

.is-color-black-bold,
.has-text-black-bold {
  --bulma-color-l: var(--bulma-bold-l);
}

.is-background-black-bold,
.has-background-black-bold {
  --bulma-background-l: var(--bulma-bold-l);
}

.is-color-black-soft-invert,
.has-text-black-soft-invert {
  --bulma-color-l: var(--bulma-soft-invert-l);
}

.is-background-black-soft-invert,
.has-background-black-soft-invert {
  --bulma-background-l: var(--bulma-soft-invert-l);
}

.is-color-black-bold-invert,
.has-text-black-bold-invert {
  --bulma-color-l: var(--bulma-bold-invert-l);
}

.is-background-black-bold-invert,
.has-background-black-bold-invert {
  --bulma-background-l: var(--bulma-bold-invert-l);
}

.is-color-black-00,
.has-text-black-00 {
  --bulma-color-l: var(--bulma-black-00-l);
}

.is-background-black-00,
.has-background-black-00 {
  --bulma-background-l: var(--bulma-black-00-l);
}

.is-color-black-00-invert,
.has-text-black-00-invert {
  --bulma-color-l: var(--bulma-black-00-invert-l);
}

.is-background-black-00-invert,
.has-background-black-00-invert {
  --bulma-background-l: var(--bulma-black-00-invert-l);
}

.is-color-black-05,
.has-text-black-05 {
  --bulma-color-l: var(--bulma-black-05-l);
}

.is-background-black-05,
.has-background-black-05 {
  --bulma-background-l: var(--bulma-black-05-l);
}

.is-color-black-05-invert,
.has-text-black-05-invert {
  --bulma-color-l: var(--bulma-black-05-invert-l);
}

.is-background-black-05-invert,
.has-background-black-05-invert {
  --bulma-background-l: var(--bulma-black-05-invert-l);
}

.is-color-black-10,
.has-text-black-10 {
  --bulma-color-l: var(--bulma-black-10-l);
}

.is-background-black-10,
.has-background-black-10 {
  --bulma-background-l: var(--bulma-black-10-l);
}

.is-color-black-10-invert,
.has-text-black-10-invert {
  --bulma-color-l: var(--bulma-black-10-invert-l);
}

.is-background-black-10-invert,
.has-background-black-10-invert {
  --bulma-background-l: var(--bulma-black-10-invert-l);
}

.is-color-black-15,
.has-text-black-15 {
  --bulma-color-l: var(--bulma-black-15-l);
}

.is-background-black-15,
.has-background-black-15 {
  --bulma-background-l: var(--bulma-black-15-l);
}

.is-color-black-15-invert,
.has-text-black-15-invert {
  --bulma-color-l: var(--bulma-black-15-invert-l);
}

.is-background-black-15-invert,
.has-background-black-15-invert {
  --bulma-background-l: var(--bulma-black-15-invert-l);
}

.is-color-black-20,
.has-text-black-20 {
  --bulma-color-l: var(--bulma-black-20-l);
}

.is-background-black-20,
.has-background-black-20 {
  --bulma-background-l: var(--bulma-black-20-l);
}

.is-color-black-20-invert,
.has-text-black-20-invert {
  --bulma-color-l: var(--bulma-black-20-invert-l);
}

.is-background-black-20-invert,
.has-background-black-20-invert {
  --bulma-background-l: var(--bulma-black-20-invert-l);
}

.is-color-black-25,
.has-text-black-25 {
  --bulma-color-l: var(--bulma-black-25-l);
}

.is-background-black-25,
.has-background-black-25 {
  --bulma-background-l: var(--bulma-black-25-l);
}

.is-color-black-25-invert,
.has-text-black-25-invert {
  --bulma-color-l: var(--bulma-black-25-invert-l);
}

.is-background-black-25-invert,
.has-background-black-25-invert {
  --bulma-background-l: var(--bulma-black-25-invert-l);
}

.is-color-black-30,
.has-text-black-30 {
  --bulma-color-l: var(--bulma-black-30-l);
}

.is-background-black-30,
.has-background-black-30 {
  --bulma-background-l: var(--bulma-black-30-l);
}

.is-color-black-30-invert,
.has-text-black-30-invert {
  --bulma-color-l: var(--bulma-black-30-invert-l);
}

.is-background-black-30-invert,
.has-background-black-30-invert {
  --bulma-background-l: var(--bulma-black-30-invert-l);
}

.is-color-black-35,
.has-text-black-35 {
  --bulma-color-l: var(--bulma-black-35-l);
}

.is-background-black-35,
.has-background-black-35 {
  --bulma-background-l: var(--bulma-black-35-l);
}

.is-color-black-35-invert,
.has-text-black-35-invert {
  --bulma-color-l: var(--bulma-black-35-invert-l);
}

.is-background-black-35-invert,
.has-background-black-35-invert {
  --bulma-background-l: var(--bulma-black-35-invert-l);
}

.is-color-black-40,
.has-text-black-40 {
  --bulma-color-l: var(--bulma-black-40-l);
}

.is-background-black-40,
.has-background-black-40 {
  --bulma-background-l: var(--bulma-black-40-l);
}

.is-color-black-40-invert,
.has-text-black-40-invert {
  --bulma-color-l: var(--bulma-black-40-invert-l);
}

.is-background-black-40-invert,
.has-background-black-40-invert {
  --bulma-background-l: var(--bulma-black-40-invert-l);
}

.is-color-black-45,
.has-text-black-45 {
  --bulma-color-l: var(--bulma-black-45-l);
}

.is-background-black-45,
.has-background-black-45 {
  --bulma-background-l: var(--bulma-black-45-l);
}

.is-color-black-45-invert,
.has-text-black-45-invert {
  --bulma-color-l: var(--bulma-black-45-invert-l);
}

.is-background-black-45-invert,
.has-background-black-45-invert {
  --bulma-background-l: var(--bulma-black-45-invert-l);
}

.is-color-black-50,
.has-text-black-50 {
  --bulma-color-l: var(--bulma-black-50-l);
}

.is-background-black-50,
.has-background-black-50 {
  --bulma-background-l: var(--bulma-black-50-l);
}

.is-color-black-50-invert,
.has-text-black-50-invert {
  --bulma-color-l: var(--bulma-black-50-invert-l);
}

.is-background-black-50-invert,
.has-background-black-50-invert {
  --bulma-background-l: var(--bulma-black-50-invert-l);
}

.is-color-black-55,
.has-text-black-55 {
  --bulma-color-l: var(--bulma-black-55-l);
}

.is-background-black-55,
.has-background-black-55 {
  --bulma-background-l: var(--bulma-black-55-l);
}

.is-color-black-55-invert,
.has-text-black-55-invert {
  --bulma-color-l: var(--bulma-black-55-invert-l);
}

.is-background-black-55-invert,
.has-background-black-55-invert {
  --bulma-background-l: var(--bulma-black-55-invert-l);
}

.is-color-black-60,
.has-text-black-60 {
  --bulma-color-l: var(--bulma-black-60-l);
}

.is-background-black-60,
.has-background-black-60 {
  --bulma-background-l: var(--bulma-black-60-l);
}

.is-color-black-60-invert,
.has-text-black-60-invert {
  --bulma-color-l: var(--bulma-black-60-invert-l);
}

.is-background-black-60-invert,
.has-background-black-60-invert {
  --bulma-background-l: var(--bulma-black-60-invert-l);
}

.is-color-black-65,
.has-text-black-65 {
  --bulma-color-l: var(--bulma-black-65-l);
}

.is-background-black-65,
.has-background-black-65 {
  --bulma-background-l: var(--bulma-black-65-l);
}

.is-color-black-65-invert,
.has-text-black-65-invert {
  --bulma-color-l: var(--bulma-black-65-invert-l);
}

.is-background-black-65-invert,
.has-background-black-65-invert {
  --bulma-background-l: var(--bulma-black-65-invert-l);
}

.is-color-black-70,
.has-text-black-70 {
  --bulma-color-l: var(--bulma-black-70-l);
}

.is-background-black-70,
.has-background-black-70 {
  --bulma-background-l: var(--bulma-black-70-l);
}

.is-color-black-70-invert,
.has-text-black-70-invert {
  --bulma-color-l: var(--bulma-black-70-invert-l);
}

.is-background-black-70-invert,
.has-background-black-70-invert {
  --bulma-background-l: var(--bulma-black-70-invert-l);
}

.is-color-black-75,
.has-text-black-75 {
  --bulma-color-l: var(--bulma-black-75-l);
}

.is-background-black-75,
.has-background-black-75 {
  --bulma-background-l: var(--bulma-black-75-l);
}

.is-color-black-75-invert,
.has-text-black-75-invert {
  --bulma-color-l: var(--bulma-black-75-invert-l);
}

.is-background-black-75-invert,
.has-background-black-75-invert {
  --bulma-background-l: var(--bulma-black-75-invert-l);
}

.is-color-black-80,
.has-text-black-80 {
  --bulma-color-l: var(--bulma-black-80-l);
}

.is-background-black-80,
.has-background-black-80 {
  --bulma-background-l: var(--bulma-black-80-l);
}

.is-color-black-80-invert,
.has-text-black-80-invert {
  --bulma-color-l: var(--bulma-black-80-invert-l);
}

.is-background-black-80-invert,
.has-background-black-80-invert {
  --bulma-background-l: var(--bulma-black-80-invert-l);
}

.is-color-black-85,
.has-text-black-85 {
  --bulma-color-l: var(--bulma-black-85-l);
}

.is-background-black-85,
.has-background-black-85 {
  --bulma-background-l: var(--bulma-black-85-l);
}

.is-color-black-85-invert,
.has-text-black-85-invert {
  --bulma-color-l: var(--bulma-black-85-invert-l);
}

.is-background-black-85-invert,
.has-background-black-85-invert {
  --bulma-background-l: var(--bulma-black-85-invert-l);
}

.is-color-black-90,
.has-text-black-90 {
  --bulma-color-l: var(--bulma-black-90-l);
}

.is-background-black-90,
.has-background-black-90 {
  --bulma-background-l: var(--bulma-black-90-l);
}

.is-color-black-90-invert,
.has-text-black-90-invert {
  --bulma-color-l: var(--bulma-black-90-invert-l);
}

.is-background-black-90-invert,
.has-background-black-90-invert {
  --bulma-background-l: var(--bulma-black-90-invert-l);
}

.is-color-black-95,
.has-text-black-95 {
  --bulma-color-l: var(--bulma-black-95-l);
}

.is-background-black-95,
.has-background-black-95 {
  --bulma-background-l: var(--bulma-black-95-l);
}

.is-color-black-95-invert,
.has-text-black-95-invert {
  --bulma-color-l: var(--bulma-black-95-invert-l);
}

.is-background-black-95-invert,
.has-background-black-95-invert {
  --bulma-background-l: var(--bulma-black-95-invert-l);
}

.is-color-black-100,
.has-text-black-100 {
  --bulma-color-l: var(--bulma-black-100-l);
}

.is-background-black-100,
.has-background-black-100 {
  --bulma-background-l: var(--bulma-black-100-l);
}

.is-color-black-100-invert,
.has-text-black-100-invert {
  --bulma-color-l: var(--bulma-black-100-invert-l);
}

.is-background-black-100-invert,
.has-background-black-100-invert {
  --bulma-background-l: var(--bulma-black-100-invert-l);
}

a.is-color-black:hover, a.is-color-black:focus-visible,
button.is-color-black:hover,
button.is-color-black:focus-visible,
is-color-black.is-hoverable:hover,
is-color-black.is-hoverable:focus-visible,
a.has-text-black:hover,
a.has-text-black:focus-visible,
button.has-text-black:hover,
button.has-text-black:focus-visible,
has-text-black.is-hoverable:hover,
has-text-black.is-hoverable:focus-visible {
  --bulma-color-l-delta: var(--bulma-hover-color-l-delta);
}
a.is-color-black:active,
button.is-color-black:active,
is-color-black.is-hoverable:active,
a.has-text-black:active,
button.has-text-black:active,
has-text-black.is-hoverable:active {
  --bulma-color-l-delta: var(--bulma-active-color-l-delta);
}

a.is-background-black:hover, a.is-background-black:focus-visible,
button.is-background-black:hover,
button.is-background-black:focus-visible,
is-background-black.is-hoverable:hover,
is-background-black.is-hoverable:focus-visible,
a.has-background-black:hover,
a.has-background-black:focus-visible,
button.has-background-black:hover,
button.has-background-black:focus-visible,
has-background-black.is-hoverable:hover,
has-background-black.is-hoverable:focus-visible {
  --bulma-background-l-delta: var(--bulma-hover-background-l-delta);
}
a.is-background-black:active,
button.is-background-black:active,
is-background-black.is-hoverable:active,
a.has-background-black:active,
button.has-background-black:active,
has-background-black.is-hoverable:active {
  --bulma-background-l-delta: var(--bulma-active-background-l-delta);
}

.is-palette-black {
  --h: var(--bulma-black-h);
  --s: var(--bulma-black-s);
  --l: var(--bulma-black-l);
  --color: hsl(var(--h), var(--s), var(--l));
  --00-l: var(--bulma-black-00-l);
  --color-00: hsl(var(--h), var(--s), var(--00-l));
  --05-l: var(--bulma-black-05-l);
  --color-05: hsl(var(--h), var(--s), var(--05-l));
  --10-l: var(--bulma-black-10-l);
  --color-10: hsl(var(--h), var(--s), var(--10-l));
  --15-l: var(--bulma-black-15-l);
  --color-15: hsl(var(--h), var(--s), var(--15-l));
  --20-l: var(--bulma-black-20-l);
  --color-20: hsl(var(--h), var(--s), var(--20-l));
  --25-l: var(--bulma-black-25-l);
  --color-25: hsl(var(--h), var(--s), var(--25-l));
  --30-l: var(--bulma-black-30-l);
  --color-30: hsl(var(--h), var(--s), var(--30-l));
  --35-l: var(--bulma-black-35-l);
  --color-35: hsl(var(--h), var(--s), var(--35-l));
  --40-l: var(--bulma-black-40-l);
  --color-40: hsl(var(--h), var(--s), var(--40-l));
  --45-l: var(--bulma-black-45-l);
  --color-45: hsl(var(--h), var(--s), var(--45-l));
  --50-l: var(--bulma-black-50-l);
  --color-50: hsl(var(--h), var(--s), var(--50-l));
  --55-l: var(--bulma-black-55-l);
  --color-55: hsl(var(--h), var(--s), var(--55-l));
  --60-l: var(--bulma-black-60-l);
  --color-60: hsl(var(--h), var(--s), var(--60-l));
  --65-l: var(--bulma-black-65-l);
  --color-65: hsl(var(--h), var(--s), var(--65-l));
  --70-l: var(--bulma-black-70-l);
  --color-70: hsl(var(--h), var(--s), var(--70-l));
  --75-l: var(--bulma-black-75-l);
  --color-75: hsl(var(--h), var(--s), var(--75-l));
  --80-l: var(--bulma-black-80-l);
  --color-80: hsl(var(--h), var(--s), var(--80-l));
  --85-l: var(--bulma-black-85-l);
  --color-85: hsl(var(--h), var(--s), var(--85-l));
  --90-l: var(--bulma-black-90-l);
  --color-90: hsl(var(--h), var(--s), var(--90-l));
  --95-l: var(--bulma-black-95-l);
  --color-95: hsl(var(--h), var(--s), var(--95-l));
  --100-l: var(--bulma-black-100-l);
  --color-100: hsl(var(--h), var(--s), var(--100-l));
}

[class*=is-color-light],
[class*=has-text-light] {
  --bulma-color-l: var(--bulma-light-l);
  --bulma-color-l-delta: 0%;
  color: hsl(var(--bulma-light-h), var(--bulma-light-s), calc(var(--bulma-color-l) + var(--bulma-color-l-delta))) !important;
}

[class*=is-background-light],
[class*=has-background-light] {
  --bulma-background-l: var(--bulma-light-l);
  --bulma-background-l-delta: 0%;
  background-color: hsl(var(--bulma-light-h), var(--bulma-light-s), calc(var(--bulma-background-l) + var(--bulma-background-l-delta))) !important;
}

.is-color-light-invert,
.has-text-light-invert {
  --bulma-color-l: var(--bulma-light-invert-l);
}

.is-background-light-invert,
.has-background-light-invert {
  --bulma-background-l: var(--bulma-light-invert-l);
}

.is-color-light-on-scheme,
.has-text-light-on-scheme {
  --bulma-color-l: var(--bulma-light-on-scheme-l);
}

.is-background-light-on-scheme,
.has-background-light-on-scheme {
  --bulma-background-l: var(--bulma-light-on-scheme-l);
}

.is-color-light-light,
.has-text-light-light {
  --bulma-color-l: var(--bulma-light-light-l);
}

.is-background-light-light,
.has-background-light-light {
  --bulma-background-l: var(--bulma-light-light-l);
}

.is-color-light-light-invert,
.has-text-light-light-invert {
  --bulma-color-l: var(--bulma-light-light-invert-l);
}

.is-background-light-light-invert,
.has-background-light-light-invert {
  --bulma-background-l: var(--bulma-light-light-invert-l);
}

.is-color-light-dark,
.has-text-light-dark {
  --bulma-color-l: var(--bulma-light-dark-l);
}

.is-background-light-dark,
.has-background-light-dark {
  --bulma-background-l: var(--bulma-light-dark-l);
}

.is-color-light-dark-invert,
.has-text-light-dark-invert {
  --bulma-color-l: var(--bulma-light-dark-invert-l);
}

.is-background-light-dark-invert,
.has-background-light-dark-invert {
  --bulma-background-l: var(--bulma-light-dark-invert-l);
}

.is-color-light-soft,
.has-text-light-soft {
  --bulma-color-l: var(--bulma-soft-l);
}

.is-background-light-soft,
.has-background-light-soft {
  --bulma-background-l: var(--bulma-soft-l);
}

.is-color-light-bold,
.has-text-light-bold {
  --bulma-color-l: var(--bulma-bold-l);
}

.is-background-light-bold,
.has-background-light-bold {
  --bulma-background-l: var(--bulma-bold-l);
}

.is-color-light-soft-invert,
.has-text-light-soft-invert {
  --bulma-color-l: var(--bulma-soft-invert-l);
}

.is-background-light-soft-invert,
.has-background-light-soft-invert {
  --bulma-background-l: var(--bulma-soft-invert-l);
}

.is-color-light-bold-invert,
.has-text-light-bold-invert {
  --bulma-color-l: var(--bulma-bold-invert-l);
}

.is-background-light-bold-invert,
.has-background-light-bold-invert {
  --bulma-background-l: var(--bulma-bold-invert-l);
}

.is-color-light-00,
.has-text-light-00 {
  --bulma-color-l: var(--bulma-light-00-l);
}

.is-background-light-00,
.has-background-light-00 {
  --bulma-background-l: var(--bulma-light-00-l);
}

.is-color-light-00-invert,
.has-text-light-00-invert {
  --bulma-color-l: var(--bulma-light-00-invert-l);
}

.is-background-light-00-invert,
.has-background-light-00-invert {
  --bulma-background-l: var(--bulma-light-00-invert-l);
}

.is-color-light-05,
.has-text-light-05 {
  --bulma-color-l: var(--bulma-light-05-l);
}

.is-background-light-05,
.has-background-light-05 {
  --bulma-background-l: var(--bulma-light-05-l);
}

.is-color-light-05-invert,
.has-text-light-05-invert {
  --bulma-color-l: var(--bulma-light-05-invert-l);
}

.is-background-light-05-invert,
.has-background-light-05-invert {
  --bulma-background-l: var(--bulma-light-05-invert-l);
}

.is-color-light-10,
.has-text-light-10 {
  --bulma-color-l: var(--bulma-light-10-l);
}

.is-background-light-10,
.has-background-light-10 {
  --bulma-background-l: var(--bulma-light-10-l);
}

.is-color-light-10-invert,
.has-text-light-10-invert {
  --bulma-color-l: var(--bulma-light-10-invert-l);
}

.is-background-light-10-invert,
.has-background-light-10-invert {
  --bulma-background-l: var(--bulma-light-10-invert-l);
}

.is-color-light-15,
.has-text-light-15 {
  --bulma-color-l: var(--bulma-light-15-l);
}

.is-background-light-15,
.has-background-light-15 {
  --bulma-background-l: var(--bulma-light-15-l);
}

.is-color-light-15-invert,
.has-text-light-15-invert {
  --bulma-color-l: var(--bulma-light-15-invert-l);
}

.is-background-light-15-invert,
.has-background-light-15-invert {
  --bulma-background-l: var(--bulma-light-15-invert-l);
}

.is-color-light-20,
.has-text-light-20 {
  --bulma-color-l: var(--bulma-light-20-l);
}

.is-background-light-20,
.has-background-light-20 {
  --bulma-background-l: var(--bulma-light-20-l);
}

.is-color-light-20-invert,
.has-text-light-20-invert {
  --bulma-color-l: var(--bulma-light-20-invert-l);
}

.is-background-light-20-invert,
.has-background-light-20-invert {
  --bulma-background-l: var(--bulma-light-20-invert-l);
}

.is-color-light-25,
.has-text-light-25 {
  --bulma-color-l: var(--bulma-light-25-l);
}

.is-background-light-25,
.has-background-light-25 {
  --bulma-background-l: var(--bulma-light-25-l);
}

.is-color-light-25-invert,
.has-text-light-25-invert {
  --bulma-color-l: var(--bulma-light-25-invert-l);
}

.is-background-light-25-invert,
.has-background-light-25-invert {
  --bulma-background-l: var(--bulma-light-25-invert-l);
}

.is-color-light-30,
.has-text-light-30 {
  --bulma-color-l: var(--bulma-light-30-l);
}

.is-background-light-30,
.has-background-light-30 {
  --bulma-background-l: var(--bulma-light-30-l);
}

.is-color-light-30-invert,
.has-text-light-30-invert {
  --bulma-color-l: var(--bulma-light-30-invert-l);
}

.is-background-light-30-invert,
.has-background-light-30-invert {
  --bulma-background-l: var(--bulma-light-30-invert-l);
}

.is-color-light-35,
.has-text-light-35 {
  --bulma-color-l: var(--bulma-light-35-l);
}

.is-background-light-35,
.has-background-light-35 {
  --bulma-background-l: var(--bulma-light-35-l);
}

.is-color-light-35-invert,
.has-text-light-35-invert {
  --bulma-color-l: var(--bulma-light-35-invert-l);
}

.is-background-light-35-invert,
.has-background-light-35-invert {
  --bulma-background-l: var(--bulma-light-35-invert-l);
}

.is-color-light-40,
.has-text-light-40 {
  --bulma-color-l: var(--bulma-light-40-l);
}

.is-background-light-40,
.has-background-light-40 {
  --bulma-background-l: var(--bulma-light-40-l);
}

.is-color-light-40-invert,
.has-text-light-40-invert {
  --bulma-color-l: var(--bulma-light-40-invert-l);
}

.is-background-light-40-invert,
.has-background-light-40-invert {
  --bulma-background-l: var(--bulma-light-40-invert-l);
}

.is-color-light-45,
.has-text-light-45 {
  --bulma-color-l: var(--bulma-light-45-l);
}

.is-background-light-45,
.has-background-light-45 {
  --bulma-background-l: var(--bulma-light-45-l);
}

.is-color-light-45-invert,
.has-text-light-45-invert {
  --bulma-color-l: var(--bulma-light-45-invert-l);
}

.is-background-light-45-invert,
.has-background-light-45-invert {
  --bulma-background-l: var(--bulma-light-45-invert-l);
}

.is-color-light-50,
.has-text-light-50 {
  --bulma-color-l: var(--bulma-light-50-l);
}

.is-background-light-50,
.has-background-light-50 {
  --bulma-background-l: var(--bulma-light-50-l);
}

.is-color-light-50-invert,
.has-text-light-50-invert {
  --bulma-color-l: var(--bulma-light-50-invert-l);
}

.is-background-light-50-invert,
.has-background-light-50-invert {
  --bulma-background-l: var(--bulma-light-50-invert-l);
}

.is-color-light-55,
.has-text-light-55 {
  --bulma-color-l: var(--bulma-light-55-l);
}

.is-background-light-55,
.has-background-light-55 {
  --bulma-background-l: var(--bulma-light-55-l);
}

.is-color-light-55-invert,
.has-text-light-55-invert {
  --bulma-color-l: var(--bulma-light-55-invert-l);
}

.is-background-light-55-invert,
.has-background-light-55-invert {
  --bulma-background-l: var(--bulma-light-55-invert-l);
}

.is-color-light-60,
.has-text-light-60 {
  --bulma-color-l: var(--bulma-light-60-l);
}

.is-background-light-60,
.has-background-light-60 {
  --bulma-background-l: var(--bulma-light-60-l);
}

.is-color-light-60-invert,
.has-text-light-60-invert {
  --bulma-color-l: var(--bulma-light-60-invert-l);
}

.is-background-light-60-invert,
.has-background-light-60-invert {
  --bulma-background-l: var(--bulma-light-60-invert-l);
}

.is-color-light-65,
.has-text-light-65 {
  --bulma-color-l: var(--bulma-light-65-l);
}

.is-background-light-65,
.has-background-light-65 {
  --bulma-background-l: var(--bulma-light-65-l);
}

.is-color-light-65-invert,
.has-text-light-65-invert {
  --bulma-color-l: var(--bulma-light-65-invert-l);
}

.is-background-light-65-invert,
.has-background-light-65-invert {
  --bulma-background-l: var(--bulma-light-65-invert-l);
}

.is-color-light-70,
.has-text-light-70 {
  --bulma-color-l: var(--bulma-light-70-l);
}

.is-background-light-70,
.has-background-light-70 {
  --bulma-background-l: var(--bulma-light-70-l);
}

.is-color-light-70-invert,
.has-text-light-70-invert {
  --bulma-color-l: var(--bulma-light-70-invert-l);
}

.is-background-light-70-invert,
.has-background-light-70-invert {
  --bulma-background-l: var(--bulma-light-70-invert-l);
}

.is-color-light-75,
.has-text-light-75 {
  --bulma-color-l: var(--bulma-light-75-l);
}

.is-background-light-75,
.has-background-light-75 {
  --bulma-background-l: var(--bulma-light-75-l);
}

.is-color-light-75-invert,
.has-text-light-75-invert {
  --bulma-color-l: var(--bulma-light-75-invert-l);
}

.is-background-light-75-invert,
.has-background-light-75-invert {
  --bulma-background-l: var(--bulma-light-75-invert-l);
}

.is-color-light-80,
.has-text-light-80 {
  --bulma-color-l: var(--bulma-light-80-l);
}

.is-background-light-80,
.has-background-light-80 {
  --bulma-background-l: var(--bulma-light-80-l);
}

.is-color-light-80-invert,
.has-text-light-80-invert {
  --bulma-color-l: var(--bulma-light-80-invert-l);
}

.is-background-light-80-invert,
.has-background-light-80-invert {
  --bulma-background-l: var(--bulma-light-80-invert-l);
}

.is-color-light-85,
.has-text-light-85 {
  --bulma-color-l: var(--bulma-light-85-l);
}

.is-background-light-85,
.has-background-light-85 {
  --bulma-background-l: var(--bulma-light-85-l);
}

.is-color-light-85-invert,
.has-text-light-85-invert {
  --bulma-color-l: var(--bulma-light-85-invert-l);
}

.is-background-light-85-invert,
.has-background-light-85-invert {
  --bulma-background-l: var(--bulma-light-85-invert-l);
}

.is-color-light-90,
.has-text-light-90 {
  --bulma-color-l: var(--bulma-light-90-l);
}

.is-background-light-90,
.has-background-light-90 {
  --bulma-background-l: var(--bulma-light-90-l);
}

.is-color-light-90-invert,
.has-text-light-90-invert {
  --bulma-color-l: var(--bulma-light-90-invert-l);
}

.is-background-light-90-invert,
.has-background-light-90-invert {
  --bulma-background-l: var(--bulma-light-90-invert-l);
}

.is-color-light-95,
.has-text-light-95 {
  --bulma-color-l: var(--bulma-light-95-l);
}

.is-background-light-95,
.has-background-light-95 {
  --bulma-background-l: var(--bulma-light-95-l);
}

.is-color-light-95-invert,
.has-text-light-95-invert {
  --bulma-color-l: var(--bulma-light-95-invert-l);
}

.is-background-light-95-invert,
.has-background-light-95-invert {
  --bulma-background-l: var(--bulma-light-95-invert-l);
}

.is-color-light-100,
.has-text-light-100 {
  --bulma-color-l: var(--bulma-light-100-l);
}

.is-background-light-100,
.has-background-light-100 {
  --bulma-background-l: var(--bulma-light-100-l);
}

.is-color-light-100-invert,
.has-text-light-100-invert {
  --bulma-color-l: var(--bulma-light-100-invert-l);
}

.is-background-light-100-invert,
.has-background-light-100-invert {
  --bulma-background-l: var(--bulma-light-100-invert-l);
}

a.is-color-light:hover, a.is-color-light:focus-visible,
button.is-color-light:hover,
button.is-color-light:focus-visible,
is-color-light.is-hoverable:hover,
is-color-light.is-hoverable:focus-visible,
a.has-text-light:hover,
a.has-text-light:focus-visible,
button.has-text-light:hover,
button.has-text-light:focus-visible,
has-text-light.is-hoverable:hover,
has-text-light.is-hoverable:focus-visible {
  --bulma-color-l-delta: var(--bulma-hover-color-l-delta);
}
a.is-color-light:active,
button.is-color-light:active,
is-color-light.is-hoverable:active,
a.has-text-light:active,
button.has-text-light:active,
has-text-light.is-hoverable:active {
  --bulma-color-l-delta: var(--bulma-active-color-l-delta);
}

a.is-background-light:hover, a.is-background-light:focus-visible,
button.is-background-light:hover,
button.is-background-light:focus-visible,
is-background-light.is-hoverable:hover,
is-background-light.is-hoverable:focus-visible,
a.has-background-light:hover,
a.has-background-light:focus-visible,
button.has-background-light:hover,
button.has-background-light:focus-visible,
has-background-light.is-hoverable:hover,
has-background-light.is-hoverable:focus-visible {
  --bulma-background-l-delta: var(--bulma-hover-background-l-delta);
}
a.is-background-light:active,
button.is-background-light:active,
is-background-light.is-hoverable:active,
a.has-background-light:active,
button.has-background-light:active,
has-background-light.is-hoverable:active {
  --bulma-background-l-delta: var(--bulma-active-background-l-delta);
}

.is-palette-light {
  --h: var(--bulma-light-h);
  --s: var(--bulma-light-s);
  --l: var(--bulma-light-l);
  --color: hsl(var(--h), var(--s), var(--l));
  --00-l: var(--bulma-light-00-l);
  --color-00: hsl(var(--h), var(--s), var(--00-l));
  --05-l: var(--bulma-light-05-l);
  --color-05: hsl(var(--h), var(--s), var(--05-l));
  --10-l: var(--bulma-light-10-l);
  --color-10: hsl(var(--h), var(--s), var(--10-l));
  --15-l: var(--bulma-light-15-l);
  --color-15: hsl(var(--h), var(--s), var(--15-l));
  --20-l: var(--bulma-light-20-l);
  --color-20: hsl(var(--h), var(--s), var(--20-l));
  --25-l: var(--bulma-light-25-l);
  --color-25: hsl(var(--h), var(--s), var(--25-l));
  --30-l: var(--bulma-light-30-l);
  --color-30: hsl(var(--h), var(--s), var(--30-l));
  --35-l: var(--bulma-light-35-l);
  --color-35: hsl(var(--h), var(--s), var(--35-l));
  --40-l: var(--bulma-light-40-l);
  --color-40: hsl(var(--h), var(--s), var(--40-l));
  --45-l: var(--bulma-light-45-l);
  --color-45: hsl(var(--h), var(--s), var(--45-l));
  --50-l: var(--bulma-light-50-l);
  --color-50: hsl(var(--h), var(--s), var(--50-l));
  --55-l: var(--bulma-light-55-l);
  --color-55: hsl(var(--h), var(--s), var(--55-l));
  --60-l: var(--bulma-light-60-l);
  --color-60: hsl(var(--h), var(--s), var(--60-l));
  --65-l: var(--bulma-light-65-l);
  --color-65: hsl(var(--h), var(--s), var(--65-l));
  --70-l: var(--bulma-light-70-l);
  --color-70: hsl(var(--h), var(--s), var(--70-l));
  --75-l: var(--bulma-light-75-l);
  --color-75: hsl(var(--h), var(--s), var(--75-l));
  --80-l: var(--bulma-light-80-l);
  --color-80: hsl(var(--h), var(--s), var(--80-l));
  --85-l: var(--bulma-light-85-l);
  --color-85: hsl(var(--h), var(--s), var(--85-l));
  --90-l: var(--bulma-light-90-l);
  --color-90: hsl(var(--h), var(--s), var(--90-l));
  --95-l: var(--bulma-light-95-l);
  --color-95: hsl(var(--h), var(--s), var(--95-l));
  --100-l: var(--bulma-light-100-l);
  --color-100: hsl(var(--h), var(--s), var(--100-l));
}

[class*=is-color-dark],
[class*=has-text-dark] {
  --bulma-color-l: var(--bulma-dark-l);
  --bulma-color-l-delta: 0%;
  color: hsl(var(--bulma-dark-h), var(--bulma-dark-s), calc(var(--bulma-color-l) + var(--bulma-color-l-delta))) !important;
}

[class*=is-background-dark],
[class*=has-background-dark] {
  --bulma-background-l: var(--bulma-dark-l);
  --bulma-background-l-delta: 0%;
  background-color: hsl(var(--bulma-dark-h), var(--bulma-dark-s), calc(var(--bulma-background-l) + var(--bulma-background-l-delta))) !important;
}

.is-color-dark-invert,
.has-text-dark-invert {
  --bulma-color-l: var(--bulma-dark-invert-l);
}

.is-background-dark-invert,
.has-background-dark-invert {
  --bulma-background-l: var(--bulma-dark-invert-l);
}

.is-color-dark-on-scheme,
.has-text-dark-on-scheme {
  --bulma-color-l: var(--bulma-dark-on-scheme-l);
}

.is-background-dark-on-scheme,
.has-background-dark-on-scheme {
  --bulma-background-l: var(--bulma-dark-on-scheme-l);
}

.is-color-dark-light,
.has-text-dark-light {
  --bulma-color-l: var(--bulma-dark-light-l);
}

.is-background-dark-light,
.has-background-dark-light {
  --bulma-background-l: var(--bulma-dark-light-l);
}

.is-color-dark-light-invert,
.has-text-dark-light-invert {
  --bulma-color-l: var(--bulma-dark-light-invert-l);
}

.is-background-dark-light-invert,
.has-background-dark-light-invert {
  --bulma-background-l: var(--bulma-dark-light-invert-l);
}

.is-color-dark-dark,
.has-text-dark-dark {
  --bulma-color-l: var(--bulma-dark-dark-l);
}

.is-background-dark-dark,
.has-background-dark-dark {
  --bulma-background-l: var(--bulma-dark-dark-l);
}

.is-color-dark-dark-invert,
.has-text-dark-dark-invert {
  --bulma-color-l: var(--bulma-dark-dark-invert-l);
}

.is-background-dark-dark-invert,
.has-background-dark-dark-invert {
  --bulma-background-l: var(--bulma-dark-dark-invert-l);
}

.is-color-dark-soft,
.has-text-dark-soft {
  --bulma-color-l: var(--bulma-soft-l);
}

.is-background-dark-soft,
.has-background-dark-soft {
  --bulma-background-l: var(--bulma-soft-l);
}

.is-color-dark-bold,
.has-text-dark-bold {
  --bulma-color-l: var(--bulma-bold-l);
}

.is-background-dark-bold,
.has-background-dark-bold {
  --bulma-background-l: var(--bulma-bold-l);
}

.is-color-dark-soft-invert,
.has-text-dark-soft-invert {
  --bulma-color-l: var(--bulma-soft-invert-l);
}

.is-background-dark-soft-invert,
.has-background-dark-soft-invert {
  --bulma-background-l: var(--bulma-soft-invert-l);
}

.is-color-dark-bold-invert,
.has-text-dark-bold-invert {
  --bulma-color-l: var(--bulma-bold-invert-l);
}

.is-background-dark-bold-invert,
.has-background-dark-bold-invert {
  --bulma-background-l: var(--bulma-bold-invert-l);
}

.is-color-dark-00,
.has-text-dark-00 {
  --bulma-color-l: var(--bulma-dark-00-l);
}

.is-background-dark-00,
.has-background-dark-00 {
  --bulma-background-l: var(--bulma-dark-00-l);
}

.is-color-dark-00-invert,
.has-text-dark-00-invert {
  --bulma-color-l: var(--bulma-dark-00-invert-l);
}

.is-background-dark-00-invert,
.has-background-dark-00-invert {
  --bulma-background-l: var(--bulma-dark-00-invert-l);
}

.is-color-dark-05,
.has-text-dark-05 {
  --bulma-color-l: var(--bulma-dark-05-l);
}

.is-background-dark-05,
.has-background-dark-05 {
  --bulma-background-l: var(--bulma-dark-05-l);
}

.is-color-dark-05-invert,
.has-text-dark-05-invert {
  --bulma-color-l: var(--bulma-dark-05-invert-l);
}

.is-background-dark-05-invert,
.has-background-dark-05-invert {
  --bulma-background-l: var(--bulma-dark-05-invert-l);
}

.is-color-dark-10,
.has-text-dark-10 {
  --bulma-color-l: var(--bulma-dark-10-l);
}

.is-background-dark-10,
.has-background-dark-10 {
  --bulma-background-l: var(--bulma-dark-10-l);
}

.is-color-dark-10-invert,
.has-text-dark-10-invert {
  --bulma-color-l: var(--bulma-dark-10-invert-l);
}

.is-background-dark-10-invert,
.has-background-dark-10-invert {
  --bulma-background-l: var(--bulma-dark-10-invert-l);
}

.is-color-dark-15,
.has-text-dark-15 {
  --bulma-color-l: var(--bulma-dark-15-l);
}

.is-background-dark-15,
.has-background-dark-15 {
  --bulma-background-l: var(--bulma-dark-15-l);
}

.is-color-dark-15-invert,
.has-text-dark-15-invert {
  --bulma-color-l: var(--bulma-dark-15-invert-l);
}

.is-background-dark-15-invert,
.has-background-dark-15-invert {
  --bulma-background-l: var(--bulma-dark-15-invert-l);
}

.is-color-dark-20,
.has-text-dark-20 {
  --bulma-color-l: var(--bulma-dark-20-l);
}

.is-background-dark-20,
.has-background-dark-20 {
  --bulma-background-l: var(--bulma-dark-20-l);
}

.is-color-dark-20-invert,
.has-text-dark-20-invert {
  --bulma-color-l: var(--bulma-dark-20-invert-l);
}

.is-background-dark-20-invert,
.has-background-dark-20-invert {
  --bulma-background-l: var(--bulma-dark-20-invert-l);
}

.is-color-dark-25,
.has-text-dark-25 {
  --bulma-color-l: var(--bulma-dark-25-l);
}

.is-background-dark-25,
.has-background-dark-25 {
  --bulma-background-l: var(--bulma-dark-25-l);
}

.is-color-dark-25-invert,
.has-text-dark-25-invert {
  --bulma-color-l: var(--bulma-dark-25-invert-l);
}

.is-background-dark-25-invert,
.has-background-dark-25-invert {
  --bulma-background-l: var(--bulma-dark-25-invert-l);
}

.is-color-dark-30,
.has-text-dark-30 {
  --bulma-color-l: var(--bulma-dark-30-l);
}

.is-background-dark-30,
.has-background-dark-30 {
  --bulma-background-l: var(--bulma-dark-30-l);
}

.is-color-dark-30-invert,
.has-text-dark-30-invert {
  --bulma-color-l: var(--bulma-dark-30-invert-l);
}

.is-background-dark-30-invert,
.has-background-dark-30-invert {
  --bulma-background-l: var(--bulma-dark-30-invert-l);
}

.is-color-dark-35,
.has-text-dark-35 {
  --bulma-color-l: var(--bulma-dark-35-l);
}

.is-background-dark-35,
.has-background-dark-35 {
  --bulma-background-l: var(--bulma-dark-35-l);
}

.is-color-dark-35-invert,
.has-text-dark-35-invert {
  --bulma-color-l: var(--bulma-dark-35-invert-l);
}

.is-background-dark-35-invert,
.has-background-dark-35-invert {
  --bulma-background-l: var(--bulma-dark-35-invert-l);
}

.is-color-dark-40,
.has-text-dark-40 {
  --bulma-color-l: var(--bulma-dark-40-l);
}

.is-background-dark-40,
.has-background-dark-40 {
  --bulma-background-l: var(--bulma-dark-40-l);
}

.is-color-dark-40-invert,
.has-text-dark-40-invert {
  --bulma-color-l: var(--bulma-dark-40-invert-l);
}

.is-background-dark-40-invert,
.has-background-dark-40-invert {
  --bulma-background-l: var(--bulma-dark-40-invert-l);
}

.is-color-dark-45,
.has-text-dark-45 {
  --bulma-color-l: var(--bulma-dark-45-l);
}

.is-background-dark-45,
.has-background-dark-45 {
  --bulma-background-l: var(--bulma-dark-45-l);
}

.is-color-dark-45-invert,
.has-text-dark-45-invert {
  --bulma-color-l: var(--bulma-dark-45-invert-l);
}

.is-background-dark-45-invert,
.has-background-dark-45-invert {
  --bulma-background-l: var(--bulma-dark-45-invert-l);
}

.is-color-dark-50,
.has-text-dark-50 {
  --bulma-color-l: var(--bulma-dark-50-l);
}

.is-background-dark-50,
.has-background-dark-50 {
  --bulma-background-l: var(--bulma-dark-50-l);
}

.is-color-dark-50-invert,
.has-text-dark-50-invert {
  --bulma-color-l: var(--bulma-dark-50-invert-l);
}

.is-background-dark-50-invert,
.has-background-dark-50-invert {
  --bulma-background-l: var(--bulma-dark-50-invert-l);
}

.is-color-dark-55,
.has-text-dark-55 {
  --bulma-color-l: var(--bulma-dark-55-l);
}

.is-background-dark-55,
.has-background-dark-55 {
  --bulma-background-l: var(--bulma-dark-55-l);
}

.is-color-dark-55-invert,
.has-text-dark-55-invert {
  --bulma-color-l: var(--bulma-dark-55-invert-l);
}

.is-background-dark-55-invert,
.has-background-dark-55-invert {
  --bulma-background-l: var(--bulma-dark-55-invert-l);
}

.is-color-dark-60,
.has-text-dark-60 {
  --bulma-color-l: var(--bulma-dark-60-l);
}

.is-background-dark-60,
.has-background-dark-60 {
  --bulma-background-l: var(--bulma-dark-60-l);
}

.is-color-dark-60-invert,
.has-text-dark-60-invert {
  --bulma-color-l: var(--bulma-dark-60-invert-l);
}

.is-background-dark-60-invert,
.has-background-dark-60-invert {
  --bulma-background-l: var(--bulma-dark-60-invert-l);
}

.is-color-dark-65,
.has-text-dark-65 {
  --bulma-color-l: var(--bulma-dark-65-l);
}

.is-background-dark-65,
.has-background-dark-65 {
  --bulma-background-l: var(--bulma-dark-65-l);
}

.is-color-dark-65-invert,
.has-text-dark-65-invert {
  --bulma-color-l: var(--bulma-dark-65-invert-l);
}

.is-background-dark-65-invert,
.has-background-dark-65-invert {
  --bulma-background-l: var(--bulma-dark-65-invert-l);
}

.is-color-dark-70,
.has-text-dark-70 {
  --bulma-color-l: var(--bulma-dark-70-l);
}

.is-background-dark-70,
.has-background-dark-70 {
  --bulma-background-l: var(--bulma-dark-70-l);
}

.is-color-dark-70-invert,
.has-text-dark-70-invert {
  --bulma-color-l: var(--bulma-dark-70-invert-l);
}

.is-background-dark-70-invert,
.has-background-dark-70-invert {
  --bulma-background-l: var(--bulma-dark-70-invert-l);
}

.is-color-dark-75,
.has-text-dark-75 {
  --bulma-color-l: var(--bulma-dark-75-l);
}

.is-background-dark-75,
.has-background-dark-75 {
  --bulma-background-l: var(--bulma-dark-75-l);
}

.is-color-dark-75-invert,
.has-text-dark-75-invert {
  --bulma-color-l: var(--bulma-dark-75-invert-l);
}

.is-background-dark-75-invert,
.has-background-dark-75-invert {
  --bulma-background-l: var(--bulma-dark-75-invert-l);
}

.is-color-dark-80,
.has-text-dark-80 {
  --bulma-color-l: var(--bulma-dark-80-l);
}

.is-background-dark-80,
.has-background-dark-80 {
  --bulma-background-l: var(--bulma-dark-80-l);
}

.is-color-dark-80-invert,
.has-text-dark-80-invert {
  --bulma-color-l: var(--bulma-dark-80-invert-l);
}

.is-background-dark-80-invert,
.has-background-dark-80-invert {
  --bulma-background-l: var(--bulma-dark-80-invert-l);
}

.is-color-dark-85,
.has-text-dark-85 {
  --bulma-color-l: var(--bulma-dark-85-l);
}

.is-background-dark-85,
.has-background-dark-85 {
  --bulma-background-l: var(--bulma-dark-85-l);
}

.is-color-dark-85-invert,
.has-text-dark-85-invert {
  --bulma-color-l: var(--bulma-dark-85-invert-l);
}

.is-background-dark-85-invert,
.has-background-dark-85-invert {
  --bulma-background-l: var(--bulma-dark-85-invert-l);
}

.is-color-dark-90,
.has-text-dark-90 {
  --bulma-color-l: var(--bulma-dark-90-l);
}

.is-background-dark-90,
.has-background-dark-90 {
  --bulma-background-l: var(--bulma-dark-90-l);
}

.is-color-dark-90-invert,
.has-text-dark-90-invert {
  --bulma-color-l: var(--bulma-dark-90-invert-l);
}

.is-background-dark-90-invert,
.has-background-dark-90-invert {
  --bulma-background-l: var(--bulma-dark-90-invert-l);
}

.is-color-dark-95,
.has-text-dark-95 {
  --bulma-color-l: var(--bulma-dark-95-l);
}

.is-background-dark-95,
.has-background-dark-95 {
  --bulma-background-l: var(--bulma-dark-95-l);
}

.is-color-dark-95-invert,
.has-text-dark-95-invert {
  --bulma-color-l: var(--bulma-dark-95-invert-l);
}

.is-background-dark-95-invert,
.has-background-dark-95-invert {
  --bulma-background-l: var(--bulma-dark-95-invert-l);
}

.is-color-dark-100,
.has-text-dark-100 {
  --bulma-color-l: var(--bulma-dark-100-l);
}

.is-background-dark-100,
.has-background-dark-100 {
  --bulma-background-l: var(--bulma-dark-100-l);
}

.is-color-dark-100-invert,
.has-text-dark-100-invert {
  --bulma-color-l: var(--bulma-dark-100-invert-l);
}

.is-background-dark-100-invert,
.has-background-dark-100-invert {
  --bulma-background-l: var(--bulma-dark-100-invert-l);
}

a.is-color-dark:hover, a.is-color-dark:focus-visible,
button.is-color-dark:hover,
button.is-color-dark:focus-visible,
is-color-dark.is-hoverable:hover,
is-color-dark.is-hoverable:focus-visible,
a.has-text-dark:hover,
a.has-text-dark:focus-visible,
button.has-text-dark:hover,
button.has-text-dark:focus-visible,
has-text-dark.is-hoverable:hover,
has-text-dark.is-hoverable:focus-visible {
  --bulma-color-l-delta: var(--bulma-hover-color-l-delta);
}
a.is-color-dark:active,
button.is-color-dark:active,
is-color-dark.is-hoverable:active,
a.has-text-dark:active,
button.has-text-dark:active,
has-text-dark.is-hoverable:active {
  --bulma-color-l-delta: var(--bulma-active-color-l-delta);
}

a.is-background-dark:hover, a.is-background-dark:focus-visible,
button.is-background-dark:hover,
button.is-background-dark:focus-visible,
is-background-dark.is-hoverable:hover,
is-background-dark.is-hoverable:focus-visible,
a.has-background-dark:hover,
a.has-background-dark:focus-visible,
button.has-background-dark:hover,
button.has-background-dark:focus-visible,
has-background-dark.is-hoverable:hover,
has-background-dark.is-hoverable:focus-visible {
  --bulma-background-l-delta: var(--bulma-hover-background-l-delta);
}
a.is-background-dark:active,
button.is-background-dark:active,
is-background-dark.is-hoverable:active,
a.has-background-dark:active,
button.has-background-dark:active,
has-background-dark.is-hoverable:active {
  --bulma-background-l-delta: var(--bulma-active-background-l-delta);
}

.is-palette-dark {
  --h: var(--bulma-dark-h);
  --s: var(--bulma-dark-s);
  --l: var(--bulma-dark-l);
  --color: hsl(var(--h), var(--s), var(--l));
  --00-l: var(--bulma-dark-00-l);
  --color-00: hsl(var(--h), var(--s), var(--00-l));
  --05-l: var(--bulma-dark-05-l);
  --color-05: hsl(var(--h), var(--s), var(--05-l));
  --10-l: var(--bulma-dark-10-l);
  --color-10: hsl(var(--h), var(--s), var(--10-l));
  --15-l: var(--bulma-dark-15-l);
  --color-15: hsl(var(--h), var(--s), var(--15-l));
  --20-l: var(--bulma-dark-20-l);
  --color-20: hsl(var(--h), var(--s), var(--20-l));
  --25-l: var(--bulma-dark-25-l);
  --color-25: hsl(var(--h), var(--s), var(--25-l));
  --30-l: var(--bulma-dark-30-l);
  --color-30: hsl(var(--h), var(--s), var(--30-l));
  --35-l: var(--bulma-dark-35-l);
  --color-35: hsl(var(--h), var(--s), var(--35-l));
  --40-l: var(--bulma-dark-40-l);
  --color-40: hsl(var(--h), var(--s), var(--40-l));
  --45-l: var(--bulma-dark-45-l);
  --color-45: hsl(var(--h), var(--s), var(--45-l));
  --50-l: var(--bulma-dark-50-l);
  --color-50: hsl(var(--h), var(--s), var(--50-l));
  --55-l: var(--bulma-dark-55-l);
  --color-55: hsl(var(--h), var(--s), var(--55-l));
  --60-l: var(--bulma-dark-60-l);
  --color-60: hsl(var(--h), var(--s), var(--60-l));
  --65-l: var(--bulma-dark-65-l);
  --color-65: hsl(var(--h), var(--s), var(--65-l));
  --70-l: var(--bulma-dark-70-l);
  --color-70: hsl(var(--h), var(--s), var(--70-l));
  --75-l: var(--bulma-dark-75-l);
  --color-75: hsl(var(--h), var(--s), var(--75-l));
  --80-l: var(--bulma-dark-80-l);
  --color-80: hsl(var(--h), var(--s), var(--80-l));
  --85-l: var(--bulma-dark-85-l);
  --color-85: hsl(var(--h), var(--s), var(--85-l));
  --90-l: var(--bulma-dark-90-l);
  --color-90: hsl(var(--h), var(--s), var(--90-l));
  --95-l: var(--bulma-dark-95-l);
  --color-95: hsl(var(--h), var(--s), var(--95-l));
  --100-l: var(--bulma-dark-100-l);
  --color-100: hsl(var(--h), var(--s), var(--100-l));
}

[class*=is-color-text],
[class*=has-text-text] {
  --bulma-color-l: var(--bulma-text-l);
  --bulma-color-l-delta: 0%;
  color: hsl(var(--bulma-text-h), var(--bulma-text-s), calc(var(--bulma-color-l) + var(--bulma-color-l-delta))) !important;
}

[class*=is-background-text],
[class*=has-background-text] {
  --bulma-background-l: var(--bulma-text-l);
  --bulma-background-l-delta: 0%;
  background-color: hsl(var(--bulma-text-h), var(--bulma-text-s), calc(var(--bulma-background-l) + var(--bulma-background-l-delta))) !important;
}

.is-color-text-invert,
.has-text-text-invert {
  --bulma-color-l: var(--bulma-text-invert-l);
}

.is-background-text-invert,
.has-background-text-invert {
  --bulma-background-l: var(--bulma-text-invert-l);
}

.is-color-text-on-scheme,
.has-text-text-on-scheme {
  --bulma-color-l: var(--bulma-text-on-scheme-l);
}

.is-background-text-on-scheme,
.has-background-text-on-scheme {
  --bulma-background-l: var(--bulma-text-on-scheme-l);
}

.is-color-text-light,
.has-text-text-light {
  --bulma-color-l: var(--bulma-text-light-l);
}

.is-background-text-light,
.has-background-text-light {
  --bulma-background-l: var(--bulma-text-light-l);
}

.is-color-text-light-invert,
.has-text-text-light-invert {
  --bulma-color-l: var(--bulma-text-light-invert-l);
}

.is-background-text-light-invert,
.has-background-text-light-invert {
  --bulma-background-l: var(--bulma-text-light-invert-l);
}

.is-color-text-dark,
.has-text-text-dark {
  --bulma-color-l: var(--bulma-text-dark-l);
}

.is-background-text-dark,
.has-background-text-dark {
  --bulma-background-l: var(--bulma-text-dark-l);
}

.is-color-text-dark-invert,
.has-text-text-dark-invert {
  --bulma-color-l: var(--bulma-text-dark-invert-l);
}

.is-background-text-dark-invert,
.has-background-text-dark-invert {
  --bulma-background-l: var(--bulma-text-dark-invert-l);
}

.is-color-text-soft,
.has-text-text-soft {
  --bulma-color-l: var(--bulma-soft-l);
}

.is-background-text-soft,
.has-background-text-soft {
  --bulma-background-l: var(--bulma-soft-l);
}

.is-color-text-bold,
.has-text-text-bold {
  --bulma-color-l: var(--bulma-bold-l);
}

.is-background-text-bold,
.has-background-text-bold {
  --bulma-background-l: var(--bulma-bold-l);
}

.is-color-text-soft-invert,
.has-text-text-soft-invert {
  --bulma-color-l: var(--bulma-soft-invert-l);
}

.is-background-text-soft-invert,
.has-background-text-soft-invert {
  --bulma-background-l: var(--bulma-soft-invert-l);
}

.is-color-text-bold-invert,
.has-text-text-bold-invert {
  --bulma-color-l: var(--bulma-bold-invert-l);
}

.is-background-text-bold-invert,
.has-background-text-bold-invert {
  --bulma-background-l: var(--bulma-bold-invert-l);
}

.is-color-text-00,
.has-text-text-00 {
  --bulma-color-l: var(--bulma-text-00-l);
}

.is-background-text-00,
.has-background-text-00 {
  --bulma-background-l: var(--bulma-text-00-l);
}

.is-color-text-00-invert,
.has-text-text-00-invert {
  --bulma-color-l: var(--bulma-text-00-invert-l);
}

.is-background-text-00-invert,
.has-background-text-00-invert {
  --bulma-background-l: var(--bulma-text-00-invert-l);
}

.is-color-text-05,
.has-text-text-05 {
  --bulma-color-l: var(--bulma-text-05-l);
}

.is-background-text-05,
.has-background-text-05 {
  --bulma-background-l: var(--bulma-text-05-l);
}

.is-color-text-05-invert,
.has-text-text-05-invert {
  --bulma-color-l: var(--bulma-text-05-invert-l);
}

.is-background-text-05-invert,
.has-background-text-05-invert {
  --bulma-background-l: var(--bulma-text-05-invert-l);
}

.is-color-text-10,
.has-text-text-10 {
  --bulma-color-l: var(--bulma-text-10-l);
}

.is-background-text-10,
.has-background-text-10 {
  --bulma-background-l: var(--bulma-text-10-l);
}

.is-color-text-10-invert,
.has-text-text-10-invert {
  --bulma-color-l: var(--bulma-text-10-invert-l);
}

.is-background-text-10-invert,
.has-background-text-10-invert {
  --bulma-background-l: var(--bulma-text-10-invert-l);
}

.is-color-text-15,
.has-text-text-15 {
  --bulma-color-l: var(--bulma-text-15-l);
}

.is-background-text-15,
.has-background-text-15 {
  --bulma-background-l: var(--bulma-text-15-l);
}

.is-color-text-15-invert,
.has-text-text-15-invert {
  --bulma-color-l: var(--bulma-text-15-invert-l);
}

.is-background-text-15-invert,
.has-background-text-15-invert {
  --bulma-background-l: var(--bulma-text-15-invert-l);
}

.is-color-text-20,
.has-text-text-20 {
  --bulma-color-l: var(--bulma-text-20-l);
}

.is-background-text-20,
.has-background-text-20 {
  --bulma-background-l: var(--bulma-text-20-l);
}

.is-color-text-20-invert,
.has-text-text-20-invert {
  --bulma-color-l: var(--bulma-text-20-invert-l);
}

.is-background-text-20-invert,
.has-background-text-20-invert {
  --bulma-background-l: var(--bulma-text-20-invert-l);
}

.is-color-text-25,
.has-text-text-25 {
  --bulma-color-l: var(--bulma-text-25-l);
}

.is-background-text-25,
.has-background-text-25 {
  --bulma-background-l: var(--bulma-text-25-l);
}

.is-color-text-25-invert,
.has-text-text-25-invert {
  --bulma-color-l: var(--bulma-text-25-invert-l);
}

.is-background-text-25-invert,
.has-background-text-25-invert {
  --bulma-background-l: var(--bulma-text-25-invert-l);
}

.is-color-text-30,
.has-text-text-30 {
  --bulma-color-l: var(--bulma-text-30-l);
}

.is-background-text-30,
.has-background-text-30 {
  --bulma-background-l: var(--bulma-text-30-l);
}

.is-color-text-30-invert,
.has-text-text-30-invert {
  --bulma-color-l: var(--bulma-text-30-invert-l);
}

.is-background-text-30-invert,
.has-background-text-30-invert {
  --bulma-background-l: var(--bulma-text-30-invert-l);
}

.is-color-text-35,
.has-text-text-35 {
  --bulma-color-l: var(--bulma-text-35-l);
}

.is-background-text-35,
.has-background-text-35 {
  --bulma-background-l: var(--bulma-text-35-l);
}

.is-color-text-35-invert,
.has-text-text-35-invert {
  --bulma-color-l: var(--bulma-text-35-invert-l);
}

.is-background-text-35-invert,
.has-background-text-35-invert {
  --bulma-background-l: var(--bulma-text-35-invert-l);
}

.is-color-text-40,
.has-text-text-40 {
  --bulma-color-l: var(--bulma-text-40-l);
}

.is-background-text-40,
.has-background-text-40 {
  --bulma-background-l: var(--bulma-text-40-l);
}

.is-color-text-40-invert,
.has-text-text-40-invert {
  --bulma-color-l: var(--bulma-text-40-invert-l);
}

.is-background-text-40-invert,
.has-background-text-40-invert {
  --bulma-background-l: var(--bulma-text-40-invert-l);
}

.is-color-text-45,
.has-text-text-45 {
  --bulma-color-l: var(--bulma-text-45-l);
}

.is-background-text-45,
.has-background-text-45 {
  --bulma-background-l: var(--bulma-text-45-l);
}

.is-color-text-45-invert,
.has-text-text-45-invert {
  --bulma-color-l: var(--bulma-text-45-invert-l);
}

.is-background-text-45-invert,
.has-background-text-45-invert {
  --bulma-background-l: var(--bulma-text-45-invert-l);
}

.is-color-text-50,
.has-text-text-50 {
  --bulma-color-l: var(--bulma-text-50-l);
}

.is-background-text-50,
.has-background-text-50 {
  --bulma-background-l: var(--bulma-text-50-l);
}

.is-color-text-50-invert,
.has-text-text-50-invert {
  --bulma-color-l: var(--bulma-text-50-invert-l);
}

.is-background-text-50-invert,
.has-background-text-50-invert {
  --bulma-background-l: var(--bulma-text-50-invert-l);
}

.is-color-text-55,
.has-text-text-55 {
  --bulma-color-l: var(--bulma-text-55-l);
}

.is-background-text-55,
.has-background-text-55 {
  --bulma-background-l: var(--bulma-text-55-l);
}

.is-color-text-55-invert,
.has-text-text-55-invert {
  --bulma-color-l: var(--bulma-text-55-invert-l);
}

.is-background-text-55-invert,
.has-background-text-55-invert {
  --bulma-background-l: var(--bulma-text-55-invert-l);
}

.is-color-text-60,
.has-text-text-60 {
  --bulma-color-l: var(--bulma-text-60-l);
}

.is-background-text-60,
.has-background-text-60 {
  --bulma-background-l: var(--bulma-text-60-l);
}

.is-color-text-60-invert,
.has-text-text-60-invert {
  --bulma-color-l: var(--bulma-text-60-invert-l);
}

.is-background-text-60-invert,
.has-background-text-60-invert {
  --bulma-background-l: var(--bulma-text-60-invert-l);
}

.is-color-text-65,
.has-text-text-65 {
  --bulma-color-l: var(--bulma-text-65-l);
}

.is-background-text-65,
.has-background-text-65 {
  --bulma-background-l: var(--bulma-text-65-l);
}

.is-color-text-65-invert,
.has-text-text-65-invert {
  --bulma-color-l: var(--bulma-text-65-invert-l);
}

.is-background-text-65-invert,
.has-background-text-65-invert {
  --bulma-background-l: var(--bulma-text-65-invert-l);
}

.is-color-text-70,
.has-text-text-70 {
  --bulma-color-l: var(--bulma-text-70-l);
}

.is-background-text-70,
.has-background-text-70 {
  --bulma-background-l: var(--bulma-text-70-l);
}

.is-color-text-70-invert,
.has-text-text-70-invert {
  --bulma-color-l: var(--bulma-text-70-invert-l);
}

.is-background-text-70-invert,
.has-background-text-70-invert {
  --bulma-background-l: var(--bulma-text-70-invert-l);
}

.is-color-text-75,
.has-text-text-75 {
  --bulma-color-l: var(--bulma-text-75-l);
}

.is-background-text-75,
.has-background-text-75 {
  --bulma-background-l: var(--bulma-text-75-l);
}

.is-color-text-75-invert,
.has-text-text-75-invert {
  --bulma-color-l: var(--bulma-text-75-invert-l);
}

.is-background-text-75-invert,
.has-background-text-75-invert {
  --bulma-background-l: var(--bulma-text-75-invert-l);
}

.is-color-text-80,
.has-text-text-80 {
  --bulma-color-l: var(--bulma-text-80-l);
}

.is-background-text-80,
.has-background-text-80 {
  --bulma-background-l: var(--bulma-text-80-l);
}

.is-color-text-80-invert,
.has-text-text-80-invert {
  --bulma-color-l: var(--bulma-text-80-invert-l);
}

.is-background-text-80-invert,
.has-background-text-80-invert {
  --bulma-background-l: var(--bulma-text-80-invert-l);
}

.is-color-text-85,
.has-text-text-85 {
  --bulma-color-l: var(--bulma-text-85-l);
}

.is-background-text-85,
.has-background-text-85 {
  --bulma-background-l: var(--bulma-text-85-l);
}

.is-color-text-85-invert,
.has-text-text-85-invert {
  --bulma-color-l: var(--bulma-text-85-invert-l);
}

.is-background-text-85-invert,
.has-background-text-85-invert {
  --bulma-background-l: var(--bulma-text-85-invert-l);
}

.is-color-text-90,
.has-text-text-90 {
  --bulma-color-l: var(--bulma-text-90-l);
}

.is-background-text-90,
.has-background-text-90 {
  --bulma-background-l: var(--bulma-text-90-l);
}

.is-color-text-90-invert,
.has-text-text-90-invert {
  --bulma-color-l: var(--bulma-text-90-invert-l);
}

.is-background-text-90-invert,
.has-background-text-90-invert {
  --bulma-background-l: var(--bulma-text-90-invert-l);
}

.is-color-text-95,
.has-text-text-95 {
  --bulma-color-l: var(--bulma-text-95-l);
}

.is-background-text-95,
.has-background-text-95 {
  --bulma-background-l: var(--bulma-text-95-l);
}

.is-color-text-95-invert,
.has-text-text-95-invert {
  --bulma-color-l: var(--bulma-text-95-invert-l);
}

.is-background-text-95-invert,
.has-background-text-95-invert {
  --bulma-background-l: var(--bulma-text-95-invert-l);
}

.is-color-text-100,
.has-text-text-100 {
  --bulma-color-l: var(--bulma-text-100-l);
}

.is-background-text-100,
.has-background-text-100 {
  --bulma-background-l: var(--bulma-text-100-l);
}

.is-color-text-100-invert,
.has-text-text-100-invert {
  --bulma-color-l: var(--bulma-text-100-invert-l);
}

.is-background-text-100-invert,
.has-background-text-100-invert {
  --bulma-background-l: var(--bulma-text-100-invert-l);
}

a.is-color-text:hover, a.is-color-text:focus-visible,
button.is-color-text:hover,
button.is-color-text:focus-visible,
is-color-text.is-hoverable:hover,
is-color-text.is-hoverable:focus-visible,
a.has-text-text:hover,
a.has-text-text:focus-visible,
button.has-text-text:hover,
button.has-text-text:focus-visible,
has-text-text.is-hoverable:hover,
has-text-text.is-hoverable:focus-visible {
  --bulma-color-l-delta: var(--bulma-hover-color-l-delta);
}
a.is-color-text:active,
button.is-color-text:active,
is-color-text.is-hoverable:active,
a.has-text-text:active,
button.has-text-text:active,
has-text-text.is-hoverable:active {
  --bulma-color-l-delta: var(--bulma-active-color-l-delta);
}

a.is-background-text:hover, a.is-background-text:focus-visible,
button.is-background-text:hover,
button.is-background-text:focus-visible,
is-background-text.is-hoverable:hover,
is-background-text.is-hoverable:focus-visible,
a.has-background-text:hover,
a.has-background-text:focus-visible,
button.has-background-text:hover,
button.has-background-text:focus-visible,
has-background-text.is-hoverable:hover,
has-background-text.is-hoverable:focus-visible {
  --bulma-background-l-delta: var(--bulma-hover-background-l-delta);
}
a.is-background-text:active,
button.is-background-text:active,
is-background-text.is-hoverable:active,
a.has-background-text:active,
button.has-background-text:active,
has-background-text.is-hoverable:active {
  --bulma-background-l-delta: var(--bulma-active-background-l-delta);
}

.is-palette-text {
  --h: var(--bulma-text-h);
  --s: var(--bulma-text-s);
  --l: var(--bulma-text-l);
  --color: hsl(var(--h), var(--s), var(--l));
  --00-l: var(--bulma-text-00-l);
  --color-00: hsl(var(--h), var(--s), var(--00-l));
  --05-l: var(--bulma-text-05-l);
  --color-05: hsl(var(--h), var(--s), var(--05-l));
  --10-l: var(--bulma-text-10-l);
  --color-10: hsl(var(--h), var(--s), var(--10-l));
  --15-l: var(--bulma-text-15-l);
  --color-15: hsl(var(--h), var(--s), var(--15-l));
  --20-l: var(--bulma-text-20-l);
  --color-20: hsl(var(--h), var(--s), var(--20-l));
  --25-l: var(--bulma-text-25-l);
  --color-25: hsl(var(--h), var(--s), var(--25-l));
  --30-l: var(--bulma-text-30-l);
  --color-30: hsl(var(--h), var(--s), var(--30-l));
  --35-l: var(--bulma-text-35-l);
  --color-35: hsl(var(--h), var(--s), var(--35-l));
  --40-l: var(--bulma-text-40-l);
  --color-40: hsl(var(--h), var(--s), var(--40-l));
  --45-l: var(--bulma-text-45-l);
  --color-45: hsl(var(--h), var(--s), var(--45-l));
  --50-l: var(--bulma-text-50-l);
  --color-50: hsl(var(--h), var(--s), var(--50-l));
  --55-l: var(--bulma-text-55-l);
  --color-55: hsl(var(--h), var(--s), var(--55-l));
  --60-l: var(--bulma-text-60-l);
  --color-60: hsl(var(--h), var(--s), var(--60-l));
  --65-l: var(--bulma-text-65-l);
  --color-65: hsl(var(--h), var(--s), var(--65-l));
  --70-l: var(--bulma-text-70-l);
  --color-70: hsl(var(--h), var(--s), var(--70-l));
  --75-l: var(--bulma-text-75-l);
  --color-75: hsl(var(--h), var(--s), var(--75-l));
  --80-l: var(--bulma-text-80-l);
  --color-80: hsl(var(--h), var(--s), var(--80-l));
  --85-l: var(--bulma-text-85-l);
  --color-85: hsl(var(--h), var(--s), var(--85-l));
  --90-l: var(--bulma-text-90-l);
  --color-90: hsl(var(--h), var(--s), var(--90-l));
  --95-l: var(--bulma-text-95-l);
  --color-95: hsl(var(--h), var(--s), var(--95-l));
  --100-l: var(--bulma-text-100-l);
  --color-100: hsl(var(--h), var(--s), var(--100-l));
}

[class*=is-color-primary],
[class*=has-text-primary] {
  --bulma-color-l: var(--bulma-primary-l);
  --bulma-color-l-delta: 0%;
  color: hsl(var(--bulma-primary-h), var(--bulma-primary-s), calc(var(--bulma-color-l) + var(--bulma-color-l-delta))) !important;
}

[class*=is-background-primary],
[class*=has-background-primary] {
  --bulma-background-l: var(--bulma-primary-l);
  --bulma-background-l-delta: 0%;
  background-color: hsl(var(--bulma-primary-h), var(--bulma-primary-s), calc(var(--bulma-background-l) + var(--bulma-background-l-delta))) !important;
}

.is-color-primary-invert,
.has-text-primary-invert {
  --bulma-color-l: var(--bulma-primary-invert-l);
}

.is-background-primary-invert,
.has-background-primary-invert {
  --bulma-background-l: var(--bulma-primary-invert-l);
}

.is-color-primary-on-scheme,
.has-text-primary-on-scheme {
  --bulma-color-l: var(--bulma-primary-on-scheme-l);
}

.is-background-primary-on-scheme,
.has-background-primary-on-scheme {
  --bulma-background-l: var(--bulma-primary-on-scheme-l);
}

.is-color-primary-light,
.has-text-primary-light {
  --bulma-color-l: var(--bulma-primary-light-l);
}

.is-background-primary-light,
.has-background-primary-light {
  --bulma-background-l: var(--bulma-primary-light-l);
}

.is-color-primary-light-invert,
.has-text-primary-light-invert {
  --bulma-color-l: var(--bulma-primary-light-invert-l);
}

.is-background-primary-light-invert,
.has-background-primary-light-invert {
  --bulma-background-l: var(--bulma-primary-light-invert-l);
}

.is-color-primary-dark,
.has-text-primary-dark {
  --bulma-color-l: var(--bulma-primary-dark-l);
}

.is-background-primary-dark,
.has-background-primary-dark {
  --bulma-background-l: var(--bulma-primary-dark-l);
}

.is-color-primary-dark-invert,
.has-text-primary-dark-invert {
  --bulma-color-l: var(--bulma-primary-dark-invert-l);
}

.is-background-primary-dark-invert,
.has-background-primary-dark-invert {
  --bulma-background-l: var(--bulma-primary-dark-invert-l);
}

.is-color-primary-soft,
.has-text-primary-soft {
  --bulma-color-l: var(--bulma-soft-l);
}

.is-background-primary-soft,
.has-background-primary-soft {
  --bulma-background-l: var(--bulma-soft-l);
}

.is-color-primary-bold,
.has-text-primary-bold {
  --bulma-color-l: var(--bulma-bold-l);
}

.is-background-primary-bold,
.has-background-primary-bold {
  --bulma-background-l: var(--bulma-bold-l);
}

.is-color-primary-soft-invert,
.has-text-primary-soft-invert {
  --bulma-color-l: var(--bulma-soft-invert-l);
}

.is-background-primary-soft-invert,
.has-background-primary-soft-invert {
  --bulma-background-l: var(--bulma-soft-invert-l);
}

.is-color-primary-bold-invert,
.has-text-primary-bold-invert {
  --bulma-color-l: var(--bulma-bold-invert-l);
}

.is-background-primary-bold-invert,
.has-background-primary-bold-invert {
  --bulma-background-l: var(--bulma-bold-invert-l);
}

.is-color-primary-00,
.has-text-primary-00 {
  --bulma-color-l: var(--bulma-primary-00-l);
}

.is-background-primary-00,
.has-background-primary-00 {
  --bulma-background-l: var(--bulma-primary-00-l);
}

.is-color-primary-00-invert,
.has-text-primary-00-invert {
  --bulma-color-l: var(--bulma-primary-00-invert-l);
}

.is-background-primary-00-invert,
.has-background-primary-00-invert {
  --bulma-background-l: var(--bulma-primary-00-invert-l);
}

.is-color-primary-05,
.has-text-primary-05 {
  --bulma-color-l: var(--bulma-primary-05-l);
}

.is-background-primary-05,
.has-background-primary-05 {
  --bulma-background-l: var(--bulma-primary-05-l);
}

.is-color-primary-05-invert,
.has-text-primary-05-invert {
  --bulma-color-l: var(--bulma-primary-05-invert-l);
}

.is-background-primary-05-invert,
.has-background-primary-05-invert {
  --bulma-background-l: var(--bulma-primary-05-invert-l);
}

.is-color-primary-10,
.has-text-primary-10 {
  --bulma-color-l: var(--bulma-primary-10-l);
}

.is-background-primary-10,
.has-background-primary-10 {
  --bulma-background-l: var(--bulma-primary-10-l);
}

.is-color-primary-10-invert,
.has-text-primary-10-invert {
  --bulma-color-l: var(--bulma-primary-10-invert-l);
}

.is-background-primary-10-invert,
.has-background-primary-10-invert {
  --bulma-background-l: var(--bulma-primary-10-invert-l);
}

.is-color-primary-15,
.has-text-primary-15 {
  --bulma-color-l: var(--bulma-primary-15-l);
}

.is-background-primary-15,
.has-background-primary-15 {
  --bulma-background-l: var(--bulma-primary-15-l);
}

.is-color-primary-15-invert,
.has-text-primary-15-invert {
  --bulma-color-l: var(--bulma-primary-15-invert-l);
}

.is-background-primary-15-invert,
.has-background-primary-15-invert {
  --bulma-background-l: var(--bulma-primary-15-invert-l);
}

.is-color-primary-20,
.has-text-primary-20 {
  --bulma-color-l: var(--bulma-primary-20-l);
}

.is-background-primary-20,
.has-background-primary-20 {
  --bulma-background-l: var(--bulma-primary-20-l);
}

.is-color-primary-20-invert,
.has-text-primary-20-invert {
  --bulma-color-l: var(--bulma-primary-20-invert-l);
}

.is-background-primary-20-invert,
.has-background-primary-20-invert {
  --bulma-background-l: var(--bulma-primary-20-invert-l);
}

.is-color-primary-25,
.has-text-primary-25 {
  --bulma-color-l: var(--bulma-primary-25-l);
}

.is-background-primary-25,
.has-background-primary-25 {
  --bulma-background-l: var(--bulma-primary-25-l);
}

.is-color-primary-25-invert,
.has-text-primary-25-invert {
  --bulma-color-l: var(--bulma-primary-25-invert-l);
}

.is-background-primary-25-invert,
.has-background-primary-25-invert {
  --bulma-background-l: var(--bulma-primary-25-invert-l);
}

.is-color-primary-30,
.has-text-primary-30 {
  --bulma-color-l: var(--bulma-primary-30-l);
}

.is-background-primary-30,
.has-background-primary-30 {
  --bulma-background-l: var(--bulma-primary-30-l);
}

.is-color-primary-30-invert,
.has-text-primary-30-invert {
  --bulma-color-l: var(--bulma-primary-30-invert-l);
}

.is-background-primary-30-invert,
.has-background-primary-30-invert {
  --bulma-background-l: var(--bulma-primary-30-invert-l);
}

.is-color-primary-35,
.has-text-primary-35 {
  --bulma-color-l: var(--bulma-primary-35-l);
}

.is-background-primary-35,
.has-background-primary-35 {
  --bulma-background-l: var(--bulma-primary-35-l);
}

.is-color-primary-35-invert,
.has-text-primary-35-invert {
  --bulma-color-l: var(--bulma-primary-35-invert-l);
}

.is-background-primary-35-invert,
.has-background-primary-35-invert {
  --bulma-background-l: var(--bulma-primary-35-invert-l);
}

.is-color-primary-40,
.has-text-primary-40 {
  --bulma-color-l: var(--bulma-primary-40-l);
}

.is-background-primary-40,
.has-background-primary-40 {
  --bulma-background-l: var(--bulma-primary-40-l);
}

.is-color-primary-40-invert,
.has-text-primary-40-invert {
  --bulma-color-l: var(--bulma-primary-40-invert-l);
}

.is-background-primary-40-invert,
.has-background-primary-40-invert {
  --bulma-background-l: var(--bulma-primary-40-invert-l);
}

.is-color-primary-45,
.has-text-primary-45 {
  --bulma-color-l: var(--bulma-primary-45-l);
}

.is-background-primary-45,
.has-background-primary-45 {
  --bulma-background-l: var(--bulma-primary-45-l);
}

.is-color-primary-45-invert,
.has-text-primary-45-invert {
  --bulma-color-l: var(--bulma-primary-45-invert-l);
}

.is-background-primary-45-invert,
.has-background-primary-45-invert {
  --bulma-background-l: var(--bulma-primary-45-invert-l);
}

.is-color-primary-50,
.has-text-primary-50 {
  --bulma-color-l: var(--bulma-primary-50-l);
}

.is-background-primary-50,
.has-background-primary-50 {
  --bulma-background-l: var(--bulma-primary-50-l);
}

.is-color-primary-50-invert,
.has-text-primary-50-invert {
  --bulma-color-l: var(--bulma-primary-50-invert-l);
}

.is-background-primary-50-invert,
.has-background-primary-50-invert {
  --bulma-background-l: var(--bulma-primary-50-invert-l);
}

.is-color-primary-55,
.has-text-primary-55 {
  --bulma-color-l: var(--bulma-primary-55-l);
}

.is-background-primary-55,
.has-background-primary-55 {
  --bulma-background-l: var(--bulma-primary-55-l);
}

.is-color-primary-55-invert,
.has-text-primary-55-invert {
  --bulma-color-l: var(--bulma-primary-55-invert-l);
}

.is-background-primary-55-invert,
.has-background-primary-55-invert {
  --bulma-background-l: var(--bulma-primary-55-invert-l);
}

.is-color-primary-60,
.has-text-primary-60 {
  --bulma-color-l: var(--bulma-primary-60-l);
}

.is-background-primary-60,
.has-background-primary-60 {
  --bulma-background-l: var(--bulma-primary-60-l);
}

.is-color-primary-60-invert,
.has-text-primary-60-invert {
  --bulma-color-l: var(--bulma-primary-60-invert-l);
}

.is-background-primary-60-invert,
.has-background-primary-60-invert {
  --bulma-background-l: var(--bulma-primary-60-invert-l);
}

.is-color-primary-65,
.has-text-primary-65 {
  --bulma-color-l: var(--bulma-primary-65-l);
}

.is-background-primary-65,
.has-background-primary-65 {
  --bulma-background-l: var(--bulma-primary-65-l);
}

.is-color-primary-65-invert,
.has-text-primary-65-invert {
  --bulma-color-l: var(--bulma-primary-65-invert-l);
}

.is-background-primary-65-invert,
.has-background-primary-65-invert {
  --bulma-background-l: var(--bulma-primary-65-invert-l);
}

.is-color-primary-70,
.has-text-primary-70 {
  --bulma-color-l: var(--bulma-primary-70-l);
}

.is-background-primary-70,
.has-background-primary-70 {
  --bulma-background-l: var(--bulma-primary-70-l);
}

.is-color-primary-70-invert,
.has-text-primary-70-invert {
  --bulma-color-l: var(--bulma-primary-70-invert-l);
}

.is-background-primary-70-invert,
.has-background-primary-70-invert {
  --bulma-background-l: var(--bulma-primary-70-invert-l);
}

.is-color-primary-75,
.has-text-primary-75 {
  --bulma-color-l: var(--bulma-primary-75-l);
}

.is-background-primary-75,
.has-background-primary-75 {
  --bulma-background-l: var(--bulma-primary-75-l);
}

.is-color-primary-75-invert,
.has-text-primary-75-invert {
  --bulma-color-l: var(--bulma-primary-75-invert-l);
}

.is-background-primary-75-invert,
.has-background-primary-75-invert {
  --bulma-background-l: var(--bulma-primary-75-invert-l);
}

.is-color-primary-80,
.has-text-primary-80 {
  --bulma-color-l: var(--bulma-primary-80-l);
}

.is-background-primary-80,
.has-background-primary-80 {
  --bulma-background-l: var(--bulma-primary-80-l);
}

.is-color-primary-80-invert,
.has-text-primary-80-invert {
  --bulma-color-l: var(--bulma-primary-80-invert-l);
}

.is-background-primary-80-invert,
.has-background-primary-80-invert {
  --bulma-background-l: var(--bulma-primary-80-invert-l);
}

.is-color-primary-85,
.has-text-primary-85 {
  --bulma-color-l: var(--bulma-primary-85-l);
}

.is-background-primary-85,
.has-background-primary-85 {
  --bulma-background-l: var(--bulma-primary-85-l);
}

.is-color-primary-85-invert,
.has-text-primary-85-invert {
  --bulma-color-l: var(--bulma-primary-85-invert-l);
}

.is-background-primary-85-invert,
.has-background-primary-85-invert {
  --bulma-background-l: var(--bulma-primary-85-invert-l);
}

.is-color-primary-90,
.has-text-primary-90 {
  --bulma-color-l: var(--bulma-primary-90-l);
}

.is-background-primary-90,
.has-background-primary-90 {
  --bulma-background-l: var(--bulma-primary-90-l);
}

.is-color-primary-90-invert,
.has-text-primary-90-invert {
  --bulma-color-l: var(--bulma-primary-90-invert-l);
}

.is-background-primary-90-invert,
.has-background-primary-90-invert {
  --bulma-background-l: var(--bulma-primary-90-invert-l);
}

.is-color-primary-95,
.has-text-primary-95 {
  --bulma-color-l: var(--bulma-primary-95-l);
}

.is-background-primary-95,
.has-background-primary-95 {
  --bulma-background-l: var(--bulma-primary-95-l);
}

.is-color-primary-95-invert,
.has-text-primary-95-invert {
  --bulma-color-l: var(--bulma-primary-95-invert-l);
}

.is-background-primary-95-invert,
.has-background-primary-95-invert {
  --bulma-background-l: var(--bulma-primary-95-invert-l);
}

.is-color-primary-100,
.has-text-primary-100 {
  --bulma-color-l: var(--bulma-primary-100-l);
}

.is-background-primary-100,
.has-background-primary-100 {
  --bulma-background-l: var(--bulma-primary-100-l);
}

.is-color-primary-100-invert,
.has-text-primary-100-invert {
  --bulma-color-l: var(--bulma-primary-100-invert-l);
}

.is-background-primary-100-invert,
.has-background-primary-100-invert {
  --bulma-background-l: var(--bulma-primary-100-invert-l);
}

a.is-color-primary:hover, a.is-color-primary:focus-visible,
button.is-color-primary:hover,
button.is-color-primary:focus-visible,
is-color-primary.is-hoverable:hover,
is-color-primary.is-hoverable:focus-visible,
a.has-text-primary:hover,
a.has-text-primary:focus-visible,
button.has-text-primary:hover,
button.has-text-primary:focus-visible,
has-text-primary.is-hoverable:hover,
has-text-primary.is-hoverable:focus-visible {
  --bulma-color-l-delta: var(--bulma-hover-color-l-delta);
}
a.is-color-primary:active,
button.is-color-primary:active,
is-color-primary.is-hoverable:active,
a.has-text-primary:active,
button.has-text-primary:active,
has-text-primary.is-hoverable:active {
  --bulma-color-l-delta: var(--bulma-active-color-l-delta);
}

a.is-background-primary:hover, a.is-background-primary:focus-visible,
button.is-background-primary:hover,
button.is-background-primary:focus-visible,
is-background-primary.is-hoverable:hover,
is-background-primary.is-hoverable:focus-visible,
a.has-background-primary:hover,
a.has-background-primary:focus-visible,
button.has-background-primary:hover,
button.has-background-primary:focus-visible,
has-background-primary.is-hoverable:hover,
has-background-primary.is-hoverable:focus-visible {
  --bulma-background-l-delta: var(--bulma-hover-background-l-delta);
}
a.is-background-primary:active,
button.is-background-primary:active,
is-background-primary.is-hoverable:active,
a.has-background-primary:active,
button.has-background-primary:active,
has-background-primary.is-hoverable:active {
  --bulma-background-l-delta: var(--bulma-active-background-l-delta);
}

.is-palette-primary {
  --h: var(--bulma-primary-h);
  --s: var(--bulma-primary-s);
  --l: var(--bulma-primary-l);
  --color: hsl(var(--h), var(--s), var(--l));
  --00-l: var(--bulma-primary-00-l);
  --color-00: hsl(var(--h), var(--s), var(--00-l));
  --05-l: var(--bulma-primary-05-l);
  --color-05: hsl(var(--h), var(--s), var(--05-l));
  --10-l: var(--bulma-primary-10-l);
  --color-10: hsl(var(--h), var(--s), var(--10-l));
  --15-l: var(--bulma-primary-15-l);
  --color-15: hsl(var(--h), var(--s), var(--15-l));
  --20-l: var(--bulma-primary-20-l);
  --color-20: hsl(var(--h), var(--s), var(--20-l));
  --25-l: var(--bulma-primary-25-l);
  --color-25: hsl(var(--h), var(--s), var(--25-l));
  --30-l: var(--bulma-primary-30-l);
  --color-30: hsl(var(--h), var(--s), var(--30-l));
  --35-l: var(--bulma-primary-35-l);
  --color-35: hsl(var(--h), var(--s), var(--35-l));
  --40-l: var(--bulma-primary-40-l);
  --color-40: hsl(var(--h), var(--s), var(--40-l));
  --45-l: var(--bulma-primary-45-l);
  --color-45: hsl(var(--h), var(--s), var(--45-l));
  --50-l: var(--bulma-primary-50-l);
  --color-50: hsl(var(--h), var(--s), var(--50-l));
  --55-l: var(--bulma-primary-55-l);
  --color-55: hsl(var(--h), var(--s), var(--55-l));
  --60-l: var(--bulma-primary-60-l);
  --color-60: hsl(var(--h), var(--s), var(--60-l));
  --65-l: var(--bulma-primary-65-l);
  --color-65: hsl(var(--h), var(--s), var(--65-l));
  --70-l: var(--bulma-primary-70-l);
  --color-70: hsl(var(--h), var(--s), var(--70-l));
  --75-l: var(--bulma-primary-75-l);
  --color-75: hsl(var(--h), var(--s), var(--75-l));
  --80-l: var(--bulma-primary-80-l);
  --color-80: hsl(var(--h), var(--s), var(--80-l));
  --85-l: var(--bulma-primary-85-l);
  --color-85: hsl(var(--h), var(--s), var(--85-l));
  --90-l: var(--bulma-primary-90-l);
  --color-90: hsl(var(--h), var(--s), var(--90-l));
  --95-l: var(--bulma-primary-95-l);
  --color-95: hsl(var(--h), var(--s), var(--95-l));
  --100-l: var(--bulma-primary-100-l);
  --color-100: hsl(var(--h), var(--s), var(--100-l));
}

[class*=is-color-link],
[class*=has-text-link] {
  --bulma-color-l: var(--bulma-link-l);
  --bulma-color-l-delta: 0%;
  color: hsl(var(--bulma-link-h), var(--bulma-link-s), calc(var(--bulma-color-l) + var(--bulma-color-l-delta))) !important;
}

[class*=is-background-link],
[class*=has-background-link] {
  --bulma-background-l: var(--bulma-link-l);
  --bulma-background-l-delta: 0%;
  background-color: hsl(var(--bulma-link-h), var(--bulma-link-s), calc(var(--bulma-background-l) + var(--bulma-background-l-delta))) !important;
}

.is-color-link-invert,
.has-text-link-invert {
  --bulma-color-l: var(--bulma-link-invert-l);
}

.is-background-link-invert,
.has-background-link-invert {
  --bulma-background-l: var(--bulma-link-invert-l);
}

.is-color-link-on-scheme,
.has-text-link-on-scheme {
  --bulma-color-l: var(--bulma-link-on-scheme-l);
}

.is-background-link-on-scheme,
.has-background-link-on-scheme {
  --bulma-background-l: var(--bulma-link-on-scheme-l);
}

.is-color-link-light,
.has-text-link-light {
  --bulma-color-l: var(--bulma-link-light-l);
}

.is-background-link-light,
.has-background-link-light {
  --bulma-background-l: var(--bulma-link-light-l);
}

.is-color-link-light-invert,
.has-text-link-light-invert {
  --bulma-color-l: var(--bulma-link-light-invert-l);
}

.is-background-link-light-invert,
.has-background-link-light-invert {
  --bulma-background-l: var(--bulma-link-light-invert-l);
}

.is-color-link-dark,
.has-text-link-dark {
  --bulma-color-l: var(--bulma-link-dark-l);
}

.is-background-link-dark,
.has-background-link-dark {
  --bulma-background-l: var(--bulma-link-dark-l);
}

.is-color-link-dark-invert,
.has-text-link-dark-invert {
  --bulma-color-l: var(--bulma-link-dark-invert-l);
}

.is-background-link-dark-invert,
.has-background-link-dark-invert {
  --bulma-background-l: var(--bulma-link-dark-invert-l);
}

.is-color-link-soft,
.has-text-link-soft {
  --bulma-color-l: var(--bulma-soft-l);
}

.is-background-link-soft,
.has-background-link-soft {
  --bulma-background-l: var(--bulma-soft-l);
}

.is-color-link-bold,
.has-text-link-bold {
  --bulma-color-l: var(--bulma-bold-l);
}

.is-background-link-bold,
.has-background-link-bold {
  --bulma-background-l: var(--bulma-bold-l);
}

.is-color-link-soft-invert,
.has-text-link-soft-invert {
  --bulma-color-l: var(--bulma-soft-invert-l);
}

.is-background-link-soft-invert,
.has-background-link-soft-invert {
  --bulma-background-l: var(--bulma-soft-invert-l);
}

.is-color-link-bold-invert,
.has-text-link-bold-invert {
  --bulma-color-l: var(--bulma-bold-invert-l);
}

.is-background-link-bold-invert,
.has-background-link-bold-invert {
  --bulma-background-l: var(--bulma-bold-invert-l);
}

.is-color-link-00,
.has-text-link-00 {
  --bulma-color-l: var(--bulma-link-00-l);
}

.is-background-link-00,
.has-background-link-00 {
  --bulma-background-l: var(--bulma-link-00-l);
}

.is-color-link-00-invert,
.has-text-link-00-invert {
  --bulma-color-l: var(--bulma-link-00-invert-l);
}

.is-background-link-00-invert,
.has-background-link-00-invert {
  --bulma-background-l: var(--bulma-link-00-invert-l);
}

.is-color-link-05,
.has-text-link-05 {
  --bulma-color-l: var(--bulma-link-05-l);
}

.is-background-link-05,
.has-background-link-05 {
  --bulma-background-l: var(--bulma-link-05-l);
}

.is-color-link-05-invert,
.has-text-link-05-invert {
  --bulma-color-l: var(--bulma-link-05-invert-l);
}

.is-background-link-05-invert,
.has-background-link-05-invert {
  --bulma-background-l: var(--bulma-link-05-invert-l);
}

.is-color-link-10,
.has-text-link-10 {
  --bulma-color-l: var(--bulma-link-10-l);
}

.is-background-link-10,
.has-background-link-10 {
  --bulma-background-l: var(--bulma-link-10-l);
}

.is-color-link-10-invert,
.has-text-link-10-invert {
  --bulma-color-l: var(--bulma-link-10-invert-l);
}

.is-background-link-10-invert,
.has-background-link-10-invert {
  --bulma-background-l: var(--bulma-link-10-invert-l);
}

.is-color-link-15,
.has-text-link-15 {
  --bulma-color-l: var(--bulma-link-15-l);
}

.is-background-link-15,
.has-background-link-15 {
  --bulma-background-l: var(--bulma-link-15-l);
}

.is-color-link-15-invert,
.has-text-link-15-invert {
  --bulma-color-l: var(--bulma-link-15-invert-l);
}

.is-background-link-15-invert,
.has-background-link-15-invert {
  --bulma-background-l: var(--bulma-link-15-invert-l);
}

.is-color-link-20,
.has-text-link-20 {
  --bulma-color-l: var(--bulma-link-20-l);
}

.is-background-link-20,
.has-background-link-20 {
  --bulma-background-l: var(--bulma-link-20-l);
}

.is-color-link-20-invert,
.has-text-link-20-invert {
  --bulma-color-l: var(--bulma-link-20-invert-l);
}

.is-background-link-20-invert,
.has-background-link-20-invert {
  --bulma-background-l: var(--bulma-link-20-invert-l);
}

.is-color-link-25,
.has-text-link-25 {
  --bulma-color-l: var(--bulma-link-25-l);
}

.is-background-link-25,
.has-background-link-25 {
  --bulma-background-l: var(--bulma-link-25-l);
}

.is-color-link-25-invert,
.has-text-link-25-invert {
  --bulma-color-l: var(--bulma-link-25-invert-l);
}

.is-background-link-25-invert,
.has-background-link-25-invert {
  --bulma-background-l: var(--bulma-link-25-invert-l);
}

.is-color-link-30,
.has-text-link-30 {
  --bulma-color-l: var(--bulma-link-30-l);
}

.is-background-link-30,
.has-background-link-30 {
  --bulma-background-l: var(--bulma-link-30-l);
}

.is-color-link-30-invert,
.has-text-link-30-invert {
  --bulma-color-l: var(--bulma-link-30-invert-l);
}

.is-background-link-30-invert,
.has-background-link-30-invert {
  --bulma-background-l: var(--bulma-link-30-invert-l);
}

.is-color-link-35,
.has-text-link-35 {
  --bulma-color-l: var(--bulma-link-35-l);
}

.is-background-link-35,
.has-background-link-35 {
  --bulma-background-l: var(--bulma-link-35-l);
}

.is-color-link-35-invert,
.has-text-link-35-invert {
  --bulma-color-l: var(--bulma-link-35-invert-l);
}

.is-background-link-35-invert,
.has-background-link-35-invert {
  --bulma-background-l: var(--bulma-link-35-invert-l);
}

.is-color-link-40,
.has-text-link-40 {
  --bulma-color-l: var(--bulma-link-40-l);
}

.is-background-link-40,
.has-background-link-40 {
  --bulma-background-l: var(--bulma-link-40-l);
}

.is-color-link-40-invert,
.has-text-link-40-invert {
  --bulma-color-l: var(--bulma-link-40-invert-l);
}

.is-background-link-40-invert,
.has-background-link-40-invert {
  --bulma-background-l: var(--bulma-link-40-invert-l);
}

.is-color-link-45,
.has-text-link-45 {
  --bulma-color-l: var(--bulma-link-45-l);
}

.is-background-link-45,
.has-background-link-45 {
  --bulma-background-l: var(--bulma-link-45-l);
}

.is-color-link-45-invert,
.has-text-link-45-invert {
  --bulma-color-l: var(--bulma-link-45-invert-l);
}

.is-background-link-45-invert,
.has-background-link-45-invert {
  --bulma-background-l: var(--bulma-link-45-invert-l);
}

.is-color-link-50,
.has-text-link-50 {
  --bulma-color-l: var(--bulma-link-50-l);
}

.is-background-link-50,
.has-background-link-50 {
  --bulma-background-l: var(--bulma-link-50-l);
}

.is-color-link-50-invert,
.has-text-link-50-invert {
  --bulma-color-l: var(--bulma-link-50-invert-l);
}

.is-background-link-50-invert,
.has-background-link-50-invert {
  --bulma-background-l: var(--bulma-link-50-invert-l);
}

.is-color-link-55,
.has-text-link-55 {
  --bulma-color-l: var(--bulma-link-55-l);
}

.is-background-link-55,
.has-background-link-55 {
  --bulma-background-l: var(--bulma-link-55-l);
}

.is-color-link-55-invert,
.has-text-link-55-invert {
  --bulma-color-l: var(--bulma-link-55-invert-l);
}

.is-background-link-55-invert,
.has-background-link-55-invert {
  --bulma-background-l: var(--bulma-link-55-invert-l);
}

.is-color-link-60,
.has-text-link-60 {
  --bulma-color-l: var(--bulma-link-60-l);
}

.is-background-link-60,
.has-background-link-60 {
  --bulma-background-l: var(--bulma-link-60-l);
}

.is-color-link-60-invert,
.has-text-link-60-invert {
  --bulma-color-l: var(--bulma-link-60-invert-l);
}

.is-background-link-60-invert,
.has-background-link-60-invert {
  --bulma-background-l: var(--bulma-link-60-invert-l);
}

.is-color-link-65,
.has-text-link-65 {
  --bulma-color-l: var(--bulma-link-65-l);
}

.is-background-link-65,
.has-background-link-65 {
  --bulma-background-l: var(--bulma-link-65-l);
}

.is-color-link-65-invert,
.has-text-link-65-invert {
  --bulma-color-l: var(--bulma-link-65-invert-l);
}

.is-background-link-65-invert,
.has-background-link-65-invert {
  --bulma-background-l: var(--bulma-link-65-invert-l);
}

.is-color-link-70,
.has-text-link-70 {
  --bulma-color-l: var(--bulma-link-70-l);
}

.is-background-link-70,
.has-background-link-70 {
  --bulma-background-l: var(--bulma-link-70-l);
}

.is-color-link-70-invert,
.has-text-link-70-invert {
  --bulma-color-l: var(--bulma-link-70-invert-l);
}

.is-background-link-70-invert,
.has-background-link-70-invert {
  --bulma-background-l: var(--bulma-link-70-invert-l);
}

.is-color-link-75,
.has-text-link-75 {
  --bulma-color-l: var(--bulma-link-75-l);
}

.is-background-link-75,
.has-background-link-75 {
  --bulma-background-l: var(--bulma-link-75-l);
}

.is-color-link-75-invert,
.has-text-link-75-invert {
  --bulma-color-l: var(--bulma-link-75-invert-l);
}

.is-background-link-75-invert,
.has-background-link-75-invert {
  --bulma-background-l: var(--bulma-link-75-invert-l);
}

.is-color-link-80,
.has-text-link-80 {
  --bulma-color-l: var(--bulma-link-80-l);
}

.is-background-link-80,
.has-background-link-80 {
  --bulma-background-l: var(--bulma-link-80-l);
}

.is-color-link-80-invert,
.has-text-link-80-invert {
  --bulma-color-l: var(--bulma-link-80-invert-l);
}

.is-background-link-80-invert,
.has-background-link-80-invert {
  --bulma-background-l: var(--bulma-link-80-invert-l);
}

.is-color-link-85,
.has-text-link-85 {
  --bulma-color-l: var(--bulma-link-85-l);
}

.is-background-link-85,
.has-background-link-85 {
  --bulma-background-l: var(--bulma-link-85-l);
}

.is-color-link-85-invert,
.has-text-link-85-invert {
  --bulma-color-l: var(--bulma-link-85-invert-l);
}

.is-background-link-85-invert,
.has-background-link-85-invert {
  --bulma-background-l: var(--bulma-link-85-invert-l);
}

.is-color-link-90,
.has-text-link-90 {
  --bulma-color-l: var(--bulma-link-90-l);
}

.is-background-link-90,
.has-background-link-90 {
  --bulma-background-l: var(--bulma-link-90-l);
}

.is-color-link-90-invert,
.has-text-link-90-invert {
  --bulma-color-l: var(--bulma-link-90-invert-l);
}

.is-background-link-90-invert,
.has-background-link-90-invert {
  --bulma-background-l: var(--bulma-link-90-invert-l);
}

.is-color-link-95,
.has-text-link-95 {
  --bulma-color-l: var(--bulma-link-95-l);
}

.is-background-link-95,
.has-background-link-95 {
  --bulma-background-l: var(--bulma-link-95-l);
}

.is-color-link-95-invert,
.has-text-link-95-invert {
  --bulma-color-l: var(--bulma-link-95-invert-l);
}

.is-background-link-95-invert,
.has-background-link-95-invert {
  --bulma-background-l: var(--bulma-link-95-invert-l);
}

.is-color-link-100,
.has-text-link-100 {
  --bulma-color-l: var(--bulma-link-100-l);
}

.is-background-link-100,
.has-background-link-100 {
  --bulma-background-l: var(--bulma-link-100-l);
}

.is-color-link-100-invert,
.has-text-link-100-invert {
  --bulma-color-l: var(--bulma-link-100-invert-l);
}

.is-background-link-100-invert,
.has-background-link-100-invert {
  --bulma-background-l: var(--bulma-link-100-invert-l);
}

a.is-color-link:hover, a.is-color-link:focus-visible,
button.is-color-link:hover,
button.is-color-link:focus-visible,
is-color-link.is-hoverable:hover,
is-color-link.is-hoverable:focus-visible,
a.has-text-link:hover,
a.has-text-link:focus-visible,
button.has-text-link:hover,
button.has-text-link:focus-visible,
has-text-link.is-hoverable:hover,
has-text-link.is-hoverable:focus-visible {
  --bulma-color-l-delta: var(--bulma-hover-color-l-delta);
}
a.is-color-link:active,
button.is-color-link:active,
is-color-link.is-hoverable:active,
a.has-text-link:active,
button.has-text-link:active,
has-text-link.is-hoverable:active {
  --bulma-color-l-delta: var(--bulma-active-color-l-delta);
}

a.is-background-link:hover, a.is-background-link:focus-visible,
button.is-background-link:hover,
button.is-background-link:focus-visible,
is-background-link.is-hoverable:hover,
is-background-link.is-hoverable:focus-visible,
a.has-background-link:hover,
a.has-background-link:focus-visible,
button.has-background-link:hover,
button.has-background-link:focus-visible,
has-background-link.is-hoverable:hover,
has-background-link.is-hoverable:focus-visible {
  --bulma-background-l-delta: var(--bulma-hover-background-l-delta);
}
a.is-background-link:active,
button.is-background-link:active,
is-background-link.is-hoverable:active,
a.has-background-link:active,
button.has-background-link:active,
has-background-link.is-hoverable:active {
  --bulma-background-l-delta: var(--bulma-active-background-l-delta);
}

.is-palette-link {
  --h: var(--bulma-link-h);
  --s: var(--bulma-link-s);
  --l: var(--bulma-link-l);
  --color: hsl(var(--h), var(--s), var(--l));
  --00-l: var(--bulma-link-00-l);
  --color-00: hsl(var(--h), var(--s), var(--00-l));
  --05-l: var(--bulma-link-05-l);
  --color-05: hsl(var(--h), var(--s), var(--05-l));
  --10-l: var(--bulma-link-10-l);
  --color-10: hsl(var(--h), var(--s), var(--10-l));
  --15-l: var(--bulma-link-15-l);
  --color-15: hsl(var(--h), var(--s), var(--15-l));
  --20-l: var(--bulma-link-20-l);
  --color-20: hsl(var(--h), var(--s), var(--20-l));
  --25-l: var(--bulma-link-25-l);
  --color-25: hsl(var(--h), var(--s), var(--25-l));
  --30-l: var(--bulma-link-30-l);
  --color-30: hsl(var(--h), var(--s), var(--30-l));
  --35-l: var(--bulma-link-35-l);
  --color-35: hsl(var(--h), var(--s), var(--35-l));
  --40-l: var(--bulma-link-40-l);
  --color-40: hsl(var(--h), var(--s), var(--40-l));
  --45-l: var(--bulma-link-45-l);
  --color-45: hsl(var(--h), var(--s), var(--45-l));
  --50-l: var(--bulma-link-50-l);
  --color-50: hsl(var(--h), var(--s), var(--50-l));
  --55-l: var(--bulma-link-55-l);
  --color-55: hsl(var(--h), var(--s), var(--55-l));
  --60-l: var(--bulma-link-60-l);
  --color-60: hsl(var(--h), var(--s), var(--60-l));
  --65-l: var(--bulma-link-65-l);
  --color-65: hsl(var(--h), var(--s), var(--65-l));
  --70-l: var(--bulma-link-70-l);
  --color-70: hsl(var(--h), var(--s), var(--70-l));
  --75-l: var(--bulma-link-75-l);
  --color-75: hsl(var(--h), var(--s), var(--75-l));
  --80-l: var(--bulma-link-80-l);
  --color-80: hsl(var(--h), var(--s), var(--80-l));
  --85-l: var(--bulma-link-85-l);
  --color-85: hsl(var(--h), var(--s), var(--85-l));
  --90-l: var(--bulma-link-90-l);
  --color-90: hsl(var(--h), var(--s), var(--90-l));
  --95-l: var(--bulma-link-95-l);
  --color-95: hsl(var(--h), var(--s), var(--95-l));
  --100-l: var(--bulma-link-100-l);
  --color-100: hsl(var(--h), var(--s), var(--100-l));
}

[class*=is-color-info],
[class*=has-text-info] {
  --bulma-color-l: var(--bulma-info-l);
  --bulma-color-l-delta: 0%;
  color: hsl(var(--bulma-info-h), var(--bulma-info-s), calc(var(--bulma-color-l) + var(--bulma-color-l-delta))) !important;
}

[class*=is-background-info],
[class*=has-background-info] {
  --bulma-background-l: var(--bulma-info-l);
  --bulma-background-l-delta: 0%;
  background-color: hsl(var(--bulma-info-h), var(--bulma-info-s), calc(var(--bulma-background-l) + var(--bulma-background-l-delta))) !important;
}

.is-color-info-invert,
.has-text-info-invert {
  --bulma-color-l: var(--bulma-info-invert-l);
}

.is-background-info-invert,
.has-background-info-invert {
  --bulma-background-l: var(--bulma-info-invert-l);
}

.is-color-info-on-scheme,
.has-text-info-on-scheme {
  --bulma-color-l: var(--bulma-info-on-scheme-l);
}

.is-background-info-on-scheme,
.has-background-info-on-scheme {
  --bulma-background-l: var(--bulma-info-on-scheme-l);
}

.is-color-info-light,
.has-text-info-light {
  --bulma-color-l: var(--bulma-info-light-l);
}

.is-background-info-light,
.has-background-info-light {
  --bulma-background-l: var(--bulma-info-light-l);
}

.is-color-info-light-invert,
.has-text-info-light-invert {
  --bulma-color-l: var(--bulma-info-light-invert-l);
}

.is-background-info-light-invert,
.has-background-info-light-invert {
  --bulma-background-l: var(--bulma-info-light-invert-l);
}

.is-color-info-dark,
.has-text-info-dark {
  --bulma-color-l: var(--bulma-info-dark-l);
}

.is-background-info-dark,
.has-background-info-dark {
  --bulma-background-l: var(--bulma-info-dark-l);
}

.is-color-info-dark-invert,
.has-text-info-dark-invert {
  --bulma-color-l: var(--bulma-info-dark-invert-l);
}

.is-background-info-dark-invert,
.has-background-info-dark-invert {
  --bulma-background-l: var(--bulma-info-dark-invert-l);
}

.is-color-info-soft,
.has-text-info-soft {
  --bulma-color-l: var(--bulma-soft-l);
}

.is-background-info-soft,
.has-background-info-soft {
  --bulma-background-l: var(--bulma-soft-l);
}

.is-color-info-bold,
.has-text-info-bold {
  --bulma-color-l: var(--bulma-bold-l);
}

.is-background-info-bold,
.has-background-info-bold {
  --bulma-background-l: var(--bulma-bold-l);
}

.is-color-info-soft-invert,
.has-text-info-soft-invert {
  --bulma-color-l: var(--bulma-soft-invert-l);
}

.is-background-info-soft-invert,
.has-background-info-soft-invert {
  --bulma-background-l: var(--bulma-soft-invert-l);
}

.is-color-info-bold-invert,
.has-text-info-bold-invert {
  --bulma-color-l: var(--bulma-bold-invert-l);
}

.is-background-info-bold-invert,
.has-background-info-bold-invert {
  --bulma-background-l: var(--bulma-bold-invert-l);
}

.is-color-info-00,
.has-text-info-00 {
  --bulma-color-l: var(--bulma-info-00-l);
}

.is-background-info-00,
.has-background-info-00 {
  --bulma-background-l: var(--bulma-info-00-l);
}

.is-color-info-00-invert,
.has-text-info-00-invert {
  --bulma-color-l: var(--bulma-info-00-invert-l);
}

.is-background-info-00-invert,
.has-background-info-00-invert {
  --bulma-background-l: var(--bulma-info-00-invert-l);
}

.is-color-info-05,
.has-text-info-05 {
  --bulma-color-l: var(--bulma-info-05-l);
}

.is-background-info-05,
.has-background-info-05 {
  --bulma-background-l: var(--bulma-info-05-l);
}

.is-color-info-05-invert,
.has-text-info-05-invert {
  --bulma-color-l: var(--bulma-info-05-invert-l);
}

.is-background-info-05-invert,
.has-background-info-05-invert {
  --bulma-background-l: var(--bulma-info-05-invert-l);
}

.is-color-info-10,
.has-text-info-10 {
  --bulma-color-l: var(--bulma-info-10-l);
}

.is-background-info-10,
.has-background-info-10 {
  --bulma-background-l: var(--bulma-info-10-l);
}

.is-color-info-10-invert,
.has-text-info-10-invert {
  --bulma-color-l: var(--bulma-info-10-invert-l);
}

.is-background-info-10-invert,
.has-background-info-10-invert {
  --bulma-background-l: var(--bulma-info-10-invert-l);
}

.is-color-info-15,
.has-text-info-15 {
  --bulma-color-l: var(--bulma-info-15-l);
}

.is-background-info-15,
.has-background-info-15 {
  --bulma-background-l: var(--bulma-info-15-l);
}

.is-color-info-15-invert,
.has-text-info-15-invert {
  --bulma-color-l: var(--bulma-info-15-invert-l);
}

.is-background-info-15-invert,
.has-background-info-15-invert {
  --bulma-background-l: var(--bulma-info-15-invert-l);
}

.is-color-info-20,
.has-text-info-20 {
  --bulma-color-l: var(--bulma-info-20-l);
}

.is-background-info-20,
.has-background-info-20 {
  --bulma-background-l: var(--bulma-info-20-l);
}

.is-color-info-20-invert,
.has-text-info-20-invert {
  --bulma-color-l: var(--bulma-info-20-invert-l);
}

.is-background-info-20-invert,
.has-background-info-20-invert {
  --bulma-background-l: var(--bulma-info-20-invert-l);
}

.is-color-info-25,
.has-text-info-25 {
  --bulma-color-l: var(--bulma-info-25-l);
}

.is-background-info-25,
.has-background-info-25 {
  --bulma-background-l: var(--bulma-info-25-l);
}

.is-color-info-25-invert,
.has-text-info-25-invert {
  --bulma-color-l: var(--bulma-info-25-invert-l);
}

.is-background-info-25-invert,
.has-background-info-25-invert {
  --bulma-background-l: var(--bulma-info-25-invert-l);
}

.is-color-info-30,
.has-text-info-30 {
  --bulma-color-l: var(--bulma-info-30-l);
}

.is-background-info-30,
.has-background-info-30 {
  --bulma-background-l: var(--bulma-info-30-l);
}

.is-color-info-30-invert,
.has-text-info-30-invert {
  --bulma-color-l: var(--bulma-info-30-invert-l);
}

.is-background-info-30-invert,
.has-background-info-30-invert {
  --bulma-background-l: var(--bulma-info-30-invert-l);
}

.is-color-info-35,
.has-text-info-35 {
  --bulma-color-l: var(--bulma-info-35-l);
}

.is-background-info-35,
.has-background-info-35 {
  --bulma-background-l: var(--bulma-info-35-l);
}

.is-color-info-35-invert,
.has-text-info-35-invert {
  --bulma-color-l: var(--bulma-info-35-invert-l);
}

.is-background-info-35-invert,
.has-background-info-35-invert {
  --bulma-background-l: var(--bulma-info-35-invert-l);
}

.is-color-info-40,
.has-text-info-40 {
  --bulma-color-l: var(--bulma-info-40-l);
}

.is-background-info-40,
.has-background-info-40 {
  --bulma-background-l: var(--bulma-info-40-l);
}

.is-color-info-40-invert,
.has-text-info-40-invert {
  --bulma-color-l: var(--bulma-info-40-invert-l);
}

.is-background-info-40-invert,
.has-background-info-40-invert {
  --bulma-background-l: var(--bulma-info-40-invert-l);
}

.is-color-info-45,
.has-text-info-45 {
  --bulma-color-l: var(--bulma-info-45-l);
}

.is-background-info-45,
.has-background-info-45 {
  --bulma-background-l: var(--bulma-info-45-l);
}

.is-color-info-45-invert,
.has-text-info-45-invert {
  --bulma-color-l: var(--bulma-info-45-invert-l);
}

.is-background-info-45-invert,
.has-background-info-45-invert {
  --bulma-background-l: var(--bulma-info-45-invert-l);
}

.is-color-info-50,
.has-text-info-50 {
  --bulma-color-l: var(--bulma-info-50-l);
}

.is-background-info-50,
.has-background-info-50 {
  --bulma-background-l: var(--bulma-info-50-l);
}

.is-color-info-50-invert,
.has-text-info-50-invert {
  --bulma-color-l: var(--bulma-info-50-invert-l);
}

.is-background-info-50-invert,
.has-background-info-50-invert {
  --bulma-background-l: var(--bulma-info-50-invert-l);
}

.is-color-info-55,
.has-text-info-55 {
  --bulma-color-l: var(--bulma-info-55-l);
}

.is-background-info-55,
.has-background-info-55 {
  --bulma-background-l: var(--bulma-info-55-l);
}

.is-color-info-55-invert,
.has-text-info-55-invert {
  --bulma-color-l: var(--bulma-info-55-invert-l);
}

.is-background-info-55-invert,
.has-background-info-55-invert {
  --bulma-background-l: var(--bulma-info-55-invert-l);
}

.is-color-info-60,
.has-text-info-60 {
  --bulma-color-l: var(--bulma-info-60-l);
}

.is-background-info-60,
.has-background-info-60 {
  --bulma-background-l: var(--bulma-info-60-l);
}

.is-color-info-60-invert,
.has-text-info-60-invert {
  --bulma-color-l: var(--bulma-info-60-invert-l);
}

.is-background-info-60-invert,
.has-background-info-60-invert {
  --bulma-background-l: var(--bulma-info-60-invert-l);
}

.is-color-info-65,
.has-text-info-65 {
  --bulma-color-l: var(--bulma-info-65-l);
}

.is-background-info-65,
.has-background-info-65 {
  --bulma-background-l: var(--bulma-info-65-l);
}

.is-color-info-65-invert,
.has-text-info-65-invert {
  --bulma-color-l: var(--bulma-info-65-invert-l);
}

.is-background-info-65-invert,
.has-background-info-65-invert {
  --bulma-background-l: var(--bulma-info-65-invert-l);
}

.is-color-info-70,
.has-text-info-70 {
  --bulma-color-l: var(--bulma-info-70-l);
}

.is-background-info-70,
.has-background-info-70 {
  --bulma-background-l: var(--bulma-info-70-l);
}

.is-color-info-70-invert,
.has-text-info-70-invert {
  --bulma-color-l: var(--bulma-info-70-invert-l);
}

.is-background-info-70-invert,
.has-background-info-70-invert {
  --bulma-background-l: var(--bulma-info-70-invert-l);
}

.is-color-info-75,
.has-text-info-75 {
  --bulma-color-l: var(--bulma-info-75-l);
}

.is-background-info-75,
.has-background-info-75 {
  --bulma-background-l: var(--bulma-info-75-l);
}

.is-color-info-75-invert,
.has-text-info-75-invert {
  --bulma-color-l: var(--bulma-info-75-invert-l);
}

.is-background-info-75-invert,
.has-background-info-75-invert {
  --bulma-background-l: var(--bulma-info-75-invert-l);
}

.is-color-info-80,
.has-text-info-80 {
  --bulma-color-l: var(--bulma-info-80-l);
}

.is-background-info-80,
.has-background-info-80 {
  --bulma-background-l: var(--bulma-info-80-l);
}

.is-color-info-80-invert,
.has-text-info-80-invert {
  --bulma-color-l: var(--bulma-info-80-invert-l);
}

.is-background-info-80-invert,
.has-background-info-80-invert {
  --bulma-background-l: var(--bulma-info-80-invert-l);
}

.is-color-info-85,
.has-text-info-85 {
  --bulma-color-l: var(--bulma-info-85-l);
}

.is-background-info-85,
.has-background-info-85 {
  --bulma-background-l: var(--bulma-info-85-l);
}

.is-color-info-85-invert,
.has-text-info-85-invert {
  --bulma-color-l: var(--bulma-info-85-invert-l);
}

.is-background-info-85-invert,
.has-background-info-85-invert {
  --bulma-background-l: var(--bulma-info-85-invert-l);
}

.is-color-info-90,
.has-text-info-90 {
  --bulma-color-l: var(--bulma-info-90-l);
}

.is-background-info-90,
.has-background-info-90 {
  --bulma-background-l: var(--bulma-info-90-l);
}

.is-color-info-90-invert,
.has-text-info-90-invert {
  --bulma-color-l: var(--bulma-info-90-invert-l);
}

.is-background-info-90-invert,
.has-background-info-90-invert {
  --bulma-background-l: var(--bulma-info-90-invert-l);
}

.is-color-info-95,
.has-text-info-95 {
  --bulma-color-l: var(--bulma-info-95-l);
}

.is-background-info-95,
.has-background-info-95 {
  --bulma-background-l: var(--bulma-info-95-l);
}

.is-color-info-95-invert,
.has-text-info-95-invert {
  --bulma-color-l: var(--bulma-info-95-invert-l);
}

.is-background-info-95-invert,
.has-background-info-95-invert {
  --bulma-background-l: var(--bulma-info-95-invert-l);
}

.is-color-info-100,
.has-text-info-100 {
  --bulma-color-l: var(--bulma-info-100-l);
}

.is-background-info-100,
.has-background-info-100 {
  --bulma-background-l: var(--bulma-info-100-l);
}

.is-color-info-100-invert,
.has-text-info-100-invert {
  --bulma-color-l: var(--bulma-info-100-invert-l);
}

.is-background-info-100-invert,
.has-background-info-100-invert {
  --bulma-background-l: var(--bulma-info-100-invert-l);
}

a.is-color-info:hover, a.is-color-info:focus-visible,
button.is-color-info:hover,
button.is-color-info:focus-visible,
is-color-info.is-hoverable:hover,
is-color-info.is-hoverable:focus-visible,
a.has-text-info:hover,
a.has-text-info:focus-visible,
button.has-text-info:hover,
button.has-text-info:focus-visible,
has-text-info.is-hoverable:hover,
has-text-info.is-hoverable:focus-visible {
  --bulma-color-l-delta: var(--bulma-hover-color-l-delta);
}
a.is-color-info:active,
button.is-color-info:active,
is-color-info.is-hoverable:active,
a.has-text-info:active,
button.has-text-info:active,
has-text-info.is-hoverable:active {
  --bulma-color-l-delta: var(--bulma-active-color-l-delta);
}

a.is-background-info:hover, a.is-background-info:focus-visible,
button.is-background-info:hover,
button.is-background-info:focus-visible,
is-background-info.is-hoverable:hover,
is-background-info.is-hoverable:focus-visible,
a.has-background-info:hover,
a.has-background-info:focus-visible,
button.has-background-info:hover,
button.has-background-info:focus-visible,
has-background-info.is-hoverable:hover,
has-background-info.is-hoverable:focus-visible {
  --bulma-background-l-delta: var(--bulma-hover-background-l-delta);
}
a.is-background-info:active,
button.is-background-info:active,
is-background-info.is-hoverable:active,
a.has-background-info:active,
button.has-background-info:active,
has-background-info.is-hoverable:active {
  --bulma-background-l-delta: var(--bulma-active-background-l-delta);
}

.is-palette-info {
  --h: var(--bulma-info-h);
  --s: var(--bulma-info-s);
  --l: var(--bulma-info-l);
  --color: hsl(var(--h), var(--s), var(--l));
  --00-l: var(--bulma-info-00-l);
  --color-00: hsl(var(--h), var(--s), var(--00-l));
  --05-l: var(--bulma-info-05-l);
  --color-05: hsl(var(--h), var(--s), var(--05-l));
  --10-l: var(--bulma-info-10-l);
  --color-10: hsl(var(--h), var(--s), var(--10-l));
  --15-l: var(--bulma-info-15-l);
  --color-15: hsl(var(--h), var(--s), var(--15-l));
  --20-l: var(--bulma-info-20-l);
  --color-20: hsl(var(--h), var(--s), var(--20-l));
  --25-l: var(--bulma-info-25-l);
  --color-25: hsl(var(--h), var(--s), var(--25-l));
  --30-l: var(--bulma-info-30-l);
  --color-30: hsl(var(--h), var(--s), var(--30-l));
  --35-l: var(--bulma-info-35-l);
  --color-35: hsl(var(--h), var(--s), var(--35-l));
  --40-l: var(--bulma-info-40-l);
  --color-40: hsl(var(--h), var(--s), var(--40-l));
  --45-l: var(--bulma-info-45-l);
  --color-45: hsl(var(--h), var(--s), var(--45-l));
  --50-l: var(--bulma-info-50-l);
  --color-50: hsl(var(--h), var(--s), var(--50-l));
  --55-l: var(--bulma-info-55-l);
  --color-55: hsl(var(--h), var(--s), var(--55-l));
  --60-l: var(--bulma-info-60-l);
  --color-60: hsl(var(--h), var(--s), var(--60-l));
  --65-l: var(--bulma-info-65-l);
  --color-65: hsl(var(--h), var(--s), var(--65-l));
  --70-l: var(--bulma-info-70-l);
  --color-70: hsl(var(--h), var(--s), var(--70-l));
  --75-l: var(--bulma-info-75-l);
  --color-75: hsl(var(--h), var(--s), var(--75-l));
  --80-l: var(--bulma-info-80-l);
  --color-80: hsl(var(--h), var(--s), var(--80-l));
  --85-l: var(--bulma-info-85-l);
  --color-85: hsl(var(--h), var(--s), var(--85-l));
  --90-l: var(--bulma-info-90-l);
  --color-90: hsl(var(--h), var(--s), var(--90-l));
  --95-l: var(--bulma-info-95-l);
  --color-95: hsl(var(--h), var(--s), var(--95-l));
  --100-l: var(--bulma-info-100-l);
  --color-100: hsl(var(--h), var(--s), var(--100-l));
}

[class*=is-color-success],
[class*=has-text-success] {
  --bulma-color-l: var(--bulma-success-l);
  --bulma-color-l-delta: 0%;
  color: hsl(var(--bulma-success-h), var(--bulma-success-s), calc(var(--bulma-color-l) + var(--bulma-color-l-delta))) !important;
}

[class*=is-background-success],
[class*=has-background-success] {
  --bulma-background-l: var(--bulma-success-l);
  --bulma-background-l-delta: 0%;
  background-color: hsl(var(--bulma-success-h), var(--bulma-success-s), calc(var(--bulma-background-l) + var(--bulma-background-l-delta))) !important;
}

.is-color-success-invert,
.has-text-success-invert {
  --bulma-color-l: var(--bulma-success-invert-l);
}

.is-background-success-invert,
.has-background-success-invert {
  --bulma-background-l: var(--bulma-success-invert-l);
}

.is-color-success-on-scheme,
.has-text-success-on-scheme {
  --bulma-color-l: var(--bulma-success-on-scheme-l);
}

.is-background-success-on-scheme,
.has-background-success-on-scheme {
  --bulma-background-l: var(--bulma-success-on-scheme-l);
}

.is-color-success-light,
.has-text-success-light {
  --bulma-color-l: var(--bulma-success-light-l);
}

.is-background-success-light,
.has-background-success-light {
  --bulma-background-l: var(--bulma-success-light-l);
}

.is-color-success-light-invert,
.has-text-success-light-invert {
  --bulma-color-l: var(--bulma-success-light-invert-l);
}

.is-background-success-light-invert,
.has-background-success-light-invert {
  --bulma-background-l: var(--bulma-success-light-invert-l);
}

.is-color-success-dark,
.has-text-success-dark {
  --bulma-color-l: var(--bulma-success-dark-l);
}

.is-background-success-dark,
.has-background-success-dark {
  --bulma-background-l: var(--bulma-success-dark-l);
}

.is-color-success-dark-invert,
.has-text-success-dark-invert {
  --bulma-color-l: var(--bulma-success-dark-invert-l);
}

.is-background-success-dark-invert,
.has-background-success-dark-invert {
  --bulma-background-l: var(--bulma-success-dark-invert-l);
}

.is-color-success-soft,
.has-text-success-soft {
  --bulma-color-l: var(--bulma-soft-l);
}

.is-background-success-soft,
.has-background-success-soft {
  --bulma-background-l: var(--bulma-soft-l);
}

.is-color-success-bold,
.has-text-success-bold {
  --bulma-color-l: var(--bulma-bold-l);
}

.is-background-success-bold,
.has-background-success-bold {
  --bulma-background-l: var(--bulma-bold-l);
}

.is-color-success-soft-invert,
.has-text-success-soft-invert {
  --bulma-color-l: var(--bulma-soft-invert-l);
}

.is-background-success-soft-invert,
.has-background-success-soft-invert {
  --bulma-background-l: var(--bulma-soft-invert-l);
}

.is-color-success-bold-invert,
.has-text-success-bold-invert {
  --bulma-color-l: var(--bulma-bold-invert-l);
}

.is-background-success-bold-invert,
.has-background-success-bold-invert {
  --bulma-background-l: var(--bulma-bold-invert-l);
}

.is-color-success-00,
.has-text-success-00 {
  --bulma-color-l: var(--bulma-success-00-l);
}

.is-background-success-00,
.has-background-success-00 {
  --bulma-background-l: var(--bulma-success-00-l);
}

.is-color-success-00-invert,
.has-text-success-00-invert {
  --bulma-color-l: var(--bulma-success-00-invert-l);
}

.is-background-success-00-invert,
.has-background-success-00-invert {
  --bulma-background-l: var(--bulma-success-00-invert-l);
}

.is-color-success-05,
.has-text-success-05 {
  --bulma-color-l: var(--bulma-success-05-l);
}

.is-background-success-05,
.has-background-success-05 {
  --bulma-background-l: var(--bulma-success-05-l);
}

.is-color-success-05-invert,
.has-text-success-05-invert {
  --bulma-color-l: var(--bulma-success-05-invert-l);
}

.is-background-success-05-invert,
.has-background-success-05-invert {
  --bulma-background-l: var(--bulma-success-05-invert-l);
}

.is-color-success-10,
.has-text-success-10 {
  --bulma-color-l: var(--bulma-success-10-l);
}

.is-background-success-10,
.has-background-success-10 {
  --bulma-background-l: var(--bulma-success-10-l);
}

.is-color-success-10-invert,
.has-text-success-10-invert {
  --bulma-color-l: var(--bulma-success-10-invert-l);
}

.is-background-success-10-invert,
.has-background-success-10-invert {
  --bulma-background-l: var(--bulma-success-10-invert-l);
}

.is-color-success-15,
.has-text-success-15 {
  --bulma-color-l: var(--bulma-success-15-l);
}

.is-background-success-15,
.has-background-success-15 {
  --bulma-background-l: var(--bulma-success-15-l);
}

.is-color-success-15-invert,
.has-text-success-15-invert {
  --bulma-color-l: var(--bulma-success-15-invert-l);
}

.is-background-success-15-invert,
.has-background-success-15-invert {
  --bulma-background-l: var(--bulma-success-15-invert-l);
}

.is-color-success-20,
.has-text-success-20 {
  --bulma-color-l: var(--bulma-success-20-l);
}

.is-background-success-20,
.has-background-success-20 {
  --bulma-background-l: var(--bulma-success-20-l);
}

.is-color-success-20-invert,
.has-text-success-20-invert {
  --bulma-color-l: var(--bulma-success-20-invert-l);
}

.is-background-success-20-invert,
.has-background-success-20-invert {
  --bulma-background-l: var(--bulma-success-20-invert-l);
}

.is-color-success-25,
.has-text-success-25 {
  --bulma-color-l: var(--bulma-success-25-l);
}

.is-background-success-25,
.has-background-success-25 {
  --bulma-background-l: var(--bulma-success-25-l);
}

.is-color-success-25-invert,
.has-text-success-25-invert {
  --bulma-color-l: var(--bulma-success-25-invert-l);
}

.is-background-success-25-invert,
.has-background-success-25-invert {
  --bulma-background-l: var(--bulma-success-25-invert-l);
}

.is-color-success-30,
.has-text-success-30 {
  --bulma-color-l: var(--bulma-success-30-l);
}

.is-background-success-30,
.has-background-success-30 {
  --bulma-background-l: var(--bulma-success-30-l);
}

.is-color-success-30-invert,
.has-text-success-30-invert {
  --bulma-color-l: var(--bulma-success-30-invert-l);
}

.is-background-success-30-invert,
.has-background-success-30-invert {
  --bulma-background-l: var(--bulma-success-30-invert-l);
}

.is-color-success-35,
.has-text-success-35 {
  --bulma-color-l: var(--bulma-success-35-l);
}

.is-background-success-35,
.has-background-success-35 {
  --bulma-background-l: var(--bulma-success-35-l);
}

.is-color-success-35-invert,
.has-text-success-35-invert {
  --bulma-color-l: var(--bulma-success-35-invert-l);
}

.is-background-success-35-invert,
.has-background-success-35-invert {
  --bulma-background-l: var(--bulma-success-35-invert-l);
}

.is-color-success-40,
.has-text-success-40 {
  --bulma-color-l: var(--bulma-success-40-l);
}

.is-background-success-40,
.has-background-success-40 {
  --bulma-background-l: var(--bulma-success-40-l);
}

.is-color-success-40-invert,
.has-text-success-40-invert {
  --bulma-color-l: var(--bulma-success-40-invert-l);
}

.is-background-success-40-invert,
.has-background-success-40-invert {
  --bulma-background-l: var(--bulma-success-40-invert-l);
}

.is-color-success-45,
.has-text-success-45 {
  --bulma-color-l: var(--bulma-success-45-l);
}

.is-background-success-45,
.has-background-success-45 {
  --bulma-background-l: var(--bulma-success-45-l);
}

.is-color-success-45-invert,
.has-text-success-45-invert {
  --bulma-color-l: var(--bulma-success-45-invert-l);
}

.is-background-success-45-invert,
.has-background-success-45-invert {
  --bulma-background-l: var(--bulma-success-45-invert-l);
}

.is-color-success-50,
.has-text-success-50 {
  --bulma-color-l: var(--bulma-success-50-l);
}

.is-background-success-50,
.has-background-success-50 {
  --bulma-background-l: var(--bulma-success-50-l);
}

.is-color-success-50-invert,
.has-text-success-50-invert {
  --bulma-color-l: var(--bulma-success-50-invert-l);
}

.is-background-success-50-invert,
.has-background-success-50-invert {
  --bulma-background-l: var(--bulma-success-50-invert-l);
}

.is-color-success-55,
.has-text-success-55 {
  --bulma-color-l: var(--bulma-success-55-l);
}

.is-background-success-55,
.has-background-success-55 {
  --bulma-background-l: var(--bulma-success-55-l);
}

.is-color-success-55-invert,
.has-text-success-55-invert {
  --bulma-color-l: var(--bulma-success-55-invert-l);
}

.is-background-success-55-invert,
.has-background-success-55-invert {
  --bulma-background-l: var(--bulma-success-55-invert-l);
}

.is-color-success-60,
.has-text-success-60 {
  --bulma-color-l: var(--bulma-success-60-l);
}

.is-background-success-60,
.has-background-success-60 {
  --bulma-background-l: var(--bulma-success-60-l);
}

.is-color-success-60-invert,
.has-text-success-60-invert {
  --bulma-color-l: var(--bulma-success-60-invert-l);
}

.is-background-success-60-invert,
.has-background-success-60-invert {
  --bulma-background-l: var(--bulma-success-60-invert-l);
}

.is-color-success-65,
.has-text-success-65 {
  --bulma-color-l: var(--bulma-success-65-l);
}

.is-background-success-65,
.has-background-success-65 {
  --bulma-background-l: var(--bulma-success-65-l);
}

.is-color-success-65-invert,
.has-text-success-65-invert {
  --bulma-color-l: var(--bulma-success-65-invert-l);
}

.is-background-success-65-invert,
.has-background-success-65-invert {
  --bulma-background-l: var(--bulma-success-65-invert-l);
}

.is-color-success-70,
.has-text-success-70 {
  --bulma-color-l: var(--bulma-success-70-l);
}

.is-background-success-70,
.has-background-success-70 {
  --bulma-background-l: var(--bulma-success-70-l);
}

.is-color-success-70-invert,
.has-text-success-70-invert {
  --bulma-color-l: var(--bulma-success-70-invert-l);
}

.is-background-success-70-invert,
.has-background-success-70-invert {
  --bulma-background-l: var(--bulma-success-70-invert-l);
}

.is-color-success-75,
.has-text-success-75 {
  --bulma-color-l: var(--bulma-success-75-l);
}

.is-background-success-75,
.has-background-success-75 {
  --bulma-background-l: var(--bulma-success-75-l);
}

.is-color-success-75-invert,
.has-text-success-75-invert {
  --bulma-color-l: var(--bulma-success-75-invert-l);
}

.is-background-success-75-invert,
.has-background-success-75-invert {
  --bulma-background-l: var(--bulma-success-75-invert-l);
}

.is-color-success-80,
.has-text-success-80 {
  --bulma-color-l: var(--bulma-success-80-l);
}

.is-background-success-80,
.has-background-success-80 {
  --bulma-background-l: var(--bulma-success-80-l);
}

.is-color-success-80-invert,
.has-text-success-80-invert {
  --bulma-color-l: var(--bulma-success-80-invert-l);
}

.is-background-success-80-invert,
.has-background-success-80-invert {
  --bulma-background-l: var(--bulma-success-80-invert-l);
}

.is-color-success-85,
.has-text-success-85 {
  --bulma-color-l: var(--bulma-success-85-l);
}

.is-background-success-85,
.has-background-success-85 {
  --bulma-background-l: var(--bulma-success-85-l);
}

.is-color-success-85-invert,
.has-text-success-85-invert {
  --bulma-color-l: var(--bulma-success-85-invert-l);
}

.is-background-success-85-invert,
.has-background-success-85-invert {
  --bulma-background-l: var(--bulma-success-85-invert-l);
}

.is-color-success-90,
.has-text-success-90 {
  --bulma-color-l: var(--bulma-success-90-l);
}

.is-background-success-90,
.has-background-success-90 {
  --bulma-background-l: var(--bulma-success-90-l);
}

.is-color-success-90-invert,
.has-text-success-90-invert {
  --bulma-color-l: var(--bulma-success-90-invert-l);
}

.is-background-success-90-invert,
.has-background-success-90-invert {
  --bulma-background-l: var(--bulma-success-90-invert-l);
}

.is-color-success-95,
.has-text-success-95 {
  --bulma-color-l: var(--bulma-success-95-l);
}

.is-background-success-95,
.has-background-success-95 {
  --bulma-background-l: var(--bulma-success-95-l);
}

.is-color-success-95-invert,
.has-text-success-95-invert {
  --bulma-color-l: var(--bulma-success-95-invert-l);
}

.is-background-success-95-invert,
.has-background-success-95-invert {
  --bulma-background-l: var(--bulma-success-95-invert-l);
}

.is-color-success-100,
.has-text-success-100 {
  --bulma-color-l: var(--bulma-success-100-l);
}

.is-background-success-100,
.has-background-success-100 {
  --bulma-background-l: var(--bulma-success-100-l);
}

.is-color-success-100-invert,
.has-text-success-100-invert {
  --bulma-color-l: var(--bulma-success-100-invert-l);
}

.is-background-success-100-invert,
.has-background-success-100-invert {
  --bulma-background-l: var(--bulma-success-100-invert-l);
}

a.is-color-success:hover, a.is-color-success:focus-visible,
button.is-color-success:hover,
button.is-color-success:focus-visible,
is-color-success.is-hoverable:hover,
is-color-success.is-hoverable:focus-visible,
a.has-text-success:hover,
a.has-text-success:focus-visible,
button.has-text-success:hover,
button.has-text-success:focus-visible,
has-text-success.is-hoverable:hover,
has-text-success.is-hoverable:focus-visible {
  --bulma-color-l-delta: var(--bulma-hover-color-l-delta);
}
a.is-color-success:active,
button.is-color-success:active,
is-color-success.is-hoverable:active,
a.has-text-success:active,
button.has-text-success:active,
has-text-success.is-hoverable:active {
  --bulma-color-l-delta: var(--bulma-active-color-l-delta);
}

a.is-background-success:hover, a.is-background-success:focus-visible,
button.is-background-success:hover,
button.is-background-success:focus-visible,
is-background-success.is-hoverable:hover,
is-background-success.is-hoverable:focus-visible,
a.has-background-success:hover,
a.has-background-success:focus-visible,
button.has-background-success:hover,
button.has-background-success:focus-visible,
has-background-success.is-hoverable:hover,
has-background-success.is-hoverable:focus-visible {
  --bulma-background-l-delta: var(--bulma-hover-background-l-delta);
}
a.is-background-success:active,
button.is-background-success:active,
is-background-success.is-hoverable:active,
a.has-background-success:active,
button.has-background-success:active,
has-background-success.is-hoverable:active {
  --bulma-background-l-delta: var(--bulma-active-background-l-delta);
}

.is-palette-success {
  --h: var(--bulma-success-h);
  --s: var(--bulma-success-s);
  --l: var(--bulma-success-l);
  --color: hsl(var(--h), var(--s), var(--l));
  --00-l: var(--bulma-success-00-l);
  --color-00: hsl(var(--h), var(--s), var(--00-l));
  --05-l: var(--bulma-success-05-l);
  --color-05: hsl(var(--h), var(--s), var(--05-l));
  --10-l: var(--bulma-success-10-l);
  --color-10: hsl(var(--h), var(--s), var(--10-l));
  --15-l: var(--bulma-success-15-l);
  --color-15: hsl(var(--h), var(--s), var(--15-l));
  --20-l: var(--bulma-success-20-l);
  --color-20: hsl(var(--h), var(--s), var(--20-l));
  --25-l: var(--bulma-success-25-l);
  --color-25: hsl(var(--h), var(--s), var(--25-l));
  --30-l: var(--bulma-success-30-l);
  --color-30: hsl(var(--h), var(--s), var(--30-l));
  --35-l: var(--bulma-success-35-l);
  --color-35: hsl(var(--h), var(--s), var(--35-l));
  --40-l: var(--bulma-success-40-l);
  --color-40: hsl(var(--h), var(--s), var(--40-l));
  --45-l: var(--bulma-success-45-l);
  --color-45: hsl(var(--h), var(--s), var(--45-l));
  --50-l: var(--bulma-success-50-l);
  --color-50: hsl(var(--h), var(--s), var(--50-l));
  --55-l: var(--bulma-success-55-l);
  --color-55: hsl(var(--h), var(--s), var(--55-l));
  --60-l: var(--bulma-success-60-l);
  --color-60: hsl(var(--h), var(--s), var(--60-l));
  --65-l: var(--bulma-success-65-l);
  --color-65: hsl(var(--h), var(--s), var(--65-l));
  --70-l: var(--bulma-success-70-l);
  --color-70: hsl(var(--h), var(--s), var(--70-l));
  --75-l: var(--bulma-success-75-l);
  --color-75: hsl(var(--h), var(--s), var(--75-l));
  --80-l: var(--bulma-success-80-l);
  --color-80: hsl(var(--h), var(--s), var(--80-l));
  --85-l: var(--bulma-success-85-l);
  --color-85: hsl(var(--h), var(--s), var(--85-l));
  --90-l: var(--bulma-success-90-l);
  --color-90: hsl(var(--h), var(--s), var(--90-l));
  --95-l: var(--bulma-success-95-l);
  --color-95: hsl(var(--h), var(--s), var(--95-l));
  --100-l: var(--bulma-success-100-l);
  --color-100: hsl(var(--h), var(--s), var(--100-l));
}

[class*=is-color-warning],
[class*=has-text-warning] {
  --bulma-color-l: var(--bulma-warning-l);
  --bulma-color-l-delta: 0%;
  color: hsl(var(--bulma-warning-h), var(--bulma-warning-s), calc(var(--bulma-color-l) + var(--bulma-color-l-delta))) !important;
}

[class*=is-background-warning],
[class*=has-background-warning] {
  --bulma-background-l: var(--bulma-warning-l);
  --bulma-background-l-delta: 0%;
  background-color: hsl(var(--bulma-warning-h), var(--bulma-warning-s), calc(var(--bulma-background-l) + var(--bulma-background-l-delta))) !important;
}

.is-color-warning-invert,
.has-text-warning-invert {
  --bulma-color-l: var(--bulma-warning-invert-l);
}

.is-background-warning-invert,
.has-background-warning-invert {
  --bulma-background-l: var(--bulma-warning-invert-l);
}

.is-color-warning-on-scheme,
.has-text-warning-on-scheme {
  --bulma-color-l: var(--bulma-warning-on-scheme-l);
}

.is-background-warning-on-scheme,
.has-background-warning-on-scheme {
  --bulma-background-l: var(--bulma-warning-on-scheme-l);
}

.is-color-warning-light,
.has-text-warning-light {
  --bulma-color-l: var(--bulma-warning-light-l);
}

.is-background-warning-light,
.has-background-warning-light {
  --bulma-background-l: var(--bulma-warning-light-l);
}

.is-color-warning-light-invert,
.has-text-warning-light-invert {
  --bulma-color-l: var(--bulma-warning-light-invert-l);
}

.is-background-warning-light-invert,
.has-background-warning-light-invert {
  --bulma-background-l: var(--bulma-warning-light-invert-l);
}

.is-color-warning-dark,
.has-text-warning-dark {
  --bulma-color-l: var(--bulma-warning-dark-l);
}

.is-background-warning-dark,
.has-background-warning-dark {
  --bulma-background-l: var(--bulma-warning-dark-l);
}

.is-color-warning-dark-invert,
.has-text-warning-dark-invert {
  --bulma-color-l: var(--bulma-warning-dark-invert-l);
}

.is-background-warning-dark-invert,
.has-background-warning-dark-invert {
  --bulma-background-l: var(--bulma-warning-dark-invert-l);
}

.is-color-warning-soft,
.has-text-warning-soft {
  --bulma-color-l: var(--bulma-soft-l);
}

.is-background-warning-soft,
.has-background-warning-soft {
  --bulma-background-l: var(--bulma-soft-l);
}

.is-color-warning-bold,
.has-text-warning-bold {
  --bulma-color-l: var(--bulma-bold-l);
}

.is-background-warning-bold,
.has-background-warning-bold {
  --bulma-background-l: var(--bulma-bold-l);
}

.is-color-warning-soft-invert,
.has-text-warning-soft-invert {
  --bulma-color-l: var(--bulma-soft-invert-l);
}

.is-background-warning-soft-invert,
.has-background-warning-soft-invert {
  --bulma-background-l: var(--bulma-soft-invert-l);
}

.is-color-warning-bold-invert,
.has-text-warning-bold-invert {
  --bulma-color-l: var(--bulma-bold-invert-l);
}

.is-background-warning-bold-invert,
.has-background-warning-bold-invert {
  --bulma-background-l: var(--bulma-bold-invert-l);
}

.is-color-warning-00,
.has-text-warning-00 {
  --bulma-color-l: var(--bulma-warning-00-l);
}

.is-background-warning-00,
.has-background-warning-00 {
  --bulma-background-l: var(--bulma-warning-00-l);
}

.is-color-warning-00-invert,
.has-text-warning-00-invert {
  --bulma-color-l: var(--bulma-warning-00-invert-l);
}

.is-background-warning-00-invert,
.has-background-warning-00-invert {
  --bulma-background-l: var(--bulma-warning-00-invert-l);
}

.is-color-warning-05,
.has-text-warning-05 {
  --bulma-color-l: var(--bulma-warning-05-l);
}

.is-background-warning-05,
.has-background-warning-05 {
  --bulma-background-l: var(--bulma-warning-05-l);
}

.is-color-warning-05-invert,
.has-text-warning-05-invert {
  --bulma-color-l: var(--bulma-warning-05-invert-l);
}

.is-background-warning-05-invert,
.has-background-warning-05-invert {
  --bulma-background-l: var(--bulma-warning-05-invert-l);
}

.is-color-warning-10,
.has-text-warning-10 {
  --bulma-color-l: var(--bulma-warning-10-l);
}

.is-background-warning-10,
.has-background-warning-10 {
  --bulma-background-l: var(--bulma-warning-10-l);
}

.is-color-warning-10-invert,
.has-text-warning-10-invert {
  --bulma-color-l: var(--bulma-warning-10-invert-l);
}

.is-background-warning-10-invert,
.has-background-warning-10-invert {
  --bulma-background-l: var(--bulma-warning-10-invert-l);
}

.is-color-warning-15,
.has-text-warning-15 {
  --bulma-color-l: var(--bulma-warning-15-l);
}

.is-background-warning-15,
.has-background-warning-15 {
  --bulma-background-l: var(--bulma-warning-15-l);
}

.is-color-warning-15-invert,
.has-text-warning-15-invert {
  --bulma-color-l: var(--bulma-warning-15-invert-l);
}

.is-background-warning-15-invert,
.has-background-warning-15-invert {
  --bulma-background-l: var(--bulma-warning-15-invert-l);
}

.is-color-warning-20,
.has-text-warning-20 {
  --bulma-color-l: var(--bulma-warning-20-l);
}

.is-background-warning-20,
.has-background-warning-20 {
  --bulma-background-l: var(--bulma-warning-20-l);
}

.is-color-warning-20-invert,
.has-text-warning-20-invert {
  --bulma-color-l: var(--bulma-warning-20-invert-l);
}

.is-background-warning-20-invert,
.has-background-warning-20-invert {
  --bulma-background-l: var(--bulma-warning-20-invert-l);
}

.is-color-warning-25,
.has-text-warning-25 {
  --bulma-color-l: var(--bulma-warning-25-l);
}

.is-background-warning-25,
.has-background-warning-25 {
  --bulma-background-l: var(--bulma-warning-25-l);
}

.is-color-warning-25-invert,
.has-text-warning-25-invert {
  --bulma-color-l: var(--bulma-warning-25-invert-l);
}

.is-background-warning-25-invert,
.has-background-warning-25-invert {
  --bulma-background-l: var(--bulma-warning-25-invert-l);
}

.is-color-warning-30,
.has-text-warning-30 {
  --bulma-color-l: var(--bulma-warning-30-l);
}

.is-background-warning-30,
.has-background-warning-30 {
  --bulma-background-l: var(--bulma-warning-30-l);
}

.is-color-warning-30-invert,
.has-text-warning-30-invert {
  --bulma-color-l: var(--bulma-warning-30-invert-l);
}

.is-background-warning-30-invert,
.has-background-warning-30-invert {
  --bulma-background-l: var(--bulma-warning-30-invert-l);
}

.is-color-warning-35,
.has-text-warning-35 {
  --bulma-color-l: var(--bulma-warning-35-l);
}

.is-background-warning-35,
.has-background-warning-35 {
  --bulma-background-l: var(--bulma-warning-35-l);
}

.is-color-warning-35-invert,
.has-text-warning-35-invert {
  --bulma-color-l: var(--bulma-warning-35-invert-l);
}

.is-background-warning-35-invert,
.has-background-warning-35-invert {
  --bulma-background-l: var(--bulma-warning-35-invert-l);
}

.is-color-warning-40,
.has-text-warning-40 {
  --bulma-color-l: var(--bulma-warning-40-l);
}

.is-background-warning-40,
.has-background-warning-40 {
  --bulma-background-l: var(--bulma-warning-40-l);
}

.is-color-warning-40-invert,
.has-text-warning-40-invert {
  --bulma-color-l: var(--bulma-warning-40-invert-l);
}

.is-background-warning-40-invert,
.has-background-warning-40-invert {
  --bulma-background-l: var(--bulma-warning-40-invert-l);
}

.is-color-warning-45,
.has-text-warning-45 {
  --bulma-color-l: var(--bulma-warning-45-l);
}

.is-background-warning-45,
.has-background-warning-45 {
  --bulma-background-l: var(--bulma-warning-45-l);
}

.is-color-warning-45-invert,
.has-text-warning-45-invert {
  --bulma-color-l: var(--bulma-warning-45-invert-l);
}

.is-background-warning-45-invert,
.has-background-warning-45-invert {
  --bulma-background-l: var(--bulma-warning-45-invert-l);
}

.is-color-warning-50,
.has-text-warning-50 {
  --bulma-color-l: var(--bulma-warning-50-l);
}

.is-background-warning-50,
.has-background-warning-50 {
  --bulma-background-l: var(--bulma-warning-50-l);
}

.is-color-warning-50-invert,
.has-text-warning-50-invert {
  --bulma-color-l: var(--bulma-warning-50-invert-l);
}

.is-background-warning-50-invert,
.has-background-warning-50-invert {
  --bulma-background-l: var(--bulma-warning-50-invert-l);
}

.is-color-warning-55,
.has-text-warning-55 {
  --bulma-color-l: var(--bulma-warning-55-l);
}

.is-background-warning-55,
.has-background-warning-55 {
  --bulma-background-l: var(--bulma-warning-55-l);
}

.is-color-warning-55-invert,
.has-text-warning-55-invert {
  --bulma-color-l: var(--bulma-warning-55-invert-l);
}

.is-background-warning-55-invert,
.has-background-warning-55-invert {
  --bulma-background-l: var(--bulma-warning-55-invert-l);
}

.is-color-warning-60,
.has-text-warning-60 {
  --bulma-color-l: var(--bulma-warning-60-l);
}

.is-background-warning-60,
.has-background-warning-60 {
  --bulma-background-l: var(--bulma-warning-60-l);
}

.is-color-warning-60-invert,
.has-text-warning-60-invert {
  --bulma-color-l: var(--bulma-warning-60-invert-l);
}

.is-background-warning-60-invert,
.has-background-warning-60-invert {
  --bulma-background-l: var(--bulma-warning-60-invert-l);
}

.is-color-warning-65,
.has-text-warning-65 {
  --bulma-color-l: var(--bulma-warning-65-l);
}

.is-background-warning-65,
.has-background-warning-65 {
  --bulma-background-l: var(--bulma-warning-65-l);
}

.is-color-warning-65-invert,
.has-text-warning-65-invert {
  --bulma-color-l: var(--bulma-warning-65-invert-l);
}

.is-background-warning-65-invert,
.has-background-warning-65-invert {
  --bulma-background-l: var(--bulma-warning-65-invert-l);
}

.is-color-warning-70,
.has-text-warning-70 {
  --bulma-color-l: var(--bulma-warning-70-l);
}

.is-background-warning-70,
.has-background-warning-70 {
  --bulma-background-l: var(--bulma-warning-70-l);
}

.is-color-warning-70-invert,
.has-text-warning-70-invert {
  --bulma-color-l: var(--bulma-warning-70-invert-l);
}

.is-background-warning-70-invert,
.has-background-warning-70-invert {
  --bulma-background-l: var(--bulma-warning-70-invert-l);
}

.is-color-warning-75,
.has-text-warning-75 {
  --bulma-color-l: var(--bulma-warning-75-l);
}

.is-background-warning-75,
.has-background-warning-75 {
  --bulma-background-l: var(--bulma-warning-75-l);
}

.is-color-warning-75-invert,
.has-text-warning-75-invert {
  --bulma-color-l: var(--bulma-warning-75-invert-l);
}

.is-background-warning-75-invert,
.has-background-warning-75-invert {
  --bulma-background-l: var(--bulma-warning-75-invert-l);
}

.is-color-warning-80,
.has-text-warning-80 {
  --bulma-color-l: var(--bulma-warning-80-l);
}

.is-background-warning-80,
.has-background-warning-80 {
  --bulma-background-l: var(--bulma-warning-80-l);
}

.is-color-warning-80-invert,
.has-text-warning-80-invert {
  --bulma-color-l: var(--bulma-warning-80-invert-l);
}

.is-background-warning-80-invert,
.has-background-warning-80-invert {
  --bulma-background-l: var(--bulma-warning-80-invert-l);
}

.is-color-warning-85,
.has-text-warning-85 {
  --bulma-color-l: var(--bulma-warning-85-l);
}

.is-background-warning-85,
.has-background-warning-85 {
  --bulma-background-l: var(--bulma-warning-85-l);
}

.is-color-warning-85-invert,
.has-text-warning-85-invert {
  --bulma-color-l: var(--bulma-warning-85-invert-l);
}

.is-background-warning-85-invert,
.has-background-warning-85-invert {
  --bulma-background-l: var(--bulma-warning-85-invert-l);
}

.is-color-warning-90,
.has-text-warning-90 {
  --bulma-color-l: var(--bulma-warning-90-l);
}

.is-background-warning-90,
.has-background-warning-90 {
  --bulma-background-l: var(--bulma-warning-90-l);
}

.is-color-warning-90-invert,
.has-text-warning-90-invert {
  --bulma-color-l: var(--bulma-warning-90-invert-l);
}

.is-background-warning-90-invert,
.has-background-warning-90-invert {
  --bulma-background-l: var(--bulma-warning-90-invert-l);
}

.is-color-warning-95,
.has-text-warning-95 {
  --bulma-color-l: var(--bulma-warning-95-l);
}

.is-background-warning-95,
.has-background-warning-95 {
  --bulma-background-l: var(--bulma-warning-95-l);
}

.is-color-warning-95-invert,
.has-text-warning-95-invert {
  --bulma-color-l: var(--bulma-warning-95-invert-l);
}

.is-background-warning-95-invert,
.has-background-warning-95-invert {
  --bulma-background-l: var(--bulma-warning-95-invert-l);
}

.is-color-warning-100,
.has-text-warning-100 {
  --bulma-color-l: var(--bulma-warning-100-l);
}

.is-background-warning-100,
.has-background-warning-100 {
  --bulma-background-l: var(--bulma-warning-100-l);
}

.is-color-warning-100-invert,
.has-text-warning-100-invert {
  --bulma-color-l: var(--bulma-warning-100-invert-l);
}

.is-background-warning-100-invert,
.has-background-warning-100-invert {
  --bulma-background-l: var(--bulma-warning-100-invert-l);
}

a.is-color-warning:hover, a.is-color-warning:focus-visible,
button.is-color-warning:hover,
button.is-color-warning:focus-visible,
is-color-warning.is-hoverable:hover,
is-color-warning.is-hoverable:focus-visible,
a.has-text-warning:hover,
a.has-text-warning:focus-visible,
button.has-text-warning:hover,
button.has-text-warning:focus-visible,
has-text-warning.is-hoverable:hover,
has-text-warning.is-hoverable:focus-visible {
  --bulma-color-l-delta: var(--bulma-hover-color-l-delta);
}
a.is-color-warning:active,
button.is-color-warning:active,
is-color-warning.is-hoverable:active,
a.has-text-warning:active,
button.has-text-warning:active,
has-text-warning.is-hoverable:active {
  --bulma-color-l-delta: var(--bulma-active-color-l-delta);
}

a.is-background-warning:hover, a.is-background-warning:focus-visible,
button.is-background-warning:hover,
button.is-background-warning:focus-visible,
is-background-warning.is-hoverable:hover,
is-background-warning.is-hoverable:focus-visible,
a.has-background-warning:hover,
a.has-background-warning:focus-visible,
button.has-background-warning:hover,
button.has-background-warning:focus-visible,
has-background-warning.is-hoverable:hover,
has-background-warning.is-hoverable:focus-visible {
  --bulma-background-l-delta: var(--bulma-hover-background-l-delta);
}
a.is-background-warning:active,
button.is-background-warning:active,
is-background-warning.is-hoverable:active,
a.has-background-warning:active,
button.has-background-warning:active,
has-background-warning.is-hoverable:active {
  --bulma-background-l-delta: var(--bulma-active-background-l-delta);
}

.is-palette-warning {
  --h: var(--bulma-warning-h);
  --s: var(--bulma-warning-s);
  --l: var(--bulma-warning-l);
  --color: hsl(var(--h), var(--s), var(--l));
  --00-l: var(--bulma-warning-00-l);
  --color-00: hsl(var(--h), var(--s), var(--00-l));
  --05-l: var(--bulma-warning-05-l);
  --color-05: hsl(var(--h), var(--s), var(--05-l));
  --10-l: var(--bulma-warning-10-l);
  --color-10: hsl(var(--h), var(--s), var(--10-l));
  --15-l: var(--bulma-warning-15-l);
  --color-15: hsl(var(--h), var(--s), var(--15-l));
  --20-l: var(--bulma-warning-20-l);
  --color-20: hsl(var(--h), var(--s), var(--20-l));
  --25-l: var(--bulma-warning-25-l);
  --color-25: hsl(var(--h), var(--s), var(--25-l));
  --30-l: var(--bulma-warning-30-l);
  --color-30: hsl(var(--h), var(--s), var(--30-l));
  --35-l: var(--bulma-warning-35-l);
  --color-35: hsl(var(--h), var(--s), var(--35-l));
  --40-l: var(--bulma-warning-40-l);
  --color-40: hsl(var(--h), var(--s), var(--40-l));
  --45-l: var(--bulma-warning-45-l);
  --color-45: hsl(var(--h), var(--s), var(--45-l));
  --50-l: var(--bulma-warning-50-l);
  --color-50: hsl(var(--h), var(--s), var(--50-l));
  --55-l: var(--bulma-warning-55-l);
  --color-55: hsl(var(--h), var(--s), var(--55-l));
  --60-l: var(--bulma-warning-60-l);
  --color-60: hsl(var(--h), var(--s), var(--60-l));
  --65-l: var(--bulma-warning-65-l);
  --color-65: hsl(var(--h), var(--s), var(--65-l));
  --70-l: var(--bulma-warning-70-l);
  --color-70: hsl(var(--h), var(--s), var(--70-l));
  --75-l: var(--bulma-warning-75-l);
  --color-75: hsl(var(--h), var(--s), var(--75-l));
  --80-l: var(--bulma-warning-80-l);
  --color-80: hsl(var(--h), var(--s), var(--80-l));
  --85-l: var(--bulma-warning-85-l);
  --color-85: hsl(var(--h), var(--s), var(--85-l));
  --90-l: var(--bulma-warning-90-l);
  --color-90: hsl(var(--h), var(--s), var(--90-l));
  --95-l: var(--bulma-warning-95-l);
  --color-95: hsl(var(--h), var(--s), var(--95-l));
  --100-l: var(--bulma-warning-100-l);
  --color-100: hsl(var(--h), var(--s), var(--100-l));
}

[class*=is-color-danger],
[class*=has-text-danger] {
  --bulma-color-l: var(--bulma-danger-l);
  --bulma-color-l-delta: 0%;
  color: hsl(var(--bulma-danger-h), var(--bulma-danger-s), calc(var(--bulma-color-l) + var(--bulma-color-l-delta))) !important;
}

[class*=is-background-danger],
[class*=has-background-danger] {
  --bulma-background-l: var(--bulma-danger-l);
  --bulma-background-l-delta: 0%;
  background-color: hsl(var(--bulma-danger-h), var(--bulma-danger-s), calc(var(--bulma-background-l) + var(--bulma-background-l-delta))) !important;
}

.is-color-danger-invert,
.has-text-danger-invert {
  --bulma-color-l: var(--bulma-danger-invert-l);
}

.is-background-danger-invert,
.has-background-danger-invert {
  --bulma-background-l: var(--bulma-danger-invert-l);
}

.is-color-danger-on-scheme,
.has-text-danger-on-scheme {
  --bulma-color-l: var(--bulma-danger-on-scheme-l);
}

.is-background-danger-on-scheme,
.has-background-danger-on-scheme {
  --bulma-background-l: var(--bulma-danger-on-scheme-l);
}

.is-color-danger-light,
.has-text-danger-light {
  --bulma-color-l: var(--bulma-danger-light-l);
}

.is-background-danger-light,
.has-background-danger-light {
  --bulma-background-l: var(--bulma-danger-light-l);
}

.is-color-danger-light-invert,
.has-text-danger-light-invert {
  --bulma-color-l: var(--bulma-danger-light-invert-l);
}

.is-background-danger-light-invert,
.has-background-danger-light-invert {
  --bulma-background-l: var(--bulma-danger-light-invert-l);
}

.is-color-danger-dark,
.has-text-danger-dark {
  --bulma-color-l: var(--bulma-danger-dark-l);
}

.is-background-danger-dark,
.has-background-danger-dark {
  --bulma-background-l: var(--bulma-danger-dark-l);
}

.is-color-danger-dark-invert,
.has-text-danger-dark-invert {
  --bulma-color-l: var(--bulma-danger-dark-invert-l);
}

.is-background-danger-dark-invert,
.has-background-danger-dark-invert {
  --bulma-background-l: var(--bulma-danger-dark-invert-l);
}

.is-color-danger-soft,
.has-text-danger-soft {
  --bulma-color-l: var(--bulma-soft-l);
}

.is-background-danger-soft,
.has-background-danger-soft {
  --bulma-background-l: var(--bulma-soft-l);
}

.is-color-danger-bold,
.has-text-danger-bold {
  --bulma-color-l: var(--bulma-bold-l);
}

.is-background-danger-bold,
.has-background-danger-bold {
  --bulma-background-l: var(--bulma-bold-l);
}

.is-color-danger-soft-invert,
.has-text-danger-soft-invert {
  --bulma-color-l: var(--bulma-soft-invert-l);
}

.is-background-danger-soft-invert,
.has-background-danger-soft-invert {
  --bulma-background-l: var(--bulma-soft-invert-l);
}

.is-color-danger-bold-invert,
.has-text-danger-bold-invert {
  --bulma-color-l: var(--bulma-bold-invert-l);
}

.is-background-danger-bold-invert,
.has-background-danger-bold-invert {
  --bulma-background-l: var(--bulma-bold-invert-l);
}

.is-color-danger-00,
.has-text-danger-00 {
  --bulma-color-l: var(--bulma-danger-00-l);
}

.is-background-danger-00,
.has-background-danger-00 {
  --bulma-background-l: var(--bulma-danger-00-l);
}

.is-color-danger-00-invert,
.has-text-danger-00-invert {
  --bulma-color-l: var(--bulma-danger-00-invert-l);
}

.is-background-danger-00-invert,
.has-background-danger-00-invert {
  --bulma-background-l: var(--bulma-danger-00-invert-l);
}

.is-color-danger-05,
.has-text-danger-05 {
  --bulma-color-l: var(--bulma-danger-05-l);
}

.is-background-danger-05,
.has-background-danger-05 {
  --bulma-background-l: var(--bulma-danger-05-l);
}

.is-color-danger-05-invert,
.has-text-danger-05-invert {
  --bulma-color-l: var(--bulma-danger-05-invert-l);
}

.is-background-danger-05-invert,
.has-background-danger-05-invert {
  --bulma-background-l: var(--bulma-danger-05-invert-l);
}

.is-color-danger-10,
.has-text-danger-10 {
  --bulma-color-l: var(--bulma-danger-10-l);
}

.is-background-danger-10,
.has-background-danger-10 {
  --bulma-background-l: var(--bulma-danger-10-l);
}

.is-color-danger-10-invert,
.has-text-danger-10-invert {
  --bulma-color-l: var(--bulma-danger-10-invert-l);
}

.is-background-danger-10-invert,
.has-background-danger-10-invert {
  --bulma-background-l: var(--bulma-danger-10-invert-l);
}

.is-color-danger-15,
.has-text-danger-15 {
  --bulma-color-l: var(--bulma-danger-15-l);
}

.is-background-danger-15,
.has-background-danger-15 {
  --bulma-background-l: var(--bulma-danger-15-l);
}

.is-color-danger-15-invert,
.has-text-danger-15-invert {
  --bulma-color-l: var(--bulma-danger-15-invert-l);
}

.is-background-danger-15-invert,
.has-background-danger-15-invert {
  --bulma-background-l: var(--bulma-danger-15-invert-l);
}

.is-color-danger-20,
.has-text-danger-20 {
  --bulma-color-l: var(--bulma-danger-20-l);
}

.is-background-danger-20,
.has-background-danger-20 {
  --bulma-background-l: var(--bulma-danger-20-l);
}

.is-color-danger-20-invert,
.has-text-danger-20-invert {
  --bulma-color-l: var(--bulma-danger-20-invert-l);
}

.is-background-danger-20-invert,
.has-background-danger-20-invert {
  --bulma-background-l: var(--bulma-danger-20-invert-l);
}

.is-color-danger-25,
.has-text-danger-25 {
  --bulma-color-l: var(--bulma-danger-25-l);
}

.is-background-danger-25,
.has-background-danger-25 {
  --bulma-background-l: var(--bulma-danger-25-l);
}

.is-color-danger-25-invert,
.has-text-danger-25-invert {
  --bulma-color-l: var(--bulma-danger-25-invert-l);
}

.is-background-danger-25-invert,
.has-background-danger-25-invert {
  --bulma-background-l: var(--bulma-danger-25-invert-l);
}

.is-color-danger-30,
.has-text-danger-30 {
  --bulma-color-l: var(--bulma-danger-30-l);
}

.is-background-danger-30,
.has-background-danger-30 {
  --bulma-background-l: var(--bulma-danger-30-l);
}

.is-color-danger-30-invert,
.has-text-danger-30-invert {
  --bulma-color-l: var(--bulma-danger-30-invert-l);
}

.is-background-danger-30-invert,
.has-background-danger-30-invert {
  --bulma-background-l: var(--bulma-danger-30-invert-l);
}

.is-color-danger-35,
.has-text-danger-35 {
  --bulma-color-l: var(--bulma-danger-35-l);
}

.is-background-danger-35,
.has-background-danger-35 {
  --bulma-background-l: var(--bulma-danger-35-l);
}

.is-color-danger-35-invert,
.has-text-danger-35-invert {
  --bulma-color-l: var(--bulma-danger-35-invert-l);
}

.is-background-danger-35-invert,
.has-background-danger-35-invert {
  --bulma-background-l: var(--bulma-danger-35-invert-l);
}

.is-color-danger-40,
.has-text-danger-40 {
  --bulma-color-l: var(--bulma-danger-40-l);
}

.is-background-danger-40,
.has-background-danger-40 {
  --bulma-background-l: var(--bulma-danger-40-l);
}

.is-color-danger-40-invert,
.has-text-danger-40-invert {
  --bulma-color-l: var(--bulma-danger-40-invert-l);
}

.is-background-danger-40-invert,
.has-background-danger-40-invert {
  --bulma-background-l: var(--bulma-danger-40-invert-l);
}

.is-color-danger-45,
.has-text-danger-45 {
  --bulma-color-l: var(--bulma-danger-45-l);
}

.is-background-danger-45,
.has-background-danger-45 {
  --bulma-background-l: var(--bulma-danger-45-l);
}

.is-color-danger-45-invert,
.has-text-danger-45-invert {
  --bulma-color-l: var(--bulma-danger-45-invert-l);
}

.is-background-danger-45-invert,
.has-background-danger-45-invert {
  --bulma-background-l: var(--bulma-danger-45-invert-l);
}

.is-color-danger-50,
.has-text-danger-50 {
  --bulma-color-l: var(--bulma-danger-50-l);
}

.is-background-danger-50,
.has-background-danger-50 {
  --bulma-background-l: var(--bulma-danger-50-l);
}

.is-color-danger-50-invert,
.has-text-danger-50-invert {
  --bulma-color-l: var(--bulma-danger-50-invert-l);
}

.is-background-danger-50-invert,
.has-background-danger-50-invert {
  --bulma-background-l: var(--bulma-danger-50-invert-l);
}

.is-color-danger-55,
.has-text-danger-55 {
  --bulma-color-l: var(--bulma-danger-55-l);
}

.is-background-danger-55,
.has-background-danger-55 {
  --bulma-background-l: var(--bulma-danger-55-l);
}

.is-color-danger-55-invert,
.has-text-danger-55-invert {
  --bulma-color-l: var(--bulma-danger-55-invert-l);
}

.is-background-danger-55-invert,
.has-background-danger-55-invert {
  --bulma-background-l: var(--bulma-danger-55-invert-l);
}

.is-color-danger-60,
.has-text-danger-60 {
  --bulma-color-l: var(--bulma-danger-60-l);
}

.is-background-danger-60,
.has-background-danger-60 {
  --bulma-background-l: var(--bulma-danger-60-l);
}

.is-color-danger-60-invert,
.has-text-danger-60-invert {
  --bulma-color-l: var(--bulma-danger-60-invert-l);
}

.is-background-danger-60-invert,
.has-background-danger-60-invert {
  --bulma-background-l: var(--bulma-danger-60-invert-l);
}

.is-color-danger-65,
.has-text-danger-65 {
  --bulma-color-l: var(--bulma-danger-65-l);
}

.is-background-danger-65,
.has-background-danger-65 {
  --bulma-background-l: var(--bulma-danger-65-l);
}

.is-color-danger-65-invert,
.has-text-danger-65-invert {
  --bulma-color-l: var(--bulma-danger-65-invert-l);
}

.is-background-danger-65-invert,
.has-background-danger-65-invert {
  --bulma-background-l: var(--bulma-danger-65-invert-l);
}

.is-color-danger-70,
.has-text-danger-70 {
  --bulma-color-l: var(--bulma-danger-70-l);
}

.is-background-danger-70,
.has-background-danger-70 {
  --bulma-background-l: var(--bulma-danger-70-l);
}

.is-color-danger-70-invert,
.has-text-danger-70-invert {
  --bulma-color-l: var(--bulma-danger-70-invert-l);
}

.is-background-danger-70-invert,
.has-background-danger-70-invert {
  --bulma-background-l: var(--bulma-danger-70-invert-l);
}

.is-color-danger-75,
.has-text-danger-75 {
  --bulma-color-l: var(--bulma-danger-75-l);
}

.is-background-danger-75,
.has-background-danger-75 {
  --bulma-background-l: var(--bulma-danger-75-l);
}

.is-color-danger-75-invert,
.has-text-danger-75-invert {
  --bulma-color-l: var(--bulma-danger-75-invert-l);
}

.is-background-danger-75-invert,
.has-background-danger-75-invert {
  --bulma-background-l: var(--bulma-danger-75-invert-l);
}

.is-color-danger-80,
.has-text-danger-80 {
  --bulma-color-l: var(--bulma-danger-80-l);
}

.is-background-danger-80,
.has-background-danger-80 {
  --bulma-background-l: var(--bulma-danger-80-l);
}

.is-color-danger-80-invert,
.has-text-danger-80-invert {
  --bulma-color-l: var(--bulma-danger-80-invert-l);
}

.is-background-danger-80-invert,
.has-background-danger-80-invert {
  --bulma-background-l: var(--bulma-danger-80-invert-l);
}

.is-color-danger-85,
.has-text-danger-85 {
  --bulma-color-l: var(--bulma-danger-85-l);
}

.is-background-danger-85,
.has-background-danger-85 {
  --bulma-background-l: var(--bulma-danger-85-l);
}

.is-color-danger-85-invert,
.has-text-danger-85-invert {
  --bulma-color-l: var(--bulma-danger-85-invert-l);
}

.is-background-danger-85-invert,
.has-background-danger-85-invert {
  --bulma-background-l: var(--bulma-danger-85-invert-l);
}

.is-color-danger-90,
.has-text-danger-90 {
  --bulma-color-l: var(--bulma-danger-90-l);
}

.is-background-danger-90,
.has-background-danger-90 {
  --bulma-background-l: var(--bulma-danger-90-l);
}

.is-color-danger-90-invert,
.has-text-danger-90-invert {
  --bulma-color-l: var(--bulma-danger-90-invert-l);
}

.is-background-danger-90-invert,
.has-background-danger-90-invert {
  --bulma-background-l: var(--bulma-danger-90-invert-l);
}

.is-color-danger-95,
.has-text-danger-95 {
  --bulma-color-l: var(--bulma-danger-95-l);
}

.is-background-danger-95,
.has-background-danger-95 {
  --bulma-background-l: var(--bulma-danger-95-l);
}

.is-color-danger-95-invert,
.has-text-danger-95-invert {
  --bulma-color-l: var(--bulma-danger-95-invert-l);
}

.is-background-danger-95-invert,
.has-background-danger-95-invert {
  --bulma-background-l: var(--bulma-danger-95-invert-l);
}

.is-color-danger-100,
.has-text-danger-100 {
  --bulma-color-l: var(--bulma-danger-100-l);
}

.is-background-danger-100,
.has-background-danger-100 {
  --bulma-background-l: var(--bulma-danger-100-l);
}

.is-color-danger-100-invert,
.has-text-danger-100-invert {
  --bulma-color-l: var(--bulma-danger-100-invert-l);
}

.is-background-danger-100-invert,
.has-background-danger-100-invert {
  --bulma-background-l: var(--bulma-danger-100-invert-l);
}

a.is-color-danger:hover, a.is-color-danger:focus-visible,
button.is-color-danger:hover,
button.is-color-danger:focus-visible,
is-color-danger.is-hoverable:hover,
is-color-danger.is-hoverable:focus-visible,
a.has-text-danger:hover,
a.has-text-danger:focus-visible,
button.has-text-danger:hover,
button.has-text-danger:focus-visible,
has-text-danger.is-hoverable:hover,
has-text-danger.is-hoverable:focus-visible {
  --bulma-color-l-delta: var(--bulma-hover-color-l-delta);
}
a.is-color-danger:active,
button.is-color-danger:active,
is-color-danger.is-hoverable:active,
a.has-text-danger:active,
button.has-text-danger:active,
has-text-danger.is-hoverable:active {
  --bulma-color-l-delta: var(--bulma-active-color-l-delta);
}

a.is-background-danger:hover, a.is-background-danger:focus-visible,
button.is-background-danger:hover,
button.is-background-danger:focus-visible,
is-background-danger.is-hoverable:hover,
is-background-danger.is-hoverable:focus-visible,
a.has-background-danger:hover,
a.has-background-danger:focus-visible,
button.has-background-danger:hover,
button.has-background-danger:focus-visible,
has-background-danger.is-hoverable:hover,
has-background-danger.is-hoverable:focus-visible {
  --bulma-background-l-delta: var(--bulma-hover-background-l-delta);
}
a.is-background-danger:active,
button.is-background-danger:active,
is-background-danger.is-hoverable:active,
a.has-background-danger:active,
button.has-background-danger:active,
has-background-danger.is-hoverable:active {
  --bulma-background-l-delta: var(--bulma-active-background-l-delta);
}

.is-palette-danger {
  --h: var(--bulma-danger-h);
  --s: var(--bulma-danger-s);
  --l: var(--bulma-danger-l);
  --color: hsl(var(--h), var(--s), var(--l));
  --00-l: var(--bulma-danger-00-l);
  --color-00: hsl(var(--h), var(--s), var(--00-l));
  --05-l: var(--bulma-danger-05-l);
  --color-05: hsl(var(--h), var(--s), var(--05-l));
  --10-l: var(--bulma-danger-10-l);
  --color-10: hsl(var(--h), var(--s), var(--10-l));
  --15-l: var(--bulma-danger-15-l);
  --color-15: hsl(var(--h), var(--s), var(--15-l));
  --20-l: var(--bulma-danger-20-l);
  --color-20: hsl(var(--h), var(--s), var(--20-l));
  --25-l: var(--bulma-danger-25-l);
  --color-25: hsl(var(--h), var(--s), var(--25-l));
  --30-l: var(--bulma-danger-30-l);
  --color-30: hsl(var(--h), var(--s), var(--30-l));
  --35-l: var(--bulma-danger-35-l);
  --color-35: hsl(var(--h), var(--s), var(--35-l));
  --40-l: var(--bulma-danger-40-l);
  --color-40: hsl(var(--h), var(--s), var(--40-l));
  --45-l: var(--bulma-danger-45-l);
  --color-45: hsl(var(--h), var(--s), var(--45-l));
  --50-l: var(--bulma-danger-50-l);
  --color-50: hsl(var(--h), var(--s), var(--50-l));
  --55-l: var(--bulma-danger-55-l);
  --color-55: hsl(var(--h), var(--s), var(--55-l));
  --60-l: var(--bulma-danger-60-l);
  --color-60: hsl(var(--h), var(--s), var(--60-l));
  --65-l: var(--bulma-danger-65-l);
  --color-65: hsl(var(--h), var(--s), var(--65-l));
  --70-l: var(--bulma-danger-70-l);
  --color-70: hsl(var(--h), var(--s), var(--70-l));
  --75-l: var(--bulma-danger-75-l);
  --color-75: hsl(var(--h), var(--s), var(--75-l));
  --80-l: var(--bulma-danger-80-l);
  --color-80: hsl(var(--h), var(--s), var(--80-l));
  --85-l: var(--bulma-danger-85-l);
  --color-85: hsl(var(--h), var(--s), var(--85-l));
  --90-l: var(--bulma-danger-90-l);
  --color-90: hsl(var(--h), var(--s), var(--90-l));
  --95-l: var(--bulma-danger-95-l);
  --color-95: hsl(var(--h), var(--s), var(--95-l));
  --100-l: var(--bulma-danger-100-l);
  --color-100: hsl(var(--h), var(--s), var(--100-l));
}

.is-color-black-bis,
.has-text-black-bis {
  color: hsl(221, 14%, 9%) !important;
}

.is-background-black-bis,
.has-background-black-bis {
  background-color: hsl(221, 14%, 9%) !important;
}

.is-color-black-ter,
.has-text-black-ter {
  color: hsl(221, 14%, 14%) !important;
}

.is-background-black-ter,
.has-background-black-ter {
  background-color: hsl(221, 14%, 14%) !important;
}

.is-color-grey-darker,
.has-text-grey-darker {
  color: hsl(221, 14%, 21%) !important;
}

.is-background-grey-darker,
.has-background-grey-darker {
  background-color: hsl(221, 14%, 21%) !important;
}

.is-color-grey-dark,
.has-text-grey-dark {
  color: hsl(221, 14%, 29%) !important;
}

.is-background-grey-dark,
.has-background-grey-dark {
  background-color: hsl(221, 14%, 29%) !important;
}

.is-color-grey,
.has-text-grey {
  color: hsl(221, 14%, 48%) !important;
}

.is-background-grey,
.has-background-grey {
  background-color: hsl(221, 14%, 48%) !important;
}

.is-color-grey-light,
.has-text-grey-light {
  color: hsl(221, 14%, 71%) !important;
}

.is-background-grey-light,
.has-background-grey-light {
  background-color: hsl(221, 14%, 71%) !important;
}

.is-color-grey-lighter,
.has-text-grey-lighter {
  color: hsl(221, 14%, 86%) !important;
}

.is-background-grey-lighter,
.has-background-grey-lighter {
  background-color: hsl(221, 14%, 86%) !important;
}

.is-color-white-ter,
.has-text-white-ter {
  color: hsl(221, 14%, 96%) !important;
}

.is-background-white-ter,
.has-background-white-ter {
  background-color: hsl(221, 14%, 96%) !important;
}

.is-color-white-bis,
.has-text-white-bis {
  color: hsl(221, 14%, 98%) !important;
}

.is-background-white-bis,
.has-background-white-bis {
  background-color: hsl(221, 14%, 98%) !important;
}

.is-flex-direction-row {
  flex-direction: row !important;
}

.is-flex-direction-row-reverse {
  flex-direction: row-reverse !important;
}

.is-flex-direction-column {
  flex-direction: column !important;
}

.is-flex-direction-column-reverse {
  flex-direction: column-reverse !important;
}

.is-flex-wrap-nowrap {
  flex-wrap: nowrap !important;
}

.is-flex-wrap-wrap {
  flex-wrap: wrap !important;
}

.is-flex-wrap-wrap-reverse {
  flex-wrap: wrap-reverse !important;
}

.is-justify-content-flex-start {
  justify-content: flex-start !important;
}

.is-justify-content-flex-end {
  justify-content: flex-end !important;
}

.is-justify-content-center {
  justify-content: center !important;
}

.is-justify-content-space-between {
  justify-content: space-between !important;
}

.is-justify-content-space-around {
  justify-content: space-around !important;
}

.is-justify-content-space-evenly {
  justify-content: space-evenly !important;
}

.is-justify-content-start {
  justify-content: start !important;
}

.is-justify-content-end {
  justify-content: end !important;
}

.is-justify-content-left {
  justify-content: left !important;
}

.is-justify-content-right {
  justify-content: right !important;
}

.is-align-content-flex-start {
  align-content: flex-start !important;
}

.is-align-content-flex-end {
  align-content: flex-end !important;
}

.is-align-content-center {
  align-content: center !important;
}

.is-align-content-space-between {
  align-content: space-between !important;
}

.is-align-content-space-around {
  align-content: space-around !important;
}

.is-align-content-space-evenly {
  align-content: space-evenly !important;
}

.is-align-content-stretch {
  align-content: stretch !important;
}

.is-align-content-start {
  align-content: start !important;
}

.is-align-content-end {
  align-content: end !important;
}

.is-align-content-baseline {
  align-content: baseline !important;
}

.is-align-items-stretch {
  align-items: stretch !important;
}

.is-align-items-flex-start {
  align-items: flex-start !important;
}

.is-align-items-flex-end {
  align-items: flex-end !important;
}

.is-align-items-center {
  align-items: center !important;
}

.is-align-items-baseline {
  align-items: baseline !important;
}

.is-align-items-start {
  align-items: start !important;
}

.is-align-items-end {
  align-items: end !important;
}

.is-align-items-self-start {
  align-items: self-start !important;
}

.is-align-items-self-end {
  align-items: self-end !important;
}

.is-align-self-auto {
  align-self: auto !important;
}

.is-align-self-flex-start {
  align-self: flex-start !important;
}

.is-align-self-flex-end {
  align-self: flex-end !important;
}

.is-align-self-center {
  align-self: center !important;
}

.is-align-self-baseline {
  align-self: baseline !important;
}

.is-align-self-stretch {
  align-self: stretch !important;
}

.is-flex-grow-0 {
  flex-grow: 0 !important;
}

.is-flex-grow-1 {
  flex-grow: 1 !important;
}

.is-flex-grow-2 {
  flex-grow: 2 !important;
}

.is-flex-grow-3 {
  flex-grow: 3 !important;
}

.is-flex-grow-4 {
  flex-grow: 4 !important;
}

.is-flex-grow-5 {
  flex-grow: 5 !important;
}

.is-flex-shrink-0 {
  flex-shrink: 0 !important;
}

.is-flex-shrink-1 {
  flex-shrink: 1 !important;
}

.is-flex-shrink-2 {
  flex-shrink: 2 !important;
}

.is-flex-shrink-3 {
  flex-shrink: 3 !important;
}

.is-flex-shrink-4 {
  flex-shrink: 4 !important;
}

.is-flex-shrink-5 {
  flex-shrink: 5 !important;
}

.is-clearfix::after {
  clear: both;
  content: " ";
  display: table;
}

.is-float-left,
.is-pulled-left {
  float: left !important;
}

.is-float-right,
.is-pulled-right {
  float: right !important;
}

.is-float-none {
  float: none !important;
}

.is-clear-both {
  clear: both !important;
}

.is-clear-left {
  clear: left !important;
}

.is-clear-none {
  clear: none !important;
}

.is-clear-right {
  clear: right !important;
}

.is-gapless {
  gap: 0 !important;
}

.is-gap-0 {
  gap: 0rem !important;
}

.is-gap-0\\.5 {
  gap: 0.25rem !important;
}

.is-gap-1 {
  gap: 0.5rem !important;
}

.is-gap-1\\.5 {
  gap: 0.75rem !important;
}

.is-gap-2 {
  gap: 1rem !important;
}

.is-gap-2\\.5 {
  gap: 1.25rem !important;
}

.is-gap-3 {
  gap: 1.5rem !important;
}

.is-gap-3\\.5 {
  gap: 1.75rem !important;
}

.is-gap-4 {
  gap: 2rem !important;
}

.is-gap-4\\.5 {
  gap: 2.25rem !important;
}

.is-gap-5 {
  gap: 2.5rem !important;
}

.is-gap-5\\.5 {
  gap: 2.75rem !important;
}

.is-gap-6 {
  gap: 3rem !important;
}

.is-gap-6\\.5 {
  gap: 3.25rem !important;
}

.is-gap-7 {
  gap: 3.5rem !important;
}

.is-gap-7\\.5 {
  gap: 3.75rem !important;
}

.is-gap-8 {
  gap: 4rem !important;
}

.is-column-gap-0 {
  column-gap: 0rem !important;
}

.is-column-gap-0\\.5 {
  column-gap: 0.25rem !important;
}

.is-column-gap-1 {
  column-gap: 0.5rem !important;
}

.is-column-gap-1\\.5 {
  column-gap: 0.75rem !important;
}

.is-column-gap-2 {
  column-gap: 1rem !important;
}

.is-column-gap-2\\.5 {
  column-gap: 1.25rem !important;
}

.is-column-gap-3 {
  column-gap: 1.5rem !important;
}

.is-column-gap-3\\.5 {
  column-gap: 1.75rem !important;
}

.is-column-gap-4 {
  column-gap: 2rem !important;
}

.is-column-gap-4\\.5 {
  column-gap: 2.25rem !important;
}

.is-column-gap-5 {
  column-gap: 2.5rem !important;
}

.is-column-gap-5\\.5 {
  column-gap: 2.75rem !important;
}

.is-column-gap-6 {
  column-gap: 3rem !important;
}

.is-column-gap-6\\.5 {
  column-gap: 3.25rem !important;
}

.is-column-gap-7 {
  column-gap: 3.5rem !important;
}

.is-column-gap-7\\.5 {
  column-gap: 3.75rem !important;
}

.is-column-gap-8 {
  column-gap: 4rem !important;
}

.is-row-gap-0 {
  row-gap: 0rem !important;
}

.is-row-gap-0\\.5 {
  row-gap: 0.25rem !important;
}

.is-row-gap-1 {
  row-gap: 0.5rem !important;
}

.is-row-gap-1\\.5 {
  row-gap: 0.75rem !important;
}

.is-row-gap-2 {
  row-gap: 1rem !important;
}

.is-row-gap-2\\.5 {
  row-gap: 1.25rem !important;
}

.is-row-gap-3 {
  row-gap: 1.5rem !important;
}

.is-row-gap-3\\.5 {
  row-gap: 1.75rem !important;
}

.is-row-gap-4 {
  row-gap: 2rem !important;
}

.is-row-gap-4\\.5 {
  row-gap: 2.25rem !important;
}

.is-row-gap-5 {
  row-gap: 2.5rem !important;
}

.is-row-gap-5\\.5 {
  row-gap: 2.75rem !important;
}

.is-row-gap-6 {
  row-gap: 3rem !important;
}

.is-row-gap-6\\.5 {
  row-gap: 3.25rem !important;
}

.is-row-gap-7 {
  row-gap: 3.5rem !important;
}

.is-row-gap-7\\.5 {
  row-gap: 3.75rem !important;
}

.is-row-gap-8 {
  row-gap: 4rem !important;
}

.is-clipped {
  overflow: hidden !important;
}

.is-overflow-auto {
  overflow: auto !important;
}

.is-overflow-x-auto {
  overflow-x: auto !important;
}

.is-overflow-y-auto {
  overflow-y: auto !important;
}

.is-overflow-clip {
  overflow: clip !important;
}

.is-overflow-x-clip {
  overflow-x: clip !important;
}

.is-overflow-y-clip {
  overflow-y: clip !important;
}

.is-overflow-hidden {
  overflow: hidden !important;
}

.is-overflow-x-hidden {
  overflow-x: hidden !important;
}

.is-overflow-y-hidden {
  overflow-y: hidden !important;
}

.is-overflow-scroll {
  overflow: scroll !important;
}

.is-overflow-x-scroll {
  overflow-x: scroll !important;
}

.is-overflow-y-scroll {
  overflow-y: scroll !important;
}

.is-overflow-visible {
  overflow: visible !important;
}

.is-overflow-x-visible {
  overflow-x: visible !important;
}

.is-overflow-y-visible {
  overflow-y: visible !important;
}

.is-relative {
  position: relative !important;
}

.is-position-absolute {
  position: absolute !important;
}

.is-position-fixed {
  position: fixed !important;
}

.is-position-relative {
  position: relative !important;
}

.is-position-static {
  position: static !important;
}

.is-position-sticky {
  position: sticky !important;
}

.marginless {
  margin: 0 !important;
}

.paddingless {
  padding: 0 !important;
}

.m-0 {
  margin: 0 !important;
}

.mt-0 {
  margin-top: 0 !important;
}

.mr-0 {
  margin-right: 0 !important;
}

.mb-0 {
  margin-bottom: 0 !important;
}

.ml-0 {
  margin-left: 0 !important;
}

.mx-0 {
  margin-left: 0 !important;
  margin-right: 0 !important;
}

.my-0 {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}

.m-1 {
  margin: 0.25rem !important;
}

.mt-1 {
  margin-top: 0.25rem !important;
}

.mr-1 {
  margin-right: 0.25rem !important;
}

.mb-1 {
  margin-bottom: 0.25rem !important;
}

.ml-1 {
  margin-left: 0.25rem !important;
}

.mx-1 {
  margin-left: 0.25rem !important;
  margin-right: 0.25rem !important;
}

.my-1 {
  margin-top: 0.25rem !important;
  margin-bottom: 0.25rem !important;
}

.m-2 {
  margin: 0.5rem !important;
}

.mt-2 {
  margin-top: 0.5rem !important;
}

.mr-2 {
  margin-right: 0.5rem !important;
}

.mb-2 {
  margin-bottom: 0.5rem !important;
}

.ml-2 {
  margin-left: 0.5rem !important;
}

.mx-2 {
  margin-left: 0.5rem !important;
  margin-right: 0.5rem !important;
}

.my-2 {
  margin-top: 0.5rem !important;
  margin-bottom: 0.5rem !important;
}

.m-3 {
  margin: 0.75rem !important;
}

.mt-3 {
  margin-top: 0.75rem !important;
}

.mr-3 {
  margin-right: 0.75rem !important;
}

.mb-3 {
  margin-bottom: 0.75rem !important;
}

.ml-3 {
  margin-left: 0.75rem !important;
}

.mx-3 {
  margin-left: 0.75rem !important;
  margin-right: 0.75rem !important;
}

.my-3 {
  margin-top: 0.75rem !important;
  margin-bottom: 0.75rem !important;
}

.m-4 {
  margin: 1rem !important;
}

.mt-4 {
  margin-top: 1rem !important;
}

.mr-4 {
  margin-right: 1rem !important;
}

.mb-4 {
  margin-bottom: 1rem !important;
}

.ml-4 {
  margin-left: 1rem !important;
}

.mx-4 {
  margin-left: 1rem !important;
  margin-right: 1rem !important;
}

.my-4 {
  margin-top: 1rem !important;
  margin-bottom: 1rem !important;
}

.m-5 {
  margin: 1.5rem !important;
}

.mt-5 {
  margin-top: 1.5rem !important;
}

.mr-5 {
  margin-right: 1.5rem !important;
}

.mb-5 {
  margin-bottom: 1.5rem !important;
}

.ml-5 {
  margin-left: 1.5rem !important;
}

.mx-5 {
  margin-left: 1.5rem !important;
  margin-right: 1.5rem !important;
}

.my-5 {
  margin-top: 1.5rem !important;
  margin-bottom: 1.5rem !important;
}

.m-6 {
  margin: 3rem !important;
}

.mt-6 {
  margin-top: 3rem !important;
}

.mr-6 {
  margin-right: 3rem !important;
}

.mb-6 {
  margin-bottom: 3rem !important;
}

.ml-6 {
  margin-left: 3rem !important;
}

.mx-6 {
  margin-left: 3rem !important;
  margin-right: 3rem !important;
}

.my-6 {
  margin-top: 3rem !important;
  margin-bottom: 3rem !important;
}

.m-auto {
  margin: auto !important;
}

.mt-auto {
  margin-top: auto !important;
}

.mr-auto {
  margin-right: auto !important;
}

.mb-auto {
  margin-bottom: auto !important;
}

.ml-auto {
  margin-left: auto !important;
}

.mx-auto {
  margin-left: auto !important;
  margin-right: auto !important;
}

.my-auto {
  margin-top: auto !important;
  margin-bottom: auto !important;
}

.p-0 {
  padding: 0 !important;
}

.pt-0 {
  padding-top: 0 !important;
}

.pr-0 {
  padding-right: 0 !important;
}

.pb-0 {
  padding-bottom: 0 !important;
}

.pl-0 {
  padding-left: 0 !important;
}

.px-0 {
  padding-left: 0 !important;
  padding-right: 0 !important;
}

.py-0 {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}

.p-1 {
  padding: 0.25rem !important;
}

.pt-1 {
  padding-top: 0.25rem !important;
}

.pr-1 {
  padding-right: 0.25rem !important;
}

.pb-1 {
  padding-bottom: 0.25rem !important;
}

.pl-1 {
  padding-left: 0.25rem !important;
}

.px-1 {
  padding-left: 0.25rem !important;
  padding-right: 0.25rem !important;
}

.py-1 {
  padding-top: 0.25rem !important;
  padding-bottom: 0.25rem !important;
}

.p-2 {
  padding: 0.5rem !important;
}

.pt-2 {
  padding-top: 0.5rem !important;
}

.pr-2 {
  padding-right: 0.5rem !important;
}

.pb-2 {
  padding-bottom: 0.5rem !important;
}

.pl-2 {
  padding-left: 0.5rem !important;
}

.px-2 {
  padding-left: 0.5rem !important;
  padding-right: 0.5rem !important;
}

.py-2 {
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
}

.p-3 {
  padding: 0.75rem !important;
}

.pt-3 {
  padding-top: 0.75rem !important;
}

.pr-3 {
  padding-right: 0.75rem !important;
}

.pb-3 {
  padding-bottom: 0.75rem !important;
}

.pl-3 {
  padding-left: 0.75rem !important;
}

.px-3 {
  padding-left: 0.75rem !important;
  padding-right: 0.75rem !important;
}

.py-3 {
  padding-top: 0.75rem !important;
  padding-bottom: 0.75rem !important;
}

.p-4 {
  padding: 1rem !important;
}

.pt-4 {
  padding-top: 1rem !important;
}

.pr-4 {
  padding-right: 1rem !important;
}

.pb-4 {
  padding-bottom: 1rem !important;
}

.pl-4 {
  padding-left: 1rem !important;
}

.px-4 {
  padding-left: 1rem !important;
  padding-right: 1rem !important;
}

.py-4 {
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;
}

.p-5 {
  padding: 1.5rem !important;
}

.pt-5 {
  padding-top: 1.5rem !important;
}

.pr-5 {
  padding-right: 1.5rem !important;
}

.pb-5 {
  padding-bottom: 1.5rem !important;
}

.pl-5 {
  padding-left: 1.5rem !important;
}

.px-5 {
  padding-left: 1.5rem !important;
  padding-right: 1.5rem !important;
}

.py-5 {
  padding-top: 1.5rem !important;
  padding-bottom: 1.5rem !important;
}

.p-6 {
  padding: 3rem !important;
}

.pt-6 {
  padding-top: 3rem !important;
}

.pr-6 {
  padding-right: 3rem !important;
}

.pb-6 {
  padding-bottom: 3rem !important;
}

.pl-6 {
  padding-left: 3rem !important;
}

.px-6 {
  padding-left: 3rem !important;
  padding-right: 3rem !important;
}

.py-6 {
  padding-top: 3rem !important;
  padding-bottom: 3rem !important;
}

.p-auto {
  padding: auto !important;
}

.pt-auto {
  padding-top: auto !important;
}

.pr-auto {
  padding-right: auto !important;
}

.pb-auto {
  padding-bottom: auto !important;
}

.pl-auto {
  padding-left: auto !important;
}

.px-auto {
  padding-left: auto !important;
  padding-right: auto !important;
}

.py-auto {
  padding-top: auto !important;
  padding-bottom: auto !important;
}

.is-size-1 {
  font-size: 3rem !important;
}

.is-size-2 {
  font-size: 2.5rem !important;
}

.is-size-3 {
  font-size: 2rem !important;
}

.is-size-4 {
  font-size: 1.5rem !important;
}

.is-size-5 {
  font-size: 1.25rem !important;
}

.is-size-6 {
  font-size: 1rem !important;
}

.is-size-7 {
  font-size: 0.75rem !important;
}

@media screen and (max-width: 768px) {
  .is-size-1-mobile {
    font-size: 3rem !important;
  }
  .is-size-2-mobile {
    font-size: 2.5rem !important;
  }
  .is-size-3-mobile {
    font-size: 2rem !important;
  }
  .is-size-4-mobile {
    font-size: 1.5rem !important;
  }
  .is-size-5-mobile {
    font-size: 1.25rem !important;
  }
  .is-size-6-mobile {
    font-size: 1rem !important;
  }
  .is-size-7-mobile {
    font-size: 0.75rem !important;
  }
}
@media screen and (min-width: 769px), print {
  .is-size-1-tablet {
    font-size: 3rem !important;
  }
  .is-size-2-tablet {
    font-size: 2.5rem !important;
  }
  .is-size-3-tablet {
    font-size: 2rem !important;
  }
  .is-size-4-tablet {
    font-size: 1.5rem !important;
  }
  .is-size-5-tablet {
    font-size: 1.25rem !important;
  }
  .is-size-6-tablet {
    font-size: 1rem !important;
  }
  .is-size-7-tablet {
    font-size: 0.75rem !important;
  }
}
@media screen and (max-width: 1023px) {
  .is-size-1-touch {
    font-size: 3rem !important;
  }
  .is-size-2-touch {
    font-size: 2.5rem !important;
  }
  .is-size-3-touch {
    font-size: 2rem !important;
  }
  .is-size-4-touch {
    font-size: 1.5rem !important;
  }
  .is-size-5-touch {
    font-size: 1.25rem !important;
  }
  .is-size-6-touch {
    font-size: 1rem !important;
  }
  .is-size-7-touch {
    font-size: 0.75rem !important;
  }
}
@media screen and (min-width: 1024px) {
  .is-size-1-desktop {
    font-size: 3rem !important;
  }
  .is-size-2-desktop {
    font-size: 2.5rem !important;
  }
  .is-size-3-desktop {
    font-size: 2rem !important;
  }
  .is-size-4-desktop {
    font-size: 1.5rem !important;
  }
  .is-size-5-desktop {
    font-size: 1.25rem !important;
  }
  .is-size-6-desktop {
    font-size: 1rem !important;
  }
  .is-size-7-desktop {
    font-size: 0.75rem !important;
  }
}
@media screen and (min-width: 1216px) {
  .is-size-1-widescreen {
    font-size: 3rem !important;
  }
  .is-size-2-widescreen {
    font-size: 2.5rem !important;
  }
  .is-size-3-widescreen {
    font-size: 2rem !important;
  }
  .is-size-4-widescreen {
    font-size: 1.5rem !important;
  }
  .is-size-5-widescreen {
    font-size: 1.25rem !important;
  }
  .is-size-6-widescreen {
    font-size: 1rem !important;
  }
  .is-size-7-widescreen {
    font-size: 0.75rem !important;
  }
}
@media screen and (min-width: 1408px) {
  .is-size-1-fullhd {
    font-size: 3rem !important;
  }
  .is-size-2-fullhd {
    font-size: 2.5rem !important;
  }
  .is-size-3-fullhd {
    font-size: 2rem !important;
  }
  .is-size-4-fullhd {
    font-size: 1.5rem !important;
  }
  .is-size-5-fullhd {
    font-size: 1.25rem !important;
  }
  .is-size-6-fullhd {
    font-size: 1rem !important;
  }
  .is-size-7-fullhd {
    font-size: 0.75rem !important;
  }
}
.has-text-centered {
  text-align: center !important;
}

.has-text-justified {
  text-align: justify !important;
}

.has-text-left {
  text-align: left !important;
}

.has-text-right {
  text-align: right !important;
}

@media screen and (max-width: 768px) {
  .has-text-centered-mobile {
    text-align: center !important;
  }
}
@media screen and (min-width: 769px), print {
  .has-text-centered-tablet {
    text-align: center !important;
  }
}
@media screen and (min-width: 769px) and (max-width: 1023px) {
  .has-text-centered-tablet-only {
    text-align: center !important;
  }
}
@media screen and (max-width: 1023px) {
  .has-text-centered-touch {
    text-align: center !important;
  }
}
@media screen and (min-width: 1024px) {
  .has-text-centered-desktop {
    text-align: center !important;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .has-text-centered-desktop-only {
    text-align: center !important;
  }
}
@media screen and (min-width: 1216px) {
  .has-text-centered-widescreen {
    text-align: center !important;
  }
}
@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .has-text-centered-widescreen-only {
    text-align: center !important;
  }
}
@media screen and (min-width: 1408px) {
  .has-text-centered-fullhd {
    text-align: center !important;
  }
}
@media screen and (max-width: 768px) {
  .has-text-justified-mobile {
    text-align: justify !important;
  }
}
@media screen and (min-width: 769px), print {
  .has-text-justified-tablet {
    text-align: justify !important;
  }
}
@media screen and (min-width: 769px) and (max-width: 1023px) {
  .has-text-justified-tablet-only {
    text-align: justify !important;
  }
}
@media screen and (max-width: 1023px) {
  .has-text-justified-touch {
    text-align: justify !important;
  }
}
@media screen and (min-width: 1024px) {
  .has-text-justified-desktop {
    text-align: justify !important;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .has-text-justified-desktop-only {
    text-align: justify !important;
  }
}
@media screen and (min-width: 1216px) {
  .has-text-justified-widescreen {
    text-align: justify !important;
  }
}
@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .has-text-justified-widescreen-only {
    text-align: justify !important;
  }
}
@media screen and (min-width: 1408px) {
  .has-text-justified-fullhd {
    text-align: justify !important;
  }
}
@media screen and (max-width: 768px) {
  .has-text-left-mobile {
    text-align: left !important;
  }
}
@media screen and (min-width: 769px), print {
  .has-text-left-tablet {
    text-align: left !important;
  }
}
@media screen and (min-width: 769px) and (max-width: 1023px) {
  .has-text-left-tablet-only {
    text-align: left !important;
  }
}
@media screen and (max-width: 1023px) {
  .has-text-left-touch {
    text-align: left !important;
  }
}
@media screen and (min-width: 1024px) {
  .has-text-left-desktop {
    text-align: left !important;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .has-text-left-desktop-only {
    text-align: left !important;
  }
}
@media screen and (min-width: 1216px) {
  .has-text-left-widescreen {
    text-align: left !important;
  }
}
@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .has-text-left-widescreen-only {
    text-align: left !important;
  }
}
@media screen and (min-width: 1408px) {
  .has-text-left-fullhd {
    text-align: left !important;
  }
}
@media screen and (max-width: 768px) {
  .has-text-right-mobile {
    text-align: right !important;
  }
}
@media screen and (min-width: 769px), print {
  .has-text-right-tablet {
    text-align: right !important;
  }
}
@media screen and (min-width: 769px) and (max-width: 1023px) {
  .has-text-right-tablet-only {
    text-align: right !important;
  }
}
@media screen and (max-width: 1023px) {
  .has-text-right-touch {
    text-align: right !important;
  }
}
@media screen and (min-width: 1024px) {
  .has-text-right-desktop {
    text-align: right !important;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .has-text-right-desktop-only {
    text-align: right !important;
  }
}
@media screen and (min-width: 1216px) {
  .has-text-right-widescreen {
    text-align: right !important;
  }
}
@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .has-text-right-widescreen-only {
    text-align: right !important;
  }
}
@media screen and (min-width: 1408px) {
  .has-text-right-fullhd {
    text-align: right !important;
  }
}
.is-capitalized {
  text-transform: capitalize !important;
}

.is-lowercase {
  text-transform: lowercase !important;
}

.is-uppercase {
  text-transform: uppercase !important;
}

.is-italic {
  font-style: italic !important;
}

.is-underlined {
  text-decoration: underline !important;
}

.has-text-weight-light {
  font-weight: 300 !important;
}

.has-text-weight-normal {
  font-weight: 400 !important;
}

.has-text-weight-medium {
  font-weight: 500 !important;
}

.has-text-weight-semibold {
  font-weight: 600 !important;
}

.has-text-weight-bold {
  font-weight: 700 !important;
}

.is-family-primary {
  font-family: "Inter", "SF Pro", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Helvetica Neue", "Helvetica", "Arial", sans-serif !important;
}

.is-family-secondary {
  font-family: "Inter", "SF Pro", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Helvetica Neue", "Helvetica", "Arial", sans-serif !important;
}

.is-family-sans-serif {
  font-family: "Inter", "SF Pro", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Helvetica Neue", "Helvetica", "Arial", sans-serif !important;
}

.is-family-monospace {
  font-family: "Inconsolata", "Hack", "SF Mono", "Roboto Mono", "Source Code Pro", "Ubuntu Mono", monospace !important;
}

.is-family-code {
  font-family: "Inconsolata", "Hack", "SF Mono", "Roboto Mono", "Source Code Pro", "Ubuntu Mono", monospace !important;
}

.is-display-none,
.is-hidden {
  display: none !important;
}

.is-display-block,
.is-block {
  display: block !important;
}

@media screen and (max-width: 768px) {
  .is-display-block-mobile,
  .is-block-mobile {
    display: block !important;
  }
}
@media screen and (min-width: 769px), print {
  .is-display-block-tablet,
  .is-block-tablet {
    display: block !important;
  }
}
@media screen and (min-width: 769px) and (max-width: 1023px) {
  .is-display-block-tablet-only,
  .is-block-tablet-only {
    display: block !important;
  }
}
@media screen and (max-width: 1023px) {
  .is-display-block-touch,
  .is-block-touch {
    display: block !important;
  }
}
@media screen and (min-width: 1024px) {
  .is-display-block-desktop,
  .is-block-desktop {
    display: block !important;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .is-display-block-desktop-only,
  .is-block-desktop-only {
    display: block !important;
  }
}
@media screen and (min-width: 1216px) {
  .is-display-block-widescreen,
  .is-block-widescreen {
    display: block !important;
  }
}
@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .is-display-block-widescreen-only,
  .is-block-widescreen-only {
    display: block !important;
  }
}
@media screen and (min-width: 1408px) {
  .is-display-block-fullhd,
  .is-block-fullhd {
    display: block !important;
  }
}
.is-display-flex,
.is-flex {
  display: flex !important;
}

@media screen and (max-width: 768px) {
  .is-display-flex-mobile,
  .is-flex-mobile {
    display: flex !important;
  }
}
@media screen and (min-width: 769px), print {
  .is-display-flex-tablet,
  .is-flex-tablet {
    display: flex !important;
  }
}
@media screen and (min-width: 769px) and (max-width: 1023px) {
  .is-display-flex-tablet-only,
  .is-flex-tablet-only {
    display: flex !important;
  }
}
@media screen and (max-width: 1023px) {
  .is-display-flex-touch,
  .is-flex-touch {
    display: flex !important;
  }
}
@media screen and (min-width: 1024px) {
  .is-display-flex-desktop,
  .is-flex-desktop {
    display: flex !important;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .is-display-flex-desktop-only,
  .is-flex-desktop-only {
    display: flex !important;
  }
}
@media screen and (min-width: 1216px) {
  .is-display-flex-widescreen,
  .is-flex-widescreen {
    display: flex !important;
  }
}
@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .is-display-flex-widescreen-only,
  .is-flex-widescreen-only {
    display: flex !important;
  }
}
@media screen and (min-width: 1408px) {
  .is-display-flex-fullhd,
  .is-flex-fullhd {
    display: flex !important;
  }
}
.is-display-inline,
.is-inline {
  display: inline !important;
}

@media screen and (max-width: 768px) {
  .is-display-inline-mobile,
  .is-inline-mobile {
    display: inline !important;
  }
}
@media screen and (min-width: 769px), print {
  .is-display-inline-tablet,
  .is-inline-tablet {
    display: inline !important;
  }
}
@media screen and (min-width: 769px) and (max-width: 1023px) {
  .is-display-inline-tablet-only,
  .is-inline-tablet-only {
    display: inline !important;
  }
}
@media screen and (max-width: 1023px) {
  .is-display-inline-touch,
  .is-inline-touch {
    display: inline !important;
  }
}
@media screen and (min-width: 1024px) {
  .is-display-inline-desktop,
  .is-inline-desktop {
    display: inline !important;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .is-display-inline-desktop-only,
  .is-inline-desktop-only {
    display: inline !important;
  }
}
@media screen and (min-width: 1216px) {
  .is-display-inline-widescreen,
  .is-inline-widescreen {
    display: inline !important;
  }
}
@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .is-display-inline-widescreen-only,
  .is-inline-widescreen-only {
    display: inline !important;
  }
}
@media screen and (min-width: 1408px) {
  .is-display-inline-fullhd,
  .is-inline-fullhd {
    display: inline !important;
  }
}
.is-display-inline-block,
.is-inline-block {
  display: inline-block !important;
}

@media screen and (max-width: 768px) {
  .is-display-inline-block-mobile,
  .is-inline-block-mobile {
    display: inline-block !important;
  }
}
@media screen and (min-width: 769px), print {
  .is-display-inline-block-tablet,
  .is-inline-block-tablet {
    display: inline-block !important;
  }
}
@media screen and (min-width: 769px) and (max-width: 1023px) {
  .is-display-inline-block-tablet-only,
  .is-inline-block-tablet-only {
    display: inline-block !important;
  }
}
@media screen and (max-width: 1023px) {
  .is-display-inline-block-touch,
  .is-inline-block-touch {
    display: inline-block !important;
  }
}
@media screen and (min-width: 1024px) {
  .is-display-inline-block-desktop,
  .is-inline-block-desktop {
    display: inline-block !important;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .is-display-inline-block-desktop-only,
  .is-inline-block-desktop-only {
    display: inline-block !important;
  }
}
@media screen and (min-width: 1216px) {
  .is-display-inline-block-widescreen,
  .is-inline-block-widescreen {
    display: inline-block !important;
  }
}
@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .is-display-inline-block-widescreen-only,
  .is-inline-block-widescreen-only {
    display: inline-block !important;
  }
}
@media screen and (min-width: 1408px) {
  .is-display-inline-block-fullhd,
  .is-inline-block-fullhd {
    display: inline-block !important;
  }
}
.is-display-inline-flex,
.is-inline-flex {
  display: inline-flex !important;
}

@media screen and (max-width: 768px) {
  .is-display-inline-flex-mobile,
  .is-inline-flex-mobile {
    display: inline-flex !important;
  }
}
@media screen and (min-width: 769px), print {
  .is-display-inline-flex-tablet,
  .is-inline-flex-tablet {
    display: inline-flex !important;
  }
}
@media screen and (min-width: 769px) and (max-width: 1023px) {
  .is-display-inline-flex-tablet-only,
  .is-inline-flex-tablet-only {
    display: inline-flex !important;
  }
}
@media screen and (max-width: 1023px) {
  .is-display-inline-flex-touch,
  .is-inline-flex-touch {
    display: inline-flex !important;
  }
}
@media screen and (min-width: 1024px) {
  .is-display-inline-flex-desktop,
  .is-inline-flex-desktop {
    display: inline-flex !important;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .is-display-inline-flex-desktop-only,
  .is-inline-flex-desktop-only {
    display: inline-flex !important;
  }
}
@media screen and (min-width: 1216px) {
  .is-display-inline-flex-widescreen,
  .is-inline-flex-widescreen {
    display: inline-flex !important;
  }
}
@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .is-display-inline-flex-widescreen-only,
  .is-inline-flex-widescreen-only {
    display: inline-flex !important;
  }
}
@media screen and (min-width: 1408px) {
  .is-display-inline-flex-fullhd,
  .is-inline-flex-fullhd {
    display: inline-flex !important;
  }
}
.is-display-grid,
.is-grid {
  display: grid !important;
}

@media screen and (max-width: 768px) {
  .is-display-grid-mobile,
  .is-grid-mobile {
    display: grid !important;
  }
}
@media screen and (min-width: 769px), print {
  .is-display-grid-tablet,
  .is-grid-tablet {
    display: grid !important;
  }
}
@media screen and (min-width: 769px) and (max-width: 1023px) {
  .is-display-grid-tablet-only,
  .is-grid-tablet-only {
    display: grid !important;
  }
}
@media screen and (max-width: 1023px) {
  .is-display-grid-touch,
  .is-grid-touch {
    display: grid !important;
  }
}
@media screen and (min-width: 1024px) {
  .is-display-grid-desktop,
  .is-grid-desktop {
    display: grid !important;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .is-display-grid-desktop-only,
  .is-grid-desktop-only {
    display: grid !important;
  }
}
@media screen and (min-width: 1216px) {
  .is-display-grid-widescreen,
  .is-grid-widescreen {
    display: grid !important;
  }
}
@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .is-display-grid-widescreen-only,
  .is-grid-widescreen-only {
    display: grid !important;
  }
}
@media screen and (min-width: 1408px) {
  .is-display-grid-fullhd,
  .is-grid-fullhd {
    display: grid !important;
  }
}
.is-sr-only {
  border: none !important;
  clip: rect(0, 0, 0, 0) !important;
  height: 0.01em !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  white-space: nowrap !important;
  width: 0.01em !important;
}

@media screen and (max-width: 768px) {
  .is-display-none-mobile,
  .is-hidden-mobile {
    display: none !important;
  }
}
@media screen and (min-width: 769px), print {
  .is-display-none-tablet,
  .is-hidden-tablet {
    display: none !important;
  }
}
@media screen and (min-width: 769px) and (max-width: 1023px) {
  .is-display-none-tablet-only,
  .is-hidden-tablet-only {
    display: none !important;
  }
}
@media screen and (max-width: 1023px) {
  .is-display-none-touch,
  .is-hidden-touch {
    display: none !important;
  }
}
@media screen and (min-width: 1024px) {
  .is-display-none-desktop,
  .is-hidden-desktop {
    display: none !important;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .is-display-none-desktop-only,
  .is-hidden-desktop-only {
    display: none !important;
  }
}
@media screen and (min-width: 1216px) {
  .is-display-none-widescreen,
  .is-hidden-widescreen {
    display: none !important;
  }
}
@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .is-display-none-widescreen-only,
  .is-hidden-widescreen-only {
    display: none !important;
  }
}
@media screen and (min-width: 1408px) {
  .is-display-none-fullhd,
  .is-hidden-fullhd {
    display: none !important;
  }
}
.is-visibility-hidden,
.is-invisible {
  visibility: hidden !important;
}

@media screen and (max-width: 768px) {
  .is-visibility-hidden-mobile,
  .is-invisible-mobile {
    visibility: hidden !important;
  }
}
@media screen and (min-width: 769px), print {
  .is-visibility-hidden-tablet,
  .is-invisible-tablet {
    visibility: hidden !important;
  }
}
@media screen and (min-width: 769px) and (max-width: 1023px) {
  .is-visibility-hidden-tablet-only,
  .is-invisible-tablet-only {
    visibility: hidden !important;
  }
}
@media screen and (max-width: 1023px) {
  .is-visibility-hidden-touch,
  .is-invisible-touch {
    visibility: hidden !important;
  }
}
@media screen and (min-width: 1024px) {
  .is-visibility-hidden-desktop,
  .is-invisible-desktop {
    visibility: hidden !important;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .is-visibility-hidden-desktop-only,
  .is-invisible-desktop-only {
    visibility: hidden !important;
  }
}
@media screen and (min-width: 1216px) {
  .is-visibility-hidden-widescreen,
  .is-invisible-widescreen {
    visibility: hidden !important;
  }
}
@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .is-visibility-hidden-widescreen-only,
  .is-invisible-widescreen-only {
    visibility: hidden !important;
  }
}
@media screen and (min-width: 1408px) {
  .is-visibility-hidden-fullhd,
  .is-invisible-fullhd {
    visibility: hidden !important;
  }
}
.is-radiusless {
  border-radius: 0 !important;
}

.is-shadowless {
  box-shadow: none !important;
}

.is-clickable {
  cursor: pointer !important;
  pointer-events: all !important;
}
`,""]);let u=t},"../../node_modules/.pnpm/css-loader@6.10.0_webpack@5.91.0/node_modules/css-loader/dist/runtime/api.js":a=>{a.exports=function(a){var l=[];return l.toString=function(){return this.map(function(l){var r="",e=void 0!==l[5];return l[4]&&(r+="@supports (".concat(l[4],") {")),l[2]&&(r+="@media ".concat(l[2]," {")),e&&(r+="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {")),r+=a(l),e&&(r+="}"),l[2]&&(r+="}"),l[4]&&(r+="}"),r}).join("")},l.i=function(a,r,e,i,n){"string"==typeof a&&(a=[[null,a,void 0]]);var t={};if(e)for(var u=0;u<this.length;u++){var o=this[u][0];null!=o&&(t[o]=!0)}for(var b=0;b<a.length;b++){var m=[].concat(a[b]);e&&t[m[0]]||(void 0!==n&&(void 0===m[5]||(m[1]="@layer".concat(m[5].length>0?" ".concat(m[5]):""," {").concat(m[1],"}")),m[5]=n),r&&(m[2]&&(m[1]="@media ".concat(m[2]," {").concat(m[1],"}")),m[2]=r),i&&(m[4]?(m[1]="@supports (".concat(m[4],") {").concat(m[1],"}"),m[4]=i):m[4]="".concat(i)),l.push(m))}},l}},"../../node_modules/.pnpm/css-loader@6.10.0_webpack@5.91.0/node_modules/css-loader/dist/runtime/noSourceMaps.js":a=>{a.exports=function(a){return a[1]}},"../../node_modules/.pnpm/bulma@1.0.0/node_modules/bulma/css/bulma.css":(a,l,r)=>{var e=r("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.91.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=r.n(e),n=r("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.91.0/node_modules/style-loader/dist/runtime/styleDomAPI.js"),t=r.n(n),u=r("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.91.0/node_modules/style-loader/dist/runtime/insertBySelector.js"),o=r.n(u),b=r("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.91.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),m=r.n(b),s=r("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.91.0/node_modules/style-loader/dist/runtime/insertStyleElement.js"),c=r.n(s),v=r("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.91.0/node_modules/style-loader/dist/runtime/styleTagTransform.js"),d=r.n(v),h=r("../../node_modules/.pnpm/css-loader@6.10.0_webpack@5.91.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!../../node_modules/.pnpm/bulma@1.0.0/node_modules/bulma/css/bulma.css"),g={};g.styleTagTransform=d(),g.setAttributes=m(),g.insert=o().bind(null,"head"),g.domAPI=t(),g.insertStyleElement=c(),i()(h.A,g),h.A&&h.A.locals&&h.A.locals},"../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.91.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":a=>{var l=[];function r(a){for(var r=-1,e=0;e<l.length;e++)if(l[e].identifier===a){r=e;break}return r}function e(a,e){for(var i={},n=[],t=0;t<a.length;t++){var u=a[t],o=e.base?u[0]+e.base:u[0],b=i[o]||0,m="".concat(o," ").concat(b);i[o]=b+1;var s=r(m),c={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==s)l[s].references++,l[s].updater(c);else{var v=function(a,l){var r=l.domAPI(l);return r.update(a),function(l){l?(l.css!==a.css||l.media!==a.media||l.sourceMap!==a.sourceMap||l.supports!==a.supports||l.layer!==a.layer)&&r.update(a=l):r.remove()}}(c,e);e.byIndex=t,l.splice(t,0,{identifier:m,updater:v,references:1})}n.push(m)}return n}a.exports=function(a,i){var n=e(a=a||[],i=i||{});return function(a){a=a||[];for(var t=0;t<n.length;t++){var u=r(n[t]);l[u].references--}for(var o=e(a,i),b=0;b<n.length;b++){var m=r(n[b]);0===l[m].references&&(l[m].updater(),l.splice(m,1))}n=o}}},"../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.91.0/node_modules/style-loader/dist/runtime/insertBySelector.js":a=>{var l={};a.exports=function(a,r){var e=function(a){if(void 0===l[a]){var r=document.querySelector(a);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(a){r=null}l[a]=r}return l[a]}(a);if(!e)throw Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(r)}},"../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.91.0/node_modules/style-loader/dist/runtime/insertStyleElement.js":a=>{a.exports=function(a){var l=document.createElement("style");return a.setAttributes(l,a.attributes),a.insert(l,a.options),l}},"../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.91.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(a,l,r)=>{a.exports=function(a){var l=r.nc;l&&a.setAttribute("nonce",l)}},"../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.91.0/node_modules/style-loader/dist/runtime/styleDomAPI.js":a=>{a.exports=function(a){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var l=a.insertStyleElement(a);return{update:function(r){var e,i,n;e="",r.supports&&(e+="@supports (".concat(r.supports,") {")),r.media&&(e+="@media ".concat(r.media," {")),(i=void 0!==r.layer)&&(e+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),e+=r.css,i&&(e+="}"),r.media&&(e+="}"),r.supports&&(e+="}"),(n=r.sourceMap)&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),a.styleTagTransform(e,l,a.options)},remove:function(){var a;null!==(a=l).parentNode&&a.parentNode.removeChild(a)}}}},"../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.91.0/node_modules/style-loader/dist/runtime/styleTagTransform.js":a=>{a.exports=function(a,l){if(l.styleSheet)l.styleSheet.cssText=a;else{for(;l.firstChild;)l.removeChild(l.firstChild);l.appendChild(document.createTextNode(a))}}}}]);