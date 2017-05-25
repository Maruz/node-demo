module.exports = function(req, res, next) {
  console.log('req at', req.originalUrl);
  console.log('handles at', new Date());
  next();
}
