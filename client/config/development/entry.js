import { createHistory, useQueries } from 'history';

import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.css';
import '!style-loader!css-loader!font-awesome/css/font-awesome.css';
import 'assets/css/app.scss';

import app from 'client/app';

app(useQueries(createHistory));
