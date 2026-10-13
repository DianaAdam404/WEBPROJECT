import express from 'express';
import TermekController from '../controllers/termekController.js';
var router = express.Router();

/* GET users listing. */
router.get('/', TermekController.getAll);



export default router;
