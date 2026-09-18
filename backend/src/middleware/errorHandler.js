// Centralized Error Handler Middleware

export const notFoundHandler = (req, res, next) => {
  res.status(404).json({
    success: false,
    message: `Endpoint not found: ${req.method} ${req.originalUrl}`,
  });
};

export const errorHandler = (err, req, res, next) => {
  // Always log error internally for debugging
  console.error(`[API Error] ${err.name || 'Error'}: ${err.message}`);
  if (process.env.NODE_ENV === 'development' && err.stack) {
    console.error(err.stack);
  }

  // Handle Mongoose Validation Error
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map((e) => e.message);
    return res.status(400).json({
      success: false,
      message: messages[0] || 'Validation error',
    });
  }

  // Handle SyntaxError / Body-Parser JSON Parsing Error
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({
      success: false,
      message: 'Malformed JSON payload provided.',
    });
  }

  // Default server error - never expose stack trace, DB strings, or sensitive info
  const statusCode = err.statusCode || 500;
  const clientMessage = statusCode === 500
    ? 'Unable to process your request. Please try again later.'
    : err.message || 'An unexpected error occurred.';

  res.status(statusCode).json({
    success: false,
    message: clientMessage,
  });
};

export default errorHandler;
