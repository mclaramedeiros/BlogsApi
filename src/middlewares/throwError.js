const throwUnauthorizedError = (message) => {
  const error = new Error(message);
  error.code = 401;
  throw error;
};

const throwNotFoundError = (message) => {
  const error = new Error(message);
  error.code = 404;
  throw error;
};

const throwBadRequestError = (message) => {
  const error = new Error(message);
  error.code = 400;
  throw error;
};

module.exports = { throwUnauthorizedError, throwNotFoundError, throwBadRequestError };
