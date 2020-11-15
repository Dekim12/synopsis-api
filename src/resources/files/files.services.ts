import { ObservedFile } from '../../db/models';

const prepareToSaving = (name, pathToFile, type, content, prevChanges = {}) => {
  const savingDate = new Date().toUTCString();
  const changes = { ...prevChanges, [savingDate]: { type, content } };

  return {
    name,
    pathToFile,
    changes,
  };
};

export const createObservedFile = async (fileNotes) => ObservedFile.create(fileNotes);

export const updateObservedFile = async (_id, fileNotes) =>
  ObservedFile.updateOne({ _id }, fileNotes);

export const noteObservedFile = async (name, pathToFile, changeType, content) => {
  const file = await ObservedFile.findOne({ name });

  // @ts-ignore
  const prevFileChanges = file ? file.changes : {};
  const fileNotes = prepareToSaving(name, pathToFile, changeType, content, prevFileChanges);

  console.log('------notes', fileNotes);

  if (file) {
    return updateObservedFile(file.id, fileNotes);
  }

  return createObservedFile(fileNotes);
};
