import Joi from '@hapi/joi';

export const newProductValidator = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    brand: Joi.string().min(2).required(),
    price: Joi.number().min(0).required(),
    stock: Joi.number().integer().min(1).required()
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};
