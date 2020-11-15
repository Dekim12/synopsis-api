import Application, { AppOptions, AppInterface } from './app';
import { PORT, DB_CONNECTION_URL, PATH_TO_OBSERVE } from './common/config';

import { validatePath } from './helpers';

// Path to notes
// /Users/siarhei/work/myProjects/synopsis-api/notes.txt

const options: AppOptions = {
  host: 'localhost',
  port: PORT,
  dbConnectionUrl: DB_CONNECTION_URL,
  path: PATH_TO_OBSERVE,
};

const app: AppInterface = new Application(options);

validatePath(PATH_TO_OBSERVE)
  .then(() => app.run())
  .catch((err) => {
    console.error(err?.message || "File or directory doesn't exist");

    process.exit(1);
  });
