import { celebrate, Joi, Segments } from 'celebrate'
import { RequestHandler } from 'express'

class OngValidator {
  store (): RequestHandler {
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
      })
    })
  }
}

export default new OngValidator()
