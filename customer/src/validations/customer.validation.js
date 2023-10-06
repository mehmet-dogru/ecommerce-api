const Joi = require("joi");
const pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

const stringPassswordError = new Error(
  "Parolanız güçlü değil! En az bir büyük harf olmalıdır." +
    " En az bir küçük harf olmalıdır." +
    " En az bir rakam olmalıdır. En bir özel karakter olmalıdır." +
    "Şifreniz en az sekiz karakter uzunluğunda olmalıdır."
);

const registerSchema = Joi.object().keys({
  email: Joi.string().required().email().messages({
    "string.base": `Email alanı String bir değer olmalıdır!`,
    "string.empty": `Email alanı boş bırakılamaz!`,
    "any.required": `Email alanı boş bırakılamaz!`,
    "string.email": `Lütfen geçerli bir email giriniz!`,
  }),
  password: Joi.string().regex(RegExp(pattern)).error(stringPassswordError).required().messages({
    "string.base": `Şifre alanı String bir değer olmalıdır!`,
    "string.empty": `Şifre alanı boş bırakılamaz!`,
    "any.required": `Şifre alanı boş bırakılamaz!`,
  }),
  passwordConfirm: Joi.any().valid(Joi.ref("password")).required().label("Confirm password").messages({ "any.only": "Şifre aynı değil" }),
  phone: Joi.string().required(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.base": `Email alanı String bir değer olmalıdır!`,
    "string.empty": `Email alanı boş bırakılamaz!`,
    "any.required": `Email alanı zorunludur!`,
    "string.email": `Lütfen geçerli bir email giriniz!`,
  }),
  password: Joi.string().required().messages({
    "string.empty": `Şifre alanı boş bırakılamaz!`,
    "any.required": `Şifre alanı zorunludur!`,
  }),
});

const updateSchema = Joi.object({
  password: Joi.string().regex(RegExp(pattern)).error(stringPassswordError),
});

module.exports = { registerSchema, loginSchema, updateSchema };
