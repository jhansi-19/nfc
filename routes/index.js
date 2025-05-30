const express = require('express');
const router = express.Router();
const cardController = require('../controllers/cardController');

router.get('/', cardController.getDetails); // Redirect root to details page
router.get('/details', cardController.getDetails);
router.post('/send-contact', cardController.sendContact);
router.get('/download-vcard', cardController.downloadVCard);

module.exports = router;