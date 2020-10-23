"use strict";

const ds = (req, res, next) => {
    console.log("=== req ====",req.query)
}

module.exports = {
    ds
}