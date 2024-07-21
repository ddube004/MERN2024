// Here Zod (schema.parseAsync) Validate the request body data against defined schema.

const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    console.log(err);
    const status = 422; // new line added after explaiing error middleware.
    const message = "Fill the input properly."
    const extraDetails = err.errors[0].message;


    const error = { // new lineafter explaiing error middleware.
        status,
        message,
        extraDetails
    }

    
    // res.status(400).json({ msg: message }); // after explaiing error middleware got comment.
    console.log(error);
    next(error);
  }
};

module.exports = validate;
