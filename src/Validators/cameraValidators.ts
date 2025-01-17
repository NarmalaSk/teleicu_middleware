import { body, query } from "express-validator";

export const baseCameraParamsValidators = [
  body("hostname")
    .exists({ checkFalsy: true })
    .withMessage("hostname is required.")
    .isString()
    .withMessage("hostname must be string."),
  body("username")
    .exists({ checkFalsy: true })
    .withMessage("username is required.")
    .isString()
    .withMessage("username must be string."),
  body("password")
    .exists({ checkFalsy: true })
    .withMessage("password is required.")
    .isString()
    .withMessage("password must be string."),
  body("port")
    .exists({ checkFalsy: true })
    .withMessage("port is required.")
    .isInt()
    .withMessage("port must be integer."),
];

export const baseGetCameraParamsValidators = [
  query("hostname")
    .exists({ checkFalsy: true })
    .withMessage("hostname is required.")
    .isString()
    .withMessage("hostname must be string."),
  query("username")
    .exists({ checkFalsy: true })
    .withMessage("username is required.")
    .isString()
    .withMessage("username must be string."),
  query("password")
    .exists({ checkFalsy: true })
    .withMessage("password is required.")
    .isString()
    .withMessage("password must be string."),
  query("port")
    .exists({ checkFalsy: true })
    .withMessage("port is required.")
    .isInt()
    .withMessage("port must be integer."),
];

export const gotoPresetValidator = [
  ...baseCameraParamsValidators,
  body("preset")
    .exists({ checkFalsy: true })
    .withMessage("preset is required.")
    .isInt()
    .withMessage("preset must be integer."),
];

export const setPresetValidators = [
  ...baseCameraParamsValidators,
  body("presetName")
    .exists({ checkFalsy: true })
    .withMessage("presetName is required.")
    .isString()
    .withMessage("presetName must be string.")
    .isLength({ max: 20, min: 1 })
    .withMessage("presetName must be 1 to 20 character long."),
];

export const boundaryValidator = [
  body("boundary")
    .optional()
    .isObject()
    .withMessage("boundary must be an object."),

  body("boundary.x0")
    .if(body("boundary").exists())
    .exists({ checkNull: true })
    .withMessage("boundary.x0 is required.")
    .isFloat()
    .withMessage("boundary.x0 must be a number."),

  body("boundary.x1")
    .if(body("boundary").exists())
    .exists({ checkNull: true })
    .withMessage("boundary.x1 is required.")
    .isFloat()
    .withMessage("boundary.x1 must be a number."),

  body("boundary.y0")
    .if(body("boundary").exists())
    .exists({ checkNull: true })
    .withMessage("boundary.y0 is required.")
    .isFloat()
    .withMessage("boundary.y0 must be a number."),

  body("boundary.y1")
    .if(body("boundary").exists())
    .exists({ checkNull: true })
    .withMessage("boundary.y1 is required.")
    .isFloat()
    .withMessage("boundary.y1 must be a number."),
];

export const camMoveValidator = [
  ...baseCameraParamsValidators,
  body("x")
    .exists({ checkNull: true })
    .withMessage("x is required.")
    .isFloat({ max: 1, min: -1 })
    .withMessage("x must be integer."),
  body("y")
    .exists({ checkNull: true })
    .withMessage("y is required.")
    .isFloat({ max: 1, min: -1 })
    .withMessage("y must be number."),
  body("zoom")
    .exists({ checkNull: true })
    .withMessage("zoom is required.")
    .isFloat({ max: 1, min: -1 })
    .withMessage("zoom must be number."),
  ...boundaryValidator,
];
