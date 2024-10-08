import Joi from "joi";

export const LoginFormSchema = Joi.object({
  email: Joi.string().email({ tlds: false }).required().messages({
    "string.empty": "Este campo es requerido",
    "any.required": "Este campo es requerido",
  }).allow("admin@admin"),
  password: Joi.string().required().messages({
    "string.empty": "Este campo es requerido",
    "any.required": "Este campo es requerido",
  }),
});
