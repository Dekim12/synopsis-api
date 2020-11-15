import * as mongoose from 'mongoose';

const ObservedFileSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    pathToFile: {
      type: String,
      required: true,
    },
    changes: {
      type: Object,
      required: true,
    },
  },
  { versionKey: false }
);

export const ObservedFile = mongoose.model('ObservedFile', ObservedFileSchema);
