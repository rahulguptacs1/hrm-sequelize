const Joi = require("@hapi/joi");
const authSchema = Joi.object({
  empId: Joi.required(),
  username: Joi.string().required(),
  password: Joi.string().min(2).required(),
  role: Joi.allow(),
});

module.exports = {
  authSchema,
};
