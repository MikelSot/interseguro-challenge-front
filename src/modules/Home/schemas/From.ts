import Joi from "joi";

export const MatrixFormSchema = Joi.object({
  columns: Joi.number().required().messages({
    "number.base": "Este campo debe ser un número",
    "number.min": "El número mínimo de columnas es 1",
    "any.required": "Este campo es requerido",
  }),
  rows: Joi.number().required().messages({
    "number.base": "Este campo debe ser un número",
    "number.min": "El número mínimo de columnas es 1",
    "any.required": "Este campo es requerido",
  }),
});
