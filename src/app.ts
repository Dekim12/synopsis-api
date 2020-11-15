import * as express from 'express';
import { Server } from 'http';

import { connectToDb } from './db/connection';
import { observePath, handleExceptions } from './helpers';
import { handleErrors } from './middlewares';

export interface AppOptions {
  readonly host: string;
  readonly port: number;
  readonly dbConnectionUrl: string;
  readonly path: string;
}

export interface AppInterface {
  run(): void;
  stop(): void;
}

export default class Application implements AppInterface {
  private server: express.Application;
  private serverInstance: Server;

  constructor(private options: AppOptions) {
    this.server = express();
  }

  private configure(): void {
    connectToDb(this.options.dbConnectionUrl);

    this.server.use(express.json());

    handleErrors(this.server);
  }

  public async run (): Promise<void> {
    const { host, port, path } = this.options;

    handleExceptions();
    observePath(path);
    this.configure();

    this.serverInstance = this.server.listen(port, host, () => {
      console.log(`Server is listening on ${port}`);
    });
  }

  public stop(): void {
    this.serverInstance.close(() => console.log('Server was stopped'));
  }
}
