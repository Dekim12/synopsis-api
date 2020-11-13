import Application, { AppOptions, AppInterface } from './app';
import { PORT, DB_CONNECTION_URL } from './common/config';

const options: AppOptions = {
  host: 'localhost',
  port: PORT,
  dbConnectionUrl: DB_CONNECTION_URL,
};

const app: AppInterface = new Application(options);

app.run();