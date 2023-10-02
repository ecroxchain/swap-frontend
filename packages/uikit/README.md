# SECROX UIkit

[![Version](https://img.shields.io/npm/v/@secrox/uikit)](https://www.npmjs.com/package/@secrox/uikit) [![Size](https://img.shields.io/bundlephobia/min/@secrox/uikit)](https://www.npmjs.com/package/@secrox/uikit)

SECROX UIkit is a set of React components and hooks used to build pages on SECROX's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @secrox/uikit`

***Note**: In case you want to use the older version of the SECROX UIkit, you should install @secrox-libs/uikit, instead, but we recommend using the latest version of the UIkit.*


## Setup

### Theme

Before using SECROX UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@secrox/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@secrox/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://secrox.github.io/pancake-uikit/)
