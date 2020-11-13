import * as mongoose from 'mongoose';

export const connectToDb = (dbConnectionUrl: string): void => {
  mongoose.connect(dbConnectionUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const db = mongoose.connection;

  db.once('open', async () => {
    console.log('Connected to DB')
  }).on('error', () => console.log('connection error:'));
};
