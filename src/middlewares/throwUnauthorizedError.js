const throwUnauthorizedError = (message) => {
  const error = new Error(message);
  error.code = 401;
  throw error;
};

module.exports = throwUnauthorizedError;
