import * as express from 'express';
import controller from '../controller/scgController';

// =======================
// Router
// =======================
export const router = express.Router();

router.post('/find-xyz', findXYZ);
router.post('/resturant', resturant);

async function findXYZ(req, res, next) {
  
  const result = await controller.findXYZValue();    
  next([result, 200]);
  
}

async function resturant(req, res, next) {
  
  const { keyword } = req.body;

  const result = await controller.findPlace(keyword);    
  next([result, 200]);
  
}