<img alt="Angular 2 HN" title="Angular 2 HN" src="http://i.imgur.com/92Lll7T.png" width="500">

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](/CONTRIBUTING.md)

**A fast and responsive Hacker News client built with [Angular CLI](https://cli.angular.io/), [RxJS](http://reactivex.io/) and [Webpack](https://webpack.github.io/).**

[Live Version](https://angular2-hn.firebaseapp.com)

## Mobile Preview

<p align="center">
  <img src = "http://i.imgur.com/QvOuDDz.gif">
</p>

## Laptop Preview

<p align="center">
  <img src = "http://i.imgur.com/3gIhXqC.gif">
</p>

## Features

 + Supports display of:
  + [Stories](https://angular2-hn.firebaseapp.com/item/12398451)
  + [Jobs](https://angular2-hn.firebaseapp.com/item/12366966)
  + [User profiles](https://angular2-hn.firebaseapp.com/user/dhouston)
 + Items load with almost half the bandwidth than Hacker News thanks to this [awesome API]
 + Completely responsive UI that provides a native feel regardless of which device you use
 
If you would like to know how I built this app, I wrote a [blog post](http://houssein.me/angular2-hacker-news) explaining each and every step.

## Areas of improvement

 - Realtime updating
 - Progressive web capabilities 

Feel free to send me feedback on [twitter](https://twitter.com/hdjirdeh) or [file an issue](https://github.com/hdjirdeh/angular2-hn/issues/new)! Feature requests are always welcome.

## Build process

 - Clone or download the repo
 - If you don't have Angular CLI installed: `npm install -g angular-cli@latest`
 - `ng init`
 - Input `n` for each file to not overwrite any file changes
 - `ng serve`
 - `ng serve --prod` will kick off a production build with uglifying and tree-shaking

This will kick off the server at `http://localhost:4200/`. Any changes you do to the source files should automatically reload the app.

Click [here](https://cli.angular.io/) to see a full list of what you can do with Angular CLI.
