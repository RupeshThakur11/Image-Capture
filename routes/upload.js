var express = require('express');
var router = express.Router();
const uploadController = require('../controllers/uploadController.js');

/*
 * GET
 */
router.get('/', uploadController.list);

/*
 * GET
 */
router.get('/:id', uploadController.show);

/*
 * POST
 */
router.post('/', uploadController.create);

/*
 * PUT
 */
router.put('/:id', uploadController.update);

/*
 * DELETE
 */
router.delete('/:id', uploadController.remove);

module.exports = router;
