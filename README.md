<img alt="Angular 2 HN" title="Angular 2 HN" src="http://i.imgur.com/92Lll7T.png" width="500">

**A Hacker News client built with [Angular CLI](https://cli.angular.io/), [RxJS](http://reactivex.io/) and [Webpack](https://webpack.github.io/) using it's [Firebase API](https://github.com/HackerNews/API).**

[Live Version](https://angular2-hn.firebaseapp.com)

## Mobile Preview

<p align="center">
  <img src = "http://i.imgur.com/46BnTDt.gif">
</p>

## Laptop Preview

<p align="center">
  <img src = "http://i.imgur.com/UROMS9j.gif">
</p>

## Features

 + Supports display of:
  + [Stories](https://angular2-hn.firebaseapp.com/item/12398451)
  + [Jobs](https://angular2-hn.firebaseapp.com/item/12366966)
  + [User profiles](https://angular2-hn.firebaseapp.com/user/dhouston)
 + Completely responsive UI that provides a native feel regardless of which device you use

## Areas of improvement

 - Comment requests can take a while to load with a large number of comments (>200), this needs to be sped up.
 - Support for polls

Feel free to send me feedback on [twitter](https://twitter.com/hdjirdeh) or [file an issue](https://github.com/hdjirdeh/angular2-hn/issues/new)!

## Build process

 - Clone or download the repo
 - If you don't have Angular CLI installed: `npm install -g angular-cli@webpack`
 - `ng init`
 - Input `n` for each file to not overwrite any file changes
 - `ng serve`
 - `ng serve --prod` will kick off a production build with uglifying and tree-shaking

This will kick off the server at `http://localhost:4200/`. Any changes you do to the source files should automatically reload the app.

Click [here](https://cli.angular.io/) to see a full list of what you can do with Angular CLI.
