const handleError = (error, req, res, _next) => {
  console.log(error);
  res.status(error.code || 500).json({ message: error.message });
};

module.exports = handleError;
