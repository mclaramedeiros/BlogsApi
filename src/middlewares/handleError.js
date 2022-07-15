const handleError = ({ code, message }, req, res, _next) => {
  res.status(code).json({ message });
};

module.exports = handleError;
