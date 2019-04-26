const ReferenceService = require('../services/ReferenceService');

module.exports = {
    add(req, res, next) {
        ReferenceService.create(req.body)
            .then(result => {
                res.json(result);
            })
            .catch(err => {
                res.json(err.message);
            });
    },
    select(req, res, next) {
        ReferenceService.select(req.params.id)
            .then(result => {
                res.json(result);
            })
            .catch(err => {
                res.json(err.message);
            });
    },
    update(req, res, next) {
        ReferenceService.update(req.params.id, req.body)
            .then(result => {
                res.json(result);
            })
            .catch(err => {
                res.json(err.message);
            });
    },
    delete(req, res, next) {
        ReferenceService.delete(req.params.id)
            .then(result => {
                res.json(result);
            })
            .catch(err => {
                res.json(err.message);
            });
    },
    search(req, res, next) {
        ReferenceService.search(req.body)
            .then(result => {
                res.json(result);
            })
            .catch(err => {
                res.json(err.message);
            });
    }
};
