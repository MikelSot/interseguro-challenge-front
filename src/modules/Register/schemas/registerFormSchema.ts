import Joi from "joi";

export const RegisterFormSchema = Joi.object({
  firstname: Joi.string().required().messages({
    "string.empty": "Este campo es requerido",
    "any.required": "Este campo es requerido",
  }),
  lastname: Joi.string().required().messages({
    "string.empty": "Este campo es requerido",
    "any.required": "Este campo es requerido",
  }),
  email: Joi.string().email({ tlds: false }).required().messages({
    "string.empty": "Este campo es requerido",
    "string.email": "Debes introducir un email valido",
    "any.required": "Este campo es requerido",
  }),
  password: Joi.string().required().min(6).messages({
    "string.empty": "Este campo es requerido",
    "any.required": "Este campo es requerido",
    "string.min": "La contraseña es muy corta",
  }),
  confirmedPassword: Joi.string()
    .required()
    .valid(Joi.ref("password"))
    .messages({
      "string.empty": "Este campo es requerido",
      "any.required": "Este campo es requerido",
      "any.only": "Ambas contraseñas deben ser iguales",
    }),
});
