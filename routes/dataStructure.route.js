"use strict";
const {BASE_URI} = require("./../config/env");
const tryCatchWrapper = require("./../helpers/tryCatchWrapper"),
  {ds} = require("./../dataStructure/");
const ENDPOINT = `${BASE_URI}`;
console.log("== |=| ==",ENDPOINT)
module.exports = (route) => {
    route.get(`${ENDPOINT}test`, (req, res, next) => {
        res.status(200).json({
            statusCode: 200,
            message: "Welcome to the good life"
        })
    }),
    route.get(`${ENDPOINT}ds/all`, tryCatchWrapper(ds))
}