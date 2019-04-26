const express = require('express');
const router = express.Router();
const verifyToken = require('../policies/verifyToken');
const ReferenceController =  require('../controllers/ReferenceController');


router.get('/:id', verifyToken, ReferenceController.select);

router.post('/new', verifyToken, ReferenceController.add);

router.put('/:id', verifyToken, ReferenceController.update);

router.delete('/:id', verifyToken, ReferenceController.delete)

router.post('/search', verifyToken, ReferenceController.search);

module.exports = router;