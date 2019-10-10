import * as express from 'express';
import controller from '../controller/scgController';

// =======================
// Router
// =======================
export const router = express.Router();

router.post('/assignment2', assignment2);

async function assignment2(req, res, next) {
  
  const result = await controller.assignment2();    
  next([result, 200]);
  
}