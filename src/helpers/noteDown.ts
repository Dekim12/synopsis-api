import * as fs from 'fs';
import { promisify } from 'util';

import { filesServices } from '../resources/files';

const readFile = promisify(fs.readFile);

export const noteDown = async (
  pathToFile: string,
  fileName: string,
  changeType: string
): Promise<void> => {
  try {
    const fileContent = await readFile(pathToFile, 'utf-8');

    await filesServices.noteObservedFile(fileName, pathToFile, changeType, fileContent);

    console.log('Changes have been noted');
  } catch (e) {
    throw new Error("Haven't noted changes" + e);
  }
};
