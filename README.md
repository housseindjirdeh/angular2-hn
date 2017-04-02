<p align="center">
  <a href="https://angular2-hn.firebaseapp.com">
    <img alt="Angular 2 HN" title="Angular 2 HN" src="http://i.imgur.com/J303pQ4.png" width="150">
  </a>
</p>

<p align="center">
  A progressive Hacker News client built with Angular
</p>

<p align="center">
  <a href="https://angular2-hn.firebaseapp.com">View App</a>
</p>

<p align="center">
  <a href="/CONTRIBUTING.md"><img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg"></a>
  <a href="https://travis-ci.org/housseindjirdeh/angular2-hn"><img alt="Build Status" src="https://travis-ci.org/housseindjirdeh/angular2-hn.svg?branch=master"></a>
</p>

---

:zap: **Fast:** Service Worker App Shell + Dynamic Content model to achieve faster load times with and without a network.

:iphone: **Responsive:** Completely responsive UI that can be installed to your mobile home screen to provide a native feel.

:rocket: **Progressive:** [Lighthouse](https://github.com/GoogleChrome/lighthouse) score of 100/100.

<p align="center">
  <img src = "http://i.imgur.com/fzJzLFO.png" width=500>
</p>

## Mobile Preview

<p align="center">
  <img src = "http://i.imgur.com/ZloA1hn.gif">
</p>

## Laptop Preview

<p align="center">
  <img src = "http://i.imgur.com/MrKHaln.gif">
</p>

## Offline Support

This app uses a Service Worker to load quickly and work offline.

* [`sw-precache`](https://github.com/GoogleChrome/sw-precache) is used to serve local static resources (App Shell) cache first.
* [`sw-toolbox`](https://github.com/GoogleChrome/sw-toolbox) is used to handle requests using the `networkFirst` strategy. If a request fails, the app will fulfill the request from the cache. This means previously loaded pages will now work offline.

## Manifest

With Chromium based browsers for Android (Chrome, Opera, etc...), Angular 2 HN includes a Web App Manifest that allows you to install to your homescreen.

<p align="center">
  <img src = "http://i.imgur.com/1RaaNkr.png">
</p>

## Themes

Built in theme engine!

Current themes:
* Default
* Night
* Black (AMOLED)

More to come!

## Possible areas of improvement

 - Realtime updating
 - Server side rendering (Angular Universal?)

Feel free to send me feedback on [twitter](https://twitter.com/hdjirdeh) or [file an issue](https://github.com/hdjirdeh/angular2-hn/issues/new)! Feature requests are always welcome.

## Build process

 - Clone or download the repo
 - If you don't have Angular CLI installed: `npm install -g angular-cli@latest`
 - `ng init`
 - Input `n` for each file to not overwrite any file changes
 - `ng serve` will kick off the server at `http://localhost:4200/`. Any changes you do to the source files should automatically reload the app
 - `ng serve --prod --aot` will kick off a production build with uglifying, tree-shaking and Ahead-of-Time compilation

Click [here](https://cli.angular.io/) to see a full list of what you can do with Angular CLI.

Note: Any Service Worker changes will not be reflected when you run the application locally in development. To test service worker changes:
 - `ng build --prod --aot` to kick off a fresh build and update the `dist/` directory
 - `npm run precache` to generate the service worker file
 - `npm run static-serve` to load the application along with the service worker asset using [live-server](https://github.com/tapio/live-server)

## Contributors

A million thanks to some awesome people :)

* [Ashwin Sureshkumar](https://github.com/ashwin-sureshkumar)
* [Mateusz](https://github.com/mateuszwitkowski)
* [Jordi Collell](https://github.com/jordic)
* [Ben Brooks](https://github.com/bbrks)
* [Zach Berger](https://github.com/zachberger)
* [blAck PR](https://github.com/blackpr)
* [Bram Borggreve](https://github.com/beeman)
