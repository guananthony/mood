const express = require('express');

const captionController = require('../controllers/captionController');

const router = express.Router();

router.get('/', captionController.getCaptions, (req, res) => {
	res.status(200).send(res.locals.captions);
});

router.post('/', captionController.addCaption, (req, res) => {
	res.status(200).send(res.locals.newCaption);
});

// save for later
router.delete('/:id', captionController.deleteCaption, (req, res) => {
	res.status(200).send('Caption deleted successfully.');
});

module.exports = router;
