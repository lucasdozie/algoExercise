"use strict";
const {BASE_URI} = require("./../config/env");
const tryCatchWrapper = require("./../helpers/tryCatchWrapper"),
  {algo} = require("./../algo/");
const isAdminMiddleware = require("./../helpers/isAdmin")
const isLoginMiddleware = require("./../helpers/isLogin")
const ENDPOINT = `${BASE_URI}`;
module.exports = (route) => {
    route.get(`${ENDPOINT}test`, (req, res, next) => {
        res.status(200).json({
            statusCode: 200,
            message: "Welcome to the good life"
        })
    }),
    route.get(`${ENDPOINT}algo/`, tryCatchWrapper(algo))
}