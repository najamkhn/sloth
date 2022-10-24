import express, { json, urlencoded, static as staticfiles } from 'express';
import { join } from 'path';
import cookieParser from 'cookie-parser';
import { dirname } from './utils/path.js';
import indexRouter from './routes/index.js';

var app = express();
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(staticfiles(join(dirname('.'), 'public')));

app.use('/', indexRouter);

export default app;
