import * as fs from 'fs';
import * as path from 'path';
import { promisify } from 'util';

const access = promisify(fs.access);

export const validatePath = async (observedPath: string): Promise<void> => {
  const isAbsolute = path.isAbsolute(observedPath);

  if (!isAbsolute) {
    throw new Error(`Path ${observedPath} isn't absolute`);
  }

  access(observedPath, fs.constants.R_OK);
};
