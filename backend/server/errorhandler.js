const errorHandler = require('errorhandler');

module.exports = (app, isProduction) => {
    if(!isProduction) {
        app.use((err, req, res) => {
            res.status(err.status || 500);

            res.json({
                erros: {
                    message: err.message,
                    error: err,
                }
            });
        });
    }

    app.use((err, req, res) => {
        res.status(err.status || 500);

        res.json({
            errors: {
                message: err.message,
                error: {},
            }
        });
    });
};
