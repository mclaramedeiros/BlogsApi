const handleError = (error, req, res, _next) => {
  console.log(error);
  res.status(error.code).json({ message: error.message });
};

module.exports = handleError;
