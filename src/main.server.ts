import 'zone.js/dist/zone-node';
import { platformServer, renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';
import { AppServerModule } from './app/app.server.module';
import { AppServerModuleNgFactory } from './aot/src/app/app.server.module.ngfactory';
import * as express from 'express';
import { ngExpressEngine } from './express-engine';

enableProdMode();

const app = express();

app.engine('html', ngExpressEngine({
  baseUrl: 'http://localhost:8000',
  bootstrap: [AppServerModuleNgFactory],
}));

app.set('view engine', 'html');
app.set('views', '.')

app.get('/', (req, res) => {
  res.render('index', {req});
});

app.get('/news*', (req, res) => {
  res.render('index', {req});
});

app.get('/newest*', (req, res) => {
  res.render('index', {req});
});

app.get('/show*', (req, res) => {
  res.render('index', {req});
});

app.get('/ask*', (req, res) => {
  res.render('index', {req});
});

app.get('/jobs*', (req, res) => {
  res.render('index', {req});
});

app.get('/item*', (req, res) => {
  res.render('index', {req});
});

app.get('/user*', (req, res) => {
  res.render('index', {req});
});

app.use(express.static('.'));

app.listen(8000,() => {
  console.log('listening...');
});
