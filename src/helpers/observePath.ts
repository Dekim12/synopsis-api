import * as fs from 'fs';

import { noteDown } from '../helpers';

export const observePath = (path: string) => {
  let fsWait = false;

  const watcherCallback = (changeType: string, fileName: string) => {
    if (!fsWait) {
      fsWait = true;

      setTimeout(() => {
        fsWait = false;
      }, 100);

      noteDown(path, fileName, changeType);
    }
  };

  fs.watch(path, watcherCallback);

  console.log(`Start observing ${path}`);
};
