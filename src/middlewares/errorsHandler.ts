export const handleErrors = (server) => {
  server.use((req, res, next) => res.status(404).json('Not found'));

  server.use((err, req, res, next) => res.status(500).json('Server Error'));
}