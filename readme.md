# CoderDojo Linz Website

## Introduction

This repository contains the source code for the website of [CoderDojo Linz](https://linz.coderdojo.net). It is built with [Hugo](https://gohugo.io) (v0.136.5).

## A guide to contribution

### Branches

* The source code of the website is in the [*develop*](https://github.com/coderdojo-linz/coderdojo-linz.github.io/tree/develop) branch.
* The [*master*](https://github.com/coderdojo-linz/coderdojo-linz.github.io/tree/master) branch contains the built static website. This branch is used by GitHub Pages.
* If you would like to develop new features, create a feature branch from *develop* and create a pull request when you are done.

### Developing with Hugo

Download version **v0.136.5** (extended) for your device from the [Hugo GitHub releases page](https://github.com/gohugoio/hugo/releases/tag/v0.136.5)

After cloning, use `npm install` to install the dependencies and `hugo` to build the page to the `public/` folder. Use `npm run server` to start a local dev server at `http://localhost:1313/`

## DNS

* The website is made available by GitHub Pages at [https://coderdojo-linz.github.io](https://coderdojo-linz.github.io). This is **not** our official DNS name. We used it in the past and it exists because of historical reasons.
* We run an *Azure CDN* on top of GitHub Pages serving [https://linz.coderdojo.net](https://linz.coderdojo.net). This **is our official** DNS name.
