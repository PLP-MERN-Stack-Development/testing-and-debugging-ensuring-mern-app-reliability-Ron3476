// simple global error handler
function errorHandler(err, req, res, next) {
  // structured logging could go here (winston)
  console.error(err && err.stack ? err.stack : err);
  const status = err.status || 500;
  res.status(status).json({
    message: err.message || 'Internal Server Error',
    ...(process.env.NODE_ENV !== 'production' && { stack: err.stack })
  });
}
module.exports = errorHandler;
