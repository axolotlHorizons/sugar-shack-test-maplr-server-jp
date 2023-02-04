'use strict';

const addFormats = require('ajv-formats'),
    Ajv = require('ajv'),
    ajv = new Ajv({coerceTypes: true, allowUnionTypes: true});
addFormats(ajv);

module.exports = {
    /**
     * Generates a middleware that handles the validation of the json body according to a schema
     */
    validateJsonBody: (schemaFile) => {
        const schema = require(schemaFile),
            validate = ajv.compile(schema);

        return (req, res, next) => {

            const data = req.body;

            if (!validate(data)) {
                res.status(400).json({error: 'JSON Body no according with schema'});
                return;
            }
            next();
        }
    },
};
