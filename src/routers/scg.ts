import * as express from 'express';
import controller from '../controller/scgController';

// =======================
// Router
// =======================
export const router = express.Router();

router.post('/assignment2', assignment2);
router.post('/resturant', resturant);

async function assignment2(req, res, next) {
  
  const result = await controller.findXYZValue();    
  next([result, 200]);
  
}

async function resturant(req, res, next) {
  
  const result = await controller.findPlace('Bangsue Bangkok');    
  next([result, 200]);
  
}