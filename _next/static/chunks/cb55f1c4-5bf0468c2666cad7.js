"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[156],{98903:(a,e,r)=>{r.d(e,{A:()=>c});var o=r(40469),t=r.n(o),i=r(61524),n=r.n(i)()(t());n.push([a.id,`/* ----- CSS reset ----- */
*,
*::before,
*::after {
  box-sizing: border-box;
}

input,
button,
textarea,
select {
  font: inherit;
}

button,
select {
  text-transform: none;
}

/* ----- Global styles ----- */
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji;
  font-family: var(--mantine-font-family);
  font-size: calc(1rem * 1);
  font-size: var(--mantine-font-size-md);
  line-height: 1.55;
  line-height: var(--mantine-line-height);
  background-color: var(--mantine-color-body);
  color: var(--mantine-color-text);

  -webkit-font-smoothing: antialiased;

  -webkit-font-smoothing: var(--mantine-webkit-font-smoothing);
  -moz-osx-font-smoothing: grayscale;
  -moz-osx-font-smoothing: var(--mantine-moz-font-smoothing);
}
@media screen and (max-device-width: 31.25em) {
body {
    -webkit-text-size-adjust: 100%
}
  }

@media (prefers-reduced-motion: reduce) {
    [data-respect-reduced-motion] [data-reduce-motion] {
      transition: none;
      animation: none;
    }
  }

[data-mantine-color-scheme='light'] .mantine-light-hidden {
    display: none;
}

[data-mantine-color-scheme='dark'] .mantine-dark-hidden {
    display: none;
}

.mantine-focus-auto:focus-visible {
    outline: 2px solid var(--mantine-primary-color-filled);
    outline-offset: calc(0.125rem * 1);
    outline-offset: calc(0.125rem * var(--mantine-scale));
  }

.mantine-focus-always:focus {
    outline: 2px solid var(--mantine-primary-color-filled);
    outline-offset: calc(0.125rem * 1);
    outline-offset: calc(0.125rem * var(--mantine-scale));
  }

.mantine-focus-never:focus {
    outline: none;
  }

.mantine-active:active {
    transform: translateY(calc(0.0625rem * 1));
    transform: translateY(calc(0.0625rem * var(--mantine-scale)));
  }

fieldset:disabled .mantine-active:active {
    transform: none;
  }

:where([dir="rtl"]) .mantine-rotate-rtl {
    transform: rotate(180deg);
}

/* ----- Default CSS variables ----- */

:root {
  --csstools-color-scheme--light: initial;
  color-scheme: light dark;
  color-scheme: var(--mantine-color-scheme);

  --mantine-z-index-app: 100;
  --mantine-z-index-modal: 200;
  --mantine-z-index-popover: 300;
  --mantine-z-index-overlay: 400;
  --mantine-z-index-max: 9999;

  --mantine-scale: 1;
  --mantine-cursor-type: default;
  --mantine-webkit-font-smoothing: antialiased;
  --mantine-color-scheme: light dark;
  --mantine-moz-font-smoothing: grayscale;
  --mantine-color-white: #fff;
  --mantine-color-black: #000;
  --mantine-line-height: 1.55;
  --mantine-font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji;
  --mantine-font-family-monospace: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    Liberation Mono, Courier New, monospace;
  --mantine-font-family-headings: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica,
    Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
  --mantine-heading-font-weight: 700;
  --mantine-radius-default: calc(0.25rem * var(--mantine-scale));
  --mantine-primary-color-0: var(--mantine-color-blue-0);
  --mantine-primary-color-1: var(--mantine-color-blue-1);
  --mantine-primary-color-2: var(--mantine-color-blue-2);
  --mantine-primary-color-3: var(--mantine-color-blue-3);
  --mantine-primary-color-4: var(--mantine-color-blue-4);
  --mantine-primary-color-5: var(--mantine-color-blue-5);
  --mantine-primary-color-6: var(--mantine-color-blue-6);
  --mantine-primary-color-7: var(--mantine-color-blue-7);
  --mantine-primary-color-8: var(--mantine-color-blue-8);
  --mantine-primary-color-9: var(--mantine-color-blue-9);
  --mantine-primary-color-filled: var(--mantine-color-blue-filled);
  --mantine-primary-color-filled-hover: var(--mantine-color-blue-filled-hover);
  --mantine-primary-color-light: var(--mantine-color-blue-light);
  --mantine-primary-color-light-hover: var(--mantine-color-blue-light-hover);
  --mantine-primary-color-light-color: var(--mantine-color-blue-light-color);
  --mantine-breakpoint-xs: 36em;
  --mantine-breakpoint-sm: 48em;
  --mantine-breakpoint-md: 62em;
  --mantine-breakpoint-lg: 75em;
  --mantine-breakpoint-xl: 88em;
  --mantine-spacing-xs: calc(0.625rem * var(--mantine-scale));
  --mantine-spacing-sm: calc(0.75rem * var(--mantine-scale));
  --mantine-spacing-md: calc(1rem * var(--mantine-scale));
  --mantine-spacing-lg: calc(1.25rem * var(--mantine-scale));
  --mantine-spacing-xl: calc(2rem * var(--mantine-scale));
  --mantine-font-size-xs: calc(0.75rem * var(--mantine-scale));
  --mantine-font-size-sm: calc(0.875rem * var(--mantine-scale));
  --mantine-font-size-md: calc(1rem * var(--mantine-scale));
  --mantine-font-size-lg: calc(1.125rem * var(--mantine-scale));
  --mantine-font-size-xl: calc(1.25rem * var(--mantine-scale));
  --mantine-line-height-xs: 1.4;
  --mantine-line-height-sm: 1.45;
  --mantine-line-height-md: 1.55;
  --mantine-line-height-lg: 1.6;
  --mantine-line-height-xl: 1.65;
  --mantine-shadow-xs: 0 calc(0.0625rem * var(--mantine-scale))
      calc(0.1875rem * var(--mantine-scale)) rgba(0, 0, 0, 0.05),
    0 calc(0.0625rem * var(--mantine-scale)) calc(0.125rem * var(--mantine-scale))
      rgba(0, 0, 0, 0.1);
  --mantine-shadow-sm: 0 calc(0.0625rem * var(--mantine-scale))
      calc(0.1875rem * var(--mantine-scale)) rgba(0, 0, 0, 0.05),
    rgba(0, 0, 0, 0.05) 0 calc(0.625rem * var(--mantine-scale))
      calc(0.9375rem * var(--mantine-scale)) calc(-0.3125rem * var(--mantine-scale)),
    rgba(0, 0, 0, 0.04) 0 calc(0.4375rem * var(--mantine-scale))
      calc(0.4375rem * var(--mantine-scale)) calc(-0.3125rem * var(--mantine-scale));
  --mantine-shadow-md: 0 calc(0.0625rem * var(--mantine-scale))
      calc(0.1875rem * var(--mantine-scale)) rgba(0, 0, 0, 0.05),
    rgba(0, 0, 0, 0.05) 0 calc(1.25rem * var(--mantine-scale))
      calc(1.5625rem * var(--mantine-scale)) calc(-0.3125rem * var(--mantine-scale)),
    rgba(0, 0, 0, 0.04) 0 calc(0.625rem * var(--mantine-scale))
      calc(0.625rem * var(--mantine-scale)) calc(-0.3125rem * var(--mantine-scale));
  --mantine-shadow-lg: 0 calc(0.0625rem * var(--mantine-scale))
      calc(0.1875rem * var(--mantine-scale)) rgba(0, 0, 0, 0.05),
    rgba(0, 0, 0, 0.05) 0 calc(1.75rem * var(--mantine-scale))
      calc(1.4375rem * var(--mantine-scale)) calc(-0.4375rem * var(--mantine-scale)),
    rgba(0, 0, 0, 0.04) 0 calc(0.75rem * var(--mantine-scale)) calc(0.75rem * var(--mantine-scale))
      calc(-0.4375rem * var(--mantine-scale));
  --mantine-shadow-xl: 0 calc(0.0625rem * var(--mantine-scale))
      calc(0.1875rem * var(--mantine-scale)) rgba(0, 0, 0, 0.05),
    rgba(0, 0, 0, 0.05) 0 calc(2.25rem * var(--mantine-scale)) calc(1.75rem * var(--mantine-scale))
      calc(-0.4375rem * var(--mantine-scale)),
    rgba(0, 0, 0, 0.04) 0 calc(1.0625rem * var(--mantine-scale))
      calc(1.0625rem * var(--mantine-scale)) calc(-0.4375rem * var(--mantine-scale));
  --mantine-radius-xs: calc(0.125rem * var(--mantine-scale));
  --mantine-radius-sm: calc(0.25rem * var(--mantine-scale));
  --mantine-radius-md: calc(0.5rem * var(--mantine-scale));
  --mantine-radius-lg: calc(1rem * var(--mantine-scale));
  --mantine-radius-xl: calc(2rem * var(--mantine-scale));
  --mantine-color-dark-0: #c9c9c9;
  --mantine-color-dark-1: #b8b8b8;
  --mantine-color-dark-2: #828282;
  --mantine-color-dark-3: #696969;
  --mantine-color-dark-4: #424242;
  --mantine-color-dark-5: #3b3b3b;
  --mantine-color-dark-6: #2e2e2e;
  --mantine-color-dark-7: #242424;
  --mantine-color-dark-8: #1f1f1f;
  --mantine-color-dark-9: #141414;
  --mantine-color-gray-0: #f8f9fa;
  --mantine-color-gray-1: #f1f3f5;
  --mantine-color-gray-2: #e9ecef;
  --mantine-color-gray-3: #dee2e6;
  --mantine-color-gray-4: #ced4da;
  --mantine-color-gray-5: #adb5bd;
  --mantine-color-gray-6: #868e96;
  --mantine-color-gray-7: #495057;
  --mantine-color-gray-8: #343a40;
  --mantine-color-gray-9: #212529;
  --mantine-color-red-0: #fff5f5;
  --mantine-color-red-1: #ffe3e3;
  --mantine-color-red-2: #ffc9c9;
  --mantine-color-red-3: #ffa8a8;
  --mantine-color-red-4: #ff8787;
  --mantine-color-red-5: #ff6b6b;
  --mantine-color-red-6: #fa5252;
  --mantine-color-red-7: #f03e3e;
  --mantine-color-red-8: #e03131;
  --mantine-color-red-9: #c92a2a;
  --mantine-color-pink-0: #fff0f6;
  --mantine-color-pink-1: #ffdeeb;
  --mantine-color-pink-2: #fcc2d7;
  --mantine-color-pink-3: #faa2c1;
  --mantine-color-pink-4: #f783ac;
  --mantine-color-pink-5: #f06595;
  --mantine-color-pink-6: #e64980;
  --mantine-color-pink-7: #d6336c;
  --mantine-color-pink-8: #c2255c;
  --mantine-color-pink-9: #a61e4d;
  --mantine-color-grape-0: #f8f0fc;
  --mantine-color-grape-1: #f3d9fa;
  --mantine-color-grape-2: #eebefa;
  --mantine-color-grape-3: #e599f7;
  --mantine-color-grape-4: #da77f2;
  --mantine-color-grape-5: #cc5de8;
  --mantine-color-grape-6: #be4bdb;
  --mantine-color-grape-7: #ae3ec9;
  --mantine-color-grape-8: #9c36b5;
  --mantine-color-grape-9: #862e9c;
  --mantine-color-violet-0: #f3f0ff;
  --mantine-color-violet-1: #e5dbff;
  --mantine-color-violet-2: #d0bfff;
  --mantine-color-violet-3: #b197fc;
  --mantine-color-violet-4: #9775fa;
  --mantine-color-violet-5: #845ef7;
  --mantine-color-violet-6: #7950f2;
  --mantine-color-violet-7: #7048e8;
  --mantine-color-violet-8: #6741d9;
  --mantine-color-violet-9: #5f3dc4;
  --mantine-color-indigo-0: #edf2ff;
  --mantine-color-indigo-1: #dbe4ff;
  --mantine-color-indigo-2: #bac8ff;
  --mantine-color-indigo-3: #91a7ff;
  --mantine-color-indigo-4: #748ffc;
  --mantine-color-indigo-5: #5c7cfa;
  --mantine-color-indigo-6: #4c6ef5;
  --mantine-color-indigo-7: #4263eb;
  --mantine-color-indigo-8: #3b5bdb;
  --mantine-color-indigo-9: #364fc7;
  --mantine-color-blue-0: #e7f5ff;
  --mantine-color-blue-1: #d0ebff;
  --mantine-color-blue-2: #a5d8ff;
  --mantine-color-blue-3: #74c0fc;
  --mantine-color-blue-4: #4dabf7;
  --mantine-color-blue-5: #339af0;
  --mantine-color-blue-6: #228be6;
  --mantine-color-blue-7: #1c7ed6;
  --mantine-color-blue-8: #1971c2;
  --mantine-color-blue-9: #1864ab;
  --mantine-color-cyan-0: #e3fafc;
  --mantine-color-cyan-1: #c5f6fa;
  --mantine-color-cyan-2: #99e9f2;
  --mantine-color-cyan-3: #66d9e8;
  --mantine-color-cyan-4: #3bc9db;
  --mantine-color-cyan-5: #22b8cf;
  --mantine-color-cyan-6: #15aabf;
  --mantine-color-cyan-7: #1098ad;
  --mantine-color-cyan-8: #0c8599;
  --mantine-color-cyan-9: #0b7285;
  --mantine-color-teal-0: #e6fcf5;
  --mantine-color-teal-1: #c3fae8;
  --mantine-color-teal-2: #96f2d7;
  --mantine-color-teal-3: #63e6be;
  --mantine-color-teal-4: #38d9a9;
  --mantine-color-teal-5: #20c997;
  --mantine-color-teal-6: #12b886;
  --mantine-color-teal-7: #0ca678;
  --mantine-color-teal-8: #099268;
  --mantine-color-teal-9: #087f5b;
  --mantine-color-green-0: #ebfbee;
  --mantine-color-green-1: #d3f9d8;
  --mantine-color-green-2: #b2f2bb;
  --mantine-color-green-3: #8ce99a;
  --mantine-color-green-4: #69db7c;
  --mantine-color-green-5: #51cf66;
  --mantine-color-green-6: #40c057;
  --mantine-color-green-7: #37b24d;
  --mantine-color-green-8: #2f9e44;
  --mantine-color-green-9: #2b8a3e;
  --mantine-color-lime-0: #f4fce3;
  --mantine-color-lime-1: #e9fac8;
  --mantine-color-lime-2: #d8f5a2;
  --mantine-color-lime-3: #c0eb75;
  --mantine-color-lime-4: #a9e34b;
  --mantine-color-lime-5: #94d82d;
  --mantine-color-lime-6: #82c91e;
  --mantine-color-lime-7: #74b816;
  --mantine-color-lime-8: #66a80f;
  --mantine-color-lime-9: #5c940d;
  --mantine-color-yellow-0: #fff9db;
  --mantine-color-yellow-1: #fff3bf;
  --mantine-color-yellow-2: #ffec99;
  --mantine-color-yellow-3: #ffe066;
  --mantine-color-yellow-4: #ffd43b;
  --mantine-color-yellow-5: #fcc419;
  --mantine-color-yellow-6: #fab005;
  --mantine-color-yellow-7: #f59f00;
  --mantine-color-yellow-8: #f08c00;
  --mantine-color-yellow-9: #e67700;
  --mantine-color-orange-0: #fff4e6;
  --mantine-color-orange-1: #ffe8cc;
  --mantine-color-orange-2: #ffd8a8;
  --mantine-color-orange-3: #ffc078;
  --mantine-color-orange-4: #ffa94d;
  --mantine-color-orange-5: #ff922b;
  --mantine-color-orange-6: #fd7e14;
  --mantine-color-orange-7: #f76707;
  --mantine-color-orange-8: #e8590c;
  --mantine-color-orange-9: #d9480f;
  --mantine-h1-font-size: calc(2.125rem * var(--mantine-scale));
  --mantine-h1-line-height: 1.3;
  --mantine-h1-font-weight: 700;
  --mantine-h2-font-size: calc(1.625rem * var(--mantine-scale));
  --mantine-h2-line-height: 1.35;
  --mantine-h2-font-weight: 700;
  --mantine-h3-font-size: calc(1.375rem * var(--mantine-scale));
  --mantine-h3-line-height: 1.4;
  --mantine-h3-font-weight: 700;
  --mantine-h4-font-size: calc(1.125rem * var(--mantine-scale));
  --mantine-h4-line-height: 1.45;
  --mantine-h4-font-weight: 700;
  --mantine-h5-font-size: calc(1rem * var(--mantine-scale));
  --mantine-h5-line-height: 1.5;
  --mantine-h5-font-weight: 700;
  --mantine-h6-font-size: calc(0.875rem * var(--mantine-scale));
  --mantine-h6-line-height: 1.5;
  --mantine-h6-font-weight: 700;
}

@media (prefers-color-scheme: dark) {

:root {
  --csstools-color-scheme--light:  ;
}
}

:root[data-mantine-color-scheme='dark'] {
  --mantine-color-scheme: dark;
  --mantine-primary-color-contrast: var(--mantine-color-white);
  --mantine-color-bright: var(--mantine-color-white);
  --mantine-color-text: var(--mantine-color-dark-0);
  --mantine-color-body: var(--mantine-color-dark-7);
  --mantine-color-error: var(--mantine-color-red-8);
  --mantine-color-placeholder: var(--mantine-color-dark-3);
  --mantine-color-anchor: var(--mantine-color-blue-4);
  --mantine-color-default: var(--mantine-color-dark-6);
  --mantine-color-default-hover: var(--mantine-color-dark-5);
  --mantine-color-default-color: var(--mantine-color-white);
  --mantine-color-default-border: var(--mantine-color-dark-4);
  --mantine-color-dimmed: var(--mantine-color-dark-2);
  --mantine-color-dark-text: var(--mantine-color-dark-4);
  --mantine-color-dark-filled: var(--mantine-color-dark-8);
  --mantine-color-dark-filled-hover: var(--mantine-color-dark-7);
  --mantine-color-dark-light: rgba(36, 36, 36, 0.15);
  --mantine-color-dark-light-hover: rgba(36, 36, 36, 0.2);
  --mantine-color-dark-light-color: var(--mantine-color-dark-3);
  --mantine-color-dark-outline: var(--mantine-color-dark-4);
  --mantine-color-dark-outline-hover: rgba(36, 36, 36, 0.05);
  --mantine-color-gray-text: var(--mantine-color-gray-4);
  --mantine-color-gray-filled: var(--mantine-color-gray-8);
  --mantine-color-gray-filled-hover: var(--mantine-color-gray-9);
  --mantine-color-gray-light: rgba(134, 142, 150, 0.15);
  --mantine-color-gray-light-hover: rgba(134, 142, 150, 0.2);
  --mantine-color-gray-light-color: var(--mantine-color-gray-3);
  --mantine-color-gray-outline: var(--mantine-color-gray-4);
  --mantine-color-gray-outline-hover: rgba(206, 212, 218, 0.05);
  --mantine-color-red-text: var(--mantine-color-red-4);
  --mantine-color-red-filled: var(--mantine-color-red-8);
  --mantine-color-red-filled-hover: var(--mantine-color-red-9);
  --mantine-color-red-light: rgba(250, 82, 82, 0.15);
  --mantine-color-red-light-hover: rgba(250, 82, 82, 0.2);
  --mantine-color-red-light-color: var(--mantine-color-red-3);
  --mantine-color-red-outline: var(--mantine-color-red-4);
  --mantine-color-red-outline-hover: rgba(255, 135, 135, 0.05);
  --mantine-color-pink-text: var(--mantine-color-pink-4);
  --mantine-color-pink-filled: var(--mantine-color-pink-8);
  --mantine-color-pink-filled-hover: var(--mantine-color-pink-9);
  --mantine-color-pink-light: rgba(230, 73, 128, 0.15);
  --mantine-color-pink-light-hover: rgba(230, 73, 128, 0.2);
  --mantine-color-pink-light-color: var(--mantine-color-pink-3);
  --mantine-color-pink-outline: var(--mantine-color-pink-4);
  --mantine-color-pink-outline-hover: rgba(247, 131, 172, 0.05);
  --mantine-color-grape-text: var(--mantine-color-grape-4);
  --mantine-color-grape-filled: var(--mantine-color-grape-8);
  --mantine-color-grape-filled-hover: var(--mantine-color-grape-9);
  --mantine-color-grape-light: rgba(190, 75, 219, 0.15);
  --mantine-color-grape-light-hover: rgba(190, 75, 219, 0.2);
  --mantine-color-grape-light-color: var(--mantine-color-grape-3);
  --mantine-color-grape-outline: var(--mantine-color-grape-4);
  --mantine-color-grape-outline-hover: rgba(218, 119, 242, 0.05);
  --mantine-color-violet-text: var(--mantine-color-violet-4);
  --mantine-color-violet-filled: var(--mantine-color-violet-8);
  --mantine-color-violet-filled-hover: var(--mantine-color-violet-9);
  --mantine-color-violet-light: rgba(121, 80, 242, 0.15);
  --mantine-color-violet-light-hover: rgba(121, 80, 242, 0.2);
  --mantine-color-violet-light-color: var(--mantine-color-violet-3);
  --mantine-color-violet-outline: var(--mantine-color-violet-4);
  --mantine-color-violet-outline-hover: rgba(151, 117, 250, 0.05);
  --mantine-color-indigo-text: var(--mantine-color-indigo-4);
  --mantine-color-indigo-filled: var(--mantine-color-indigo-8);
  --mantine-color-indigo-filled-hover: var(--mantine-color-indigo-9);
  --mantine-color-indigo-light: rgba(76, 110, 245, 0.15);
  --mantine-color-indigo-light-hover: rgba(76, 110, 245, 0.2);
  --mantine-color-indigo-light-color: var(--mantine-color-indigo-3);
  --mantine-color-indigo-outline: var(--mantine-color-indigo-4);
  --mantine-color-indigo-outline-hover: rgba(116, 143, 252, 0.05);
  --mantine-color-blue-text: var(--mantine-color-blue-4);
  --mantine-color-blue-filled: var(--mantine-color-blue-8);
  --mantine-color-blue-filled-hover: var(--mantine-color-blue-9);
  --mantine-color-blue-light: rgba(34, 139, 230, 0.15);
  --mantine-color-blue-light-hover: rgba(34, 139, 230, 0.2);
  --mantine-color-blue-light-color: var(--mantine-color-blue-3);
  --mantine-color-blue-outline: var(--mantine-color-blue-4);
  --mantine-color-blue-outline-hover: rgba(77, 171, 247, 0.05);
  --mantine-color-cyan-text: var(--mantine-color-cyan-4);
  --mantine-color-cyan-filled: var(--mantine-color-cyan-8);
  --mantine-color-cyan-filled-hover: var(--mantine-color-cyan-9);
  --mantine-color-cyan-light: rgba(21, 170, 191, 0.15);
  --mantine-color-cyan-light-hover: rgba(21, 170, 191, 0.2);
  --mantine-color-cyan-light-color: var(--mantine-color-cyan-3);
  --mantine-color-cyan-outline: var(--mantine-color-cyan-4);
  --mantine-color-cyan-outline-hover: rgba(59, 201, 219, 0.05);
  --mantine-color-teal-text: var(--mantine-color-teal-4);
  --mantine-color-teal-filled: var(--mantine-color-teal-8);
  --mantine-color-teal-filled-hover: var(--mantine-color-teal-9);
  --mantine-color-teal-light: rgba(18, 184, 134, 0.15);
  --mantine-color-teal-light-hover: rgba(18, 184, 134, 0.2);
  --mantine-color-teal-light-color: var(--mantine-color-teal-3);
  --mantine-color-teal-outline: var(--mantine-color-teal-4);
  --mantine-color-teal-outline-hover: rgba(56, 217, 169, 0.05);
  --mantine-color-green-text: var(--mantine-color-green-4);
  --mantine-color-green-filled: var(--mantine-color-green-8);
  --mantine-color-green-filled-hover: var(--mantine-color-green-9);
  --mantine-color-green-light: rgba(64, 192, 87, 0.15);
  --mantine-color-green-light-hover: rgba(64, 192, 87, 0.2);
  --mantine-color-green-light-color: var(--mantine-color-green-3);
  --mantine-color-green-outline: var(--mantine-color-green-4);
  --mantine-color-green-outline-hover: rgba(105, 219, 124, 0.05);
  --mantine-color-lime-text: var(--mantine-color-lime-4);
  --mantine-color-lime-filled: var(--mantine-color-lime-8);
  --mantine-color-lime-filled-hover: var(--mantine-color-lime-9);
  --mantine-color-lime-light: rgba(130, 201, 30, 0.15);
  --mantine-color-lime-light-hover: rgba(130, 201, 30, 0.2);
  --mantine-color-lime-light-color: var(--mantine-color-lime-3);
  --mantine-color-lime-outline: var(--mantine-color-lime-4);
  --mantine-color-lime-outline-hover: rgba(169, 227, 75, 0.05);
  --mantine-color-yellow-text: var(--mantine-color-yellow-4);
  --mantine-color-yellow-filled: var(--mantine-color-yellow-8);
  --mantine-color-yellow-filled-hover: var(--mantine-color-yellow-9);
  --mantine-color-yellow-light: rgba(250, 176, 5, 0.15);
  --mantine-color-yellow-light-hover: rgba(250, 176, 5, 0.2);
  --mantine-color-yellow-light-color: var(--mantine-color-yellow-3);
  --mantine-color-yellow-outline: var(--mantine-color-yellow-4);
  --mantine-color-yellow-outline-hover: rgba(255, 212, 59, 0.05);
  --mantine-color-orange-text: var(--mantine-color-orange-4);
  --mantine-color-orange-filled: var(--mantine-color-orange-8);
  --mantine-color-orange-filled-hover: var(--mantine-color-orange-9);
  --mantine-color-orange-light: rgba(253, 126, 20, 0.15);
  --mantine-color-orange-light-hover: rgba(253, 126, 20, 0.2);
  --mantine-color-orange-light-color: var(--mantine-color-orange-3);
  --mantine-color-orange-outline: var(--mantine-color-orange-4);
  --mantine-color-orange-outline-hover: rgba(255, 169, 77, 0.05);
}

:root[data-mantine-color-scheme='light'] {
  --mantine-color-scheme: light;
  --mantine-color-bright: var(--mantine-color-black);
  --mantine-color-text: var(--mantine-color-black);
  --mantine-color-body: var(--mantine-color-white);
  --mantine-primary-color-contrast: var(--mantine-color-white);
  --mantine-color-error: var(--mantine-color-red-6);
  --mantine-color-placeholder: var(--mantine-color-gray-5);
  --mantine-color-anchor: var(--mantine-primary-color-filled);
  --mantine-color-default: var(--mantine-color-white);
  --mantine-color-default-hover: var(--mantine-color-gray-0);
  --mantine-color-default-color: var(--mantine-color-gray-9);
  --mantine-color-default-border: var(--mantine-color-gray-4);
  --mantine-color-dimmed: var(--mantine-color-gray-6);
  --mantine-color-dark-text: var(--mantine-color-dark-filled);
  --mantine-color-dark-filled: var(--mantine-color-dark-6);
  --mantine-color-dark-filled-hover: var(--mantine-color-dark-7);
  --mantine-color-dark-light: rgba(56, 56, 56, 0.1);
  --mantine-color-dark-light-hover: rgba(56, 56, 56, 0.12);
  --mantine-color-dark-light-color: var(--mantine-color-dark-6);
  --mantine-color-dark-outline: var(--mantine-color-dark-6);
  --mantine-color-dark-outline-hover: rgba(56, 56, 56, 0.05);
  --mantine-color-gray-text: var(--mantine-color-gray-filled);
  --mantine-color-gray-filled: var(--mantine-color-gray-6);
  --mantine-color-gray-filled-hover: var(--mantine-color-gray-7);
  --mantine-color-gray-light: rgba(134, 142, 150, 0.1);
  --mantine-color-gray-light-hover: rgba(134, 142, 150, 0.12);
  --mantine-color-gray-light-color: var(--mantine-color-gray-6);
  --mantine-color-gray-outline: var(--mantine-color-gray-6);
  --mantine-color-gray-outline-hover: rgba(134, 142, 150, 0.05);
  --mantine-color-red-text: var(--mantine-color-red-filled);
  --mantine-color-red-filled: var(--mantine-color-red-6);
  --mantine-color-red-filled-hover: var(--mantine-color-red-7);
  --mantine-color-red-light: rgba(250, 82, 82, 0.1);
  --mantine-color-red-light-hover: rgba(250, 82, 82, 0.12);
  --mantine-color-red-light-color: var(--mantine-color-red-6);
  --mantine-color-red-outline: var(--mantine-color-red-6);
  --mantine-color-red-outline-hover: rgba(250, 82, 82, 0.05);
  --mantine-color-pink-text: var(--mantine-color-pink-filled);
  --mantine-color-pink-filled: var(--mantine-color-pink-6);
  --mantine-color-pink-filled-hover: var(--mantine-color-pink-7);
  --mantine-color-pink-light: rgba(230, 73, 128, 0.1);
  --mantine-color-pink-light-hover: rgba(230, 73, 128, 0.12);
  --mantine-color-pink-light-color: var(--mantine-color-pink-6);
  --mantine-color-pink-outline: var(--mantine-color-pink-6);
  --mantine-color-pink-outline-hover: rgba(230, 73, 128, 0.05);
  --mantine-color-grape-text: var(--mantine-color-grape-filled);
  --mantine-color-grape-filled: var(--mantine-color-grape-6);
  --mantine-color-grape-filled-hover: var(--mantine-color-grape-7);
  --mantine-color-grape-light: rgba(190, 75, 219, 0.1);
  --mantine-color-grape-light-hover: rgba(190, 75, 219, 0.12);
  --mantine-color-grape-light-color: var(--mantine-color-grape-6);
  --mantine-color-grape-outline: var(--mantine-color-grape-6);
  --mantine-color-grape-outline-hover: rgba(190, 75, 219, 0.05);
  --mantine-color-violet-text: var(--mantine-color-violet-filled);
  --mantine-color-violet-filled: var(--mantine-color-violet-6);
  --mantine-color-violet-filled-hover: var(--mantine-color-violet-7);
  --mantine-color-violet-light: rgba(121, 80, 242, 0.1);
  --mantine-color-violet-light-hover: rgba(121, 80, 242, 0.12);
  --mantine-color-violet-light-color: var(--mantine-color-violet-6);
  --mantine-color-violet-outline: var(--mantine-color-violet-6);
  --mantine-color-violet-outline-hover: rgba(121, 80, 242, 0.05);
  --mantine-color-indigo-text: var(--mantine-color-indigo-filled);
  --mantine-color-indigo-filled: var(--mantine-color-indigo-6);
  --mantine-color-indigo-filled-hover: var(--mantine-color-indigo-7);
  --mantine-color-indigo-light: rgba(76, 110, 245, 0.1);
  --mantine-color-indigo-light-hover: rgba(76, 110, 245, 0.12);
  --mantine-color-indigo-light-color: var(--mantine-color-indigo-6);
  --mantine-color-indigo-outline: var(--mantine-color-indigo-6);
  --mantine-color-indigo-outline-hover: rgba(76, 110, 245, 0.05);
  --mantine-color-blue-text: var(--mantine-color-blue-filled);
  --mantine-color-blue-filled: var(--mantine-color-blue-6);
  --mantine-color-blue-filled-hover: var(--mantine-color-blue-7);
  --mantine-color-blue-light: rgba(34, 139, 230, 0.1);
  --mantine-color-blue-light-hover: rgba(34, 139, 230, 0.12);
  --mantine-color-blue-light-color: var(--mantine-color-blue-6);
  --mantine-color-blue-outline: var(--mantine-color-blue-6);
  --mantine-color-blue-outline-hover: rgba(34, 139, 230, 0.05);
  --mantine-color-cyan-text: var(--mantine-color-cyan-filled);
  --mantine-color-cyan-filled: var(--mantine-color-cyan-6);
  --mantine-color-cyan-filled-hover: var(--mantine-color-cyan-7);
  --mantine-color-cyan-light: rgba(21, 170, 191, 0.1);
  --mantine-color-cyan-light-hover: rgba(21, 170, 191, 0.12);
  --mantine-color-cyan-light-color: var(--mantine-color-cyan-6);
  --mantine-color-cyan-outline: var(--mantine-color-cyan-6);
  --mantine-color-cyan-outline-hover: rgba(21, 170, 191, 0.05);
  --mantine-color-teal-text: var(--mantine-color-teal-filled);
  --mantine-color-teal-filled: var(--mantine-color-teal-6);
  --mantine-color-teal-filled-hover: var(--mantine-color-teal-7);
  --mantine-color-teal-light: rgba(18, 184, 134, 0.1);
  --mantine-color-teal-light-hover: rgba(18, 184, 134, 0.12);
  --mantine-color-teal-light-color: var(--mantine-color-teal-6);
  --mantine-color-teal-outline: var(--mantine-color-teal-6);
  --mantine-color-teal-outline-hover: rgba(18, 184, 134, 0.05);
  --mantine-color-green-text: var(--mantine-color-green-filled);
  --mantine-color-green-filled: var(--mantine-color-green-6);
  --mantine-color-green-filled-hover: var(--mantine-color-green-7);
  --mantine-color-green-light: rgba(64, 192, 87, 0.1);
  --mantine-color-green-light-hover: rgba(64, 192, 87, 0.12);
  --mantine-color-green-light-color: var(--mantine-color-green-6);
  --mantine-color-green-outline: var(--mantine-color-green-6);
  --mantine-color-green-outline-hover: rgba(64, 192, 87, 0.05);
  --mantine-color-lime-text: var(--mantine-color-lime-filled);
  --mantine-color-lime-filled: var(--mantine-color-lime-6);
  --mantine-color-lime-filled-hover: var(--mantine-color-lime-7);
  --mantine-color-lime-light: rgba(130, 201, 30, 0.1);
  --mantine-color-lime-light-hover: rgba(130, 201, 30, 0.12);
  --mantine-color-lime-light-color: var(--mantine-color-lime-6);
  --mantine-color-lime-outline: var(--mantine-color-lime-6);
  --mantine-color-lime-outline-hover: rgba(130, 201, 30, 0.05);
  --mantine-color-yellow-text: var(--mantine-color-yellow-filled);
  --mantine-color-yellow-filled: var(--mantine-color-yellow-6);
  --mantine-color-yellow-filled-hover: var(--mantine-color-yellow-7);
  --mantine-color-yellow-light: rgba(250, 176, 5, 0.1);
  --mantine-color-yellow-light-hover: rgba(250, 176, 5, 0.12);
  --mantine-color-yellow-light-color: var(--mantine-color-yellow-6);
  --mantine-color-yellow-outline: var(--mantine-color-yellow-6);
  --mantine-color-yellow-outline-hover: rgba(250, 176, 5, 0.05);
  --mantine-color-orange-text: var(--mantine-color-orange-filled);
  --mantine-color-orange-filled: var(--mantine-color-orange-6);
  --mantine-color-orange-filled-hover: var(--mantine-color-orange-7);
  --mantine-color-orange-light: rgba(253, 126, 20, 0.1);
  --mantine-color-orange-light-hover: rgba(253, 126, 20, 0.12);
  --mantine-color-orange-light-color: var(--mantine-color-orange-6);
  --mantine-color-orange-outline: var(--mantine-color-orange-6);
  --mantine-color-orange-outline-hover: rgba(253, 126, 20, 0.05);
}

.m_d57069b5 {
  --scrollarea-scrollbar-size: calc(0.75rem * var(--mantine-scale));

  position: relative;
  overflow: hidden;
}

.m_c0783ff9 {
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;
  width: 100%;
  height: 100%;
}

.m_c0783ff9::-webkit-scrollbar {
    display: none;
  }

.m_c0783ff9:where([data-scrollbars='xy'], [data-scrollbars='y']):where([data-offset-scrollbars='xy'], [data-offset-scrollbars='y']) {
      padding-right: var(--scrollarea-scrollbar-size);
      padding-left: 0;
      padding-left: initial;
    }

.m_c0783ff9:where([data-scrollbars='xy'], [data-scrollbars='x']):where([data-offset-scrollbars='xy'], [data-offset-scrollbars='x']) {
      padding-bottom: var(--scrollarea-scrollbar-size);
    }

.m_f8f631dd {
  min-width: 100%;
  display: table;
}

.m_c44ba933 {
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  touch-action: none;
  box-sizing: border-box;
  transition:
    background-color 150ms ease, opacity 150ms ease;

  padding: calc(var(--scrollarea-scrollbar-size) / 5);
  display: flex;
  background-color: transparent;
  flex-direction: row;
}

@media (hover: hover) {
    :where([data-mantine-color-scheme='light']) .m_c44ba933:hover {
      background-color: #f8f9fa;
      background-color: var(--mantine-color-gray-0);
  }

      :where([data-mantine-color-scheme='light']) .m_c44ba933:hover > .m_d8b5e363 {
        background-color: rgba(0, 0, 0, 0.5);
      }

    :where([data-mantine-color-scheme='dark']) .m_c44ba933:hover {
      background-color: #1f1f1f;
      background-color: var(--mantine-color-dark-8);
  }

      :where([data-mantine-color-scheme='dark']) .m_c44ba933:hover > .m_d8b5e363 {
        background-color: rgba(255, 255, 255, 0.5);
      }
}

@media (hover: none) {
    :where([data-mantine-color-scheme='light']) .m_c44ba933:active {
      background-color: #f8f9fa;
      background-color: var(--mantine-color-gray-0);
  }

      :where([data-mantine-color-scheme='light']) .m_c44ba933:active > .m_d8b5e363 {
        background-color: rgba(0, 0, 0, 0.5);
      }

    :where([data-mantine-color-scheme='dark']) .m_c44ba933:active {
      background-color: #1f1f1f;
      background-color: var(--mantine-color-dark-8);
  }

      :where([data-mantine-color-scheme='dark']) .m_c44ba933:active > .m_d8b5e363 {
        background-color: rgba(255, 255, 255, 0.5);
      }
}

.m_c44ba933:where([data-hidden], [data-state='hidden']) {
    display: none;
  }

.m_c44ba933:where([data-orientation='vertical']) {
    width: var(--scrollarea-scrollbar-size);
    top: 0;
    bottom: var(--sa-corner-width);
    right: 0;
  }

.m_c44ba933:where([data-orientation='horizontal']) {
    height: var(--scrollarea-scrollbar-size);
    flex-direction: column;
    bottom: 0;
    left: 0;
    right: var(--sa-corner-width);
  }

.m_d8b5e363 {
  flex: 1;
  border-radius: var(--scrollarea-scrollbar-size);
  position: relative;
  transition: background-color 150ms ease;
  overflow: hidden;
  opacity: var(--thumb-opacity);
}

.m_d8b5e363::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    min-width: calc(2.75rem * 1);
    min-width: calc(2.75rem * var(--mantine-scale));
    min-height: calc(2.75rem * 1);
    min-height: calc(2.75rem * var(--mantine-scale));
  }

:where([data-mantine-color-scheme='light']) .m_d8b5e363 {
    background-color: rgba(0, 0, 0, 0.4);
}

:where([data-mantine-color-scheme='dark']) .m_d8b5e363 {
    background-color: rgba(255, 255, 255, 0.4);
}

.m_21657268 {
  position: absolute;
  opacity: 0;
  transition: opacity 150ms ease;
  display: block;
  right: 0;
  bottom: 0;
}

:where([data-mantine-color-scheme='light']) .m_21657268 {
    background-color: #f8f9fa;
    background-color: var(--mantine-color-gray-0);
}

:where([data-mantine-color-scheme='dark']) .m_21657268 {
    background-color: #1f1f1f;
    background-color: var(--mantine-color-dark-8);
}

.m_21657268:where([data-hovered]) {
    opacity: 1;
  }

.m_21657268:where([data-hidden]) {
    display: none;
  }

.m_87cf2631 {
  background-color: transparent;
  cursor: pointer;
  border: 0;
  padding: 0;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  font-size: calc(1rem * 1);
  font-size: var(--mantine-font-size-md);
  text-align: left;
  -webkit-text-decoration: none;
  text-decoration: none;
  color: inherit;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
}

  :where([dir="rtl"]) .m_87cf2631 {
    text-align: right;
}

.m_515a97f8 {
  border: 0;
  clip: rect(0 0 0 0);
  height: calc(0.0625rem * 1);
  height: calc(0.0625rem * var(--mantine-scale));
  width: calc(0.0625rem * 1);
  width: calc(0.0625rem * var(--mantine-scale));
  margin: calc(-0.0625rem * 1);
  margin: calc(-0.0625rem * var(--mantine-scale));
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
}

.m_1b7284a3 {
  --paper-radius: var(--mantine-radius-default);

  outline: 0;
  -webkit-tap-highlight-color: transparent;
  display: block;
  touch-action: manipulation;
  -webkit-text-decoration: none;
  text-decoration: none;
  border-radius: calc(0.25rem * 1);
  border-radius: var(--paper-radius);
  box-shadow: var(--paper-shadow);
  background-color: var(--mantine-color-body);
}

  :where([data-mantine-color-scheme='light']) .m_1b7284a3:where([data-with-border]) {
      border: calc(0.0625rem * 1) solid #dee2e6;
      border: calc(0.0625rem * var(--mantine-scale)) solid var(--mantine-color-gray-3);
}

  :where([data-mantine-color-scheme='dark']) .m_1b7284a3:where([data-with-border]) {
      border: calc(0.0625rem * 1) solid #424242;
      border: calc(0.0625rem * var(--mantine-scale)) solid var(--mantine-color-dark-4);
}

.m_38a85659 {
  position: absolute;
  border: 1px solid var(--popover-border-color);
  padding: calc(0.75rem * 1) calc(1rem * 1);
  padding: var(--mantine-spacing-sm) var(--mantine-spacing-md);
  box-shadow: none;
  box-shadow: var(--popover-shadow, none);
  border-radius: calc(0.25rem * 1);
  border-radius: var(--popover-radius, var(--mantine-radius-default));
}

  .m_38a85659:where([data-fixed]) {
    position: fixed;
  }

  .m_38a85659:focus {
    outline: none;
  }

  :where([data-mantine-color-scheme='light']) .m_38a85659 {
    --popover-border-color: var(--mantine-color-gray-2);
    background-color: #fff;
    background-color: var(--mantine-color-white);
}

  :where([data-mantine-color-scheme='dark']) .m_38a85659 {
    --popover-border-color: var(--mantine-color-dark-4);
    background-color: #2e2e2e;
    background-color: var(--mantine-color-dark-6);
}

.m_a31dc6c1 {
  background-color: inherit;
  border: 1px solid var(--popover-border-color);
  z-index: 1;
}

.m_5ae2e3c {
  --loader-size-xs: calc(1.125rem * var(--mantine-scale));
  --loader-size-sm: calc(1.375rem * var(--mantine-scale));
  --loader-size-md: calc(2.25rem * var(--mantine-scale));
  --loader-size-lg: calc(2.75rem * var(--mantine-scale));
  --loader-size-xl: calc(3.625rem * var(--mantine-scale));
  --loader-size: var(--loader-size-md);
  --loader-color: var(--mantine-primary-color-filled);
}

/* ----- Bars loader ----- */
@keyframes m_5d2b3b9d {
  0% {
    transform: scale(0.6);
    opacity: 0;
  }

  50%,
  100% {
    transform: scale(1);
  }
}

.m_7a2bd4cd {
  position: relative;
  width: var(--loader-size);
  height: var(--loader-size);
  display: flex;
  gap: calc(var(--loader-size) / 5);
}

.m_870bb79 {
  flex: 1;
  background: var(--loader-color);
  animation: m_5d2b3b9d 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  border-radius: calc(0.125rem * 1);
  border-radius: calc(0.125rem * var(--mantine-scale));
}

.m_870bb79:nth-of-type(1) {
    animation-delay: -240ms;
  }

.m_870bb79:nth-of-type(2) {
    animation-delay: -120ms;
  }

.m_870bb79:nth-of-type(3) {
    animation-delay: 0;
  }

/* ----- Dots loader ----- */
@keyframes m_aac34a1 {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }

  50% {
    transform: scale(0.6);
    opacity: 0.5;
  }
}

.m_4e3f22d7 {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: calc(var(--loader-size) / 10);
  position: relative;
  width: var(--loader-size);
  height: var(--loader-size);
}

.m_870c4af {
  width: calc(var(--loader-size) / 3 - var(--loader-size) / 15);
  height: calc(var(--loader-size) / 3 - var(--loader-size) / 15);
  border-radius: 50%;
  background: var(--loader-color);
  animation: m_aac34a1 0.8s infinite linear;
}

.m_870c4af:nth-child(2) {
    animation-delay: 0.4s;
  }

/* ----- Oval loader ----- */
@keyframes m_f8e89c4b {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.m_b34414df {
  display: inline-block;
  width: var(--loader-size);
  height: var(--loader-size);
}

.m_b34414df::after {
    content: '';
    display: block;
    width: var(--loader-size);
    height: var(--loader-size);
    border-radius: calc(625rem * 1);
    border-radius: calc(625rem * var(--mantine-scale));
    border-width: calc(var(--loader-size) / 8);
    border-style: solid;
    border-color: var(--loader-color) var(--loader-color) var(--loader-color) transparent;
    animation: m_f8e89c4b 1.2s linear infinite;
  }

.m_8d3f4000 {
  --ai-size-xs: calc(1.125rem * var(--mantine-scale));
  --ai-size-sm: calc(1.375rem * var(--mantine-scale));
  --ai-size-md: calc(1.75rem * var(--mantine-scale));
  --ai-size-lg: calc(2.125rem * var(--mantine-scale));
  --ai-size-xl: calc(2.75rem * var(--mantine-scale));

  --ai-size-input-xs: calc(1.875rem * var(--mantine-scale));
  --ai-size-input-sm: calc(2.25rem * var(--mantine-scale));
  --ai-size-input-md: calc(2.625rem * var(--mantine-scale));
  --ai-size-input-lg: calc(3.125rem * var(--mantine-scale));
  --ai-size-input-xl: calc(3.75rem * var(--mantine-scale));

  --ai-size: var(--ai-size-md);
  --ai-color: var(--mantine-color-white);

  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  overflow: hidden;

  width: calc(1.75rem * 1);

  width: var(--ai-size);
  height: calc(1.75rem * 1);
  height: var(--ai-size);
  min-width: calc(1.75rem * 1);
  min-width: var(--ai-size);
  min-height: calc(1.75rem * 1);
  min-height: var(--ai-size);
  border-radius: calc(0.25rem * 1);
  border-radius: var(--ai-radius, var(--mantine-radius-default));
  background: var(--ai-bg, var(--mantine-primary-color-filled));
  color: #fff;
  color: var(--ai-color, var(--mantine-color-white));
  border: calc(0.0625rem * 1) solid transparent;
  border: var(--ai-bd, calc(0.0625rem * var(--mantine-scale)) solid transparent);
  cursor: pointer;
}

  @media (hover: hover) {
    .m_8d3f4000:hover:where(:not([data-loading]):not(:disabled):not([data-disabled])) {
      background-color: var(--ai-hover, var(--mantine-primary-color-filled-hover));
      color: var(--ai-hover-color, var(--ai-color));
    }
}

  @media (hover: none) {
    .m_8d3f4000:active:where(:not([data-loading]):not(:disabled):not([data-disabled])) {
      background-color: var(--ai-hover, var(--mantine-primary-color-filled-hover));
      color: var(--ai-hover-color, var(--ai-color));
    }
}

  .m_8d3f4000[data-loading] {
    cursor: not-allowed;
  }

  .m_8d3f4000[data-loading] .m_8d3afb97 {
      opacity: 0;
      transform: translateY(100%);
    }

  .m_8d3f4000:where(:disabled:not([data-loading]), [data-disabled]:not([data-loading])) {
    cursor: not-allowed;
    border: calc(0.0625rem * 1) solid transparent;
    border: calc(0.0625rem * var(--mantine-scale)) solid transparent;
  }

  :where([data-mantine-color-scheme='light']) .m_8d3f4000:where(:disabled:not([data-loading]), [data-disabled]:not([data-loading])) {
      background-color: #f1f3f5;
      background-color: var(--mantine-color-gray-1);
      color: #adb5bd;
      color: var(--mantine-color-gray-5);
}

  :where([data-mantine-color-scheme='dark']) .m_8d3f4000:where(:disabled:not([data-loading]), [data-disabled]:not([data-loading])) {
      background-color: #2e2e2e;
      background-color: var(--mantine-color-dark-6);
      color: #696969;
      color: var(--mantine-color-dark-3);
}

  .m_8d3f4000:where(:disabled:not([data-loading]), [data-disabled]:not([data-loading])):active {
      transform: none;
    }

.m_302b9fb1 {
  top: calc(-0.0625rem * 1);
  right: calc(-0.0625rem * 1);
  bottom: calc(-0.0625rem * 1);
  left: calc(-0.0625rem * 1);
  top: calc(-0.0625rem * var(--mantine-scale));
  right: calc(-0.0625rem * var(--mantine-scale));
  bottom: calc(-0.0625rem * var(--mantine-scale));
  left: calc(-0.0625rem * var(--mantine-scale));
  position: absolute;
  border-radius: calc(0.25rem * 1);
  border-radius: var(--ai-radius, var(--mantine-radius-default));
  display: flex;
  align-items: center;
  justify-content: center;
}

:where([data-mantine-color-scheme='light']) .m_302b9fb1 {
    background-color: rgba(255, 255, 255, 0.15);
}

:where([data-mantine-color-scheme='dark']) .m_302b9fb1 {
    background-color: rgba(0, 0, 0, 0.15);
}

.m_1a0f1b21 {
  --ai-border-width: calc(0.0625rem * var(--mantine-scale));
  display: flex;
}

.m_1a0f1b21 :where(*):focus {
      position: relative;
      z-index: 1;
    }

.m_1a0f1b21[data-orientation='horizontal'] {
    flex-direction: row;
  }

.m_1a0f1b21[data-orientation='horizontal'] .m_8d3f4000:not(:only-child):first-child, .m_1a0f1b21[data-orientation='horizontal'] .m_437b6484:not(:only-child):first-child {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
        border-right-width: calc(var(--ai-border-width) / 2);
      }

.m_1a0f1b21[data-orientation='horizontal'] .m_8d3f4000:not(:only-child):last-child, .m_1a0f1b21[data-orientation='horizontal'] .m_437b6484:not(:only-child):last-child {
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
        border-left-width: calc(var(--ai-border-width) / 2);
      }

.m_1a0f1b21[data-orientation='horizontal'] .m_8d3f4000:not(:only-child):not(:first-child):not(:last-child), .m_1a0f1b21[data-orientation='horizontal'] .m_437b6484:not(:only-child):not(:first-child):not(:last-child) {
        border-radius: 0;
        border-left-width: calc(var(--ai-border-width) / 2);
        border-right-width: calc(var(--ai-border-width) / 2);
      }

.m_1a0f1b21[data-orientation='vertical'] {
    flex-direction: column;
  }

.m_1a0f1b21[data-orientation='vertical'] .m_8d3f4000:not(:only-child):first-child, .m_1a0f1b21[data-orientation='vertical'] .m_437b6484:not(:only-child):first-child {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom-width: calc(var(--ai-border-width) / 2);
      }

.m_1a0f1b21[data-orientation='vertical'] .m_8d3f4000:not(:only-child):last-child, .m_1a0f1b21[data-orientation='vertical'] .m_437b6484:not(:only-child):last-child {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-top-width: calc(var(--ai-border-width) / 2);
      }

.m_1a0f1b21[data-orientation='vertical'] .m_8d3f4000:not(:only-child):not(:first-child):not(:last-child), .m_1a0f1b21[data-orientation='vertical'] .m_437b6484:not(:only-child):not(:first-child):not(:last-child) {
        border-radius: 0;
        border-bottom-width: calc(var(--ai-border-width) / 2);
        border-top-width: calc(var(--ai-border-width) / 2);
      }

.m_8d3afb97 {
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    transform 150ms ease, opacity 100ms ease;
  width: 100%;
  height: 100%;
}

.m_437b6484 {
  --section-height-xs: calc(1.125rem * var(--mantine-scale));
  --section-height-sm: calc(1.375rem * var(--mantine-scale));
  --section-height-md: calc(1.75rem * var(--mantine-scale));
  --section-height-lg: calc(2.125rem * var(--mantine-scale));
  --section-height-xl: calc(2.75rem * var(--mantine-scale));

  --section-height-input-xs: calc(1.875rem * var(--mantine-scale));
  --section-height-input-sm: calc(2.25rem * var(--mantine-scale));
  --section-height-input-md: calc(2.625rem * var(--mantine-scale));
  --section-height-input-lg: calc(3.125rem * var(--mantine-scale));
  --section-height-input-xl: calc(3.75rem * var(--mantine-scale));

  --section-padding-x-xs: calc(0.375rem * var(--mantine-scale));
  --section-padding-x-sm: calc(0.5rem * var(--mantine-scale));
  --section-padding-x-md: calc(0.625rem * var(--mantine-scale));
  --section-padding-x-lg: calc(0.75rem * var(--mantine-scale));
  --section-padding-x-xl: calc(1rem * var(--mantine-scale));

  --section-height: var(--section-height-sm);
  --section-padding-x: var(--section-padding-x-sm);
  --section-color: var(--mantine-color-white);

  font-weight: 600;
  width: auto;
  border-radius: calc(0.25rem * 1);
  border-radius: var(--section-radius, var(--mantine-radius-default));
  font-size: calc(0.875rem * 1);
  font-size: var(--section-fz, var(--mantine-font-size-sm));
  background: var(--section-bg, var(--mantine-primary-color-filled));
  border: calc(0.0625rem * 1) solid transparent;
  border: var(--section-bd, calc(0.0625rem * var(--mantine-scale)) solid transparent);
  color: #fff;
  color: var(--section-color, var(--mantine-color-white));
  height: calc(1.375rem * 1);
  height: var(--section-height, var(--section-height-sm));
  padding-left: calc(0.5rem * 1);
  padding-right: calc(0.5rem * 1);
  padding-left: var(--section-padding-x, var(--section-padding-x-sm));
  padding-right: var(--section-padding-x, var(--section-padding-x-sm));
  vertical-align: middle;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.m_86a44da5 {
  --cb-size-xs: calc(1.125rem * var(--mantine-scale));
  --cb-size-sm: calc(1.375rem * var(--mantine-scale));
  --cb-size-md: calc(1.75rem * var(--mantine-scale));
  --cb-size-lg: calc(2.125rem * var(--mantine-scale));
  --cb-size-xl: calc(2.75rem * var(--mantine-scale));

  --cb-size: var(--cb-size-md);
  --cb-icon-size: 70%;
  --cb-radius: var(--mantine-radius-default);

  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;

  width: calc(1.75rem * 1);

  width: var(--cb-size);
  height: calc(1.75rem * 1);
  height: var(--cb-size);
  min-width: calc(1.75rem * 1);
  min-width: var(--cb-size);
  min-height: calc(1.75rem * 1);
  min-height: var(--cb-size);
  border-radius: calc(0.25rem * 1);
  border-radius: var(--cb-radius);
}

  :where([data-mantine-color-scheme='light']) .m_86a44da5 {
    color: #495057;
    color: var(--mantine-color-gray-7);
}

  :where([data-mantine-color-scheme='dark']) .m_86a44da5 {
    color: #b8b8b8;
    color: var(--mantine-color-dark-1);
}

  .m_86a44da5[data-disabled],
  .m_86a44da5:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

@media (hover: hover) {
    :where([data-mantine-color-scheme='light']) .m_220c80f2:where(:not([data-disabled]):not(:disabled)):hover {
      background-color: #f8f9fa;
      background-color: var(--mantine-color-gray-0);
  }

    :where([data-mantine-color-scheme='dark']) .m_220c80f2:where(:not([data-disabled]):not(:disabled)):hover {
      background-color: #2e2e2e;
      background-color: var(--mantine-color-dark-6);
  }
}

@media (hover: none) {
    :where([data-mantine-color-scheme='light']) .m_220c80f2:where(:not([data-disabled]):not(:disabled)):active {
      background-color: #f8f9fa;
      background-color: var(--mantine-color-gray-0);
  }

    :where([data-mantine-color-scheme='dark']) .m_220c80f2:where(:not([data-disabled]):not(:disabled)):active {
      background-color: #2e2e2e;
      background-color: var(--mantine-color-dark-6);
  }
}

.m_4081bf90 {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-wrap: var(--group-wrap, wrap);
  justify-content: flex-start;
  justify-content: var(--group-justify, flex-start);
  align-items: center;
  align-items: var(--group-align, center);
  gap: calc(1rem * 1);
  gap: var(--group-gap, var(--mantine-spacing-md));
}

  .m_4081bf90:where([data-grow]) > * {
      flex-grow: 1;
      max-width: var(--group-child-width);
    }

.m_9814e45f {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: absolute;
  background: rgba(0, 0, 0, 0.6);
  background: var(--overlay-bg, rgba(0, 0, 0, 0.6));
  backdrop-filter: var(--overlay-filter);
  -webkit-backdrop-filter: var(--overlay-filter);
  border-radius: 0;
  border-radius: var(--overlay-radius, 0);
  z-index: var(--overlay-z-index);
}

  .m_9814e45f:where([data-fixed]) {
    position: fixed;
  }

  .m_9814e45f:where([data-center]) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

.m_615af6c9 {
  line-height: 1;
  padding: 0;
  margin: 0;
  font-weight: 400;
  font-size: calc(1rem * 1);
  font-size: var(--mantine-font-size-md);
}

.m_b5489c3c {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: calc(1rem * 1);
  padding: var(--mb-padding, var(--mantine-spacing-md));
  padding-right: calc((1rem * 1) - (0.3125rem * 1));
  padding-right: calc(calc(1rem * 1) - (0.3125rem * 1));
  padding-right: calc(var(--mb-padding, var(--mantine-spacing-md)) - (0.3125rem * var(--mantine-scale)));
  padding-right: calc(calc(1rem * 1) - calc(0.3125rem * 1));
  padding-right: calc(var(--mb-padding, var(--mantine-spacing-md)) - calc(0.3125rem * var(--mantine-scale)));
  position: sticky;
  top: 0;
  background-color: var(--mantine-color-body);
  z-index: 1000;
  min-height: calc(3.75rem * 1);
  min-height: calc(3.75rem * var(--mantine-scale));
  transition: padding-right 100ms;
}

.m_60c222c7 {
  position: fixed;
  width: 100%;
  top: 0;
  bottom: 0;
  z-index: var(--mb-z-index);
  pointer-events: none;
}

.m_fd1ab0aa {
  pointer-events: all;
  box-shadow: 0 calc(0.0625rem * 1)
      calc(0.1875rem * 1) rgba(0, 0, 0, 0.05),
    rgba(0, 0, 0, 0.05) 0 calc(2.25rem * 1) calc(1.75rem * 1)
      calc(-0.4375rem * 1),
    rgba(0, 0, 0, 0.04) 0 calc(1.0625rem * 1)
      calc(1.0625rem * 1) calc(-0.4375rem * 1);
  box-shadow: var(--mb-shadow, var(--mantine-shadow-xl));
}

.m_fd1ab0aa [data-mantine-scrollbar] {
    z-index: 1001;
  }

.m_fd1ab0aa:has([data-mantine-scrollbar][data-state='visible']) .m_b5489c3c {
    padding-right: calc((1rem * 1) + (0.3125rem * 1));
    padding-right: calc(calc(1rem * 1) + (0.3125rem * 1));
    padding-right: calc(var(--mb-padding, var(--mantine-spacing-md)) + (0.3125rem * var(--mantine-scale)));
    padding-right: calc(calc(1rem * 1) + calc(0.3125rem * 1));
    padding-right: calc(var(--mb-padding, var(--mantine-spacing-md)) + calc(0.3125rem * var(--mantine-scale)));
  }

.m_606cb269 {
  margin-left: auto;
}

.m_5df29311 {
  padding: calc(1rem * 1);
  padding: var(--mb-padding, var(--mantine-spacing-md));
  padding-top: calc(1rem * 1);
  padding-top: var(--mb-padding, var(--mantine-spacing-md));
}

.m_5df29311:where(:not(:only-child)) {
    padding-top: 0;
  }

.m_6c018570 {
  position: relative;
  margin-top: 0rem;
  margin-top: var(--input-margin-top, 0rem);
  margin-bottom: 0rem;
  margin-bottom: var(--input-margin-bottom, 0rem);

  --input-height-xs: calc(1.875rem * var(--mantine-scale));
  --input-height-sm: calc(2.25rem * var(--mantine-scale));
  --input-height-md: calc(2.625rem * var(--mantine-scale));
  --input-height-lg: calc(3.125rem * var(--mantine-scale));
  --input-height-xl: calc(3.75rem * var(--mantine-scale));

  --input-padding-y-xs: calc(0.3125rem * var(--mantine-scale));
  --input-padding-y-sm: calc(0.375rem * var(--mantine-scale));
  --input-padding-y-md: calc(0.5rem * var(--mantine-scale));
  --input-padding-y-lg: calc(0.625rem * var(--mantine-scale));
  --input-padding-y-xl: calc(0.8125rem * var(--mantine-scale));

  --input-height: var(--input-height-sm);
  --input-radius: var(--mantine-radius-default);

  --input-cursor: text;
  --input-text-align: left;
  --input-line-height: calc(var(--input-height) - calc(0.125rem * var(--mantine-scale)));
  --input-padding: calc(var(--input-height) / 3);
  --input-padding-inline-start: var(--input-padding);
  --input-padding-inline-end: var(--input-padding);
  --input-placeholder-color: var(--mantine-color-placeholder);
  --input-color: var(--mantine-color-text);

  --input-left-section-size: var(--input-left-section-width, calc(var(--input-height) - calc(0.125rem * var(--mantine-scale))));

  --input-right-section-size: var(
    --input-right-section-width,
    calc(var(--input-height) - calc(0.125rem * var(--mantine-scale)))
  );

  --input-size: var(--input-height);

  --section-y: calc(0.0625rem * var(--mantine-scale));
  --left-section-start: calc(0.0625rem * var(--mantine-scale));
  --left-section-border-radius: var(--input-radius) 0 0 var(--input-radius);

  --right-section-end: calc(0.0625rem * var(--mantine-scale));
  --right-section-border-radius: 0 var(--input-radius) var(--input-radius) 0;
}

  .m_6c018570[data-variant='unstyled'] {
    --input-padding: 0;
    --input-padding-y: 0;
    --input-padding-inline-start: 0;
    --input-padding-inline-end: 0;
  }

  .m_6c018570[data-pointer] {
    --input-cursor: pointer;
  }

  .m_6c018570[data-multiline] {
    --input-padding-y-xs: calc(0.28125rem * var(--mantine-scale));
    --input-padding-y-sm: calc(0.34375rem * var(--mantine-scale));
    --input-padding-y-md: calc(0.4375rem * var(--mantine-scale));
    --input-padding-y-lg: calc(0.59375rem * var(--mantine-scale));
    --input-padding-y-xl: calc(0.8125rem * var(--mantine-scale));

    --input-size: auto;
    --input-line-height: var(--mantine-line-height);
    --input-padding-y: var(--input-padding-y-sm);
  }

  .m_6c018570[data-with-left-section] {
    --input-padding-inline-start: var(--input-left-section-size);
  }

  .m_6c018570[data-with-right-section] {
    --input-padding-inline-end: var(--input-right-section-size);
  }

  [data-mantine-color-scheme='light'] .m_6c018570 {
    --input-disabled-bg: var(--mantine-color-gray-1);
    --input-disabled-color: var(--mantine-color-gray-6);
}

  [data-mantine-color-scheme='light'] .m_6c018570[data-variant='default'] {
      --input-bd: var(--mantine-color-gray-4);
      --input-bg: var(--mantine-color-white);
      --input-bd-focus: var(--mantine-primary-color-filled);
    }

  [data-mantine-color-scheme='light'] .m_6c018570[data-variant='filled'] {
      --input-bd: transparent;
      --input-bg: var(--mantine-color-gray-1);
      --input-bd-focus: var(--mantine-primary-color-filled);
    }

  [data-mantine-color-scheme='light'] .m_6c018570[data-variant='unstyled'] {
      --input-bd: transparent;
      --input-bg: transparent;
      --input-bd-focus: transparent;
    }

  [data-mantine-color-scheme='dark'] .m_6c018570 {
    --input-disabled-bg: var(--mantine-color-dark-6);
    --input-disabled-color: var(--mantine-color-dark-2);
}

  [data-mantine-color-scheme='dark'] .m_6c018570[data-variant='default'] {
      --input-bd: var(--mantine-color-dark-4);
      --input-bg: var(--mantine-color-dark-6);
      --input-bd-focus: var(--mantine-primary-color-filled);
    }

  [data-mantine-color-scheme='dark'] .m_6c018570[data-variant='filled'] {
      --input-bd: transparent;
      --input-bg: var(--mantine-color-dark-5);
      --input-bd-focus: var(--mantine-primary-color-filled);
    }

  [data-mantine-color-scheme='dark'] .m_6c018570[data-variant='unstyled'] {
      --input-bd: transparent;
      --input-bg: transparent;
      --input-bd-focus: transparent;
    }

  [data-mantine-color-scheme] .m_6c018570[data-error]:not([data-variant='unstyled']) {
      --input-bd: var(--mantine-color-error);
    }

  [data-mantine-color-scheme] .m_6c018570[data-error] {

    --input-color: var(--mantine-color-error);
    --input-placeholder-color: var(--mantine-color-error);
    --input-section-color: var(--mantine-color-error);
}

  :where([dir="rtl"]) .m_6c018570 {
    --input-text-align: right;
    --left-section-border-radius: 0 var(--input-radius) var(--input-radius) 0;
    --right-section-border-radius: var(--input-radius) 0 0 var(--input-radius);
}

.m_8fb7ebe7 {
  -webkit-tap-highlight-color: transparent;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  resize: none;
  resize: var(--input-resize, none);
  display: block;
  width: 100%;
  transition: border-color 100ms ease;

  text-align: var(--input-text-align);
  color: var(--input-color);
  border: calc(0.0625rem * 1) solid var(--input-bd);
  border: calc(0.0625rem * var(--mantine-scale)) solid var(--input-bd);
  background-color: var(--input-bg);
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji;
  font-family: var(--input-font-family, var(--mantine-font-family));
  height: var(--input-size);
  min-height: var(--input-height);
  line-height: var(--input-line-height);
  font-size: calc(0.875rem * 1);
  font-size: var(--input-fz, var(--input-fz, var(--mantine-font-size-sm)));
  border-radius: var(--input-radius);
  padding-left: var(--input-padding-inline-start);
  padding-right: var(--input-padding-inline-end);
  padding-top: 0rem;
  padding-top: var(--input-padding-y, 0rem);
  padding-bottom: 0rem;
  padding-bottom: var(--input-padding-y, 0rem);
  cursor: var(--input-cursor);
  overflow: var(--input-overflow);
}

/* Used as data attribute in Textarea component, does not have associated prop on the Input component */

.m_8fb7ebe7[data-no-overflow] {
    --input-overflow: hidden;
  }

/* Used as data attribute in JsonInput component, does not have associated prop on the Input component */

.m_8fb7ebe7[data-monospace] {
    --input-font-family: var(--mantine-font-family-monospace);
    --input-fz: calc(var(--input-fz, var(--mantine-font-size-sm)) - calc(0.125rem * var(--mantine-scale)));
  }

.m_8fb7ebe7:focus,
  .m_8fb7ebe7:focus-within {
    outline: none;
    --input-bd: var(--input-bd-focus);
  }

[data-error] .m_8fb7ebe7:focus, [data-error] .m_8fb7ebe7:focus-within {
      --input-bd: var(--mantine-color-error);
    }

.m_8fb7ebe7::-moz-placeholder {
    color: var(--input-placeholder-color);
    opacity: 1;
  }

.m_8fb7ebe7::placeholder {
    color: var(--input-placeholder-color);
    opacity: 1;
  }

.m_8fb7ebe7::-webkit-inner-spin-button,
  .m_8fb7ebe7::-webkit-outer-spin-button,
  .m_8fb7ebe7::-webkit-search-decoration,
  .m_8fb7ebe7::-webkit-search-cancel-button,
  .m_8fb7ebe7::-webkit-search-results-button,
  .m_8fb7ebe7::-webkit-search-results-decoration {
    -webkit-appearance: none;
            appearance: none;
  }

.m_8fb7ebe7[type='number'] {
    -moz-appearance: textfield;
  }

.m_8fb7ebe7:disabled,
  .m_8fb7ebe7[data-disabled] {
    cursor: not-allowed;
    opacity: 0.6;
    background-color: var(--input-disabled-bg);
    color: var(--input-disabled-color);
  }

/* Required to be a separate selector to work in Firefox, can be merged with &:disabled once :has is supported */

.m_8fb7ebe7:has(input:disabled) {
    cursor: not-allowed;
    opacity: 0.6;
    background-color: var(--input-disabled-bg);
    color: var(--input-disabled-color);
  }

.m_82577fc2 {
  pointer-events: var(--section-pointer-events);
  position: absolute;
  z-index: 1;
  left: var(--section-start);
  right: var(--section-end);
  bottom: var(--section-y);
  top: var(--section-y);
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--section-size);
  border-radius: var(--section-border-radius);
  color: var(--input-section-color, var(--mantine-color-dimmed));
}

.m_82577fc2[data-position='right'] {
    --section-pointer-events: var(--input-right-section-pointer-events);
    --section-end: var(--right-section-end);
    --section-size: var(--input-right-section-size);
    --section-border-radius: var(--right-section-border-radius);
  }

.m_82577fc2[data-position='left'] {
    --section-pointer-events: var(--input-left-section-pointer-events);
    --section-start: var(--left-section-start);
    --section-size: var(--input-left-section-size);
    --section-border-radius: var(--left-section-border-radius);
  }

/* ----- Input.Placeholder ----- */
.m_88bacfd0 {
  color: var(--input-placeholder-color, var(--mantine-color-placeholder));
}
[data-error] .m_88bacfd0 {
    --input-placeholder-color: var(--input-color, var(--mantine-color-placeholder));
  }

/* ----- Input.Wrapper ----- */
.m_46b77525 {
  line-height: 1.55;
  line-height: var(--mantine-line-height);
}

.m_8fdc1311 {
  display: inline-block;
  font-weight: 500;
  word-break: break-word;
  cursor: default;
  -webkit-tap-highlight-color: transparent;
  font-size: calc(0.875rem * 1);
  font-size: var(--input-label-size, var(--mantine-font-size-sm));
}

.m_78a94662 {
  color: var(--input-asterisk-color, var(--mantine-color-error));
}

.m_8f816625,
.m_fe47ce59 {
  word-wrap: break-word;
  line-height: 1.2;
  display: block;
  margin: 0;
  padding: 0;
}

.m_8f816625 {
  color: var(--mantine-color-error);
  font-size: calc((0.875rem * 1) - (0.125rem * 1));
  font-size: calc(calc(0.875rem * 1) - (0.125rem * 1));
  font-size: var(--input-error-size, calc(var(--mantine-font-size-sm) - (0.125rem * var(--mantine-scale))));
  font-size: calc(calc(0.875rem * 1) - calc(0.125rem * 1));
  font-size: var(--input-error-size, calc(var(--mantine-font-size-sm) - calc(0.125rem * var(--mantine-scale))));
}

.m_fe47ce59 {
  color: var(--mantine-color-dimmed);
  font-size: calc((0.875rem * 1) - (0.125rem * 1));
  font-size: calc(calc(0.875rem * 1) - (0.125rem * 1));
  font-size: var(--input-description-size, calc(var(--mantine-font-size-sm) - (0.125rem * var(--mantine-scale))));
  font-size: calc(calc(0.875rem * 1) - calc(0.125rem * 1));
  font-size: var(--input-description-size, calc(var(--mantine-font-size-sm) - calc(0.125rem * var(--mantine-scale))));
}

.m_8bffd616 {
  display: flex;
}

.m_96b553a6 {
  --transition-duration: 150ms;

  top: 0;
  left: 0;
  position: absolute;
  z-index: 0;
  transition-property: transform, width, height;
  transition-timing-function: ease;
  transition-duration: 0ms;
}

  .m_96b553a6:where([data-initialized]) {
    transition-duration: var(--transition-duration);
  }

  .m_96b553a6:where([data-hidden]) {
    background-color: red;
    display: none;
  }

.m_9bdbb667 {
  --accordion-radius: var(--mantine-radius-default);
}

.m_df78851f {
  word-break: break-word;
}

.m_4ba554d4 {
  padding: calc(1rem * 1);
  padding: var(--mantine-spacing-md);
  padding-top: calc((0.625rem * 1) / 2);
  padding-top: calc(calc(0.625rem * 1) / 2);
  padding-top: calc(var(--mantine-spacing-xs) / 2);
}

.m_8fa820a0 {
  margin: 0;
  padding: 0;
}

.m_4ba585b8 {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  padding-left: calc(1rem * 1);
  padding-right: calc(1rem * 1);
  padding-left: var(--mantine-spacing-md);
  padding-right: var(--mantine-spacing-md);
  opacity: 1;
  cursor: pointer;
  background-color: transparent;
}

.m_4ba585b8:where([data-chevron-position='left']) {
    flex-direction: row;
    padding-left: 0;
  }

:where([data-mantine-color-scheme='light']) .m_4ba585b8 {
    color: #000;
    color: var(--mantine-color-black);
}

:where([data-mantine-color-scheme='dark']) .m_4ba585b8 {
    color: #c9c9c9;
    color: var(--mantine-color-dark-0);
}

.m_4ba585b8:where(:disabled, [data-disabled]) {
    opacity: 0.4;
    cursor: not-allowed;
  }

@media (hover: hover) {
      :where([data-mantine-color-scheme='light']) .m_6939a5e9:where(:not(:disabled):not([data-disabled])):hover, :where([data-mantine-color-scheme='light']) .m_4271d21b:where(:not(:disabled):not([data-disabled])):hover {
        background-color: #f8f9fa;
        background-color: var(--mantine-color-gray-0);
  }

      :where([data-mantine-color-scheme='dark']) .m_6939a5e9:where(:not(:disabled):not([data-disabled])):hover, :where([data-mantine-color-scheme='dark']) .m_4271d21b:where(:not(:disabled):not([data-disabled])):hover {
        background-color: #2e2e2e;
        background-color: var(--mantine-color-dark-6);
  }
}

@media (hover: none) {
      :where([data-mantine-color-scheme='light']) .m_6939a5e9:where(:not(:disabled):not([data-disabled])):active, :where([data-mantine-color-scheme='light']) .m_4271d21b:where(:not(:disabled):not([data-disabled])):active {
        background-color: #f8f9fa;
        background-color: var(--mantine-color-gray-0);
  }

      :where([data-mantine-color-scheme='dark']) .m_6939a5e9:where(:not(:disabled):not([data-disabled])):active, :where([data-mantine-color-scheme='dark']) .m_4271d21b:where(:not(:disabled):not([data-disabled])):active {
        background-color: #2e2e2e;
        background-color: var(--mantine-color-dark-6);
  }
}

.m_df3ffa0f {
  color: inherit;
  font-weight: 400;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-top: calc(0.75rem * 1);
  padding-top: var(--mantine-spacing-sm);
  padding-bottom: calc(0.75rem * 1);
  padding-bottom: var(--mantine-spacing-sm);
}

.m_3f35ae96 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transition: transform 200ms ease;
  transition: transform var(--accordion-transition-duration, 200ms) ease;
  width: calc(0.9375rem * 1);
  width: var(--accordion-chevron-size, calc(0.9375rem * var(--mantine-scale)));
  min-width: calc(0.9375rem * 1);
  min-width: var(--accordion-chevron-size, calc(0.9375rem * var(--mantine-scale)));
  transform: rotate(0deg);
}

.m_3f35ae96:where([data-rotate]) {
    transform: rotate(180deg);
  }

.m_3f35ae96:where([data-position='left']) {
    margin-right: calc(1rem * 1);
    margin-right: var(--mantine-spacing-md);
    margin-left: calc(1rem * 1);
    margin-left: var(--mantine-spacing-md);
  }

.m_9bd771fe {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: calc(0.75rem * 1);
  margin-right: var(--mantine-spacing-sm);
}

.m_9bd771fe:where([data-chevron-position='left']) {
    margin-right: 0;
    margin-left: calc(1.25rem * 1);
    margin-left: var(--mantine-spacing-lg);
  }

:where([data-mantine-color-scheme='light']) .m_9bd7b098 {
    --item-border-color: var(--mantine-color-gray-3);
    --item-filled-color: var(--mantine-color-gray-0);
}

:where([data-mantine-color-scheme='dark']) .m_9bd7b098 {
    --item-border-color: var(--mantine-color-dark-4);
    --item-filled-color: var(--mantine-color-dark-6);
}

.m_fe19b709 {
  border-bottom: 1px solid var(--item-border-color);
}

.m_1f921b3b {
  border: 1px solid var(--item-border-color);
  transition: background-color 150ms ease;
}

.m_1f921b3b:where([data-active]) {
    background-color: var(--item-filled-color);
  }

.m_1f921b3b:first-of-type {
    border-top-left-radius: var(--accordion-radius);
    border-top-right-radius: var(--accordion-radius);
  }

.m_1f921b3b:first-of-type > [data-accordion-control] {
      border-top-left-radius: var(--accordion-radius);
      border-top-right-radius: var(--accordion-radius);
    }

.m_1f921b3b:last-of-type {
    border-bottom-left-radius: var(--accordion-radius);
    border-bottom-right-radius: var(--accordion-radius);
  }

.m_1f921b3b:last-of-type > [data-accordion-control] {
      border-bottom-left-radius: var(--accordion-radius);
      border-bottom-right-radius: var(--accordion-radius);
    }

.m_1f921b3b + .m_1f921b3b {
    border-top: 0;
  }

.m_2cdf939a {
  border-radius: var(--accordion-radius);
}

.m_2cdf939a:where([data-active]) {
    background-color: var(--item-filled-color);
  }

.m_9f59b069 {
  background-color: var(--item-filled-color);
  border-radius: var(--accordion-radius);
  border: calc(0.0625rem * 1) solid transparent;
  border: calc(0.0625rem * var(--mantine-scale)) solid transparent;
  transition: background-color 150ms ease;
}

.m_9f59b069[data-active] {
    border-color: var(--item-border-color);
  }

:where([data-mantine-color-scheme='light']) .m_9f59b069[data-active] {
      background-color: #fff;
      background-color: var(--mantine-color-white);
}

:where([data-mantine-color-scheme='dark']) .m_9f59b069[data-active] {
      background-color: #242424;
      background-color: var(--mantine-color-dark-7);
}

.m_9f59b069 + .m_9f59b069 {
    margin-top: calc(1rem * 1);
    margin-top: var(--mantine-spacing-md);
  }

.m_7f854edf {
  position: fixed;
  z-index: var(--affix-z-index);
  left: var(--affix-left);
  right: var(--affix-right);
  top: var(--affix-top);
  bottom: var(--affix-bottom);
}

.m_66836ed3 {
  --alert-radius: var(--mantine-radius-default);
  --alert-bg: var(--mantine-primary-color-light);
  --alert-bd: calc(0.0625rem * var(--mantine-scale)) solid transparent;
  --alert-color: var(--mantine-primary-color-light-color);

  padding: calc(1rem * 1) calc(1rem * 1);

  padding: var(--mantine-spacing-md) var(--mantine-spacing-md);
  border-radius: calc(0.25rem * 1);
  border-radius: var(--alert-radius);
  position: relative;
  overflow: hidden;
  background-color: var(--alert-bg);
  border: calc(0.0625rem * 1) solid transparent;
  border: var(--alert-bd);
  color: var(--alert-color);
}

.m_a5d60502 {
  display: flex;
}

.m_667c2793 {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: calc(0.625rem * 1);
  gap: var(--mantine-spacing-xs);
}

.m_6a03f287 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: calc(0.875rem * 1);
  font-size: var(--mantine-font-size-sm);
  font-weight: 700;
}

.m_6a03f287:where([data-with-close-button]) {
    padding-right: calc(1rem * 1);
    padding-right: var(--mantine-spacing-md);
  }

.m_698f4f23 {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}

.m_667f2a6a {
  line-height: 1;
  width: calc(1.25rem * 1);
  width: calc(1.25rem * var(--mantine-scale));
  height: calc(1.25rem * 1);
  height: calc(1.25rem * var(--mantine-scale));
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: calc(1rem * 1);
  margin-right: var(--mantine-spacing-md);
  margin-top: calc(0.0625rem * 1);
  margin-top: calc(0.0625rem * var(--mantine-scale));
}

.m_7fa78076 {
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: calc(0.875rem * 1);
  font-size: var(--mantine-font-size-sm);
}

:where([data-mantine-color-scheme='light']) .m_7fa78076 {
    color: #000;
    color: var(--mantine-color-black);
}

:where([data-mantine-color-scheme='dark']) .m_7fa78076 {
    color: #fff;
    color: var(--mantine-color-white);
}

.m_7fa78076:where([data-variant='filled']) {
    color: var(--alert-color);
  }

.m_7fa78076:where([data-variant='white']) {
    color: #000;
    color: var(--mantine-color-black);
  }

.m_87f54839 {
  width: calc(1.25rem * 1);
  width: calc(1.25rem * var(--mantine-scale));
  height: calc(1.25rem * 1);
  height: calc(1.25rem * var(--mantine-scale));
  color: var(--alert-color);
}

.m_b6d8b162 {
  -webkit-tap-highlight-color: transparent;
  -webkit-text-decoration: none;
  text-decoration: none;
  font-size: calc(1rem * 1);
  font-size: var(--text-fz, var(--mantine-font-size-md));
  line-height: 1.55;
  line-height: var(--text-lh, var(--mantine-line-height-md));
  font-weight: normal;
  margin: 0;
  padding: 0;
  color: var(--text-color);
}

  .m_b6d8b162:where([data-truncate]) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .m_b6d8b162:where([data-truncate='start']) {
    direction: rtl;
    text-align: right;
  }

  :where([dir="rtl"]) .m_b6d8b162:where([data-truncate='start']) {
      direction: ltr;
      text-align: left;
}

  .m_b6d8b162:where([data-variant='gradient']) {
    background-image: var(--text-gradient);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .m_b6d8b162:where([data-line-clamp]) {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: var(--text-line-clamp);
    -webkit-box-orient: vertical;
  }

  .m_b6d8b162:where([data-inherit]) {
    line-height: inherit;
    font-weight: inherit;
    font-size: inherit;
  }

  .m_b6d8b162:where([data-inline]) {
    line-height: 1;
  }

.m_849cf0da {
  color: var(--mantine-color-anchor);
  -webkit-text-decoration: none;
  text-decoration: none;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  border: none;
  display: inline;
  padding: 0;
  margin: 0;
  background-color: transparent;
  cursor: pointer;
}

  @media (hover: hover) {

  .m_849cf0da:where([data-underline='hover']):hover {
      -webkit-text-decoration: underline;
      text-decoration: underline;
  }
}

  @media (hover: none) {

  .m_849cf0da:where([data-underline='hover']):active {
      -webkit-text-decoration: underline;
      text-decoration: underline;
  }
}

  .m_849cf0da:where([data-underline='always']) {
    -webkit-text-decoration: underline;
    text-decoration: underline;
  }

  .m_849cf0da:where([data-variant='gradient']),
    .m_849cf0da:where([data-variant='gradient']):hover {
      -webkit-text-decoration: none;
      text-decoration: none;
    }

  .m_849cf0da:where([data-line-clamp]) {
    display: -webkit-box;
  }

.m_48204f9b {
  width: var(--slider-size);
  height: var(--slider-size);
  position: relative;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}

  .m_48204f9b:focus-within {
    outline: 2px solid var(--mantine-primary-color-filled);
    outline-offset: calc(0.125rem * 1);
    outline-offset: calc(0.125rem * var(--mantine-scale));
  }

  .m_48204f9b {

  --slider-size: calc(3.75rem * var(--mantine-scale));
  --thumb-size: calc(var(--slider-size) / 5);
}

  :where([data-mantine-color-scheme='light']) .m_48204f9b {
    background-color: #f1f3f5;
    background-color: var(--mantine-color-gray-1);
}

  :where([data-mantine-color-scheme='dark']) .m_48204f9b {
    background-color: #3b3b3b;
    background-color: var(--mantine-color-dark-5);
}

.m_bb9cdbad {
  position: absolute;
  top: calc(0.0625rem * 1);
  right: calc(0.0625rem * 1);
  bottom: calc(0.0625rem * 1);
  left: calc(0.0625rem * 1);
  top: calc(0.0625rem * var(--mantine-scale));
  right: calc(0.0625rem * var(--mantine-scale));
  bottom: calc(0.0625rem * var(--mantine-scale));
  left: calc(0.0625rem * var(--mantine-scale));
  border-radius: var(--slider-size);
  pointer-events: none;
}

.m_481dd586 {
  width: calc(0.125rem * 1);
  width: calc(0.125rem * var(--mantine-scale));
  position: absolute;
  top: 0;
  bottom: 0;
  left: calc(50% - 1px);
  transform: rotate(var(--angle));
}

.m_481dd586::before {
    content: '';
    position: absolute;
    top: calc(var(--thumb-size) / 3);
    left: calc(0.03125rem * 1);
    left: calc(0.03125rem * var(--mantine-scale));
    width: calc(0.0625rem * 1);
    width: calc(0.0625rem * var(--mantine-scale));
    height: calc(var(--thumb-size) / 1.5);
    transform: translate(-50%, -50%);
  }

:where([data-mantine-color-scheme='light']) .m_481dd586::before {
      background-color: #ced4da;
      background-color: var(--mantine-color-gray-4);
}

:where([data-mantine-color-scheme='dark']) .m_481dd586::before {
      background-color: #696969;
      background-color: var(--mantine-color-dark-3);
}

.m_481dd586[data-label]::after {
    min-width: calc(1.125rem * 1);
    min-width: calc(1.125rem * var(--mantine-scale));
    text-align: center;
    content: attr(data-label);
    position: absolute;
    top: calc(-1.5rem * 1);
    top: calc(-1.5rem * var(--mantine-scale));
    left: calc(-0.4375rem * 1);
    left: calc(-0.4375rem * var(--mantine-scale));
    transform: rotate(calc(360deg - var(--angle)));
    font-size: calc(0.75rem * 1);
    font-size: var(--mantine-font-size-xs);
  }

.m_bc02ba3d {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: calc(50% - 1.5px);
  height: 100%;
  width: calc(0.1875rem * 1);
  width: calc(0.1875rem * var(--mantine-scale));
  outline: none;
  pointer-events: none;
}

.m_bc02ba3d::before {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    height: min(var(--thumb-size), calc(var(--slider-size) / 2));
    width: calc(0.1875rem * 1);
    width: calc(0.1875rem * var(--mantine-scale));
  }

:where([data-mantine-color-scheme='light']) .m_bc02ba3d::before {
      background-color: #495057;
      background-color: var(--mantine-color-gray-7);
}

:where([data-mantine-color-scheme='dark']) .m_bc02ba3d::before {
      background-color: #b8b8b8;
      background-color: var(--mantine-color-dark-1);
}

.m_bb8e875b {
  font-size: calc(0.75rem * 1);
  font-size: var(--mantine-font-size-xs);
}

.m_89ab340[data-resizing] {
    --app-shell-transition-duration: 0ms !important;
  }
  .m_89ab340[data-disabled] {
    --app-shell-header-offset: 0rem !important;
    --app-shell-navbar-offset: 0rem !important;
  }
  [data-mantine-color-scheme='light'] .m_89ab340 {
    --app-shell-border-color: var(--mantine-color-gray-3);
}
  [data-mantine-color-scheme='dark'] .m_89ab340 {
    --app-shell-border-color: var(--mantine-color-dark-4);
}

.m_45252eee,
.m_9cdde9a,
.m_3b16f56b,
.m_8983817,
.m_3840c879 {
  transition-duration: var(--app-shell-transition-duration);
  transition-timing-function: var(--app-shell-transition-timing-function);
}

.m_45252eee,
.m_9cdde9a {
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0rem;
  top: var(--app-shell-header-offset, 0rem);
  height: calc(
    100dvh - 0rem - 0rem
  );
  height: calc(
    100dvh - var(--app-shell-header-offset, 0rem) - var(--app-shell-footer-offset, 0rem)
  );
  background-color: var(--mantine-color-body);
  transition-property: transform, top, height;
}

:where([data-layout='alt']) .m_45252eee, :where([data-layout='alt']) .m_9cdde9a {
    top: 0rem;
    height: 100dvh;
  }

.m_45252eee {
  left: 0;
  width: var(--app-shell-navbar-width);
  transition-property: transform, top, height;
  transform: var(--app-shell-navbar-transform);
  z-index: var(--app-shell-navbar-z-index);
}

:where([dir="rtl"]) .m_45252eee {
    transform: var(--app-shell-navbar-transform-rtl);
}

.m_45252eee:where([data-with-border]) {
    border-right: 1px solid var(--app-shell-border-color);
  }

.m_9cdde9a {
  right: 0;
  width: var(--app-shell-aside-width);
  transform: var(--app-shell-aside-transform);
  z-index: var(--app-shell-aside-z-index);
}

:where([dir="rtl"]) .m_9cdde9a {
    transform: var(--app-shell-aside-transform-rtl);
}

.m_9cdde9a:where([data-with-border]) {
    border-left: 1px solid var(--app-shell-border-color);
  }

.m_8983817 {
  padding-left: calc(0rem + var(--app-shell-padding));
  padding-left: calc(var(--app-shell-navbar-offset, 0rem) + var(--app-shell-padding));
  padding-right: calc(0rem + var(--app-shell-padding));
  padding-right: calc(var(--app-shell-aside-offset, 0rem) + var(--app-shell-padding));
  padding-top: calc(0rem + var(--app-shell-padding));
  padding-top: calc(var(--app-shell-header-offset, 0rem) + var(--app-shell-padding));
  padding-bottom: calc(0rem + var(--app-shell-padding));
  padding-bottom: calc(var(--app-shell-footer-offset, 0rem) + var(--app-shell-padding));
  min-height: 100dvh;
  transition-property: padding;
}

.m_3b16f56b,
.m_3840c879 {
  position: fixed;
  left: 0;
  right: 0;
  transition-property: transform, left, right;
  background-color: var(--mantine-color-body);
}

:where([data-layout='alt']) .m_3b16f56b, :where([data-layout='alt']) .m_3840c879 {
    left: 0rem;
    left: var(--app-shell-navbar-offset, 0rem);
    right: 0rem;
    right: var(--app-shell-aside-offset, 0rem);
  }

.m_3b16f56b {
  top: 0;
  height: var(--app-shell-header-height);
  background-color: var(--mantine-color-body);
  transform: var(--app-shell-header-transform);
  z-index: var(--app-shell-header-z-index);
}

.m_3b16f56b:where([data-with-border]) {
    border-bottom: 1px solid var(--app-shell-border-color);
  }

.m_3840c879 {
  bottom: 0;
  height: calc(var(--app-shell-footer-height) + env(safe-area-inset-bottom));
  padding-bottom: env(safe-area-inset-bottom);
  transform: var(--app-shell-footer-transform);
  z-index: var(--app-shell-footer-z-index);
}

.m_3840c879:where([data-with-border]) {
    border-top: 1px solid var(--app-shell-border-color);
  }

.m_6dcfc7c7 {
  flex-grow: 0;
}

.m_6dcfc7c7:where([data-grow]) {
    flex-grow: 1;
  }

.m_71ac47fc {
  --ar-ratio: 1;
  max-width: 100%;
}

  .m_71ac47fc > :where(*:not(style)) {
    aspect-ratio: var(--ar-ratio);
    width: 100%;
  }

  .m_71ac47fc > :where(img, video) {
    -o-object-fit: cover;
       object-fit: cover;
  }

.m_88b62a41 {
  --combobox-padding: calc(0.25rem * var(--mantine-scale));
  padding: calc(0.25rem * 1);
  padding: var(--combobox-padding);
}

  .m_88b62a41:has([data-mantine-scrollbar]) {
    padding-right: 0;
  }

  .m_88b62a41:has([data-mantine-scrollbar]) .m_985517d8 {
      max-width: calc(100% + var(--combobox-padding));
    }

  .m_88b62a41[data-hidden] {
    display: none;
  }

/* Variables must be both on dropdown and options to support usage of Combobox.Options without Combobox.Dropdown */
.m_88b62a41,
.m_b2821a6e {
  --combobox-option-padding-xs: calc(0.25rem * var(--mantine-scale)) calc(0.5rem * var(--mantine-scale));
  --combobox-option-padding-sm: calc(0.375rem * var(--mantine-scale)) calc(0.625rem * var(--mantine-scale));
  --combobox-option-padding-md: calc(0.5rem * var(--mantine-scale)) calc(0.75rem * var(--mantine-scale));
  --combobox-option-padding-lg: calc(0.625rem * var(--mantine-scale)) calc(1rem * var(--mantine-scale));
  --combobox-option-padding-xl: calc(0.875rem * var(--mantine-scale)) calc(1.25rem * var(--mantine-scale));
  --combobox-option-padding: var(--combobox-option-padding-sm);
}

.m_92253aa5 {
  padding: var(--combobox-option-padding);
  font-size: calc(0.875rem * 1);
  font-size: var(--combobox-option-fz, var(--mantine-font-size-sm));
  border-radius: calc(0.25rem * 1);
  border-radius: var(--mantine-radius-default);
  background-color: transparent;
  color: inherit;
  cursor: pointer;
  word-break: break-word;
}

.m_92253aa5:where([data-combobox-selected]) {
    background-color: var(--mantine-primary-color-filled);
    color: #fff;
    color: var(--mantine-color-white);
  }

.m_92253aa5:where([data-combobox-disabled]) {
    cursor: not-allowed;
    opacity: 0.35;
  }

@media (hover: hover) {
      :where([data-mantine-color-scheme='light']) .m_92253aa5:hover:where(:not([data-combobox-selected]):not([data-combobox-disabled])) {
        background-color: #f8f9fa;
        background-color: var(--mantine-color-gray-0);
  }

      :where([data-mantine-color-scheme='dark']) .m_92253aa5:hover:where(:not([data-combobox-selected]):not([data-combobox-disabled])) {
        background-color: #242424;
        background-color: var(--mantine-color-dark-7);
  }
}

@media (hover: none) {
      :where([data-mantine-color-scheme='light']) .m_92253aa5:active:where(:not([data-combobox-selected]):not([data-combobox-disabled])) {
        background-color: #f8f9fa;
        background-color: var(--mantine-color-gray-0);
  }

      :where([data-mantine-color-scheme='dark']) .m_92253aa5:active:where(:not([data-combobox-selected]):not([data-combobox-disabled])) {
        background-color: #242424;
        background-color: var(--mantine-color-dark-7);
  }
}

.m_985517d8 {
  margin-left: calc(var(--combobox-padding) * -1);
  margin-right: calc(var(--combobox-padding) * -1);
  margin-top: calc(var(--combobox-padding) * -1);
  width: calc(100% + var(--combobox-padding) * 2);
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  margin-bottom: var(--combobox-padding);
  position: relative;
}

:where([data-mantine-color-scheme='light']) .m_985517d8, :where([data-mantine-color-scheme='light']) .m_985517d8:focus {
      border-color: #e9ecef;
      border-color: var(--mantine-color-gray-2);
}

:where([data-mantine-color-scheme='dark']) .m_985517d8, :where([data-mantine-color-scheme='dark']) .m_985517d8:focus {
      border-color: #424242;
      border-color: var(--mantine-color-dark-4);
}

:where([data-mantine-color-scheme='light']) .m_985517d8 {
    background-color: #fff;
    background-color: var(--mantine-color-white);
}

:where([data-mantine-color-scheme='dark']) .m_985517d8 {
    background-color: #242424;
    background-color: var(--mantine-color-dark-7);
}

.m_2530cd1d {
  font-size: calc(0.875rem * 1);
  font-size: var(--combobox-option-fz, var(--mantine-font-size-sm));
  text-align: center;
  padding: var(--combobox-option-padding);
  color: var(--mantine-color-dimmed);
}

.m_858f94bd,
.m_82b967cb {
  font-size: calc(0.875rem * 1);
  font-size: var(--combobox-option-fz, var(--mantine-font-size-sm));
  border: 0 solid transparent;
  margin-left: calc(var(--combobox-padding) * -1);
  margin-right: calc(var(--combobox-padding) * -1);
  padding: var(--combobox-option-padding);
}

:where([data-mantine-color-scheme='light']) .m_858f94bd, :where([data-mantine-color-scheme='light']) .m_82b967cb {
    border-color: #e9ecef;
    border-color: var(--mantine-color-gray-2);
}

:where([data-mantine-color-scheme='dark']) .m_858f94bd, :where([data-mantine-color-scheme='dark']) .m_82b967cb {
    border-color: #424242;
    border-color: var(--mantine-color-dark-4);
}

.m_82b967cb {
  border-top-width: calc(0.0625rem * 1);
  border-top-width: calc(0.0625rem * var(--mantine-scale));
  margin-top: var(--combobox-padding);
  margin-bottom: calc(var(--combobox-padding) * -1);
}

.m_858f94bd {
  border-bottom-width: calc(0.0625rem * 1);
  border-bottom-width: calc(0.0625rem * var(--mantine-scale));
  margin-bottom: var(--combobox-padding);
  margin-top: calc(var(--combobox-padding) * -1);
}

.m_254f3e4f:has(.m_2bb2e9e5:only-child) {
    display: none;
  }

.m_2bb2e9e5 {
  color: var(--mantine-color-dimmed);
  font-size: calc((0.875rem * 1) * 0.85);
  font-size: calc(calc(0.875rem * 1) * 0.85);
  font-size: calc(var(--combobox-option-fz, var(--mantine-font-size-sm)) * 0.85);
  padding: var(--combobox-option-padding);
  font-weight: 500;
  position: relative;
  display: flex;
  align-items: center;
}

.m_2bb2e9e5::after {
    content: '';
    flex: 1;
    left: 0;
    right: 0;
    height: calc(0.0625rem * 1);
    height: calc(0.0625rem * var(--mantine-scale));
    margin-left: calc(0.625rem * 1);
    margin-left: var(--mantine-spacing-xs);
  }

:where([data-mantine-color-scheme='light']) .m_2bb2e9e5::after {
      background-color: #e9ecef;
      background-color: var(--mantine-color-gray-2);
}

:where([data-mantine-color-scheme='dark']) .m_2bb2e9e5::after {
      background-color: #424242;
      background-color: var(--mantine-color-dark-4);
}

.m_2bb2e9e5:only-child {
    display: none;
  }

/* ------- Combobox.Chevron ------- */
.m_2943220b {
  --combobox-chevron-size-xs: calc(0.875rem * var(--mantine-scale));
  --combobox-chevron-size-sm: calc(1.125rem * var(--mantine-scale));
  --combobox-chevron-size-md: calc(1.25rem * var(--mantine-scale));
  --combobox-chevron-size-lg: calc(1.5rem * var(--mantine-scale));
  --combobox-chevron-size-xl: calc(1.75rem * var(--mantine-scale));
  --combobox-chevron-size: var(--combobox-chevron-size-sm);

  width: calc(1.125rem * 1);

  width: var(--combobox-chevron-size);
  height: calc(1.125rem * 1);
  height: var(--combobox-chevron-size);
}
:where([data-mantine-color-scheme='light']) .m_2943220b {
    color: #868e96;
    color: var(--mantine-color-gray-6);
}
:where([data-mantine-color-scheme='dark']) .m_2943220b {
    color: #696969;
    color: var(--mantine-color-dark-3);
}
.m_2943220b:where([data-error]) {
    color: var(--mantine-color-error);
  }

/* ------- OptionsDropdown ------- */
.m_390b5f4 {
  display: flex;
  align-items: center;
  gap: calc(0.5rem * 1);
  gap: calc(0.5rem * var(--mantine-scale));
}
.m_390b5f4:where([data-reverse]) {
    justify-content: space-between;
  }

.m_8ee53fc2 {
  opacity: 0.4;
  width: 0.8em;
  min-width: 0.8em;
  height: 0.8em;
}

:where([data-combobox-selected]) .m_8ee53fc2 {
    opacity: 1;
  }

.m_5f75b09e {
  --label-lh-xs: calc(1rem * var(--mantine-scale));
  --label-lh-sm: calc(1.25rem * var(--mantine-scale));
  --label-lh-md: calc(1.5rem * var(--mantine-scale));
  --label-lh-lg: calc(1.875rem * var(--mantine-scale));
  --label-lh-xl: calc(2.25rem * var(--mantine-scale));
  --label-lh: var(--label-lh-sm);
}

  .m_5f75b09e[data-label-position='left'] {
    --label-order: 1;
    --label-offset-end: var(--mantine-spacing-sm);
    --label-offset-start: 0;
  }

  .m_5f75b09e[data-label-position='right'] {
    --label-order: 2;
    --label-offset-end: 0;
    --label-offset-start: var(--mantine-spacing-sm);
  }

.m_5f6e695e {
  display: flex;
}

.m_d3ea56bb {
  --label-cursor: var(--mantine-cursor-type);

  -webkit-tap-highlight-color: transparent;
  display: inline-flex;
  flex-direction: column;
  font-size: calc(0.875rem * 1);
  font-size: var(--label-fz, var(--mantine-font-size-sm));
  line-height: var(--label-lh);
  cursor: default;
  cursor: var(--label-cursor);
  order: var(--label-order);
}

fieldset:disabled .m_d3ea56bb,
  .m_d3ea56bb[data-disabled] {
    --label-cursor: not-allowed;
  }

.m_8ee546b8 {
  cursor: var(--label-cursor);
  color: inherit;
  padding-left: var(--label-offset-start);
  padding-right: var(--label-offset-end);
}

:where([data-mantine-color-scheme='light']) fieldset:disabled .m_8ee546b8, :where([data-mantine-color-scheme='light']) .m_8ee546b8:where([data-disabled]) {
      color: #adb5bd;
      color: var(--mantine-color-gray-5);
}

:where([data-mantine-color-scheme='dark']) fieldset:disabled .m_8ee546b8, :where([data-mantine-color-scheme='dark']) .m_8ee546b8:where([data-disabled]) {
      color: #696969;
      color: var(--mantine-color-dark-3);
}

.m_328f68c0 {
  margin-top: calc((0.625rem * 1) / 2);
  margin-top: calc(calc(0.625rem * 1) / 2);
  margin-top: calc(var(--mantine-spacing-xs) / 2);
  padding-left: var(--label-offset-start);
  padding-right: var(--label-offset-end);
}

.m_8e8a99cc {
  margin-top: calc((0.625rem * 1) / 2);
  margin-top: calc(calc(0.625rem * 1) / 2);
  margin-top: calc(var(--mantine-spacing-xs) / 2);
  padding-left: var(--label-offset-start);
  padding-right: var(--label-offset-end);
}

.m_26775b0a {
  --card-radius: var(--mantine-radius-default);

  display: block;
  width: 100%;
  border-radius: calc(0.25rem * 1);
  border-radius: var(--card-radius);
  cursor: pointer;
}

  .m_26775b0a :where(*) {
    cursor: inherit;
  }

  .m_26775b0a:where([data-with-border]) {
    border: calc(0.0625rem * 1) solid transparent;
    border: calc(0.0625rem * var(--mantine-scale)) solid transparent;
  }

  :where([data-mantine-color-scheme='light']) .m_26775b0a:where([data-with-border]) {
      border-color: #dee2e6;
      border-color: var(--mantine-color-gray-3);
}

  :where([data-mantine-color-scheme='dark']) .m_26775b0a:where([data-with-border]) {
      border-color: #424242;
      border-color: var(--mantine-color-dark-4);
}

.m_5e5256ee {
  --checkbox-size-xs: calc(1rem * var(--mantine-scale));
  --checkbox-size-sm: calc(1.25rem * var(--mantine-scale));
  --checkbox-size-md: calc(1.5rem * var(--mantine-scale));
  --checkbox-size-lg: calc(1.875rem * var(--mantine-scale));
  --checkbox-size-xl: calc(2.25rem * var(--mantine-scale));

  --checkbox-size: var(--checkbox-size-sm);
  --checkbox-color: var(--mantine-primary-color-filled);
  --checkbox-icon-color: var(--mantine-color-white);

  position: relative;
  border: calc(0.0625rem * 1) solid transparent;
  border: calc(0.0625rem * var(--mantine-scale)) solid transparent;
  width: calc(1.25rem * 1);
  width: var(--checkbox-size);
  min-width: calc(1.25rem * 1);
  min-width: var(--checkbox-size);
  height: calc(1.25rem * 1);
  height: var(--checkbox-size);
  min-height: calc(1.25rem * 1);
  min-height: var(--checkbox-size);
  border-radius: calc(0.25rem * 1);
  border-radius: var(--checkbox-radius, var(--mantine-radius-default));
  transition:
    border-color 100ms ease, background-color 100ms ease;
  cursor: default;
  cursor: var(--mantine-cursor-type);
  -webkit-tap-highlight-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
}

  :where([data-mantine-color-scheme='light']) .m_5e5256ee {
    background-color: #fff;
    background-color: var(--mantine-color-white);
    border-color: #ced4da;
    border-color: var(--mantine-color-gray-4);
}

  :where([data-mantine-color-scheme='dark']) .m_5e5256ee {
    background-color: #2e2e2e;
    background-color: var(--mantine-color-dark-6);
    border-color: #424242;
    border-color: var(--mantine-color-dark-4);
}

  .m_5e5256ee[data-indeterminate],
  .m_5e5256ee[data-checked] {
    background-color: var(--checkbox-color);
    border-color: var(--checkbox-color);
  }

  .m_5e5256ee[data-indeterminate] > .m_1b1c543a, .m_5e5256ee[data-checked] > .m_1b1c543a {
      opacity: 1;
      transform: none;
      color: var(--checkbox-icon-color);
    }

  .m_5e5256ee[data-disabled] {
    cursor: not-allowed;
  }

  :where([data-mantine-color-scheme='light']) .m_5e5256ee[data-disabled] {
      background-color: #e9ecef;
      background-color: var(--mantine-color-gray-2);
      border-color: #dee2e6;
      border-color: var(--mantine-color-gray-3);
}

  :where([data-mantine-color-scheme='dark']) .m_5e5256ee[data-disabled] {
      background-color: #2e2e2e;
      background-color: var(--mantine-color-dark-6);
      border-color: #2e2e2e;
      border-color: var(--mantine-color-dark-6);
}

  [data-mantine-color-scheme='light'] .m_5e5256ee[data-disabled][data-checked] > .m_1b1c543a {
        color: #adb5bd;
        color: var(--mantine-color-gray-5);
}

  [data-mantine-color-scheme='dark'] .m_5e5256ee[data-disabled][data-checked] > .m_1b1c543a {
        color: #696969;
        color: var(--mantine-color-dark-3);
}

.m_76e20374[data-indeterminate]:not([data-disabled]),
  .m_76e20374[data-checked]:not([data-disabled]) {
    background-color: transparent;
    border-color: var(--checkbox-color);
  }

.m_76e20374[data-indeterminate]:not([data-disabled]) > .m_1b1c543a, .m_76e20374[data-checked]:not([data-disabled]) > .m_1b1c543a {
      color: var(--checkbox-color);
      opacity: 1;
      transform: none;
    }

.m_1b1c543a {
  display: block;
  width: 60%;
  color: transparent;
  pointer-events: none;
  transform: translateY(calc(0.3125rem * 1)) scale(0.5);
  transform: translateY(calc(0.3125rem * var(--mantine-scale))) scale(0.5);
  opacity: 1;
  transition:
    transform 100ms ease, opacity 100ms ease;
}

.m_bf2d988c {
  --checkbox-size-xs: calc(1rem * var(--mantine-scale));
  --checkbox-size-sm: calc(1.25rem * var(--mantine-scale));
  --checkbox-size-md: calc(1.5rem * var(--mantine-scale));
  --checkbox-size-lg: calc(1.875rem * var(--mantine-scale));
  --checkbox-size-xl: calc(2.25rem * var(--mantine-scale));

  --checkbox-size: var(--checkbox-size-sm);
  --checkbox-color: var(--mantine-primary-color-filled);
  --checkbox-icon-color: var(--mantine-color-white);
}

.m_26062bec {
  position: relative;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  order: 1;
}

.m_26062bec:where([data-label-position='left']) {
    order: 2;
  }

.m_26063560 {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  border: calc(0.0625rem * 1) solid transparent;
  border: calc(0.0625rem * var(--mantine-scale)) solid transparent;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: calc(0.25rem * 1);
  border-radius: var(--checkbox-radius, var(--mantine-radius-default));
  padding: 0;
  display: block;
  margin: 0;
  transition:
    border-color 100ms ease, background-color 100ms ease;
  cursor: default;
  cursor: var(--mantine-cursor-type);
  -webkit-tap-highlight-color: transparent;
}

:where([data-mantine-color-scheme='light']) .m_26063560 {
    background-color: #fff;
    background-color: var(--mantine-color-white);
    border-color: #ced4da;
    border-color: var(--mantine-color-gray-4);
}

:where([data-mantine-color-scheme='dark']) .m_26063560 {
    background-color: #2e2e2e;
    background-color: var(--mantine-color-dark-6);
    border-color: #424242;
    border-color: var(--mantine-color-dark-4);
}

.m_26063560:where([data-error]) {
    border-color: var(--mantine-color-error);
  }

.m_26063560[data-indeterminate],
  .m_26063560:checked {
    background-color: var(--checkbox-color);
    border-color: var(--checkbox-color);
  }

.m_26063560[data-indeterminate] + .m_bf295423, .m_26063560:checked + .m_bf295423 {
      opacity: 1;
      transform: none;
    }

.m_26063560:disabled {
    cursor: not-allowed;
  }

:where([data-mantine-color-scheme='light']) .m_26063560:disabled {
      background-color: #e9ecef;
      background-color: var(--mantine-color-gray-2);
      border-color: #dee2e6;
      border-color: var(--mantine-color-gray-3);
}

:where([data-mantine-color-scheme='dark']) .m_26063560:disabled {
      background-color: #2e2e2e;
      background-color: var(--mantine-color-dark-6);
      border-color: #2e2e2e;
      border-color: var(--mantine-color-dark-6);
}

[data-mantine-color-scheme='light'] .m_26063560:disabled + .m_bf295423 {
        color: #adb5bd;
        color: var(--mantine-color-gray-5);
}

[data-mantine-color-scheme='dark'] .m_26063560:disabled + .m_bf295423 {
        color: #696969;
        color: var(--mantine-color-dark-3);
}

.m_215c4542 + .m_bf295423 {
    color: var(--checkbox-color);
  }

.m_215c4542[data-indeterminate]:not(:disabled),
  .m_215c4542:checked:not(:disabled) {
    background-color: transparent;
    border-color: var(--checkbox-color);
  }

.m_215c4542[data-indeterminate]:not(:disabled) + .m_bf295423, .m_215c4542:checked:not(:disabled) + .m_bf295423 {
      color: var(--checkbox-color);
      opacity: 1;
      transform: none;
    }

.m_bf295423 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 60%;
  margin: auto;
  color: var(--checkbox-icon-color);
  pointer-events: none;
  transform: translateY(calc(0.3125rem * 1)) scale(0.5);
  transform: translateY(calc(0.3125rem * var(--mantine-scale))) scale(0.5);
  opacity: 0;
  transition:
    transform 100ms ease, opacity 100ms ease;
}

/* Avatar.Group root element */
.m_11def92b {
  --ag-spacing: var(--mantine-spacing-sm);
  --ag-offset: calc(var(--ag-spacing) * -1);

  display: flex;
  padding-left: calc(0.75rem * 1);
  padding-left: var(--ag-spacing);
}

/* Avatar root element */
.m_f85678b6 {
  --avatar-size-xs: calc(1rem * var(--mantine-scale));
  --avatar-size-sm: calc(1.625rem * var(--mantine-scale));
  --avatar-size-md: calc(2.375rem * var(--mantine-scale));
  --avatar-size-lg: calc(3.5rem * var(--mantine-scale));
  --avatar-size-xl: calc(5.25rem * var(--mantine-scale));

  --avatar-size: var(--avatar-size-md);
  --avatar-radius: calc(62.5rem * var(--mantine-scale));
  --avatar-bg: var(--mantine-color-gray-light);
  --avatar-bd: calc(0.0625rem * var(--mantine-scale)) solid transparent;
  --avatar-color: var(--mantine-color-gray-light-color);
  --avatar-placeholder-fz: calc(var(--avatar-size) / 2.5);

  -webkit-tap-highlight-color: transparent;
  position: relative;
  display: block;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  overflow: hidden;
  border-radius: calc(62.5rem * 1);
  border-radius: var(--avatar-radius);
  -webkit-text-decoration: none;
  text-decoration: none;
  padding: 0;
  width: calc(2.375rem * 1);
  width: var(--avatar-size);
  height: calc(2.375rem * 1);
  height: var(--avatar-size);
  min-width: calc(2.375rem * 1);
  min-width: var(--avatar-size);
}
.m_f85678b6:where([data-within-group]) {
    margin-left: var(--ag-offset);
    border: 2px solid var(--mantine-color-body);
    background: var(--mantine-color-body);
  }

.m_11f8ac07 {
  -o-object-fit: cover;
     object-fit: cover;
  width: 100%;
  height: 100%;
  display: block;
}

.m_104cd71f {
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  border-radius: var(--avatar-radius);
  font-size: var(--avatar-placeholder-fz);
  background: var(--avatar-bg);
  border: var(--avatar-bd);
  color: var(--avatar-color);
}

.m_104cd71f > [data-avatar-placeholder-icon] {
    width: 70%;
    height: 70%;
  }

.m_2ce0de02 {
  background-size: cover;
  background-position: center;
  display: block;
  width: 100%;
  border: 0;
  -webkit-text-decoration: none;
  text-decoration: none;
  border-radius: 0;
  border-radius: var(--bi-radius, 0);
}

.m_347db0ec {
  --badge-height-xs: calc(1rem * var(--mantine-scale));
  --badge-height-sm: calc(1.125rem * var(--mantine-scale));
  --badge-height-md: calc(1.25rem * var(--mantine-scale));
  --badge-height-lg: calc(1.625rem * var(--mantine-scale));
  --badge-height-xl: calc(2rem * var(--mantine-scale));

  --badge-fz-xs: calc(0.5625rem * var(--mantine-scale));
  --badge-fz-sm: calc(0.625rem * var(--mantine-scale));
  --badge-fz-md: calc(0.6875rem * var(--mantine-scale));
  --badge-fz-lg: calc(0.8125rem * var(--mantine-scale));
  --badge-fz-xl: calc(1rem * var(--mantine-scale));

  --badge-padding-x-xs: calc(0.375rem * var(--mantine-scale));
  --badge-padding-x-sm: calc(0.5rem * var(--mantine-scale));
  --badge-padding-x-md: calc(0.625rem * var(--mantine-scale));
  --badge-padding-x-lg: calc(0.75rem * var(--mantine-scale));
  --badge-padding-x-xl: calc(1rem * var(--mantine-scale));

  --badge-height: var(--badge-height-md);
  --badge-fz: var(--badge-fz-md);
  --badge-padding-x: var(--badge-padding-x-md);
  --badge-radius: calc(62.5rem * var(--mantine-scale));
  --badge-lh: calc(var(--badge-height) - calc(0.125rem * var(--mantine-scale)));
  --badge-color: var(--mantine-color-white);
  --badge-bg: var(--mantine-primary-color-filled);
  --badge-border-width: calc(0.0625rem * var(--mantine-scale));
  --badge-bd: var(--badge-border-width) solid transparent;

  -webkit-tap-highlight-color: transparent;
  font-size: calc(0.6875rem * 1);
  font-size: var(--badge-fz);
  border-radius: calc(62.5rem * 1);
  border-radius: var(--badge-radius);
  height: calc(1.25rem * 1);
  height: var(--badge-height);
  line-height: calc((1.25rem * 1) - (0.125rem * 1));
  line-height: calc(calc(1.25rem * 1) - calc(0.125rem * 1));
  line-height: var(--badge-lh);
  -webkit-text-decoration: none;
  text-decoration: none;
  padding: 0 calc(0.625rem * 1);
  padding: 0 var(--badge-padding-x);
  display: inline-grid;
  align-items: center;
  justify-content: center;
  width: -moz-fit-content;
  width: fit-content;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: calc(0.015625rem * 1);
  letter-spacing: calc(0.015625rem * var(--mantine-scale));
  cursor: default;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #fff;
  color: var(--badge-color);
  background: var(--badge-bg);
  border: calc(0.0625rem * 1) solid transparent;
  border: var(--badge-bd);
}

  .m_347db0ec:where([data-with-left-section], [data-variant='dot']) {
    grid-template-columns: auto 1fr;
  }

  .m_347db0ec:where([data-with-right-section]) {
    grid-template-columns: 1fr auto;
  }

  .m_347db0ec:where(
      [data-with-left-section][data-with-right-section],
      [data-variant='dot'][data-with-right-section]
    ) {
    grid-template-columns: auto 1fr auto;
  }

  .m_347db0ec:where([data-block]) {
    display: flex;
    width: 100%;
  }

  .m_347db0ec:where([data-circle]) {
    padding-left: calc(0.125rem * 1);
    padding-right: calc(0.125rem * 1);
    padding-left: calc(0.125rem * var(--mantine-scale));
    padding-right: calc(0.125rem * var(--mantine-scale));
    display: flex;
    width: var(--badge-height);
  }

.m_fbd81e3d {
  --badge-dot-size: calc(var(--badge-height) / 3.4);
}

:where([data-mantine-color-scheme='light']) .m_fbd81e3d {
    background-color: #fff;
    background-color: var(--mantine-color-white);
    border-color: #ced4da;
    border-color: var(--mantine-color-gray-4);
    color: #000;
    color: var(--mantine-color-black);
}

:where([data-mantine-color-scheme='dark']) .m_fbd81e3d {
    background-color: #3b3b3b;
    background-color: var(--mantine-color-dark-5);
    border-color: #3b3b3b;
    border-color: var(--mantine-color-dark-5);
    color: #fff;
    color: var(--mantine-color-white);
}

.m_fbd81e3d::before {
    content: '';
    display: block;
    width: var(--badge-dot-size);
    height: var(--badge-dot-size);
    border-radius: var(--badge-dot-size);
    background-color: var(--badge-dot-color);
    margin-right: var(--badge-dot-size);
  }

.m_5add502a {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  cursor: inherit;
}

.m_91fdda9b {
  --badge-section-margin: calc(var(--mantine-spacing-xs) / 2);

  display: inline-flex;
  justify-content: center;
  align-items: center;
  max-height: calc(var(--badge-height) - var(--badge-border-width) * 2);
}

.m_91fdda9b:where([data-position='left']) {
    margin-right: var(--badge-section-margin);
  }

.m_91fdda9b:where([data-position='right']) {
    margin-left: var(--badge-section-margin);
  }

.m_ddec01c0 {
  --blockquote-border: 3px solid var(--bq-bd);

  position: relative;
  margin: 0;
  border-left: var(--blockquote-border);
  border-top-right-radius: var(--bq-radius);
  border-bottom-right-radius: var(--bq-radius);
  padding: calc(2rem * 1) calc(2.375rem * 1);
  padding: var(--mantine-spacing-xl) calc(2.375rem * var(--mantine-scale));
}

  :where([data-mantine-color-scheme='light']) .m_ddec01c0 {
    background-color: var(--bq-bg-light);
}

  :where([data-mantine-color-scheme='dark']) .m_ddec01c0 {
    background-color: var(--bq-bg-dark);
}

.m_dde7bd57 {
  --blockquote-icon-offset: calc(var(--bq-icon-size) / -2);

  position: absolute;
  color: var(--bq-bd);
  background-color: var(--mantine-color-body);
  display: flex;
  align-items: center;
  justify-content: center;
  top: var(--blockquote-icon-offset);
  left: var(--blockquote-icon-offset);
  width: var(--bq-icon-size);
  height: var(--bq-icon-size);
  border-radius: var(--bq-icon-size);
}

.m_dde51a35 {
  display: block;
  margin-top: calc(1rem * 1);
  margin-top: var(--mantine-spacing-md);
  opacity: 0.6;
  font-size: 85%;
}

.m_8b3717df {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.m_f678d540 {
  line-height: 1;
  white-space: nowrap;
  -webkit-tap-highlight-color: transparent;
}

.m_3b8f2208 {
  margin-left: calc(0.625rem * 1);
  margin-right: calc(0.625rem * 1);
  margin-left: var(--bc-separator-margin, var(--mantine-spacing-xs));
  margin-right: var(--bc-separator-margin, var(--mantine-spacing-xs));
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

:where([data-mantine-color-scheme='light']) .m_3b8f2208 {
    color: #495057;
    color: var(--mantine-color-gray-7);
}

:where([data-mantine-color-scheme='dark']) .m_3b8f2208 {
    color: #828282;
    color: var(--mantine-color-dark-2);
}

.m_fea6bf1a {
  --burger-size-xs: calc(0.75rem * var(--mantine-scale));
  --burger-size-sm: calc(1.125rem * var(--mantine-scale));
  --burger-size-md: calc(1.5rem * var(--mantine-scale));
  --burger-size-lg: calc(2.125rem * var(--mantine-scale));
  --burger-size-xl: calc(2.625rem * var(--mantine-scale));

  --burger-size: var(--burger-size-md);
  --burger-line-size: calc(var(--burger-size) / 12);

  width: calc((1.5rem * 1) + (0.625rem * 1));

  width: calc(calc(1.5rem * 1) + calc(0.625rem * 1));

  width: calc(var(--burger-size) + var(--mantine-spacing-xs));
  height: calc((1.5rem * 1) + (0.625rem * 1));
  height: calc(calc(1.5rem * 1) + calc(0.625rem * 1));
  height: calc(var(--burger-size) + var(--mantine-spacing-xs));
  padding: calc((0.625rem * 1) / 2);
  padding: calc(calc(0.625rem * 1) / 2);
  padding: calc(var(--mantine-spacing-xs) / 2);
  cursor: pointer;
}

  :where([data-mantine-color-scheme='light']) .m_fea6bf1a {
    --burger-color: var(--mantine-color-black);
}

  :where([data-mantine-color-scheme='dark']) .m_fea6bf1a {
    --burger-color: var(--mantine-color-white);
}

.m_d4fb9cad {
  position: relative;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}

.m_d4fb9cad,
  .m_d4fb9cad::before,
  .m_d4fb9cad::after {
    display: block;
    width: var(--burger-size);
    height: var(--burger-line-size);
    background-color: var(--burger-color);
    outline: calc(0.0625rem * 1) solid transparent;
    outline: calc(0.0625rem * var(--mantine-scale)) solid transparent;
    transition-property: background-color, transform;
    transition-duration: 300ms;
    transition-duration: var(--burger-transition-duration, 300ms);
    transition-timing-function: ease;
    transition-timing-function: var(--burger-transition-timing-function, ease);
  }

.m_d4fb9cad::before,
  .m_d4fb9cad::after {
    position: absolute;
    content: '';
    left: 0;
  }

.m_d4fb9cad::before {
    top: calc(var(--burger-size) / -3);
  }

.m_d4fb9cad::after {
    top: calc(var(--burger-size) / 3);
  }

.m_d4fb9cad[data-opened] {
    background-color: transparent;
  }

.m_d4fb9cad[data-opened]::before {
      transform: translateY(calc(var(--burger-size) / 3)) rotate(45deg);
    }

.m_d4fb9cad[data-opened]::after {
      transform: translateY(calc(var(--burger-size) / -3)) rotate(-45deg);
    }

.m_77c9d27d {
  --button-height-xs: calc(1.875rem * var(--mantine-scale));
  --button-height-sm: calc(2.25rem * var(--mantine-scale));
  --button-height-md: calc(2.625rem * var(--mantine-scale));
  --button-height-lg: calc(3.125rem * var(--mantine-scale));
  --button-height-xl: calc(3.75rem * var(--mantine-scale));

  --button-height-compact-xs: calc(1.375rem * var(--mantine-scale));
  --button-height-compact-sm: calc(1.625rem * var(--mantine-scale));
  --button-height-compact-md: calc(1.875rem * var(--mantine-scale));
  --button-height-compact-lg: calc(2.125rem * var(--mantine-scale));
  --button-height-compact-xl: calc(2.5rem * var(--mantine-scale));

  --button-padding-x-xs: calc(0.875rem * var(--mantine-scale));
  --button-padding-x-sm: calc(1.125rem * var(--mantine-scale));
  --button-padding-x-md: calc(1.375rem * var(--mantine-scale));
  --button-padding-x-lg: calc(1.625rem * var(--mantine-scale));
  --button-padding-x-xl: calc(2rem * var(--mantine-scale));

  --button-padding-x-compact-xs: calc(0.4375rem * var(--mantine-scale));
  --button-padding-x-compact-sm: calc(0.5rem * var(--mantine-scale));
  --button-padding-x-compact-md: calc(0.625rem * var(--mantine-scale));
  --button-padding-x-compact-lg: calc(0.75rem * var(--mantine-scale));
  --button-padding-x-compact-xl: calc(0.875rem * var(--mantine-scale));

  --button-height: var(--button-height-sm);
  --button-padding-x: var(--button-padding-x-sm);
  --button-color: var(--mantine-color-white);

  -webkit-user-select: none;

     -moz-user-select: none;

          user-select: none;
  font-weight: 600;
  position: relative;
  line-height: 1;
  text-align: center;
  overflow: hidden;

  width: auto;
  cursor: pointer;
  display: inline-block;
  border-radius: calc(0.25rem * 1);
  border-radius: var(--button-radius, var(--mantine-radius-default));
  font-size: calc(0.875rem * 1);
  font-size: var(--button-fz, var(--mantine-font-size-sm));
  background: var(--button-bg, var(--mantine-primary-color-filled));
  border: calc(0.0625rem * 1) solid transparent;
  border: var(--button-bd, calc(0.0625rem * var(--mantine-scale)) solid transparent);
  color: #fff;
  color: var(--button-color, var(--mantine-color-white));
  height: calc(2.25rem * 1);
  height: var(--button-height, var(--button-height-sm));
  padding-left: calc(1.125rem * 1);
  padding-right: calc(1.125rem * 1);
  padding-left: var(--button-padding-x, var(--button-padding-x-sm));
  padding-right: var(--button-padding-x, var(--button-padding-x-sm));
  vertical-align: middle;
}

  .m_77c9d27d:where([data-block]) {
    display: block;
    width: 100%;
  }

  .m_77c9d27d:where([data-with-left-section]) {
    padding-left: calc(var(--button-padding-x) / 1.5);
  }

  .m_77c9d27d:where([data-with-right-section]) {
    padding-right: calc(var(--button-padding-x) / 1.5);
  }

  .m_77c9d27d:where(:disabled:not([data-loading]), [data-disabled]:not([data-loading])) {
    cursor: not-allowed;
    border: calc(0.0625rem * 1) solid transparent;
    border: calc(0.0625rem * var(--mantine-scale)) solid transparent;
    transform: none;
  }

  :where([data-mantine-color-scheme='light']) .m_77c9d27d:where(:disabled:not([data-loading]), [data-disabled]:not([data-loading])) {
      color: #adb5bd;
      color: var(--mantine-color-gray-5);
      background: #f1f3f5;
      background: var(--mantine-color-gray-1);
}

  :where([data-mantine-color-scheme='dark']) .m_77c9d27d:where(:disabled:not([data-loading]), [data-disabled]:not([data-loading])) {
      color: #696969;
      color: var(--mantine-color-dark-3);
      background: #2e2e2e;
      background: var(--mantine-color-dark-6);
}

  .m_77c9d27d::before {
    content: '';
    pointer-events: none;
    position: absolute;
    top: calc(-0.0625rem * 1);
    right: calc(-0.0625rem * 1);
    bottom: calc(-0.0625rem * 1);
    left: calc(-0.0625rem * 1);
    top: calc(-0.0625rem * var(--mantine-scale));
    right: calc(-0.0625rem * var(--mantine-scale));
    bottom: calc(-0.0625rem * var(--mantine-scale));
    left: calc(-0.0625rem * var(--mantine-scale));
    border-radius: calc(0.25rem * 1);
    border-radius: var(--button-radius, var(--mantine-radius-default));
    transform: translateY(-100%);
    opacity: 0;
    filter: blur(12px);
    transition:
      transform 150ms ease, opacity 100ms ease;
  }

  :where([data-mantine-color-scheme='light']) .m_77c9d27d::before {
      background-color: rgba(255, 255, 255, 0.15);
}

  :where([data-mantine-color-scheme='dark']) .m_77c9d27d::before {
      background-color: rgba(0, 0, 0, 0.15);
}

  .m_77c9d27d:where([data-loading]) {
    cursor: not-allowed;
    transform: none;
  }

  .m_77c9d27d:where([data-loading])::before {
      transform: translateY(0);
      opacity: 1;
    }

  .m_77c9d27d:where([data-loading]) .m_80f1301b {
      opacity: 0;
      transform: translateY(100%);
    }

  @media (hover: hover) {
    .m_77c9d27d:hover:where(:not([data-loading]):not(:disabled):not([data-disabled])) {
      background-color: var(--button-hover, var(--mantine-primary-color-filled-hover));
      color: var(--button-hover-color, var(--button-color));
    }
}

  @media (hover: none) {
    .m_77c9d27d:active:where(:not([data-loading]):not(:disabled):not([data-disabled])) {
      background-color: var(--button-hover, var(--mantine-primary-color-filled-hover));
      color: var(--button-hover-color, var(--button-color));
    }
}

.m_80f1301b {
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: var(--button-justify, center);
  height: 100%;
  overflow: visible;
  transition:
    transform 150ms ease, opacity 100ms ease;
}

.m_811560b9 {
  white-space: nowrap;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  opacity: 1;
}

.m_811560b9:where([data-loading]) {
    opacity: 0.2;
  }

.m_a74036a {
  display: flex;
  align-items: center;
}

.m_a74036a:where([data-position='left']) {
    margin-right: calc(0.625rem * 1);
    margin-right: var(--mantine-spacing-xs);
  }

.m_a74036a:where([data-position='right']) {
    margin-left: calc(0.625rem * 1);
    margin-left: var(--mantine-spacing-xs);
  }

.m_a25b86ee {
  position: absolute;
  left: 50%;
  top: 50%;
}

.m_80d6d844 {
  --button-border-width: calc(0.0625rem * var(--mantine-scale));
  display: flex;
}

.m_80d6d844 :where(.m_77c9d27d):focus {
      position: relative;
      z-index: 1;
    }

.m_80d6d844[data-orientation='horizontal'] {
    flex-direction: row;
  }

.m_80d6d844[data-orientation='horizontal'] .m_77c9d27d:not(:only-child):first-child, .m_80d6d844[data-orientation='horizontal'] .m_70be2a01:not(:only-child):first-child {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
        border-right-width: calc(var(--button-border-width) / 2);
      }

.m_80d6d844[data-orientation='horizontal'] .m_77c9d27d:not(:only-child):last-child, .m_80d6d844[data-orientation='horizontal'] .m_70be2a01:not(:only-child):last-child {
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
        border-left-width: calc(var(--button-border-width) / 2);
      }

.m_80d6d844[data-orientation='horizontal'] .m_77c9d27d:not(:only-child):not(:first-child):not(:last-child), .m_80d6d844[data-orientation='horizontal'] .m_70be2a01:not(:only-child):not(:first-child):not(:last-child) {
        border-radius: 0;
        border-left-width: calc(var(--button-border-width) / 2);
        border-right-width: calc(var(--button-border-width) / 2);
      }

.m_80d6d844[data-orientation='vertical'] {
    flex-direction: column;
  }

.m_80d6d844[data-orientation='vertical'] .m_77c9d27d:not(:only-child):first-child, .m_80d6d844[data-orientation='vertical'] .m_70be2a01:not(:only-child):first-child {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom-width: calc(var(--button-border-width) / 2);
      }

.m_80d6d844[data-orientation='vertical'] .m_77c9d27d:not(:only-child):last-child, .m_80d6d844[data-orientation='vertical'] .m_70be2a01:not(:only-child):last-child {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-top-width: calc(var(--button-border-width) / 2);
      }

.m_80d6d844[data-orientation='vertical'] .m_77c9d27d:not(:only-child):not(:first-child):not(:last-child), .m_80d6d844[data-orientation='vertical'] .m_70be2a01:not(:only-child):not(:first-child):not(:last-child) {
        border-radius: 0;
        border-bottom-width: calc(var(--button-border-width) / 2);
        border-top-width: calc(var(--button-border-width) / 2);
      }

.m_70be2a01 {
  --section-height-xs: calc(1.875rem * var(--mantine-scale));
  --section-height-sm: calc(2.25rem * var(--mantine-scale));
  --section-height-md: calc(2.625rem * var(--mantine-scale));
  --section-height-lg: calc(3.125rem * var(--mantine-scale));
  --section-height-xl: calc(3.75rem * var(--mantine-scale));

  --section-height-compact-xs: calc(1.375rem * var(--mantine-scale));
  --section-height-compact-sm: calc(1.625rem * var(--mantine-scale));
  --section-height-compact-md: calc(1.875rem * var(--mantine-scale));
  --section-height-compact-lg: calc(2.125rem * var(--mantine-scale));
  --section-height-compact-xl: calc(2.5rem * var(--mantine-scale));

  --section-padding-x-xs: calc(0.875rem * var(--mantine-scale));
  --section-padding-x-sm: calc(1.125rem * var(--mantine-scale));
  --section-padding-x-md: calc(1.375rem * var(--mantine-scale));
  --section-padding-x-lg: calc(1.625rem * var(--mantine-scale));
  --section-padding-x-xl: calc(2rem * var(--mantine-scale));

  --section-padding-x-compact-xs: calc(0.4375rem * var(--mantine-scale));
  --section-padding-x-compact-sm: calc(0.5rem * var(--mantine-scale));
  --section-padding-x-compact-md: calc(0.625rem * var(--mantine-scale));
  --section-padding-x-compact-lg: calc(0.75rem * var(--mantine-scale));
  --section-padding-x-compact-xl: calc(0.875rem * var(--mantine-scale));

  --section-height: var(--section-height-sm);
  --section-padding-x: var(--section-padding-x-sm);
  --section-color: var(--mantine-color-white);

  font-weight: 600;
  width: auto;
  border-radius: calc(0.25rem * 1);
  border-radius: var(--section-radius, var(--mantine-radius-default));
  font-size: calc(0.875rem * 1);
  font-size: var(--section-fz, var(--mantine-font-size-sm));
  background: var(--section-bg, var(--mantine-primary-color-filled));
  border: calc(0.0625rem * 1) solid transparent;
  border: var(--section-bd, calc(0.0625rem * var(--mantine-scale)) solid transparent);
  color: #fff;
  color: var(--section-color, var(--mantine-color-white));
  height: calc(1.375rem * 1);
  height: var(--section-height, var(--section-height-sm));
  padding-left: calc(0.5rem * 1);
  padding-right: calc(0.5rem * 1);
  padding-left: var(--section-padding-x, var(--section-padding-x-sm));
  padding-right: var(--section-padding-x, var(--section-padding-x-sm));
  vertical-align: middle;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.m_e615b15f {
  --card-padding: var(--mantine-spacing-md);

  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: calc(1rem * 1);
  padding: var(--card-padding);
  color: var(--mantine-color-text);
}

  :where([data-mantine-color-scheme='light']) .m_e615b15f {
    background-color: #fff;
    background-color: var(--mantine-color-white);
}

  :where([data-mantine-color-scheme='dark']) .m_e615b15f {
    background-color: #2e2e2e;
    background-color: var(--mantine-color-dark-6);
}

.m_599a2148 {
  display: block;
  margin-left: calc(var(--card-padding) * -1);
  margin-right: calc(var(--card-padding) * -1);
}

.m_599a2148:where(:first-child) {
    margin-top: calc(var(--card-padding) * -1);
    border-top: none !important;
  }

.m_599a2148:where(:last-child) {
    margin-bottom: calc(var(--card-padding) * -1);
    border-bottom: none !important;
  }

.m_599a2148:where([data-inherit-padding]) {
    padding-left: var(--card-padding);
    padding-right: var(--card-padding);
  }

.m_599a2148:where([data-with-border]) {
    border-top: calc(0.0625rem * 1) solid;
    border-top: calc(0.0625rem * var(--mantine-scale)) solid;
    border-bottom: calc(0.0625rem * 1) solid;
    border-bottom: calc(0.0625rem * var(--mantine-scale)) solid;
  }

:where([data-mantine-color-scheme='light']) .m_599a2148 {
    border-color: #dee2e6;
    border-color: var(--mantine-color-gray-3);
}

:where([data-mantine-color-scheme='dark']) .m_599a2148 {
    border-color: #424242;
    border-color: var(--mantine-color-dark-4);
}

.m_599a2148 + .m_599a2148 {
    border-top: none !important;
  }

.m_4451eb3a {
  display: flex;
  align-items: center;
  justify-content: center;
}

  .m_4451eb3a:where([data-inline]) {
    display: inline-flex;
  }

.m_f59ffda3 {
  --chip-size-xs: calc(1.4375rem * var(--mantine-scale));
  --chip-size-sm: calc(1.75rem * var(--mantine-scale));
  --chip-size-md: calc(2rem * var(--mantine-scale));
  --chip-size-lg: calc(2.25rem * var(--mantine-scale));
  --chip-size-xl: calc(2.5rem * var(--mantine-scale));

  --chip-icon-size-xs: calc(0.625rem * var(--mantine-scale));
  --chip-icon-size-sm: calc(0.75rem * var(--mantine-scale));
  --chip-icon-size-md: calc(0.875rem * var(--mantine-scale));
  --chip-icon-size-lg: calc(1rem * var(--mantine-scale));
  --chip-icon-size-xl: calc(1.125rem * var(--mantine-scale));

  --chip-padding-xs: calc(1rem * var(--mantine-scale));
  --chip-padding-sm: calc(1.25rem * var(--mantine-scale));
  --chip-padding-md: calc(1.5rem * var(--mantine-scale));
  --chip-padding-lg: calc(1.75rem * var(--mantine-scale));
  --chip-padding-xl: calc(2rem * var(--mantine-scale));

  --chip-checked-padding-xs: calc(0.46875rem * var(--mantine-scale));
  --chip-checked-padding-sm: calc(0.625rem * var(--mantine-scale));
  --chip-checked-padding-md: calc(0.73125rem * var(--mantine-scale));
  --chip-checked-padding-lg: calc(0.84375rem * var(--mantine-scale));
  --chip-checked-padding-xl: calc(0.98125rem * var(--mantine-scale));

  --chip-spacing-xs: calc(0.625rem * var(--mantine-scale));
  --chip-spacing-sm: calc(0.75rem * var(--mantine-scale));
  --chip-spacing-md: calc(1rem * var(--mantine-scale));
  --chip-spacing-lg: calc(1.25rem * var(--mantine-scale));
  --chip-spacing-xl: calc(1.375rem * var(--mantine-scale));

  --chip-size: var(--chip-size-sm);
  --chip-icon-size: var(--chip-icon-size-sm);
  --chip-padding: var(--chip-padding-sm);
  --chip-spacing: var(--chip-spacing-sm);
  --chip-checked-padding: var(--chip-checked-padding-sm);
  --chip-bg: var(--mantine-primary-color-filled);
  --chip-hover: var(--mantine-primary-color-filled-hover);
  --chip-color: var(--mantine-color-white);
  --chip-bd: calc(0.0625rem * var(--mantine-scale)) solid transparent;
}

.m_be049a53 {
  display: inline-flex;
  align-items: center;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  border-radius: 1000rem;
  border-radius: var(--chip-radius, 1000rem);
  height: var(--chip-size);
  font-size: calc(0.875rem * 1);
  font-size: var(--chip-fz, var(--mantine-font-size-sm));
  line-height: calc(var(--chip-size) - (0.125rem * 1));
  line-height: calc(var(--chip-size) - (0.125rem * var(--mantine-scale)));
  line-height: calc(var(--chip-size) - calc(0.125rem * 1));
  line-height: calc(var(--chip-size) - calc(0.125rem * var(--mantine-scale)));
  padding-left: var(--chip-padding);
  padding-right: var(--chip-padding);
  cursor: pointer;
  white-space: nowrap;
  -webkit-tap-highlight-color: transparent;
  border: calc(0.0625rem * 1) solid transparent;
  border: calc(0.0625rem * var(--mantine-scale)) solid transparent;
  color: var(--mantine-color-text);
}

.m_be049a53:where([data-checked]) {
    padding: var(--chip-checked-padding);
  }

.m_be049a53:where([data-disabled]) {
    cursor: not-allowed;
  }

:where([data-mantine-color-scheme='light']) .m_be049a53:where([data-disabled]) {
      background-color: #e9ecef;
      background-color: var(--mantine-color-gray-2);
      color: #adb5bd;
      color: var(--mantine-color-gray-5);
}

:where([data-mantine-color-scheme='dark']) .m_be049a53:where([data-disabled]) {
      background-color: #2e2e2e;
      background-color: var(--mantine-color-dark-6);
      color: #696969;
      color: var(--mantine-color-dark-3);
}

:where([data-mantine-color-scheme='light']) .m_3904c1af:not([data-disabled]) {
    background-color: #fff;
    background-color: var(--mantine-color-white);
    border: 1px solid #dee2e6;
    border: 1px solid var(--mantine-color-gray-3);
}

:where([data-mantine-color-scheme='dark']) .m_3904c1af:not([data-disabled]) {
    background-color: #2e2e2e;
    background-color: var(--mantine-color-dark-6);
    border: 1px solid #424242;
    border: 1px solid var(--mantine-color-dark-4);
}

@media (hover: hover) {
    :where([data-mantine-color-scheme='light']) .m_3904c1af:not([data-disabled]):hover {
      background-color: #f8f9fa;
      background-color: var(--mantine-color-gray-0);
  }

    :where([data-mantine-color-scheme='dark']) .m_3904c1af:not([data-disabled]):hover {
      background-color: #3b3b3b;
      background-color: var(--mantine-color-dark-5);
  }
}

@media (hover: none) {
    :where([data-mantine-color-scheme='light']) .m_3904c1af:not([data-disabled]):active {
      background-color: #f8f9fa;
      background-color: var(--mantine-color-gray-0);
  }

    :where([data-mantine-color-scheme='dark']) .m_3904c1af:not([data-disabled]):active {
      background-color: #3b3b3b;
      background-color: var(--mantine-color-dark-5);
  }
}

.m_3904c1af:not([data-disabled]):where([data-checked]) {
    --chip-icon-color: var(--chip-color);
    border: var(--chip-bd);
  }

@media (hover: hover) {

  .m_3904c1af:not([data-disabled]):where([data-checked]):hover {
      background-color: var(--chip-hover);
  }
}

@media (hover: none) {

  .m_3904c1af:not([data-disabled]):where([data-checked]):active {
      background-color: var(--chip-hover);
  }
}

.m_fa109255:not([data-disabled]),
.m_f7e165c3:not([data-disabled]) {
  border: calc(0.0625rem * 1) solid transparent;
  border: calc(0.0625rem * var(--mantine-scale)) solid transparent;
  color: var(--mantine-color-text);
}

:where([data-mantine-color-scheme='light']) .m_fa109255:not([data-disabled]), :where([data-mantine-color-scheme='light']) .m_f7e165c3:not([data-disabled]) {
    background-color: #f1f3f5;
    background-color: var(--mantine-color-gray-1);
}

:where([data-mantine-color-scheme='dark']) .m_fa109255:not([data-disabled]), :where([data-mantine-color-scheme='dark']) .m_f7e165c3:not([data-disabled]) {
    background-color: #3b3b3b;
    background-color: var(--mantine-color-dark-5);
}

@media (hover: hover) {
    :where([data-mantine-color-scheme='light']) .m_fa109255:not([data-disabled]):hover, :where([data-mantine-color-scheme='light']) .m_f7e165c3:not([data-disabled]):hover {
      background-color: #e9ecef;
      background-color: var(--mantine-color-gray-2);
  }

    :where([data-mantine-color-scheme='dark']) .m_fa109255:not([data-disabled]):hover, :where([data-mantine-color-scheme='dark']) .m_f7e165c3:not([data-disabled]):hover {
      background-color: #424242;
      background-color: var(--mantine-color-dark-4);
  }
}

@media (hover: none) {
    :where([data-mantine-color-scheme='light']) .m_fa109255:not([data-disabled]):active, :where([data-mantine-color-scheme='light']) .m_f7e165c3:not([data-disabled]):active {
      background-color: #e9ecef;
      background-color: var(--mantine-color-gray-2);
  }

    :where([data-mantine-color-scheme='dark']) .m_fa109255:not([data-disabled]):active, :where([data-mantine-color-scheme='dark']) .m_f7e165c3:not([data-disabled]):active {
      background-color: #424242;
      background-color: var(--mantine-color-dark-4);
  }
}

.m_fa109255:not([data-disabled]):where([data-checked]), .m_f7e165c3:not([data-disabled]):where([data-checked]) {
    --chip-icon-color: var(--chip-color);
    color: var(--chip-color);
    background-color: var(--chip-bg);
  }

@media (hover: hover) {

  .m_fa109255:not([data-disabled]):where([data-checked]):hover, .m_f7e165c3:not([data-disabled]):where([data-checked]):hover {
      background-color: var(--chip-hover);
  }
}

@media (hover: none) {

  .m_fa109255:not([data-disabled]):where([data-checked]):active, .m_f7e165c3:not([data-disabled]):where([data-checked]):active {
      background-color: var(--chip-hover);
  }
}

.m_9ac86df9 {
  width: calc(var(--chip-icon-size) + (var(--chip-spacing) / 1.5));
  max-width: calc(var(--chip-icon-size) + (var(--chip-spacing) / 1.5));
  height: var(--chip-icon-size);
  display: flex;
  align-items: center;
  overflow: hidden;
}

.m_d6d72580 {
  width: var(--chip-icon-size);
  height: var(--chip-icon-size);
  display: block;
  color: inherit;
  color: var(--chip-icon-color, inherit);
}

.m_bde07329 {
  width: 0;
  height: 0;
  padding: 0;
  opacity: 0;
  margin: 0;
}

.m_bde07329:focus-visible + .m_be049a53 {
    outline: 2px solid var(--mantine-primary-color-filled);
    outline-offset: calc(0.125rem * 1);
    outline-offset: calc(0.125rem * var(--mantine-scale));
  }

.m_b183c0a2 {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    Liberation Mono, Courier New, monospace;
  font-family: var(--mantine-font-family-monospace);
  line-height: 1.55;
  line-height: var(--mantine-line-height);
  padding: 2px calc((0.625rem * 1) / 2);
  padding: 2px calc(calc(0.625rem * 1) / 2);
  padding: 2px calc(var(--mantine-spacing-xs) / 2);
  border-radius: calc(0.25rem * 1);
  border-radius: var(--mantine-radius-sm);
  font-size: calc(0.75rem * 1);
  font-size: var(--mantine-font-size-xs);
  margin: 0;
  overflow: auto;
}

  :where([data-mantine-color-scheme='light']) .m_b183c0a2 {
    background-color: #f1f3f5;
    background-color: var(--code-bg, var(--mantine-color-gray-1));
    color: #000;
    color: var(--mantine-color-black);
}

  :where([data-mantine-color-scheme='dark']) .m_b183c0a2 {
    background-color: #3b3b3b;
    background-color: var(--code-bg, var(--mantine-color-dark-5));
    color: #fff;
    color: var(--mantine-color-white);
}

  .m_b183c0a2[data-block] {
    padding: calc(0.625rem * 1);
    padding: var(--mantine-spacing-xs);
  }

.m_de3d2490 {
  --cs-size: calc(1.75rem * var(--mantine-scale));
  --cs-radius: calc(62.5rem * var(--mantine-scale));

  -webkit-tap-highlight-color: transparent;
  border: none;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  display: block;
  line-height: 1;
  position: relative;
  width: calc(1.75rem * 1);
  width: var(--cs-size);
  height: calc(1.75rem * 1);
  height: var(--cs-size);
  min-width: calc(1.75rem * 1);
  min-width: var(--cs-size);
  min-height: calc(1.75rem * 1);
  min-height: var(--cs-size);
  border-radius: calc(62.5rem * 1);
  border-radius: var(--cs-radius);
  color: inherit;
  -webkit-text-decoration: none;
  text-decoration: none;
}

  [data-mantine-color-scheme='light'] .m_de3d2490 {
    --alpha-overlay-color: var(--mantine-color-gray-3);
    --alpha-overlay-bg: var(--mantine-color-white);
}

  [data-mantine-color-scheme='dark'] .m_de3d2490 {
    --alpha-overlay-color: var(--mantine-color-dark-4);
    --alpha-overlay-bg: var(--mantine-color-dark-7);
}

.m_862f3d1b {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: var(--cs-radius);
}

.m_98ae7f22 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: var(--cs-radius);
  z-index: 1;
  box-shadow:
    rgba(0, 0, 0, 0.1) 0 0 0 calc(0.0625rem * 1) inset,
    rgb(0, 0, 0, 0.15) 0 0 calc(0.25rem * 1) inset;
}

@supports (color: rgb(0, 0, 0, 0)) {
.m_98ae7f22 {
  box-shadow:
    rgba(0, 0, 0, 0.1) 0 0 0 calc(0.0625rem * var(--mantine-scale)) inset,
    rgb(0, 0, 0, 0.15) 0 0 calc(0.25rem * var(--mantine-scale)) inset;
}
}

.m_95709ac0 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: var(--cs-radius);
  background-size: calc(0.5rem * 1) calc(0.5rem * 1);
  background-size: calc(0.5rem * var(--mantine-scale)) calc(0.5rem * var(--mantine-scale));
  background-position:
    0 0,
    0 calc(0.25rem * 1),
    calc(0.25rem * 1) calc(-0.25rem * 1),
    calc(-0.25rem * 1) 0;
  background-position:
    0 0,
    0 calc(0.25rem * var(--mantine-scale)),
    calc(0.25rem * var(--mantine-scale)) calc(-0.25rem * var(--mantine-scale)),
    calc(-0.25rem * var(--mantine-scale)) 0;
  background-image: linear-gradient(45deg, var(--alpha-overlay-color) 25%, transparent 25%),
    linear-gradient(-45deg, var(--alpha-overlay-color) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, var(--alpha-overlay-color) 75%),
    linear-gradient(-45deg, var(--alpha-overlay-bg) 75%, var(--alpha-overlay-color) 75%);
}

.m_93e74e3 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: var(--cs-radius);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
}

.m_fee9c77 {
  --cp-width-xs: calc(11.25rem * var(--mantine-scale));
  --cp-width-sm: calc(12.5rem * var(--mantine-scale));
  --cp-width-md: calc(15rem * var(--mantine-scale));
  --cp-width-lg: calc(17.5rem * var(--mantine-scale));
  --cp-width-xl: calc(20rem * var(--mantine-scale));

  --cp-preview-size-xs: calc(1.625rem * var(--mantine-scale));
  --cp-preview-size-sm: calc(2.125rem * var(--mantine-scale));
  --cp-preview-size-md: calc(2.625rem * var(--mantine-scale));
  --cp-preview-size-lg: calc(3.125rem * var(--mantine-scale));
  --cp-preview-size-xl: calc(3.375rem * var(--mantine-scale));

  --cp-thumb-size-xs: calc(0.5rem * var(--mantine-scale));
  --cp-thumb-size-sm: calc(0.75rem * var(--mantine-scale));
  --cp-thumb-size-md: calc(1rem * var(--mantine-scale));
  --cp-thumb-size-lg: calc(1.25rem * var(--mantine-scale));
  --cp-thumb-size-xl: calc(1.375rem * var(--mantine-scale));

  --cp-saturation-height-xs: calc(6.25rem * var(--mantine-scale));
  --cp-saturation-height-sm: calc(6.875rem * var(--mantine-scale));
  --cp-saturation-height-md: calc(7.5rem * var(--mantine-scale));
  --cp-saturation-height-lg: calc(8.75rem * var(--mantine-scale));
  --cp-saturation-height-xl: calc(10rem * var(--mantine-scale));

  --cp-preview-size: var(--cp-preview-size-sm);
  --cp-thumb-size: var(--cp-thumb-size-sm);
  --cp-saturation-height: var(--cp-saturation-height-sm);
  --cp-width: var(--cp-width-sm);
  --cp-body-spacing: var(--mantine-spacing-sm);

  width: calc(12.5rem * 1);

  width: var(--cp-width);
  padding: calc(0.0625rem * 1);
  padding: calc(0.0625rem * var(--mantine-scale));
}

  .m_fee9c77:where([data-full-width]) {
    width: 100%;
  }

.m_9dddfbac {
  width: var(--cp-preview-size);
  height: var(--cp-preview-size);
}

.m_bffecc3e {
  display: flex;
  padding-top: calc(var(--cp-body-spacing) / 2);
}

.m_3283bb96 {
  flex: 1;
}

.m_3283bb96:not(:only-child) {
    margin-right: calc(0.625rem * 1);
    margin-right: var(--mantine-spacing-xs);
  }

.m_40d572ba {
  overflow: hidden;
  position: absolute;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.6);
  border: 2px solid #fff;
  border: 2px solid var(--mantine-color-white);
  width: var(--cp-thumb-size);
  height: var(--cp-thumb-size);
  border-radius: var(--cp-thumb-size);
  left: calc(var(--thumb-x-offset) - var(--cp-thumb-size) / 2);
  top: calc(var(--thumb-y-offset) - var(--cp-thumb-size) / 2);
}

.m_d8ee6fd8 {
  height: auto !important;
  height: initial !important;
  width: auto !important;
  width: initial !important;
  min-width: 0 !important;
  min-height: 0 !important;
  margin: calc(0.125rem * 1);
  margin: calc(0.125rem * var(--mantine-scale));
  cursor: pointer;
  padding-bottom: calc(var(--cp-swatch-size) - (0.25rem * 1));
  padding-bottom: calc(var(--cp-swatch-size) - (0.25rem * var(--mantine-scale)));
  padding-bottom: calc(var(--cp-swatch-size) - calc(0.25rem * 1));
  padding-bottom: calc(var(--cp-swatch-size) - calc(0.25rem * var(--mantine-scale)));
  flex: 0 0 calc(var(--cp-swatch-size) - (0.25rem * 1));
  flex: 0 0 calc(var(--cp-swatch-size) - (0.25rem * var(--mantine-scale)));
  flex: 0 0 calc(var(--cp-swatch-size) - calc(0.25rem * 1));
  flex: 0 0 calc(var(--cp-swatch-size) - calc(0.25rem * var(--mantine-scale)));
}

.m_5711e686 {
  margin-top: calc(0.3125rem * 1);
  margin-top: calc(0.3125rem * var(--mantine-scale));
  margin-left: calc(-0.125rem * 1);
  margin-right: calc(-0.125rem * 1);
  margin-left: calc(-0.125rem * var(--mantine-scale));
  margin-right: calc(-0.125rem * var(--mantine-scale));
  display: flex;
  flex-wrap: wrap;
}

.m_202a296e {
  --cp-thumb-size-xs: calc(0.5rem * var(--mantine-scale));
  --cp-thumb-size-sm: calc(0.75rem * var(--mantine-scale));
  --cp-thumb-size-md: calc(1rem * var(--mantine-scale));
  --cp-thumb-size-lg: calc(1.25rem * var(--mantine-scale));
  --cp-thumb-size-xl: calc(1.375rem * var(--mantine-scale));

  -webkit-tap-highlight-color: transparent;
  position: relative;
  height: var(--cp-saturation-height);
  border-radius: calc(0.25rem * 1);
  border-radius: var(--mantine-radius-sm);
  margin: calc(var(--cp-thumb-size) / 2);
}

.m_202a296e:where([data-focus-ring='auto']):focus:focus-visible .m_40d572ba {
        outline: 2px solid var(--mantine-color-blue-filled);
      }

.m_202a296e:where([data-focus-ring='always']):focus .m_40d572ba {
        outline: 2px solid var(--mantine-color-blue-filled);
      }

.m_11b3db02 {
  position: absolute;
  border-radius: calc(0.25rem * 1);
  border-radius: var(--mantine-radius-sm);
  top: calc(var(--cp-thumb-size) * -1 / 2 - (0.0625rem * 1));
  right: calc(var(--cp-thumb-size) * -1 / 2 - (0.0625rem * 1));
  bottom: calc(var(--cp-thumb-size) * -1 / 2 - (0.0625rem * 1));
  left: calc(var(--cp-thumb-size) * -1 / 2 - (0.0625rem * 1));
  top: calc(var(--cp-thumb-size) * -1 / 2 - (0.0625rem * var(--mantine-scale)));
  right: calc(var(--cp-thumb-size) * -1 / 2 - (0.0625rem * var(--mantine-scale)));
  bottom: calc(var(--cp-thumb-size) * -1 / 2 - (0.0625rem * var(--mantine-scale)));
  left: calc(var(--cp-thumb-size) * -1 / 2 - (0.0625rem * var(--mantine-scale)));
  top: calc(var(--cp-thumb-size) * -1 / 2 - calc(0.0625rem * 1));
  right: calc(var(--cp-thumb-size) * -1 / 2 - calc(0.0625rem * 1));
  bottom: calc(var(--cp-thumb-size) * -1 / 2 - calc(0.0625rem * 1));
  left: calc(var(--cp-thumb-size) * -1 / 2 - calc(0.0625rem * 1));
  top: calc(var(--cp-thumb-size) * -1 / 2 - calc(0.0625rem * var(--mantine-scale)));
  right: calc(var(--cp-thumb-size) * -1 / 2 - calc(0.0625rem * var(--mantine-scale)));
  bottom: calc(var(--cp-thumb-size) * -1 / 2 - calc(0.0625rem * var(--mantine-scale)));
  left: calc(var(--cp-thumb-size) * -1 / 2 - calc(0.0625rem * var(--mantine-scale)));
}

.m_d856d47d {
  --cp-thumb-size-xs: calc(0.5rem * var(--mantine-scale));
  --cp-thumb-size-sm: calc(0.75rem * var(--mantine-scale));
  --cp-thumb-size-md: calc(1rem * var(--mantine-scale));
  --cp-thumb-size-lg: calc(1.25rem * var(--mantine-scale));
  --cp-thumb-size-xl: calc(1.375rem * var(--mantine-scale));
  --cp-thumb-size: var(--cp-thumb-size, calc(0.75rem * var(--mantine-scale)));

  position: relative;
  height: calc(var(--cp-thumb-size) + (0.125rem * 1));
  height: calc(var(--cp-thumb-size) + (0.125rem * var(--mantine-scale)));
  height: calc(var(--cp-thumb-size) + calc(0.125rem * 1));
  height: calc(var(--cp-thumb-size) + calc(0.125rem * var(--mantine-scale)));
  margin-left: calc(var(--cp-thumb-size) / 2);
  margin-right: calc(var(--cp-thumb-size) / 2);
  outline: none;
}

.m_d856d47d + .m_d856d47d {
    margin-top: calc(0.375rem * 1);
    margin-top: calc(0.375rem * var(--mantine-scale));
  }

.m_d856d47d:where([data-focus-ring='auto']):focus:focus-visible .m_40d572ba {
        outline: 2px solid var(--mantine-color-blue-filled);
      }

.m_d856d47d:where([data-focus-ring='always']):focus .m_40d572ba {
        outline: 2px solid var(--mantine-color-blue-filled);
      }

:where([data-mantine-color-scheme='light']) .m_d856d47d {
    --slider-checkers: var(--mantine-color-gray-3);
}

:where([data-mantine-color-scheme='dark']) .m_d856d47d {
    --slider-checkers: var(--mantine-color-dark-4);
}

.m_8f327113 {
  position: absolute;
  top: 0;
  bottom: 0;
  left: calc(var(--cp-thumb-size) * -1 / 2 - (0.0625rem * 1));
  right: calc(var(--cp-thumb-size) * -1 / 2 - (0.0625rem * 1));
  left: calc(var(--cp-thumb-size) * -1 / 2 - (0.0625rem * var(--mantine-scale)));
  right: calc(var(--cp-thumb-size) * -1 / 2 - (0.0625rem * var(--mantine-scale)));
  left: calc(var(--cp-thumb-size) * -1 / 2 - calc(0.0625rem * 1));
  right: calc(var(--cp-thumb-size) * -1 / 2 - calc(0.0625rem * 1));
  left: calc(var(--cp-thumb-size) * -1 / 2 - calc(0.0625rem * var(--mantine-scale)));
  right: calc(var(--cp-thumb-size) * -1 / 2 - calc(0.0625rem * var(--mantine-scale)));
  border-radius: 10000rem;
}

.m_b077c2bc {
  --ci-eye-dropper-icon-size-xs: calc(0.875rem * var(--mantine-scale));
  --ci-eye-dropper-icon-size-sm: calc(1rem * var(--mantine-scale));
  --ci-eye-dropper-icon-size-md: calc(1.125rem * var(--mantine-scale));
  --ci-eye-dropper-icon-size-lg: calc(1.25rem * var(--mantine-scale));
  --ci-eye-dropper-icon-size-xl: calc(1.375rem * var(--mantine-scale));
  --ci-eye-dropper-icon-size: var(--ci-eye-dropper-icon-size-sm);
}

.m_c5ccdcab {
  --ci-preview-size-xs: calc(1rem * var(--mantine-scale));
  --ci-preview-size-sm: calc(1.125rem * var(--mantine-scale));
  --ci-preview-size-md: calc(1.375rem * var(--mantine-scale));
  --ci-preview-size-lg: calc(1.75rem * var(--mantine-scale));
  --ci-preview-size-xl: calc(2.25rem * var(--mantine-scale));
  --ci-preview-size: var(--ci-preview-size-sm);
}

.m_5ece2cd7 {
  padding: calc(0.5rem * 1);
  padding: calc(0.5rem * var(--mantine-scale));
}

.m_7485cace {
  --container-size-xs: calc(33.75rem * var(--mantine-scale));
  --container-size-sm: calc(45rem * var(--mantine-scale));
  --container-size-md: calc(60rem * var(--mantine-scale));
  --container-size-lg: calc(71.25rem * var(--mantine-scale));
  --container-size-xl: calc(82.5rem * var(--mantine-scale));
  --container-size: var(--container-size-md);

  max-width: calc(60rem * 1);

  max-width: var(--container-size);
  padding-left: calc(1rem * 1);
  padding-right: calc(1rem * 1);
  padding-left: var(--mantine-spacing-md);
  padding-right: var(--mantine-spacing-md);
  margin-left: auto;
  margin-right: auto;
}

  .m_7485cace:where([data-fluid]) {
    max-width: 100%;
  }

.m_e2125a27 {
  --dialog-size-xs: calc(10rem * var(--mantine-scale));
  --dialog-size-sm: calc(12.5rem * var(--mantine-scale));
  --dialog-size-md: calc(21.25rem * var(--mantine-scale));
  --dialog-size-lg: calc(25rem * var(--mantine-scale));
  --dialog-size-xl: calc(31.25rem * var(--mantine-scale));
  --dialog-size: var(--dialog-size-md);

  position: relative;
  width: calc(21.25rem * 1);
  width: var(--dialog-size);
  max-width: calc(100vw - (2rem * 1) * 2);
  max-width: calc(100vw - calc(2rem * 1) * 2);
  max-width: calc(100vw - var(--mantine-spacing-xl) * 2);
  min-height: calc(3.125rem * 1);
  min-height: calc(3.125rem * var(--mantine-scale));
}

.m_5abab665 {
  position: absolute;
  top: calc((1rem * 1) / 2);
  top: calc(calc(1rem * 1) / 2);
  top: calc(var(--mantine-spacing-md) / 2);
  right: calc((1rem * 1) / 2);
  right: calc(calc(1rem * 1) / 2);
  right: calc(var(--mantine-spacing-md) / 2);
}

.m_3eebeb36 {
  --divider-size-xs: calc(0.0625rem * var(--mantine-scale));
  --divider-size-sm: calc(0.125rem * var(--mantine-scale));
  --divider-size-md: calc(0.1875rem * var(--mantine-scale));
  --divider-size-lg: calc(0.25rem * var(--mantine-scale));
  --divider-size-xl: calc(0.3125rem * var(--mantine-scale));
  --divider-size: var(--divider-size-xs);
}

  :where([data-mantine-color-scheme='light']) .m_3eebeb36 {
    --divider-color: var(--mantine-color-gray-3);
}

  :where([data-mantine-color-scheme='dark']) .m_3eebeb36 {
    --divider-color: var(--mantine-color-dark-4);
}

  .m_3eebeb36:where([data-orientation='horizontal']) {
    border-top: var(--divider-size) solid var(--divider-color);
    border-top: var(--divider-size) var(--divider-border-style, solid) var(--divider-color);
  }

  .m_3eebeb36:where([data-orientation='vertical']) {
    border-left: var(--divider-size) solid var(--divider-color);
    border-left: var(--divider-size) var(--divider-border-style, solid) var(--divider-color);
    height: auto;
    align-self: stretch;
  }

  .m_3eebeb36:where([data-with-label]) {
    border: 0;
  }

.m_9e365f20 {
  display: flex;
  align-items: center;
  font-size: calc(0.75rem * 1);
  font-size: var(--mantine-font-size-xs);
  color: var(--mantine-color-dimmed);
  white-space: nowrap;
}

.m_9e365f20:where([data-position='left'])::before {
    display: none;
  }

.m_9e365f20:where([data-position='right'])::after {
    display: none;
  }

.m_9e365f20::before {
    content: '';
    flex: 1;
    height: calc(0.0625rem * 1);
    height: calc(0.0625rem * var(--mantine-scale));
    border-top: var(--divider-size) solid var(--divider-color);
    border-top: var(--divider-size) var(--divider-border-style, solid) var(--divider-color);
    margin-right: calc(0.625rem * 1);
    margin-right: var(--mantine-spacing-xs);
  }

.m_9e365f20::after {
    content: '';
    flex: 1;
    height: calc(0.0625rem * 1);
    height: calc(0.0625rem * var(--mantine-scale));
    border-top: var(--divider-size) solid var(--divider-color);
    border-top: var(--divider-size) var(--divider-border-style, solid) var(--divider-color);
    margin-left: calc(0.625rem * 1);
    margin-left: var(--mantine-spacing-xs);
  }

.m_f11b401e {
  --drawer-size-xs: calc(20rem * var(--mantine-scale));
  --drawer-size-sm: calc(23.75rem * var(--mantine-scale));
  --drawer-size-md: calc(27.5rem * var(--mantine-scale));
  --drawer-size-lg: calc(38.75rem * var(--mantine-scale));
  --drawer-size-xl: calc(48.75rem * var(--mantine-scale));
  --drawer-size: var(--drawer-size-md);
  --drawer-offset: 0rem;
}

.m_5a7c2c9 {
  z-index: 1000;
}

.m_b8a05bbd {
  flex: var(--drawer-flex, 0 0 var(--drawer-size));
  height: var(--drawer-height, calc(100% - var(--drawer-offset) * 2));
  margin: var(--drawer-offset);
  max-width: calc(100% - var(--drawer-offset) * 2);
  max-height: calc(100% - var(--drawer-offset) * 2);
  overflow-y: auto;
}

.m_b8a05bbd[data-hidden] {
    opacity: 0 !important;
    pointer-events: none;
  }

.m_31cd769a {
  display: flex;
  justify-content: flex-start;
  justify-content: var(--drawer-justify, flex-start);
  align-items: flex-start;
  align-items: var(--drawer-align, flex-start);
}

.m_e9408a47 {
  padding: calc(1.25rem * 1);
  padding: var(--mantine-spacing-lg);
  padding-top: calc(0.625rem * 1);
  padding-top: var(--mantine-spacing-xs);
  border-radius: calc(0.25rem * 1);
  border-radius: var(--fieldset-radius, var(--mantine-radius-default));
  min-width: auto;
}

.m_84c9523a {
  border: calc(0.0625rem * 1) solid;
  border: calc(0.0625rem * var(--mantine-scale)) solid;
}

:where([data-mantine-color-scheme='light']) .m_84c9523a {
    border-color: #dee2e6;
    border-color: var(--mantine-color-gray-3);
    background-color: #fff;
    background-color: var(--mantine-color-white);
}

:where([data-mantine-color-scheme='dark']) .m_84c9523a {
    border-color: #424242;
    border-color: var(--mantine-color-dark-4);
    background-color: #242424;
    background-color: var(--mantine-color-dark-7);
}

.m_ef274e49 {
  border: calc(0.0625rem * 1) solid;
  border: calc(0.0625rem * var(--mantine-scale)) solid;
}

:where([data-mantine-color-scheme='light']) .m_ef274e49 {
    border-color: #dee2e6;
    border-color: var(--mantine-color-gray-3);
    background-color: #f8f9fa;
    background-color: var(--mantine-color-gray-0);
}

:where([data-mantine-color-scheme='dark']) .m_ef274e49 {
    border-color: #424242;
    border-color: var(--mantine-color-dark-4);
    background-color: #2e2e2e;
    background-color: var(--mantine-color-dark-6);
}

.m_eda993d3 {
  padding: 0;
  border: 0;
  border-radius: 0;
}

.m_90794832 {
  font-size: calc(0.875rem * 1);
  font-size: var(--mantine-font-size-sm);
}

.m_74ca27fe {
  padding: 0;
  margin-bottom: calc(0.75rem * 1);
  margin-bottom: var(--mantine-spacing-sm);
}

.m_8478a6da {
  container: mantine-grid / inline-size;
}

.m_410352e9 {
  --grid-overflow: visible;
  --grid-margin: calc(var(--grid-gutter) / -2);
  --grid-col-padding: calc(var(--grid-gutter) / 2);

  overflow: visible;

  overflow: var(--grid-overflow);
}

.m_dee7bd2f {
  width: calc(100% + var(--grid-gutter));
  display: flex;
  flex-wrap: wrap;
  justify-content: var(--grid-justify);
  align-items: var(--grid-align);
  margin: var(--grid-margin);
}

.m_96bdd299 {
  --col-flex-grow: 0;
  --col-offset: 0rem;

  flex-shrink: 0;
  order: var(--col-order);
  flex-basis: var(--col-flex-basis);
  width: var(--col-width);
  max-width: var(--col-max-width);
  flex-grow: 0;
  flex-grow: var(--col-flex-grow);
  margin-left: 0rem;
  margin-left: var(--col-offset);
  padding: var(--grid-col-padding);
}

.m_bcb3f3c2 {
  color: #000;
  color: var(--mantine-color-black);
}

  :where([data-mantine-color-scheme='light']) .m_bcb3f3c2 {
    background-color: var(--mark-bg-light);
}

  :where([data-mantine-color-scheme='dark']) .m_bcb3f3c2 {
    background-color: var(--mark-bg-dark);
}

.m_9e117634 {
  display: block;
  flex: 0;
  -o-object-fit: cover;
     object-fit: cover;
  -o-object-fit: var(--image-object-fit, cover);
     object-fit: var(--image-object-fit, cover);
  width: 100%;
  border-radius: 0;
  border-radius: var(--image-radius, 0);
}

@keyframes m_885901b1 {
  0% {
    opacity: 0.6;
    transform: scale(0);
  }

  100% {
    opacity: 0;
    transform: scale(2.8);
  }
}

.m_e5262200 {
  --indicator-size: calc(0.625rem * var(--mantine-scale));
  --indicator-color: var(--mantine-primary-color-filled);

  position: relative;
  display: block;
}

.m_e5262200:where([data-inline]) {
    display: inline-block;
  }

.m_760d1fb1 {
  position: absolute;
  top: var(--indicator-top);
  left: var(--indicator-left);
  right: var(--indicator-right);
  bottom: var(--indicator-bottom);
  transform: translate(var(--indicator-translate-x), var(--indicator-translate-y));
  min-width: var(--indicator-size);
  height: var(--indicator-size);
  border-radius: 1000rem;
  border-radius: var(--indicator-radius, 1000rem);
  z-index: 200;
  z-index: var(--indicator-z-index, 200);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(0.75rem * 1);
  font-size: var(--mantine-font-size-xs);
  background-color: var(--indicator-color);
  color: #fff;
  color: var(--indicator-text-color, var(--mantine-color-white));
  white-space: nowrap;
}

.m_760d1fb1::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--indicator-color);
    border-radius: 1000rem;
    border-radius: var(--indicator-radius, 1000rem);
    z-index: -1;
  }

.m_760d1fb1:where([data-with-label]) {
    padding-left: calc((0.625rem * 1) / 2);
    padding-right: calc((0.625rem * 1) / 2);
    padding-left: calc(calc(0.625rem * 1) / 2);
    padding-right: calc(calc(0.625rem * 1) / 2);
    padding-left: calc(var(--mantine-spacing-xs) / 2);
    padding-right: calc(var(--mantine-spacing-xs) / 2);
  }

.m_760d1fb1:where([data-with-border]) {
    border: 2px solid var(--mantine-color-body);
  }

.m_760d1fb1[data-processing]::before {
      animation: m_885901b1 1000ms linear infinite;
    }

.m_dc6f14e2 {
  --kbd-fz-xs: calc(0.625rem * var(--mantine-scale));
  --kbd-fz-sm: calc(0.75rem * var(--mantine-scale));
  --kbd-fz-md: calc(0.875rem * var(--mantine-scale));
  --kbd-fz-lg: calc(1rem * var(--mantine-scale));
  --kbd-fz-xl: calc(1.25rem * var(--mantine-scale));
  --kbd-fz: var(--kbd-fz-sm);

  --kbd-padding-xs: calc(0.125rem * var(--mantine-scale)) calc(0.25rem * var(--mantine-scale));
  --kbd-padding-sm: calc(0.1875rem * var(--mantine-scale)) calc(0.3125rem * var(--mantine-scale));
  --kbd-padding-md: calc(0.25rem * var(--mantine-scale)) calc(0.4375rem * var(--mantine-scale));
  --kbd-padding-lg: calc(0.3125rem * var(--mantine-scale)) calc(0.5625rem * var(--mantine-scale));
  --kbd-padding-xl: calc(0.5rem * var(--mantine-scale)) calc(0.875rem * var(--mantine-scale));
  --kbd-padding: var(--kbd-padding-sm);

  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    Liberation Mono, Courier New, monospace;

  font-family: var(--mantine-font-family-monospace);
  line-height: 1.55;
  line-height: var(--mantine-line-height);
  font-weight: 700;
  padding: calc(0.1875rem * 1) calc(0.3125rem * 1);
  padding: var(--kbd-padding);
  font-size: calc(0.75rem * 1);
  font-size: var(--kbd-fz);
  border-radius: calc(0.25rem * 1);
  border-radius: var(--mantine-radius-sm);
  border: calc(0.0625rem * 1) solid;
  border: calc(0.0625rem * var(--mantine-scale)) solid;
  border-bottom-width: calc(0.1875rem * 1);
  border-bottom-width: calc(0.1875rem * var(--mantine-scale));
  unicode-bidi: embed;
}

  :where([data-mantine-color-scheme='light']) .m_dc6f14e2 {
    border-color: #dee2e6;
    border-color: var(--mantine-color-gray-3);
    color: #495057;
    color: var(--mantine-color-gray-7);
    background-color: #f8f9fa;
    background-color: var(--mantine-color-gray-0);
}

  :where([data-mantine-color-scheme='dark']) .m_dc6f14e2 {
    border-color: #424242;
    border-color: var(--mantine-color-dark-4);
    color: #c9c9c9;
    color: var(--mantine-color-dark-0);
    background-color: #2e2e2e;
    background-color: var(--mantine-color-dark-6);
}

.m_abbac491 {
  --list-fz: var(--mantine-font-size-md);
  --list-lh: var(--mantine-line-height-md);

  list-style-position: inside;
  font-size: calc(1rem * 1);
  font-size: var(--list-fz);
  line-height: 1.55;
  line-height: var(--list-lh);
  margin: 0;
  padding: 0;
}

  .m_abbac491:where([data-with-padding]) {
    padding-left: calc(1rem * 1);
    padding-left: var(--mantine-spacing-md);
  }

.m_abb6bec2 {
  white-space: nowrap;
  line-height: var(--list-lh);
}

.m_abb6bec2:where([data-with-icon]) {
    list-style: none;
  }

.m_abb6bec2:where([data-with-icon]) .m_75cd9f71 {
      --li-direction: row;
      --li-align: center;
    }

.m_abb6bec2:where(:not(:first-of-type)) {
    margin-top: 0;
    margin-top: var(--list-spacing, 0);
  }

.m_abb6bec2:where([data-centered]) {
    line-height: 1;
  }

.m_75cd9f71 {
  display: inline-flex;
  flex-direction: column;
  flex-direction: var(--li-direction, column);
  align-items: flex-start;
  align-items: var(--li-align, flex-start);
  white-space: normal;
}

.m_60f83e5b {
  display: inline-block;
  vertical-align: middle;
  margin-right: calc(0.75rem * 1);
  margin-right: var(--mantine-spacing-sm);
}

.m_6e45937b {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: var(--lo-z-index);
}

.m_e8eb006c {
  position: relative;
  z-index: calc(var(--lo-z-index) + 1);
}

.m_df587f17 {
  z-index: var(--lo-z-index);
}

.m_dc9b7c9f {
  padding: calc(0.25rem * 1);
  padding: calc(0.25rem * var(--mantine-scale));
}

.m_9bfac126 {
  color: var(--mantine-color-dimmed);
  font-weight: 500;
  font-size: calc(0.75rem * 1);
  font-size: var(--mantine-font-size-xs);
  padding: calc((0.625rem * 1) / 2) calc(0.75rem * 1);
  padding: calc(calc(0.625rem * 1) / 2) calc(0.75rem * 1);
  padding: calc(var(--mantine-spacing-xs) / 2) var(--mantine-spacing-sm);
  cursor: default;
}

.m_efdf90cb {
  margin-top: calc(0.25rem * 1);
  margin-top: calc(0.25rem * var(--mantine-scale));
  margin-bottom: calc(0.25rem * 1);
  margin-bottom: calc(0.25rem * var(--mantine-scale));
  border-top: calc(0.0625rem * 1) solid;
  border-top: calc(0.0625rem * var(--mantine-scale)) solid;
}

:where([data-mantine-color-scheme='light']) .m_efdf90cb {
    border-color: #e9ecef;
    border-color: var(--mantine-color-gray-2);
}

:where([data-mantine-color-scheme='dark']) .m_efdf90cb {
    border-color: #424242;
    border-color: var(--mantine-color-dark-4);
}

.m_99ac2aa1 {
  font-size: calc(0.875rem * 1);
  font-size: var(--mantine-font-size-sm);
  width: 100%;
  padding: calc((0.625rem * 1) / 1.5) calc(0.75rem * 1);
  padding: calc(calc(0.625rem * 1) / 1.5) calc(0.75rem * 1);
  padding: calc(var(--mantine-spacing-xs) / 1.5) var(--mantine-spacing-sm);
  border-radius: calc(0.25rem * 1);
  border-radius: var(--popover-radius, var(--mantine-radius-default));
  color: var(--menu-item-color, var(--mantine-color-text));
  display: flex;
  align-items: center;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}

.m_99ac2aa1:where([data-disabled], :disabled) {
    color: var(--mantine-color-dimmed);
    opacity: 0.6;
    pointer-events: none;
  }

:where([data-mantine-color-scheme='light']) .m_99ac2aa1:where([data-hovered]) {
      background-color: #f1f3f5;
      background-color: var(--menu-item-hover, var(--mantine-color-gray-1));
}

:where([data-mantine-color-scheme='dark']) .m_99ac2aa1:where([data-hovered]) {
      background-color: #424242;
      background-color: var(--menu-item-hover, var(--mantine-color-dark-4));
}

.m_5476e0d3 {
  flex: 1;
}

.m_8b75e504 {
  display: flex;
  justify-content: center;
  align-items: center;
}

.m_8b75e504:where([data-position='left']) {
    margin-right: calc(0.625rem * 1);
    margin-right: var(--mantine-spacing-xs);
  }

.m_8b75e504:where([data-position='right']) {
    margin-left: calc(0.625rem * 1);
    margin-left: var(--mantine-spacing-xs);
  }

.m_9df02822 {
  --modal-size-xs: calc(20rem * var(--mantine-scale));
  --modal-size-sm: calc(23.75rem * var(--mantine-scale));
  --modal-size-md: calc(27.5rem * var(--mantine-scale));
  --modal-size-lg: calc(38.75rem * var(--mantine-scale));
  --modal-size-xl: calc(48.75rem * var(--mantine-scale));
  --modal-size: var(--modal-size-md);

  --modal-y-offset: 5dvh;
  --modal-x-offset: 5vw;
}

  .m_9df02822[data-full-screen] {
    --modal-border-radius: 0 !important;
  }

  .m_9df02822[data-full-screen] .m_54c44539 {
      --modal-content-flex: 0 0 100%;
      --modal-content-max-height: auto;
      --modal-content-height: 100dvh;
    }

  .m_9df02822[data-full-screen] .m_1f958f16 {
      --modal-inner-y-offset: 0;
      --modal-inner-x-offset: 0;
    }

  .m_9df02822[data-centered] .m_1f958f16 {
      --modal-inner-align: center;
    }

.m_d0e2b9cd {
  border-top-left-radius: calc(0.25rem * 1);
  border-top-left-radius: var(--modal-radius, var(--mantine-radius-default));
  border-top-right-radius: calc(0.25rem * 1);
  border-top-right-radius: var(--modal-radius, var(--mantine-radius-default));
}

.m_54c44539 {
  flex: var(--modal-content-flex, 0 0 var(--modal-size));
  max-width: 100%;
  max-height: var(--modal-content-max-height, calc(100dvh - var(--modal-y-offset) * 2));
  height: auto;
  height: var(--modal-content-height, auto);
  overflow-y: auto;
}

.m_54c44539[data-full-screen] {
    border-radius: 0;
  }

.m_54c44539[data-hidden] {
    opacity: 0 !important;
    pointer-events: none;
  }

.m_1f958f16 {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  align-items: var(--modal-inner-align, flex-start);
  padding-top: var(--modal-inner-y-offset, var(--modal-y-offset));
  padding-bottom: var(--modal-inner-y-offset, var(--modal-y-offset));
  padding-left: var(--modal-inner-x-offset, var(--modal-x-offset));
  padding-right: var(--modal-inner-x-offset, var(--modal-x-offset));
}

.m_7cda1cd6 {
  --pill-fz-xs: calc(0.625rem * var(--mantine-scale));
  --pill-fz-sm: calc(0.75rem * var(--mantine-scale));
  --pill-fz-md: calc(0.875rem * var(--mantine-scale));
  --pill-fz-lg: calc(1rem * var(--mantine-scale));
  --pill-fz-xl: calc(1.125rem * var(--mantine-scale));

  --pill-height-xs: calc(1.125rem * var(--mantine-scale));
  --pill-height-sm: calc(1.375rem * var(--mantine-scale));
  --pill-height-md: calc(1.5625rem * var(--mantine-scale));
  --pill-height-lg: calc(1.75rem * var(--mantine-scale));
  --pill-height-xl: calc(2rem * var(--mantine-scale));

  --pill-fz: var(--pill-fz-sm);
  --pill-height: var(--pill-height-sm);

  font-size: calc(0.75rem * 1);

  font-size: var(--pill-fz);
  flex: 0;
  height: calc(1.375rem * 1);
  height: var(--pill-height);
  padding-left: 0.8em;
  padding-right: 0.8em;
  display: inline-flex;
  align-items: center;
  border-radius: 1000rem;
  border-radius: var(--pill-radius, 1000rem);
  line-height: 1;
  white-space: nowrap;
  -moz-user-select: none;
       user-select: none;
  -webkit-user-select: none;
  max-width: 100%;
}

  :where([data-mantine-color-scheme='dark']) .m_7cda1cd6 {
    background-color: #242424;
    background-color: var(--mantine-color-dark-7);
    color: #c9c9c9;
    color: var(--mantine-color-dark-0);
}

  :where([data-mantine-color-scheme='light']) .m_7cda1cd6 {
    color: #000;
    color: var(--mantine-color-black);
}

  .m_7cda1cd6:where([data-with-remove]:not(:has(button:disabled))) {
    padding-right: 0;
  }

  .m_7cda1cd6:where([data-disabled], :has(button:disabled)) {
    cursor: not-allowed;
  }

:where([data-mantine-color-scheme='light']) .m_44da308b {
    background-color: #f1f3f5;
    background-color: var(--mantine-color-gray-1);
}

:where([data-mantine-color-scheme='light']) .m_44da308b:where([data-disabled], :has(button:disabled)) {
      background-color: #dee2e6;
      background-color: var(--mantine-color-gray-3);
    }

:where([data-mantine-color-scheme='light']) .m_e3a01f8 {
    background-color: #fff;
    background-color: var(--mantine-color-white);
}

:where([data-mantine-color-scheme='light']) .m_e3a01f8:where([data-disabled], :has(button:disabled)) {
      background-color: #dee2e6;
      background-color: var(--mantine-color-gray-3);
    }

.m_1e0e6180 {
  cursor: inherit;
  overflow: hidden;
  height: 100%;
  line-height: var(--pill-height);
  text-overflow: ellipsis;
}

.m_ae386778 {
  color: inherit;
  font-size: inherit;
  height: 100%;
  min-height: 0;
  min-height: initial;
  min-width: 2em;
  width: auto;
  width: initial;
  border-radius: 0;
  padding-left: 0.1em;
  padding-right: 0.3em;
  flex: 0;
  border-bottom-right-radius: 50%;
  border-bottom-right-radius: var(--pill-radius, 50%);
  border-top-right-radius: 50%;
  border-top-right-radius: var(--pill-radius, 50%);
}

.m_7cda1cd6[data-disabled] > .m_ae386778,
  .m_ae386778:disabled {
    display: none;
    background-color: transparent;
    width: 0.8em;
    min-width: 0.8em;
    padding: 0;
    cursor: not-allowed;
  }

.m_7cda1cd6[data-disabled] > .m_ae386778 > svg, .m_ae386778:disabled > svg {
      display: none;
    }

.m_ae386778 > svg {
    pointer-events: none;
  }

.m_1dcfd90b {
  --pg-gap-xs: calc(0.375rem * var(--mantine-scale));
  --pg-gap-sm: calc(0.5rem * var(--mantine-scale));
  --pg-gap-md: calc(0.625rem * var(--mantine-scale));
  --pg-gap-lg: calc(0.75rem * var(--mantine-scale));
  --pg-gap-xl: calc(0.75rem * var(--mantine-scale));
  --pg-gap: var(--pg-gap-sm);

  display: flex;
  align-items: center;
  gap: calc(0.5rem * 1);
  gap: var(--pg-gap);
  flex-wrap: wrap;
}

.m_45c4369d {
  background-color: transparent;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  min-width: calc(6.25rem * 1);
  min-width: calc(6.25rem * var(--mantine-scale));
  flex: 1;
  border: 0;
  font-size: inherit;
  height: 1.6em;
  color: inherit;
  padding: 0;
}

  .m_45c4369d::-moz-placeholder {
    color: var(--input-placeholder-color);
    opacity: 1;
  }

  .m_45c4369d::placeholder {
    color: var(--input-placeholder-color);
    opacity: 1;
  }

  .m_45c4369d:where([data-type='hidden'], [data-type='auto']) {
    height: calc(0.0625rem * 1);
    height: calc(0.0625rem * var(--mantine-scale));
    width: calc(0.0625rem * 1);
    width: calc(0.0625rem * var(--mantine-scale));
    top: 0;
    left: 0;
    pointer-events: none;
    position: absolute;
    opacity: 0;
  }

  .m_45c4369d:focus {
    outline: none;
  }

  .m_45c4369d:where([data-type='auto']:focus) {
    height: 1.6em;
    visibility: visible;
    opacity: 1;
    position: static;
  }

  .m_45c4369d:where([data-pointer]:not([data-disabled]):not(:disabled)) {
    cursor: pointer;
  }

  .m_45c4369d:where([data-disabled], :disabled) {
    cursor: not-allowed;
  }

.m_f0824112 {
  --nl-bg: var(--mantine-primary-color-light);
  --nl-hover: var(--mantine-primary-color-light-hover);
  --nl-color: var(--mantine-primary-color-light-color);

  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px calc(0.75rem * 1);
  padding: 8px var(--mantine-spacing-sm);
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}

  @media (hover: hover) {
    :where([data-mantine-color-scheme='light']) .m_f0824112:hover {
      background-color: #f8f9fa;
      background-color: var(--mantine-color-gray-0);
  }

    :where([data-mantine-color-scheme='dark']) .m_f0824112:hover {
      background-color: #2e2e2e;
      background-color: var(--mantine-color-dark-6);
  }
}

  @media (hover: none) {
    :where([data-mantine-color-scheme='light']) .m_f0824112:active {
      background-color: #f8f9fa;
      background-color: var(--mantine-color-gray-0);
  }

    :where([data-mantine-color-scheme='dark']) .m_f0824112:active {
      background-color: #2e2e2e;
      background-color: var(--mantine-color-dark-6);
  }
}

  .m_f0824112:where([data-disabled]) {
    opacity: 0.4;
    pointer-events: none;
  }

  .m_f0824112:where([data-active], [aria-current='page']) {
    background-color: var(--nl-bg);
    color: var(--nl-color);
  }

  @media (hover: hover) {

  .m_f0824112:where([data-active], [aria-current='page']):hover {
      background-color: var(--nl-hover);
  }
}

  @media (hover: none) {

  .m_f0824112:where([data-active], [aria-current='page']):active {
      background-color: var(--nl-hover);
  }
}

  .m_f0824112:where([data-active], [aria-current='page']) .m_57492dcc {
      --description-opacity: 0.9;
      --description-color: var(--nl-color);
    }

.m_690090b5 {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 150ms ease;
}

.m_690090b5 > svg {
    display: block;
  }

.m_690090b5:where([data-position='left']) {
    margin-right: calc(0.75rem * 1);
    margin-right: var(--mantine-spacing-sm);
  }

.m_690090b5:where([data-position='right']) {
    margin-left: calc(0.75rem * 1);
    margin-left: var(--mantine-spacing-sm);
  }

.m_690090b5:where([data-rotate]) {
    transform: rotate(90deg);
  }

.m_1f6ac4c4 {
  font-size: calc(0.875rem * 1);
  font-size: var(--mantine-font-size-sm);
}

.m_f07af9d2 {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
}

.m_f07af9d2:where([data-no-wrap]) {
    white-space: nowrap;
  }

.m_57492dcc {
  display: block;
  font-size: calc(0.75rem * 1);
  font-size: var(--mantine-font-size-xs);
  opacity: 1;
  opacity: var(--description-opacity, 1);
  color: var(--description-color, var(--mantine-color-dimmed));
  overflow: hidden;
  text-overflow: ellipsis;
}

:where([data-no-wrap]) .m_57492dcc {
    white-space: nowrap;
  }

.m_e17b862f {
  padding-left: calc(1.25rem * 1);
  padding-left: var(--nl-offset, var(--mantine-spacing-lg));
}

.m_1fd8a00b {
  transform: rotate(-90deg);
}

.m_a513464 {
  --notification-radius: var(--mantine-radius-default);
  --notification-color: var(--mantine-primary-color-filled);

  overflow: hidden;
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: calc(1.375rem * 1);
  padding-left: calc(1.375rem * var(--mantine-scale));
  padding-right: calc(0.625rem * 1);
  padding-right: var(--mantine-spacing-xs);
  padding-top: calc(0.625rem * 1);
  padding-top: var(--mantine-spacing-xs);
  padding-bottom: calc(0.625rem * 1);
  padding-bottom: var(--mantine-spacing-xs);
  border-radius: calc(0.25rem * 1);
  border-radius: var(--notification-radius);
  box-shadow: 0 calc(0.0625rem * 1)
      calc(0.1875rem * 1) rgba(0, 0, 0, 0.05),
    rgba(0, 0, 0, 0.05) 0 calc(1.75rem * 1)
      calc(1.4375rem * 1) calc(-0.4375rem * 1),
    rgba(0, 0, 0, 0.04) 0 calc(0.75rem * 1) calc(0.75rem * 1)
      calc(-0.4375rem * 1);
  box-shadow: var(--mantine-shadow-lg);
}

  .m_a513464::before {
    content: '';
    display: block;
    position: absolute;
    width: calc(0.375rem * 1);
    width: calc(0.375rem * var(--mantine-scale));
    top: var(--notification-radius);
    bottom: var(--notification-radius);
    left: calc(0.25rem * 1);
    left: calc(0.25rem * var(--mantine-scale));
    border-radius: var(--notification-radius);
    background-color: var(--notification-color);
  }

  :where([data-mantine-color-scheme='light']) .m_a513464 {
    background-color: #fff;
    background-color: var(--mantine-color-white);
}

  :where([data-mantine-color-scheme='dark']) .m_a513464 {
    background-color: #2e2e2e;
    background-color: var(--mantine-color-dark-6);
}

  .m_a513464:where([data-with-icon]) {
    padding-left: calc(0.625rem * 1);
    padding-left: var(--mantine-spacing-xs);
  }

  .m_a513464:where([data-with-icon])::before {
      display: none;
    }

  :where([data-mantine-color-scheme='light']) .m_a513464:where([data-with-border]) {
      border: 1px solid #dee2e6;
      border: 1px solid var(--mantine-color-gray-3);
}

  :where([data-mantine-color-scheme='dark']) .m_a513464:where([data-with-border]) {
      border: 1px solid #424242;
      border: 1px solid var(--mantine-color-dark-4);
}

.m_a4ceffb {
  box-sizing: border-box;
  margin-right: calc(1rem * 1);
  margin-right: var(--mantine-spacing-md);
  width: calc(1.75rem * 1);
  width: calc(1.75rem * var(--mantine-scale));
  height: calc(1.75rem * 1);
  height: calc(1.75rem * var(--mantine-scale));
  border-radius: calc(1.75rem * 1);
  border-radius: calc(1.75rem * var(--mantine-scale));
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--notification-color);
  color: #fff;
  color: var(--mantine-color-white);
}

.m_b0920b15 {
  margin-right: calc(1rem * 1);
  margin-right: var(--mantine-spacing-md);
}

.m_a49ed24 {
  flex: 1;
  overflow: hidden;
  margin-right: calc(0.625rem * 1);
  margin-right: var(--mantine-spacing-xs);
}

.m_3feedf16 {
  margin-bottom: calc(0.125rem * 1);
  margin-bottom: calc(0.125rem * var(--mantine-scale));
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: calc(0.875rem * 1);
  font-size: var(--mantine-font-size-sm);
  line-height: 1.45;
  line-height: var(--mantine-line-height-sm);
  font-weight: 500;
}

:where([data-mantine-color-scheme='light']) .m_3feedf16 {
    color: #212529;
    color: var(--mantine-color-gray-9);
}

:where([data-mantine-color-scheme='dark']) .m_3feedf16 {
    color: #fff;
    color: var(--mantine-color-white);
}

.m_3d733a3a {
  font-size: calc(0.875rem * 1);
  font-size: var(--mantine-font-size-sm);
  line-height: 1.45;
  line-height: var(--mantine-line-height-sm);
  overflow: hidden;
  text-overflow: ellipsis;
}

:where([data-mantine-color-scheme='light']) .m_3d733a3a {
    color: #000;
    color: var(--mantine-color-black);
}

:where([data-mantine-color-scheme='dark']) .m_3d733a3a {
    color: #c9c9c9;
    color: var(--mantine-color-dark-0);
}

:where([data-mantine-color-scheme='light']) .m_3d733a3a:where([data-with-title]) {
      color: #868e96;
      color: var(--mantine-color-gray-6);
}

:where([data-mantine-color-scheme='dark']) .m_3d733a3a:where([data-with-title]) {
      color: #828282;
      color: var(--mantine-color-dark-2);
}

@media (hover: hover) {
    :where([data-mantine-color-scheme='light']) .m_919a4d88:hover {
      background-color: #f8f9fa;
      background-color: var(--mantine-color-gray-0);
  }

    :where([data-mantine-color-scheme='dark']) .m_919a4d88:hover {
      background-color: #1f1f1f;
      background-color: var(--mantine-color-dark-8);
  }
}

@media (hover: none) {
    :where([data-mantine-color-scheme='light']) .m_919a4d88:active {
      background-color: #f8f9fa;
      background-color: var(--mantine-color-gray-0);
  }

    :where([data-mantine-color-scheme='dark']) .m_919a4d88:active {
      background-color: #1f1f1f;
      background-color: var(--mantine-color-dark-8);
  }
}

.m_e2f5cd4e {
  --ni-right-section-width-xs: calc(1.0625rem * var(--mantine-scale));
  --ni-right-section-width-sm: calc(1.5rem * var(--mantine-scale));
  --ni-right-section-width-md: calc(1.6875rem * var(--mantine-scale));
  --ni-right-section-width-lg: calc(1.9375rem * var(--mantine-scale));
  --ni-right-section-width-xl: calc(2.125rem * var(--mantine-scale));
}

.m_95e17d22 {
  --ni-chevron-size-xs: calc(0.625rem * var(--mantine-scale));
  --ni-chevron-size-sm: calc(0.875rem * var(--mantine-scale));
  --ni-chevron-size-md: calc(1rem * var(--mantine-scale));
  --ni-chevron-size-lg: calc(1.125rem * var(--mantine-scale));
  --ni-chevron-size-xl: calc(1.25rem * var(--mantine-scale));
  --ni-chevron-size: var(--ni-chevron-size-sm);

  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(var(--input-height) - (0.125rem * 1));
  height: calc(var(--input-height) - (0.125rem * var(--mantine-scale)));
  height: calc(var(--input-height) - calc(0.125rem * 1));
  height: calc(var(--input-height) - calc(0.125rem * var(--mantine-scale)));
  max-width: calc((0.875rem * 1) * 1.7);
  max-width: calc(calc(0.875rem * 1) * 1.7);
  max-width: calc(var(--ni-chevron-size) * 1.7);
  margin-left: auto;
}

.m_80b4b171 {
  --control-border: 1px solid var(--input-bd);
  --control-radius: calc(var(--input-radius) - calc(0.0625rem * var(--mantine-scale)));

  flex: 0 0 50%;
  width: 100%;
  padding: 0;
  height: calc(var(--input-height) / 2 - (0.0625rem * 1));
  height: calc(var(--input-height) / 2 - (0.0625rem * var(--mantine-scale)));
  height: calc(var(--input-height) / 2 - calc(0.0625rem * 1));
  height: calc(var(--input-height) / 2 - calc(0.0625rem * var(--mantine-scale)));
  border-left: var(--control-border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--mantine-color-text);
  background-color: transparent;
  cursor: pointer;
}

.m_80b4b171:where(:disabled) {
    background-color: transparent;
    cursor: not-allowed;
    opacity: 0.6;
  }

:where([data-mantine-color-scheme='light']) .m_80b4b171:where(:disabled) {
      color: #ced4da;
      color: var(--mantine-color-gray-4);
}

:where([data-mantine-color-scheme='dark']) .m_80b4b171:where(:disabled) {
      color: #696969;
      color: var(--mantine-color-dark-3);
}

.m_e2f5cd4e[data-error] :where(.m_80b4b171) {
    color: var(--mantine-color-error);
  }

@media (hover: hover) {
    :where([data-mantine-color-scheme='light']) .m_80b4b171:hover {
      background-color: #f8f9fa;
      background-color: var(--mantine-color-gray-0);
  }

    :where([data-mantine-color-scheme='dark']) .m_80b4b171:hover {
      background-color: #424242;
      background-color: var(--mantine-color-dark-4);
  }
}

@media (hover: none) {
    :where([data-mantine-color-scheme='light']) .m_80b4b171:active {
      background-color: #f8f9fa;
      background-color: var(--mantine-color-gray-0);
  }

    :where([data-mantine-color-scheme='dark']) .m_80b4b171:active {
      background-color: #424242;
      background-color: var(--mantine-color-dark-4);
  }
}

.m_80b4b171:where(:first-of-type) {
    border-radius: 0;
    border-top-right-radius: var(--control-radius);
  }

.m_80b4b171:last-of-type {
    border-radius: 0;
    border-bottom-right-radius: var(--control-radius);
  }

.m_4addd315 {
  --pagination-control-size-xs: calc(1.375rem * var(--mantine-scale));
  --pagination-control-size-sm: calc(1.625rem * var(--mantine-scale));
  --pagination-control-size-md: calc(2rem * var(--mantine-scale));
  --pagination-control-size-lg: calc(2.375rem * var(--mantine-scale));
  --pagination-control-size-xl: calc(2.75rem * var(--mantine-scale));
  --pagination-control-size: var(--pagination-control-size-md);
  --pagination-control-fz: var(--mantine-font-size-md);
  --pagination-active-bg: var(--mantine-primary-color-filled);
}

.m_326d024a {
  display: flex;
  align-items: center;
  justify-content: center;
  border: calc(0.0625rem * 1) solid;
  border: calc(0.0625rem * var(--mantine-scale)) solid;
  cursor: pointer;
  color: var(--mantine-color-text);
  height: var(--pagination-control-size);
  min-width: var(--pagination-control-size);
  font-size: var(--pagination-control-fz);
  line-height: 1;
  border-radius: calc(0.25rem * 1);
  border-radius: var(--pagination-control-radius, var(--mantine-radius-default));
}

.m_326d024a:where([data-with-padding]) {
    padding: calc(var(--pagination-control-size) / 4);
  }

.m_326d024a:where(:disabled, [data-disabled]) {
    cursor: not-allowed;
    opacity: 0.4;
  }

:where([data-mantine-color-scheme='light']) .m_326d024a {
    border-color: #ced4da;
    border-color: var(--mantine-color-gray-4);
    background-color: #fff;
    background-color: var(--mantine-color-white);
}

@media (hover: hover) {
      :where([data-mantine-color-scheme='light']) .m_326d024a:hover:where(:not(:disabled):not([data-disabled])) {
        background-color: #f8f9fa;
        background-color: var(--mantine-color-gray-0);
      }
}

@media (hover: none) {
      :where([data-mantine-color-scheme='light']) .m_326d024a:active:where(:not(:disabled):not([data-disabled])) {
        background-color: #f8f9fa;
        background-color: var(--mantine-color-gray-0);
      }
}

:where([data-mantine-color-scheme='dark']) .m_326d024a {
    border-color: #424242;
    border-color: var(--mantine-color-dark-4);
    background-color: #2e2e2e;
    background-color: var(--mantine-color-dark-6);
}

@media (hover: hover) {
      :where([data-mantine-color-scheme='dark']) .m_326d024a:hover:where(:not(:disabled):not([data-disabled])) {
        background-color: #3b3b3b;
        background-color: var(--mantine-color-dark-5);
      }
}

@media (hover: none) {
      :where([data-mantine-color-scheme='dark']) .m_326d024a:active:where(:not(:disabled):not([data-disabled])) {
        background-color: #3b3b3b;
        background-color: var(--mantine-color-dark-5);
      }
}

.m_326d024a:where([data-active]) {
    background-color: var(--pagination-active-bg);
    border-color: var(--pagination-active-bg);
    color: #fff;
    color: var(--pagination-active-color, var(--mantine-color-white));
  }

@media (hover: hover) {

  .m_326d024a:where([data-active]):hover {
      background-color: var(--pagination-active-bg);
  }
}

@media (hover: none) {

  .m_326d024a:where([data-active]):active {
      background-color: var(--pagination-active-bg);
  }
}

.m_4ad7767d {
  height: var(--pagination-control-size);
  min-width: var(--pagination-control-size);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

.m_f61ca620 {
  --psi-button-size-xs: calc(1.375rem * var(--mantine-scale));
  --psi-button-size-sm: calc(1.625rem * var(--mantine-scale));
  --psi-button-size-md: calc(1.75rem * var(--mantine-scale));
  --psi-button-size-lg: calc(2rem * var(--mantine-scale));
  --psi-button-size-xl: calc(2.5rem * var(--mantine-scale));

  --psi-icon-size-xs: calc(0.75rem * var(--mantine-scale));
  --psi-icon-size-sm: calc(0.9375rem * var(--mantine-scale));
  --psi-icon-size-md: calc(1.0625rem * var(--mantine-scale));
  --psi-icon-size-lg: calc(1.1875rem * var(--mantine-scale));
  --psi-icon-size-xl: calc(1.3125rem * var(--mantine-scale));

  --psi-button-size: var(--psi-button-size-sm);
  --psi-icon-size: var(--psi-icon-size-sm);
}

.m_ccf8da4c {
  position: relative;
  overflow: hidden;
}

.m_f2d85dd2 {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji;
  font-family: var(--mantine-font-family);
  background-color: transparent;
  border: 0;
  padding-right: var(--input-padding-inline-end);
  padding-left: var(--input-padding-inline-start);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  outline: 0;
  font-size: inherit;
  line-height: 1.55;
  line-height: var(--mantine-line-height);
  height: 100%;
  width: 100%;
  color: inherit;
}

.m_ccf8da4c[data-disabled] .m_f2d85dd2,
  .m_f2d85dd2:disabled {
    cursor: not-allowed;
  }

.m_f2d85dd2::-moz-placeholder {
    color: var(--input-placeholder-color);
    opacity: 1;
  }

.m_f2d85dd2::placeholder {
    color: var(--input-placeholder-color);
    opacity: 1;
  }

.m_f2d85dd2::-ms-reveal {
    display: none;
  }

.m_b1072d44 {
  width: var(--psi-button-size);
  height: var(--psi-button-size);
  min-width: var(--psi-button-size);
  min-height: var(--psi-button-size);
}

.m_b1072d44:disabled {
    display: none;
  }

.m_f1cb205a {
  --pin-input-size-xs: calc(1.875rem * var(--mantine-scale));
  --pin-input-size-sm: calc(2.25rem * var(--mantine-scale));
  --pin-input-size-md: calc(2.625rem * var(--mantine-scale));
  --pin-input-size-lg: calc(3.125rem * var(--mantine-scale));
  --pin-input-size-xl: calc(3.75rem * var(--mantine-scale));
  --pin-input-size: var(--pin-input-size-sm);
}

.m_cb288ead {
  width: var(--pin-input-size);
  height: var(--pin-input-size);
}

@keyframes m_81a374bd {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: calc(2.5rem * 1) 0;
    background-position: calc(2.5rem * var(--mantine-scale)) 0;
  }
}

.m_db6d6462 {
  --progress-radius: var(--mantine-radius-default);
  --progress-size: var(--progress-size-md);

  --progress-size-xs: calc(0.1875rem * var(--mantine-scale));
  --progress-size-sm: calc(0.3125rem * var(--mantine-scale));
  --progress-size-md: calc(0.5rem * var(--mantine-scale));
  --progress-size-lg: calc(0.75rem * var(--mantine-scale));
  --progress-size-xl: calc(1rem * var(--mantine-scale));

  position: relative;
  height: calc(0.5rem * 1);
  height: var(--progress-size);
  border-radius: calc(0.25rem * 1);
  border-radius: var(--progress-radius);
  overflow: hidden;
  display: flex;
}

:where([data-mantine-color-scheme='light']) .m_db6d6462 {
    background-color: #e9ecef;
    background-color: var(--mantine-color-gray-2);
}

:where([data-mantine-color-scheme='dark']) .m_db6d6462 {
    background-color: #424242;
    background-color: var(--mantine-color-dark-4);
}

.m_2242eb65 {
  background-color: var(--progress-section-color);
  height: 100%;
  width: var(--progress-section-width);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-size: calc(1.25rem * 1) calc(1.25rem * 1);
  background-size: calc(1.25rem * var(--mantine-scale)) calc(1.25rem * var(--mantine-scale));
  transition: width 100ms ease;
  transition: width var(--progress-transition-duration, 100ms) ease;
}

.m_2242eb65:where([data-striped]) {
    background-image: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.15) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.15) 50%,
      rgba(255, 255, 255, 0.15) 75%,
      transparent 75%,
      transparent
    );
  }

.m_2242eb65:where([data-animated]) {
    animation: m_81a374bd 1s linear infinite;
  }

.m_2242eb65:where(:last-of-type) {
    border-radius: 0;
    border-top-right-radius: var(--progress-radius);
    border-bottom-right-radius: var(--progress-radius);
  }

.m_2242eb65:where(:first-of-type) {
    border-radius: 0;
    border-top-left-radius: var(--progress-radius);
    border-bottom-left-radius: var(--progress-radius);
  }

.m_91e40b74 {
  color: #fff;
  color: var(--progress-label-color, var(--mantine-color-white));
  font-weight: bold;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: min(calc(var(--progress-size) * 0.65), calc(1.125rem * 1));
  font-size: min(calc(var(--progress-size) * 0.65), calc(1.125rem * var(--mantine-scale)));
  line-height: 1;
  padding-left: calc(0.25rem * 1);
  padding-right: calc(0.25rem * 1);
  padding-left: calc(0.25rem * var(--mantine-scale));
  padding-right: calc(0.25rem * var(--mantine-scale));
}

.m_9dc8ae12 {
  --card-radius: var(--mantine-radius-default);

  display: block;
  width: 100%;
  border-radius: calc(0.25rem * 1);
  border-radius: var(--card-radius);
  cursor: pointer;
}

  .m_9dc8ae12 :where(*) {
    cursor: inherit;
  }

  .m_9dc8ae12:where([data-with-border]) {
    border: calc(0.0625rem * 1) solid transparent;
    border: calc(0.0625rem * var(--mantine-scale)) solid transparent;
  }

  :where([data-mantine-color-scheme='light']) .m_9dc8ae12:where([data-with-border]) {
      border-color: #dee2e6;
      border-color: var(--mantine-color-gray-3);
}

  :where([data-mantine-color-scheme='dark']) .m_9dc8ae12:where([data-with-border]) {
      border-color: #424242;
      border-color: var(--mantine-color-dark-4);
}

.m_717d7ff6 {
  --radio-size-xs: calc(1rem * var(--mantine-scale));
  --radio-size-sm: calc(1.25rem * var(--mantine-scale));
  --radio-size-md: calc(1.5rem * var(--mantine-scale));
  --radio-size-lg: calc(1.875rem * var(--mantine-scale));
  --radio-size-xl: calc(2.25rem * var(--mantine-scale));

  --radio-icon-size-xs: calc(0.375rem * var(--mantine-scale));
  --radio-icon-size-sm: calc(0.5rem * var(--mantine-scale));
  --radio-icon-size-md: calc(0.625rem * var(--mantine-scale));
  --radio-icon-size-lg: calc(0.875rem * var(--mantine-scale));
  --radio-icon-size-xl: calc(1rem * var(--mantine-scale));

  --radio-icon-size: var(--radio-icon-size-sm);
  --radio-size: var(--radio-size-sm);
  --radio-color: var(--mantine-primary-color-filled);
  --radio-icon-color: var(--mantine-color-white);

  position: relative;
  border: calc(0.0625rem * 1) solid transparent;
  border: calc(0.0625rem * var(--mantine-scale)) solid transparent;
  width: calc(1.25rem * 1);
  width: var(--radio-size);
  min-width: calc(1.25rem * 1);
  min-width: var(--radio-size);
  height: calc(1.25rem * 1);
  height: var(--radio-size);
  min-height: calc(1.25rem * 1);
  min-height: var(--radio-size);
  border-radius: 10000px;
  border-radius: var(--radio-radius, 10000px);
  transition:
    border-color 100ms ease, background-color 100ms ease;
  cursor: default;
  cursor: var(--mantine-cursor-type);
  -webkit-tap-highlight-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
}

  :where([data-mantine-color-scheme='light']) .m_717d7ff6 {
    background-color: #fff;
    background-color: var(--mantine-color-white);
    border-color: #ced4da;
    border-color: var(--mantine-color-gray-4);
}

  :where([data-mantine-color-scheme='dark']) .m_717d7ff6 {
    background-color: #2e2e2e;
    background-color: var(--mantine-color-dark-6);
    border-color: #424242;
    border-color: var(--mantine-color-dark-4);
}

  .m_717d7ff6[data-indeterminate],
  .m_717d7ff6[data-checked] {
    background-color: var(--radio-color);
    border-color: var(--radio-color);
  }

  .m_717d7ff6[data-indeterminate] > .m_3e4da632, .m_717d7ff6[data-checked] > .m_3e4da632 {
      opacity: 1;
      transform: none;
      color: var(--radio-icon-color);
    }

  .m_717d7ff6[data-disabled] {
    cursor: not-allowed;
  }

  :where([data-mantine-color-scheme='light']) .m_717d7ff6[data-disabled] {
      background-color: #e9ecef;
      background-color: var(--mantine-color-gray-2);
      border-color: #dee2e6;
      border-color: var(--mantine-color-gray-3);
}

  :where([data-mantine-color-scheme='dark']) .m_717d7ff6[data-disabled] {
      background-color: #2e2e2e;
      background-color: var(--mantine-color-dark-6);
      border-color: #2e2e2e;
      border-color: var(--mantine-color-dark-6);
}

  [data-mantine-color-scheme='light'] .m_717d7ff6[data-disabled][data-checked] > .m_3e4da632 {
        color: #adb5bd;
        color: var(--mantine-color-gray-5);
}

  [data-mantine-color-scheme='dark'] .m_717d7ff6[data-disabled][data-checked] > .m_3e4da632 {
        color: #696969;
        color: var(--mantine-color-dark-3);
}

.m_2980836c[data-indeterminate]:not([data-disabled]),
  .m_2980836c[data-checked]:not([data-disabled]) {
    background-color: transparent;
    border-color: var(--radio-color);
  }

.m_2980836c[data-indeterminate]:not([data-disabled]) > .m_3e4da632, .m_2980836c[data-checked]:not([data-disabled]) > .m_3e4da632 {
      color: var(--radio-color);
      opacity: 1;
      transform: none;
    }

.m_3e4da632 {
  display: block;
  width: var(--radio-icon-size);
  height: var(--radio-icon-size);
  color: transparent;
  pointer-events: none;
  transform: translateY(calc(0.3125rem * 1)) scale(0.5);
  transform: translateY(calc(0.3125rem * var(--mantine-scale))) scale(0.5);
  opacity: 1;
  transition:
    transform 100ms ease, opacity 100ms ease;
}

.m_f3f1af94 {
  --radio-size-xs: calc(1rem * var(--mantine-scale));
  --radio-size-sm: calc(1.25rem * var(--mantine-scale));
  --radio-size-md: calc(1.5rem * var(--mantine-scale));
  --radio-size-lg: calc(1.875rem * var(--mantine-scale));
  --radio-size-xl: calc(2.25rem * var(--mantine-scale));
  --radio-size: var(--radio-size-sm);

  --radio-icon-size-xs: calc(0.375rem * var(--mantine-scale));
  --radio-icon-size-sm: calc(0.5rem * var(--mantine-scale));
  --radio-icon-size-md: calc(0.625rem * var(--mantine-scale));
  --radio-icon-size-lg: calc(0.875rem * var(--mantine-scale));
  --radio-icon-size-xl: calc(1rem * var(--mantine-scale));
  --radio-icon-size: var(--radio-icon-size-sm);
  --radio-icon-color: var(--mantine-color-white);
}

.m_89c4f5e4 {
  position: relative;
  width: var(--radio-size);
  height: var(--radio-size);
  order: 1;
}

.m_89c4f5e4:where([data-label-position='left']) {
    order: 2;
  }

.m_f3ed6b2b {
  color: var(--radio-icon-color);
  opacity: 0;
  opacity: var(--radio-icon-opacity, 0);
  transform: scale(0.2) translateY(calc(0.625rem * 1));
  transform: var(--radio-icon-transform, scale(0.2) translateY(calc(0.625rem * var(--mantine-scale))));
  transition:
    opacity 100ms ease, transform 200ms ease;
  pointer-events: none;
  width: var(--radio-icon-size);
  height: var(--radio-icon-size);
  position: absolute;
  top: calc(50% - var(--radio-icon-size) / 2);
  left: calc(50% - var(--radio-icon-size) / 2);
}

.m_8a3dbb89 {
  border: calc(0.0625rem * 1) solid;
  border: calc(0.0625rem * var(--mantine-scale)) solid;
  position: relative;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  width: var(--radio-size);
  height: var(--radio-size);
  border-radius: var(--radio-radius, var(--radio-size));
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-property: background-color, border-color;
  transition-timing-function: ease;
  transition-duration: 100ms;
  cursor: default;
  cursor: var(--mantine-cursor-type);
  -webkit-tap-highlight-color: transparent;
}

:where([data-mantine-color-scheme='light']) .m_8a3dbb89 {
    background-color: #fff;
    background-color: var(--mantine-color-white);
    border-color: #ced4da;
    border-color: var(--mantine-color-gray-4);
}

:where([data-mantine-color-scheme='dark']) .m_8a3dbb89 {
    background-color: #2e2e2e;
    background-color: var(--mantine-color-dark-6);
    border-color: #424242;
    border-color: var(--mantine-color-dark-4);
}

.m_8a3dbb89:checked {
    background-color: var(--radio-color, var(--mantine-primary-color-filled));
    border-color: var(--radio-color, var(--mantine-primary-color-filled));
  }

.m_8a3dbb89:checked + .m_f3ed6b2b {
      --radio-icon-opacity: 1;
      --radio-icon-transform: scale(1);
    }

.m_8a3dbb89:disabled {
    cursor: not-allowed;
  }

:where([data-mantine-color-scheme='light']) .m_8a3dbb89:disabled {
      background-color: #f1f3f5;
      background-color: var(--mantine-color-gray-1);
      border-color: #e9ecef;
      border-color: var(--mantine-color-gray-2);
}

:where([data-mantine-color-scheme='light']) .m_8a3dbb89:disabled + .m_f3ed6b2b {
        --radio-icon-color: var(--mantine-color-gray-3);
      }

:where([data-mantine-color-scheme='dark']) .m_8a3dbb89:disabled {
      background-color: #3b3b3b;
      background-color: var(--mantine-color-dark-5);
      border-color: #424242;
      border-color: var(--mantine-color-dark-4);
}

:where([data-mantine-color-scheme='dark']) .m_8a3dbb89:disabled + .m_f3ed6b2b {
        --radio-icon-color: var(--mantine-color-dark-7);
      }

.m_8a3dbb89:where([data-error]) {
    border-color: var(--mantine-color-error);
  }

.m_1bfe9d39 + .m_f3ed6b2b {
    --radio-icon-color: var(--radio-color);
  }

.m_1bfe9d39:checked:not(:disabled) {
    background-color: transparent;
    border-color: var(--radio-color);
  }

.m_1bfe9d39:checked:not(:disabled) + .m_f3ed6b2b {
      --radio-icon-color: var(--radio-color);
      --radio-icon-opacity: 1;
      --radio-icon-transform: none;
    }

.m_f8d312f2 {
  --rating-size-xs: calc(0.875rem * var(--mantine-scale));
  --rating-size-sm: calc(1.125rem * var(--mantine-scale));
  --rating-size-md: calc(1.25rem * var(--mantine-scale));
  --rating-size-lg: calc(1.75rem * var(--mantine-scale));
  --rating-size-xl: calc(2rem * var(--mantine-scale));

  display: flex;
  width: -moz-max-content;
  width: max-content;
}

  .m_f8d312f2:where(:has(input:disabled)) {
    pointer-events: none;
  }

.m_61734bb7 {
  position: relative;
  transition: transform 100ms ease;
}

.m_61734bb7:where([data-active]) {
    z-index: 1;
    transform: scale(1.1);
  }

.m_5662a89a {
  width: var(--rating-size);
  height: var(--rating-size);
  display: block;
}

:where([data-mantine-color-scheme='light']) .m_5662a89a {
    fill: #dee2e6;
    fill: var(--mantine-color-gray-3);
    stroke: #dee2e6;
    stroke: var(--mantine-color-gray-3);
}

:where([data-mantine-color-scheme='dark']) .m_5662a89a {
    fill: #696969;
    fill: var(--mantine-color-dark-3);
    stroke: #696969;
    stroke: var(--mantine-color-dark-3);
}

.m_5662a89a:where([data-filled]) {
    fill: var(--rating-color);
    stroke: var(--rating-color);
  }

.m_211007ba {
  height: 0;
  width: 0;
  position: absolute;
  overflow: hidden;
  white-space: nowrap;
  opacity: 0;
  -webkit-tap-highlight-color: transparent;
}

.m_211007ba:focus-visible + label {
    outline: 2px solid var(--mantine-primary-color-filled);
    outline-offset: calc(0.125rem * 1);
    outline-offset: calc(0.125rem * var(--mantine-scale));
  }

.m_21342ee4 {
  display: block;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  z-index: var(--rating-item-z-index, 0);
  -webkit-tap-highlight-color: transparent;
}

.m_21342ee4:where([data-read-only]) {
    cursor: default;
  }

.m_21342ee4:where(:last-of-type) {
    position: relative;
  }

.m_fae05d6a {
  clip-path: var(--rating-symbol-clip-path);
}

.m_1b3c8819 {
  --tooltip-radius: var(--mantine-radius-default);

  position: absolute;
  padding: calc((0.625rem * 1) / 2) calc(0.625rem * 1);
  padding: calc(calc(0.625rem * 1) / 2) calc(0.625rem * 1);
  padding: calc(var(--mantine-spacing-xs) / 2) var(--mantine-spacing-xs);
  pointer-events: none;
  font-size: calc(0.875rem * 1);
  font-size: var(--mantine-font-size-sm);
  white-space: nowrap;
  border-radius: calc(0.25rem * 1);
  border-radius: var(--tooltip-radius);
}

  :where([data-mantine-color-scheme='light']) .m_1b3c8819 {
    background-color: #212529;
    background-color: var(--tooltip-bg, var(--mantine-color-gray-9));
    color: #fff;
    color: var(--tooltip-color, var(--mantine-color-white));
}

  :where([data-mantine-color-scheme='dark']) .m_1b3c8819 {
    background-color: #e9ecef;
    background-color: var(--tooltip-bg, var(--mantine-color-gray-2));
    color: #000;
    color: var(--tooltip-color, var(--mantine-color-black));
}

  .m_1b3c8819:where([data-multiline]) {
    white-space: normal;
  }

  .m_1b3c8819:where([data-fixed]) {
    position: fixed;
  }

.m_f898399f {
  background-color: inherit;
  border: 0;
  z-index: 1;
}

.m_b32e4812 {
  position: relative;
  width: var(--rp-size);
  height: var(--rp-size);
  min-width: var(--rp-size);
  min-height: var(--rp-size);
  --rp-transition-duration: 0ms;
}

.m_d43b5134 {
  width: var(--rp-size);
  height: var(--rp-size);
  min-width: var(--rp-size);
  min-height: var(--rp-size);
  transform: rotate(-90deg);
}

.m_b1ca1fbf {
  stroke: var(--curve-color, var(--rp-curve-root-color));
  transition:
    stroke-dashoffset var(--rp-transition-duration) ease, stroke-dasharray var(--rp-transition-duration) ease, stroke var(--rp-transition-duration);
}

[data-mantine-color-scheme='light'] .m_b1ca1fbf {
    --rp-curve-root-color: var(--mantine-color-gray-2);
}

[data-mantine-color-scheme='dark'] .m_b1ca1fbf {
    --rp-curve-root-color: var(--mantine-color-dark-4);
}

.m_b23f9dc4 {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: var(--rp-label-offset);
  right: var(--rp-label-offset);
}

.m_cf365364 {
  --sc-padding-xs: calc(0.1875rem * var(--mantine-scale)) calc(0.375rem * var(--mantine-scale));
  --sc-padding-sm: calc(0.3125rem * var(--mantine-scale)) calc(0.625rem * var(--mantine-scale));
  --sc-padding-md: calc(0.4375rem * var(--mantine-scale)) calc(0.875rem * var(--mantine-scale));
  --sc-padding-lg: calc(0.5625rem * var(--mantine-scale)) calc(1rem * var(--mantine-scale));
  --sc-padding-xl: calc(0.75rem * var(--mantine-scale)) calc(1.25rem * var(--mantine-scale));

  --sc-transition-duration: 200ms;
  --sc-padding: var(--sc-padding-sm);
  --sc-transition-timing-function: ease;
  --sc-font-size: var(--mantine-font-size-sm);

  position: relative;
  display: inline-flex;
  flex-direction: row;
  width: auto;
  border-radius: calc(0.25rem * 1);
  border-radius: var(--sc-radius, var(--mantine-radius-default));
  overflow: hidden;
  padding: calc(0.25rem * 1);
  padding: calc(0.25rem * var(--mantine-scale));
}

  .m_cf365364:where([data-full-width]) {
    display: flex;
  }

  .m_cf365364:where([data-orientation='vertical']) {
    display: flex;
    flex-direction: column;
    width: -moz-max-content;
    width: max-content;
  }

  .m_cf365364:where([data-orientation='vertical']):where([data-full-width]) {
      width: auto;
    }

  :where([data-mantine-color-scheme='light']) .m_cf365364 {
    background-color: #f1f3f5;
    background-color: var(--mantine-color-gray-1);
}

  :where([data-mantine-color-scheme='dark']) .m_cf365364 {
    background-color: #1f1f1f;
    background-color: var(--mantine-color-dark-8);
}

.m_9e182ccd {
  position: absolute;
  display: block;
  z-index: 1;
  border-radius: calc(0.25rem * 1);
  border-radius: var(--sc-radius, var(--mantine-radius-default));
}

:where([data-mantine-color-scheme='light']) .m_9e182ccd {
    box-shadow: none;
    box-shadow: var(--sc-shadow, none);
    background-color: #fff;
    background-color: var(--sc-color, var(--mantine-color-white));
}

:where([data-mantine-color-scheme='dark']) .m_9e182ccd {
    box-shadow: none;
    background-color: #3b3b3b;
    background-color: var(--sc-color, var(--mantine-color-dark-5));
}

.m_1738fcb2 {
  -webkit-tap-highlight-color: transparent;
  font-weight: 500;
  display: block;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  border-radius: calc(0.25rem * 1);
  border-radius: var(--sc-radius, var(--mantine-radius-default));
  font-size: var(--sc-font-size);
  padding: var(--sc-padding);
  transition: color var(--sc-transition-duration) var(--sc-transition-timing-function);
  cursor: pointer;

  /* outline is controlled by .input */
  outline: none;
  outline: var(--segmented-control-outline, none);
}

:where([data-mantine-color-scheme='light']) .m_1738fcb2 {
    color: #495057;
    color: var(--mantine-color-gray-7);
}

:where([data-mantine-color-scheme='dark']) .m_1738fcb2 {
    color: #b8b8b8;
    color: var(--mantine-color-dark-1);
}

.m_1738fcb2:where([data-read-only]) {
    cursor: default;
  }

fieldset:disabled .m_1738fcb2,
  .m_1738fcb2:where([data-disabled]) {
    cursor: not-allowed;
  }

:where([data-mantine-color-scheme='light']) fieldset:disabled .m_1738fcb2, :where([data-mantine-color-scheme='light']) .m_1738fcb2:where([data-disabled]) {
      color: #adb5bd;
      color: var(--mantine-color-gray-5);
}

:where([data-mantine-color-scheme='dark']) fieldset:disabled .m_1738fcb2, :where([data-mantine-color-scheme='dark']) .m_1738fcb2:where([data-disabled]) {
      color: #696969;
      color: var(--mantine-color-dark-3);
}

:where([data-mantine-color-scheme='light']) .m_1738fcb2:where([data-active]) {
      color: #000;
      color: var(--sc-label-color, var(--mantine-color-black));
}

:where([data-mantine-color-scheme='dark']) .m_1738fcb2:where([data-active]) {
      color: #fff;
      color: var(--sc-label-color, var(--mantine-color-white));
}

.m_cf365364:where([data-initialized]) .m_1738fcb2:where([data-active])::before {
        display: none;
      }

.m_1738fcb2:where([data-active])::before {
      content: '';
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 0;
      position: absolute;
      border-radius: calc(0.25rem * 1);
      border-radius: var(--sc-radius, var(--mantine-radius-default));
}

:where([data-mantine-color-scheme='light']) .m_1738fcb2:where([data-active])::before {
        box-shadow: none;
        box-shadow: var(--sc-shadow, none);
        background-color: #fff;
        background-color: var(--sc-color, var(--mantine-color-white));
}

:where([data-mantine-color-scheme='dark']) .m_1738fcb2:where([data-active])::before {
        box-shadow: none;
        background-color: #3b3b3b;
        background-color: var(--sc-color, var(--mantine-color-dark-5));
}

@media (hover: hover) {
      :where([data-mantine-color-scheme='light']) .m_1738fcb2:where(:not([data-disabled]):not([data-active]):not([data-read-only])):hover {
        color: #000;
        color: var(--mantine-color-black);
  }

      :where([data-mantine-color-scheme='dark']) .m_1738fcb2:where(:not([data-disabled]):not([data-active]):not([data-read-only])):hover {
        color: #fff;
        color: var(--mantine-color-white);
  }
}

@media (hover: none) {
      :where([data-mantine-color-scheme='light']) .m_1738fcb2:where(:not([data-disabled]):not([data-active]):not([data-read-only])):active {
        color: #000;
        color: var(--mantine-color-black);
  }

      :where([data-mantine-color-scheme='dark']) .m_1738fcb2:where(:not([data-disabled]):not([data-active]):not([data-read-only])):active {
        color: #fff;
        color: var(--mantine-color-white);
  }
}

@media (hover: hover) {
      :where([data-mantine-color-scheme='light']) fieldset:disabled .m_1738fcb2:hover {
        color: #adb5bd !important;
        color: var(--mantine-color-gray-5) !important;
  }

      :where([data-mantine-color-scheme='dark']) fieldset:disabled .m_1738fcb2:hover {
        color: #696969 !important;
        color: var(--mantine-color-dark-3) !important;
  }
}

@media (hover: none) {
      :where([data-mantine-color-scheme='light']) fieldset:disabled .m_1738fcb2:active {
        color: #adb5bd !important;
        color: var(--mantine-color-gray-5) !important;
  }

      :where([data-mantine-color-scheme='dark']) fieldset:disabled .m_1738fcb2:active {
        color: #696969 !important;
        color: var(--mantine-color-dark-3) !important;
  }
}

.m_1714d588 {
  height: 0;
  width: 0;
  position: absolute;
  overflow: hidden;
  white-space: nowrap;
  opacity: 0;
}

.m_1714d588[data-focus-ring='auto']:focus:focus-visible + .m_1738fcb2 {
        --segmented-control-outline: 2px solid var(--mantine-primary-color-filled);
      }

.m_1714d588[data-focus-ring='always']:focus + .m_1738fcb2 {
        --segmented-control-outline: 2px solid var(--mantine-primary-color-filled);
      }

.m_69686b9b {
  position: relative;
  flex: 1;
  z-index: 2;
  transition: border-color var(--sc-transition-duration) var(--sc-transition-timing-function);
}

.m_cf365364[data-with-items-borders] :where(.m_69686b9b)::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    background-color: var(--separator-color);
    width: calc(0.0625rem * 1);
    width: calc(0.0625rem * var(--mantine-scale));
    transition: background-color var(--sc-transition-duration) var(--sc-transition-timing-function);
  }

.m_69686b9b[data-orientation='vertical']::before {
      top: 0;
      left: 0;
      right: 0;
      bottom: auto;
      height: calc(0.0625rem * 1);
      height: calc(0.0625rem * var(--mantine-scale));
      width: auto;
    }

:where([data-mantine-color-scheme='light']) .m_69686b9b {
    --separator-color: var(--mantine-color-gray-3);
}

:where([data-mantine-color-scheme='dark']) .m_69686b9b {
    --separator-color: var(--mantine-color-dark-4);
}

.m_69686b9b:first-of-type::before {
      --separator-color: transparent;
    }

[data-mantine-color-scheme] .m_69686b9b[data-active]::before, [data-mantine-color-scheme] .m_69686b9b[data-active] + .m_69686b9b::before {
          --separator-color: transparent;
        }

.m_78882f40 {
  position: relative;
  z-index: 2;
}

.m_fa528724 {
  --scp-filled-segment-color: var(--mantine-primary-color-filled);
  --scp-transition-duration: 0ms;
  --scp-thickness: calc(0.625rem * var(--mantine-scale));
}

  :where([data-mantine-color-scheme='light']) .m_fa528724 {
    --scp-empty-segment-color: var(--mantine-color-gray-2);
}

  :where([data-mantine-color-scheme='dark']) .m_fa528724 {
    --scp-empty-segment-color: var(--mantine-color-dark-4);
}

  .m_fa528724 {

  position: relative;
  width: -moz-fit-content;
  width: fit-content;
}

.m_62e9e7e2 {
  display: block;
  transform: var(--scp-rotation);
  overflow: hidden;
}

.m_c573fb6f {
  transition:
    stroke-dashoffset var(--scp-transition-duration) ease, stroke-dasharray var(--scp-transition-duration) ease, stroke var(--scp-transition-duration);
}

.m_4fa340f2 {
  position: absolute;
  margin: 0;
  padding: 0;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 1;
}

.m_4fa340f2:where([data-position='bottom']) {
    bottom: 0;
    padding-left: calc(var(--scp-thickness) * 2);
    padding-right: calc(var(--scp-thickness) * 2);
  }

.m_4fa340f2:where([data-position='bottom']):where([data-orientation='down']) {
      bottom: auto;
      top: 0;
    }

.m_4fa340f2:where([data-position='center']) {
    top: 50%;
    padding-left: calc(var(--scp-thickness) * 3);
    padding-right: calc(var(--scp-thickness) * 3);
  }

.m_925c2d2c {
  container: simple-grid / inline-size;
}

.m_2415a157 {
  display: grid;
  grid-template-columns: repeat(var(--sg-cols), minmax(0, 1fr));
  grid-gap: var(--sg-spacing-y) var(--sg-spacing-x);
  gap: var(--sg-spacing-y) var(--sg-spacing-x);
}

@keyframes m_299c329c {
  0%,
  100% {
    opacity: 0.4;
  }

  50% {
    opacity: 1;
  }
}

.m_18320242 {
  height: auto;
  height: var(--skeleton-height, auto);
  width: 100%;
  width: var(--skeleton-width, 100%);
  border-radius: calc(0.25rem * 1);
  border-radius: var(--skeleton-radius, var(--mantine-radius-default));
  position: relative;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
}

.m_18320242:where([data-animate])::after {
    animation: m_299c329c 1500ms linear infinite;
  }

.m_18320242:where([data-visible]) {
    overflow: hidden;
  }

.m_18320242:where([data-visible])::before {
      position: absolute;
      content: '';
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 10;
      background-color: var(--mantine-color-body);
    }

.m_18320242:where([data-visible])::after {
      position: absolute;
      content: '';
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 11;
    }

:where([data-mantine-color-scheme='light']) .m_18320242:where([data-visible])::after {
        background-color: #dee2e6;
        background-color: var(--mantine-color-gray-3);
}

:where([data-mantine-color-scheme='dark']) .m_18320242:where([data-visible])::after {
        background-color: #424242;
        background-color: var(--mantine-color-dark-4);
}

.m_dd36362e {
  --slider-size-xs: calc(0.25rem * var(--mantine-scale));
  --slider-size-sm: calc(0.375rem * var(--mantine-scale));
  --slider-size-md: calc(0.5rem * var(--mantine-scale));
  --slider-size-lg: calc(0.625rem * var(--mantine-scale));
  --slider-size-xl: calc(0.75rem * var(--mantine-scale));

  --slider-size: var(--slider-size-md);
  --slider-radius: calc(62.5rem * var(--mantine-scale));
  --slider-color: var(--mantine-primary-color-filled);

  -webkit-tap-highlight-color: transparent;
  outline: none;
  height: calc((0.5rem * 1) * 2);
  height: calc(calc(0.5rem * 1) * 2);
  height: calc(var(--slider-size) * 2);
  padding-left: calc(0.5rem * 1);
  padding-right: calc(0.5rem * 1);
  padding-left: var(--slider-size);
  padding-right: var(--slider-size);
  display: flex;
  flex-direction: column;
  align-items: center;
  touch-action: none;
  position: relative;
}

  [data-mantine-color-scheme='light'] .m_dd36362e {
    --slider-track-bg: var(--mantine-color-gray-2);
    --slider-track-disabled-bg: var(--mantine-color-gray-4);
}

  [data-mantine-color-scheme='dark'] .m_dd36362e {
    --slider-track-bg: var(--mantine-color-dark-4);
    --slider-track-disabled-bg: var(--mantine-color-dark-3);
}

.m_c9357328 {
  position: absolute;
  top: calc(-2.25rem * 1);
  top: calc(-2.25rem * var(--mantine-scale));
  font-size: calc(0.75rem * 1);
  font-size: var(--mantine-font-size-xs);
  color: #fff;
  color: var(--mantine-color-white);
  padding: calc((0.625rem * 1) / 2);
  padding: calc(calc(0.625rem * 1) / 2);
  padding: calc(var(--mantine-spacing-xs) / 2);
  border-radius: calc(0.25rem * 1);
  border-radius: var(--mantine-radius-sm);
  white-space: nowrap;
  pointer-events: none;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  touch-action: none;
}

:where([data-mantine-color-scheme='light']) .m_c9357328 {
    background-color: #212529;
    background-color: var(--mantine-color-gray-9);
}

:where([data-mantine-color-scheme='dark']) .m_c9357328 {
    background-color: #424242;
    background-color: var(--mantine-color-dark-4);
}

.m_c9a9a60a {
  position: absolute;
  display: flex;
  height: var(--slider-thumb-size);
  width: var(--slider-thumb-size);
  border: calc(0.25rem * 1) solid;
  border: calc(0.25rem * var(--mantine-scale)) solid;
  transform: translate(-50%, -50%);
  top: 50%;
  cursor: pointer;
  border-radius: var(--slider-radius);
  align-items: center;
  justify-content: center;
  transition:
    box-shadow 100ms ease, transform 100ms ease;
  z-index: 3;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  touch-action: none;
  outline-offset: calc(0.125rem * 1);
  outline-offset: calc(0.125rem * var(--mantine-scale));
  left: var(--slider-thumb-offset);
}

:where([dir="rtl"]) .m_c9a9a60a {
    left: auto;
    right: calc(var(--slider-thumb-offset) - var(--slider-thumb-size));
}

fieldset:disabled .m_c9a9a60a,
  .m_c9a9a60a:where([data-disabled]) {
    display: none;
  }

.m_c9a9a60a:where([data-dragging]) {
    transform: translate(-50%, -50%) scale(1.05);
    box-shadow: 0 calc(0.0625rem * 1)
      calc(0.1875rem * 1) rgba(0, 0, 0, 0.05),
    rgba(0, 0, 0, 0.05) 0 calc(0.625rem * 1)
      calc(0.9375rem * 1) calc(-0.3125rem * 1),
    rgba(0, 0, 0, 0.04) 0 calc(0.4375rem * 1)
      calc(0.4375rem * 1) calc(-0.3125rem * 1);
    box-shadow: var(--mantine-shadow-sm);
  }

:where([data-mantine-color-scheme='light']) .m_c9a9a60a {
    color: var(--slider-color);
    border-color: var(--slider-color);
    background-color: #fff;
    background-color: var(--mantine-color-white);
}

:where([data-mantine-color-scheme='dark']) .m_c9a9a60a {
    color: #fff;
    color: var(--mantine-color-white);
    border-color: #fff;
    border-color: var(--mantine-color-white);
    background-color: var(--slider-color);
}

.m_a8645c2 {
  display: flex;
  align-items: center;
  width: 100%;
  height: calc(var(--slider-size) * 2);
  cursor: pointer;
}

fieldset:disabled .m_a8645c2,
  .m_a8645c2:where([data-disabled]) {
    cursor: not-allowed;
  }

.m_c9ade57f {
  position: relative;
  width: 100%;
  height: var(--slider-size);
}

.m_c9ade57f:where([data-inverted]:not([data-disabled])) {
    --track-bg: var(--slider-color);
  }

fieldset:disabled .m_c9ade57f:where([data-inverted]),
  .m_c9ade57f:where([data-inverted][data-disabled]) {
    --track-bg: var(--slider-track-disabled-bg);
  }

.m_c9ade57f::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    border-radius: var(--slider-radius);
    left: calc(var(--slider-size) * -1);
    right: calc(var(--slider-size) * -1);
    background-color: var(--track-bg, var(--slider-track-bg));
    z-index: 0;
  }

.m_38aeed47 {
  position: absolute;
  z-index: 1;
  top: 0;
  bottom: 0;
  background-color: var(--slider-color);
  border-radius: var(--slider-radius);
  width: var(--slider-bar-width);
  left: var(--slider-bar-offset);
}

.m_38aeed47:where([data-inverted]) {
    background-color: var(--slider-track-bg);
  }

:where([data-mantine-color-scheme='light']) fieldset:disabled .m_38aeed47:where(:not([data-inverted])), :where([data-mantine-color-scheme='light']) .m_38aeed47:where([data-disabled]:not([data-inverted])) {
      background-color: #ced4da;
      background-color: var(--mantine-color-gray-4);
}

:where([data-mantine-color-scheme='dark']) fieldset:disabled .m_38aeed47:where(:not([data-inverted])), :where([data-mantine-color-scheme='dark']) .m_38aeed47:where([data-disabled]:not([data-inverted])) {
      background-color: #696969;
      background-color: var(--mantine-color-dark-3);
}

.m_b7b0423a {
  position: absolute;
  left: calc(var(--mark-offset) - var(--slider-size) / 2);
  top: 0;
  z-index: 2;
  height: 0;
  pointer-events: none;
}

.m_dd33bc19 {
  border: calc(0.125rem * 1) solid;
  border: calc(0.125rem * var(--mantine-scale)) solid;
  height: var(--slider-size);
  width: var(--slider-size);
  border-radius: calc(62.5rem * 1);
  border-radius: calc(62.5rem * var(--mantine-scale));
  background-color: #fff;
  background-color: var(--mantine-color-white);
  pointer-events: none;
}

:where([data-mantine-color-scheme='light']) .m_dd33bc19 {
    border-color: #e9ecef;
    border-color: var(--mantine-color-gray-2);
}

:where([data-mantine-color-scheme='dark']) .m_dd33bc19 {
    border-color: #424242;
    border-color: var(--mantine-color-dark-4);
}

.m_dd33bc19:where([data-filled]) {
    border-color: var(--slider-color);
  }

:where([data-mantine-color-scheme='light']) .m_dd33bc19:where([data-filled]):where([data-disabled]) {
        border-color: #ced4da;
        border-color: var(--mantine-color-gray-4);
}

:where([data-mantine-color-scheme='dark']) .m_dd33bc19:where([data-filled]):where([data-disabled]) {
        border-color: #696969;
        border-color: var(--mantine-color-dark-3);
}

.m_68c77a5b {
  transform: translate(calc(-50% + var(--slider-size) / 2), calc((0.625rem * 1) / 2));
  transform: translate(calc(-50% + var(--slider-size) / 2), calc(calc(0.625rem * 1) / 2));
  transform: translate(calc(-50% + var(--slider-size) / 2), calc(var(--mantine-spacing-xs) / 2));
  font-size: calc(0.875rem * 1);
  font-size: var(--mantine-font-size-sm);
  white-space: nowrap;
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}

:where([data-mantine-color-scheme='light']) .m_68c77a5b {
    color: #868e96;
    color: var(--mantine-color-gray-6);
}

:where([data-mantine-color-scheme='dark']) .m_68c77a5b {
    color: #828282;
    color: var(--mantine-color-dark-2);
}

.m_559cce2d {
  position: relative;
}

  .m_559cce2d:where([data-has-spoiler]) {
    margin-bottom: calc(1.5rem * 1);
    margin-bottom: calc(1.5rem * var(--mantine-scale));
  }

.m_b912df4e {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: max-height 200ms ease;
  transition: max-height var(--spoiler-transition-duration, 200ms) ease;
}

.m_b9131032 {
  position: absolute;
  left: 0;
  top: 100%;
  height: calc(1.5rem * 1);
  height: calc(1.5rem * var(--mantine-scale));
}

.m_6d731127 {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  align-items: var(--stack-align, stretch);
  justify-content: flex-start;
  justify-content: var(--stack-justify, flex-start);
  gap: calc(1rem * 1);
  gap: var(--stack-gap, var(--mantine-spacing-md));
}

.m_cbb4ea7e {
  --stepper-icon-size-xs: calc(2.125rem * var(--mantine-scale));
  --stepper-icon-size-sm: calc(2.25rem * var(--mantine-scale));
  --stepper-icon-size-md: calc(2.625rem * var(--mantine-scale));
  --stepper-icon-size-lg: calc(3rem * var(--mantine-scale));
  --stepper-icon-size-xl: calc(3.25rem * var(--mantine-scale));

  --stepper-icon-size: var(--stepper-icon-size-md);
  --stepper-color: var(--mantine-primary-color-filled);
  --stepper-content-padding: var(--mantine-spacing-md);
  --stepper-spacing: var(--mantine-spacing-md);
  --stepper-radius: calc(62.5rem * var(--mantine-scale));
  --stepper-fz: var(--mantine-font-size-md);
}

.m_aaf89d0b {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
}

.m_aaf89d0b:where([data-wrap]) {
    flex-wrap: wrap;
    gap: calc(1rem * 1) 0;
    gap: var(--mantine-spacing-md) 0;
  }

.m_aaf89d0b:where([data-orientation='vertical']) {
    flex-direction: column;
  }

.m_aaf89d0b:where([data-orientation='vertical']):where([data-icon-position='left']) {
      align-items: flex-start;
    }

.m_aaf89d0b:where([data-orientation='vertical']):where([data-icon-position='right']) {
      align-items: flex-end;
    }

.m_aaf89d0b:where([data-orientation='horizontal']) {
    flex-direction: row;
  }

.m_2a371ac9 {
  --separator-offset: calc(var(--stepper-icon-size) / 2 - calc(0.0625rem * var(--mantine-scale)));

  transition: background-color 150ms ease;
  flex: 1;
}

:where([data-mantine-color-scheme='light']) .m_2a371ac9 {
    background-color: #e9ecef;
    background-color: var(--mantine-color-gray-2);
}

:where([data-mantine-color-scheme='dark']) .m_2a371ac9 {
    background-color: #828282;
    background-color: var(--mantine-color-dark-2);
}

.m_2a371ac9:where([data-active]) {
    background-color: var(--stepper-color);
  }

.m_2a371ac9:where([data-orientation='horizontal']) {
    height: calc(0.125rem * 1);
    height: calc(0.125rem * var(--mantine-scale));
    margin-left: calc(1rem * 1);
    margin-right: calc(1rem * 1);
    margin-left: var(--mantine-spacing-md);
    margin-right: var(--mantine-spacing-md);
  }

.m_2a371ac9:where([data-orientation='vertical']) {
    width: calc(0.125rem * 1);
    width: calc(0.125rem * var(--mantine-scale));
    margin-top: calc((0.625rem * 1) / 2);
    margin-top: calc(calc(0.625rem * 1) / 2);
    margin-top: calc(var(--mantine-spacing-xs) / 2);
    margin-bottom: calc((0.625rem * 1) - (0.125rem * 1));
    margin-bottom: calc(calc(0.625rem * 1) - (0.125rem * 1));
    margin-bottom: calc(var(--mantine-spacing-xs) - (0.125rem * var(--mantine-scale)));
    margin-bottom: calc(calc(0.625rem * 1) - calc(0.125rem * 1));
    margin-bottom: calc(var(--mantine-spacing-xs) - calc(0.125rem * var(--mantine-scale)));
  }

.m_2a371ac9:where([data-orientation='vertical']):where([data-icon-position='left']) {
      margin-left: var(--separator-offset);
    }

.m_2a371ac9:where([data-orientation='vertical']):where([data-icon-position='right']) {
      margin-right: var(--separator-offset);
    }

.m_78da155d {
  padding-top: var(--stepper-content-padding);
}

.m_cbb57068 {
  --step-color: var(--stepper-color);

  display: flex;
  cursor: default;
}

.m_cbb57068:where([data-allow-click]) {
    cursor: pointer;
  }

.m_cbb57068:where([data-icon-position='left']) {
    flex-direction: row;
  }

.m_cbb57068:where([data-icon-position='right']) {
    flex-direction: row-reverse;
  }

.m_f56b1e2c {
  align-items: center;
}

.m_833edb7e {
  --separator-spacing: calc(var(--mantine-spacing-xs) / 2);

  justify-content: flex-start;
  min-height: calc(var(--stepper-icon-size) + (2rem * 1) + ((0.625rem * 1) / 2));
  min-height: calc(var(--stepper-icon-size) + calc(2rem * 1) + calc(calc(0.625rem * 1) / 2));
  min-height: calc(var(--stepper-icon-size) + var(--mantine-spacing-xl) + var(--separator-spacing));
  margin-top: calc((0.625rem * 1) / 2);
  margin-top: calc(calc(0.625rem * 1) / 2);
  margin-top: var(--separator-spacing);
  overflow: hidden;
}

.m_833edb7e:where(:first-of-type) {
    margin-top: 0;
  }

.m_833edb7e:where(:last-of-type) .m_6496b3f3 {
    display: none;
  }

.m_818e70b {
  position: relative;
}

.m_6496b3f3 {
  top: calc(var(--stepper-icon-size) + var(--separator-spacing));
  left: calc(var(--stepper-icon-size) / 2);
  height: 100vh;
  position: absolute;
  border-left: calc(0.125rem * 1) solid;
  border-left: calc(0.125rem * var(--mantine-scale)) solid;
}

:where([data-mantine-color-scheme='light']) .m_6496b3f3 {
    border-color: #f1f3f5;
    border-color: var(--mantine-color-gray-1);
}

:where([data-mantine-color-scheme='dark']) .m_6496b3f3 {
    border-color: #3b3b3b;
    border-color: var(--mantine-color-dark-5);
}

.m_6496b3f3:where([data-active]) {
    border-color: var(--stepper-color);
  }

.m_1959ad01 {
  height: var(--stepper-icon-size);
  width: var(--stepper-icon-size);
  min-height: var(--stepper-icon-size);
  min-width: var(--stepper-icon-size);
  border-radius: var(--stepper-radius);
  font-size: var(--stepper-fz);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-weight: bold;
  transition:
    background-color 150ms ease, border-color 150ms ease;
  border: calc(0.125rem * 1) solid;
  border: calc(0.125rem * var(--mantine-scale)) solid;
}

:where([data-mantine-color-scheme='light']) .m_1959ad01 {
    background-color: #f1f3f5;
    background-color: var(--mantine-color-gray-1);
    border-color: #f1f3f5;
    border-color: var(--mantine-color-gray-1);
    color: #495057;
    color: var(--mantine-color-gray-7);
}

:where([data-mantine-color-scheme='dark']) .m_1959ad01 {
    background-color: #3b3b3b;
    background-color: var(--mantine-color-dark-5);
    border-color: #3b3b3b;
    border-color: var(--mantine-color-dark-5);
    color: #b8b8b8;
    color: var(--mantine-color-dark-1);
}

.m_1959ad01:where([data-progress]) {
    border-color: var(--step-color);
  }

.m_1959ad01:where([data-completed]) {
    color: #fff;
    color: var(--stepper-icon-color, var(--mantine-color-white));
    background-color: var(--step-color);
    border-color: var(--step-color);
  }

.m_a79331dc {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  color: var(--stepper-icon-color, var(--mantine-color-white));
}

.m_1956aa2a {
  display: flex;
  flex-direction: column;
}

.m_1956aa2a:where([data-icon-position='left']) {
    margin-left: calc(0.75rem * 1);
    margin-left: var(--mantine-spacing-sm);
  }

.m_1956aa2a:where([data-icon-position='right']) {
    text-align: right;
    margin-right: calc(0.75rem * 1);
    margin-right: var(--mantine-spacing-sm);
  }

:where([dir="rtl"]) .m_1956aa2a:where([data-icon-position='right']) {
      text-align: left;
}

.m_12051f6c {
  font-weight: 500;
  font-size: var(--stepper-fz);
  line-height: 1;
}

.m_164eea74 {
  margin-top: calc(var(--stepper-spacing) / 3);
  margin-bottom: calc(var(--stepper-spacing) / 3);
  font-size: calc(var(--stepper-fz) - (0.125rem * 1));
  font-size: calc(var(--stepper-fz) - (0.125rem * var(--mantine-scale)));
  font-size: calc(var(--stepper-fz) - calc(0.125rem * 1));
  font-size: calc(var(--stepper-fz) - calc(0.125rem * var(--mantine-scale)));
  line-height: 1;
  color: var(--mantine-color-dimmed);
}

.m_5f93f3bb {
  --switch-height-xs: calc(1rem * var(--mantine-scale));
  --switch-height-sm: calc(1.25rem * var(--mantine-scale));
  --switch-height-md: calc(1.5rem * var(--mantine-scale));
  --switch-height-lg: calc(1.875rem * var(--mantine-scale));
  --switch-height-xl: calc(2.25rem * var(--mantine-scale));

  --switch-width-xs: calc(2rem * var(--mantine-scale));
  --switch-width-sm: calc(2.375rem * var(--mantine-scale));
  --switch-width-md: calc(2.875rem * var(--mantine-scale));
  --switch-width-lg: calc(3.5rem * var(--mantine-scale));
  --switch-width-xl: calc(4.5rem * var(--mantine-scale));

  --switch-thumb-size-xs: calc(0.75rem * var(--mantine-scale));
  --switch-thumb-size-sm: calc(0.875rem * var(--mantine-scale));
  --switch-thumb-size-md: calc(1.125rem * var(--mantine-scale));
  --switch-thumb-size-lg: calc(1.375rem * var(--mantine-scale));
  --switch-thumb-size-xl: calc(1.75rem * var(--mantine-scale));

  --switch-label-font-size-xs: calc(0.3125rem * var(--mantine-scale));
  --switch-label-font-size-sm: calc(0.375rem * var(--mantine-scale));
  --switch-label-font-size-md: calc(0.4375rem * var(--mantine-scale));
  --switch-label-font-size-lg: calc(0.5625rem * var(--mantine-scale));
  --switch-label-font-size-xl: calc(0.6875rem * var(--mantine-scale));

  --switch-track-label-padding-xs: calc(0.0625rem * var(--mantine-scale));
  --switch-track-label-padding-sm: calc(0.125rem * var(--mantine-scale));
  --switch-track-label-padding-md: calc(0.125rem * var(--mantine-scale));
  --switch-track-label-padding-lg: calc(0.1875rem * var(--mantine-scale));
  --switch-track-label-padding-xl: calc(0.1875rem * var(--mantine-scale));

  --switch-height: var(--switch-height-sm);
  --switch-width: var(--switch-width-sm);
  --switch-thumb-size: var(--switch-thumb-size-sm);
  --switch-label-font-size: var(--switch-label-font-size-sm);
  --switch-track-label-padding: var(--switch-track-label-padding-sm);
  --switch-radius: calc(62.5rem * var(--mantine-scale));
  --switch-color: var(--mantine-primary-color-filled);

  position: relative;
}

.m_926b4011 {
  height: 0;
  width: 0;
  opacity: 0;
  margin: 0;
  padding: 0;
  position: absolute;
  overflow: hidden;
  white-space: nowrap;
}

.m_9307d992 {
  -webkit-tap-highlight-color: transparent;
  cursor: default;
  cursor: var(--switch-cursor, var(--mantine-cursor-type));
  overflow: hidden;
  position: relative;
  border-radius: var(--switch-radius);
  background-color: var(--switch-bg);
  border: 1px solid var(--switch-bd);
  height: var(--switch-height);
  min-width: var(--switch-width);
  margin: 0;
  transition:
    background-color 150ms ease, border-color 150ms ease;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  display: flex;
  align-items: center;
  font-size: var(--switch-label-font-size);
  font-weight: 600;
  order: 1;
  order: var(--switch-order, 1);
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  z-index: 0;
  line-height: 0;
  color: var(--switch-text-color);
}

.m_9307d992:where([data-without-labels]) {
    width: var(--switch-width);
  }

.m_926b4011:focus-visible + .m_9307d992 {
    outline: 2px solid var(--mantine-primary-color-filled);
    outline-offset: calc(0.125rem * 1);
    outline-offset: calc(0.125rem * var(--mantine-scale));
  }

.m_926b4011:checked + .m_9307d992 {
    --switch-bg: var(--switch-color);
    --switch-bd: var(--switch-color);
    --switch-text-color: var(--mantine-color-white);
  }

.m_926b4011:disabled + .m_9307d992,
  .m_926b4011[data-disabled] + .m_9307d992 {
    --switch-bg: var(--switch-disabled-color);
    --switch-bd: var(--switch-disabled-color);
    --switch-cursor: not-allowed;
  }

[data-mantine-color-scheme='light'] .m_9307d992 {
    --switch-bg: var(--mantine-color-gray-2);
    --switch-bd: var(--mantine-color-gray-3);
    --switch-text-color: var(--mantine-color-gray-6);
    --switch-disabled-color: var(--mantine-color-gray-2);
}

[data-mantine-color-scheme='dark'] .m_9307d992 {
    --switch-bg: var(--mantine-color-dark-6);
    --switch-bd: var(--mantine-color-dark-4);
    --switch-text-color: var(--mantine-color-dark-1);
    --switch-disabled-color: var(--mantine-color-dark-4);
}

.m_9307d992[data-error] {
    --switch-bd: var(--mantine-color-error);
  }

.m_9307d992[data-label-position='left'] {
    --switch-order: 2;
  }

.m_93039a1d {
  position: absolute;
  z-index: 1;
  border-radius: var(--switch-radius);
  display: flex;
  background-color: #fff;
  background-color: var(--switch-thumb-bg, var(--mantine-color-white));
  height: var(--switch-thumb-size);
  width: var(--switch-thumb-size);
  border: 1px solid var(--switch-thumb-bd);
  left: var(--switch-thumb-start, var(--switch-track-label-padding));
  transition: left 150ms ease;
}

.m_93039a1d > * {
    margin: auto;
  }

.m_926b4011:checked + * > .m_93039a1d {
    --switch-thumb-start: calc(100% - var(--switch-thumb-size) - var(--switch-track-label-padding));
    --switch-thumb-bd: var(--mantine-color-white);
  }

.m_926b4011:disabled + * > .m_93039a1d,
  .m_926b4011[data-disabled] + * > .m_93039a1d {
    --switch-thumb-bd: var(--switch-thumb-bg-disabled);
    --switch-thumb-bg: var(--switch-thumb-bg-disabled);
  }

[data-mantine-color-scheme='light'] .m_93039a1d {
    --switch-thumb-bd: var(--mantine-color-gray-3);
    --switch-thumb-bg-disabled: var(--mantine-color-gray-0);
}

[data-mantine-color-scheme='dark'] .m_93039a1d {
    --switch-thumb-bd: var(--mantine-color-white);
    --switch-thumb-bg-disabled: var(--mantine-color-dark-3);
}

.m_8277e082 {
  height: 100%;
  display: grid;
  align-content: center;
  justify-content: center;
  place-content: center;
  min-width: calc(var(--switch-width) - var(--switch-thumb-size));
  padding-left: var(--switch-track-label-padding);
  padding-right: var(--switch-track-label-padding);
  margin-left: calc(var(--switch-thumb-size) + var(--switch-track-label-padding));
  transition: margin 150ms ease;
}

.m_926b4011:checked + * > .m_8277e082 {
    margin-right: calc(var(--switch-thumb-size) + var(--switch-track-label-padding));
    margin-left: 0;
  }

.m_b23fa0ef {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  line-height: 1.55;
  line-height: var(--mantine-line-height);
  font-size: calc(0.875rem * 1);
  font-size: var(--mantine-font-size-sm);
  table-layout: auto;
  table-layout: var(--table-layout, auto);
  caption-side: bottom;
  caption-side: var(--table-caption-side, bottom);
  border: none;
}

  :where([data-mantine-color-scheme='light']) .m_b23fa0ef {
    --table-hover-color: var(--mantine-color-gray-1);
    --table-striped-color: var(--mantine-color-gray-0);
    --table-border-color: var(--mantine-color-gray-3);
}

  :where([data-mantine-color-scheme='dark']) .m_b23fa0ef {
    --table-hover-color: var(--mantine-color-dark-5);
    --table-striped-color: var(--mantine-color-dark-6);
    --table-border-color: var(--mantine-color-dark-4);
}

  .m_b23fa0ef:where([data-with-table-border]) {
    border: calc(0.0625rem * 1) solid var(--table-border-color);
    border: calc(0.0625rem * var(--mantine-scale)) solid var(--table-border-color);
  }

  .m_b23fa0ef:where([data-tabular-nums]) {
    font-feature-settings: "tnum";
    font-variant-numeric: tabular-nums;
  }

  .m_b23fa0ef:where([data-variant='vertical']) :where(.m_4e7aa4f3) {
    font-weight: 500;
  }

  :where([data-mantine-color-scheme='light']) .m_b23fa0ef:where([data-variant='vertical']) :where(.m_4e7aa4f3) {
      background-color: #f8f9fa;
      background-color: var(--mantine-color-gray-0);
}

  :where([data-mantine-color-scheme='dark']) .m_b23fa0ef:where([data-variant='vertical']) :where(.m_4e7aa4f3) {
      background-color: #2e2e2e;
      background-color: var(--mantine-color-dark-6);
}

.m_4e7aa4f3 {
  text-align: left;
}

:where([dir="rtl"]) .m_4e7aa4f3 {
    text-align: right;
}

.m_4e7aa4fd {
  border-bottom: none;
  background-color: transparent;
}

@media (hover: hover) {
    .m_4e7aa4fd:hover:where([data-hover]) {
      background-color: var(--tr-hover-bg);
    }
}

@media (hover: none) {
    .m_4e7aa4fd:active:where([data-hover]) {
      background-color: var(--tr-hover-bg);
    }
}

.m_4e7aa4fd:where([data-with-row-border]) {
    border-bottom: calc(0.0625rem * 1) solid var(--table-border-color);
    border-bottom: calc(0.0625rem * var(--mantine-scale)) solid var(--table-border-color);
  }

.m_4e7aa4ef,
.m_4e7aa4f3 {
  padding: var(--table-vertical-spacing) calc(0.625rem * 1);
  padding: var(--table-vertical-spacing) var(--table-horizontal-spacing, var(--mantine-spacing-xs));
}

.m_4e7aa4ef:where([data-with-column-border]:not(:last-child)), .m_4e7aa4f3:where([data-with-column-border]:not(:last-child)) {
    border-right: calc(0.0625rem * 1) solid var(--table-border-color);
    border-right: calc(0.0625rem * var(--mantine-scale)) solid var(--table-border-color);
  }

.m_b2404537 :where(tr):where([data-with-row-border]:last-of-type) {
      border-bottom: none;
    }

.m_b2404537 :where(tr):where([data-striped='odd']:nth-of-type(odd)) {
      background-color: var(--table-striped-color);
    }

.m_b2404537 :where(tr):where([data-striped='even']:nth-of-type(even)) {
      background-color: var(--table-striped-color);
    }

.m_b2404537 :where(tr)[data-hover] {
      --tr-hover-bg: var(--table-highlight-on-hover-color, var(--table-hover-color));
    }

.m_b242d975 {
  top: 0;
  top: var(--table-sticky-header-offset, 0);
  z-index: 3;
}

.m_b242d975:where([data-sticky]) {
    position: sticky;
    background-color: var(--mantine-color-body);
  }

.m_9e5a3ac7 {
  color: var(--mantine-color-dimmed);
}

.m_9e5a3ac7:where([data-side='top']) {
    margin-bottom: calc(0.625rem * 1);
    margin-bottom: var(--mantine-spacing-xs);
  }

.m_9e5a3ac7:where([data-side='bottom']) {
    margin-top: calc(0.625rem * 1);
    margin-top: var(--mantine-spacing-xs);
  }

.m_a100c15 {
  overflow-x: var(--table-overflow);
}

.m_62259741 {
  min-width: var(--table-min-width);
}

.m_89d60db1 {
  display: block;
  display: var(--tabs-display);
  flex-direction: row;
  flex-direction: var(--tabs-flex-direction);

  --tab-justify: flex-start;
  --tabs-list-direction: row;
  --tabs-panel-grow: unset;
  --tabs-display: block;
  --tabs-flex-direction: row;
  --tabs-list-border-width: 0;
  --tabs-list-border-size: 0 0 var(--tabs-list-border-width) 0;
  --tabs-list-gap: unset;

  --tabs-list-line-bottom: 0;
  --tabs-list-line-top: unset;
  --tabs-list-line-start: 0;
  --tabs-list-line-end: 0;

  --tab-radius: var(--tabs-radius) var(--tabs-radius) 0 0;
  --tab-border-width: 0 0 var(--tabs-list-border-width) 0;
}

  .m_89d60db1[data-inverted] {
    --tabs-list-line-bottom: unset;
    --tabs-list-line-top: 0;
    --tab-radius: 0 0 var(--tabs-radius) var(--tabs-radius);
    --tab-border-width: var(--tabs-list-border-width) 0 0 0;
  }

  .m_89d60db1[data-inverted] .m_576c9d4::before {
      top: 0;
      bottom: auto;
      bottom: initial;
    }

  .m_89d60db1[data-orientation='vertical'] {
    --tabs-list-line-start: unset;
    --tabs-list-line-end: 0;
    --tabs-list-line-top: 0;
    --tabs-list-line-bottom: 0;
    --tabs-list-border-size: 0 var(--tabs-list-border-width) 0 0;
    --tab-border-width: 0 var(--tabs-list-border-width) 0 0;
    --tab-radius: var(--tabs-radius) 0 0 var(--tabs-radius);
    --tabs-list-direction: column;
    --tabs-panel-grow: 1;
    --tabs-display: flex;
  }

  [dir="rtl"] .m_89d60db1[data-orientation='vertical'] {
      --tabs-list-border-size: 0 0 0 var(--tabs-list-border-width);
      --tab-border-width: 0 0 0 var(--tabs-list-border-width);
      --tab-radius: 0 var(--tabs-radius) var(--tabs-radius) 0;
}

  .m_89d60db1[data-orientation='vertical'][data-placement='right'] {
      --tabs-flex-direction: row-reverse;
      --tabs-list-line-start: 0;
      --tabs-list-line-end: unset;
      --tabs-list-border-size: 0 0 0 var(--tabs-list-border-width);
      --tab-border-width: 0 0 0 var(--tabs-list-border-width);
      --tab-radius: 0 var(--tabs-radius) var(--tabs-radius) 0;
    }

  [dir="rtl"] .m_89d60db1[data-orientation='vertical'][data-placement='right'] {
        --tabs-list-border-size: 0 var(--tabs-list-border-width) 0 0;
        --tab-border-width: 0 var(--tabs-list-border-width) 0 0;
        --tab-radius: var(--tabs-radius) 0 0 var(--tabs-radius);
}

  [data-mantine-color-scheme='light'] .m_89d60db1 {
    --tab-border-color: var(--mantine-color-gray-3);
}

  [data-mantine-color-scheme='dark'] .m_89d60db1 {
    --tab-border-color: var(--mantine-color-dark-4);
}

  .m_89d60db1[data-orientation='horizontal'] {
    --tab-justify: center;
  }

  .m_89d60db1[data-variant='default'] {
    --tabs-list-border-width: calc(0.125rem * var(--mantine-scale));
  }

  [data-mantine-color-scheme='light'] .m_89d60db1[data-variant='default'] {
      --tab-hover-color: var(--mantine-color-gray-0);
}

  [data-mantine-color-scheme='dark'] .m_89d60db1[data-variant='default'] {
      --tab-hover-color: var(--mantine-color-dark-6);
}

  .m_89d60db1[data-variant='outline'] {
    --tabs-list-border-width: calc(0.0625rem * var(--mantine-scale));
  }

  .m_89d60db1[data-variant='pills'] {
    --tabs-list-gap: calc(var(--mantine-spacing-sm) / 2);
  }

  [data-mantine-color-scheme='light'] .m_89d60db1[data-variant='pills'] {
      --tab-hover-color: var(--mantine-color-gray-0);
}

  [data-mantine-color-scheme='dark'] .m_89d60db1[data-variant='pills'] {
      --tab-hover-color: var(--mantine-color-dark-6);
}

.m_89d33d6d {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  justify-content: var(--tabs-justify, flex-start);
  flex-direction: var(--tabs-list-direction);
  gap: var(--tabs-list-gap);

  --tab-grow: unset;
}

.m_89d33d6d[data-grow] {
    --tab-grow: 1;
  }

.m_b0c91715 {
  flex-grow: var(--tabs-panel-grow);
}

.m_4ec4dce6 {
  position: relative;
  padding: calc(0.625rem * 1) calc(1rem * 1);
  padding: var(--mantine-spacing-xs) var(--mantine-spacing-md);
  font-size: calc(0.875rem * 1);
  font-size: var(--mantine-font-size-sm);
  white-space: nowrap;
  z-index: 0;
  display: flex;
  align-items: center;
  line-height: 1;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  flex-grow: var(--tab-grow);
  justify-content: var(--tab-justify);
}

.m_4ec4dce6:disabled,
  .m_4ec4dce6[data-disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }

.m_4ec4dce6:focus {
    z-index: 1;
  }

.m_fc420b1f {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0;
  margin-left: var(--tab-section-margin-left, 0);
  margin-right: 0;
  margin-right: var(--tab-section-margin-right, 0);
}

.m_fc420b1f[data-position='left']:not(:only-child) {
      --tab-section-margin-right: var(--mantine-spacing-xs);
    }

[dir="rtl"] .m_fc420b1f[data-position='left']:not(:only-child) {
        --tab-section-margin-right: 0rem;
        --tab-section-margin-left: var(--mantine-spacing-xs);
}

.m_fc420b1f[data-position='right']:not(:only-child) {
      --tab-section-margin-left: var(--mantine-spacing-xs);
    }

[dir="rtl"] .m_fc420b1f[data-position='right']:not(:only-child) {
        --tab-section-margin-left: 0rem;
        --tab-section-margin-right: var(--mantine-spacing-xs);
}

/*************************************** default variant ***************************************/
.m_576c9d4 {
  position: relative;
}
.m_576c9d4::before {
    content: '';
    position: absolute;
    border-color: var(--tab-border-color);
    border-width: var(--tabs-list-border-size);
    border-style: solid;
    bottom: var(--tabs-list-line-bottom);
    left: var(--tabs-list-line-start);
    right: var(--tabs-list-line-end);
    top: var(--tabs-list-line-top);
  }

.m_539e827b {
  border-radius: var(--tab-radius);
  border-width: var(--tab-border-width);
  border-style: solid;
  border-color: transparent;
  background-color: transparent;
  background-color: var(--tab-bg);

  --tab-bg: transparent;
}

.m_539e827b:where([data-active]) {
    border-color: var(--tabs-color);
  }

@media (hover: hover) {

  .m_539e827b:hover {
    --tab-bg: var(--tab-hover-color);
  }

    .m_539e827b:hover:where(:not([data-active])) {
      border-color: var(--tab-border-color);
    }
}

@media (hover: none) {

  .m_539e827b:active {
    --tab-bg: var(--tab-hover-color);
  }

    .m_539e827b:active:where(:not([data-active])) {
      border-color: var(--tab-border-color);
    }
}

@media (hover: hover) {

  .m_539e827b:disabled:hover, .m_539e827b[data-disabled]:hover {
      --tab-bg: transparent;
  }
}

@media (hover: none) {

  .m_539e827b:disabled:active, .m_539e827b[data-disabled]:active {
      --tab-bg: transparent;
  }
}

/*************************************** outline variant ***************************************/
.m_6772fbd5 {
  position: relative;
}
.m_6772fbd5::before {
    content: '';
    position: absolute;
    border-color: var(--tab-border-color);
    border-width: var(--tabs-list-border-size);
    border-style: solid;
    bottom: var(--tabs-list-line-bottom);
    left: var(--tabs-list-line-start);
    right: var(--tabs-list-line-end);
    top: var(--tabs-list-line-top);
  }

.m_b59ab47c {
  border-top: calc(0.0625rem * 1) solid transparent;
  border-top: calc(0.0625rem * var(--mantine-scale)) solid transparent;
  border-bottom: calc(0.0625rem * 1) solid transparent;
  border-bottom: calc(0.0625rem * var(--mantine-scale)) solid transparent;
  border-right: calc(0.0625rem * 1) solid transparent;
  border-right: calc(0.0625rem * var(--mantine-scale)) solid transparent;
  border-left: calc(0.0625rem * 1) solid transparent;
  border-left: calc(0.0625rem * var(--mantine-scale)) solid transparent;
  border-top-color: transparent;
  border-top-color: var(--tab-border-top-color);
  border-bottom-color: transparent;
  border-bottom-color: var(--tab-border-bottom-color);
  border-radius: var(--tab-radius);
  position: relative;

  --tab-border-bottom-color: transparent;
  --tab-border-top-color: transparent;
  --tab-border-inline-end-color: transparent;
  --tab-border-inline-start-color: transparent;
}

.m_b59ab47c:where([data-active])::before {
      content: '';
      position: absolute;
      background-color: var(--tab-border-color);
      bottom: calc(-0.0625rem * 1);
      bottom: var(--tab-before-bottom, calc(-0.0625rem * var(--mantine-scale)));
      left: calc(-0.0625rem * 1);
      left: var(--tab-before-left, calc(-0.0625rem * var(--mantine-scale)));
      right: auto;
      right: var(--tab-before-right, auto);
      top: auto;
      top: var(--tab-before-top, auto);
      width: calc(0.0625rem * 1);
      width: calc(0.0625rem * var(--mantine-scale));
      height: calc(0.0625rem * 1);
      height: calc(0.0625rem * var(--mantine-scale));
    }

.m_b59ab47c:where([data-active])::after {
      content: '';
      position: absolute;
      background-color: var(--tab-border-color);
      bottom: calc(-0.0625rem * 1);
      bottom: var(--tab-after-bottom, calc(-0.0625rem * var(--mantine-scale)));
      right: calc(-0.0625rem * 1);
      right: var(--tab-after-right, calc(-0.0625rem * var(--mantine-scale)));
      left: auto;
      left: var(--tab-after-left, auto);
      top: auto;
      top: var(--tab-after-top, auto);
      width: calc(0.0625rem * 1);
      width: calc(0.0625rem * var(--mantine-scale));
      height: calc(0.0625rem * 1);
      height: calc(0.0625rem * var(--mantine-scale));
    }

.m_b59ab47c:where([data-active]) {

    border-top-color: var(--tab-border-top-color);
    border-bottom-color: var(--tab-border-bottom-color);
    border-left-color: var(--tab-border-inline-start-color);
    border-right-color: var(--tab-border-inline-end-color);

    --tab-border-top-color: var(--tab-border-color);
    --tab-border-inline-start-color: var(--tab-border-color);
    --tab-border-inline-end-color: var(--tab-border-color);
    --tab-border-bottom-color: var(--mantine-color-body);
}

.m_b59ab47c:where([data-active])[data-inverted] {
      --tab-border-bottom-color: var(--tab-border-color);
      --tab-border-top-color: var(--mantine-color-body);

      --tab-before-bottom: auto;
      --tab-before-top: calc(-0.0625rem * var(--mantine-scale));
      --tab-after-bottom: auto;
      --tab-after-top: calc(-0.0625rem * var(--mantine-scale));
    }

.m_b59ab47c:where([data-active])[data-orientation='vertical'][data-placement='left'] {
        --tab-border-inline-end-color: var(--mantine-color-body);
        --tab-border-inline-start-color: var(--tab-border-color);
        --tab-border-bottom-color: var(--tab-border-color);

        --tab-before-right: calc(-0.0625rem * var(--mantine-scale));
        --tab-before-left: auto;
        --tab-before-bottom: auto;
        --tab-before-top: calc(-0.0625rem * var(--mantine-scale));
        --tab-after-left: auto;
        --tab-after-right: calc(-0.0625rem * var(--mantine-scale));
      }

[dir="rtl"] .m_b59ab47c:where([data-active])[data-orientation='vertical'][data-placement='left'] {
          --tab-before-right: auto;
          --tab-before-left: calc(-0.0625rem * var(--mantine-scale));
          --tab-after-left: calc(-0.0625rem * var(--mantine-scale));
          --tab-after-right: auto;
}

.m_b59ab47c:where([data-active])[data-orientation='vertical'][data-placement='right'] {
        --tab-border-inline-start-color: var(--mantine-color-body);
        --tab-border-inline-end-color: var(--tab-border-color);
        --tab-border-bottom-color: var(--tab-border-color);

        --tab-before-left: calc(-0.0625rem * var(--mantine-scale));
        --tab-before-right: auto;
        --tab-before-bottom: auto;
        --tab-before-top: calc(-0.0625rem * var(--mantine-scale));
        --tab-after-right: auto;
        --tab-after-left: calc(-0.0625rem * var(--mantine-scale));
      }

[dir="rtl"] .m_b59ab47c:where([data-active])[data-orientation='vertical'][data-placement='right'] {
          --tab-before-left: auto;
          --tab-before-right: calc(-0.0625rem * var(--mantine-scale));
          --tab-after-right: calc(-0.0625rem * var(--mantine-scale));
          --tab-after-left: auto;
}

/*************************************** pills variant ***************************************/
.m_c3381914 {
  border-radius: var(--tabs-radius);
  background-color: transparent;
  background-color: var(--tab-bg);
  color: inherit;
  color: var(--tab-color);

  --tab-bg: transparent;
  --tab-color: inherit;
}
@media (hover: hover) {

  .m_c3381914:not([data-disabled]):hover {
      --tab-bg: var(--tab-hover-color);
  }
}
@media (hover: none) {

  .m_c3381914:not([data-disabled]):active {
      --tab-bg: var(--tab-hover-color);
  }
}
.m_c3381914[data-active][data-active] {
    --tab-bg: var(--tabs-color);
    --tab-color: var(--tabs-text-color, var(--mantine-color-white));
  }
@media (hover: hover) {

  .m_c3381914[data-active][data-active]:hover {
      --tab-bg: var(--tabs-color);
  }
}
@media (hover: none) {

  .m_c3381914[data-active][data-active]:active {
      --tab-bg: var(--tabs-color);
  }
}

.m_7341320d {
  --ti-size-xs: calc(1.125rem * var(--mantine-scale));
  --ti-size-sm: calc(1.375rem * var(--mantine-scale));
  --ti-size-md: calc(1.75rem * var(--mantine-scale));
  --ti-size-lg: calc(2.125rem * var(--mantine-scale));
  --ti-size-xl: calc(2.75rem * var(--mantine-scale));
  --ti-size: var(--ti-size-md);

  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;

  width: calc(1.75rem * 1);

  width: var(--ti-size);
  height: calc(1.75rem * 1);
  height: var(--ti-size);
  min-width: calc(1.75rem * 1);
  min-width: var(--ti-size);
  min-height: calc(1.75rem * 1);
  min-height: var(--ti-size);
  border-radius: calc(0.25rem * 1);
  border-radius: var(--ti-radius, var(--mantine-radius-default));
  background: var(--ti-bg, var(--mantine-primary-color-filled));
  color: #fff;
  color: var(--ti-color, var(--mantine-color-white));
  border: 1px solid transparent;
  border: var(--ti-bd, 1px solid transparent);
}

.m_43657ece {
  --offset: calc(var(--tl-bullet-size) / 2 + var(--tl-line-width) / 2);
  --tl-bullet-size: calc(1.25rem * var(--mantine-scale));
  --tl-line-width: calc(0.25rem * var(--mantine-scale));
  --tl-radius: calc(62.5rem * var(--mantine-scale));
  --tl-color: var(--mantine-primary-color-filled);
}

  .m_43657ece:where([data-align='left']) {
    padding-left: var(--offset);
  }

  .m_43657ece:where([data-align='right']) {
    padding-right: var(--offset);
  }

.m_2ebe8099 {
  font-weight: 500;
  line-height: 1;
  margin-bottom: calc((0.625rem * 1) / 2);
  margin-bottom: calc(calc(0.625rem * 1) / 2);
  margin-bottom: calc(var(--mantine-spacing-xs) / 2);
}

.m_436178ff {
  --item-border: var(--tl-line-width) var(--tli-border-style, solid) var(--item-border-color);

  position: relative;
  color: var(--mantine-color-text);
}

.m_436178ff::before {
    content: '';
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    left: var(--timeline-line-left, 0);
    right: 0;
    right: var(--timeline-line-right, 0);
    bottom: calc((2rem * 1) * -1);
    bottom: calc(calc(2rem * 1) * -1);
    bottom: calc(var(--mantine-spacing-xl) * -1);
    border-left: var(--item-border);
    display: none;
    display: var(--timeline-line-display, none);
  }

.m_43657ece[data-align='left'] .m_436178ff::before {
      --timeline-line-left: calc(var(--tl-line-width) * -1);
      --timeline-line-right: auto;
    }

[dir="rtl"] .m_43657ece[data-align='left'] .m_436178ff::before {
        --timeline-line-left: auto;
        --timeline-line-right: calc(var(--tl-line-width) * -1);
}

.m_43657ece[data-align='right'] .m_436178ff::before {
      --timeline-line-left: auto;
      --timeline-line-right: calc(var(--tl-line-width) * -1);
    }

[dir="rtl"] .m_43657ece[data-align='right'] .m_436178ff::before {
        --timeline-line-left: calc(var(--tl-line-width) * -1);
        --timeline-line-right: auto;
}

.m_43657ece:where([data-align='left']) .m_436178ff {
    padding-left: var(--offset);
    text-align: left;
  }

.m_43657ece:where([data-align='right']) .m_436178ff {
    padding-right: var(--offset);
    text-align: right;
  }

:where([data-mantine-color-scheme='light']) .m_436178ff {
    --item-border-color: var(--mantine-color-gray-3);
}

:where([data-mantine-color-scheme='dark']) .m_436178ff {
    --item-border-color: var(--mantine-color-dark-4);
}

.m_436178ff:where([data-line-active])::before {
      border-color: var(--tli-color, var(--tl-color));
    }

.m_436178ff:where(:not(:last-of-type)) {
    --timeline-line-display: block;
  }

.m_436178ff:where(:not(:first-of-type)) {
    margin-top: calc(2rem * 1);
    margin-top: var(--mantine-spacing-xl);
  }

.m_8affcee1 {
  width: var(--tl-bullet-size);
  height: var(--tl-bullet-size);
  border-radius: var(--tli-radius, var(--tl-radius));
  border: var(--tl-line-width) solid;
  background-color: var(--mantine-color-body);
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--mantine-color-text);
}

:where([data-mantine-color-scheme='light']) .m_8affcee1 {
    border-color: #dee2e6;
    border-color: var(--mantine-color-gray-3);
}

:where([data-mantine-color-scheme='dark']) .m_8affcee1 {
    border-color: #424242;
    border-color: var(--mantine-color-dark-4);
}

.m_43657ece:where([data-align='left']) .m_8affcee1 {
    left: calc((var(--tl-bullet-size) / 2 + var(--tl-line-width) / 2) * -1);
    right: auto;
  }

:where([dir="rtl"]) .m_43657ece:where([data-align='left']) .m_8affcee1 {
      left: auto;
      right: calc((var(--tl-bullet-size) / 2 + var(--tl-line-width) / 2) * -1);
}

.m_43657ece:where([data-align='right']) .m_8affcee1 {
    left: auto;
    right: calc((var(--tl-bullet-size) / 2 + var(--tl-line-width) / 2) * -1);
  }

:where([dir="rtl"]) .m_43657ece:where([data-align='right']) .m_8affcee1 {
      left: calc((var(--tl-bullet-size) / 2 + var(--tl-line-width) / 2) * -1);
      right: auto;
}

.m_8affcee1:where([data-with-child]) {
    border-width: var(--tl-line-width);
  }

:where([data-mantine-color-scheme='light']) .m_8affcee1:where([data-with-child]) {
      background-color: #dee2e6;
      background-color: var(--mantine-color-gray-3);
}

:where([data-mantine-color-scheme='dark']) .m_8affcee1:where([data-with-child]) {
      background-color: #424242;
      background-color: var(--mantine-color-dark-4);
}

.m_8affcee1:where([data-active]) {
    border-color: var(--tli-color, var(--tl-color));
    background-color: #fff;
    background-color: var(--mantine-color-white);
    color: #fff;
    color: var(--tl-icon-color, var(--mantine-color-white));
  }

.m_8affcee1:where([data-active]):where([data-with-child]) {
      background-color: var(--tli-color, var(--tl-color));
      color: #fff;
      color: var(--tl-icon-color, var(--mantine-color-white));
    }

.m_43657ece:where([data-align='left']) .m_540e8f41 {
    padding-left: var(--offset);
    text-align: left;
  }

:where([dir="rtl"]) .m_43657ece:where([data-align='left']) .m_540e8f41 {
      text-align: right;
}

.m_43657ece:where([data-align='right']) .m_540e8f41 {
    padding-right: var(--offset);
    text-align: right;
  }

:where([dir="rtl"]) .m_43657ece:where([data-align='right']) .m_540e8f41 {
      text-align: left;
}

.m_8a5d1357 {
  margin: 0;
  font-weight: var(--title-fw);
  font-size: var(--title-fz);
  line-height: var(--title-lh);
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica,
    Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
  font-family: var(--mantine-font-family-headings);
  text-wrap: var(--title-text-wrap, var(--mantine-heading-text-wrap));
}

  .m_8a5d1357:where([data-line-clamp]) {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: var(--title-line-clamp);
    -webkit-box-orient: vertical;
  }

.m_f698e191 {
  --level-offset: var(--mantine-spacing-lg);
  margin: 0;
  padding: 0;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}

.m_75f3ecf {
  margin: 0;
  padding: 0;
}

.m_f6970eb1 {
  cursor: pointer;
  list-style: none;
  margin: 0;
  padding: 0;
  outline: 0;
}

.m_f6970eb1:focus-visible > .m_dc283425 {
      outline: 2px solid var(--mantine-primary-color-filled);
      outline-offset: calc(0.125rem * 1);
      outline-offset: calc(0.125rem * var(--mantine-scale));
    }

.m_dc283425 {
  padding-left: var(--label-offset);
}

:where([data-mantine-color-scheme='light']) .m_dc283425:where([data-selected]) {
      background-color: #f1f3f5;
      background-color: var(--mantine-color-gray-1);
}

:where([data-mantine-color-scheme='dark']) .m_dc283425:where([data-selected]) {
      background-color: #3b3b3b;
      background-color: var(--mantine-color-dark-5);
}

.m_d6493fad :first-child {
    margin-top: 0;
  }
  .m_d6493fad :last-child {
    margin-bottom: 0;
  }
  .m_d6493fad :where(h1, h2, h3, h4, h5, h6) {
    margin-bottom: calc(0.625rem * 1);
    margin-bottom: var(--mantine-spacing-xs);
    text-wrap: var(--mantine-heading-text-wrap);
  }
  .m_d6493fad :where(h1) {
    margin-top: calc(1.5 * (2rem * 1));
    margin-top: calc(1.5 * calc(2rem * 1));
    margin-top: calc(1.5 * var(--mantine-spacing-xl));
    font-size: calc(2.125rem * 1);
    font-size: var(--mantine-h1-font-size);
    line-height: 1.3;
    line-height: var(--mantine-h1-line-height);
    font-weight: 700;
    font-weight: var(--mantine-h1-font-weight);
  }
  .m_d6493fad :where(h2) {
    margin-top: calc(2rem * 1);
    margin-top: var(--mantine-spacing-xl);
    font-size: calc(1.625rem * 1);
    font-size: var(--mantine-h2-font-size);
    line-height: 1.35;
    line-height: var(--mantine-h2-line-height);
    font-weight: 700;
    font-weight: var(--mantine-h2-font-weight);
  }
  .m_d6493fad :where(h3) {
    margin-top: calc(0.8 * (2rem * 1));
    margin-top: calc(0.8 * calc(2rem * 1));
    margin-top: calc(0.8 * var(--mantine-spacing-xl));
    font-size: calc(1.375rem * 1);
    font-size: var(--mantine-h3-font-size);
    line-height: 1.4;
    line-height: var(--mantine-h3-line-height);
    font-weight: 700;
    font-weight: var(--mantine-h3-font-weight);
  }
  .m_d6493fad :where(h4) {
    margin-top: calc(0.8 * (2rem * 1));
    margin-top: calc(0.8 * calc(2rem * 1));
    margin-top: calc(0.8 * var(--mantine-spacing-xl));
    font-size: calc(1.125rem * 1);
    font-size: var(--mantine-h4-font-size);
    line-height: 1.45;
    line-height: var(--mantine-h4-line-height);
    font-weight: 700;
    font-weight: var(--mantine-h4-font-weight);
  }
  .m_d6493fad :where(h5) {
    margin-top: calc(0.5 * (2rem * 1));
    margin-top: calc(0.5 * calc(2rem * 1));
    margin-top: calc(0.5 * var(--mantine-spacing-xl));
    font-size: calc(1rem * 1);
    font-size: var(--mantine-h5-font-size);
    line-height: 1.5;
    line-height: var(--mantine-h5-line-height);
    font-weight: 700;
    font-weight: var(--mantine-h5-font-weight);
  }
  .m_d6493fad :where(h6) {
    margin-top: calc(0.5 * (2rem * 1));
    margin-top: calc(0.5 * calc(2rem * 1));
    margin-top: calc(0.5 * var(--mantine-spacing-xl));
    font-size: calc(0.875rem * 1);
    font-size: var(--mantine-h6-font-size);
    line-height: 1.5;
    line-height: var(--mantine-h6-line-height);
    font-weight: 700;
    font-weight: var(--mantine-h6-font-weight);
  }
  .m_d6493fad :where(img) {
    max-width: 100%;
    margin-bottom: calc(0.625rem * 1);
    margin-bottom: var(--mantine-spacing-xs);
  }
  .m_d6493fad :where(p) {
    margin-top: 0;
    margin-bottom: calc(1.25rem * 1);
    margin-bottom: var(--mantine-spacing-lg);
  }
  :where([data-mantine-color-scheme='light']) .m_d6493fad :where(mark) {
      background-color: #ffec99;
      background-color: var(--mantine-color-yellow-2);
      color: inherit;
}
  :where([data-mantine-color-scheme='dark']) .m_d6493fad :where(mark) {
      background-color: #fcc419;
      background-color: var(--mantine-color-yellow-5);
      color: #000;
      color: var(--mantine-color-black);
}
  .m_d6493fad :where(a) {
    color: var(--mantine-color-anchor);
    -webkit-text-decoration: none;
    text-decoration: none;
  }
  @media (hover: hover) {
    .m_d6493fad :where(a):hover {
      -webkit-text-decoration: underline;
      text-decoration: underline;
    }
}
  @media (hover: none) {
    .m_d6493fad :where(a):active {
      -webkit-text-decoration: underline;
      text-decoration: underline;
    }
}
  .m_d6493fad :where(hr) {
    margin-top: calc(1rem * 1);
    margin-top: var(--mantine-spacing-md);
    margin-bottom: calc(1rem * 1);
    margin-bottom: var(--mantine-spacing-md);
    border: 0;
    border-top: calc(0.0625rem * 1) solid;
    border-top: calc(0.0625rem * var(--mantine-scale)) solid;
  }
  :where([data-mantine-color-scheme='light']) .m_d6493fad :where(hr) {
      border-color: #dee2e6;
      border-color: var(--mantine-color-gray-3);
}
  :where([data-mantine-color-scheme='dark']) .m_d6493fad :where(hr) {
      border-color: #696969;
      border-color: var(--mantine-color-dark-3);
}
  .m_d6493fad :where(pre) {
    padding: calc(0.625rem * 1);
    padding: var(--mantine-spacing-xs);
    line-height: 1.55;
    line-height: var(--mantine-line-height);
    margin: 0;
    margin-top: calc(1rem * 1);
    margin-top: var(--mantine-spacing-md);
    margin-bottom: calc(1rem * 1);
    margin-bottom: var(--mantine-spacing-md);
    overflow-x: auto;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    Liberation Mono, Courier New, monospace;
    font-family: var(--mantine-font-family-monospace);
    font-size: calc(0.75rem * 1);
    font-size: var(--mantine-font-size-xs);
    border-radius: calc(0.25rem * 1);
    border-radius: var(--mantine-radius-sm);
  }
  :where([data-mantine-color-scheme='light']) .m_d6493fad :where(pre) {
      background-color: #f8f9fa;
      background-color: var(--mantine-color-gray-0);
}
  :where([data-mantine-color-scheme='dark']) .m_d6493fad :where(pre) {
      background-color: #1f1f1f;
      background-color: var(--mantine-color-dark-8);
}
  .m_d6493fad :where(pre) :where(code) {
      background-color: transparent;
      padding: 0;
      border-radius: 0;
      color: inherit;
      border: 0;
    }
  .m_d6493fad :where(kbd) {
    --kbd-fz: calc(0.75rem * var(--mantine-scale));
    --kbd-padding: calc(0.1875rem * var(--mantine-scale)) calc(0.3125rem * var(--mantine-scale));

    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    Liberation Mono, Courier New, monospace;

    font-family: var(--mantine-font-family-monospace);
    line-height: 1.55;
    line-height: var(--mantine-line-height);
    font-weight: 700;
    padding: calc(0.1875rem * 1) calc(0.3125rem * 1);
    padding: var(--kbd-padding);
    font-size: calc(0.75rem * 1);
    font-size: var(--kbd-fz);
    border-radius: calc(0.25rem * 1);
    border-radius: var(--mantine-radius-sm);
    border: calc(0.0625rem * 1) solid;
    border: calc(0.0625rem * var(--mantine-scale)) solid;
    border-bottom-width: calc(0.1875rem * 1);
    border-bottom-width: calc(0.1875rem * var(--mantine-scale));
  }
  :where([data-mantine-color-scheme='light']) .m_d6493fad :where(kbd) {
      border-color: #dee2e6;
      border-color: var(--mantine-color-gray-3);
      color: #495057;
      color: var(--mantine-color-gray-7);
      background-color: #f8f9fa;
      background-color: var(--mantine-color-gray-0);
}
  :where([data-mantine-color-scheme='dark']) .m_d6493fad :where(kbd) {
      border-color: #696969;
      border-color: var(--mantine-color-dark-3);
      color: #c9c9c9;
      color: var(--mantine-color-dark-0);
      background-color: #3b3b3b;
      background-color: var(--mantine-color-dark-5);
}
  .m_d6493fad :where(code) {
    line-height: 1.55;
    line-height: var(--mantine-line-height);
    padding: calc(0.0625rem * 1) calc(0.3125rem * 1);
    padding: calc(0.0625rem * var(--mantine-scale)) calc(0.3125rem * var(--mantine-scale));
    border-radius: calc(0.25rem * 1);
    border-radius: var(--mantine-radius-sm);
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    Liberation Mono, Courier New, monospace;
    font-family: var(--mantine-font-family-monospace);
    font-size: calc(0.75rem * 1);
    font-size: var(--mantine-font-size-xs);
  }
  :where([data-mantine-color-scheme='light']) .m_d6493fad :where(code) {
      background-color: #f8f9fa;
      background-color: var(--mantine-color-gray-0);
      color: #000;
      color: var(--mantine-color-black);
}
  :where([data-mantine-color-scheme='dark']) .m_d6493fad :where(code) {
      background-color: #3b3b3b;
      background-color: var(--mantine-color-dark-5);
      color: #fff;
      color: var(--mantine-color-white);
}
  .m_d6493fad :where(ul, ol):not([data-type='taskList']) {
    margin-bottom: calc(1rem * 1);
    margin-bottom: var(--mantine-spacing-md);
    padding-left: calc(2rem * 1);
    padding-left: var(--mantine-spacing-xl);
    list-style-position: outside;
  }
  .m_d6493fad :where(table) {
    width: 100%;
    border-collapse: collapse;
    caption-side: bottom;
    margin-bottom: calc(1rem * 1);
    margin-bottom: var(--mantine-spacing-md);
  }
  :where([data-mantine-color-scheme='light']) .m_d6493fad :where(table) {
      --table-border-color: var(--mantine-color-gray-3);
}
  :where([data-mantine-color-scheme='dark']) .m_d6493fad :where(table) {
      --table-border-color: var(--mantine-color-dark-4);
}
  .m_d6493fad :where(table) :where(caption) {
      margin-top: calc(0.625rem * 1);
      margin-top: var(--mantine-spacing-xs);
      font-size: calc(0.875rem * 1);
      font-size: var(--mantine-font-size-sm);
      color: var(--mantine-color-dimmed);
    }
  .m_d6493fad :where(table) :where(th) {
      text-align: left;
      font-weight: bold;
      font-size: calc(0.875rem * 1);
      font-size: var(--mantine-font-size-sm);
      padding: calc(0.625rem * 1) calc(0.75rem * 1);
      padding: var(--mantine-spacing-xs) var(--mantine-spacing-sm);
    }
  .m_d6493fad :where(table) :where(thead th) {
      border-bottom: calc(0.0625rem * 1) solid;
      border-bottom: calc(0.0625rem * var(--mantine-scale)) solid;
      border-color: var(--table-border-color);
    }
  .m_d6493fad :where(table) :where(tfoot th) {
      border-top: calc(0.0625rem * 1) solid;
      border-top: calc(0.0625rem * var(--mantine-scale)) solid;
      border-color: var(--table-border-color);
    }
  .m_d6493fad :where(table) :where(td) {
      padding: calc(0.625rem * 1) calc(0.75rem * 1);
      padding: var(--mantine-spacing-xs) var(--mantine-spacing-sm);
      border-bottom: calc(0.0625rem * 1) solid;
      border-bottom: calc(0.0625rem * var(--mantine-scale)) solid;
      border-color: var(--table-border-color);
      font-size: calc(0.875rem * 1);
      font-size: var(--mantine-font-size-sm);
    }
  .m_d6493fad :where(table) :where(tr:last-of-type td) {
      border-bottom: 0;
    }
  .m_d6493fad :where(blockquote) {
    font-size: calc(1.125rem * 1);
    font-size: var(--mantine-font-size-lg);
    line-height: 1.55;
    line-height: var(--mantine-line-height);
    margin: calc(1rem * 1) 0;
    margin: var(--mantine-spacing-md) 0;
    border-radius: calc(0.25rem * 1);
    border-radius: var(--mantine-radius-sm);
    padding: calc(1rem * 1) calc(1.25rem * 1);
    padding: var(--mantine-spacing-md) var(--mantine-spacing-lg);
  }
  :where([data-mantine-color-scheme='light']) .m_d6493fad :where(blockquote) {
      background-color: #f8f9fa;
      background-color: var(--mantine-color-gray-0);
}
  :where([data-mantine-color-scheme='dark']) .m_d6493fad :where(blockquote) {
      background-color: #1f1f1f;
      background-color: var(--mantine-color-dark-8);
}
`,""]);let c=n}}]);