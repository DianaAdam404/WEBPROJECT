import express from 'express';
import RendelesController from '../controllers/rendelesController.js'
var router = express.Router();

/* GET users listing. */
router.get('/', RendelesController.getAll);



export default router;
