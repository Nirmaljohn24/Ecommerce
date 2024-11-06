const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`); // Fix the typo: originalUrl
    res.status(404);
    next(error);
  };
  
  const errorHandler = (err, req, res, next) => {
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;
  
    // Handle invalid ObjectId errors (Mongoose CastError)
    if (err.name === "CastError" && err.kind === "ObjectId") {
      message = "Resource Not Found - Invalid ID";
      statusCode = 404;
    }
  
    res.status(statusCode).json({
      message: message,
    });
  };
  
  export { notFound, errorHandler };
  